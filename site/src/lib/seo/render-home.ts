import searchIndex from '../../../public/product-search.json';
import { getSnapshot } from '../snapshots';
import type { Snapshot } from '../snapshots';
import { enhance } from './enhance';
import { productCards, linkRow } from './blocks';
import { upgradeImages, webpFor } from './images';
import { esc } from './util';
import { CATEGORY_NAV } from '../../data/seo/categories';

interface SearchRecord { id: number; title: string; path: string; image: string; imageAlt: string }
const bySlug = new Map((searchIndex as SearchRecord[]).map((record) => [record.path, record]));
const thumb = (url: string): string => url.replace(/(\.[a-z]+)$/i, '-300x300$1');

/**
 * The homepage used to render one flat grid of 100 products — 185 KB of markup and
 * 100 images that gave a visitor no route into the catalogue and gave a crawler no
 * hierarchy. It is replaced by six curated shelves that each point at the collection
 * behind them. Every product dropped from the homepage is still reachable through its
 * category, the full catalogue, related products and the sitemap.
 */
const SHELVES: { title: string; blurb: string; category: { path: string; label: string }; paths: string[] }[] = [
  {
    title: 'Most requested this year',
    blurb: 'The boxes customers ask us to quote most often, across every collection.',
    category: { path: '/products/', label: 'Browse all 186 box styles' },
    paths: [
      '/product/round-cardboard-boxes/',
      '/product/cardboard-shoe-boxes/',
      '/product/corrugated-cardboard-boxes/',
      '/product/single-cardboard-boxes/',
      '/product/cardboard-box-inserts/',
      '/product/pink-cardboard-boxes/',
    ],
  },
  {
    title: 'Shipping and packing',
    blurb: 'Transit packaging chosen for the journey — parcel mailers, postal cartons and palletised outers in board grades matched to the weight.',
    category: { path: '/product-category/cardboard-shipping-boxes/', label: 'All shipping and mailing boxes' },
    paths: [
      '/product/custom-cardboard-shipping-boxes/',
      '/product/cardboard-mailing-boxes/',
      '/product/cardboard-postal-boxes/',
      '/product/large-cardboard-boxes/',
      '/product/double-wall-cardboard-boxes/',
      '/product/medium-cardboard-boxes/',
    ],
  },
  {
    title: 'Food packaging',
    blurb: 'Food-grade board with the coating, ventilation and temperature range matched to what goes inside.',
    category: { path: '/product-category/food-related-cardboard-boxes/', label: 'All food packaging boxes' },
    paths: [
      '/product/cardboard-pizza-boxes/',
      '/product/cardboard-bakery-boxes/',
      '/product/cardboard-burger-boxes/',
      '/product/cardboard-takeout-box/',
      '/product/lunch-cardboard-boxes/',
      '/product/cardboard-vegetable-packaging-boxes/',
    ],
  },
  {
    title: 'Gift, cosmetic and retail',
    blurb: 'Packaging that is part of the product — rigid boxes, magnetic closures, printed cartons and shelf-ready display.',
    category: { path: '/product-category/cosmetic-and-gift-cardboard-boxes/', label: 'All cosmetic and gift boxes' },
    paths: [
      '/product/cardboard-gift-boxes/',
      '/product/cardboard-luxury-magnet-boxes/',
      '/product/cardboard-gift-hamper-boxes/',
      '/product/cardboard-cosmetic-packaging/',
      '/product/cardboard-counter-display-units/',
      '/product/cardboard-boxes-with-window/',
    ],
  },
  {
    title: 'Boxes by shape',
    blurb: 'Round, hexagonal, cube and cylindrical formats, for products a square box does not flatter.',
    category: { path: '/product-category/cardboard-boxes-by-size-and-shape/', label: 'All sizes and shapes' },
    paths: [
      '/product/round-cardboard-boxes/',
      '/product/hexagon-cardboard-boxes/',
      '/product/cube-cardboard-boxes/',
      '/product/rectangle-cardboard-boxes/',
      '/product/cardboard-cylindrical-boxes/',
      '/product/cardboard-heart-shaped-boxes/',
    ],
  },
  {
    title: 'Heavy duty and specialist',
    blurb: 'Where the load, the temperature or the contents rule out a standard carton.',
    category: { path: '/product-category/cardboard-boxes-by-material-strength/', label: 'All board strengths' },
    paths: [
      '/product/triple-wall-corrugated-cardboard-boxes/',
      '/product/cardboard-corrugated-pallet-boxes/',
      '/product/cardboard-heavy-duty-shipping-crates/',
      '/product/cardboard-insulated-cold-boxes/',
      '/product/cardboard-industrial-parts-packaging/',
      '/product/cardboard-chemical-safe-cardboard-packaging/',
    ],
  },
];

