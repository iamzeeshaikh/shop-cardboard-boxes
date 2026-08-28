import { esc } from './util';

export interface QuoteFormOptions {
  heading?: string;
  note?: string;
  /** Pre-selects the box type so the enquiry arrives already attributed. */
  boxType?: string;
  /** Options offered in the box-type select. Omit to use a free-text field. */
  boxTypes?: string[];
  buttonLabel?: string;
  formName?: string;
}

/**
 * Short quote form used near the top of commercial pages. It is a plain <form>: the
 * site-wide handler in /scripts/site.js posts it to /api/forms and attaches the page
 * attribution, so no page-specific JavaScript is needed.
 */
export function quoteForm(options: QuoteFormOptions = {}): string {
  const {
    heading = 'Get a quick quote',
    note = 'Tell us the box, the size and the quantity. A packaging specialist replies with pricing, usually the same working day.',
    boxType = '',
    boxTypes,
    buttonLabel = 'Request my quote',
    formName = 'Quick Quote',
  } = options;

  const boxField = boxTypes?.length
    ? `<div class="scb-full"><label for="scb-q-box">Box type</label><select id="scb-q-box" name="box_type">${boxTypes.map((type) => `<option value="${esc(type)}"${type === boxType ? ' selected' : ''}>${esc(type)}</option>`).join('')}<option value="Something else">Something else</option></select></div>`
    : `<div class="scb-full"><label for="scb-q-box">Box type</label><input id="scb-q-box" name="box_type" type="text" value="${esc(boxType)}" placeholder="e.g. round rigid box with lid" /></div>`;

  return `<form class="scb-quote" name="${esc(formName)}" aria-label="${esc(heading)}" method="post">
  <h2>${esc(heading)}</h2>
  <p class="scb-quote-note">${esc(note)}</p>
  <div class="scb-quote-grid">
    <div><label for="scb-q-name">Name</label><input id="scb-q-name" name="name" type="text" autocomplete="name" required /></div>
    <div><label for="scb-q-email">Email</label><input id="scb-q-email" name="email" type="email" autocomplete="email" required /></div>
    <div><label for="scb-q-phone">Phone</label><input id="scb-q-phone" name="phone" type="tel" autocomplete="tel" /></div>
    <div><label for="scb-q-qty">Quantity</label><input id="scb-q-qty" name="quantity" type="text" inputmode="numeric" placeholder="e.g. 2,500" /></div>
    ${boxField}
    <div class="scb-full"><label for="scb-q-dims">Size (L × W × H)</label><input id="scb-q-dims" name="dimensions" type="text" placeholder="e.g. 8 × 8 × 4 in — or ask us to recommend one" /></div>
    <div class="scb-full"><label for="scb-q-msg">Anything else we should know?</label><textarea id="scb-q-msg" name="message" rows="3"></textarea></div>
    <p class="scb-hp"><label for="scb-q-hp">Leave this field empty</label><input id="scb-q-hp" name="website" type="text" tabindex="-1" autocomplete="off" /></p>
    <div class="scb-full"><button type="submit">${esc(buttonLabel)}</button></div>
  </div>
</form>`;
}

export interface ProductRef { path: string; title: string; image?: string; alt?: string; blurb?: string }

/** Product cards that reuse the recovered image renditions rather than new artwork. */
export function productCards(products: ProductRef[], columns = 4): string {
  const items = products.map((product, index) => {
    const image = product.image
      ? `<img src="${esc(product.image)}" alt="${esc(product.alt || product.title)}" width="300" height="300" loading="${index < columns ? 'eager' : 'lazy'}" decoding="async" />`
      : '';
    return `<li class="scb-thumbcard">${product.image ? `<a href="${esc(product.path)}" tabindex="-1" aria-hidden="true">${image}</a>` : ''}<div class="scb-thumbcard-body"><h3><a href="${esc(product.path)}">${esc(product.title)}</a></h3>${product.blurb ? `<p>${esc(product.blurb)}</p>` : ''}</div></li>`;
  }).join('');
  return `<ul class="scb-cards">${items}</ul>`;
}

export interface LinkCard { path: string; title: string; blurb: string; meta?: string }

export function linkCards(cards: LinkCard[]): string {
  const items = cards.map((card) => `<li class="scb-card">${card.meta ? `<span class="scb-card-meta">${esc(card.meta)}</span>` : ''}<h3><a href="${esc(card.path)}">${esc(card.title)}</a></h3><p>${esc(card.blurb)}</p></li>`).join('');
  return `<ul class="scb-cards">${items}</ul>`;
}

export function linkRow(links: { path: string; label: string }[]): string {
  return `<ul class="scb-linkrow">${links.map((link) => `<li><a href="${esc(link.path)}">${esc(link.label)}</a></li>`).join('')}</ul>`;
}

export function specTable(caption: string, head: string[], rows: string[][]): string {
  return `<div class="scb-tablewrap"><table class="scb-table">${caption ? `<caption>${esc(caption)}</caption>` : ''}<thead><tr>${head.map((cell) => `<th scope="col">${esc(cell)}</th>`).join('')}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell, index) => (index === 0 ? `<th scope="row">${cell}</th>` : `<td>${cell}</td>`)).join('')}</tr>`).join('')}</tbody></table></div>`;
}

export function cta(heading: string, body: string, actions: { path: string; label: string; kind?: 'gold' | 'ghost' }[]): string {
  const buttons = actions.map((action) => `<a class="scb-btn scb-btn-${action.kind || 'gold'}" href="${esc(action.path)}">${esc(action.label)}</a>`).join('');
  return `<section class="scb-section scb-cta"><h2>${esc(heading)}</h2><p>${body}</p><div class="scb-cta-actions">${buttons}</div></section>`;
}
