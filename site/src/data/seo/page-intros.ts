import type { Crumb } from '../../lib/seo/util';

export interface PageIntro {
  /** Prepended above the recovered content. Used where a page has no H1 of its own. */
  h1?: string;
  lede?: string;
  eyebrow?: string;
  crumbs: Crumb[];
  /** Appended below the recovered content. */
  after?: string;
}

const HOME: Crumb = { name: 'Home', path: '/' };

/**
 * Small additions to pages that are replayed from the WordPress snapshot. Two of them
 * had no <h1> at all; the rest gain visible breadcrumbs so the hierarchy shown to a
 * reader matches the BreadcrumbList markup.
 *
 * PROTECTED and deliberately absent: /refund_returns/, /terms-conditions/,
 * /privacy-policy/. They keep exactly the content, headings and markup they had.
 */
export const PAGE_INTROS: Record<string, PageIntro> = {
  '/contact-us/': {
    h1: 'Contact Shop Cardboard Boxes',
    eyebrow: 'Talk to us',
    lede: '<p>Send the product dimensions and roughly how many boxes you need, and a packaging specialist replies with pricing, board options and a lead time — usually the same working day. If you would rather work through the specification yourself first, the <a href="/design-your-box/">box configurator</a> collects the same information step by step.</p>',
    crumbs: [HOME, { name: 'Contact us', path: '/contact-us/' }],
  },
  '/thank-you/': {
    h1: 'Thank you — we have your enquiry',
    lede: '<p>A packaging specialist will read your enquiry and reply with pricing and a recommendation, usually within one working day. While you wait, the <a href="/resources/">packaging guides</a> cover the questions that most often come up next.</p>',
    crumbs: [HOME, { name: 'Thank you', path: '/thank-you/' }],
  },
  '/about-us/': {
    crumbs: [HOME, { name: 'About us', path: '/about-us/' }],
  },
  '/category/information/': {
    crumbs: [HOME, { name: 'Articles', path: '/category/information/' }],
  },
  '/from-round-to-decorative-your-complete-guide-to-cardboard-box-options/': {
    crumbs: [HOME, { name: 'Articles', path: '/category/information/' }, { name: 'Cardboard box options', path: '/from-round-to-decorative-your-complete-guide-to-cardboard-box-options/' }],
    after: '<section class="scb-section"><h2>Go deeper on any of these</h2><p>Our packaging guides cover the same ground in more detail, with the specifications behind each choice.</p><ul><li><a href="/resources/box-styles-explained/">Box styles explained — RSC, mailer, tuck-end and rigid</a></li><li><a href="/resources/cardboard-box-sizes-guide/">Cardboard box sizes and how to build a size ladder</a></li><li><a href="/product-category/cardboard-boxes-by-size-and-shape/">Browse boxes by size and shape</a></li></ul></section>',
  },
  '/key-features-of-using-corrugated-cardboard-in-modern-packaging-design/': {
    crumbs: [HOME, { name: 'Articles', path: '/category/information/' }, { name: 'Corrugated in packaging design', path: '/key-features-of-using-corrugated-cardboard-in-modern-packaging-design/' }],
    after: '<section class="scb-section"><h2>The specifications behind this</h2><p>If you are choosing a corrugated board rather than reading about it, these guides carry the numbers.</p><ul><li><a href="/resources/corrugated-box-strength-guide/">ECT and Mullen ratings, and which one your carrier cares about</a></li><li><a href="/resources/cardboard-flute-types/">Flute types compared at relative scale</a></li><li><a href="/product/corrugated-cardboard-boxes/">Corrugated cardboard boxes</a></li></ul></section>',
  },
  '/why-small-cardboard-boxes-are-essential-for-e-commerce-success/': {
    crumbs: [HOME, { name: 'Articles', path: '/category/information/' }, { name: 'Small boxes for ecommerce', path: '/why-small-cardboard-boxes-are-essential-for-e-commerce-success/' }],
    after: '<section class="scb-section"><h2>Putting this into practice</h2><p>The operational version of this argument, with the numbers attached.</p><ul><li><a href="/resources/reduce-packaging-and-shipping-costs/">Seven cost levers, ranked by what they usually save</a></li><li><a href="/resources/ecommerce-packaging-guide/">Building an ecommerce packaging set-up</a></li><li><a href="/product/small-cardboard-boxes/">Small cardboard boxes</a></li></ul></section>',
  },
};
