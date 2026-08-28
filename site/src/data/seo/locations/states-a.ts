import type { LocationPage } from './types';
import { specTable } from '../../../lib/seo/blocks';

export const california: LocationPage = {
  slug: 'california', kind: 'state', name: 'California', region: 'West',
  title: 'Cardboard Boxes in California | Custom Packaging, Wholesale',
  description: 'Custom cardboard boxes shipped to California businesses — produce packing in the Central Valley, beauty brands in LA, and ecommerce across the state.',
  h1: 'Cardboard Boxes for California Businesses',
  eyebrow: 'West',
  summary: 'Produce packing in the Central Valley, beauty brands in Los Angeles, and ecommerce shipping in every direction.',
  lede: `<p>California asks more different things of a cardboard box than any other state we ship to. A grower in Fresno needs a vented tray that stacks eight high in a cold room. A skincare brand in Culver City needs a carton that photographs well. A fulfilment operation in the Inland Empire needs three sizes and a price that holds all year.</p>
<p>We ship to all of it from a single production run, with free delivery across the United States. What follows is what tends to matter to each of those customers.</p>`,
  layout: 'form-in-hero',
  facts: [
    { label: 'Delivery', value: 'Free, US-wide' },
    { label: 'Production', value: '8–10 days' },
    { label: 'Minimum', value: '100 boxes' },
  ],
  sections: [
    {
      h2: 'Produce packing in the Central Valley',
      html: `<p>The agricultural counties running from Bakersfield to Sacramento generate the state's most demanding packaging requirement, and it is not strength — it is airflow. Field-packed produce respires, and a sealed box spoils a load faster than a rough journey does.</p>
<p>That means die-cut ventilation and hand holes positioned high on the side walls, where they double as airflow without sacrificing the corner posts that carry the stack. Because every one of those cuts removes load-bearing board, a ventilated box needs a higher grade than a plain box of the same dimensions to stack the same.</p>
<p>That trade-off is already built into the <a href="/product/cardboard-vegetable-packaging-boxes/">vegetable packing boxes we produce</a>, where the grade is set from the ventilated panel area rather than from the flat sheet.</p>
<p>Shallow loads buy the strength back more cheaply. <a href="/product/cardboard-fruit-packaging-boxes/">Fruit trays sized for single layers</a> carry less weight per stack, so the same vent pattern costs less grade to compensate for.</p>
<p>Cold-room humidity is the other factor. Corrugated loses a meaningful share of its stacking strength in sustained damp, so anything going into refrigerated storage for more than a few days is normally specified a grade up.</p>`,
    },
    {
      h2: 'Beauty and wellness brands in Los Angeles',
      html: `<p>Southern California's beauty sector buys packaging on a completely different basis. Here the carton is a marketing surface, and the decisions are about finish rather than flute: soft touch or matte, foil on the logo or nothing, printed interior or plain.</p>
<p>The most common mistake we see from launching brands is spending the budget on the outside of a shipper that gets recycled in thirty seconds. The printed inner face of a lid, or a <a href="/product/cardboard-sleeve-packaging/">printed sleeve over a plain tray</a>, reaches the customer far more reliably for less.</p>
<p>Where each process stops being economic is a question of run length rather than taste, and <a href="/resources/custom-box-printing-methods/">our guide to box printing methods</a> works through the crossover points.</p>`,
    },
    {
      h2: 'Fulfilment and the Inland Empire',
      html: `<p>The warehouse corridor around Ontario and Riverside runs on a different clock. Volume is high, margins are thin, and the packaging decision that matters is the size ladder rather than any individual box.</p>
<p>Three or four sizes covering roughly a quarter of orders each beats seven sizes that each miss the volume break. Because carriers bill on dimensional weight, the freight saving from a tighter fit compounds on every parcel. <a href="/resources/reduce-packaging-and-shipping-costs/">The cost reduction guide</a> ranks the levers by what they usually save.</p>`,
    },
    {
      h2: 'Shipping into and out of California',
      html: `<p>Two things shape packaging specification here that do not apply everywhere. Distance is one: a shipment from Sacramento to San Diego is a longer journey than most interstate freight elsewhere, and it is often palletised, which makes Edge Crush Test the number that matters.</p>
<p>The second is that a large share of California freight moves through the ports at Los Angeles, Long Beach and Oakland. Export shipments sit in humid conditions for weeks, and a corrugated crate avoids the heat-treatment requirements that apply to solid wood packaging — worth knowing before specifying timber. See <a href="/product/cardboard-heavy-duty-shipping-crates/">heavy-duty shipping crates</a>.</p>`,
    },
  ],
  faqHeading: 'Ordering from California',
  faqs: [
    { q: 'How long does delivery to California take?', a: 'Production runs 8–10 business days from artwork approval, and delivery is included anywhere in the United States. Delivery time on top of production depends on the destination within the state; we confirm it on the quote.' },
    { q: 'Do you have a warehouse in California?', a: 'No. We produce to order and ship nationwide, so there is no California stockholding and no local pickup. If a fixed delivery date matters, tell us at quote stage and we will confirm it before you commit.' },
    { q: 'Can boxes be delivered to a third-party fulfilment centre in the Inland Empire?', a: 'Yes. Give us the receiving address, any booking reference and the pallet or carton labelling that site requires, and the shipment goes directly there.' },
    { q: 'What board grade suits produce shipping in the Central Valley?', a: 'Ventilated single wall handles most field-pack work, but the die cuts remove load-bearing board and cold-room humidity removes more. For anything stacking high or sitting in refrigeration for days, double wall is the safer specification.' },
    { q: 'Are food-grade boxes available for California food businesses?', a: 'Yes. Food-contact orders are produced on food-grade board with food-safe inks, and the specification is stated on the quote so it is documented rather than assumed.' },
    { q: 'Do you supply small California brands as well as large operations?', a: 'Minimum order is 100 boxes, and digital printing makes that viable at a sensible price. A great many first orders from California brands are exactly that size.' },
  ],
  shop: [
    { path: '/product/cardboard-vegetable-packaging-boxes/', label: 'Vegetable packing boxes' },
    { path: '/product/cardboard-cosmetic-packaging/', label: 'Cosmetic packaging' },
    { path: '/product-category/cardboard-shipping-boxes/', label: 'Shipping and mailing boxes' },
  ],
  guides: [
    { path: '/resources/reduce-packaging-and-shipping-costs/', label: 'Reducing packaging costs' },
    { path: '/resources/food-packaging-box-guide/', label: 'Food packaging guide' },
  ],
  cta: { heading: 'Price a California order', body: 'Send dimensions and a quantity and a specialist replies with pricing, board options and a delivery date.', label: 'Request pricing' },
};

