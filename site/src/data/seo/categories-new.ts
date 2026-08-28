import type { CategoryContent } from './types';
import { specTable, linkRow, linkCards } from '../../lib/seo/blocks';

const HOME = { name: 'Home', path: '/' };
const SHOP = { name: 'All cardboard boxes', path: '/products/' };

/**
 * Three collections that did not exist on the WordPress site. Each was added because
 * Search Console showed real demand with no page holding it, and because a set of
 * products already in the catalogue answers that demand. Colour, corrugated, lidded
 * and size-specific collections were considered and rejected: an established product
 * page already ranks for each of those, and a new archive would have competed with it.
 */

export const shipping: CategoryContent = {
  path: '/product-category/cardboard-shipping-boxes/',
  title: 'Cardboard Shipping & Mailing Boxes | Bulk, Single or Custom',
  description: 'Cardboard shipping boxes, mailers and postal cartons for parcel and pallet freight. Single wall to triple wall, sold in bulk or as single boxes. Custom sizes.',
  crumbs: [HOME, SHOP, { name: 'Shipping and mailing boxes', path: '/product-category/cardboard-shipping-boxes/' }],
  authored: {
    h1: 'Cardboard Shipping and Mailing Boxes',
    eyebrow: 'Transit packaging',
    lede: 'Boxes chosen for the journey rather than the shelf — parcel mailers, postal cartons, palletised outers and heavy-duty crates, in board grades matched to the weight going inside.',
    facts: [
      { label: 'From', value: '$0.30 / piece' },
      { label: 'Minimum order', value: '100 boxes' },
      { label: 'Production', value: '8–10 business days' },
      { label: 'Shipping', value: 'Free across the US' },
    ],
    productIds: [2996, 2997, 2255, 2226, 2227, 2228, 3179, 2217, 2218, 2219, 2245, 3206, 3207, 3210, 3186, 3185, 2985, 3205, 3211, 2998],
  },
  intro: `<p class="scb-lede">A shipping box has one job and a short list of enemies: compression on a pallet, impact at a sorting hub, and a carrier's dimensional weight formula. Everything in this collection is specified against those three.</p>
<p>The range spans single boxes for occasional senders through to pallet boxes and heavy-duty crates. Board grade is chosen from the weight and the stack height, not from the price list.</p>`,
  quote: {
    heading: 'Get shipping box pricing',
    note: 'Give us the product weight, the box size and roughly how many you send a month. We will price the board grade that actually suits the route.',
    boxTypes: ['Parcel / ecommerce box', 'Mailer or postal box', 'Single shipping box', 'Palletised outer', 'Heavy-duty crate', 'Poster or tube'],
    buttonLabel: 'Request shipping box pricing',
  },
  sections: `
<section class="scb-section">
  <h2>Which shipping format fits your operation</h2>
  ${linkCards([
    { path: '/product/custom-cardboard-shipping-boxes/', title: 'Custom shipping boxes', blurb: 'Regular slotted cartons cut to your internal dimensions. The default for ecommerce fulfilment where box size drives freight cost.' },
    { path: '/product/cardboard-mailing-boxes/', title: 'Mailing boxes', blurb: 'Crash-lock and self-sealing formats that pack in one motion. Faster on a packing bench than a taped carton, and no tape cost.' },
    { path: '/product/single-cardboard-boxes/', title: 'Single boxes', blurb: 'Individual boxes for occasional senders and one-off shipments, rather than a pallet of one size you will never finish.' },
    { path: '/product/cardboard-postal-boxes/', title: 'Postal boxes', blurb: 'Sized against postal service dimension bands so a parcel stays in the cheaper rate rather than tipping into the next one.' },
    { path: '/product/cardboard-corrugated-pallet-boxes/', title: 'Pallet boxes', blurb: 'Large double and triple wall containers that sit on a standard pallet footprint for bulk and industrial freight.' },
    { path: '/product/cardboard-poster-shipping-tubes/', title: 'Poster tubes', blurb: 'Rigid tubes with end caps for rolled prints, plans and artwork, where a flat box would crease the contents.' },
  ])}
</section>

<section class="scb-section scb-tinted">
  <h2>Dimensional weight — the reason box size matters more than box price</h2>
  <p>Most carriers bill on whichever is greater: actual weight, or a volume figure derived from the box dimensions. A lightweight product in an oversized box is billed as though it were heavy. This is why trimming an inch off each dimension often saves more per year than negotiating the board price.</p>
  ${specTable('How box size affects a parcel rate', ['Box size', 'Volume', 'Billable weight at 139 divisor', 'Practical effect'], [
    ['12 × 10 × 8 in', '960 in³', '~6.9 lb', 'Billed as 7 lb even if it holds 2 lb of product'],
    ['10 × 8 × 6 in', '480 in³', '~3.5 lb', 'Halves the billable weight for the same contents'],
    ['8 × 6 × 4 in', '192 in³', '~1.4 lb', 'Actual weight usually wins — you pay for what you ship'],
  ])}
  <p>The lesson is not to use the smallest possible box; it is to use a box that fits. Our <a href="/resources/how-to-choose-a-shipping-box/">shipping box selection guide</a> works through fit, board grade and carrier bands together, and <a href="/resources/reduce-packaging-and-shipping-costs/">the cost reduction guide</a> covers where the remaining savings usually hide.</p>
</section>

<section class="scb-section">
  <h2>Board grade by weight</h2>
  <p>Two thirds of shipping enquiries arrive asking for "strong boxes". This is the shorter version of that conversation.</p>
  <ul>
    <li><strong>Under 20 lb, parcel network.</strong> 32 ECT <a href="/product/single-wall-cardboard-boxes/">single wall</a> is enough, and anything heavier is money spent on freight weight you do not need.</li>
    <li><strong>20–65 lb, or palletised.</strong> 48 ECT <a href="/product/double-wall-cardboard-boxes/">double wall</a>. Stacking is what breaks boxes on a pallet, and this is where the extra layer earns its cost.</li>
    <li><strong>Above 65 lb, or industrial.</strong> <a href="/product/triple-wall-corrugated-cardboard-boxes/">Triple wall</a> or a <a href="/product/cardboard-heavy-duty-shipping-crates/">heavy-duty crate</a>. At this weight the alternative is a timber crate, and corrugated is lighter and cheaper to dispose of.</li>
    <li><strong>Temperature controlled.</strong> <a href="/product/cardboard-insulated-cold-boxes/">Insulated cold boxes</a>, sized around the coolant as well as the product.</li>
  </ul>
  ${linkRow([
    { path: '/product-category/cardboard-boxes-by-material-strength/', label: 'All board strengths' },
    { path: '/product-category/wholesale-cardboard-boxes/', label: 'Bulk and wholesale ordering' },
    { path: '/resources/corrugated-box-strength-guide/', label: 'ECT and Mullen explained' },
    { path: '/resources/packaging-fragile-products/', label: 'Packaging fragile products' },
    { path: '/design-your-box/', label: 'Design your box' },
  ])}
</section>`,
  faqHeading: 'Shipping box questions',
  ctaHeading: 'Price a shipping box that fits',
  ctaBody: 'Send the product weight, the box size and roughly how many you send a month. We will price the board grade the route actually needs.',
  faqs: [
    { q: 'Can I buy shipping boxes as singles rather than in bulk?', a: 'Yes. Single boxes are available for one-off shipments and occasional senders. The per-unit price is higher than a bulk run, which is the trade-off for not holding stock you will not use.' },
    { q: 'What is the cheapest way to ship a light but bulky product?', a: 'Reduce the box, not the board. Because carriers bill on dimensional weight, shaving an inch off each dimension usually saves more than dropping a board grade — and dropping the grade risks damage costs that dwarf the saving.' },
    { q: 'Do you make boxes sized to a specific carrier rate band?', a: 'Yes. Tell us the carrier and the band you are aiming for and we will build the dieline so the external dimensions sit inside it, allowing for board thickness and any tape overlap.' },
    { q: 'Should shipping boxes be printed?', a: 'For most operations, no. A printed transit box costs more and is recycled within minutes of arrival. A plain box with a printed label or a branded tape gives most of the brand effect for a fraction of the cost. Retail-facing boxes are a different question.' },
    { q: 'What is the difference between an RSC and a mailer box?', a: 'A regular slotted carton has flaps that meet in the middle and needs tape. A mailer has a hinged lid and a tuck or crash-lock closure and needs none. Mailers pack faster and look better on arrival; RSCs are cheaper per unit and stronger for heavy loads.' },
    { q: 'Can boxes be delivered directly to a third-party fulfilment centre?', a: 'Yes. Give us the receiving address, any booking reference and the pallet or carton labelling the site requires, and the shipment goes straight there.' },
    { q: 'How many boxes fit on a pallet?', a: 'Flat-packed, several hundred to a few thousand depending on size and board. We confirm the pallet count and shipment dimensions on every quote so you can plan receiving and storage before you order.' },
    { q: 'Do you supply void fill or tape as well?', a: 'Our range is the boxes themselves. Where a box is tight enough to need no void fill we will say so, because a fitted box plus an insert is usually cheaper than a loose box plus filler.' },
    { q: 'What lead time applies to shipping boxes?', a: 'Production and delivery run 8–10 business days. Plain unprinted stock in common sizes is the fastest; custom dielines and printed boxes sit at the longer end.' },
  ],
};