// The flat grid occupies one Elementor container. Its markers are stable, so the
// replacement is anchored to them rather than to a byte offset.
const GRID_START = '<div class="elementor-element elementor-element-0e7dbd7';
const GRID_AFTER = '<div class="elementor-element elementor-element-f893008';

function shelfHtml(): string {
  const shelves = SHELVES.map((shelf) => {
    const products = shelf.paths
      .map((path) => bySlug.get(path))
      .filter((record): record is SearchRecord => Boolean(record))
      .map((record) => {
        const thumbUrl = thumb(record.image);
        return {
          path: record.path,
          title: record.title,
          image: webpFor(thumbUrl) ? thumbUrl : record.image,
          alt: record.imageAlt || `${record.title} shown as a product photograph`,
        };
      });
    return `<section class="scb-section">
      <h2>${esc(shelf.title)}</h2>
      <p class="scb-lede">${esc(shelf.blurb)}</p>
      ${productCards(products, 6)}
      <p><a class="scb-btn scb-btn-solid" href="${esc(shelf.category.path)}">${esc(shelf.category.label)}</a></p>
    </section>`;
  }).join('');

  return `<div class="scb-home-shelves">
    <section class="scb-section scb-tinted">
      <h2>Shop by collection</h2>
      <p class="scb-lede">Ten collections covering every box we make. Each one opens with buying guidance for that kind of packaging, not just a grid.</p>
      ${linkRow(CATEGORY_NAV)}
    </section>
    ${shelves}
    <section class="scb-section scb-tinted">
      <h2>Work out the specification first</h2>
      <p>Most packaging problems are settled before anyone looks at a product page — the right size, the right board and the right closure. These guides cover the decisions that come up most.</p>
      ${linkRow([
        { path: '/resources/', label: 'All packaging guides' },
        { path: '/resources/cardboard-box-sizes-guide/', label: 'Cardboard box sizes' },
        { path: '/resources/how-to-choose-a-shipping-box/', label: 'Choosing a shipping box' },
        { path: '/resources/corrugated-box-strength-guide/', label: 'Board strength explained' },
        { path: '/design-your-box/', label: 'Design your box' },
        { path: '/locations/', label: 'Where we ship' },
      ])}
    </section>
  </div>`;
}

let cached: Snapshot | undefined;

export function renderHome(): Snapshot {
  if (cached) return cached;
  const base = getSnapshot('/');
  if (!base) throw new Error('Homepage snapshot is missing');
  const enhanced = enhance(base);

  const start = enhanced.contentHtml.indexOf(GRID_START);
  const end = enhanced.contentHtml.indexOf(GRID_AFTER);
  const html = start >= 0 && end > start
    ? enhanced.contentHtml.slice(0, start) + shelfHtml() + enhanced.contentHtml.slice(end)
    : enhanced.contentHtml + shelfHtml();

  // The hero image is the largest contentful paint on the homepage.
  const hero = /<img\b[^>]*\ssrc="(\/wp-content\/uploads\/[^"]+)"/.exec(html);
  const heroSrc = hero?.[1];
  cached = {
    ...enhanced,
    contentHtml: upgradeImages(html, { lcpSrc: heroSrc }),
    lcpImage: heroSrc ? (webpFor(heroSrc) ?? heroSrc) : undefined,
  };
  return cached;
}
