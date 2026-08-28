import type { CategoryContent } from './types';
import { specTable, linkRow } from '../../lib/seo/blocks';

/**
 * /products/ is the shop root — every box we make, paginated sixteen at a time. It
 * had no description, a leaked block of Elementor CSS as body copy, a duplicate H1 and
 * twenty-nine links to products that do not exist. The repair removes that block; this
 * gives the page something worth indexing in its place.
 */
export const shopRoot: CategoryContent = {
  path: '/products/',
  title: 'All Cardboard Boxes | 186 Styles, Custom Sizes, Wholesale',
  description: 'Every cardboard box we make — 186 styles across shipping, food, gift, retail and specialist packaging. Custom sizes from 100 units with free design support.',
  crumbs: [{ name: 'Home', path: '/' }, { name: 'All cardboard boxes', path: '/products/' }],
  intro: `<p class="scb-lede">Every box in the catalogue, in one list. One hundred and eighty-six styles, all made to order, all available in a size built for your product rather than a size we happen to stock.</p>
<p>If you know what you are looking for, the collections below narrow it down faster than scrolling. If you do not, tell us what goes in the box and we will suggest two or three structures.</p>`,
  quote: {
    heading: 'Not sure where to start?',
    note: 'Describe the product and roughly how many you ship. A specialist replies with a shortlist and pricing.',
    buttonLabel: 'Ask for a shortlist',
    formName: 'Shop enquiry',
  },
  sections: `
<section class="scb-section">
  <h2>Ten collections, and what each one is for</h2>
  <p>The catalogue is grouped ten ways. Most people arrive knowing one of these three things: what the box has to survive, what shape it needs to be, or what goes inside it.</p>
  ${specTable('Where to start from what you already know', ['If you know…', 'Start here', 'Covers'], [
    ['The journey', '<a href="/product-category/cardboard-shipping-boxes/">Shipping and mailing</a>', 'Parcel mailers, postal boxes, pallet outers, crates'],
    ['The weight', '<a href="/product-category/cardboard-boxes-by-material-strength/">Board strength</a>', 'Single, double and triple wall, insulated and specialist boards'],
    ['The dimensions', '<a href="/product-category/cardboard-boxes-by-size-and-shape/">Size and shape</a>', 'Small to extra large, round, hexagon, cube, rigid formats'],
    ['The product', '<a href="/product-category/cardboard-boxes-by-functionality/">Functionality</a>', 'Electronics, health, stationery, decor, colour and branded'],
    ['It is food', '<a href="/product-category/food-related-cardboard-boxes/">Food packaging</a>', 'Bakery, takeaway, catering, produce, frozen and grocery'],
    ['It is a gift', '<a href="/product-category/cosmetic-and-gift-cardboard-boxes/">Cosmetic and gift</a>', 'Rigid, magnetic, hamper, PR kits and seasonal formats'],
    ['It goes on a shelf', '<a href="/product-category/retail-and-display-packaging/">Retail and display</a>', 'Shelf-ready cases, counter units, hanging packs, window boxes'],
    ['The job it does', '<a href="/product-category/cardboard-boxes-for-specific-uses/">Specific uses</a>', 'Storage, shoes, lids, handles, sleeves, inserts'],
    ['The quantity', '<a href="/product-category/wholesale-cardboard-boxes/">Wholesale and bulk</a>', 'Volume pricing, call-off delivery, plain commodity boxes'],
    ['The item', '<a href="/product-category/packaging-for-specific-items/">Specific items</a>', 'Fitted bottle packaging and plain paper boxes'],
  ])}
</section>

<section class="scb-section scb-tinted">
  <h2>What is the same across all 186</h2>
  <ul>
    <li><strong>Made to order.</strong> Nothing here is stock. Every box is cut from a dieline built for your dimensions, so a non-standard size carries no premium.</li>
    <li><strong>From 100 units.</strong> A genuine minimum rather than a headline. Digital printing makes short runs viable at a sensible unit price.</li>
    <li><strong>Free dieline and artwork setup,</strong> including a print-ready proof before production starts.</li>
    <li><strong>8–10 business days</strong> from artwork approval, with delivery included anywhere in the United States.</li>
    <li><strong>Pricing from $0.30 per piece,</strong> falling with volume. Board grade, printing and quantity drive the rest.</li>
  </ul>
  ${linkRow([
    { path: '/design-your-box/', label: 'Configure a box' },
    { path: '/resources/', label: 'Read the packaging guides' },
    { path: '/product-category/wholesale-cardboard-boxes/', label: 'Volume pricing' },
    { path: '/locations/', label: 'Where we ship' },
  ])}
</section>`,
  faqHeading: 'Questions about ordering',
  ctaHeading: 'Narrow 186 boxes down to two',
  ctaBody: 'Tell us what goes in the box and roughly how many you ship. A specialist replies with a shortlist and pricing rather than a catalogue.',
  faqs: [
    { q: 'Do you stock any of these boxes?', a: 'No. Everything is produced to order against a dieline built for your dimensions. That is why a custom size costs the same as a standard one at the same board grade, and why lead time is production time rather than picking time.' },
    { q: 'What is the minimum order?', a: '100 boxes. Digital printing carries no plate cost at that quantity, so a short run stays economic. The per-unit price is higher than at 2,500 because setup is spread over fewer pieces.' },
    { q: 'How long does an order take?', a: '8–10 business days from artwork approval, with delivery included anywhere in the United States. Rigid boxes and specialist finishes such as foil stamping add a few days.' },
    { q: 'Can I order a box that is not in this catalogue?', a: 'Yes. The catalogue covers the structures we are asked for most, not every dieline we can cut. Describe what you need and we will build it.' },
    { q: 'Is the $0.30 price per box or per order?', a: 'Per piece, and it is a starting point rather than a fixed price. Board grade, size, printing and quantity all move it, and volume moves it down.' },
    { q: 'Do you supply samples?', a: 'Yes. A plain structural sample confirms the fit and the board feel. A printed sample is possible on digital presses, which is worth it when colour accuracy matters to a launch.' },
    { q: 'Can one order include several different boxes?', a: 'Yes, and it is common. Each style is quoted on its own quantity and they ship together. Where several share a board grade, producing them in one run is usually cheaper than ordering separately.' },
  ],
};

/** Pagination pages get a short unique description rather than none at all. */
export const shopPageDescription = (page: number, total: number): string =>
  `Page ${page} of ${total} in the full Shop Cardboard Boxes catalogue — 186 custom box styles across shipping, food, gift, retail and specialist packaging.`;