export const texas: LocationPage = {
  slug: 'texas', kind: 'state', name: 'Texas', region: 'Southwest',
  title: 'Cardboard Boxes in Texas | Industrial & Food Packaging',
  description: 'Cardboard boxes and corrugated crates shipped across Texas — oilfield and industrial parts, restaurant and food service packaging, and long in-state freight.',
  h1: 'Cardboard Boxes and Crates for Texas',
  eyebrow: 'Southwest',
  summary: 'Industrial parts packaging, food service volume and the freight distances that come with the biggest contiguous state.',
  lede: `<p>Texas packaging problems tend to be problems of weight and distance. Industrial and oilfield components are dense and awkward. Food service operations buy in volume that makes a cent per box matter. And a delivery from Amarillo to Brownsville is further than most people's idea of interstate freight.</p>`,
  layout: 'form-after-first-section',
  sections: [
    {
      h2: 'Heavy and industrial packaging',
      html: `<p>The energy corridor and the manufacturing belt around Houston generate the heaviest packaging enquiries we handle. Dense components in small boxes are the difficult case: the load concentrates onto a fraction of the base, so a box rated for the total weight still fails.</p>
<p>Two things usually solve it. Board grade — <a href="/product/triple-wall-cardboard-boxes/">triple wall</a> above roughly 65 lb — and an insert that spreads the load across the base rather than letting it sit in one corner.</p>
${specTable('Specification by component weight', ['Gross weight', 'Board', 'Closure'], [
  ['30–65 lb', 'Double wall, 48 ECT', 'H-taped regular slotted carton'],
  ['65–120 lb', 'Triple wall, 90+ ECT', 'Full overlap base'],
  ['120 lb and above', 'Corrugated crate', 'Strapped to a pallet'],
])}
<p>For international shipments, a <a href="/product/cardboard-heavy-duty-shipping-crates/">corrugated crate</a> avoids the ISPM 15 heat treatment and marking that solid wood packaging requires — a meaningful saving in both cost and paperwork.</p>`,
    },
    {
      h2: 'Food service and restaurant supply',
      html: `<p>Texas restaurant groups and barbecue operations buy takeaway packaging in quantities where the specification pays for itself quickly. The recurring issue is grease. Untreated board absorbs fat within minutes, and once it does the box weakens and looks poor on arrival.</p>
<p>A water-based dispersion coating handles most of it while keeping the box recyclable in most paper streams. For heavily saturated items, a greaseproof liner performs better and separates cleanly.</p>
<p>The same barrier decision runs through every hot-food structure we make, from <a href="/product/cardboard-burger-boxes/">burger boxes with vented lids</a> through to the shallow trays that go straight into a warming cabinet.</p>
<p>Barbecue and catering operations order differently again, in large formats that stack in a cabinet and then survive a drive to the venue. <a href="/product/cardboard-catering-trays/">Catering trays with reinforced bases</a> are built for that combination of weight and handling.</p>
<p>Which barrier suits which product depends on fat content and on how long the food sits before it is eaten, and <a href="/resources/food-packaging-box-guide/">the food packaging guide</a> sets the options out side by side.</p>`,
    },
    {
      h2: 'Distance, and why it changes the board',
      html: `<p>An intra-Texas shipment is frequently palletised rather than parcelled, simply because of the distances involved. That shifts the specification question from puncture resistance to stacking strength — Edge Crush Test rather than Mullen burst.</p>
<p>Summer heat compounds it. Sustained warmth in a trailer softens adhesives and, combined with humidity on the Gulf side, reduces stacking strength over a multi-day journey. For loads that sit before they are unpacked, specifying a grade up is cheap insurance.</p>`,
    },
  ],
  faqHeading: 'Texas ordering questions',
  faqs: [
    { q: 'Do you ship to Texas addresses?', a: 'Yes, and delivery is included anywhere in the United States. We produce to order rather than holding local stock, so lead time is production time plus transit — normally 8–10 business days plus delivery.' },
    { q: 'Can corrugated crates replace wooden crates for export from Houston?', a: 'For a great many shipments, yes. Corrugated crates are lighter, cheaper to freight, recyclable at the destination and exempt from the heat-treatment and marking requirements that apply to solid wood packaging.' },
    { q: 'What packaging suits a barbecue or takeaway operation?', a: 'Grease-resistant board with a water-based dispersion coating, and vents high on the side walls so steam escapes without condensing back onto the food. Catering trays for volume service, clamshells for individual portions.' },
    { q: 'Does Texas heat affect cardboard in transit?', a: 'Sustained heat softens adhesives, and combined with Gulf humidity it reduces stacking strength over a multi-day journey. For palletised loads that sit before unpacking, a grade up is worth the small extra cost.' },
    { q: 'Can you deliver to multiple Texas sites on one order?', a: 'Yes. Give us the addresses at quote stage so the freight is priced correctly rather than adjusted afterwards.' },
  ],
  shop: [
    { path: '/product/cardboard-industrial-parts-packaging/', label: 'Industrial parts packaging' },
    { path: '/product/cardboard-heavy-duty-shipping-crates/', label: 'Heavy duty crates' },
    { path: '/product/cardboard-catering-trays/', label: 'Catering trays' },
  ],
  guides: [
    { path: '/resources/boxes-for-heavy-products/', label: 'Boxes for heavy products' },
    { path: '/resources/food-packaging-box-guide/', label: 'Food packaging guide' },
  ],
  cta: { heading: 'Get a Texas quote', body: 'Tell us the weight, the size and the quantity. We will specify the board and come back with a price.', label: 'Request a quote' },
};

