import type { Snapshot } from '../snapshots';
import products from '../../data/products.json';
import { categoryByPath, newCategoryByPath } from '../../data/seo/categories';
import { shopRoot, shopPageDescription } from '../../data/seo/shop';
import { META_OVERRIDES } from '../../data/seo/meta-overrides';
import { PRODUCT_EXTRAS, RESOURCE_LINKS_BY_CATEGORY } from '../../data/seo/product-extras';
import { PAGE_INTROS } from '../../data/seo/page-intros';
import { extractProductFaqs } from './extract';
import { upgradeImages, webpFor } from './images';
import { repairContent } from './repairs';
import { quoteForm, cta, linkRow, productCards } from './blocks';
import { configurator } from './configurator';
import searchIndex from '../../../public/product-search.json';
import { breadcrumbHtml, breadcrumbJsonLd, faqHtml, faqJsonLd, esc, abs } from './util';
import type { Crumb } from './util';

const HOME: Crumb = { name: 'Home', path: '/' };
const SHOP: Crumb = { name: 'All cardboard boxes', path: '/products/' };

interface ProductRecord { id: number; title: string; path: string; categories: { name: string; slug: string }[] }
const productByPath = new Map((products as unknown as ProductRecord[]).map((product) => [product.path, product]));

interface SearchRecord { id: number; title: string; path: string; image: string; imageAlt: string }
const searchByPath = new Map((searchIndex as SearchRecord[]).map((record) => [record.path, record]));
const thumb = (url: string): string => url.replace(/(\.[a-z]+)$/i, '-300x300$1');

/** Product cards built from the real catalogue image, for the related-boxes row. */
function cardsFor(paths: string[]) {
  return paths
    .map((path) => searchByPath.get(path))
    .filter((record): record is SearchRecord => Boolean(record))
    .map((record) => ({
      path: record.path,
      title: record.title,
      image: thumb(record.image),
      alt: record.imageAlt || `${record.title} shown as a product photograph`,
    }));
}

/** Other products in the same collection, used when a page has no hand-picked set. */
function siblingPaths(categorySlug: string, selfPath: string, limit = 4): string[] {
  return (products as unknown as ProductRecord[])
    .filter((product) => product.path !== selfPath && product.categories.some((category) => category.slug === categorySlug))
    .slice(0, limit)
    .map((product) => product.path);
}

const cache = new Map<string, Snapshot>();

/** Category archive pages, including their /page/N/ continuations. */
const categoryPageMatch = /^(\/product-category\/[^/]+\/)(?:page\/(\d+)\/)?$/;
/** The shop root is paginated the same way and gets the same treatment. */
const shopPageMatch = /^\/products\/(?:page\/(\d+)\/)?$/;

function categoryFor(path: string): { content: ReturnType<typeof categoryByPath.get>; page: number } | undefined {
  const shop = shopPageMatch.exec(path);
  if (shop) return { content: shopRoot, page: shop[1] ? Number(shop[1]) : 1 };
  const match = categoryPageMatch.exec(path);
  if (!match) return undefined;
  const content = categoryByPath.get(match[1].toLowerCase());
  if (!content) return undefined;
  return { content, page: match[2] ? Number(match[2]) : 1 };
}

