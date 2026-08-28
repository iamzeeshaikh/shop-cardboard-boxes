/**
 * Generate a WebP rendition beside every raster image the site actually references.
 * The original JPEG/PNG stays in place and keeps its URL: pages serve the WebP through
 * a <picture><source> so indexed image URLs, Product schema images and Google Images
 * results are untouched, while browsers download roughly a third of the bytes.
 */
import { readFileSync, existsSync, statSync, writeFileSync } from 'node:fs';
import { resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(execFile);
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = resolve(root, 'site');
const routeIndex = JSON.parse(readFileSync(resolve(site, 'src/data/route-index.json'), 'utf8'));

const MIN_BYTES = 5_000;
const referenced = new Set();
for (const route of routeIndex) {
  const snapshot = JSON.parse(readFileSync(resolve(site, 'src/data/snapshots', route.file), 'utf8'));
  for (const match of snapshot.contentHtml.matchAll(/(?:src|srcset)="([^"]+)"/g)) {
    for (const candidate of match[1].split(',')) {
      const url = candidate.trim().split(/\s+/)[0];
      if (/^\/wp-content\/.+\.(jpe?g|png|gif)$/i.test(url)) referenced.add(url);
    }
  }
}

const targets = [];
const collisions = new Map();
for (const url of referenced) {
  const source = resolve(site, 'public', url.slice(1));
  if (!existsSync(source)) continue;
  if (statSync(source).size < MIN_BYTES) continue;
  const webpUrl = url.replace(/\.(jpe?g|png|gif)$/i, '.webp');
  const previous = collisions.get(webpUrl);
  if (previous) { console.warn(`collision skipped: ${url} vs ${previous}`); continue; }
  collisions.set(webpUrl, url);
  targets.push({ url, webpUrl, source, out: resolve(site, 'public', webpUrl.slice(1)) });
}

console.log(`${referenced.size} referenced rasters, ${targets.length} to encode`);

const CONCURRENCY = 8;
let index = 0;
let made = 0;
let skipped = 0;
let saved = 0;
const map = {};

async function worker() {
  while (index < targets.length) {
    const target = targets[index++];
    try {
      if (!existsSync(target.out)) {
        if (extname(target.source).toLowerCase() === '.gif') {
          await run('gif2webp', ['-q', '70', '-m', '6', '-mixed', target.source, '-o', target.out]);
        } else {
          await run('cwebp', ['-quiet', '-q', '78', '-m', '5', '-metadata', 'none', target.source, '-o', target.out]);
        }
        made++;
      } else {
        skipped++;
      }
      const before = statSync(target.source).size;
      const after = statSync(target.out).size;
      // A rendition that is not meaningfully smaller is not worth a second request.
      if (after < before * 0.92) { map[target.url] = target.webpUrl; saved += before - after; }
      if ((made + skipped) % 500 === 0) console.log(`  ${made + skipped}/${targets.length}`);
    } catch (error) {
      console.warn(`failed ${target.url}: ${error instanceof Error ? error.message.split('\n')[0] : error}`);
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));
writeFileSync(resolve(site, 'src/data/webp-map.json'), JSON.stringify(map));
console.log(`encoded ${made}, reused ${skipped}, useful renditions ${Object.keys(map).length}, saved ${(saved / 1048576).toFixed(1)} MB`);
