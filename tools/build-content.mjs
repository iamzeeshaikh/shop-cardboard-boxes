#!/usr/bin/env node

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const analysisDir = path.join(root, 'analysis');
const liveDir = path.join(root, 'evidence/live');
const dataDir = path.join(root, 'site/src/data');
const snapshotDir = path.join(dataDir, 'snapshots');
const httpSnapshotDir = path.join(dataDir, 'http-snapshots');
const publicDir = path.join(root, 'site/public');
const origin = 'https://shopcardboardboxes.com';
const quarantinedPublicArtifacts = [
  'wp-content/uploads/2026/08/56489040.zip',
  'wp-content/themes/rishi/vendor/squizlabs/php_codesniffer',
];

function removeQuarantinedPublicArtifacts() {
  for (const relativePath of quarantinedPublicArtifacts) {
    fs.rmSync(path.join(publicDir, relativePath), { recursive: true, force: true });
  }
}

removeQuarantinedPublicArtifacts();

fs.rmSync(snapshotDir, { recursive: true, force: true });
fs.mkdirSync(snapshotDir, { recursive: true });
fs.rmSync(httpSnapshotDir, { recursive: true, force: true });
fs.mkdirSync(httpSnapshotDir, { recursive: true });

const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const readNdjson = (file) => fs.readFileSync(file, 'utf8').trim().split('\n').filter(Boolean).map(JSON.parse);
const writeJson = (file, value) => fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');

function groupMeta(rows, idField) {
  const result = new Map();
  for (const row of rows) {
    const id = Number(row[idField]);
    if (!result.has(id)) result.set(id, {});
    const values = result.get(id);
    if (values[row.key] === undefined) values[row.key] = row.value;
    else if (Array.isArray(values[row.key])) values[row.key].push(row.value);
    else values[row.key] = [values[row.key], row.value];
  }
  return result;
}

