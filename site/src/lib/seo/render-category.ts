import searchIndex from '../../../public/product-search.json';
import type { CategoryContent } from '../../data/seo/types';
import { toSnapshot } from './chrome';
import type { Snapshot } from '../snapshots';
import { quoteForm, cta, productCards } from './blocks';
import { upgradeImages, webpFor } from './images';
import { breadcrumbHtml, breadcrumbJsonLd, faqHtml, faqJsonLd, esc, abs } from './util';

interface SearchRecord { id: number; title: string; path: string; image: string; imageAlt: string }
const byId = new Map((searchIndex as SearchRecord[]).map((record) => [record.id, record]));

/** WordPress generated a 300x300 rendition for every product image. */
const thumb = (url: string): string => url.replace(/(\.[a-z]+)$/i, '-300x300$1');

/**
 * Render one of the categories authored in this pass. The grid deliberately mirrors
 * the markup and proportions of the WooCommerce archives so the new collections do
 * not look bolted on next to the pages they sit beside in navigation.
 */
export function renderNewCategory(content: CategoryContent): Snapshot {
  const authored = content.authored;
  if (!authored) throw new Error(`Category ${content.path} has no authored block`);

  const products = authored.productIds
    .map((id) => byId.get(id))
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

  const facts = authored.facts
    .map((fact) => `<li><strong>${esc(fact.value)}</strong>${esc(fact.label)}</li>`)
    .join('');

  const html = `<div class="site-content">
  <div class="scb-intro">
    <div class="scb-intro-inner">
      <div>
        ${breadcrumbHtml(content.crumbs)}
        <span class="scb-eyebrow">${esc(authored.eyebrow)}</span>
        <h1>${esc(authored.h1)}</h1>
        <p>${esc(authored.lede)}</p>
        <ul class="scb-intro-facts">${facts}</ul>
      </div>
      <div>${quoteForm(content.quote)}</div>
    </div>
  </div>
  <section class="scb-section">
    ${content.intro}
    <h2 class="screen-reader-text">Products in this collection</h2>
    ${productCards(products)}
  </section>
  ${content.sections}
  ${faqHtml(content.faqs, content.faqHeading, content.faqIntro)}
  ${cta(
    content.ctaHeading,
    esc(content.ctaBody),
    [{ path: '/contact-us/', label: 'Request a quote' }, { path: '/design-your-box/', label: 'Design your box', kind: 'ghost' }],
  )}
</div>`;

  const jsonLd = [
    breadcrumbJsonLd(content.crumbs),
    faqJsonLd(content.faqs, content.path),
    JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${abs(content.path)}#collection`,
      url: abs(content.path),
      name: authored.h1,
      description: content.description,
      isPartOf: { '@type': 'WebSite', name: 'Shop Cardboard Boxes', url: abs('/') },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: products.length,
        itemListElement: products.map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: abs(product.path),
          name: product.title,
        })),
      },
    }),
  ];

  return toSnapshot({
    path: content.path,
    title: content.title,
    description: content.description,
    contentHtml: upgradeImages(html),
    jsonLd,
    bodyClass: 'scb-category',
  });
}
