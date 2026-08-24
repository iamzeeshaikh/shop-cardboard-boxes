#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

const root = process.cwd().endsWith('/site') ? resolve(process.cwd(), '..') : process.cwd();
const site = resolve(root, 'site');
const base = process.env.SCB_AUDIT_BASE_URL || 'http://127.0.0.1:4333';
const routeIndex = JSON.parse(readFileSync(resolve(site, 'src/data/route-index.json'), 'utf8'));
const httpSnapshotIndex = JSON.parse(readFileSync(resolve(site, 'src/data/http-snapshot-index.json'), 'utf8'));
const urlInventory = JSON.parse(readFileSync(resolve(root, 'analysis/url-inventory.json'), 'utf8'));
const snapshotDir = resolve(site, 'src/data/snapshots');
const publicDir = resolve(site, 'public');
const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const get = (html, pattern) => html.match(pattern)?.[1]?.trim() || '';
const normalize = (value) => value.replace(/&amp;/g, '&').replace(/&#039;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
const pathFor = (url) => {
  try { return new URL(url, 'https://shopcardboardboxes.com').pathname; } catch { return ''; }
};

async function pool(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await worker(items[index], index);
    }
  }));
  return results;
}

const routeResults = await pool(routeIndex, 12, async (route) => {
  const snapshot = JSON.parse(readFileSync(resolve(snapshotDir, route.file), 'utf8'));
  try {
    const response = await fetch(new URL(route.path, base), { redirect: 'manual' });
    const html = await response.text();
    const title = get(html, /<title>([\s\S]*?)<\/title>/i);
    const description = get(html, /<meta\s+name="description"[^>]*content="([^"]*)/i);
    const canonical = get(html, /<link\s+rel="canonical"[^>]*href="([^"]*)/i);
    const robots = get(html, /<meta\s+name="robots"[^>]*content="([^"]*)/i);
    return {
      path: route.path,
      status: response.status,
      noindexHeader: response.headers.get('x-robots-tag') || '',
      titleMatch: normalize(title) === normalize(snapshot.title),
      descriptionMatch: normalize(description) === normalize(snapshot.description),
      canonicalMatch: canonical === snapshot.canonical,
      localPreviewNoindex: robots.toLowerCase().includes('noindex') && (response.headers.get('x-robots-tag') || '').toLowerCase().includes('noindex'),
      exactContentSnapshot: html.includes(snapshot.contentHtml),
      exactStyleSnapshot: html.includes(snapshot.stylesHtml),
      structuredDataMatch: snapshot.jsonLd.every((graph) => html.includes(graph)),
      htmlSha256: sha256(html),
      bytes: Buffer.byteLength(html),
    };
  } catch (error) {
    return { path: route.path, error: String(error) };
  }
});

const compatibilityResults = await pool(httpSnapshotIndex, 12, async (record) => {
  const expected = readFileSync(resolve(site, 'src/data/http-snapshots', record.file));
  const response = await fetch(new URL(record.key, base), { redirect: 'manual' });
  const actual = Buffer.from(await response.arrayBuffer());
  return {
    key: record.key,
    status: response.status,
    expectedStatus: record.status,
    statusMatch: response.status === record.status,
    contentTypeMatch: (response.headers.get('content-type') || '') === record.contentType,
    exactBodyMatch: actual.equals(expected),
    localPreviewNoindex: (response.headers.get('x-robots-tag') || '').toLowerCase().includes('noindex'),
  };
});

const assetReferences = new Set(['/scripts/site.js']);
const internalLinks = new Set();

