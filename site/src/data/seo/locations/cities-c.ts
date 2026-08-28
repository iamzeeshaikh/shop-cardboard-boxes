import type { LocationPage } from './types';
import { specTable } from '../../../lib/seo/blocks';

export const jacksonville: LocationPage = {
  slug: 'jacksonville', kind: 'city', name: 'Jacksonville', stateName: 'Florida', stateSlug: 'florida', region: 'Southeast',
  title: 'Cardboard Boxes in Jacksonville | Port Freight & Distribution',
  description: 'Cardboard packaging for Jacksonville businesses — export crates that skip timber treatment rules, humid-climate board specification and distribution volume.',
  h1: 'Cardboard Boxes for Jacksonville',
  eyebrow: 'City',
  summary: 'Export packaging that avoids timber regulation, board specified for a humid climate, and distribution-scale ordering.',
  lede: `<p>Jacksonville handles freight for a large slice of the Southeast, and it does it in a climate that is quietly hostile to corrugated board. Those two facts account for most of what we are asked here.</p>`,
  layout: 'form-after-first-section',
  sections: [
    {
      h2: 'Export freight without the timber paperwork',
      html: `<p>Solid wood used in international packaging has to be heat treated and marked to ISPM 15 — a cost, a lead time and a compliance risk on every shipment. Corrugated is exempt.</p>
<p>A <a href="/product/cardboard-heavy-duty-shipping-crates/">corrugated crate</a> carries several hundred pounds strapped to a pallet, weighs materially less than the timber equivalent, and recycles at the destination rather than becoming the receiver's disposal problem. Above a certain weight, or where the packaging must be reused for years, timber still wins — but that threshold is higher than most people assume.</p>`,
    },
    {
      h2: 'Specifying for a humid climate',
      html: `<p>Corrugated absorbs atmospheric moisture and loses stacking strength as it does. In a port yard in August, held for days, that loss is large enough that a box specified for a dry warehouse is genuinely under-specified.</p>
<ul>
  <li><strong>Specify a grade up</strong> for anything held more than a few days outside climate control.</li>
  <li><strong>Ask for a moisture-resistant coating</strong> where boxes sit outdoors or in a container yard.</li>
  <li><strong>Stack lower rather than upgrading the board</strong> where you can. Board creeps under sustained load, and humidity accelerates it.</li>
</ul>
<p><a href="/resources/corrugated-box-strength-guide/">The strength guide</a> covers how ECT figures translate into real stacking limits.</p>`,
    },
    {
      h2: 'Distribution ordering',
      html: `<p>For distribution operations the largest saving is usually consolidating the box range rather than negotiating a unit price. Four sizes that each cover about a quarter of shipments beat seven that each miss the volume break — and the packing bench gets faster too. <a href="/product-category/wholesale-cardboard-boxes/">Wholesale ordering</a> shows where the breaks fall.</p>`,
    },
  ],
  faqHeading: 'Jacksonville packaging questions',
  faqs: [
    { q: 'Do corrugated crates need ISPM 15 treatment?', a: 'No. Heat treatment and marking apply to solid wood packaging. Corrugated is exempt, which removes a cost, a lead time and a compliance step from an export shipment.' },
    { q: 'How much does port humidity cost in stacking strength?', a: 'Enough to plan around. Days held in humid conditions remove a substantial fraction of a box\'s stacking capacity, so export freight is normally specified a grade above the equivalent domestic shipment.' },
    { q: 'Can you deliver into a forwarder rather than to us?', a: 'Yes, and for export work it saves a leg of domestic freight. Forwarders usually specify a delivery window and a labelling format; send both with the enquiry.' },
    { q: 'What is the practical weight ceiling for a corrugated crate?', a: 'Several hundred pounds evenly distributed and strapped to a pallet. Concentrated loads need an insert that spreads the weight across the base rather than a heavier crate.' },
    { q: 'How many box sizes should a distributor hold?', a: 'Usually three or four, each covering roughly a quarter of shipments. Beyond that, fragmented purchasing costs more than the closer fit saves.' },
  ],
  shop: [
    { path: '/product/cardboard-heavy-duty-shipping-crates/', label: 'Export crates' },
    { path: '/product/cardboard-corrugated-pallet-boxes/', label: 'Pallet boxes' },
    { path: '/product-category/wholesale-cardboard-boxes/', label: 'Wholesale ordering' },
  ],
  guides: [
    { path: '/resources/corrugated-box-strength-guide/', label: 'Board strength and humidity' },
    { path: '/resources/boxes-for-heavy-products/', label: 'Boxes for heavy products' },
  ],
  cta: { heading: 'Quote a Jacksonville shipment', body: 'Tell us the weight, the destination and how long it sits before it moves. All three change the board.', label: 'Request a quote' },
};

