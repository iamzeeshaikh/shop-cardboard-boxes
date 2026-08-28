/**
 * Full-site QA crawl against the local production server.
 * Checks status codes, metadata uniqueness, headings, JSON-LD validity, image alt
 * coverage, internal link integrity, orphan pages and page weight in one pass.
 */
import { writeFileSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const BASE = process.env.QA_BASE || 'http://127.0.0.1:4333';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const sitemapPaths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => match[1].replace('https://shopcardboardboxes.com', ''));

const extra = ['/cart/', '/thank-you/', '/my-account/', '/page/2/', '/author/shanimazhar82gmail-com/', '/this-page-does-not-exist/'];
const queue = [...new Set([...sitemapPaths, ...extra])];

const attr = (html, tag, name) => {
  const re = new RegExp(`<${tag}[^>]*\\b${name}=["']([^"']*)["'][^>]*>`, 'i');
  return re.exec(html)?.[1];
};
const meta = (html, name) => new RegExp(`<meta[^>]*name=["']${name}["'][^>]*content=["']([^"']*)["']`, 'i').exec(html)?.[1];

const pages = [];
const linkGraph = new Map();

for (const path of queue) {
  const response = await fetch(`${BASE}${path}`, { redirect: 'manual' });
  const status = response.status;
  const location = response.headers.get('location');
  const html = status < 300 ? await response.text() : '';

  const jsonLd = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const types = [];
  let jsonLdErrors = 0;
  for (const block of jsonLd) {
    try {
      const parsed = JSON.parse(block);
      const walk = (value) => {
        if (!value || typeof value !== 'object') return;
        if (Array.isArray(value)) return value.forEach(walk);
        if (value['@type']) types.push(Array.isArray(value['@type']) ? value['@type'].join('/') : value['@type']);
        if (value['@graph']) walk(value['@graph']);
      };
      walk(parsed);
    } catch { jsonLdErrors++; }
  }

  const body = html.split('<body')[1] || '';
  const images = [...body.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const emptyAlt = images.filter((tag) => /\salt=""/.test(tag)).length;
  const noAlt = images.filter((tag) => !/\salt=/.test(tag)).length;
  const noDims = images.filter((tag) => !/\swidth=/.test(tag) || !/\sheight=/.test(tag)).length;

  const links = [...new Set([...body.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]))]
    .filter((href) => !href.startsWith('/wp-content/') && !href.startsWith('/wp-includes/') && !href.startsWith('/scb-') && !href.startsWith('/scripts/') && !href.startsWith('/_astro/') && !href.endsWith('.css') && !href.endsWith('.js') && !href.endsWith('.ico') && !href.endsWith('.xml'));
  linkGraph.set(path, links);

  pages.push({
    path,
    status,
    location,
    bytes: html.length,
    title: (/<title>([\s\S]*?)<\/title>/i.exec(html)?.[1] || '').trim(),
    description: meta(html, 'description') || '',
    robots: meta(html, 'robots') || '',
    canonical: attr(html, 'link', 'href') && /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i.exec(html)?.[1] || '',
    h1: [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => m[1].replace(/<[^>]+>/g, '').trim()),
    mains: (body.match(/<main\b/gi) || []).length,
    types: [...new Set(types)],
    jsonLdErrors,
    images: images.length,
    emptyAlt,
    noAlt,
    noDims,
    links,
    forms: (body.match(/<form\b/gi) || []).length,
  });
}

writeFileSync(resolve(root, 'analysis/qa-crawl.json'), JSON.stringify(pages, null, 1));

/* ---------------- report ---------------- */
const ok = pages.filter((page) => page.path !== '/this-page-does-not-exist/');
const line = (label, value) => console.log(`${label.padEnd(42)} ${value}`);

console.log('\n=== STATUS ===');
line('pages crawled', pages.length);
const badStatus = ok.filter((page) => page.status !== 200);
line('non-200 (excluding the 404 probe)', badStatus.length);
badStatus.forEach((page) => console.log(`   ${page.status} ${page.path} -> ${page.location || ''}`));
const probe = pages.find((page) => page.path === '/this-page-does-not-exist/');
line('404 probe returns', probe?.status);

