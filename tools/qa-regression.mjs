/**
 * SEO regression test.
 *
 * For every page that has organic visibility, compare what the recovered WordPress
 * snapshot served against what the site serves now. Nothing that Search Console shows
 * as earning impressions may lose its URL, its canonical, its H1, its Product/Offer/
 * rating markup, its images or its indexability.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import http from 'node:http';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = Number(process.env.QA_PORT || 4333);

/**
 * BaseLayout serves noindex on any host that is not the production domain, so the
 * regression check has to present the production Host header. fetch() refuses to set
 * it, so the request goes through node:http directly.
 */
const get = (path) => new Promise((resolvePromise, reject) => {
  const request = http.request(
    { host: '127.0.0.1', port: PORT, path, method: 'GET', headers: { Host: 'shopcardboardboxes.com' } },
    (response) => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', (chunk) => { body += chunk; });
      response.on('end', () => resolvePromise({ status: response.statusCode, headers: response.headers, body }));
    },
  );
  request.on('error', reject);
  request.end();
});
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = resolve(root, 'site');
const routeIndex = JSON.parse(readFileSync(resolve(site, 'src/data/route-index.json'), 'utf8'));

// Pages Search Console recorded at least one impression for, in the last 12 months.
const gsc = readFileSync(resolve(root, 'analysis/gsc2026/Pages.csv'), 'utf8')
  .split('\n').slice(1).filter(Boolean)
  .map((row) => {
    const cells = row.split(',');
    return { path: cells[0].replace('https://shopcardboardboxes.com', ''), impressions: Number(cells[2]) };
  })
  .filter((row) => row.path.startsWith('/') && !row.path.startsWith('/wp-content/'))
  .sort((a, b) => b.impressions - a.impressions);

const snapshotFor = (path) => {
  const record = routeIndex.find((route) => route.path === path);
  if (!record) return undefined;
  return JSON.parse(readFileSync(resolve(site, 'src/data/snapshots', record.file), 'utf8'));
};

const collectTypes = (blocks) => {
  const types = [];
  for (const block of blocks) {
    try {
      const walk = (value) => {
        if (!value || typeof value !== 'object') return;
        if (Array.isArray(value)) return value.forEach(walk);
        if (value['@type']) types.push(Array.isArray(value['@type']) ? value['@type'].join('/') : value['@type']);
        Object.values(value).forEach(walk);
      };
      walk(JSON.parse(block));
    } catch { types.push('PARSE_ERROR'); }
  }
  return types;
};

const offerFields = (blocks) => {
  const found = { price: false, availability: false, aggregateRating: false, review: false, image: false, brand: false, sku: false };
  for (const block of blocks) {
    try {
      const walk = (value) => {
        if (!value || typeof value !== 'object') return;
        if (Array.isArray(value)) return value.forEach(walk);
        for (const key of Object.keys(found)) if (key in value) found[key] = true;
        Object.values(value).forEach(walk);
      };
      walk(JSON.parse(block));
    } catch { /* counted elsewhere */ }
  }
  return found;
};

const failures = [];
const rows = [];

for (const { path, impressions } of gsc) {
  const before = snapshotFor(path);
  const response = await get(path);
  const status = response.status;
  const html = status === 200 ? response.body : '';
  const location = response.headers.location;

  const afterBlocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const beforeTypes = before ? collectTypes(before.jsonLd) : [];
  const afterTypes = collectTypes(afterBlocks);
  const beforeOffers = before ? offerFields(before.jsonLd) : {};
  const afterOffers = offerFields(afterBlocks);

  const beforeH1 = before ? (/<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(before.contentHtml)?.[1] || '').replace(/<[^>]+>/g, '').trim() : '';
  const afterH1 = (/<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(html)?.[1] || '').replace(/<[^>]+>/g, '').trim();
  const afterCanonical = /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i.exec(html)?.[1] || '';
  const afterRobots = /<meta[^>]*name="robots"[^>]*content="([^"]*)"/i.exec(html)?.[1] || '';

  const beforeImages = before ? new Set([...before.contentHtml.matchAll(/<img\b[^>]*\ssrc="([^"]+)"/g)].map((m) => m[1])) : new Set();
  const afterImages = new Set([...html.matchAll(/<img\b[^>]*\ssrc="([^"]+)"/g)].map((m) => m[1]));
  const lostImages = [...beforeImages].filter((src) => !afterImages.has(src));

  const problems = [];
  if (!before) {
    if (status !== 301 && status !== 200) problems.push(`status ${status}`);
  } else {
    if (status !== 200) problems.push(`status ${status} -> ${location}`);
    if (before.canonical && afterCanonical !== before.canonical) problems.push(`canonical ${before.canonical} -> ${afterCanonical}`);
    if (beforeH1 && afterH1 !== beforeH1) problems.push(`h1 "${beforeH1}" -> "${afterH1}"`);
    const beforeIndexable = !String(before.robots).includes('noindex');
    const afterIndexable = !afterRobots.includes('noindex');
    if (beforeIndexable && !afterIndexable) problems.push('became noindex');
    for (const type of new Set(beforeTypes)) {
      if (type !== 'PARSE_ERROR' && !afterTypes.includes(type)) problems.push(`lost schema ${type}`);
    }
    for (const [field, had] of Object.entries(beforeOffers)) {
      if (had && !afterOffers[field]) problems.push(`lost offer field ${field}`);
    }
    if (afterTypes.includes('PARSE_ERROR')) problems.push('json-ld parse error');
    if (lostImages.length) problems.push(`lost ${lostImages.length} images (e.g. ${lostImages[0]})`);
  }

  rows.push({ path, impressions, status, problems });
  if (problems.length) failures.push({ path, impressions, problems });
}

writeFileSync(resolve(root, 'analysis/qa-regression.json'), JSON.stringify(rows, null, 1));

console.log(`checked ${rows.length} pages with Search Console impressions`);
console.log(`  redirected (expected): ${rows.filter((r) => r.status === 301).length}`);
console.log(`  serving 200:           ${rows.filter((r) => r.status === 200).length}`);
console.log(`  regressions:           ${failures.length}`);
failures.slice(0, 40).forEach((f) => console.log(`   ${String(f.impressions).padStart(6)} impr  ${f.path}\n        ${f.problems.join('\n        ')}`));

const top = rows.filter((r) => r.impressions >= 5000);
console.log(`\ntop pages (>=5,000 impressions): ${top.length}, regressions among them: ${top.filter((r) => r.problems.length).length}`);