export const florida: LocationPage = {
  slug: 'florida', kind: 'state', name: 'Florida', region: 'Southeast',
  title: 'Cardboard Boxes in Florida | Humidity, Cold Chain & Retail',
  description: 'Cardboard packaging for Florida businesses — how humidity changes board specification, cold chain for seafood and produce, and tourism retail packaging.',
  h1: 'Cardboard Packaging for Florida',
  eyebrow: 'Southeast',
  summary: 'Where humidity changes the board specification, plus cold chain for seafood and produce and packaging for tourism retail.',
  lede: `<p>Florida is the state where the climate genuinely changes the packaging answer. Corrugated board is hygroscopic — it absorbs moisture from the air, and as it does it loses stacking strength. In sustained high humidity that loss is large enough that a box specified for a dry warehouse will fail in a Florida one.</p>
<p>Most of what follows comes back to that, plus a cold chain and a retail sector that are both unusually large here.</p>`,
  layout: 'form-at-end',
  sections: [
    {
      h2: 'What humidity does to a box, and what to do about it',
      html: `<p>Fibre absorbs water, the bond between liner and flute softens, and the board's ability to resist crush drops. It is not a small effect and it is not linear — the loss accelerates as humidity rises and as time under load extends.</p>
<p>Three practical responses:</p>
<ol>
  <li><strong>Specify a grade up</strong> for anything stored more than a few days in a non-climate-controlled space. The cost of double wall over single wall is small against a collapsed stack.</li>
  <li><strong>Ask for a moisture-resistant coating</strong> where the box sits in refrigeration or outdoors. It slows absorption considerably.</li>
  <li><strong>Reduce stack height rather than the board grade.</strong> Board creeps under sustained load, and humidity accelerates creep. Two pallets stacked lower often outperform one stacked high.</li>
</ol>
<p><a href="/resources/corrugated-box-strength-guide/">The strength guide</a> covers how Edge Crush Test figures translate into real stacking limits.</p>`,
    },
    {
      h2: 'Seafood, produce and the cold chain',
      html: `<p>Florida's seafood and citrus sectors both need packaging that survives condensation as well as cold. When a chilled box meets warm humid air, moisture forms on every surface — including the inside of the board.</p>
<p>Seafood and chilled produce need a moisture barrier and an insulating liner working together, with the coolant sized to the route rather than to the box. <a href="/product/cardboard-seafood-packaging-boxes/">Seafood packaging with a moisture barrier</a> is built to that combination.</p>
<p>Citrus and field produce invert the priority. The load arrives warm and needs to lose heat rather than hold it, so <a href="/product/cardboard-fruit-packaging-boxes/">fruit packaging boxes with die-cut vents</a> matter more here than insulation does.</p>`,
    },
    {
      h2: 'Retail and tourism packaging',
      html: `<p>Gift and souvenir retail is a larger share of Florida's packaging demand than it is almost anywhere else, and it has an unusual constraint: a meaningful proportion of what is sold gets packed into a suitcase.</p>
<p>That rewards packaging that is light, that protects without bulk, and that survives being sat on. A <a href="/product/cardboard-rigid-lid-base-boxes/">rigid lid and base box</a> reads as a gift and holds its shape; a folding carton with a fitted insert weighs less and travels flatter. Which one is right depends on whether the box is the gift or just carries it.</p>`,
    },
  ],
  faqHeading: 'Florida packaging questions',
  faqs: [
    { q: 'How much strength does Florida humidity actually cost?', a: 'Enough to plan around. Sustained high humidity removes a substantial fraction of a box\'s stacking strength, and the effect grows the longer the box is under load. For non-climate-controlled storage, specify a grade above what a dry warehouse would need.' },
    { q: 'Can boxes be moisture resistant and still recyclable?', a: 'A water-based dispersion coating slows moisture absorption considerably and is accepted in most paper recycling streams. A PE coating resists more and recycles much less easily.' },
    { q: 'What packaging suits shipping seafood from Florida?', a: 'An insulated box with a moisture barrier, sized around the coolant as much as the product. Condensation is the specific risk here — a box that handles cold but not damp fails on the second day.' },
    { q: 'Do you deliver to Florida during hurricane season?', a: 'We ship nationwide year-round, but severe weather can delay carriers. If you have a fixed date, tell us at quote stage and build contingency into the order rather than into the delivery.' },
    { q: 'Is ventilated packaging available for citrus and produce?', a: 'Yes. Die-cut vents and hand holes are standard on produce formats. Because those cuts remove load-bearing board, ventilated boxes are usually specified a grade above a plain box of the same size.' },
  ],
  shop: [
    { path: '/product/cardboard-insulated-cold-boxes/', label: 'Insulated cold boxes' },
    { path: '/product/cardboard-seafood-packaging-boxes/', label: 'Seafood packaging' },
    { path: '/product/cardboard-fruit-packaging-boxes/', label: 'Fruit packaging boxes' },
  ],
  guides: [
    { path: '/resources/corrugated-box-strength-guide/', label: 'Board strength and humidity' },
    { path: '/resources/food-packaging-box-guide/', label: 'Food packaging guide' },
  ],
  cta: { heading: 'Specify a Florida order', body: 'Tell us where the boxes will be stored and for how long. Humidity changes the answer, and we would rather get it right first time.', label: 'Ask for a specification' },
};

