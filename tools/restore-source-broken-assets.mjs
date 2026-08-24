#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'site/public');
const recovery = JSON.parse(fs.readFileSync(path.join(root, 'analysis/live-asset-recovery.json'), 'utf8'));
const restored = [];

for (const record of recovery.filter((item) => item.sourceBroken)) {
  const target = path.join(publicDir, record.pathname);
  if (fs.existsSync(target)) continue;
  const sourcePathname = record.pathname.replace(/-(?:1|2)-300x300(?=\.[^.]+$)/, '-300x300');
  const source = path.join(publicDir, sourcePathname);
  if (!fs.existsSync(source)) throw new Error(`Recovered source asset missing for ${record.pathname}: ${sourcePathname}`);
  fs.copyFileSync(source, target);
  restored.push({ target: record.pathname, source: sourcePathname });
}

fs.writeFileSync(path.join(root, 'analysis/source-broken-asset-repairs.json'), `${JSON.stringify(restored, null, 2)}\n`);
console.log(JSON.stringify({ restored: restored.length }, null, 2));
