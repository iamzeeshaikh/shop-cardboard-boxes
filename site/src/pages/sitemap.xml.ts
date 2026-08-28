import type { APIRoute } from 'astro';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import routeIndex from '../data/route-index.json';
import { NEW_CATEGORIES } from '../data/seo/categories';
import { RESOURCES } from '../data/seo/resources';
import { LOCATIONS } from '../data/seo/locations';
import { SEO_REDIRECTS } from '../data/seo/redirects';

export const prerender = true;

const excludedUtilityPaths = new Set([
  '/cart/',
  '/checkout/',
  '/my-account/',
  '/my-account/lost-password/',
  '/thank-you/',
  // An author archive of a single account adds nothing a reader would search for.
  '/author/shanimazhar82gmail-com/',
]);

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = () => {
  const fromSnapshots = routeIndex.flatMap((route) => {
    if (excludedUtilityPaths.has(route.path)) return [];
    // Anything that now redirects must not be advertised as a canonical URL.
    if (SEO_REDIRECTS.has(route.path)) return [];
    const snapshot = JSON.parse(readFileSync(resolve(process.cwd(), 'src/data/snapshots', route.file), 'utf8')) as {
      canonical?: string;
      robots?: string;
    };
    if (String(snapshot.robots || '').toLowerCase().includes('noindex')) return [];
    const canonical = snapshot.canonical || `https://shopcardboardboxes.com${route.path}`;
    try {
      const parsed = new URL(canonical);
      if (!/^(?:www\.)?shopcardboardboxes\.com$/i.test(parsed.hostname)) return [];
      return [parsed.href];
    } catch {
      return [];
    }
  });

  const authored = [
    ...NEW_CATEGORIES.map((category) => category.path),
    '/resources/',
    ...RESOURCES.map((resource) => `/resources/${resource.slug}/`),
    '/locations/',
    ...LOCATIONS.map((location) => `/locations/${location.slug}/`),
    '/design-your-box/',
    '/shipping-policy/',
  ].map((path) => `https://shopcardboardboxes.com${path}`);

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...[...new Set([...fromSnapshots, ...authored])].sort().map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  });
};
