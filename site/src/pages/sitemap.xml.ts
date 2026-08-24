import type { APIRoute } from 'astro';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import routeIndex from '../data/route-index.json';

export const prerender = true;

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = () => {
  const urls = routeIndex.flatMap((route) => {
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

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...[...new Set(urls)].sort().map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`),
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
