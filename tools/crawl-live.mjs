#!/usr/bin/env node

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = path.join(root, 'evidence/live');
const pagesDir = path.join(outputDir, 'pages');
const base = new URL('https://shopcardboardboxes.com/');
const maxUrls = 2000;
const concurrency = 4;

fs.mkdirSync(pagesDir, { recursive: true });

function seedUrls() {
  const urls = new Set([base.href]);
  for (const name of ['post', 'page', 'product', 'category', 'product_cat', 'author']) {
    const xml = fs.readFileSync(path.join(outputDir, `${name}-sitemap.xml`), 'utf8');
    for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.add(match[1].replaceAll('&amp;', '&'));
  }
  const gsc = fs.readFileSync(path.join(root, 'analysis/gsc-pages.csv'), 'utf8').split(/\r?\n/).slice(1);
  for (const line of gsc) {
    if (!line) continue;
    const first = line.startsWith('"') ? line.slice(1, line.indexOf('"', 1)) : line.split(',')[0];
    if (/^https?:\/\//.test(first)) urls.add(first);
  }
  for (const pathname of ['/robots.txt', '/sitemap_index.xml', '/cart/', '/checkout/', '/my-account/', '/?s=cardboard']) {
    urls.add(new URL(pathname, base).href);
  }
  return urls;
}

function normalizable(urlValue) {
  try {
    const url = new URL(urlValue, base);
    if (url.hostname !== base.hostname) return null;
    url.hash = '';
    if (/\/wp-admin(?:\/|$)/.test(url.pathname)) return null;
    if (url.searchParams.has('add-to-cart')) return null;
    if (/\.(?:avif|bmp|css|csv|docx?|eot|gif|ico|jpe?g|js|json|map|mov|mp4|pdf|png|svg|tiff?|ttf|txt|webm|webp|woff2?|xml|zip)$/i.test(url.pathname)) return null;
    return url.href;
  } catch {
    return null;
  }
}

function discoverLinks(html, pageUrl) {
  const found = [];
  for (const match of html.matchAll(/\bhref\s*=\s*(["'])(.*?)\1/gi)) {
    const value = match[2].trim();
    if (!value || /^(?:#|mailto:|tel:|javascript:|data:)/i.test(value)) continue;
    const normalized = normalizable(new URL(value, pageUrl).href);
    if (normalized) found.push(normalized);
  }
  return found;
}

async function fetchWithRedirects(requestedUrl) {
  const redirects = [];
  let current = requestedUrl;
  let response;
  for (let i = 0; i < 10; i += 1) {
    response = await fetch(current, {
      redirect: 'manual',
      signal: AbortSignal.timeout(30000),
      headers: {
        'user-agent': 'ShopCardboardBoxes-Migration-Audit/1.0 (+local read-only migration)',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,text/plain;q=0.8,*/*;q=0.1',
      },
    });
    if (![301, 302, 303, 307, 308].includes(response.status)) break;
    const location = response.headers.get('location');
    if (!location) break;
    const next = new URL(location, current).href;
    redirects.push({ status: response.status, from: current, to: next });
    current = next;
  }
  if (!response) throw new Error('No response received');
  const body = Buffer.from(await response.arrayBuffer());
  return { response, body, finalUrl: current, redirects };
}

function saveBody(requestedUrl, contentType, body) {
  if (!/(?:html|xml|json|text)/i.test(contentType)) return null;
  const digest = crypto.createHash('sha256').update(requestedUrl).digest('hex');
  const filename = `${digest}.body.gz`;
  fs.writeFileSync(path.join(pagesDir, filename), zlib.gzipSync(body, { level: 9 }));
  return `pages/${filename}`;
}

const queue = [...seedUrls()];
const queued = new Set(queue);
const results = [];
let cursor = 0;

async function worker() {
  while (cursor < queue.length && cursor < maxUrls) {
    const index = cursor++;
    const requestedUrl = queue[index];
    const started = Date.now();
    try {
      const { response, body, finalUrl, redirects } = await fetchWithRedirects(requestedUrl);
      const contentType = response.headers.get('content-type') || '';
      const text = /(?:html|xml|json|text)/i.test(contentType) ? body.toString('utf8') : '';
      const bodyFile = saveBody(requestedUrl, contentType, body);
      const headers = Object.fromEntries(response.headers.entries());
      const record = {
        requestedUrl,
        finalUrl,
        status: response.status,
        redirects,
        contentType,
        headers,
        bytes: body.length,
        sha256: crypto.createHash('sha256').update(body).digest('hex'),
        bodyFile,
        elapsedMs: Date.now() - started,
      };
      results[index] = record;
      if (/html/i.test(contentType) && response.status === 200) {
        for (const url of discoverLinks(text, finalUrl)) {
          if (queued.size >= maxUrls || queued.has(url)) continue;
          queued.add(url);
          queue.push(url);
        }
      }
    } catch (error) {
      results[index] = {
        requestedUrl,
        error: error instanceof Error ? error.message : String(error),
        elapsedMs: Date.now() - started,
      };
    }
    if ((index + 1) % 50 === 0) process.stderr.write(`Crawled ${index + 1}/${queue.length}\n`);
  }
}

await Promise.all(Array.from({ length: concurrency }, () => worker()));
const complete = results.filter(Boolean);
fs.writeFileSync(path.join(outputDir, 'crawl-results.json'), JSON.stringify(complete, null, 2));
fs.writeFileSync(path.join(outputDir, 'crawl-urls.txt'), complete.map((item) => item.requestedUrl).join('\n') + '\n');

const statusCounts = {};
for (const item of complete) {
  const key = item.error ? 'error' : String(item.status);
  statusCounts[key] = (statusCounts[key] || 0) + 1;
}
console.log(JSON.stringify({ crawled: complete.length, queued: queue.length, statusCounts }, null, 2));
