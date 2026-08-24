#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rows = JSON.parse(fs.readFileSync(path.join(root, 'analysis/gmc-products.json'), 'utf8'));
const disapproved = new Set(JSON.parse(fs.readFileSync(path.join(root, 'analysis/gmc-disapproved-products.json'), 'utf8')).map((row) => row.id));
const products = JSON.parse(fs.readFileSync(path.join(root, 'site/src/data/products.json'), 'utf8'));
const productsByPath = new Map(products.map((product) => [product.path, product]));
const outputDir = path.join(root, 'site/public/merchant');
const analysisDir = path.join(root, 'analysis');
fs.mkdirSync(outputDir, { recursive: true });

const tsv = (value) => {
  const text = String(value ?? '');
  return /[\t\r\n"]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
};
const xml = (value) => String(value ?? '').replace(/[&<>'"]/g, (char) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&apos;', '"':'&quot;' })[char]);

const headers = Object.keys(rows[0]);
fs.writeFileSync(path.join(outputDir, 'products.tsv'), [headers.map(tsv).join('\t'), ...rows.map((row) => headers.map((key) => tsv(row[key])).join('\t'))].join('\n') + '\n');

const items = rows.map((row) => {
  const additional = String(row['additional image link'] || '').split(',').map((value) => value.trim()).filter(Boolean);
  const shipping = row['shipping(country)'] ? `<g:shipping><g:country>${xml(row['shipping(country)'])}</g:country></g:shipping>` : '';
  return `<item>
<g:id>${xml(row.id)}</g:id>
<title>${xml(row.title)}</title>
<description>${xml(row.description)}</description>
<link>${xml(row.link)}</link>
<g:image_link>${xml(row['image link'])}</g:image_link>
${additional.map((value) => `<g:additional_image_link>${xml(value)}</g:additional_image_link>`).join('\n')}
<g:availability>${xml(row.availability)}</g:availability>
<g:price>${xml(row.price)}</g:price>
<g:condition>${xml(row.condition || 'new')}</g:condition>
${row.brand ? `<g:brand>${xml(row.brand)}</g:brand>` : ''}
${row.mpn ? `<g:mpn>${xml(row.mpn)}</g:mpn>` : ''}
${row['identifier exists'] ? `<g:identifier_exists>${xml(row['identifier exists'])}</g:identifier_exists>` : ''}
${row['product type'] ? `<g:product_type>${xml(row['product type'])}</g:product_type>` : ''}
${row['shipping weight'] ? `<g:shipping_weight>${xml(row['shipping weight'])}</g:shipping_weight>` : ''}
${row.adult ? `<g:adult>${xml(row.adult)}</g:adult>` : ''}
${row['is bundle'] ? `<g:is_bundle>${xml(row['is bundle'])}</g:is_bundle>` : ''}
${shipping}
</item>`;
}).join('\n');
fs.writeFileSync(path.join(outputDir, 'products.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0"><channel>
<title>Shop Cardboard Boxes</title>
<link>https://shopcardboardboxes.com/</link>
<description>Deterministic migration-preservation feed. Local generation only.</description>
${items}
</channel></rss>\n`);

const mappingHeaders = ['merchant_id','woocommerce_product_id','sku','product_url','status'];
const mapping = rows.map((row) => {
  const product = productsByPath.get(new URL(row.link).pathname);
  return {
    merchant_id: row.id,
    woocommerce_product_id: product?.id || '',
    sku: product?.sku || '',
    product_url: row.link,
    status: disapproved.has(row.id) ? 'disapproved-in-source-export' : 'present-in-source-export',
  };
});
const csvEscape = (value) => `"${String(value ?? '').replaceAll('"','""')}"`;
fs.writeFileSync(path.join(analysisDir, 'gmc-id-mapping.csv'), [mappingHeaders.map(csvEscape).join(','), ...mapping.map((row) => mappingHeaders.map((key) => csvEscape(row[key])).join(','))].join('\n') + '\n');
console.log(JSON.stringify({ records: rows.length, tsv: 'site/public/merchant/products.tsv', xml: 'site/public/merchant/products.xml', mapping: 'analysis/gmc-id-mapping.csv' }, null, 2));