function collectReference(value) {
  if (/^(?:data:|mailto:|tel:|javascript:|#)/i.test(value)) return;
  let parsed;
  try { parsed = new URL(value, 'https://shopcardboardboxes.com'); } catch { return; }
  if (parsed.hostname !== 'shopcardboardboxes.com' && parsed.hostname !== 'www.shopcardboardboxes.com') return;
  const pathname = decodeURIComponent(parsed.pathname);
  if (/\.(?:css|js|jpe?g|png|gif|webp|svg|avif|ico|woff2?|ttf|otf|eot|pdf|mp4|webm)$/i.test(pathname)) assetReferences.add(pathname);
  else internalLinks.add(pathname.endsWith('/') || extname(pathname) ? pathname : `${pathname}/`);
}

function collectMarkupReferences(material) {
  for (const match of material.matchAll(/(?:href|src|poster)=["']([^"']+)["']/gi)) collectReference(match[1]);
  for (const match of material.matchAll(/srcset=["']([^"']+)["']/gi)) {
    for (const candidate of match[1].split(',')) collectReference(candidate.trim().split(/\s+/)[0]);
  }
  for (const match of material.matchAll(/url\(["']?([^)"'?]+)(?:\?[^)"' ]*)?["']?\)/gi)) {
    const pathname = pathFor(match[1]);
    if (pathname.startsWith('/wp-content/')) assetReferences.add(decodeURIComponent(pathname));
  }
}

collectMarkupReferences([
  readFileSync(resolve(site, 'src/data/header.html'), 'utf8'),
  readFileSync(resolve(site, 'src/data/footer.html'), 'utf8'),
].join('\n'));
for (const route of routeIndex) {
  const snapshot = JSON.parse(readFileSync(resolve(snapshotDir, route.file), 'utf8'));
  const material = `${snapshot.metaTags}\n${snapshot.stylesHtml}\n${snapshot.contentHtml}`;
  collectMarkupReferences(material);
  for (const match of material.matchAll(/(?:href|src|poster)=["']([^"']+)["']/gi)) {
    const value = match[1];
    if (/^(?:data:|mailto:|tel:|javascript:|#)/i.test(value)) continue;
    let parsed;
    try { parsed = new URL(value, 'https://shopcardboardboxes.com'); } catch { continue; }
    if (parsed.hostname !== 'shopcardboardboxes.com' && parsed.hostname !== 'www.shopcardboardboxes.com') continue;
    const pathname = decodeURIComponent(parsed.pathname);
    if (/\.(?:css|js|jpe?g|png|gif|webp|svg|avif|ico|woff2?|ttf|otf|eot|pdf|mp4|webm)$/i.test(pathname)) assetReferences.add(pathname);
    else internalLinks.add(pathname.endsWith('/') || extname(pathname) ? pathname : `${pathname}/`);
  }
  for (const match of material.matchAll(/url\(["']?([^)'"?]+)(?:\?[^)'" ]*)?["']?\)/gi)) {
    const pathname = pathFor(match[1]);
    if (pathname.startsWith('/wp-content/')) assetReferences.add(decodeURIComponent(pathname));
  }
}

const missingAssets = [];
for (const pathname of [...assetReferences].sort()) {
  const candidate = resolve(publicDir, `.${pathname}`);
  if (!candidate.startsWith(publicDir) || !existsSync(candidate) || !statSync(candidate).isFile()) missingAssets.push(pathname);
}

const assetHttpResults = await pool([...assetReferences].sort(), 16, async (pathname) => {
  try {
    const response = await fetch(new URL(pathname, base), { redirect: 'manual' });
    return { path: pathname, status: response.status, contentType: response.headers.get('content-type') || '' };
  } catch (error) { return { path: pathname, error: String(error) }; }
});
const assetHttpFailures = assetHttpResults.filter((row) => row.status !== 200 || !row.contentType || /^text\/html/i.test(row.contentType));

const knownPaths = new Set(routeIndex.map((route) => route.path));
const publicLinkPaths = new Set(['/robots.txt', '/sitemap.xml', '/sitemap_index.xml']);
const internalLinkResults = await pool([...internalLinks].sort(), 12, async (pathname) => {
  if (/^\/(?:wp-admin|wp-json|wp-login\.php|feed\/|comments\/feed\/)/i.test(pathname)) return { path: pathname, status: 'wordpress-endpoint-excluded' };
  const local = new URL(pathname, base);
  try {
    const response = await fetch(local, { redirect: 'manual' });
    return { path: pathname, status: response.status, knownSnapshot: knownPaths.has(pathname), publicPath: publicLinkPaths.has(pathname) };
  } catch (error) { return { path: pathname, error: String(error) }; }
});

const sitemapDir = resolve(root, 'evidence/live');
const sitemapFiles = readdirSync(sitemapDir).filter((name) => name === 'sitemap_index.xml' || /-sitemap\d*\.xml$/.test(name));
const sitemapUrls = [];
for (const file of sitemapFiles) {
  const xml = readFileSync(resolve(sitemapDir, file), 'utf8');
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const parsed = new URL(match[1]);
    if (parsed.hostname === 'shopcardboardboxes.com') sitemapUrls.push(parsed.pathname);
  }
}
const sitemapRouteResults = await pool([...new Set(sitemapUrls)], 12, async (pathname) => {
  const response = await fetch(new URL(pathname, base), { redirect: 'manual' });
  return { path: pathname, status: response.status };
});

const prohibitedExtensions = [];
const sensitivePatternFindings = [];
const textExtensions = new Set(['.html', '.js', '.json', '.xml', '.tsv', '.txt']);
const sensitivePattern = /(?:BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY|DB_PASSWORD|AUTH_KEY|SECURE_AUTH_KEY|SMTP_PASSWORD|client_secret\s*[=:])/i;
function scan(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const full = join(directory, entry.name);
    if (entry.isDirectory()) scan(full);
    else {
      const relative = full.slice(publicDir.length + 1);
      if (/\.(?:php\d*|phtml|phar|sql|wpress|bak|backup|pem|key|zip|tar|tgz|gz|7z)$/i.test(entry.name)) prohibitedExtensions.push(relative);
      if (textExtensions.has(extname(entry.name).toLowerCase()) && statSync(full).size < 10_000_000) {
        const contents = readFileSync(full, 'utf8');
        if (sensitivePattern.test(contents)) sensitivePatternFindings.push(relative);
      }
    }
  }
}
scan(publicDir);

const routeFailures = routeResults.filter((row) => row.status !== 200 || !row.titleMatch || !row.descriptionMatch || !row.canonicalMatch || !row.localPreviewNoindex || !row.exactContentSnapshot || !row.exactStyleSnapshot || !row.structuredDataMatch);
const sourceStatusByPath = new Map();
for (const row of urlInventory) {
  sourceStatusByPath.set(row.path, Number(row.status));
  try { sourceStatusByPath.set(decodeURIComponent(row.path), Number(row.status)); } catch {}
}
const sourceBrokenInternalLinks = internalLinkResults.filter((row) => typeof row.status === 'number' && row.status >= 400 && sourceStatusByPath.get(row.path) === 404);
const brokenInternalLinks = internalLinkResults.filter((row) => typeof row.status === 'number' && row.status >= 400 && sourceStatusByPath.get(row.path) !== 404 && !/^\/(?:cart|checkout|my-account)\//.test(row.path));
const brokenSitemapRoutes = sitemapRouteResults.filter((row) => row.status >= 400);
const compatibilityFailures = compatibilityResults.filter((row) => !row.statusMatch || !row.contentTypeMatch || !row.exactBodyMatch || !row.localPreviewNoindex);

const redirectRecords = urlInventory.filter((row) => row.redirectChain).map((row) => {
  const first = row.redirectChain.split(' -> ')[0];
  const separator = first.indexOf(':');
  return { path: `${row.path}${row.query || ''}`, expectedStatus: Number(first.slice(0, separator)), expectedLocation: first.slice(separator + 1) };
});
const redirectResults = await pool(redirectRecords, 12, async (record) => {
  const response = await fetch(new URL(record.path, base), { redirect: 'manual' });
  const location = response.headers.get('location') || '';
  const actualLocation = new URL(location, 'https://shopcardboardboxes.com').pathname;
  const expectedLocation = new URL(record.expectedLocation).pathname;
  return { ...record, status: response.status, location, match: response.status === record.expectedStatus && actualLocation === expectedLocation };
});
const redirectFailures = redirectResults.filter((row) => !row.match);

const gscRows = urlInventory.filter((row) => row.sources.includes('gsc'));
const gscResults = await pool(gscRows, 16, async (row) => {
  const response = await fetch(new URL(`${row.path}${row.query || ''}`, base), { redirect: 'manual' });
  const sourceStatus = Number(row.status);
  const accounted = sourceStatus === 404 ? response.status === 404 : response.status < 400;
  return { url: row.url, sourceStatus, localStatus: response.status, accounted };
});
const gscFailures = gscResults.filter((row) => !row.accounted);

const result = {
  generatedAt: new Date().toISOString(),
  base,
  summary: {
    routesTested: routeResults.length,
    routeFailures: routeFailures.length,
    exactContentMatches: routeResults.filter((row) => row.exactContentSnapshot).length,
    exactStyleMatches: routeResults.filter((row) => row.exactStyleSnapshot).length,
    structuredDataMatches: routeResults.filter((row) => row.structuredDataMatch).length,
    previewNoindexMatches: routeResults.filter((row) => row.localPreviewNoindex).length,
    compatibilityResponsesTested: compatibilityResults.length,
    compatibilityFailures: compatibilityFailures.length,
    redirectsTested: redirectResults.length,
    redirectFailures: redirectFailures.length,
    gscUrlsTested: gscResults.length,
    gscUrlFailures: gscFailures.length,
    sitemapUrlsTested: sitemapRouteResults.length,
    brokenSitemapRoutes: brokenSitemapRoutes.length,
    uniqueAssetReferences: assetReferences.size,
    missingAssets: missingAssets.length,
    assetHttpFailures: assetHttpFailures.length,
    uniqueInternalLinks: internalLinkResults.length,
    brokenInternalLinks: brokenInternalLinks.length,
    sourceBrokenInternalLinks: sourceBrokenInternalLinks.length,
    prohibitedPublicFiles: prohibitedExtensions.length,
    sensitivePublicFiles: sensitivePatternFindings.length,
  },
  routeFailures,
  compatibilityFailures,
  redirectFailures,
  gscFailures,
  missingAssets,
  assetHttpFailures,
  brokenInternalLinks,
  sourceBrokenInternalLinks,
  brokenSitemapRoutes,
  prohibitedExtensions,
  sensitivePatternFindings,
  routes: routeResults,
  compatibilityResponses: compatibilityResults,
  redirects: redirectResults,
  gscUrls: gscResults,
  internalLinks: internalLinkResults,
  sitemapRoutes: sitemapRouteResults,
  assetHttpResults,
};
writeFileSync(resolve(root, 'analysis/local-audit.json'), `${JSON.stringify(result, null, 2)}\n`);
console.log(JSON.stringify(result.summary, null, 2));
if (routeFailures.length || compatibilityFailures.length || redirectFailures.length || gscFailures.length || brokenSitemapRoutes.length || missingAssets.length || assetHttpFailures.length || prohibitedExtensions.length || sensitivePatternFindings.length) process.exitCode = 1;