export const retailDisplay: CategoryContent = {
  path: '/product-category/retail-and-display-packaging/',
  title: 'Retail & Display Cardboard Packaging | Shelf Ready, Counter',
  description: 'Shelf-ready cases, counter display units, POP boxes, hanging packaging and window boxes in printed corrugated board. Built for retail listings and merchandising.',
  crumbs: [HOME, SHOP, { name: 'Retail and display packaging', path: '/product-category/retail-and-display-packaging/' }],
  authored: {
    h1: 'Retail and Display Cardboard Packaging',
    eyebrow: 'Point of sale',
    lede: 'Packaging that has to do two jobs at once: protect the product in transit, then become part of the fixture when the case is opened. Shelf-ready cases, counter units, hanging packs and window boxes.',
    facts: [
      { label: 'From', value: '$0.30 / piece' },
      { label: 'Minimum order', value: '100 units' },
      { label: 'Print', value: 'Litho, flexo or digital' },
      { label: 'Design', value: 'Dieline and artwork free' },
    ],
    productIds: [3217, 3218, 3220, 3222, 3223, 3204, 2246, 3202, 2286, 2276, 2984, 3130, 3216, 3164, 2241, 2988],
  },
  intro: `<p class="scb-lede">Retail packaging is judged twice. Once by a buyer deciding whether it fits their planogram and how fast staff can put it out, and once by a shopper who gives it about three seconds.</p>
<p>The formats here are built for both readings — a case that opens into a display in one movement, and a printed face that still reads from a few feet away.</p>`,
  quote: {
    heading: 'Brief us on a retail rollout',
    note: 'Tell us the retailer, the shelf or counter dimensions and the case quantity. We will come back with a structure that fits the fixture.',
    boxTypes: ['Shelf-ready case', 'Counter display unit', 'POP display box', 'Hanging pack', 'Window box', 'Printed retail carton'],
    buttonLabel: 'Brief our retail team',
  },
  sections: `
<section class="scb-section scb-tinted">
  <h2>Shelf-ready packaging, and why buyers ask for it</h2>
  <p>Shelf-ready packaging is a transit case designed to become the shelf presentation. A perforated tear strip removes the top and front, and what remains is a printed tray the staff member pushes straight onto the fixture. The retailer's interest is labour: a case that goes out in one movement instead of unpacking twelve units individually.</p>
  <p>The specification usually comes from the retailer rather than from you — case count, tray height, front panel print area and the position of the perforation are all typically fixed. Send us the spec sheet and we will build to it. <a href="/product/cardboard-shelf-ready-packaging/">Shelf-ready packaging</a> is the starting point, and <a href="/resources/retail-packaging-guide/">the retail packaging guide</a> covers how the requirements are usually written.</p>
</section>

<section class="scb-section">
  <h2>Display formats and where each one earns its place</h2>
  ${specTable('Display formats compared', ['Format', 'Where it sits', 'Typical run', 'Board'], [
    ['<a href="/product/cardboard-counter-display-units/"><strong>Counter display unit</strong></a>', 'Beside a till, impulse purchase', '250–5,000', 'E or B flute, printed'],
    ['<a href="/product/cardboard-pop-display-boxes/"><strong>POP display box</strong></a>', 'Aisle end or promotional space', '250–2,500', 'B flute, litho-laminated'],
    ['<a href="/product/cardboard-hanging-display-packaging/"><strong>Hanging pack</strong></a>', 'Peg hook or slat wall', '500+', 'Card with a reinforced euro slot'],
    ['<a href="/product/cardboard-retail-display-trays/"><strong>Display tray</strong></a>', 'Shelf, stacked or standalone', '500+', 'B flute corrugated'],
    ['<a href="/product/cardboard-display-window-boxes/"><strong>Window box</strong></a>', 'Shelf, product visible', '250+', 'Folding carton with PET film'],
  ])}
  <div class="scb-callout"><p><strong>The detail that fails most often:</strong> a counter unit that will not stay upright once it is half empty. If the unit relies on the product for rigidity, it collapses at exactly the moment it is working. Ask for a structural sample loaded to 30% and see what happens.</p></div>
</section>

<section class="scb-section">
  <h2>Printing for retail</h2>
  <p>Corrugated board is not a smooth surface, and fluting shows through under solid colour. There are two ways round it. Direct flexo printing on the corrugated liner is cheaper and suits bold, simple artwork. Litho lamination — printing a paper sheet offset and bonding it to the board — costs more and gives you photographic quality. For anything that will sit in a national retailer, litho lamination is usually the expectation.</p>
  <p>Where the product itself carries the branding, a plain outer with <a href="/product/cardboard-sleeve-packaging/">printed sleeve packaging</a> or a <a href="/product/cardboard-sticker-packaging-boxes/">sticker-applied finish</a> keeps versioning cheap across a range.</p>
  ${linkRow([
    { path: '/product-category/cosmetic-and-gift-cardboard-boxes/', label: 'Cosmetic and gift boxes' },
    { path: '/product-category/cardboard-boxes-for-specific-uses/', label: 'Boxes for specific uses' },
    { path: '/resources/custom-box-printing-methods/', label: 'Printing methods compared' },
    { path: '/resources/retail-packaging-guide/', label: 'Retail packaging guide' },
  ])}
</section>`,
  faqHeading: 'Retail and display packaging questions',
  ctaHeading: 'Brief us on a retail rollout',
  ctaBody: 'Send the retailer specification, the fixture dimensions and the store count. We will build the structure and price the delivery.',
  faqs: [
    { q: 'What does a retailer usually specify for shelf-ready packaging?', a: 'Case count, external case dimensions to fit the fixture, tray height after opening, the position and type of perforation, and the printable area on the front face. Most large retailers publish a spec sheet — send it over and we build to it.' },
    { q: 'How long does a counter display unit need to last?', a: 'Most promotional counter units are specified for a four to eight week cycle. Beyond that the board scuffs and the unit stops selling. If you need it to last a season, ask for a heavier flute and a laminated surface.' },
    { q: 'Can display units ship flat and be assembled in store?', a: 'Yes, and for anything shipped in volume it is the sensible default. Flat-packed units with a clear assembly sequence cut freight substantially. Complex units can be supplied part-assembled to reduce the steps a store colleague has to follow.' },
    { q: 'Is litho lamination worth the extra cost?', a: 'If the artwork is photographic or your brand colour has to be exact, yes. If the design is bold, flat colour and simple type, direct flexo printing looks nearly as good for noticeably less.' },
    { q: 'What is a euro slot and do I need one?', a: 'A euro slot is the keyhole-shaped die cut that lets a pack hang on a peg hook. You need it if the product will be merchandised on a peg wall. It needs reinforcement — an unreinforced slot tears within days of handling.' },
    { q: 'Can one structure carry several product variants?', a: 'Yes. A single dieline with versioned print is the standard approach across a range. Keeping the structure fixed means one tooling cost and one approval cycle, with only the artwork changing per variant.' },
    { q: 'Do you produce the retailer\'s barcode and compliance panel?', a: 'We print what you supply. Send the barcode at the correct magnification along with any compliance text, and it is placed on the dieline in the position the retailer requires.' },
    { q: 'What quantities do retail rollouts usually run at?', a: 'Counter and POP units commonly run 250–5,000. Shelf-ready cases run much higher because they scale with product volume. Both are quoted per unit at the volume you actually need rather than to a fixed price break.' },
  ],
};

