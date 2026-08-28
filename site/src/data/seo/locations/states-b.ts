import type { LocationPage } from './types';
import { specTable } from '../../../lib/seo/blocks';

export const illinois: LocationPage = {
  slug: 'illinois', kind: 'state', name: 'Illinois', region: 'Midwest',
  title: 'Cardboard Boxes in Illinois | Food Manufacturing & Freight',
  description: 'Cardboard packaging for Illinois food manufacturers and distributors — shelf-ready cases, food-grade coatings and boxes specified for rail and intermodal freight.',
  h1: 'Cardboard Boxes for Illinois Food and Freight',
  eyebrow: 'Midwest',
  summary: 'Food manufacturing at scale, shelf-ready retail cases, and boxes specified for intermodal freight rather than parcels.',
  lede: `<p>Illinois sits at the junction of two things that shape packaging: a very large food manufacturing sector, and the country's densest rail freight interchange. Both push in the same direction — high volume, palletised, and specified against a retailer's requirements rather than your own.</p>`,
  layout: 'form-at-end',
  sections: [
    {
      h2: 'Shelf-ready packaging for grocery',
      html: `<p>Most Illinois food manufacturers sell into grocery, and grocery buyers increasingly specify shelf-ready packaging rather than accepting whatever case you use. The requirement arrives fixed: case count, external case dimensions, tray height after opening, perforation position, front panel print area.</p>
<p>Those figures come from the retailer's fixture and replenishment model, not from your preference, and guessing at them is the most common reason a first sample gets rejected. Send us the spec sheet and we build to it. See <a href="/product/cardboard-shelf-ready-packaging/">shelf-ready packaging</a> and <a href="/resources/retail-packaging-guide/">the retail packaging guide</a>.</p>`,
    },
    {
      h2: 'Food-grade board and coatings',
      html: `<p>Food-contact orders are produced on food-grade board with food-safe inks, with the specification stated on the quote rather than assumed. What varies is the barrier, and the barrier is chosen from the product rather than from a price list:</p>
<ul>
  <li><strong>Dry goods</strong> — uncoated food-grade board. Fully recyclable, no barrier needed.</li>
  <li><strong>Greasy or buttery</strong> — a water-based dispersion coating, which resists fat while staying recyclable in most streams.</li>
  <li><strong>Wet or high moisture</strong> — a PE coating, which resists more and recycles considerably less easily.</li>
  <li><strong>Frozen</strong> — a moisture barrier plus a board grade that tolerates condensation cycles.</li>
</ul>
<p><a href="/product/cardboard-frozen-food-boxes/">Frozen food boxes</a> and <a href="/product/cardboard-biscuit-packaging-boxes/">biscuit packaging</a> sit at opposite ends of that range.</p>`,
    },
    {
      h2: 'Intermodal freight and what it does to a box',
      html: `<p>Freight moving by rail is stacked, held and shunted rather than handed between people. Compression under sustained load is the dominant risk, and vibration over long hauls works contents loose in a way road freight does not.</p>
<p>Practically that means Edge Crush Test rather than Mullen, and it means fit matters more than usual: a product that can move will move for a very long time. A fitted insert is often a better investment than a heavier board.</p>`,
    },
  ],
  faqHeading: 'Illinois packaging questions',
  faqs: [
    { q: 'Can you build to a grocery retailer\'s shelf-ready specification?', a: 'Yes. Send the spec sheet — case count, external dimensions, tray height, perforation position and print area — and we build the dieline to it rather than to a standard format.' },
    { q: 'Are food-safe inks standard?', a: 'On food-contact orders, yes, along with food-grade board. The specification is written on the quote so you have the document rather than an assurance.' },
    { q: 'What coating suits frozen food packaging?', a: 'A moisture barrier that tolerates repeated condensation as the box moves between temperatures. A dispersion coating works for many frozen lines; heavily wet products need PE, with the recyclability trade-off that brings.' },
    { q: 'Does rail freight need different packaging from road?', a: 'It rewards stacking strength and tight fit. Compression under sustained load and long-duration vibration are the risks, so specify against ECT and use an insert rather than relying on void fill.' },
    { q: 'Can one dieline cover several product variants?', a: 'Yes, and it is the usual approach across a range. One structural approval and one tooling cost, with only the printed artwork changing per variant.' },
  ],
  shop: [
    { path: '/product/cardboard-shelf-ready-packaging/', label: 'Shelf ready packaging' },
    { path: '/product-category/food-related-cardboard-boxes/', label: 'Food packaging boxes' },
    { path: '/product/cardboard-frozen-food-boxes/', label: 'Frozen food boxes' },
  ],
  guides: [
    { path: '/resources/retail-packaging-guide/', label: 'Retail packaging guide' },
    { path: '/resources/food-packaging-box-guide/', label: 'Food packaging guide' },
  ],
  cta: { heading: 'Quote an Illinois food packaging run', body: 'Send the retailer specification or the product details and we will build to it.', label: 'Send a specification' },
};