console.log('\n=== METADATA ===');
const titles = new Map();
const descriptions = new Map();
for (const page of ok) {
  titles.set(page.title, [...(titles.get(page.title) || []), page.path]);
  if (page.description) descriptions.set(page.description, [...(descriptions.get(page.description) || []), page.path]);
}
const dupTitles = [...titles].filter(([, paths]) => paths.length > 1);
const dupDescriptions = [...descriptions].filter(([, paths]) => paths.length > 1);
line('missing title', ok.filter((page) => !page.title).length);
line('missing description', ok.filter((page) => !page.description).length);
line('duplicate titles', dupTitles.length);
dupTitles.slice(0, 8).forEach(([title, paths]) => console.log(`   "${title.slice(0, 60)}" × ${paths.length}`));
line('duplicate descriptions', dupDescriptions.length);
dupDescriptions.slice(0, 8).forEach(([, paths]) => console.log(`   ${paths.slice(0, 3).join(' , ')}`));
line('title > 62 chars', ok.filter((page) => page.title.length > 62).length);
line('missing canonical', ok.filter((page) => !page.canonical).length);

console.log('\n=== HEADINGS ===');
line('pages with 0 H1', ok.filter((page) => page.h1.length === 0).length);
ok.filter((page) => page.h1.length === 0).slice(0, 10).forEach((page) => console.log(`   ${page.path}`));
line('pages with >1 H1', ok.filter((page) => page.h1.length > 1).length);
ok.filter((page) => page.h1.length > 1).slice(0, 10).forEach((page) => console.log(`   ${page.path} (${page.h1.length})`));
line('pages with nested <main>', ok.filter((page) => page.mains > 1).length);

console.log('\n=== STRUCTURED DATA ===');
line('JSON-LD parse errors', ok.reduce((sum, page) => sum + page.jsonLdErrors, 0));
line('pages with no JSON-LD', ok.filter((page) => !page.types.length).length);
ok.filter((page) => !page.types.length).slice(0, 10).forEach((page) => console.log(`   ${page.path}`));
const typeCount = {};
ok.forEach((page) => page.types.forEach((type) => { typeCount[type] = (typeCount[type] || 0) + 1; }));
Object.entries(typeCount).sort((a, b) => b[1] - a[1]).forEach(([type, count]) => console.log(`   ${String(count).padStart(4)} ${type}`));

console.log('\n=== IMAGES ===');
line('total images', ok.reduce((sum, page) => sum + page.images, 0));
line('images with no alt attribute', ok.reduce((sum, page) => sum + page.noAlt, 0));
line('images with empty alt', ok.reduce((sum, page) => sum + page.emptyAlt, 0));
line('images missing width/height', ok.reduce((sum, page) => sum + page.noDims, 0));

console.log('\n=== LINKS ===');
const known = new Set(pages.map((page) => page.path));
const broken = new Map();
for (const [from, links] of linkGraph) {
  for (const href of links) {
    const target = href.endsWith('/') ? href : `${href}/`;
    if (!known.has(target) && !known.has(href)) broken.set(href, [...(broken.get(href) || []), from]);
  }
}
line('distinct link targets not crawled', broken.size);
[...broken].slice(0, 25).forEach(([href, sources]) => console.log(`   ${href}  (from ${sources.length}, e.g. ${sources[0]})`));

const inbound = new Map();
for (const [, links] of linkGraph) {
  for (const href of links) {
    const target = href.endsWith('/') ? href : `${href}/`;
    inbound.set(target, (inbound.get(target) || 0) + 1);
  }
}
const orphans = sitemapPaths.filter((path) => path !== '/' && !(inbound.get(path) > 0));
line('sitemap URLs with no internal inbound link', orphans.length);
orphans.slice(0, 20).forEach((path) => console.log(`   ${path}`));

console.log('\n=== WEIGHT ===');
const sorted = [...ok].sort((a, b) => b.bytes - a.bytes);
line('largest page (KB)', Math.round(sorted[0].bytes / 1024) + '  ' + sorted[0].path);
line('median page (KB)', Math.round(sorted[Math.floor(sorted.length / 2)].bytes / 1024));
line('pages over 250 KB', ok.filter((page) => page.bytes > 256000).length);
