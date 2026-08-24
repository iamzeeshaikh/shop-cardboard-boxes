#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const root = process.cwd().endsWith('/site') ? resolve(process.cwd(), '..') : process.cwd();
const audit = JSON.parse(readFileSync(resolve(root, 'analysis/local-audit.json'), 'utf8'));
const publicDir = resolve(root, 'site/public');
const results = [];
let cursor = 0;

async function worker() {
  while (cursor < audit.missingAssets.length) {
    const pathname = audit.missingAssets[cursor++];
    const destination = resolve(publicDir, `.${pathname}`);
    if (existsSync(destination)) continue;
    try {
      let response;
      let lastError;
      for (let attempt = 0; attempt < 3; attempt += 1) {
        try {
          response = await fetch(`https://shopcardboardboxes.com${pathname}`);
          break;
        } catch (error) {
          lastError = error;
        }
      }
      if (!response) throw lastError;
      const contentType = response.headers.get('content-type') || '';
      if (!response.ok) {
        results.push({ pathname, status: response.status, sourceBroken: true });
        continue;
      }
      if (!/^(?:text\/css|application\/javascript|font\/|image\/|application\/font)/i.test(contentType)) {
        results.push({ pathname, status: response.status, contentType, rejectedUnexpectedType: true });
        continue;
      }
      const payload = Buffer.from(await response.arrayBuffer());
      mkdirSync(dirname(destination), { recursive: true });
      writeFileSync(destination, payload);
      results.push({ pathname, status: response.status, contentType, bytes: payload.length, recovered: true });
    } catch (error) {
      results.push({ pathname, error: String(error) });
    }
  }
}

await Promise.all(Array.from({ length: 2 }, worker));
results.sort((a, b) => a.pathname.localeCompare(b.pathname));
writeFileSync(resolve(root, 'analysis/live-asset-recovery.json'), `${JSON.stringify(results, null, 2)}\n`);
console.log(JSON.stringify({
  recovered: results.filter((row) => row.recovered).length,
  sourceBroken: results.filter((row) => row.sourceBroken).length,
  errors: results.filter((row) => row.error || row.rejectedUnexpectedType).length,
}, null, 2));