function enhanceCategory(snapshot: Snapshot): Snapshot {
  const found = categoryFor(snapshot.path);
  if (!found || !found.content) return snapshot;
  const { content, page } = found;
  const crumbs: Crumb[] = page > 1
    ? [...content.crumbs, { name: `Page ${page}`, path: snapshot.path }]
    : content.crumbs;

  let html = repairContent(snapshot.path, snapshot.contentHtml);

  // Breadcrumbs sit above the archive title so the visible hierarchy matches the schema.
  if (!/rishi-breadcrumbs/.test(html)) {
    const titleAnchor = html.indexOf('<div class="archive-title-wrapper');
    const crumbBlock = `<div class="scb-wrap scb-crumbwrap">${breadcrumbHtml(crumbs)}</div>`;
    html = titleAnchor >= 0
      ? html.slice(0, titleAnchor) + crumbBlock + html.slice(titleAnchor)
      : crumbBlock + html;
  }

  // Page 1 carries the commercial copy. Continuation pages get orientation only, so
  // the same 1,500 words are not repeated across four indexable URLs.
  if (page === 1) {
    const introBlock = `<div class="scb-intro scb-prepend"><div class="scb-intro-inner"><div>${content.intro}</div><div>${quoteForm(content.quote)}</div></div></div>`;
    // The archive renders a title block, then a container holding the grid. The intro
    // goes between them, which needs no tags opened or closed.
    const contentWrapper = html.indexOf('main-content-wrapper');
    const containerStart = contentWrapper >= 0 ? html.lastIndexOf('<div class="rishi-container"', contentWrapper) : -1;
    html = containerStart >= 0
      ? html.slice(0, containerStart) + introBlock + html.slice(containerStart)
      : introBlock + html;
    html += `<div class="scb-append">${content.sections}${faqHtml(content.faqs, content.faqHeading, content.faqIntro)}${cta(
      content.ctaHeading,
      esc(content.ctaBody),
      [{ path: '/contact-us/', label: 'Request a quote' }, { path: '/design-your-box/', label: 'Configure your box', kind: 'ghost' }],
    )}</div>`;
  } else {
    html += `<div class="scb-append"><section class="scb-section"><h2>More from this collection</h2><p>You are on page ${page} of the ${esc(content.crumbs[content.crumbs.length - 1].name.toLowerCase())} collection. The full buying guidance, specifications and questions are on <a href="${esc(content.path)}">page one of this collection</a>.</p>${linkRow([
      { path: content.path, label: 'Back to page one' },
      { path: '/products/', label: 'Browse every box' },
      { path: '/design-your-box/', label: 'Configure a custom box' },
    ])}</section></div>`;
  }

  const jsonLd = [...snapshot.jsonLd, breadcrumbJsonLd(crumbs)];
  if (page === 1) {
    jsonLd.push(faqJsonLd(content.faqs, content.path));
    jsonLd.push(JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${abs(content.path)}#collection`,
      url: abs(content.path),
      name: content.crumbs[content.crumbs.length - 1].name,
      description: content.description,
      isPartOf: { '@type': 'WebSite', name: 'Shop Cardboard Boxes', url: abs('/') },
    }));
  }

  return {
    ...snapshot,
    title: page > 1
      ? (content.path === '/products/'
        ? `All Cardboard Boxes — Page ${page} of 12 | Shop Cardboard Boxes`
        : `${content.title} — Page ${page}`)
      : content.title,
    description: page > 1
      ? (content.path === '/products/' ? shopPageDescription(page, 12) : `${content.description} Page ${page}.`)
      : content.description,
    contentHtml: upgradeImages(html),
    jsonLd,
  };
}

function enhanceProduct(snapshot: Snapshot): Snapshot {
  const product = productByPath.get(snapshot.path);
  if (!product) return snapshot;
  const category = product.categories[0];
  const crumbs: Crumb[] = [
    HOME,
    SHOP,
    ...(category ? [{ name: category.name, path: `/product-category/${category.slug}/` }] : []),
    { name: product.title, path: snapshot.path },
  ];

  const faqs = extractProductFaqs(snapshot.contentHtml);
  const extras = PRODUCT_EXTRAS[snapshot.path];
  const resourceLinks = extras?.resources ?? RESOURCE_LINKS_BY_CATEGORY[category?.slug ?? ''] ?? [];

  let html = repairContent(snapshot.path, snapshot.contentHtml);

  // The recovered theme already renders a breadcrumb on every product page. Adding a
  // second visible trail duplicated it, so only the markup is contributed here.
  const hasThemeCrumbs = /rishi-breadcrumbs/.test(html);
  if (!hasThemeCrumbs) html = `<div class="scb-wrap scb-crumbwrap">${breadcrumbHtml(crumbs)}</div>${html}`;

  // Related boxes: hand-picked where the page earns it, otherwise the rest of its
  // collection. Either way every product page gets a real card row with photography.
  const relatedProductPaths = (extras?.related ?? [])
    .map((link) => link.path)
    .filter((path) => path.startsWith('/product/'));
  const cards = cardsFor(relatedProductPaths.length ? relatedProductPaths : siblingPaths(category?.slug ?? '', snapshot.path));

  const collectionLinks = [
    ...(category ? [{ path: `/product-category/${category.slug}/`, label: `All ${category.name.toLowerCase()}` }] : []),
    ...(extras?.related ?? []).filter((link) => !link.path.startsWith('/product/')),
    { path: '/products/', label: 'Every box we make' },
  ];

  const guideCards = resourceLinks.length
    ? `<h3>Guides that help you specify this</h3><ul class="scb-cards scb-cards-guides">${resourceLinks
        .map((link) => `<li class="scb-card"><span class="scb-card-meta">Packaging guide</span><h4><a href="${esc(link.path)}">${esc(link.label)}</a></h4></li>`)
        .join('')}</ul>`
    : '';

  // The configurator belongs immediately after the description, specification and
  // FAQ tabs — that is where a reader has finished reading and starts specifying.
  const cfgBlock = `<section class="scb-section scb-cfg-section">
    <span class="scb-eyebrow scb-eyebrow-dark">Build it your way</span>
    <h2>Design this box to your own specification</h2>
    <p class="scb-lede">Four short steps — structure and size, board, printing, and where to send the quote. It produces a brief precise enough to price ${esc(product.title.toLowerCase())} or anything close to it.</p>
    ${configurator({ productName: product.title, productUrl: snapshot.path, prefix: 'pcfg', compact: true })}
  </section>`;

  const tabsAnchor = html.indexOf('woocommerce-tabs');
  if (tabsAnchor >= 0) {
    const openTag = html.lastIndexOf('<div', tabsAnchor);
    let depth = 0;
    let closeAt = -1;
    const tag = /<(\/?)div\b/g;
    tag.lastIndex = openTag;
    let match: RegExpExecArray | null;
    while ((match = tag.exec(html))) {
      depth += match[1] ? -1 : 1;
      if (depth === 0) { closeAt = html.indexOf('>', match.index) + 1; break; }
    }
    if (closeAt > 0) html = html.slice(0, closeAt) + cfgBlock + html.slice(closeAt);
  }

  html += `<div class="scb-append"><section class="scb-section scb-tinted scb-related">
    <h2>Related boxes</h2>
    <p class="scb-lede">${extras?.note ? extras.note : `${esc(product.title)} sits in our ${esc(category?.name ?? 'cardboard box')} collection. If this is not quite the right structure, these are the closest places to look next.`}</p>
    ${cards.length ? productCards(cards, 4) : ''}
    ${collectionLinks.length ? linkRow(collectionLinks) : ''}
    ${guideCards}
  </section></div>`;

  const jsonLd = [...snapshot.jsonLd, breadcrumbJsonLd(crumbs)];
  if (faqs.length) jsonLd.push(faqJsonLd(faqs, snapshot.path));

  const override = META_OVERRIDES[snapshot.path];
  // The first product photo is the largest contentful paint on these pages.
  const heroMatch = /<img\b[^>]*\ssrc="(\/wp-content\/uploads\/[^"]+)"/.exec(snapshot.contentHtml);

  // Preload whichever file the <picture> will actually resolve to.
  const hero = heroMatch?.[1];
  return {
    ...snapshot,
    title: override?.title ?? snapshot.title,
    description: override?.description ?? snapshot.description,
    contentHtml: upgradeImages(html, { lcpSrc: hero }),
    lcpImage: hero ? (webpFor(hero) ?? hero) : undefined,
    jsonLd,
  };
}

