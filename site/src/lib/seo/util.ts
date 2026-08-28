export const SITE = 'https://shopcardboardboxes.com';

/** Absolute URL for an internal path. */
export const abs = (path: string): string => (path.startsWith('http') ? path : `${SITE}${path}`);

/** Escape a string for use inside HTML text or a double-quoted attribute. */
export const esc = (value: string): string => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

/** Strip tags and collapse whitespace — used when lifting schema text out of rendered HTML. */
export const plain = (html: string): string => html
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&#8217;|&#039;|&#39;/g, "'")
  .replace(/&#8211;/g, '–')
  .replace(/&quot;/g, '"')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/\s+/g, ' ')
  .trim();

export const slugify = (value: string): string => value
  .toLowerCase()
  .replace(/&/g, ' and ')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

export interface Crumb { name: string; path: string }

export const breadcrumbJsonLd = (crumbs: Crumb[]): string => JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: abs(crumb.path),
  })),
});

export interface Faq { q: string; a: string }

export const faqJsonLd = (faqs: Faq[], pageUrl: string): string => JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${abs(pageUrl)}#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
});

/** Visible breadcrumb trail. Rendered as an ordered list so the hierarchy is real markup. */
export const breadcrumbHtml = (crumbs: Crumb[]): string => {
  const items = crumbs.map((crumb, index) => {
    const last = index === crumbs.length - 1;
    const label = esc(crumb.name);
    const inner = last
      ? `<span aria-current="page">${label}</span>`
      : `<a href="${esc(crumb.path)}">${label}</a>`;
    return `<li>${inner}</li>`;
  }).join('');
  return `<nav class="scb-crumbs" aria-label="Breadcrumb"><ol>${items}</ol></nav>`;
};

/** Visible FAQ list. <details> keeps it keyboard accessible with no JavaScript. */
export const faqHtml = (faqs: Faq[], heading: string, intro = ''): string => {
  if (!faqs.length) return '';
  const items = faqs.map((faq) => `<details class="scb-faq"><summary>${esc(faq.q)}</summary><div class="scb-faq-a"><p>${faq.a}</p></div></details>`).join('');
  return `<section class="scb-section scb-faq-block"><h2>${esc(heading)}</h2>${intro ? `<p class="scb-lede">${intro}</p>` : ''}<div class="scb-faq-list">${items}</div></section>`;
};
