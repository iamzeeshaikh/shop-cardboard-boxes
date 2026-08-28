/**
 * Content hashes for the stylesheets and scripts this project serves under fixed
 * names. Appending the hash as a query string lets them be cached for a year while
 * still updating the moment their content changes — without it, a long cache would
 * strand returning visitors on an old file.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = resolve(root, 'site');

const ASSETS = [
  '/scb-pages.css',
  '/scb-chrome.css',
  '/scb-configurator.css',
  '/scb-configurator.js',
  '/scb-gallery.js',
  '/scripts/site.js',
];

const versions = {};
for (const asset of ASSETS) {
  const file = resolve(site, 'public', asset.slice(1));
  if (!existsSync(file)) { console.warn(`missing: ${asset}`); continue; }
  versions[asset] = createHash('sha1').update(readFileSync(file)).digest('hex').slice(0, 8);
}

writeFileSync(resolve(site, 'src/data/asset-versions.json'), JSON.stringify(versions));
console.log(`hashed ${Object.keys(versions).length} assets`);