export const fortWorth: LocationPage = {
  slug: 'fort-worth', kind: 'city', name: 'Fort Worth', stateName: 'Texas', stateSlug: 'texas', region: 'Southwest',
  title: 'Cardboard Boxes in Fort Worth | Agriculture & Aviation Parts',
  description: 'Cardboard packaging for Fort Worth businesses — agricultural and feed packaging, aviation component boxes with fitted inserts, and bulk ordering.',
  h1: 'Cardboard Boxes for Fort Worth',
  eyebrow: 'City',
  summary: 'Agricultural and feed packaging, aviation component boxes, and bulk ordering for seasonal demand.',
  lede: `<p>Fort Worth's packaging demand runs from agricultural bulk at one end to aviation components at the other. They share one characteristic: both are usually heavier than the person specifying them expects.</p>`,
  layout: 'form-at-end',
  sections: [
    {
      h2: 'Feed, seed and seasonal bulk',
      html: `<p>Agricultural packaging is bought seasonally in large single orders, which makes ordering rhythm as important as specification. Committing to an annual quantity gets the volume price; a call-off schedule means the boxes arrive before the season rather than sitting through months of humidity in a barn.</p>
<p>For the boxes themselves, <a href="/product/cardboard-bulk-shipping-trays/">bulk shipping trays</a> and <a href="/product/cardboard-corrugated-pallet-boxes/">pallet boxes</a> cover most of the volume. Hand holes are near-universal on this work and need positioning high on the side wall, away from the corner posts that carry the stack.</p>`,
    },
    {
      h2: 'Aviation and precision components',
      html: `<p>Aviation parts are the demanding case: valuable, often irregular, frequently with protruding fittings, and shipped with documentation attached.</p>
<p>The specification that works is a fitted insert rather than a heavier box. Protrusions are where punctures happen — flat faces rarely fail — so the insert has to account for the fittings specifically rather than just the bounding box. For traceability, approved dielines stay on file so every reorder is identical.</p>
<p>See <a href="/product/cardboard-industrial-parts-packaging/">industrial parts packaging</a> and <a href="/resources/cardboard-box-inserts-guide/">the insert guide</a>.</p>`,
    },
    {
      h2: 'Getting the weight right',
      html: `${specTable('What each weight band needs', ['Gross weight', 'Board', 'Closure'], [
  ['Up to 30 lb', 'Single wall, 32 ECT', 'Taped regular slotted carton'],
  ['30–65 lb', 'Double wall, 48 ECT', 'H-taped, reinforced handles if carried'],
  ['65–120 lb', 'Triple wall, 90+ ECT', 'Full overlap base'],
  ['Above 120 lb', 'Corrugated crate', 'Strapped to a pallet'],
])}
<p>The commonest error is specifying to the total weight when the load is concentrated. A dense part resting on one corner fails well below the box rating — an insert that spreads the load is the fix.</p>`,
    },
  ],
  faqHeading: 'Fort Worth packaging questions',
  faqs: [
    { q: 'Where should hand holes go on a bulk agricultural box?', a: 'High on the side wall and away from the corners. Corner posts carry the stack, so cutting into them costs far more strength than cutting into a panel.' },
    { q: 'How do I package a part with protruding fittings?', a: 'With an insert built around the fittings, not just around the bounding box. Protrusions are where punctures happen; flat faces rarely fail.' },
    { q: 'Can I order a season\'s packaging in one run?', a: 'Yes, and it is usually cheapest. Commit to the annual quantity for the volume price and set a call-off schedule so boxes arrive before the season rather than months early.' },
    { q: 'Why did a box fail below its rated weight?', a: 'Almost always because the load was concentrated rather than evenly distributed. Ratings assume even distribution; a dense part on one corner fails well under the figure.' },
    { q: 'Do you keep dielines on file for traceable reorders?', a: 'Yes. Once approved, a structure stays on file so every reorder is identical and needs only a quantity.' },
  ],
  shop: [
    { path: '/product/cardboard-bulk-shipping-trays/', label: 'Bulk shipping trays' },
    { path: '/product/cardboard-industrial-parts-packaging/', label: 'Industrial parts packaging' },
    { path: '/product/cardboard-heavy-duty-shipping-crates/', label: 'Heavy duty crates' },
  ],
  guides: [
    { path: '/resources/boxes-for-heavy-products/', label: 'Boxes for heavy products' },
    { path: '/resources/cardboard-box-inserts-guide/', label: 'Specifying inserts' },
  ],
  cta: { heading: 'Quote a Fort Worth order', body: 'Send the weight and how the load sits in the box. Concentrated loads change the answer.', label: 'Request pricing' },
};

