#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rows = JSON.parse(fs.readFileSync(path.join(root, 'analysis/gmc-products.json'), 'utf8'));
const products = JSON.parse(fs.readFileSync(path.join(root, 'site/src/data/products.json'), 'utf8'));
const productPaths = new Set(products.map((product) => product.path));
const ids = rows.map((row) => row.id);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
const required = ['id','title','description','link','image link','availability','price'];
const missing = [];
const invalidLinks = [];
const missingLocalImages = [];
for (const [index, row] of rows.entries()) {
  for (const field of required) if (!String(row[field] || '').trim()) missing.push({ row: index + 2, id: row.id, field });
  try {
    const url = new URL(row.link);
    if (url.origin !== 'https://shopcardboardboxes.com' || !productPaths.has(url.pathname)) invalidLinks.push({ id: row.id, link: row.link });
  } catch { invalidLinks.push({ id: row.id, link: row.link }); }
  try {
    const image = new URL(row['image link']);
    if (image.origin === 'https://shopcardboardboxes.com' && !fs.existsSync(path.join(root, 'site/public', image.pathname))) missingLocalImages.push({ id: row.id, image: row['image link'] });
  } catch { missingLocalImages.push({ id: row.id, image: row['image link'] }); }
}
const report = {
  generatedAt: new Date().toISOString(),
  sourceRecordCount: rows.length,
  uniqueIdCount: new Set(ids).size,
  duplicateIds: [...new Set(duplicates)],
  requiredFieldFailures: missing,
  invalidProductLinks: invalidLinks,
  missingRecoveredPrimaryImages: missingLocalImages,
  currencyCounts: rows.reduce((result, row) => { const currency = String(row.price || '').trim().split(/\s+/).pop() || 'missing'; result[currency] = (result[currency] || 0) + 1; return result; }, {}),
  availabilityCounts: rows.reduce((result, row) => { const value = row.availability || 'missing'; result[value] = (result[value] || 0) + 1; return result; }, {}),
  validForActivation: duplicates.length === 0 && missing.length === 0 && invalidLinks.length === 0 && missingLocalImages.length === 0,
  activationPerformed: false,
};
fs.writeFileSync(path.join(root, 'analysis/gmc-feed-validation.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
if (!report.validForActivation) process.exitCode = 1;