export const ohio: LocationPage = {
  slug: 'ohio', kind: 'state', name: 'Ohio', region: 'Midwest',
  title: 'Cardboard Boxes in Ohio | Manufacturing & Auto Parts',
  description: 'Cardboard boxes for Ohio manufacturers and distributors — parts packaging with fitted inserts, returnable-alternative crates and bulk ordering.',
  h1: 'Cardboard Boxes for Ohio Manufacturing',
  eyebrow: 'Midwest',
  summary: 'Parts packaging with fitted inserts, corrugated alternatives to returnable containers, and distribution-scale ordering.',
  lede: `<p>Ohio's packaging demand is dominated by parts: automotive components, industrial hardware, and everything that moves between a supplier and an assembly line. Parts packaging is unusual because the box has to protect something dense and irregular, and it usually has to do it hundreds of times a week to a consistent standard.</p>`,
  layout: 'form-in-hero',
  facts: [
    { label: 'Minimum', value: '100 boxes' },
    { label: 'Board', value: '32 to 90+ ECT' },
    { label: 'Delivery', value: 'Free, US-wide' },
  ],
  sections: [
    {
      h2: 'Parts packaging: the insert does the work',
      html: `<p>A dense metal component in a plain box is a puncture waiting to happen. The load concentrates on whatever corner it rests against, and the wall gives before the board grade is anywhere near its rating.</p>
<p>The fix is almost always geometry rather than board. A die-cut corrugated insert that stands the part off every face, or a divider grid where several identical parts travel together, prevents the contact that causes the failure. <a href="/product/cardboard-box-inserts/">Box inserts</a> and <a href="/product/cardboard-partitioned-insert-boxes/">partitioned boxes</a> cover most of it, and <a href="/resources/cardboard-box-inserts-guide/">the insert guide</a> works through how cell sizes are calculated.</p>`,
    },
    {
      h2: 'Where corrugated replaces a returnable container',
      html: `<p>Returnable plastic totes make sense on a short closed loop with a reliable return leg. Where the return leg is unreliable — a distant supplier, a one-way shipment, a low-volume part — the accounting usually favours corrugated, because an unreturned tote is a total loss and a corrugated box is not.</p>
<p>For heavier assemblies, a <a href="/product/cardboard-heavy-duty-shipping-crates/">corrugated crate</a> handles several hundred pounds strapped to a pallet, weighs less than timber, and is recyclable at the receiving end rather than a disposal cost.</p>`,
    },
  ],
  faqHeading: 'Ohio manufacturing questions',
  faqs: [
    { q: 'What packaging suits dense metal components?', a: 'A tightly fitted box with a die-cut insert that keeps the part off every wall. Puncture from concentrated contact is the usual failure, and geometry solves it more cheaply than a board upgrade.' },
    { q: 'Can inserts be made to hold several different parts?', a: 'Yes. A single outer with two or three insert variants covers a family of parts without holding several complete box SKUs, and it is usually cheaper than the alternative.' },
    { q: 'Is corrugated a realistic alternative to returnable totes?', a: 'On one-way shipments and unreliable return legs, frequently. A tote that does not come back is a total loss; corrugated is consumed by design and priced accordingly.' },
    { q: 'How much weight will a corrugated crate carry?', a: 'Several hundred pounds when the load is evenly distributed and the crate is strapped to a pallet. Concentrated loads need an insert that spreads the weight across the base.' },
    { q: 'Do you supply to production schedules?', a: 'Yes, through scheduled call-off delivery. You commit to an annual quantity for the volume price and take delivery on a schedule that matches your line rather than your warehouse.' },
  ],
  shop: [
    { path: '/product/cardboard-industrial-parts-packaging/', label: 'Industrial parts packaging' },
    { path: '/product/cardboard-box-inserts/', label: 'Cardboard box inserts' },
    { path: '/product/cardboard-heavy-duty-shipping-crates/', label: 'Heavy duty crates' },
  ],
  guides: [
    { path: '/resources/cardboard-box-inserts-guide/', label: 'Specifying inserts' },
    { path: '/resources/boxes-for-heavy-products/', label: 'Boxes for heavy products' },
  ],
  cta: { heading: 'Spec a parts pack', body: 'Send the part dimensions and weight, or post us a sample. We will build the insert around it.', label: 'Start a parts brief' },
};