/** Served exactly as recovered — no repairs, no image transform, no additions. */
const PROTECTED_PATHS = new Set(['/refund_returns/', '/terms-conditions/', '/privacy-policy/']);

function enhanceGeneric(snapshot: Snapshot): Snapshot {
  if (PROTECTED_PATHS.has(snapshot.path)) return snapshot;
  const override = META_OVERRIDES[snapshot.path];
  const intro = PAGE_INTROS[snapshot.path];
  let html = repairContent(snapshot.path, snapshot.contentHtml);
  const jsonLd = [...snapshot.jsonLd, ...(override?.extraJsonLd?.() ?? [])];

  if (intro) {
    const trail = /rishi-breadcrumbs/.test(html) ? '' : breadcrumbHtml(intro.crumbs);
    const header = `<div class="scb-intro scb-prepend"><div class="scb-intro-inner"><div>${trail}${
      intro.eyebrow ? `<span class="scb-eyebrow">${esc(intro.eyebrow)}</span>` : ''
    }${intro.h1 ? `<h1>${esc(intro.h1)}</h1>` : ''}${intro.lede ?? ''}</div><div></div></div></div>`;
    html = header + html + (intro.after ? `<div class="scb-append">${intro.after}</div>` : '');
    jsonLd.push(breadcrumbJsonLd(intro.crumbs));
  }

  return {
    ...snapshot,
    title: override?.title ?? snapshot.title,
    description: override?.description ?? snapshot.description,
    robots: override?.robots ?? snapshot.robots,
    contentHtml: upgradeImages(html),
    jsonLd,
  };
}

/**
 * Apply the SEO layer to a replayed WordPress page. Results are memoised per path
 * because the underlying snapshot never changes between requests.
 */
export function enhance(snapshot: Snapshot): Snapshot {
  const cached = cache.get(snapshot.path);
  if (cached) return cached;
  let result: Snapshot;
  // Categories authored in this pass arrive fully rendered; enhancing them again
  // would inject a second intro, quote form and FAQ block.
  if (newCategoryByPath.has(snapshot.path)) result = snapshot;
  else if (snapshot.path.startsWith('/product/')) result = enhanceProduct(snapshot);
  else if (snapshot.path.startsWith('/product-category/') || snapshot.path.startsWith('/products/') || snapshot.path === '/products/') result = enhanceCategory(snapshot);
  else result = enhanceGeneric(snapshot);
  cache.set(snapshot.path, result);
  return result;
}
