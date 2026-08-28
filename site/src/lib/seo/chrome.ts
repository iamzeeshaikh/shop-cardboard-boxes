import chromeCss from '../../data/chrome-css.json';
import cssBundles from '../../data/css-bundles.json';
import { getSnapshot } from '../snapshots';
import { assetUrl } from './asset';
import type { Snapshot } from '../snapshots';

const HOISTED = `<link rel="stylesheet" href="${assetUrl('/scb-chrome.css')}" />`;

/**
 * Replace the twelve repeated inline theme <style> blocks with the cached stylesheet
 * built by tools/build-chrome-css.mjs. The link takes the exact position of the blocks
 * it replaces, so nothing in the cascade moves.
 */
export const hoistChromeCss = (stylesHtml: string): string => (
  stylesHtml.includes(chromeCss.shared) ? stylesHtml.replace(chromeCss.shared, HOISTED) : stylesHtml
);

/**
 * Swap a page's run of stylesheet links for the single bundle built from them by
 * tools/build-css-bundles.mjs. The bundle concatenates the same files in the same
 * order, with the ones nothing uses removed, so the cascade is identical and 12–34
 * requests become one. External stylesheets are left where they are.
 *
 * The three protected policy pages have no bundle and keep their original delivery.
 */
export const bundleChromeCss = (stylesHtml: string, path: string): string => {
  const entry = (cssBundles as Record<string, { bundle: string; external: string[] }>)[path];
  if (!entry) return stylesHtml;
  let inserted = false;
  return stylesHtml.replace(/<link[^>]*rel=['"]stylesheet['"][^>]*>/gi, (tag) => {
    const href = /href=['"]([^'"]+)['"]/i.exec(tag)?.[1] ?? '';
    // Anything not served from this origin stays as its own request.
    if (!href.startsWith('/')) return tag;
    // Stylesheets this project adds are not part of the bundle and must survive —
    // /scb-chrome.css carries the theme variables the layout depends on.
    if (href.startsWith('/scb-')) return tag;
    if (inserted) return '';
    inserted = true;
    return `<link rel="stylesheet" href="${entry.bundle}" />`;
  });
};

/**
 * Header, footer and the product grid are styled by the recovered theme CSS, so pages
 * that are authored in Astro rather than replayed from a snapshot borrow the same
 * stylesheet set. The category archive is used as the reference because it is the one
 * snapshot that loads both the WooCommerce grid rules and the shared theme chrome.
 */
const REFERENCE_PATH = '/product-category/cardboard-boxes-by-size-and-shape/';
let cached: string | undefined;
export const chromeStyles = (): string => {
  if (cached) return cached;
  const reference = getSnapshot(REFERENCE_PATH);
  // Pages authored here borrow the category archive's stylesheet set, so they take
  // that route's bundle too.
  cached = bundleChromeCss(hoistChromeCss(reference?.stylesHtml ?? ''), REFERENCE_PATH);
  return cached;
};

export interface PageInput {
  path: string;
  title: string;
  description: string;
  contentHtml: string;
  jsonLd?: string[];
  robots?: string;
  bodyClass?: string;
  metaTags?: string;
}

/** Build the snapshot shape BaseLayout expects for an Astro-authored page. */
export const toSnapshot = (page: PageInput): Snapshot => ({
  path: page.path,
  title: page.title,
  description: page.description,
  canonical: `https://shopcardboardboxes.com${page.path}`,
  robots: page.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  bodyClass: `wp-embed-responsive wp-theme-rishi theme-rishi woocommerce woocommerce-page box-layout full-width scb-authored ${page.bodyClass || ''}`.trim(),
  metaTags: page.metaTags ?? '',
  stylesHtml: chromeStyles(),
  jsonLd: page.jsonLd ?? [],
  contentHtml: page.contentHtml,
});
