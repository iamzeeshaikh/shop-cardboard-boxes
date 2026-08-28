import routeIndex from '../route-index.json';

/**
 * Permanent redirects added in this pass. Both cases retire a URL that has no reason
 * to stay reachable, and neither touches a page with organic visibility.
 *
 * 1. Case-variant category archives. WordPress served both
 *    /product-category/Cardboard-Boxes-By-Functionality/ and the lowercase slug with
 *    200s, and the uppercase copies already self-canonicalised to lowercase. They
 *    carried a handful of impressions between them, so folding them into the
 *    canonical URL removes a duplicate set at no measurable cost.
 *
 * 2. /cardboard-boxes-new-york/. The page rendered an empty <body> — an Elementor HTML
 *    widget containing a complete nested HTML document, which browsers discard. It has
 *    zero clicks and zero impressions in twelve months of Search Console data, so
 *    pointing it at the rebuilt New York page loses nothing and gains a working page.
 */

const canonicalCategoryPath = (path: string): string => path.toLowerCase();

const caseVariantCategories = new Map<string, string>();
for (const route of routeIndex) {
  if (!route.path.startsWith('/product-category/')) continue;
  const lower = canonicalCategoryPath(route.path);
  if (lower === route.path) continue;
  // Only redirect where the lowercase URL genuinely exists.
  if (routeIndex.some((candidate) => candidate.path === lower)) caseVariantCategories.set(route.path, lower);
}

/**
 * 3. /product/cardboard-meat-packaging-boxes-2/ is a WordPress duplicate-slug leftover
 *    that has been returning 404 while still collecting impressions. It points at the
 *    product it duplicates.
 */
export const SEO_REDIRECTS = new Map<string, string>([
  ...caseVariantCategories,
  ['/cardboard-boxes-new-york/', '/locations/new-york/'],
  ['/product/cardboard-meat-packaging-boxes-2/', '/product/cardboard-meat-packaging-boxes/'],
]);