export const wholesale: CategoryContent = {
  path: '/product-category/wholesale-cardboard-boxes/',
  title: 'Wholesale Cardboard Boxes in Bulk | Volume Pricing',
  description: 'Buy cardboard boxes wholesale from 100 units to full pallet quantities. Volume pricing, scheduled call-off deliveries, free design and US-wide shipping.',
  crumbs: [HOME, SHOP, { name: 'Wholesale and bulk', path: '/product-category/wholesale-cardboard-boxes/' }],
  authored: {
    h1: 'Wholesale Cardboard Boxes in Bulk',
    eyebrow: 'Volume ordering',
    lede: 'The commodity end of the catalogue, priced for quantity: plain and printed corrugated boxes bought by the pallet, with scheduled deliveries for businesses that would rather not store six months of stock at once.',
    facts: [
      { label: 'From', value: '$0.30 / piece' },
      { label: 'Minimum order', value: '100 boxes' },
      { label: 'Volume breaks', value: '500 / 2.5k / 10k / 50k' },
      { label: 'Shipping', value: 'Free across the US' },
    ],
    productIds: [2227, 2226, 2228, 2217, 2218, 2219, 2238, 2236, 2233, 2221, 2242, 2997, 2990, 3210, 3206, 2998, 2231, 2234],
  },
  intro: `<p class="scb-lede">Buying cardboard in volume is mostly an exercise in not over-committing. The per-unit price keeps falling, the storage cost keeps rising, and somewhere between those two lines is the order you should actually place.</p>
<p>This collection groups the boxes that are bought by the pallet rather than by the piece, alongside the terms that apply to them: where the price breaks fall, how call-off delivery works, and what changes above ten thousand units.</p>`,
  quote: {
    heading: 'Request volume pricing',
    note: 'Tell us the box, the annual quantity and whether you want it in one delivery or called off across the year. Quotes come back with the breaks laid out.',
    boxTypes: ['Plain corrugated boxes', 'Printed shipping boxes', 'Mailers', 'Storage boxes', 'Pallet boxes', 'Mixed order'],
    buttonLabel: 'Request volume pricing',
  },
  sections: `
<section class="scb-section scb-tinted">
  <h2>Where the price breaks fall</h2>
  <p>Unit price falls in steps rather than smoothly, because the fixed costs — dieline, plates, machine setup — are spread across the run. The steps below are where the change is large enough to be worth planning around.</p>
  ${specTable('What changes at each volume', ['Quantity', 'What changes', 'Best suited to'], [
    ['<strong>100–499</strong>', 'Digital printing only; setup is a visible share of the price', 'Launches, samples, seasonal one-offs'],
    ['<strong>500–2,499</strong>', 'Offset and flexo become viable; plate cost starts to amortise', 'Small brands with steady sales'],
    ['<strong>2,500–9,999</strong>', 'Setup costs largely disappear into the run', 'Established ecommerce and food service'],
    ['<strong>10,000–49,999</strong>', 'Board is bought at mill rates; call-off scheduling available', 'Retail supply and multi-site operations'],
    ['<strong>50,000+</strong>', 'Dedicated production scheduling and stock holding', 'National distribution'],
  ])}
  <p>The largest single saving for most buyers is not the next volume break. It is fixing the box size so that fewer SKUs cover the same range — three well-chosen sizes usually beat seven that each get ordered in small quantities.</p>
</section>

<section class="scb-section">
  <h2>Ordering a year without storing a year</h2>
  <p>Committing to a volume and taking delivery in instalments gets you the volume price without the warehouse. You agree the annual quantity, we produce it, and it ships on a schedule you set — monthly, quarterly, or when you call it off.</p>
  <p>It suits seasonal businesses particularly well: a bakery ordering <a href="/product/cardboard-storage-boxes/">storage boxes</a> and food cartons in one commitment, taking a light delivery through summer and a heavy one before December, pays the annual rate on all of it.</p>
  <div class="scb-callout"><p><strong>Before committing to a year:</strong> confirm the artwork is final and the box size is settled. A stored pallet of boxes with last season's logo is the most common way a volume saving turns into a write-off.</p></div>
</section>

<section class="scb-section">
  <h2>What is bought in bulk most often</h2>
  <ul>
    <li><strong>Plain corrugated.</strong> <a href="/product/corrugated-cardboard-boxes/">Corrugated cardboard boxes</a> and <a href="/product/brown-cardboard-boxes/">brown kraft boxes</a> in two or three sizes cover the majority of transit needs and are the cheapest thing to hold in volume.</li>
    <li><strong>Unbranded stock.</strong> <a href="/product/blank-cardboard-boxes/">Blank boxes</a> for resellers and fulfilment operations that apply their own labels on despatch.</li>
    <li><strong>Size ladders.</strong> <a href="/product/small-cardboard-boxes/">Small</a>, <a href="/product/medium-cardboard-boxes/">medium</a> and <a href="/product/large-cardboard-boxes/">large</a> ordered together, which is usually cheaper than three separate orders across a year.</li>
    <li><strong>Pallet formats.</strong> <a href="/product/cardboard-corrugated-pallet-boxes/">Pallet boxes</a> and <a href="/product/cardboard-bulk-shipping-trays/">bulk shipping trays</a> for warehouse and industrial handling.</li>
  </ul>
  ${linkRow([
    { path: '/product-category/cardboard-shipping-boxes/', label: 'Shipping and mailing boxes' },
    { path: '/product-category/cardboard-boxes-by-material-strength/', label: 'Board strengths' },
    { path: '/resources/reduce-packaging-and-shipping-costs/', label: 'Reducing packaging costs' },
    { path: '/resources/cardboard-box-sizes-guide/', label: 'Choosing a size ladder' },
  ])}
</section>`,
  faqHeading: 'Wholesale and bulk ordering questions',
  ctaHeading: 'Get volume pricing',
  ctaBody: 'Tell us the box, the annual quantity and whether you want one delivery or a call-off schedule. The quote comes back with the breaks laid out.',
  faqs: [
    { q: 'What is the minimum wholesale order?', a: '100 boxes. That is genuinely the floor rather than a headline figure, though the per-unit price at 100 is materially higher than at 2,500 because setup costs are spread over fewer pieces.' },
    { q: 'Do I have to take the whole order at once?', a: 'No. Scheduled call-off delivery lets you commit to an annual quantity for the volume price and take it in instalments across the year. Storage stays with us until you need it.' },
    { q: 'Is there a discount for ordering several box types together?', a: 'Yes, where they share a board grade and can be produced in the same run. Combining three sizes of the same corrugated spec is usually cheaper than ordering them separately across a year.' },
    { q: 'How much does printing add at volume?', a: 'Proportionally less the more you order, because plate and setup costs are fixed. At 500 units printing is a visible share of the unit price; at 10,000 it is a small fraction of it.' },
    { q: 'Can you hold stock for us?', a: 'For scheduled call-off orders, yes. Ad-hoc storage outside an agreed schedule is not something we offer, because unallocated stock ties up production capacity.' },
    { q: 'What are the payment terms on a large order?', a: 'Terms are agreed per account. Larger and repeat orders are commonly structured as a deposit with the balance before despatch. Talk to us before ordering rather than after and we will set it up.' },
    { q: 'Do bulk prices include delivery?', a: 'Shipping across the United States is included. For multi-drop delivery to several sites, tell us the addresses at quote stage so the freight is priced correctly rather than adjusted afterwards.' },
    { q: 'Can we get a sample before a large commitment?', a: 'Yes, and on a large order you should. A plain structural sample confirms the fit; a printed sample confirms the colour. Both are far cheaper than discovering a problem on a pallet of ten thousand.' },
    { q: 'What happens if we need to change the artwork mid-contract?', a: 'For unproduced quantities on a call-off schedule, artwork can be revised before the next production batch. Boxes already produced cannot be changed, which is why we recommend committing to shorter batches when a rebrand may be coming.' },
  ],
};