export const columbus: LocationPage = {
  slug: 'columbus', kind: 'city', name: 'Columbus', stateName: 'Ohio', stateSlug: 'ohio', region: 'Midwest',
  title: 'Cardboard Boxes in Columbus | Apparel Fulfilment & Returns',
  description: 'Cardboard packaging for Columbus businesses — apparel fulfilment boxes, resealable mailers built for returns, and high-volume distribution ordering.',
  h1: 'Cardboard Boxes for Columbus',
  eyebrow: 'City',
  summary: 'Apparel fulfilment, resealable mailers built around returns, and distribution ordering at real volume.',
  lede: `<p>Columbus does an unusual amount of apparel fulfilment, and apparel has the highest return rate of any ecommerce category. That single fact should shape the packaging more than it usually does.</p>`,
  layout: 'form-in-hero',
  facts: [
    { label: 'Minimum', value: '100 boxes' },
    { label: 'Volume breaks', value: '500 / 2.5k / 10k / 50k' },
    { label: 'Delivery', value: 'Free, US-wide' },
  ],
  sections: [
    {
      h2: 'Designing packaging around returns',
      html: `<p>A taped regular slotted carton cannot be resealed by a customer who has cut it open. They improvise, the parcel arrives back damaged, and it becomes a support conversation.</p>
<p>A <a href="/product/cardboard-mailing-boxes/">mailer with a second adhesive strip</a> solves it entirely: the customer peels the second liner and reseals the same box. The unit cost premium over a taped carton is small, and in a category returning a meaningful share of orders it pays for itself in support time before it pays for itself in packaging.</p>
<p>Two details matter. The second strip has to be far enough from the first that the flap still closes cleanly, and the return address panel should be printed rather than relying on a label the customer has to find.</p>`,
    },
    {
      h2: 'Fulfilment box ladders',
      html: `<p>At fulfilment volume the box ladder matters more than any individual box. Every additional size is a decision the packer makes, a SKU that misses a volume break, and shelf space in the pick area.</p>
<p>Three or four sizes covering roughly a quarter of orders each is where most apparel operations land. Because carriers bill on dimensional weight, a shallow rectangle beats a cube for folded garments on both fit and freight. <a href="/resources/cardboard-box-sizes-guide/">The sizes guide</a> covers drawing the cut lines from real order data.</p>`,
    },
    {
      h2: 'Buying at distribution scale',
      html: `<p>Above roughly 10,000 units, board is bought at mill rates and scheduled call-off delivery becomes available — commit to the annual quantity, take it monthly. That matters in fulfilment, where pick-area space is genuinely scarce. <a href="/product-category/wholesale-cardboard-boxes/">Wholesale ordering</a> covers the terms.</p>`,
    },
  ],
  faqHeading: 'Columbus fulfilment questions',
  faqs: [
    { q: 'What makes a box resealable for returns?', a: 'A second adhesive strip on the closing flap, positioned far enough from the first that the flap still closes cleanly. The customer peels the liner and reseals the same box.' },
    { q: 'Is a resealable mailer worth the extra cost?', a: 'In apparel, almost always. Return rates are high enough that the saving in support time and damaged return parcels outweighs the unit premium quickly.' },
    { q: 'Why does apparel end up in shallow boxes?', a: 'Because a folded garment is flat and a cube is not. Matching the box to the shape removes empty volume, and since carriers bill on volume the saving repeats on every order rather than appearing once.' },
    { q: 'How many box sizes should a fulfilment operation carry?', a: 'Three or four, each covering roughly a quarter of orders. Every extra size is a packer decision, a missed volume break and shelf space in the pick area.' },
    { q: 'Can you deliver on a monthly schedule?', a: 'Yes, through scheduled call-off. Commit to an annual quantity for the volume price and take delivery monthly, which keeps pick-area space free.' },
  ],
  shop: [
    { path: '/product/cardboard-mailing-boxes/', label: 'Resealable mailers' },
    { path: '/product/custom-cardboard-shipping-boxes/', label: 'Custom shipping boxes' },
    { path: '/product-category/wholesale-cardboard-boxes/', label: 'Wholesale and call-off' },
  ],
  guides: [
    { path: '/resources/ecommerce-packaging-guide/', label: 'Ecommerce packaging guide' },
    { path: '/resources/cardboard-box-sizes-guide/', label: 'Building a size ladder' },
  ],
  cta: { heading: 'Model a Columbus box ladder', body: 'Send a month of order dimensions and we will show you which sizes to keep and which to drop.', label: 'Send my order data' },
};