export const newYork: LocationPage = {
  slug: 'new-york', kind: 'state', name: 'New York', region: 'Northeast',
  title: 'Cardboard Boxes in New York | Fashion, Retail & Ecommerce',
  description: 'Custom cardboard boxes for New York businesses — apparel and accessories, specialty food, and packaging built for dense urban delivery and small stockrooms.',
  h1: 'Cardboard Boxes for New York Businesses',
  eyebrow: 'Northeast',
  summary: 'Apparel and accessories, specialty food, and the packaging constraints that come with very little storage space.',
  lede: `<p>New York adds a constraint most states do not: space. A brand operating out of a Garment District studio or a Brooklyn workshop has nowhere to put six months of boxes, and the freight elevator is booked. That single fact changes how packaging should be bought here more than any industry difference does.</p>`,
  layout: 'form-in-hero',
  facts: [
    { label: 'Minimum', value: '100 boxes' },
    { label: 'Delivery', value: 'Free, US-wide' },
    { label: 'Call-off', value: 'Staged delivery available' },
  ],
  sections: [
    {
      h2: 'Buying volume without storing volume',
      html: `<p>The per-unit price of a cardboard box keeps falling as quantity rises, which pulls against having nowhere to put it. Scheduled call-off delivery resolves that: you commit to an annual quantity and get the volume rate, and the boxes arrive monthly or quarterly instead of all at once.</p>
<p>It is the single most useful thing we do for New York customers, and it is worth setting up before the first order rather than after the stockroom fills. <a href="/product-category/wholesale-cardboard-boxes/">Wholesale ordering</a> covers how the price breaks fall.</p>`,
    },
    {
      h2: 'Apparel and accessories',
      html: `<p>Fashion packaging is mostly a flat-goods problem. A shallow box beats a cube for garments, both because it fits the product and because carriers bill on volume. Around 12 × 9 × 4 inches covers a large share of single-garment orders.</p>
<p>The other recurring requirement is returns. Apparel has the highest return rate of any ecommerce category, and a taped carton that the customer has to cut open cannot be resealed. A <a href="/product/cardboard-mailing-boxes/">mailer with a second adhesive strip</a> turns a support problem into a non-event, and the unit cost difference is small.</p>
<p>For accessories and jewellery the presentation does the selling, and the box is part of the product rather than its wrapper. <a href="/product/cardboard-boxes-for-jewellery/">Jewellery boxes with fitted inserts</a> hold the piece at the angle it should be seen from.</p>
<p>Rings are the tightest case of all, where a millimetre of movement reads as cheapness. <a href="/product/cardboard-ring-boxes/">Small rigid ring boxes</a> use a slotted pad rather than an open cavity for exactly that reason.</p>`,
    },
    {
      h2: 'Specialty food and delivery density',
      html: `<p>New York food businesses ship into the densest delivery environment in the country, where a box is handled more times per mile than almost anywhere. Bakery and confectionery boxes need fitted inserts so nothing tips; hot food formats need ventilation so steam does not soften the board on the tenth stop of a route.</p>
<p>Bakery work divides on grease and on whether the box is carried out or shipped. <a href="/product/cardboard-bakery-boxes/">Bakery boxes with a window panel</a> suit counter sales, where the product does the selling through the box.</p>
<p>Pastry travels worse than bread and needs less room to slide, which is why <a href="/product/cardboard-pastry-boxes/">pastry boxes are built shallow</a> rather than tall.</p>
<p>Which barrier to specify depends on butter content more than on the bake, and <a href="/resources/food-packaging-box-guide/">the food packaging guide</a> compares the coatings that handle it.</p>`,
    },
    {
      h2: 'What we are not',
      html: `<p>Worth stating plainly: we do not operate a New York warehouse, showroom or pickup point. Boxes are produced to order and shipped to you, with delivery included anywhere in the United States. If you need packaging today, a local supplier is the right call. If you need packaging specified properly at a wholesale price, that is what we do.</p>`,
    },
  ],
  faqHeading: 'New York ordering questions',
  faqs: [
    { q: 'Can I collect an order in New York?', a: 'No. We produce to order and ship to you; there is no New York location and no pickup point. Delivery is included in the price anywhere in the United States.' },
    { q: 'How does staged delivery work?', a: 'You commit to an annual quantity, which sets the price, and we ship it on a schedule you choose — monthly, quarterly, or on call-off. The stock stays with us until you need it, which matters when storage is the constraint.' },
    { q: 'What box size suits single-garment ecommerce orders?', a: 'A shallow rectangle rather than a cube — around 12 × 9 × 4 inches covers a large share of apparel orders and sits inside most carriers\' cheaper dimensional weight bands.' },
    { q: 'Do you make resealable boxes for returns?', a: 'Yes. A mailer with a second adhesive strip lets the customer reseal the same box. In apparel, where return rates are high, it usually pays for itself in support time alone.' },
    { q: 'Can you deliver to a building with restricted access?', a: 'Tell us at quote stage. Delivery to buildings with loading dock booking, freight elevator scheduling or hand-ball requirements needs to be arranged with the carrier rather than discovered on the day.' },
    { q: 'What is the smallest order you will take?', a: '100 boxes. Digital printing makes that quantity viable at a sensible price, which suits a first production run or a seasonal one-off.' },
  ],
  shop: [
    { path: '/product/cardboard-mailing-boxes/', label: 'Resealable mailers' },
    { path: '/product/cardboard-boxes-for-jewellery/', label: 'Jewellery boxes' },
    { path: '/product-category/wholesale-cardboard-boxes/', label: 'Wholesale and staged delivery' },
  ],
  guides: [
    { path: '/resources/ecommerce-packaging-guide/', label: 'Ecommerce packaging guide' },
    { path: '/resources/cardboard-box-sizes-guide/', label: 'Cardboard box sizes' },
  ],
  cta: { heading: 'Set up a New York account', body: 'Tell us your annual volume and your storage constraint. We will structure the order around both.', label: 'Talk to us' },
};

