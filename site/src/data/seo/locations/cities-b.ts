import type { LocationPage } from './types';
import { specTable } from '../../../lib/seo/blocks';

export const philadelphia: LocationPage = {
  slug: 'philadelphia', kind: 'city', name: 'Philadelphia', stateName: 'Pennsylvania', stateSlug: 'pennsylvania', region: 'Northeast',
  title: 'Cardboard Boxes in Philadelphia | Food Service & Pharma',
  description: 'Cardboard packaging for Philadelphia businesses — hoagie and sandwich boxes, pharmaceutical cartons, and packaging for a compact delivery footprint.',
  h1: 'Cardboard Boxes for Philadelphia',
  eyebrow: 'City',
  summary: 'Sandwich and food service packaging, pharmaceutical cartons, and a compact delivery footprint that rewards fit over strength.',
  lede: `<p>Philadelphia's food service packaging problem is a shape problem. A hoagie is long, soft-sided and greasy, and none of those is well served by a square box. The city gets through an enormous quantity of packaging built for exactly that geometry.</p>`,
  layout: 'form-after-first-section',
  sections: [
    {
      h2: 'Long-format food packaging',
      html: `<p>Sandwich and wedge formats are specified around the product's length rather than its volume, which changes two things. The board has to resist bending along the long axis, and the closure has to hold a lid that has a lot of unsupported span in the middle.</p>
<p>A shallow clamshell with a centre score handles both, and a <a href="/product/cardboard-sandwich-wedge-boxes/">wedge box</a> solves it geometrically by making the long dimension structural. Grease resistance is mandatory — a water-based dispersion coating keeps the box recyclable in most streams, and a greaseproof liner outperforms it on heavily saturated items.</p>
<p>A wrap or a hoagie sits against the board for hours rather than minutes, so the barrier matters more than the structure does. <a href="/product/cardboard-sandwich-boxes/">Sandwich boxes with grease-resistant board</a> are specified for that dwell time.</p>
<p>Which coating suits which filling is a question of fat and moisture together, and <a href="/resources/food-packaging-box-guide/">the food packaging guide</a> sets the options out.</p>`,
    },
    {
      h2: 'Cartons that have to look identical every batch',
      html: `<p>The pharmaceutical corridor around the city needs cartons that reproduce identically, batch after batch: regulated text at a fixed size, a barcode that scans first time, and a spot colour that does not drift between runs.</p>
<p>That means offset lithography and a consistent white board rather than digital and kraft, because a batch code has to read identically on the first carton and the last. <a href="/product/cardboard-pill-packaging-boxes/">Pill packaging boxes</a> are produced that way as standard.</p>
<p>Why a bleached board is normally specified over recycled for this work comes down to how ink sits on the surface, which <a href="/resources/cardboard-packaging-materials/">the materials guide</a> explains.</p>`,
    },
    {
      h2: 'A compact delivery footprint',
      html: `<p>Philadelphia delivery routes are short and dense, which means boxes are handled often rather than travelling far. Fit matters more than board grade — a product that can move will move on every one of those handling events.</p>
<p>That usually points at a smaller box with an insert rather than a bigger box with filler, which is cheaper on the carrier bill as well.</p>`,
    },
  ],
  faqHeading: 'Philadelphia packaging questions',
  faqs: [
    { q: 'What packaging suits long sandwich formats?', a: 'A shallow clamshell with a centre score, or a wedge box that makes the long dimension structural. The failure mode is bending along the long axis, not crushing.' },
    { q: 'Which grease barrier should a sandwich shop use?', a: 'A water-based dispersion coating for most items — it resists fat and stays recyclable in most streams. For heavily saturated fillings, a greaseproof liner performs better and separates cleanly.' },
    { q: 'Why offset printing for pharmaceutical cartons?', a: 'Consistency across batches. A mixed spot ink reproduces exactly and small regulated type stays sharp; digital simulates colour in CMYK, which drifts slightly between runs.' },
    { q: 'Does a short delivery route need less packaging?', a: 'Less crush protection, but not less fit. Short dense routes mean more handling events per mile, and a product that can move will move on every one of them.' },
    { q: 'What is the minimum order?', a: '100 boxes. Digital printing carries no plate cost at that quantity, which makes a single-location run economic.' },
  ],
  shop: [
    { path: '/product/cardboard-sandwich-boxes/', label: 'Sandwich boxes' },
    { path: '/product/cardboard-sandwich-wedge-boxes/', label: 'Sandwich wedge boxes' },
    { path: '/product/cardboard-pill-packaging-boxes/', label: 'Pill packaging boxes' },
  ],
  guides: [
    { path: '/resources/food-packaging-box-guide/', label: 'Food packaging guide' },
    { path: '/resources/cardboard-packaging-materials/', label: 'Board materials compared' },
  ],
  cta: { heading: 'Quote a Philadelphia order', body: 'Send the product dimensions — long formats especially — and we will build the box around the shape.', label: 'Request a quote' },
};