export const georgia: LocationPage = {
  slug: 'georgia', kind: 'state', name: 'Georgia', region: 'Southeast',
  title: 'Cardboard Boxes in Georgia | Export, Poultry & Distribution',
  description: 'Cardboard packaging for Georgia businesses — export crates that avoid timber heat-treatment rules, protein and poultry packaging, and distribution volume.',
  h1: 'Cardboard Packaging for Georgia',
  eyebrow: 'Southeast',
  summary: 'Export packaging that sidesteps timber regulations, protein and poultry boxes, and distribution-scale ordering.',
  lede: `<p>Georgia handles an unusually large share of the Southeast's container traffic and an unusually large share of its poultry. Those two facts account for most of the packaging questions that reach us from the state, and they pull in almost opposite directions — one is about surviving weeks at sea, the other about surviving a cold chain.</p>`,
  layout: 'form-after-first-section',
  sections: [
    {
      h2: 'Export packaging and the timber question',
      html: `<p>Solid wood packaging used in international freight has to be heat treated and marked to ISPM 15. That is a cost, a lead time and a compliance risk, and it applies to crates, pallets and dunnage alike.</p>
<p>Corrugated is exempt. A <a href="/product/cardboard-heavy-duty-shipping-crates/">heavy-duty corrugated crate</a> carries several hundred pounds strapped to a pallet, weighs materially less than the timber equivalent — which matters on a container manifest — and is recyclable at the destination rather than a disposal problem for the receiver.</p>
${specTable('Corrugated crate against timber', ['', 'Corrugated crate', 'Timber crate'], [
  ['<strong>ISPM 15 treatment</strong>', 'Not required', 'Required and marked'],
  ['<strong>Weight</strong>', 'Substantially lighter', 'Heavy'],
  ['<strong>Disposal at destination</strong>', 'Recycled with paper', 'Waste or reuse'],
  ['<strong>Practical ceiling</strong>', 'Several hundred pounds', 'Higher'],
])}
<p>The caveat is honest: above a certain weight, and where the packaging must be reused for years, timber still wins.</p>`,
    },
    {
      h2: 'Poultry and protein packaging',
      html: `<p>Protein packaging is a leak and condensation problem before it is anything else. The box moves between temperatures, moisture forms on every surface, and untreated board absorbs it and weakens.</p>
<p><a href="/product/cardboard-meat-packaging-boxes/">Meat packaging boxes</a> use a moisture barrier and a board grade that tolerates repeated condensation cycles. For anything shipped rather than trucked short-haul, an <a href="/product/cardboard-insulated-cold-boxes/">insulated cold box</a> with route-sized coolant is the specification.</p>`,
    },
    {
      h2: 'Humidity in storage',
      html: `<p>Georgia summers do to board what Florida summers do, if slightly less relentlessly. Corrugated absorbs atmospheric moisture and loses stacking strength as it does. For stock held in non-climate-controlled space through the summer, specify a grade above what a dry warehouse would need, or reduce the stack height rather than the board.</p>`,
    },
  ],
  faqHeading: 'Georgia packaging questions',
  faqs: [
    { q: 'Do corrugated crates need ISPM 15 treatment for export?', a: 'No. The heat-treatment and marking requirements apply to solid wood packaging. Corrugated crates are exempt, which removes a cost, a lead time and a compliance risk from an export shipment.' },
    { q: 'What packaging suits chilled poultry distribution?', a: 'A moisture-barrier board that tolerates condensation cycles, and an insulated liner for anything travelling beyond a short trucked leg. Coolant is sized to the route rather than to the box.' },
    { q: 'How much can a corrugated export crate carry?', a: 'Several hundred pounds evenly distributed and strapped to a pallet. Above that, or where the crate must be reused for years, timber remains the better answer.' },
    { q: 'Does Georgia humidity affect stored boxes?', a: 'Yes. Board absorbs atmospheric moisture and loses stacking strength. For summer storage in non-climate-controlled space, either specify a grade up or stack lower.' },
    { q: 'Can you deliver to the port or to a freight forwarder?', a: 'Yes. Give us the receiving address and any booking or labelling requirements at quote stage so the delivery is arranged rather than improvised.' },
  ],
  shop: [
    { path: '/product/cardboard-heavy-duty-shipping-crates/', label: 'Heavy duty export crates' },
    { path: '/product/cardboard-meat-packaging-boxes/', label: 'Meat packaging boxes' },
    { path: '/product/cardboard-insulated-cold-boxes/', label: 'Insulated cold boxes' },
  ],
  guides: [
    { path: '/resources/boxes-for-heavy-products/', label: 'Boxes for heavy products' },
    { path: '/resources/corrugated-box-strength-guide/', label: 'Board strength guide' },
  ],
  cta: { heading: 'Quote a Georgia shipment', body: 'Tell us the weight and the destination. Export and cold chain both change the specification, and we would rather know first.', label: 'Request a quote' },
};