export const charlotte: LocationPage = {
  slug: 'charlotte', kind: 'city', name: 'Charlotte', stateName: 'North Carolina', stateSlug: 'north-carolina', region: 'Southeast',
  title: 'Cardboard Boxes in Charlotte | Corporate Gifting & Textiles',
  description: 'Cardboard packaging for Charlotte businesses — corporate gift and welcome kit boxes, textile and apparel packaging, and regional distribution ordering.',
  h1: 'Cardboard Boxes for Charlotte',
  eyebrow: 'City',
  summary: 'Corporate gifting and welcome kits, textile packaging, and regional distribution at sensible volumes.',
  lede: `<p>Charlotte's concentration of corporate head offices produces a steady, distinctive demand: welcome kits, client gifts and event boxes, usually in the low hundreds, usually on a fixed date, and usually judged on how they look when opened.</p>`,
  layout: 'form-after-first-section',
  sections: [
    {
      h2: 'Corporate gifting and welcome kits',
      html: `<p>A kit box is a presentation problem with a logistics problem attached. It has to hold several unlike items in a fixed arrangement, survive shipping, and look deliberate when the lid comes off.</p>
<p>The insert does nearly all of that work. A die-cut corrugated insert with a cavity per item keeps the arrangement intact and is far cheaper than the foam alternative — and it recycles with the box, which corporate buyers increasingly ask about. See <a href="/product/cardboard-welcome-kit-boxes/">welcome kit boxes</a> and <a href="/product/cardboard-corporate-gift-packaging/">corporate gift packaging</a>.</p>
<p>For quantities in the low hundreds, digital printing is the right process: no plate cost, and the artwork can be personalised or versioned without penalty.</p>`,
    },
    {
      h2: 'Textiles and apparel',
      html: `<p>The region's textile heritage still shows in the volume of apparel packaging bought here. The recurring points are the same as anywhere: a shallow rectangle rather than a cube for folded goods, and a resealable closure if the goods sell direct to consumers.</p>
<p>Where garments are shipped in bulk to retailers rather than to consumers, the specification shifts to stacking — Edge Crush Test rather than puncture resistance — and <a href="/product/cardboard-shelf-ready-packaging/">shelf-ready cases</a> if the retailer requires them.</p>`,
    },
    {
      h2: 'Regional distribution',
      html: `<p>Charlotte's position makes it a natural distribution point for the Carolinas and beyond, which brings the usual consolidation opportunity: fewer box sizes, each bought at a better price. <a href="/resources/reduce-packaging-and-shipping-costs/">The cost guide</a> ranks the levers.</p>`,
    },
  ],
  faqHeading: 'Charlotte packaging questions',
  faqs: [
    { q: 'What holds a multi-item gift kit in place?', a: 'A die-cut corrugated insert with a cavity per item. It keeps the arrangement intact through shipping, costs far less than foam, and recycles with the box.' },
    { q: 'Can gift boxes be personalised per recipient?', a: 'With digital printing, yes — there is no plate, so each box in a run can differ. It is one of the few genuine advantages digital has over offset.' },
    { q: 'What quantity suits a corporate gifting run?', a: 'Anything from 100 upwards. Digital printing makes low hundreds economic, which is where most corporate kit projects sit.' },
    { q: 'How should bulk apparel ship to a retailer?', a: 'Specified against stacking rather than puncture — Edge Crush Test is the number — and in shelf-ready format if the retailer requires it. Send their spec sheet and we build to it.' },
    { q: 'What is the lead time on a corporate kit?', a: 'Eight to ten business days from artwork approval, plus delivery. If the kit has to land on a specific day, tell us at quote stage and we will confirm the date before you commit rather than after.' },
  ],
  shop: [
    { path: '/product/cardboard-welcome-kit-boxes/', label: 'Welcome kit boxes' },
    { path: '/product/cardboard-corporate-gift-packaging/', label: 'Corporate gift packaging' },
    { path: '/product/cardboard-shelf-ready-packaging/', label: 'Shelf ready packaging' },
  ],
  guides: [
    { path: '/resources/cardboard-box-inserts-guide/', label: 'Specifying inserts' },
    { path: '/resources/custom-box-printing-methods/', label: 'Printing methods' },
  ],
  cta: { heading: 'Brief a Charlotte project', body: 'Tell us what goes in the kit and when it has to land. We will build the insert around the contents.', label: 'Start a brief' },
};