export const sanAntonio: LocationPage = {
  slug: 'san-antonio', kind: 'city', name: 'San Antonio', stateName: 'Texas', stateSlug: 'texas', region: 'Southwest',
  title: 'Cardboard Boxes in San Antonio | Catering, Tourism & Volume',
  description: 'Cardboard packaging for San Antonio businesses — high-volume catering trays, tourism and gift retail boxes, and institutional food service ordering.',
  h1: 'Cardboard Boxes for San Antonio',
  eyebrow: 'City',
  summary: 'High-volume catering, tourism and gift retail, and packaging bought at institutional food service scale.',
  lede: `<p>San Antonio buys a lot of catering packaging, and catering packaging is judged on a different axis from restaurant packaging: portion count, stacking in a transport rack, and how fast a box can be assembled by someone who assembles two hundred of them.</p>`,
  layout: 'form-in-hero',
  facts: [
    { label: 'Minimum', value: '100 boxes' },
    { label: 'Volume breaks', value: '500 / 2.5k / 10k' },
    { label: 'Delivery', value: 'Free, US-wide' },
  ],
  sections: [
    {
      h2: 'Catering at volume',
      html: `<p>Three things separate catering packaging from restaurant packaging.</p>
<ul>
  <li><strong>Assembly speed.</strong> At two hundred boxes per event, seconds per box matter. A crash-lock base that pops open in one motion beats a box requiring four folds, and the unit cost difference is recovered quickly.</li>
  <li><strong>Stacking in a rack.</strong> Catering boxes are stacked in transport racks rather than carried individually, so the lid has to take the weight of everything above it without deflecting into the food.</li>
  <li><strong>Portion geometry.</strong> The box is sized around a portion count, and getting it wrong by one portion means either wasted space or a second box.</li>
</ul>
<p>Volume catering asks the box to hold weight and then stack while it is still warm. <a href="/product/cardboard-catering-trays/">Catering trays with reinforced bases</a> take that load without flexing through the middle.</p>
<p>Individually portioned service is a different structure entirely, assembled fast and carried one per person, which is what <a href="/product/lunch-cardboard-boxes/">lunch boxes with fold-flat lids</a> are built for.</p>`,
    },
    {
      h2: 'Tourism and gift retail',
      html: `<p>Souvenir and gift retail here shares a constraint with Florida: much of what is sold gets packed into luggage. That rewards packaging that protects without bulk and survives being sat on.</p>
<p>A folding carton with a fitted insert weighs less and travels flatter than a rigid box. A <a href="/product/cardboard-rigid-lid-base-boxes/">rigid lid and base box</a> reads as a gift and holds its shape but costs more and cannot be flattened. Which is right depends on whether the box is the gift or merely carries it.</p>`,
    },
    {
      h2: 'Institutional ordering',
      html: `<p>Schools, hospitals and military catering operations buy on annual contracts rather than ad hoc, which suits scheduled call-off delivery well: commit to the annual quantity for the volume price, take delivery to a schedule, and avoid storing a year of stock. <a href="/product-category/wholesale-cardboard-boxes/">Wholesale ordering</a> covers the terms.</p>`,
    },
  ],
  faqHeading: 'San Antonio packaging questions',
  faqs: [
    { q: 'What makes a good catering box?', a: 'Fast assembly, a lid that takes stacking weight without pressing into the food, and internal dimensions built around a portion count rather than a round number.' },
    { q: 'Is a crash-lock base worth the extra cost?', a: 'At catering volumes, usually yes. It pops open in one motion instead of needing four folds, and the labour saving across a few hundred boxes per event recovers the unit premium quickly.' },
    { q: 'Do you supply on annual institutional contracts?', a: 'Yes, through scheduled call-off delivery. You commit to the annual quantity for the volume price and take delivery on an agreed schedule rather than all at once.' },
    { q: 'What gift packaging travels well in luggage?', a: 'A folding carton with a fitted insert — it protects without bulk and it does not mind being compressed. Rigid boxes look better but weigh more and cannot be flattened.' },
    { q: 'Can boxes be printed with a venue or event name?', a: 'Yes, and digital printing makes short event runs economic at 100 units with no plate cost.' },
  ],
  shop: [
    { path: '/product/cardboard-catering-trays/', label: 'Catering trays' },
    { path: '/product/lunch-cardboard-boxes/', label: 'Lunch boxes' },
    { path: '/product/cardboard-gift-boxes/', label: 'Gift boxes' },
  ],
  guides: [
    { path: '/resources/food-packaging-box-guide/', label: 'Food packaging guide' },
    { path: '/resources/box-styles-explained/', label: 'Box styles explained' },
  ],
  cta: { heading: 'Quote a San Antonio order', body: 'Tell us the portion count and the volume and we will size the box and the price around both.', label: 'Request pricing' },
};

