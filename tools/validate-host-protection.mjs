import { readFile } from 'node:fs/promises';

const config = JSON.parse(await readFile(new URL('../site/vercel.json', import.meta.url), 'utf8'));
const rule = config.headers?.find((entry) => entry.source === '/(.*)'
  && entry.has?.some((condition) => condition.type === 'host' && condition.value?.suf === '.vercel.app')
  && entry.headers?.some((header) => header.key.toLowerCase() === 'x-robots-tag' && header.value.toLowerCase() === 'noindex, nofollow'));

const applies = (hostname) => hostname.endsWith('.vercel.app');
const checks = {
  schemaDeclared: config.$schema === 'https://openapi.vercel.sh/vercel.json',
  previewHeaderRulePresent: Boolean(rule),
  previewHostnameProtected: applies('shop-cardboard-boxes-git-main.vercel.app'),
  productionHostnameExcluded: !applies('shopcardboardboxes.com'),
  wwwProductionHostnameExcluded: !applies('www.shopcardboardboxes.com'),
};
const failed = Object.entries(checks).filter(([, passed]) => !passed).map(([name]) => name);
console.log(JSON.stringify({ checks, failed }, null, 2));
if (failed.length) process.exitCode = 1;
