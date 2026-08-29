/**
 * Per-URL lastmod dates, taken from git rather than from the clock.
 *
 * A sitemap that stamps today on every URL is noise: Google learns to ignore a
 * lastmod that never disagrees with the build date. So each URL gets the most recent
 * commit that touched something deciding its *content* — its own data file, plus the
 * renderers that shape it. Chrome is deliberately excluded: adding a footer column
 * changes every page's HTML without changing what any of them says, and bumping 289
 * dates for that is exactly the lie this is trying to avoid.
 *
 * Written to a committed JSON file rather than resolved at request time, because a
 * shallow clone on the deploy host has no history to read. If git cannot answer here,
 * the existing file is left alone rather than overwritten with a guess.
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = resolve(root, 'site');
const out = resolve(site, 'src/data/lastmod.json');

const dateOf = (relPath) => {
  try {
    const v = execFileSync('git', ['log', '-1', '--format=%cI', '--', relPath], { cwd: root, encoding: 'utf8' }).trim();
    return v ? v.slice(0, 10) : '';
  } catch { return ''; }
};

/**
 * A shallow clone answers `git log` for every path with the one commit it has, which
 * would stamp the whole sitemap with the deploy date — the exact uniform lastmod this
 * script exists to avoid. The deploy host clones shallowly, so refuse there and let
 * the dates committed from a full checkout stand.
 */
const isShallow = () => {
  try {
    return execFileSync('git', ['rev-parse', '--is-shallow-repository'], { cwd: root, encoding: 'utf8' }).trim() === 'true';
  } catch { return true; }
};

if (!dateOf('site/package.json') || isShallow()) {
  console.log('build-lastmod: no usable git history here, keeping the committed dates');
  process.exit(0);
}

const newest = (...dates) => dates.filter(Boolean).sort().pop() || '';

// Renderers that decide what a page says, as opposed to how the site is dressed.
const PIPELINE = ['enhance', 'repairs', 'blocks', 'configurator', 'extract', 'util']
  .map((n) => dateOf(`site/src/lib/seo/${n}.ts`));
const pipelineDate = newest(...PIPELINE);

const locationFiles = ['states-a', 'states-b', 'states-c', 'states-d', 'cities-a', 'cities-b', 'cities-c', 'cities-d'];
const locationDates = Object.fromEntries(locationFiles.map((f) => [f, dateOf(`site/src/data/seo/locations/${f}.ts`)]));
const routeIndex = JSON.parse(readFileSync(resolve(site, 'src/data/route-index.json'), 'utf8'));
const snapshotDate = dateOf('site/src/data/snapshots');
const metaDate = dateOf('site/src/data/seo/meta-overrides.ts');
const extrasDate = dateOf('site/src/data/seo/product-extras.ts');
const homeDate = dateOf('site/src/lib/seo/render-home.ts');
const catRenderDate = dateOf('site/src/lib/seo/render-category.ts');
const catDataDate = newest(dateOf('site/src/data/seo/categories-core.ts'), dateOf('site/src/data/seo/categories-more.ts'), dateOf('site/src/data/seo/categories-new.ts'));
const resourceDate = dateOf('site/src/data/seo/resources');
const locTemplate = dateOf('site/src/pages/locations/[slug].astro');

// These three are served untouched by the enhancement layer, so a pipeline change
// does not alter a byte of them and must not move their date.
const PROTECTED = new Set(['/refund_returns/', '/terms-conditions/', '/privacy-policy/']);

const map = {};
for (const route of routeIndex) {
  if (route.status !== 200) continue;
  const p = route.path;
  if (PROTECTED.has(p)) map[p] = snapshotDate;
  else if (p === '/') map[p] = newest(snapshotDate, homeDate, pipelineDate);
  else if (p.startsWith('/product/')) map[p] = newest(snapshotDate, metaDate, extrasDate, pipelineDate);
  else if (p.startsWith('/product-category/')) map[p] = newest(snapshotDate, catRenderDate, catDataDate, metaDate, pipelineDate);
  else map[p] = newest(snapshotDate, metaDate, pipelineDate);
}

// Read the slugs from the data files themselves; importing the TypeScript module
// here would need a compile step, and the fallback that guessed export names
// produced camelCase keys that matched no URL.
for (const file of locationFiles) {
  const body = readFileSync(resolve(site, `src/data/seo/locations/${file}.ts`), 'utf8');
  for (const m of body.matchAll(/slug: '([^']+)'/g)) {
    map[`/locations/${m[1]}/`] = newest(locationDates[file], locTemplate, pipelineDate);
  }
}
// Authored categories live outside the snapshot route index, so they need dating here.
for (const file of ['categories-core', 'categories-more', 'categories-new']) {
  const path = resolve(site, `src/data/seo/${file}.ts`);
  if (!existsSync(path)) continue;
  const fileDate = dateOf(`site/src/data/seo/${file}.ts`);
  for (const m of readFileSync(path, 'utf8').matchAll(/path: '(\/product-category\/[^']+)'/g)) {
    if (!map[m[1]]) map[m[1]] = newest(fileDate, catRenderDate, pipelineDate);
  }
}
map['/locations/'] = newest(...Object.values(locationDates), dateOf('site/src/pages/locations/index.astro'));
map['/resources/'] = newest(resourceDate, dateOf('site/src/pages/resources/index.astro'));
const guideTemplate = dateOf('site/src/pages/resources/[slug].astro');
for (const file of readdirSync(resolve(site, 'src/data/seo/resources'))) {
  if (!file.endsWith('.ts')) continue;
  const fileDate = dateOf(`site/src/data/seo/resources/${file}`);
  for (const m of readFileSync(resolve(site, 'src/data/seo/resources', file), 'utf8').matchAll(/slug: '([^']+)'/g)) {
    map[`/resources/${m[1]}/`] = newest(fileDate, guideTemplate);
  }
}
map['/design-your-box/'] = newest(dateOf('site/src/pages/design-your-box.astro'), pipelineDate);
map['/shipping-policy/'] = dateOf('site/src/pages/shipping-policy.astro');

for (const [name] of Object.entries(map)) if (!map[name]) delete map[name];

const previous = existsSync(out) ? JSON.parse(readFileSync(out, 'utf8')) : {};
writeFileSync(out, JSON.stringify(map, null, 0) + '\n');
const changed = Object.keys(map).filter((k) => previous[k] !== map[k]).length;
console.log(`build-lastmod: ${Object.keys(map).length} URLs dated, ${changed} changed since last build`);