export const sanDiego: LocationPage = {
  slug: 'san-diego', kind: 'city', name: 'San Diego', stateName: 'California', stateSlug: 'california', region: 'West',
  title: 'Cardboard Boxes in San Diego | Craft Beer, Biotech & Seafood',
  description: 'Cardboard packaging for San Diego businesses — craft beer carriers and bottle dividers, biotech shipping, and seafood and cold chain boxes.',
  h1: 'Cardboard Boxes for San Diego',
  eyebrow: 'City',
  summary: 'Craft beer carriers, biotech shipping, and cold chain packaging for a coastal food trade.',
  lede: `<p>San Diego's packaging demand is dominated by two sectors that could not be less alike: craft brewing, where the box is part of the brand, and life sciences, where the box is part of a protocol.</p>`,
  layout: 'form-at-end',
  sections: [
    {
      h2: 'Craft beer and beverage carriers',
      html: `<p>Beverage packaging is a divider problem. Glass and aluminium survive compression well and impact badly, and the impact that damages them is container against container rather than container against wall.</p>
<p>The arithmetic matters more than the board. Cell size is the container diameter plus two to three millimetres, and the divider walls themselves consume length inside the box — on a four-wide grid that is three internal walls of around 3 mm each. Leave that out and the grid does not fit.</p>
${specTable('Configurations we quote most', ['Pack', 'Gross weight', 'Board'], [
  ['4 cans', 'Around 4 lb', 'Single wall, handled'],
  ['6 bottles', 'Around 20 lb', 'Single or double wall'],
  ['12 bottles', 'Around 40 lb', 'Double wall'],
])}
<p>Bottles break where they touch, so the divider carries more of the specification than the outer board does. <a href="/product/cardboard-boxes-for-bottles/">Bottle packaging with corrugated dividers</a> keeps each neck and base apart for the whole journey.</p>
<p>Cell sizing is where a divider grid goes wrong, because the walls themselves consume length inside the box. <a href="/resources/cardboard-box-inserts-guide/">The divider sizing guide</a> works through that arithmetic.</p>`,
    },
    {
      h2: 'Biotech and laboratory packaging',
      html: `<p>Life sciences shipping is specified against a protocol rather than a preference, and the requirement we hear most is repeatability. Approved dielines stay on file so a reorder matches exactly what was validated.</p>
<p>For temperature-controlled material, an <a href="/product/cardboard-insulated-cold-boxes/">insulated box</a> with coolant sized to the route. For shock-sensitive instruments, an inner box suspended inside an outer — one of the few cases where foam genuinely earns its cost.</p>`,
    },
    {
      h2: 'Coastal food and cold chain',
      html: `<p>Seafood and coastal food distribution runs into condensation rather than cold. Moisture forms as the box crosses temperature boundaries, and untreated board absorbs it and weakens. A moisture barrier is the baseline; see <a href="/product/cardboard-seafood-packaging-boxes/">seafood packaging boxes</a>.</p>`,
    },
  ],
  faqHeading: 'San Diego packaging questions',
  faqs: [
    { q: 'How do I size a divider grid for cans?', a: 'Cell size is the can diameter plus two to three millimetres, then add the divider walls — around 3 mm each — to the internal box dimensions. Omitting the wall thickness is the usual reason a grid does not fit.' },
    { q: 'What board does a 12-bottle case need?', a: 'Double wall. Around 40 lb of glass concentrates on the base, and while the dividers stop breakage the board still has to carry the stack.' },
    { q: 'Can you reproduce a validated laboratory specification?', a: 'Yes. Approved dielines stay on file, so a reorder is identical to what was validated and needs only a quantity.' },
    { q: 'What is the specific risk in seafood packaging?', a: 'Condensation rather than cold. Moisture forms every time the box crosses a temperature boundary, and untreated board absorbs it. A moisture barrier is the baseline requirement.' },
    { q: 'Can beverage carriers be printed?', a: 'Yes — flexo for bold flat artwork, litho lamination where photographic quality is needed. Both are quoted per unit at your actual volume.' },
  ],
  shop: [
    { path: '/product/cardboard-boxes-for-bottles/', label: 'Bottle and can packaging' },
    { path: '/product/cardboard-insulated-cold-boxes/', label: 'Insulated cold boxes' },
    { path: '/product/cardboard-seafood-packaging-boxes/', label: 'Seafood packaging' },
  ],
  guides: [
    { path: '/resources/cardboard-box-inserts-guide/', label: 'Dividers and inserts' },
    { path: '/resources/packaging-fragile-products/', label: 'Packaging fragile products' },
  ],
  cta: { heading: 'Quote a San Diego order', body: 'Send the container dimensions and the pack count, or the protocol, and we will build to it.', label: 'Request a quote' },
};

