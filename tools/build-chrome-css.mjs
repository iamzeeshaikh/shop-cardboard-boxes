/**
 * Every page snapshot ends with the same twelve inline <style> blocks — 133 KB of
 * theme CSS repeated in the HTML of all 264 routes. Hoisting them into one cacheable
 * stylesheet removes that payload from every document without touching the cascade:
 * the blocks are contiguous, identical, and always in the same order, so the link is
 * emitted in exactly the position they occupied.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = resolve(root, 'site');
const routeIndex = JSON.parse(readFileSync(resolve(site, 'src/data/route-index.json'), 'utf8'));

const load = (path) => {
  const record = routeIndex.find((route) => route.path === path);
  return JSON.parse(readFileSync(resolve(site, 'src/data/snapshots', record.file), 'utf8'));
};

const reference = load('/product-category/cardboard-boxes-by-size-and-shape/');
const blocks = [...reference.stylesHtml.matchAll(/<style[^>]*>[\s\S]*?<\/style>/g)];
const shared = reference.stylesHtml.slice(blocks[2].index, blocks[13].index + blocks[13][0].length);

const everywhere = routeIndex.every((route) => JSON
  .parse(readFileSync(resolve(site, 'src/data/snapshots', route.file), 'utf8'))
  .stylesHtml.includes(shared));
if (!everywhere) {
  console.error('Shared CSS block is not identical on every route — refusing to hoist it.');
  process.exit(1);
}

// Two of the blocks carry a media attribute on the <style> tag itself. Concatenating
// them naively would apply the tablet and mobile overrides at every viewport, which
// collapses the theme's --containerWidth to its mobile value on desktop.
const css = [...shared.matchAll(/<style([^>]*)>([\s\S]*?)<\/style>/g)].map(([, attrs, body]) => {
  const media = /\smedia=["']([^"']+)["']/i.exec(attrs)?.[1];
  if (!media || media.trim().toLowerCase() === 'all') return body;
  return `@media ${media} {\n${body}\n}`;
}).join('\n');
writeFileSync(resolve(site, 'public/scb-chrome.css'), css);
writeFileSync(resolve(site, 'src/data/chrome-css.json'), JSON.stringify({ shared, bytes: css.length }));
console.log(`scb-chrome.css ${css.length} bytes hoisted from ${routeIndex.length} routes`);
