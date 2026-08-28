import { defineMiddleware } from 'astro:middleware';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import httpSnapshotIndex from './data/http-snapshot-index.json';
import redirectIndex from './data/redirect-index.json';
import repairRedirectIndex from './data/repair-redirects.json';
import routeIndex from './data/route-index.json';
import { SEO_REDIRECTS } from './data/seo/redirects';

const compatibilityResponses = new Map(httpSnapshotIndex.map((record) => [record.key, record]));
const redirects = new Map(redirectIndex.map((record) => [record.key, record]));
const repairRedirects = new Map(repairRedirectIndex.map((record) => [record.from, record.to]));
const knownRoutes = new Set(routeIndex.map((record) => record.path));
const productionSitemapUrl = 'https://shopcardboardboxes.com/sitemap.xml';
const retiredWordPressSitemap = /^\/(?:post|page|product|category|product_cat|author)-sitemap\d*\.xml$/i;
const robotsTxt = [
  'User-agent: *',
  'Disallow: /wp-content/uploads/wc-logs/',
  'Disallow: /wp-content/uploads/woocommerce_transient_files/',
  'Disallow: /wp-content/uploads/woocommerce_uploads/',
  'Disallow: /*?add-to-cart=',
  'Disallow: /*?*add-to-cart=',
  'Disallow: /wp-admin/',
  'Allow: /wp-admin/admin-ajax.php',
  '',
  '# Block spam paths',
  'Disallow: /casino',
  'Disallow: /slot',
  'Disallow: /pokie',
  '',
  `Sitemap: ${productionSitemapUrl}`,
  '',
].join('\n');

function compatibilityDirectory(): string {
  if (process.env.SCB_RUNTIME_DATA_DIR) return resolve(process.env.SCB_RUNTIME_DATA_DIR, '..', 'http-snapshots');
  if (process.env.VERCEL) return resolve(process.cwd(), 'src/data/http-snapshots');
  return import.meta.env.DEV
    ? resolve(process.cwd(), 'src/data/http-snapshots')
    : resolve(process.cwd(), 'dist/server-data/http-snapshots');
}

export const onRequest = defineMiddleware(async (context, next) => {
  let response: Response;
  const requestKey = `${context.url.pathname}${context.url.search}`;
  const compatibility = compatibilityResponses.get(requestKey);
  const preservedRedirect = redirects.get(requestKey);
  let decodedPathname = context.url.pathname;
  try { decodedPathname = decodeURIComponent(context.url.pathname); } catch {}
  const repairRedirect = repairRedirects.get(decodedPathname);
  const seoRedirect = SEO_REDIRECTS.get(context.url.pathname.endsWith('/') ? context.url.pathname : `${context.url.pathname}/`);
  if (context.url.pathname === '/sitemap_index.xml' || retiredWordPressSitemap.test(context.url.pathname)) {
    response = context.redirect(productionSitemapUrl, 301);
    response.headers.set('Cache-Control', 'public, max-age=0, s-maxage=3600');
  } else if (context.url.pathname === '/robots.txt') {
    response = new Response(context.request.method === 'HEAD' ? null : robotsTxt, {
      headers: {
        'Content-Type': 'text/plain; charset=UTF-8',
        'Cache-Control': 'public, max-age=0, s-maxage=3600',
      },
    });
  } else if (compatibility) {
    const body = context.request.method === 'HEAD' ? null : readFileSync(resolve(compatibilityDirectory(), compatibility.file));
    response = new Response(body, { status: compatibility.status, headers: { 'Content-Type': compatibility.contentType } });
  } else if (preservedRedirect && !(requestKey === '/checkout/' && context.cookies.get('scb_cart_present')?.value === '1')) {
    const redirectStatus = preservedRedirect.status as 300 | 301 | 302 | 303 | 304 | 307 | 308;
    response = context.redirect(preservedRedirect.location, redirectStatus);
  } else if (repairRedirect) {
    response = context.redirect(repairRedirect, 301);
  } else if (/\/page\/1\/$/.test(context.url.pathname) && knownRoutes.has(context.url.pathname.replace(/page\/1\/$/, ''))) {
    // WooCommerce emitted page/1/ links from later pages. Page one has no URL of
    // its own, so those are folded into the archive root.
    response = context.redirect(context.url.pathname.replace(/page\/1\/$/, ''), 301);
  } else if (seoRedirect) {
    // Duplicate case-variant archives and one broken legacy page, folded into their
    // canonical URLs. See src/data/seo/redirects.ts for why each one is safe.
    response = context.redirect(`${seoRedirect}${context.url.search}`, 301);
  } else if (context.url.pathname === '/checkout/' && context.cookies.get('scb_cart_present')?.value !== '1') {
    response = context.redirect('/cart/', 302);
  } else if (!context.url.pathname.endsWith('/') && knownRoutes.has(`${context.url.pathname}/`)) {
    response = context.redirect(`${context.url.pathname}/${context.url.search}`, 301);
  } else {
    response = await next();
  }
  if (context.url.hostname !== 'shopcardboardboxes.com') {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  response.headers.set('X-Content-Type-Options', 'nosniff');
  return response;
});