export const dallas: LocationPage = {
  slug: 'dallas', kind: 'city', name: 'Dallas', stateName: 'Texas', stateSlug: 'texas', region: 'Southwest',
  title: 'Cardboard Boxes in Dallas | Retail Rollouts & Distribution',
  description: 'Cardboard packaging for Dallas businesses — retail display rollouts, corporate and promotional boxes, and distribution ordering at volume.',
  h1: 'Cardboard Boxes for Dallas',
  eyebrow: 'City',
  summary: 'Retail display rollouts, corporate and promotional packaging, and distribution ordering at real volume.',
  lede: `<p>Dallas has an unusual concentration of retail and consumer brand head offices, which means a lot of packaging here is specified centrally and rolled out to stores rather than bought for a single site. That changes the priorities entirely: consistency and lead time beat unit price.</p>`,
  layout: 'form-after-first-section',
  sections: [
    {
      h2: 'Rolling out display packaging',
      html: `<p>A rollout has failure modes a single order does not. The unit that works in a photograph collapses when a store colleague assembles it wrong. The colour that looked right on screen varies between production batches. The delivery that was fine to one warehouse becomes forty deliveries to forty receiving bays.</p>
<p>Three things reduce the risk:</p>
<ol>
  <li><strong>Approve a structural sample loaded to 30%,</strong> not empty. A unit that relies on the product for rigidity collapses exactly when it is working.</li>
  <li><strong>Approve a printed proof, not a digital one.</strong> The digital proof confirms placement; only a printed one confirms colour.</li>
  <li><strong>Ship flat and keep the assembly to few steps.</strong> Every additional fold is a chance for a store colleague to build it differently.</li>
</ol>
<p>A floor display has to arrive flat, assemble without tools and then hold its own weight for weeks under fluorescent light. <a href="/product/cardboard-pop-display-boxes/">POP display boxes</a> are engineered for that third part, which is where most fail.</p>
<p>At the till the constraint is footprint rather than height, and the unit competes for a few square inches. <a href="/product/cardboard-counter-display-units/">Counter display units</a> are sized for it.</p>
<p>Retailers specify both in formats that rarely match each other, and <a href="/resources/retail-packaging-guide/">the retail packaging guide</a> translates between them.</p>`,
    },
    {
      h2: 'Corporate and promotional packaging',
      html: `<p>Corporate gifting and employee kits are short runs on fixed dates, which suits digital printing — no plate cost at 100 units, and artwork that can change until late.</p>
<p>For onboarding and employee kits, <a href="/product/cardboard-welcome-kit-boxes/">welcome kit boxes with fitted inserts</a> hold the contents in a fixed arrangement so every box opens the same way.</p>
<p>Client gifting asks the same structure to look more expensive than it costs, which is what <a href="/product/cardboard-corporate-gift-packaging/">corporate gift packaging</a> is finished for.</p>`,
    },
    {
      h2: 'Distribution volume',
      html: `<p>At distribution quantities the meaningful saving is structural: consolidating a sprawling box range so each remaining size earns a real volume price. Send a month of shipment dimensions and we will model the ladder rather than quote from a list. <a href="/product-category/wholesale-cardboard-boxes/">Wholesale ordering</a> shows where the breaks fall.</p>`,
    },
  ],
  faqHeading: 'Dallas packaging questions',
  faqs: [
    { q: 'How do I stop a display unit collapsing in store?', a: 'Approve a structural sample loaded to about 30% of capacity. Units that rely on the product for rigidity stand up full and fail half empty, which is when they are actually selling.' },
    { q: 'Should display units ship flat or assembled?', a: 'Flat, for anything at rollout volume — the freight saving is substantial. Keep the assembly to few steps, or supply part-assembled, so store colleagues build them consistently.' },
    { q: 'How do I keep colour consistent across a rollout?', a: 'Use offset or flexo with a mixed spot ink rather than digital, and approve a printed proof rather than a digital one. Digital colour drifts slightly between batches.' },
    { q: 'Can you deliver to multiple store receiving bays?', a: 'Yes. Give us all the addresses and any booking or labelling requirements at quote stage so the freight is priced correctly rather than adjusted afterwards.' },
    { q: 'What lead time should a rollout allow?', a: 'Around seven weeks from brief to delivered stock with no round trips. Build in contingency for a first project with a new retailer — the structural approval and printed proof are the stages worth protecting.' },
  ],
  shop: [
    { path: '/product-category/retail-and-display-packaging/', label: 'Retail and display packaging' },
    { path: '/product/cardboard-welcome-kit-boxes/', label: 'Welcome kit boxes' },
    { path: '/product-category/wholesale-cardboard-boxes/', label: 'Wholesale ordering' },
  ],
  guides: [
    { path: '/resources/retail-packaging-guide/', label: 'Retail packaging guide' },
    { path: '/resources/custom-box-printing-methods/', label: 'Printing methods' },
  ],
  cta: { heading: 'Plan a Dallas rollout', body: 'Send the retailer specification and the store count. We will build the structure and price the delivery.', label: 'Start a rollout brief' },
};

