import chromeCss from '../../data/chrome-css.json';
import { getSnapshot } from '../snapshots';
import type { Snapshot } from '../snapshots';

const HOISTED = `<link rel="stylesheet" href="/scb-chrome.css" />`;

/**
 * Replace the twelve repeated inline theme <style> blocks with the cached stylesheet
 * built by tools/build-chrome-css.mjs. The link takes the exact position of the blocks
 * it replaces, so nothing in the cascade moves.
 */
export const hoistChromeCss = (stylesHtml: string): string => (
  stylesHtml.includes(chromeCss.shared) ? stylesHtml.replace(chromeCss.shared, HOISTED) : stylesHtml
);

/**
 * Header, footer and the product grid are styled by the recovered theme CSS, so pages
 * that are authored in Astro rather than replayed from a snapshot borrow the same
 * stylesheet set. The category archive is used as the reference because it is the one
 * snapshot that loads both the WooCommerce grid rules and the shared theme chrome.
 */
let cached: string | undefined;
export const chromeStyles = (): string => {
  if (cached) return cached;
  const reference = getSnapshot('/product-category/cardboard-boxes-by-size-and-shape/');
  cached = hoistChromeCss(reference?.stylesHtml ?? '');
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