export const northCarolina: LocationPage = {
  slug: 'north-carolina', kind: 'state', name: 'North Carolina', region: 'Southeast',
  title: 'Cardboard Boxes in North Carolina | Furniture & Biotech',
  description: 'Cardboard packaging for North Carolina businesses — oversized furniture cartons, medical and laboratory packaging, and textile and apparel boxes.',
  h1: 'Cardboard Boxes for North Carolina',
  eyebrow: 'Southeast',
  summary: 'Oversized furniture cartons, laboratory and medical packaging, and apparel boxes for a state with three quite different industries.',
  lede: `<p>Three industries dominate the packaging enquiries we get from North Carolina, and they want almost nothing in common. Furniture needs very large, very strong cartons. Biotech needs small, clean, precisely specified ones. Apparel needs flat boxes bought in volume.</p>
<p>The one thing they share is that the standard catalogue answer is rarely the right one.</p>`,
  layout: 'form-at-end',
  sections: [
    {
      h2: 'Oversized cartons for furniture',
      html: `<p>Furniture packaging runs into a limit that has nothing to do with board: what one person can lift and manoeuvre. Above roughly 24 inches on the longest side, the conversation stops being about strength and starts being about handling.</p>
<p>That usually means double wall for the panel strength, corner protection where the load concentrates, and — critically — a decision about whether the box should have handles at all. A die-cut handle encourages manual lifting; on a heavy carton that is often exactly the wrong behaviour to encourage. See <a href="/product/large-cardboard-boxes/">large cardboard boxes</a> and <a href="/product/double-wall-cardboard-boxes/">double wall boxes</a>.</p>`,
    },
    {
      h2: 'Laboratory, medical and biotech packaging',
      html: `<p>Research Triangle work is the opposite problem: small, valuable and often fragile, with documentation requirements attached. A shock that a consumer product shrugs off can invalidate an instrument.</p>
<p>For genuinely shock-sensitive contents the two-box principle applies — an inner box holding the item snugly, suspended inside an outer with a cushioning gap. Foam is justified here in a way it rarely is elsewhere. <a href="/product/cardboard-medical-device-packaging/">Medical device packaging</a> and <a href="/resources/packaging-fragile-products/">the fragile goods guide</a> cover it.</p>`,
    },
    {
      h2: 'Apparel and textiles',
      html: `<p>The state's textile and apparel operations mostly need the same thing: a shallow box, bought in quantity, at a price that holds. A rectangle beats a cube for flat goods on both fit and dimensional weight, and the size ladder matters far more than any individual box specification.</p>
<p>Where garments ship direct to consumers, a resealable <a href="/product/cardboard-mailing-boxes/">mailer</a> is worth the small unit premium, because apparel return rates make reclosability a real operational saving.</p>`,
    },
  ],
  faqHeading: 'North Carolina questions',
  faqs: [
    { q: 'How large can a cardboard carton be?', a: 'Larger than most people expect — well past 24 × 18 × 18 inches, and pallet boxes go considerably beyond. The practical limit is usually manual handling rather than the board.' },
    { q: 'Should a heavy furniture carton have handles?', a: 'Often not. Handles encourage manual lifting, which is the wrong behaviour above about 50 lb. Where they are needed they must be reinforced and positioned so the box hangs level, or they tear on the first lift.' },
    { q: 'What packaging suits laboratory instruments?', a: 'An inner box holding the instrument snugly, suspended inside an outer box with a cushioning gap. Foam is justified here where it usually is not, because the contents are genuinely shock sensitive.' },
    { q: 'What box shape suits folded garments?', a: 'A shallow rectangle rather than a cube. It fits flat goods properly and keeps the dimensional weight down, which is what carriers actually bill on.' },
  ],
  shop: [
    { path: '/product/large-cardboard-boxes/', label: 'Large cardboard boxes' },
    { path: '/product/cardboard-medical-device-packaging/', label: 'Medical device packaging' },
    { path: '/product/cardboard-mailing-boxes/', label: 'Resealable mailers' },
  ],
  guides: [
    { path: '/resources/packaging-fragile-products/', label: 'Packaging fragile products' },
    { path: '/resources/boxes-for-heavy-products/', label: 'Boxes for heavy products' },
  ],
  cta: { heading: 'Start a North Carolina brief', body: 'Furniture, laboratory or apparel — tell us which and we will start from the right place.', label: 'Send a brief' },
};

