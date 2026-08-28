/**
 * Concatenate each page's stylesheets into one file.
 *
 * The recovered install links 12–34 separate stylesheets per page. Bundling removes
 * that request waterfall from the critical path. Files are concatenated in exactly
 * the order the page listed them, so the cascade is unchanged, and relative url()
 * references are rewritten to absolute paths because the bundle no longer sits in the
 * directory each file came from.
 *
 * Stylesheets nothing on the page uses are dropped here rather than at render time:
 *   roboto.css      106 KB  no element on any page computes to Roboto
 *   joinchat.min.css 20 KB  the plugin's markup appears on zero pages
 *   wp-block-library 128 KB Gutenberg styles; only /cart/ contains a wp-block-* class
 *
 * The three protected policy pages are excluded and keep their original delivery.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve, dirname, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = resolve(root, 'site');
const routeIndex = JSON.parse(readFileSync(resolve(site, 'src/data/route-index.json'), 'utf8'));

const PROTECTED = new Set(['/refund_returns/', '/terms-conditions/', '/privacy-policy/']);
const UNUSED = new Set(['elementor-gf-local-roboto-css', 'joinchat-css']);
const CART_ONLY = new Set(['wp-block-library-css']);
const CART_PATHS = new Set(['/cart/', '/checkout/']);

/** url(...) in a bundled file must resolve from the file's own directory, not the bundle's. */
function absolutiseUrls(css, href) {
  const base = posix.dirname(href);
  return css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (match, quote, url) => {
    const value = url.trim();
    if (!value || value.startsWith('data:') || value.startsWith('http') || value.startsWith('//') || value.startsWith('/') || value.startsWith('#')) return match;
    return `url(${quote}${posix.normalize(posix.join(base, value))}${quote})`;
  });
}

const groups = new Map();
const byPath = {};
let dropped = 0;

for (const route of routeIndex) {
  if (PROTECTED.has(route.path)) continue;
  const snapshot = JSON.parse(readFileSync(resolve(site, 'src/data/snapshots', route.file), 'utf8'));
  const tags = [...snapshot.stylesHtml.matchAll(/<link[^>]*?id=['"]([^'"]*)['"][^>]*?href=['"]([^'"]+)['"][^>]*>/g)];

  const keep = [];
  const external = [];
  for (const [, id, href] of tags) {
    if (UNUSED.has(id)) { dropped++; continue; }
    if (CART_ONLY.has(id) && !CART_PATHS.has(route.path)) { dropped++; continue; }
    const clean = href.split('?')[0];
    if (!clean.startsWith('/')) { external.push(href); continue; }
    if (!existsSync(resolve(site, 'public', clean.slice(1)))) { external.push(href); continue; }
    keep.push(clean);
  }
  if (!keep.length) continue;

  const signature = createHash('sha1').update(keep.join('|')).digest('hex').slice(0, 10);
  if (!groups.has(signature)) groups.set(signature, { files: keep, routes: 0 });
  groups.get(signature).routes++;
  byPath[route.path] = { bundle: `/scb-css/${signature}.css`, external };
}

mkdirSync(resolve(site, 'public/scb-css'), { recursive: true });
let totalBefore = 0;
let totalAfter = 0;

for (const [signature, group] of groups) {
  const parts = group.files.map((href) => {
    const css = readFileSync(resolve(site, 'public', href.slice(1)), 'utf8');
    totalBefore += Buffer.byteLength(css);
    return `/* ${href} */\n${absolutiseUrls(css, href)}`;
  });
  const bundle = parts.join('\n');
  totalAfter += Buffer.byteLength(bundle);
  writeFileSync(resolve(site, `public/scb-css/${signature}.css`), bundle);
}

writeFileSync(resolve(site, 'src/data/css-bundles.json'), JSON.stringify(byPath));

console.log(`${groups.size} bundles for ${Object.keys(byPath).length} routes`);
for (const [signature, group] of [...groups].sort((a, b) => b[1].routes - a[1].routes)) {
  const size = Buffer.byteLength(readFileSync(resolve(site, `public/scb-css/${signature}.css`)));
  console.log(`  ${String(group.routes).padStart(4)} routes  ${String(group.files.length).padStart(2)} files -> 1  ${(size / 1024).toFixed(0).padStart(4)} KB  ${signature}`);
}
console.log(`dropped ${dropped} unused stylesheet links`);