export const austin: LocationPage = {
  slug: 'austin', kind: 'city', name: 'Austin', stateName: 'Texas', stateSlug: 'texas', region: 'Southwest',
  title: 'Cardboard Boxes in Austin | DTC Brands, Hardware & Food Trucks',
  description: 'Cardboard packaging for Austin businesses — direct-to-consumer subscription boxes, hardware and device packaging, and food truck and event boxes.',
  h1: 'Cardboard Boxes for Austin',
  eyebrow: 'City',
  summary: 'Subscription and direct-to-consumer boxes, hardware packaging, and short-run food and event work.',
  lede: `<p>Austin sends us more first orders than almost anywhere. A great many are direct-to-consumer brands ordering their first hundred boxes, and the advice at that stage is different from the advice at ten thousand.</p>`,
  layout: 'form-in-hero',
  sections: [
    {
      h2: 'A first run for a direct-to-consumer brand',
      html: `<p>Four things are worth knowing before a first order.</p>
<ol>
  <li><strong>Digital printing is the right process at 100 units.</strong> No plate cost, and the artwork can change for the second run without wasting anything.</li>
  <li><strong>Put the budget on the inside.</strong> A printed inner face costs less than a second outside finish and is what customers photograph.</li>
  <li><strong>Keep the structure simple.</strong> A mailer with a tuck-top does most of what a rigid box does, ships flat, and costs a fraction as much.</li>
  <li><strong>Do not commit to a year yet.</strong> Volume pricing is real, but a pallet of superseded boxes after a rebrand wipes out the saving.</li>
</ol>
<p>The mailer is the only part of the order the customer photographs, so it earns more attention than the shipper behind it. <a href="/product/cardboard-mailing-boxes/">Mailing boxes with a printed inner face</a> put the print where it is actually seen.</p>
<p>Sizing, dimensional weight and the return journey all interact, and <a href="/resources/ecommerce-packaging-guide/">the ecommerce packaging guide</a> works through them together.</p>`,
    },
    {
      h2: 'Subscription boxes',
      html: `<p>A subscription box is opened every month and judged against the last one, which justifies a printed interior and a fitted insert in a way a one-off order does not.</p>
<p>The structural decision that saves the most money is keeping the box fixed and varying only the print. One dieline, one structural approval, and each cycle changes artwork rather than tooling. <a href="/product/cardboard-sleeve-packaging/">Printed sleeves</a> over a plain box take that further.</p>`,
    },
    {
      h2: 'Hardware and devices',
      html: `<p>Austin's hardware companies need packaging that protects against shock rather than crush, and that presents well enough to be part of the product. A die-cut corrugated insert holding the device off every wall does the protection; a printed interior does the presentation.</p>
<p><a href="/product/cardboard-computer-accessory-boxes/">Device packaging with a printed interior</a> handles both at once, which is why it costs less than treating them separately.</p>
<p>Where the outer can stay plain, <a href="/product/cardboard-box-inserts/">fitted inserts cut to the device</a> carry the protection on their own.</p>`,
    },
    {
      h2: 'Food trucks and events',
      html: `<p>Short runs, fixed dates and grease. Digital printing covers the run length, a water-based dispersion coating covers the grease while staying recyclable, and vents high on the side walls stop steam softening the box before it reaches the customer.</p>`,
    },
  ],
  faqHeading: 'Austin packaging questions',
  faqs: [
    { q: 'What should a brand order for its first packaging run?', a: '100 units, digitally printed, in a simple mailer structure with a printed inner face. It is economic, it looks considerably better than an unprinted box, and nothing is wasted when the artwork changes.' },
    { q: 'Should I commit to a year of boxes to get the price?', a: 'Not on a first order. Volume pricing is real, but a pallet of superseded boxes after a rebrand costs more than the saving. Commit once the artwork and the size are settled.' },
    { q: 'How do I run a subscription box cheaply across cycles?', a: 'Keep one dieline and vary only the print, or use a plain box with printed sleeves. One structural approval and one tooling cost, with artwork changing per cycle.' },
    { q: 'What packaging suits a hardware device?', a: 'A die-cut corrugated insert that keeps the device off every wall, in a box with a printed interior. Geometry does the protecting; the print does the presentation.' },
    { q: 'Can you turn around packaging for a specific event date?', a: 'Production runs 8–10 business days from artwork approval. Tell us the date at quote stage and we will confirm it before you commit.' },
  ],
  shop: [
    { path: '/product/cardboard-mailing-boxes/', label: 'Mailing boxes' },
    { path: '/product/cardboard-sleeve-packaging/', label: 'Printed sleeves' },
    { path: '/product/cardboard-computer-accessory-boxes/', label: 'Device packaging' },
  ],
  guides: [
    { path: '/resources/ecommerce-packaging-guide/', label: 'Ecommerce packaging guide' },
    { path: '/resources/custom-box-printing-methods/', label: 'Printing methods' },
  ],
  cta: { heading: 'Start an Austin first run', body: 'Tell us what you are shipping and roughly how many. We will keep the first order sensible.', label: 'Get started' },
};