export const indianapolis: LocationPage = {
  slug: 'indianapolis', kind: 'city', name: 'Indianapolis', stateName: 'Indiana', stateSlug: 'indiana', region: 'Midwest',
  title: 'Cardboard Boxes in Indianapolis | Air Freight & Pharma',
  description: 'Cardboard packaging for Indianapolis businesses — boxes sized for air freight rate bands, pharmaceutical distribution cartons, and event and sports merchandise.',
  h1: 'Cardboard Boxes for Indianapolis',
  eyebrow: 'City',
  summary: 'Boxes sized against air freight bands, pharmaceutical distribution cartons, and short-run event merchandise.',
  lede: `<p>A large share of what leaves Indianapolis goes by air, and air freight punishes volume harder than any other mode. That makes box dimensions — not board grade — the decision that moves the bill.</p>`,
  layout: 'form-at-end',
  sections: [
    {
      h2: 'Why a dimension beats a discount here',
      html: `<p>Air carriers charge on whichever is greater: the actual weight, or a volume figure derived from the box dimensions. For most of what leaves this city the volume figure wins, which means the box is billed for space rather than for contents.</p>
<p>What follows from that is unintuitive. Negotiating five per cent off the box price moves almost nothing. Removing an inch from each dimension moves the freight bill on <em>every parcel, permanently</em> — and the freight bill is usually the larger number by a wide margin.</p>
<p>Two things make that saving available. The first is that our boxes carry no premium for a non-standard size, because each one is cut to a dieline built for your measurements — so there is no reason to round up to a stock size. The second is that dimensional weight is calculated on external dimensions, which are larger than the internal ones you specify by roughly twice the board thickness on each axis, plus any tape overlap. Build to the band with that allowance and you sit inside it; forget it and you land just outside.</p>
<p>Send us a week of shipment dimensions and your carrier's band table and we will design the ladder around both. <a href="/product/custom-size-cardboard-boxes/">Custom size boxes</a> and <a href="/resources/reduce-packaging-and-shipping-costs/">the cost reduction guide</a> cover the method.</p>`,
    },
    {
      h2: 'Pharmaceutical distribution',
      html: `<p>Distribution cartons for regulated products have to reproduce identically batch after batch. Offset lithography with a mixed spot ink does that; digital simulation drifts slightly between runs. A coated white board holds small regulated type better than kraft.</p>
<p>See <a href="/product/cardboard-pill-packaging-boxes/">pill packaging boxes</a> and <a href="/product/cardboard-medical-device-packaging/">medical device packaging</a>.</p>`,
    },
    {
      h2: 'Event and sports merchandise',
      html: `<p>Event merchandise is a short run on a fixed date with artwork that arrives late. Digital printing handles all three: no plate cost at 100 units, and the file can change until close to production.</p>
<p>Where several designs are needed, keeping one box structure and varying a printed <a href="/product/cardboard-sleeve-packaging/">sleeve</a> avoids retooling for every variant.</p>`,
    },
  ],
  faqHeading: 'Indianapolis packaging questions',
  faqs: [
    { q: 'Is it worth redesigning a box just to change its dimensions?', a: 'On air freight, almost always. The saving lands on every parcel for as long as you ship that product, and a new dieline costs nothing — we build it as part of the order rather than charging for tooling.' },
    { q: 'How much does an inch actually cost?', a: 'Trimming one inch from each axis of a 12 × 10 × 8 in box removes roughly a quarter of its volume. On a light product billed on dimensional weight, that is close to a quarter off the freight line for that parcel.' },
    { q: 'Why offset rather than digital for regulated cartons?', a: 'Consistency between batches. A mixed spot ink reproduces exactly and small type stays sharp; digital simulates colour in CMYK and drifts slightly run to run.' },
    { q: 'How late can artwork arrive for an event run?', a: 'Later than most people assume, because digital printing has no plate stage. The 8–10 business day production window starts at artwork approval, so work backwards from your date and tell us the deadline at quote stage.' },
    { q: 'How do I run several merchandise designs affordably?', a: 'Keep one box structure and vary a printed sleeve or a label. One dieline, one structural approval, artwork changing per design.' },
  ],
  shop: [
    { path: '/product/custom-size-cardboard-boxes/', label: 'Custom size boxes' },
    { path: '/product/cardboard-pill-packaging-boxes/', label: 'Pill packaging boxes' },
    { path: '/product/cardboard-sleeve-packaging/', label: 'Printed sleeves' },
  ],
  guides: [
    { path: '/resources/how-to-choose-a-shipping-box/', label: 'Choosing a shipping box' },
    { path: '/resources/reduce-packaging-and-shipping-costs/', label: 'Reducing shipping costs' },
  ],
  cta: { heading: 'Size an Indianapolis order', body: 'Send your carrier band table and a week of order dimensions. We will build the ladder to fit inside it.', label: 'Send my dimensions' },
};