export const michigan: LocationPage = {
  slug: 'michigan', kind: 'state', name: 'Michigan', region: 'Midwest',
  title: 'Cardboard Boxes in Michigan | Auto Parts & Cold Weather',
  description: 'Cardboard packaging for Michigan businesses — automotive parts boxes with fitted inserts, seasonal produce packing, and how cold storage affects board.',
  h1: 'Cardboard Boxes for Michigan',
  eyebrow: 'Midwest',
  summary: 'Automotive parts packaging, seasonal produce, and what a cold unheated warehouse does to corrugated board.',
  lede: `<p>Two things come up in Michigan packaging conversations that come up nowhere else with the same frequency: automotive supply chains, and unheated winter storage.</p>`,
  layout: 'form-in-hero',
  sections: [
    {
      h2: 'Automotive and supplier packaging',
      html: `<p>Automotive parts packaging is judged on consistency more than on any single specification. The same part ships weekly, the receiving process is fixed, and a box that varies causes more trouble than a box that is merely adequate.</p>
<p>Practically that means agreeing a dieline once and holding it. We keep approved dielines on file, so a reorder needs a quantity and nothing else. For the parts themselves, the usual answer is a fitted <a href="/product/cardboard-box-inserts/">corrugated insert</a> — dense components fail by puncturing a wall they should never have touched.</p>`,
    },
    {
      h2: 'Cold storage and unheated warehouses',
      html: `<p>Cold on its own does not weaken corrugated board. What weakens it is the moisture that condenses when cold stock meets warmer air — moving pallets from an unheated warehouse into a heated packing area does exactly that, repeatedly, all winter.</p>
<p>Two responses help. A moisture-resistant coating slows absorption considerably. And letting stock acclimatise before opening, rather than unwrapping a cold pallet immediately, avoids the worst of the condensation cycle. Neither costs much; both are usually skipped.</p>`,
    },
    {
      h2: 'Seasonal produce and orchard packing',
      html: `<p>Michigan's fruit season is short and intense, which makes ordering rhythm the interesting problem rather than specification. A single order placed for the year gets the volume price; scheduled call-off delivery means the boxes arrive before the season rather than sitting through the winter absorbing moisture in a barn.</p>
<p>See <a href="/product/cardboard-fruit-packaging-boxes/">fruit packaging boxes</a> and <a href="/product-category/wholesale-cardboard-boxes/">wholesale ordering</a>.</p>`,
    },
  ],
  faqHeading: 'Michigan packaging questions',
  faqs: [
    { q: 'Does cold weather weaken cardboard boxes?', a: 'Cold itself does not. Condensation does — moisture forming when cold stock meets warmer air, repeatedly through a winter. A moisture-resistant coating and letting pallets acclimatise before opening both help.' },
    { q: 'Do you keep our dieline on file for repeat orders?', a: 'Yes. Once a structure is approved, a reorder needs only a quantity and any artwork change. For automotive supply where consistency matters more than anything, that is the point.' },
    { q: 'What causes parts boxes to fail in transit?', a: 'Usually a dense component puncturing a wall it should never have reached. A fitted insert that keeps the part off every face fixes it more cheaply than a board upgrade.' },
    { q: 'Can I order a season of produce boxes but take delivery later?', a: 'Yes. Commit to the annual quantity for the volume price and set a call-off schedule so the boxes arrive before the season rather than sitting through winter in a barn.' },
    { q: 'Is there a minimum order for a seasonal run?', a: '100 boxes. For a short orchard season that is often the whole requirement, and digital printing makes it viable at a sensible price.' },
  ],
  shop: [
    { path: '/product/cardboard-industrial-parts-packaging/', label: 'Industrial parts packaging' },
    { path: '/product/cardboard-fruit-packaging-boxes/', label: 'Fruit packaging boxes' },
    { path: '/product-category/wholesale-cardboard-boxes/', label: 'Wholesale and call-off' },
  ],
  guides: [
    { path: '/resources/cardboard-box-inserts-guide/', label: 'Specifying inserts' },
    { path: '/resources/corrugated-box-strength-guide/', label: 'Board strength and moisture' },
  ],
  cta: { heading: 'Plan a Michigan order', body: 'Whether it is a weekly parts pack or one seasonal run, tell us the rhythm and we will structure the order around it.', label: 'Talk to us' },
};