export const pennsylvania: LocationPage = {
  slug: 'pennsylvania', kind: 'state', name: 'Pennsylvania', region: 'Northeast',
  title: 'Cardboard Boxes in Pennsylvania | Fulfilment & Distribution',
  description: 'Cardboard boxes for Pennsylvania distribution centres and manufacturers — palletised freight specification, pharmaceutical cartons and bulk ordering.',
  h1: 'Cardboard Boxes for Pennsylvania Distribution',
  eyebrow: 'Northeast',
  summary: 'Written for the distribution corridor: palletised freight, stacking strength and buying at fulfilment-centre volumes.',
  lede: `<p>Pennsylvania's packaging demand is shaped by geography. The interstate corridors crossing the state put a very large share of the Northeast's population within a day's drive, which is why so much of the state's warehouse space exists at all.</p>
<p>Packaging for that environment is a stacking problem more than a handling one, and the specification questions follow from that.</p>`,
  layout: 'form-after-first-section',
  sections: [
    {
      h2: 'Specifying for pallets rather than parcels',
      html: `<p>In a distribution centre, boxes are stacked, racked and stored — sometimes for weeks. The failure mode is corner crush under sustained load, not puncture from a drop. That makes Edge Crush Test the number to quote against, and Mullen burst largely irrelevant.</p>
<p>Two things are worth knowing. First, board creeps: a stack that holds for a day can fail after three weeks at the same load. Second, box proportions matter as much as board grade — a tall narrow box loses stacking strength far faster than a cube of the same board.</p>
<p>Most of this work lands on two structures. <a href="/product/cardboard-corrugated-pallet-boxes/">Corrugated pallet boxes</a> take the full footprint and carry the stack from the base upward.</p>
<p>Where the load is heavy but does not fill a pallet, <a href="/product/double-wall-cardboard-boxes/">double wall boxes</a> give the panel strength without the handling cost of a pallet-sized container.</p>`,
    },
    {
      h2: 'Pharmaceutical and medical cartons',
      html: `<p>The pharmaceutical and medical device manufacturing around Philadelphia has a different requirement again: the carton has to carry regulated information legibly and consistently, batch after batch.</p>
<p>That points at offset lithography rather than digital, because spot colour and small type reproduce identically across runs. It also points at a board with a reliable white surface — <a href="/resources/cardboard-packaging-materials/">SBS or coated recycled board</a> rather than kraft.</p>
<p>Regulated print carries its own tolerance for variation, which is none. <a href="/product/cardboard-pill-packaging-boxes/">Pill packaging boxes</a> are produced against an approved dieline that stays on file, so a reorder matches the artwork that was signed off.</p>`,
    },
    {
      h2: 'Buying at distribution volume',
      html: `<p>At fulfilment-centre quantities the price breaks that matter are at 10,000 and above, where board is bought at mill rates and scheduled call-off becomes available. The larger saving, though, is usually structural rather than commercial: consolidating seven box sizes down to four so each one earns a real volume price.</p>
<p>Both levers move the same number from opposite ends, and <a href="/resources/reduce-packaging-and-shipping-costs/">our guide to reducing packaging costs</a> works through them in the order that usually saves most.</p>
<p>Where the quantity breaks actually fall is a separate question, set out on the <a href="/product-category/wholesale-cardboard-boxes/">wholesale cardboard boxes page</a>.</p>`,
    },
  ],
  faqHeading: 'Pennsylvania distribution questions',
  faqs: [
    { q: 'Can you deliver directly to a fulfilment centre?', a: 'Yes. Give us the receiving address, the booking reference and the pallet or carton labelling that site requires, and the shipment goes straight there rather than through you.' },
    { q: 'Which strength rating should a distribution centre specify?', a: 'Edge Crush Test. It predicts stacking performance, which is the failure mode in racked storage. Mullen burst matters for individually handled parcels, not for palletised loads.' },
    { q: 'How long can boxes sit stacked before strength becomes a concern?', a: 'Board creeps under sustained load, so weeks matter more than days. If stock sits for a month at height, specify to the stack rather than to the weight — or reduce the stack height.' },
    { q: 'What quantity unlocks the better price breaks?', a: 'Setup costs largely disappear into the run by 2,500 units. Mill-rate board pricing and scheduled call-off delivery become available from around 10,000.' },
    { q: 'Can we consolidate several box sizes into one order?', a: 'Yes, and where they share a board grade it is usually cheaper than ordering them separately across a year. It also simplifies the packing bench.' },
  ],
  shop: [
    { path: '/product/cardboard-corrugated-pallet-boxes/', label: 'Corrugated pallet boxes' },
    { path: '/product-category/wholesale-cardboard-boxes/', label: 'Wholesale and bulk' },
    { path: '/product/cardboard-medical-device-packaging/', label: 'Medical device packaging' },
  ],
  guides: [
    { path: '/resources/corrugated-box-strength-guide/', label: 'ECT and stacking strength' },
    { path: '/resources/reduce-packaging-and-shipping-costs/', label: 'Reducing packaging costs' },
  ],
  cta: { heading: 'Quote a distribution volume', body: 'Send your box ladder and annual quantities. We will price it as one order and show where the breaks fall.', label: 'Request volume pricing' },
};
