import { plain } from './util';
import type { Faq } from './util';

/**
 * Return the inner HTML of the element that starts at `openTagIndex`, by counting
 * nested <div> opens and closes. WordPress output is well balanced, so a counter is
 * enough and it avoids pulling in a DOM parser at request time.
 */
function innerHtmlOfDiv(html: string, openTagIndex: number): string {
  const start = html.indexOf('>', openTagIndex);
  if (start < 0) return '';
  let depth = 1;
  let cursor = start + 1;
  const tag = /<(\/?)div\b/gi;
  tag.lastIndex = cursor;
  let match: RegExpExecArray | null;
  while ((match = tag.exec(html))) {
    depth += match[1] ? -1 : 1;
    if (depth === 0) return html.slice(cursor, match.index);
  }
  return html.slice(cursor);
}

/**
 * Lift the questions and answers a product page already shows in its "Faqs" tab.
 * FAQPage markup has to describe visible content, so the schema is generated from the
 * rendered HTML rather than from a separate copy that could drift out of sync.
 */
export function extractProductFaqs(contentHtml: string): Faq[] {
  const anchor = contentHtml.indexOf('id="tab-faqs_tab"');
  if (anchor < 0) return [];
  const openTag = contentHtml.lastIndexOf('<div', anchor);
  if (openTag < 0) return [];
  const panel = innerHtmlOfDiv(contentHtml, openTag);
  const faqs: Faq[] = [];
  const headings = [...panel.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)];
  headings.forEach((heading, index) => {
    const from = (heading.index ?? 0) + heading[0].length;
    const to = index + 1 < headings.length ? headings[index + 1].index ?? panel.length : panel.length;
    const question = plain(heading[1]).replace(/^\d+[.)]\s*/, '');
    const answer = plain(panel.slice(from, to));
    if (question && answer) faqs.push({ q: question, a: answer });
  });
  return faqs;
}

/** The specification table a product page shows, used to describe real options in copy. */
export function extractSpecTableRows(contentHtml: string): string[][] {
  const anchor = contentHtml.indexOf('id="tab-specifications_tab"');
  if (anchor < 0) return [];
  const openTag = contentHtml.lastIndexOf('<div', anchor);
  if (openTag < 0) return [];
  const panel = innerHtmlOfDiv(contentHtml, openTag);
  return [...panel.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)]
    .map((row) => [...row[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map((cell) => plain(cell[1])));
}

/** Product titles already rendered in a category grid, in the order the grid shows them. */
export function extractGridProducts(contentHtml: string): { path: string; title: string }[] {
  const seen = new Map<string, string>();
  for (const match of contentHtml.matchAll(/<a href="(\/product\/[^"]+)"><h2 class="woocommerce-loop-product__title">([\s\S]*?)<\/h2><\/a>/gi)) {
    if (!seen.has(match[1])) seen.set(match[1], plain(match[2]));
  }
  return [...seen].map(([path, title]) => ({ path, title }));
}