function stripUnsafeHtml(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe\b[^>]*>[\s\S]*?<\/iframe>/gi, '')
    .replace(/\s+on(?:abort|blur|change|click|error|focus|load|mouseover|submit)\s*=\s*(["']).*?\1/gi, '')
    .replace(/javascript:/gi, '');
}

function standardizePhone(value) {
  return String(value ?? '')
    .replace(/\+?1[- .]?929[- .]?2141[- .]?874/g, '+1 (503) 358-0443')
    .replace(/\+?1[- .]?667[- .]?510[- .]?1463/g, '+1 (503) 358-0443')
    .replace(/(?:\+?1\s*)?\(?503\)?(?:%20|[- .])*358[- .]*0443/g, '+1 (503) 358-0443')
    .replace(/tel:\+1 \(503\) 358-0443/gi, 'tel:+15033580443')
    .replace(/(href=["']tel:)[^"']*(["'])/gi, '$1+15033580443$2');
}

function sanitizeRecoveredHtml(value) {
  return String(value ?? '')
    .replace(/<!--[\s\S]*?<\?(?:php|=)[\s\S]*?-->/gi, '')
    .replace(/<\?(?:php|=)[\s\S]*?\?>/gi, '');
}

function localizeHtml(html) {
  return standardizePhone(sanitizeRecoveredHtml(stripUnsafeHtml(html)
    .replaceAll(`href="${origin}"`, 'href="/"')
    .replaceAll(`href='${origin}'`, "href='/'")
    .replaceAll(`${origin}/wp-content/`, '/wp-content/')
    .replaceAll(`${origin}/product/`, '/product/')
    .replaceAll(`${origin}/product-category/`, '/product-category/')
    .replaceAll(`${origin}/`, '/')
    .replaceAll(`//shopcardboardboxes.com/`, '/')
    .replace(/href=(["'])\/cdn-cgi\/l\/email-protection(?:#[^"']*)?\1/gi, 'href="mailto:info@shopcardboardboxes.com"')
    .replace(/<span class="__cf_email__"[^>]*>[\s\S]*?<\/span>/gi, 'info@shopcardboardboxes.com')
    .replace(/<input[^>]+name=["'](?:_wpnonce|woocommerce-login-nonce)["'][^>]*>/gi, '')));
}

function extractFirst(html, regex, fallback = '') {
  const match = html.match(regex);
  return match ? match[1].trim() : fallback;
}

function decodeEntities(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#039;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

function extractSnapshot(html, routePath) {
  const headHtml = extractFirst(html, /<head[^>]*>([\s\S]*?)<\/head>/i);
  const title = decodeEntities(extractFirst(html, /<title>([\s\S]*?)<\/title>/i));
  const description = decodeEntities(extractFirst(html, /<meta\s+name=["']description["'][^>]+content=["']([\s\S]*?)["'][^>]*>/i));
  const canonical = extractFirst(html, /<link\s+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*>/i, `${origin}${routePath}`);
  const robots = decodeEntities(extractFirst(html, /<meta\s+name=["']robots["'][^>]+content=["']([^"']*)["'][^>]*>/i));
  const bodyClass = extractFirst(html, /<body\s+class=["']([^"']*)["'][^>]*>/i);
  const metaTags = [...html.matchAll(/<meta\b[^>]+(?:property|name)=["'](?:og:[^"']+|twitter:[^"']+|google-site-verification)["'][^>]*>/gi)].map((match) => match[0]);
  const jsonLd = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map((match) => match[1].trim());
  const stylesheetLinks = [...headHtml.matchAll(/<link\b[^>]+rel=["']stylesheet["'][^>]*>/gi)].map((match) => match[0]);
  const inlineStyles = [...headHtml.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/gi)].map((match) => match[0]);
  const contentStart = html.indexOf('<div class="site-content"');
  const footerStart = html.indexOf('<footer', Math.max(0, contentStart));
  const bodyEnd = html.lastIndexOf('</body>');
  const end = footerStart > contentStart ? footerStart : bodyEnd;
  const content = contentStart >= 0 && end > contentStart
    ? html.slice(contentStart, end)
    : extractFirst(html, /<body[^>]*>([\s\S]*?)<\/body>/i);
  return {
    path: routePath,
    title,
    description,
    canonical,
    robots,
    bodyClass,
    metaTags: localizeHtml(metaTags.join('\n')),
    stylesHtml: localizeHtml([...stylesheetLinks, ...inlineStyles].join('\n')),
    jsonLd: jsonLd.map(standardizePhone),
    contentHtml: localizeHtml(content),
  };
}

function parseCsvLine(line) {
  const out = [];
  let value = '';
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (quoted && line[i + 1] === '"') { value += '"'; i += 1; }
      else quoted = !quoted;
    } else if (char === ',' && !quoted) { out.push(value); value = ''; }
    else value += char;
  }
  out.push(value);
  return out;
}

const posts = readNdjson(path.join(analysisDir, 'db/posts.ndjson'));
const postMeta = groupMeta(readNdjson(path.join(analysisDir, 'db/postmeta.ndjson')), 'post_id');
const terms = readNdjson(path.join(analysisDir, 'db/terms.ndjson'));
const termMeta = groupMeta(readNdjson(path.join(analysisDir, 'db/termmeta.ndjson')), 'term_id');
const relationships = readNdjson(path.join(analysisDir, 'db/term-relationships.ndjson'));
const comments = readNdjson(path.join(analysisDir, 'db/comments.ndjson'));
const commentMeta = groupMeta(readNdjson(path.join(analysisDir, 'db/commentmeta.ndjson')), 'comment_id');
const gmcRows = readJson(path.join(analysisDir, 'gmc-products.json'));
const disapprovedRows = readJson(path.join(analysisDir, 'gmc-disapproved-products.json'));

const attachments = new Map();
for (const item of posts.filter((post) => post.type === 'attachment')) {
  const meta = postMeta.get(item.id) || {};
  const file = meta._wp_attached_file || '';
  attachments.set(item.id, {
    id: item.id,
    title: item.title,
    alt: meta._wp_attachment_image_alt || '',
    file,
    url: file ? `/wp-content/uploads/${file}` : item.guid.replace(origin, ''),
    mime: meta._wp_attachment_metadata ? undefined : '',
  });
}

const termByTaxonomyId = new Map(terms.map((term) => [term.term_taxonomy_id, term]));
const termsByObject = new Map();
for (const rel of relationships) {
  if (!termsByObject.has(rel.object_id)) termsByObject.set(rel.object_id, []);
  const term = termByTaxonomyId.get(rel.term_taxonomy_id);
  if (term) termsByObject.get(rel.object_id).push(term);
}
const merchantByLink = new Map(gmcRows.map((row) => [new URL(row.link).pathname, row]));
const reviewsByProduct = new Map();
for (const comment of comments.filter((item) => item.approved === '1')) {
  if (!reviewsByProduct.has(comment.post_id)) reviewsByProduct.set(comment.post_id, []);
  reviewsByProduct.get(comment.post_id).push({ ...comment, rating: Number((commentMeta.get(comment.comment_id) || {}).rating || 0) });
}

const products = posts.filter((post) => post.type === 'product' && post.status === 'publish').map((post) => {
  const meta = postMeta.get(post.id) || {};
  const galleryIds = String(meta._product_image_gallery || '').split(',').filter(Boolean).map(Number);
  const featured = attachments.get(Number(meta._thumbnail_id || 0));
  const categoryTerms = (termsByObject.get(post.id) || []).filter((term) => term.taxonomy === 'product_cat');
  const pathname = `/product/${post.slug}/`;
  const merchant = merchantByLink.get(pathname) || {};
  return {
    id: post.id,
    merchantId: merchant.id || `gla_${post.id}`,
    sku: meta._sku || '',
    title: post.title,
    slug: post.slug,
    path: pathname,
    excerpt: sanitizeRecoveredHtml(standardizePhone(post.excerpt)),
    content: sanitizeRecoveredHtml(standardizePhone(post.content)),
    date: post.date,
    modified: post.modified,
    price: meta._price || String(merchant.price || '').replace(/\s+USD$/, ''),
    regularPrice: meta._regular_price || '',
    salePrice: meta._sale_price || '',
    currency: 'USD',
    stockStatus: meta._stock_status || (merchant.availability === 'in stock' ? 'instock' : merchant.availability || ''),
    stock: meta._stock || null,
    featuredImage: featured || (merchant['image link'] ? { url: merchant['image link'].replace(origin, ''), alt: post.title } : null),
    gallery: galleryIds.map((id) => attachments.get(id)).filter(Boolean),
    categories: categoryTerms.map((term) => ({ id: term.term_id, name: term.name, slug: term.slug })),
    seo: {
      title: meta._yoast_wpseo_title || '',
      description: meta._yoast_wpseo_metadesc || '',
      canonical: meta._yoast_wpseo_canonical || '',
      noindex: meta._yoast_wpseo_meta_robots_noindex || '',
    },
    reviews: reviewsByProduct.get(post.id) || [],
    ratingAverage: merchant['rating average'] || '',
    ratingCount: merchant['rating count'] || '',
    gmc: merchant,
    gmcDisapproved: disapprovedRows.some((row) => row.id === (merchant.id || `gla_${post.id}`)),
  };
});

const categories = terms.filter((term) => term.taxonomy === 'product_cat' && term.slug !== 'uncategorized').map((term) => {
  const meta = termMeta.get(term.term_id) || {};
  const image = attachments.get(Number(meta.thumbnail_id || 0));
  return {
    id: term.term_id,
    name: term.name,
    slug: term.slug,
    path: `/product-category/${term.slug}/`,
    description: term.description,
    count: term.count,
    image,
    products: products.filter((product) => product.categories.some((category) => category.id === term.term_id)).map((product) => product.id),
  };
});

const pages = posts.filter((post) => ['page', 'post'].includes(post.type) && post.status === 'publish').map((post) => {
  const meta = postMeta.get(post.id) || {};
  return {
    ...post,
    excerpt: sanitizeRecoveredHtml(standardizePhone(post.excerpt)),
    content: sanitizeRecoveredHtml(standardizePhone(post.content)),
    path: post.id === 41 ? '/' : `/${post.slug}/`,
    seo: {
      title: meta._yoast_wpseo_title || '',
      description: meta._yoast_wpseo_metadesc || '',
      canonical: meta._yoast_wpseo_canonical || '',
      noindex: meta._yoast_wpseo_meta_robots_noindex || '',
    },
  };
});

writeJson(path.join(dataDir, 'products.json'), products);
writeJson(path.join(dataDir, 'categories.json'), categories);
writeJson(path.join(dataDir, 'pages.json'), pages);
writeJson(path.join(dataDir, 'media.json'), [...attachments.values()]);
writeJson(path.join(dataDir, 'merchant-source.json'), gmcRows);
writeJson(path.join(dataDir, 'merchant-disapproved-source.json'), disapprovedRows);
writeJson(path.join(publicDir, 'product-search.json'), products.map((product) => ({
  id: product.id,
  merchantId: product.merchantId,
  title: product.title,
  path: product.path,
  price: product.price,
  image: product.featuredImage?.url || '',
  imageAlt: product.featuredImage?.alt || '',
  categories: product.categories.map((category) => category.name),
})));

const crawl = readJson(path.join(liveDir, 'crawl-results.json'));
const liveHomepage = fs.readFileSync(path.join(liveDir, 'homepage.html'), 'utf8');
const recoveredHeader = liveHomepage.match(/<header id="header"[\s\S]*?<\/header>/i)?.[0];
if (!recoveredHeader) throw new Error('Live site header could not be recovered');
fs.writeFileSync(path.join(dataDir, 'header.html'), `${localizeHtml(recoveredHeader)}\n`);
const recoveredFooter = liveHomepage.match(/<footer class="rishi-footer" id="rishi-footer"[\s\S]*?<\/footer>/i)?.[0];
if (!recoveredFooter) throw new Error('Live site footer could not be recovered');
fs.writeFileSync(path.join(dataDir, 'footer.html'), `${localizeHtml(recoveredFooter)}\n`);
const httpSnapshotIndex = [];
for (const record of crawl) {
  if (!record.bodyFile || !/(?:application\/json|application\/rss\+xml|text\/xml|text\/plain)/i.test(record.contentType || '')) continue;
  const requested = new URL(record.requestedUrl);
  const key = `${requested.pathname}${requested.search}`;
  const filename = `${crypto.createHash('sha256').update(key).digest('hex')}.body`;
  const compressed = fs.readFileSync(path.join(liveDir, record.bodyFile));
  const recoveredBody = zlib.gunzipSync(compressed);
  const normalizedBody = /(?:json|xml|text)/i.test(record.contentType || '')
    ? Buffer.from(sanitizeRecoveredHtml(standardizePhone(recoveredBody.toString('utf8'))))
    : recoveredBody;
  fs.writeFileSync(path.join(httpSnapshotDir, filename), normalizedBody);
  httpSnapshotIndex.push({ key, file: filename, status: record.status, contentType: record.contentType });
}
for (const name of ['post-sitemap.xml', 'page-sitemap.xml', 'product-sitemap.xml', 'category-sitemap.xml', 'product_cat-sitemap.xml', 'author-sitemap.xml']) {
  const key = `/${name}`;
  if (httpSnapshotIndex.some((record) => record.key === key)) continue;
  const filename = `${crypto.createHash('sha256').update(key).digest('hex')}.body`;
  fs.copyFileSync(path.join(liveDir, name), path.join(httpSnapshotDir, filename));
  httpSnapshotIndex.push({ key, file: filename, status: 200, contentType: 'application/xml; charset=UTF-8' });
}
writeJson(path.join(dataDir, 'http-snapshot-index.json'), httpSnapshotIndex);
writeJson(path.join(dataDir, 'redirect-index.json'), crawl.filter((record) => record.redirects?.length).map((record) => {
  const requested = new URL(record.requestedUrl);
  const first = record.redirects[0];
  const target = new URL(first.to);
  return { key: `${requested.pathname}${requested.search}`, status: first.status, location: `${target.pathname}${target.search}` };
}));
const httpSnapshotKeys = new Set(httpSnapshotIndex.map((record) => record.key));
const htmlRecords = crawl.filter((record) => record.status === 200 && /html/i.test(record.contentType) && record.bodyFile);
const byPath = new Map();
for (const record of htmlRecords) {
  const requested = new URL(record.requestedUrl);
  const final = new URL(record.finalUrl || record.requestedUrl);
  if (!byPath.has(final.pathname) || (!requested.search && new URL(byPath.get(final.pathname).requestedUrl).search)) byPath.set(final.pathname, record);
}

const routeIndex = [];
let removedScriptCount = 0;
for (const [routePath, record] of [...byPath.entries()].sort()) {
  const compressed = fs.readFileSync(path.join(liveDir, record.bodyFile));
  const html = zlib.gunzipSync(compressed).toString('utf8');
  removedScriptCount += (html.match(/<script\b/gi) || []).length;
  const snapshot = extractSnapshot(html, routePath);
  const filename = `${crypto.createHash('sha256').update(routePath).digest('hex')}.json`;
  writeJson(path.join(snapshotDir, filename), snapshot);
  routeIndex.push({ path: routePath, file: filename, title: snapshot.title, status: 200, sourceUrl: record.requestedUrl });
}
writeJson(path.join(dataDir, 'route-index.json'), routeIndex);

const gscLines = fs.readFileSync(path.join(analysisDir, 'gsc-pages.csv'), 'utf8').trim().split(/\r?\n/);
const gscHeaders = parseCsvLine(gscLines[0]);
const gsc = new Map(gscLines.slice(1).map((line) => {
  const values = parseCsvLine(line);
  const row = Object.fromEntries(gscHeaders.map((header, index) => [header, values[index] || '']));
  return [row['top pages'], row];
}));
const sitemapUrls = new Set();
for (const name of ['post', 'page', 'product', 'category', 'product_cat', 'author']) {
  const xml = fs.readFileSync(path.join(liveDir, `${name}-sitemap.xml`), 'utf8');
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) sitemapUrls.add(match[1].replaceAll('&amp;', '&'));
}
const crawlByUrl = new Map(crawl.map((record) => [record.requestedUrl, record]));
const internalUrls = new Set(crawl.map((record) => record.requestedUrl));
const allUrls = new Set([...sitemapUrls, ...gsc.keys(), ...internalUrls]);
const inventory = [...allUrls].sort().map((urlValue) => {
  const url = new URL(urlValue);
  const crawlRecord = crawlByUrl.get(urlValue);
  const gscRow = gsc.get(urlValue) || {};
  const localAsset = url.pathname.startsWith('/wp-content/uploads/') && fs.existsSync(path.join(publicDir, url.pathname));
  const finalPath = crawlRecord?.finalUrl ? new URL(crawlRecord.finalUrl).pathname : '';
  const preservedRedirect = Boolean((crawlRecord?.redirects || []).length && byPath.has(finalPath));
  const localRoute = byPath.has(url.pathname) || httpSnapshotKeys.has(`${url.pathname}${url.search}`) || preservedRedirect || url.pathname === '/checkout/' || localAsset || ['/robots.txt', '/sitemap_index.xml'].includes(url.pathname);
  const snapshotFile = routeIndex.find((route) => route.path === url.pathname)?.file;
  const snapshot = snapshotFile ? readJson(path.join(snapshotDir, snapshotFile)) : null;
  return {
    url: urlValue,
    path: url.pathname,
    query: url.search,
    sources: [sitemapUrls.has(urlValue) ? 'sitemap' : '', gsc.has(urlValue) ? 'gsc' : '', internalUrls.has(urlValue) ? 'internal' : ''].filter(Boolean).join('|'),
    status: crawlRecord?.status || '',
    finalUrl: crawlRecord?.finalUrl || '',
    redirectChain: (crawlRecord?.redirects || []).map((item) => `${item.status}:${item.to}`).join(' -> '),
    trailingSlash: url.pathname === '/' || url.pathname.endsWith('/') ? 'yes' : 'no',
    indexability: snapshot?.robots?.toLowerCase().includes('noindex') ? 'noindex' : crawlRecord?.status === 200 ? 'indexable/asset' : 'not-indexable',
    sitemap: sitemapUrls.has(urlValue) ? 'yes' : 'no',
    gscClicks: gscRow.clicks || '',
    gscImpressions: gscRow.impressions || '',
    gscCtr: gscRow.ctr || '',
    gscPosition: gscRow.position || '',
    contentType: crawlRecord?.contentType || '',
    localRepresentation: localRoute ? 'yes' : crawlRecord?.status === 404 ? 'preserved-404' : 'no',
  };
});
writeJson(path.join(analysisDir, 'url-inventory.json'), inventory);
const inventoryHeaders = Object.keys(inventory[0]);
const csvEscape = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;
fs.writeFileSync(path.join(analysisDir, 'url-inventory.csv'), [inventoryHeaders.map(csvEscape).join(','), ...inventory.map((row) => inventoryHeaders.map((key) => csvEscape(row[key])).join(','))].join('\n') + '\n');

for (const name of ['robots.txt', 'sitemap_index.xml', 'post-sitemap.xml', 'page-sitemap.xml', 'product-sitemap.xml', 'category-sitemap.xml', 'product_cat-sitemap.xml', 'author-sitemap.xml']) fs.rmSync(path.join(publicDir, name), { force: true });
removeQuarantinedPublicArtifacts();

const summary = {
  products: products.length,
  categories: categories.length,
  pagesAndPosts: pages.length,
  attachments: attachments.size,
  liveHtmlRoutes: routeIndex.length,
  urlInventory: inventory.length,
  sitemapUrls: sitemapUrls.size,
  gscUrls: gsc.size,
  gscRepresented: inventory.filter((row) => row.sources.includes('gsc') && row.localRepresentation !== 'no').length,
  scriptsRemovedFromSnapshots: removedScriptCount,
  compatibilityResponses: httpSnapshotIndex.length,
};
writeJson(path.join(analysisDir, 'content-build-summary.json'), summary);
console.log(JSON.stringify(summary, null, 2));
