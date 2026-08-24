#!/usr/bin/env node
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd().endsWith('/site') ? resolve(process.cwd(), '..') : process.cwd();
const origin = process.env.SCB_PRODUCTION_ORIGIN || 'https://shopcardboardboxes.com';
const authoritativeUrl = `${origin}/sitemap.xml`;
const productionHost = 'shopcardboardboxes.com';
const analysisDir = resolve(root, 'analysis');
const reportsDir = resolve(root, 'reports');
const evidenceDir = resolve(root, 'evidence/live');

const decodeEntities = (value) => value
  .replaceAll('&amp;', '&')
  .replaceAll('&quot;', '"')
  .replaceAll('&#039;', "'")
  .replaceAll('&apos;', "'");
const xmlLocations = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((match) => decodeEntities(match[1].trim()));
const htmlAttribute = (tag, name) => tag.match(new RegExp(`\\s${name}=["']([^"']*)["']`, 'i'))?.[1] || '';
const canonicalFrom = (html) => {
  for (const match of html.matchAll(/<link\b[^>]*>/gi)) {
    if (/\brel=["'][^"']*\bcanonical\b[^"']*["']/i.test(match[0])) return decodeEntities(htmlAttribute(match[0], 'href'));
  }
  return '';
};
const robotsFrom = (html) => {
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    if (/\bname=["']robots["']/i.test(match[0])) return htmlAttribute(match[0], 'content');
  }
  return '';
};
const normalizeUrl = (value) => {
  try {
    const url = new URL(value, origin);
    url.hash = '';
    return url.href;
  } catch { return ''; }
};
const utilityPath = (pathname) => /^\/(?:cart|checkout|my-account|thank-you)(?:\/|$)/i.test(pathname)
  || /^\/(?:wp-admin|wp-json|wp-login\.php)(?:\/|$)/i.test(pathname)
  || /\/(?:feed|comments\/feed)\/?$/i.test(pathname);
const pageLikePath = (pathname) => !/\.[a-z0-9]{2,8}$/i.test(pathname);

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

async function get(url, redirect = 'manual') {
  const response = await fetch(url, { redirect, signal: AbortSignal.timeout(30000), headers: { 'User-Agent': 'SCB-Astro-Sitemap-Audit/1.0' } });
  return { response, body: await response.text() };
}

const { response: sitemapResponse, body: sitemapXml } = await get(authoritativeUrl);
const sitemapUrls = [...new Set(xmlLocations(sitemapXml))];
const sitemapSet = new Set(sitemapUrls.map(normalizeUrl));

const sitemapRows = await pool(sitemapUrls, 16, async (listedUrl) => {
  try {
    const parsed = new URL(listedUrl);
    const { response, body } = await get(listedUrl);
    const canonical = canonicalFrom(body);
    const metaRobots = robotsFrom(body);
    const headerRobots = response.headers.get('x-robots-tag') || '';
    const indexable = !/noindex/i.test(`${metaRobots} ${headerRobots}`);
    return {
      url: listedUrl,
      https: parsed.protocol === 'https:',
      productionHost: parsed.hostname === productionHost,
      trailingSlash: parsed.pathname.endsWith('/'),
      noQueryOrHash: !parsed.search && !parsed.hash,
      status: response.status,
      indexable,
      canonical,
      selfCanonical: normalizeUrl(canonical) === normalizeUrl(listedUrl),
      contentType: response.headers.get('content-type') || '',
      html: body,
    };
  } catch (error) {
    return { url: listedUrl, error: String(error), https: false, productionHost: false, trailingSlash: false, noQueryOrHash: false, status: 0, indexable: false, canonical: '', selfCanonical: false, contentType: '', html: '' };
  }
});

const internalUrls = new Set();
for (const row of sitemapRows) {
  for (const match of row.html.matchAll(/<a\b[^>]*\shref=["']([^"']+)["'][^>]*>/gi)) {
    try {
      const url = new URL(decodeEntities(match[1]), row.url);
      if (url.hostname !== productionHost || url.protocol !== 'https:') continue;
      url.hash = '';
      if (url.searchParams.has('add-to-cart') || url.searchParams.has('s')) continue;
      url.search = '';
      if (!pageLikePath(url.pathname) || utilityPath(url.pathname)) continue;
      internalUrls.add(url.href);
    } catch {}
  }
}

const frozenUrls = new Set();
for (const file of readdirSync(evidenceDir).filter((name) => /-sitemap\d*\.xml$/i.test(name))) {
  for (const value of xmlLocations(readFileSync(resolve(evidenceDir, file), 'utf8'))) {
    try {
      const url = new URL(value);
      if (url.hostname === productionHost) frozenUrls.add(url.href);
    } catch {}
  }
}

const inventory = JSON.parse(readFileSync(resolve(analysisDir, 'url-inventory.json'), 'utf8'));
const gscUrls = new Set(inventory
  .filter((row) => String(row.sources).includes('gsc')
    && Number(row.status) === 200
    && String(row.contentType).toLowerCase().includes('text/html')
    && (Number(row.gscClicks) > 0 || Number(row.gscImpressions) > 0))
  .map((row) => normalizeUrl(row.url))
  .filter(Boolean));
const gmcProducts = JSON.parse(readFileSync(resolve(analysisDir, 'gmc-products.json'), 'utf8'));
const gmcUrls = new Set(gmcProducts.map((row) => normalizeUrl(row.link)).filter(Boolean));

const sources = new Map();
function addSources(values, source) {
  for (const value of values) {
    const normalized = normalizeUrl(value);
    if (!normalized) continue;
    if (!sources.has(normalized)) sources.set(normalized, new Set());
    sources.get(normalized).add(source);
  }
}
addSources(frozenUrls, 'frozen-wordpress-sitemap');
addSources(gscUrls, 'gsc');
addSources(gmcUrls, 'gmc');
addSources(internalUrls, 'internal-production-link');

const missingCandidates = [...sources.keys()].filter((url) => !sitemapSet.has(url));
const reconciliation = await pool(missingCandidates, 12, async (url) => {
  const parsed = new URL(url);
  if (utilityPath(parsed.pathname)) return { url, sources: [...sources.get(url)].sort().join('|'), classification: 'excluded-utility', status: 0, canonical: '', destination: '' };
  try {
    const { response, body } = await get(url);
    const canonical = canonicalFrom(body);
    const location = response.headers.get('location') || '';
    const destination = location ? normalizeUrl(new URL(location, url).href) : '';
    const metaRobots = robotsFrom(body);
    const headerRobots = response.headers.get('x-robots-tag') || '';
    let classification = 'valuable-missing';
    if (response.status >= 300 && response.status < 400 && sitemapSet.has(destination)) classification = 'redirects-to-sitemap-url';
    else if (response.status === 200 && sitemapSet.has(normalizeUrl(canonical))) classification = 'canonical-alias';
    else if (/noindex/i.test(`${metaRobots} ${headerRobots}`)) classification = 'excluded-noindex';
    else if (response.status === 404 || response.status === 410) classification = 'retired-not-found';
    return { url, sources: [...sources.get(url)].sort().join('|'), classification, status: response.status, canonical, destination };
  } catch (error) {
    return { url, sources: [...sources.get(url)].sort().join('|'), classification: 'request-error', status: 0, canonical: '', destination: '', error: String(error) };
  }
});

const robots = await get(`${origin}/robots.txt`);
const oldIndex = await get(`${origin}/sitemap_index.xml`);
const childSitemaps = ['post', 'page', 'product', 'category', 'product_cat', 'author'];
const childResults = await pool(childSitemaps, 6, async (name) => {
  const response = await fetch(`${origin}/${name}-sitemap.xml`, { redirect: 'manual', signal: AbortSignal.timeout(30000) });
  return { url: `${origin}/${name}-sitemap.xml`, status: response.status, location: response.headers.get('location') || '' };
});

const publicRows = sitemapRows.map(({ html, ...row }) => row);
const failures = publicRows.filter((row) => row.status !== 200 || !row.https || !row.productionHost || !row.trailingSlash || !row.noQueryOrHash || !row.indexable || !row.selfCanonical);
const valuableMissing = reconciliation.filter((row) => row.classification === 'valuable-missing' || row.classification === 'request-error');
const expectedRobotsLine = `Sitemap: ${authoritativeUrl}`;
const report = {
  generatedAt: new Date().toISOString(),
  authoritativeUrl,
  summary: {
    sitemapStatus: sitemapResponse.status,
    sitemapUrls: publicRows.length,
    validSitemapUrls: publicRows.length - failures.length,
    sitemapUrlFailures: failures.length,
    frozenWordPressUrls: frozenUrls.size,
    gscHtmlLandingPages: gscUrls.size,
    gmcLandingPages: gmcUrls.size,
    internallyLinkedProductionPages: internalUrls.size,
    reconciliationCandidatesOutsideSitemap: reconciliation.length,
    canonicalAliases: reconciliation.filter((row) => row.classification === 'canonical-alias').length,
    excludedUtilityOrNoindex: reconciliation.filter((row) => /^excluded-/.test(row.classification)).length,
    redirectsOrRetired: reconciliation.filter((row) => /^(?:redirects|retired)/.test(row.classification)).length,
    valuableMissing: valuableMissing.length,
    robotsStatus: robots.response.status,
    robotsReferencesAuthoritativeSitemap: robots.body.split(/\r?\n/).filter((line) => /^Sitemap:/i.test(line.trim())).length === 1 && robots.body.includes(expectedRobotsLine),
    oldIndexStatus: oldIndex.response.status,
    oldIndexLocation: oldIndex.response.headers.get('location') || '',
    retiredChildSitemapsPassing: childResults.filter((row) => row.status === 301 && normalizeUrl(row.location) === authoritativeUrl).length,
  },
  failures,
  valuableMissing,
  reconciliation,
  childSitemaps: childResults,
  sitemapUrls: publicRows,
};

const csv = ['url,status,https,production_host,trailing_slash,indexable,self_canonical,canonical', ...publicRows.map((row) => [
  row.url, row.status, row.https, row.productionHost, row.trailingSlash, row.indexable, row.selfCanonical, row.canonical,
].map((value) => `"${String(value).replaceAll('"', '""')}"`).join(','))].join('\n');
writeFileSync(resolve(analysisDir, 'sitemap-authority-audit.json'), `${JSON.stringify(report, null, 2)}\n`);
writeFileSync(resolve(analysisDir, 'sitemap-authority-audit.csv'), `${csv}\n`);

const markdown = `# Authoritative sitemap audit\n\n- Authoritative sitemap: ${authoritativeUrl}\n- Sitemap response: ${sitemapResponse.status}\n- URLs validated: ${publicRows.length}\n- Fully valid URLs: ${publicRows.length - failures.length}\n- URL validation failures: ${failures.length}\n- Frozen WordPress sitemap URLs compared: ${frozenUrls.size}\n- GSC HTML landing pages compared: ${gscUrls.size}\n- GMC product landing pages compared: ${gmcUrls.size}\n- Internally linked production pages compared: ${internalUrls.size}\n- Valuable original URLs missing: ${valuableMissing.length}\n- robots.txt contains only the authoritative Sitemap line: ${report.summary.robotsReferencesAuthoritativeSitemap ? 'yes' : 'no'}\n- sitemap_index.xml: ${report.summary.oldIndexStatus} → ${report.summary.oldIndexLocation}\n- Retired WordPress child sitemaps redirecting to sitemap.xml: ${report.summary.retiredChildSitemapsPassing}/${childResults.length}\n\n## Valuable missing URLs\n\n${valuableMissing.length ? valuableMissing.map((row) => `- ${row.url} (${row.sources}; ${row.classification})`).join('\n') : 'None.'}\n\nMachine-readable evidence: \`analysis/sitemap-authority-audit.json\` and \`analysis/sitemap-authority-audit.csv\`.\n`;
writeFileSync(resolve(reportsDir, '15-authoritative-sitemap-audit.md'), markdown);

console.log(JSON.stringify(report.summary, null, 2));
if (sitemapResponse.status !== 200 || failures.length || valuableMissing.length || !report.summary.robotsReferencesAuthoritativeSitemap || oldIndex.response.status !== 301 || normalizeUrl(report.summary.oldIndexLocation) !== authoritativeUrl || report.summary.retiredChildSitemapsPassing !== childResults.length) process.exitCode = 1;
