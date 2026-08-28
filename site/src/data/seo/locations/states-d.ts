import type { LocationPage } from './types';
import { specTable } from '../../../lib/seo/blocks';

export const tennessee: LocationPage = {
  slug: 'tennessee', kind: 'state', name: 'Tennessee', region: 'Southeast',
  title: 'Cardboard Boxes in Tennessee | Air Freight & Merchandise',
  description: 'Cardboard packaging for Tennessee businesses — boxes built for air freight dimension limits, merchandise and apparel mailers, and healthcare distribution.',
  h1: 'Cardboard Boxes for Tennessee',
  eyebrow: 'Southeast',
  summary: 'Boxes sized for air freight rate bands, merchandise mailers, and healthcare distribution packaging.',
  lede: `<p>Tennessee's packaging conversations are unusually often about dimensions rather than strength, because so much of what leaves the state goes by air. Air freight punishes volume harder than any other mode, and a box that is an inch too big in one direction costs money on every single parcel.</p>`,
  layout: 'form-in-hero',
  facts: [
    { label: 'Minimum', value: '100 boxes' },
    { label: 'Custom size', value: 'No premium' },
    { label: 'Delivery', value: 'Free, US-wide' },
  ],
  sections: [
    {
      h2: 'Sizing boxes to air freight bands',
      html: `<p>Air carriers bill on dimensional weight with a less forgiving divisor than ground services. A light product in a generous box is billed as though it were heavy, and the penalty recurs on every shipment.</p>
<p>The fix is unglamorous: measure a week of real orders, sort by largest single dimension, and build three or four box sizes that each cover about a quarter of them. Then check each box against your carrier's band table using <em>external</em> dimensions — internal size plus roughly twice the board thickness, plus any tape overlap.</p>
${specTable('What an inch costs', ['Box', 'Volume', 'Billable at a 139 divisor'], [
  ['12 × 10 × 8 in', '960 in³', '≈ 6.9 lb'],
  ['11 × 9 × 7 in', '693 in³', '≈ 5.0 lb'],
  ['10 × 8 × 6 in', '480 in³', '≈ 3.5 lb'],
])}
<p>There is no premium for a non-standard size — every box is cut to a dieline built for your measurements. <a href="/product/custom-size-cardboard-boxes/">Custom size boxes</a> and <a href="/resources/how-to-choose-a-shipping-box/">the shipping box guide</a> cover it.</p>`,
    },
    {
      h2: 'Merchandise and apparel',
      html: `<p>Music and event merchandise ships in bursts, which makes ordering rhythm as important as specification. A tour or a release is a fixed quantity on a fixed date, so a single run with a firm delivery date beats an open account.</p>
<p>For the boxes themselves, printed <a href="/product/cardboard-mailing-boxes/">mailers</a> do more brand work than printed shippers, because the customer sees the mailer and photographs it. Where several designs are needed, a plain box with printed <a href="/product/cardboard-sleeve-packaging/">sleeves</a> avoids reprinting the structure for every variant.</p>`,
    },
    {
      h2: 'Healthcare distribution',
      html: `<p>Nashville's healthcare sector needs cartons that carry regulated information legibly and identically across batches. That points at offset printing and a consistent white board rather than digital and kraft. See <a href="/product/cardboard-medical-device-packaging/">medical device packaging</a>.</p>`,
    },
  ],
  faqHeading: 'Tennessee packaging questions',
  faqs: [
    { q: 'How do I size a box to an air freight rate band?', a: 'Work from external dimensions — internal size plus roughly twice the board thickness on each axis, plus tape overlap. Get the band table from your carrier and we will build the dieline to sit inside it.' },
    { q: 'Does a custom size cost more than a standard one?', a: 'No. Every box is cut to a dieline made for your order, so the dimensions themselves carry no premium. Board grade, printing and quantity set the price.' },
    { q: 'Can you meet a fixed release or tour date?', a: 'Production runs 8–10 business days from artwork approval. Tell us the date at quote stage and we will confirm it before you commit rather than after.' },
    { q: 'Printed mailer or printed shipper for merchandise?', a: 'Mailer, in almost every case. It is what the customer opens and photographs. A printed outer shipper is seen briefly and recycled.' },
    { q: 'How do I run several merchandise designs cheaply?', a: 'Keep one box structure and vary a printed sleeve or a label. One dieline, one structural approval, and only the artwork changes per design.' },
  ],
  shop: [
    { path: '/product/custom-size-cardboard-boxes/', label: 'Custom size boxes' },
    { path: '/product/cardboard-mailing-boxes/', label: 'Printed mailers' },
    { path: '/product/cardboard-sleeve-packaging/', label: 'Sleeve packaging' },
  ],
  guides: [
    { path: '/resources/how-to-choose-a-shipping-box/', label: 'Choosing a shipping box' },
    { path: '/resources/reduce-packaging-and-shipping-costs/', label: 'Reducing shipping costs' },
  ],
  cta: { heading: 'Size a Tennessee order', body: 'Send a week of order dimensions and your carrier band table. We will design the ladder around both.', label: 'Send my dimensions' },
};

export const indiana: LocationPage = {
  slug: 'indiana', kind: 'state', name: 'Indiana', region: 'Midwest',
  title: 'Cardboard Boxes in Indiana | Pharma Distribution & RV Parts',
  description: 'Cardboard packaging for Indiana businesses — pharmaceutical distribution cartons, recreational vehicle component boxes and oversized parts packaging.',
  h1: 'Cardboard Boxes for Indiana',
  eyebrow: 'Midwest',
  summary: 'Pharmaceutical distribution cartons, oversized vehicle component boxes, and packaging built around awkward shapes.',
  lede: `<p>Indiana's two largest packaging demands could hardly be less alike. Pharmaceutical distribution wants small, precise, repeatable cartons. Recreational vehicle manufacturing wants very large boxes for components that are neither square nor light.</p>`,
  layout: 'form-after-first-section',
  sections: [
    {
      h2: 'Pharmaceutical distribution cartons',
      html: `<p>A distribution carton for regulated products has to do three things consistently: hold the regulated text at the specified size, present a barcode that scans first time, and reproduce identically from batch to batch.</p>
<p>Consistency is what rules out digital printing for most of this work — a mixed spot ink on an offset press reproduces exactly, while a digital simulation drifts slightly between runs. A coated white board holds small type better than kraft. See <a href="/product/cardboard-pill-packaging-boxes/">pill packaging</a> and <a href="/resources/cardboard-packaging-materials/">the materials guide</a>.</p>`,
    },
    {
      h2: 'Oversized and awkward components',
      html: `<p>Recreational vehicle and trailer components are the difficult class: long, irregular, and often with protruding fittings that will find any weak point in a box.</p>
<p>Three responses, applied together:</p>
<ul>
  <li><strong>Build to the bounding box, then cut it back.</strong> Start from the largest dimension in each axis, then use an insert to take up the space the shape leaves empty.</li>
  <li><strong>Protect the protrusions specifically.</strong> A bracket or fitting sticking out is where the puncture happens, not the flat faces.</li>
  <li><strong>Reinforce along the long axis.</strong> A long box loses stacking strength far faster than a cube of the same board, so panel support matters as much as grade.</li>
</ul>
<p><a href="/product/large-cardboard-boxes/">Large cardboard boxes</a> and <a href="/product/cardboard-industrial-parts-packaging/">industrial parts packaging</a> cover the range.</p>`,
    },
  ],
  faqHeading: 'Indiana packaging questions',
  faqs: [
    { q: 'Why is offset printing preferred for pharmaceutical cartons?', a: 'Consistency. A mixed spot ink reproduces identically across runs and small regulated type stays sharp. Digital printing simulates colour in CMYK, which drifts slightly between batches.' },
    { q: 'How do you package an awkwardly shaped component?', a: 'Build the box to the bounding box — the largest dimension in each axis — then use a die-cut insert to fill the space the shape leaves and to protect any protruding fittings, which is where punctures actually happen.' },
    { q: 'Why do long boxes fail more often than cubes?', a: 'A long panel buckles at a much lower load than a short one, so a tall or long box loses stacking strength faster than a cube of the same board. Panel support and proportion matter as much as board grade.' },
    { q: 'Can you supply to a production line schedule?', a: 'Yes, through scheduled call-off. Commit to an annual quantity for the volume price and take delivery on a schedule that matches your line rather than your storage.' },
    { q: 'Do you hold approved dielines for reorders?', a: 'Yes. Once a structure is approved it stays on file, so a repeat order needs only a quantity and any artwork change.' },
  ],
  shop: [
    { path: '/product/cardboard-pill-packaging-boxes/', label: 'Pill packaging boxes' },
    { path: '/product/large-cardboard-boxes/', label: 'Large cardboard boxes' },
    { path: '/product/cardboard-industrial-parts-packaging/', label: 'Industrial parts packaging' },
  ],
  guides: [
    { path: '/resources/cardboard-box-inserts-guide/', label: 'Specifying inserts' },
    { path: '/resources/boxes-for-heavy-products/', label: 'Boxes for heavy products' },
  ],
  cta: { heading: 'Brief an Indiana order', body: 'Send the component dimensions, or post us a sample, and we will build the box and the insert around it.', label: 'Send a brief' },
};

export const missouri: LocationPage = {
  slug: 'missouri', kind: 'state', name: 'Missouri', region: 'Midwest',
  title: 'Cardboard Boxes in Missouri | Central Distribution & Agriculture',
  description: 'Cardboard packaging for Missouri businesses — central distribution ordering, agricultural and grain-adjacent packaging, and boxes for multi-region shipping.',
  h1: 'Cardboard Boxes for Missouri',
  eyebrow: 'Midwest',
  summary: 'Central distribution ordering, agricultural packaging, and a box ladder built for shipping in every direction at once.',
  lede: `<p>Missouri's advantage in distribution is also its packaging challenge: shipments leave in every direction, to climates that ask different things of a box. A pallet heading to Phoenix and a pallet heading to Tampa are not the same specification problem, and most operations end up specifying for the harder one.</p>`,
  layout: 'form-at-end',
  sections: [
    {
      h2: 'One specification, several climates',
      html: `<p>The temptation is to hold two box grades — a lighter one for dry destinations and a heavier one for humid ones. In practice that usually costs more than it saves: two SKUs each miss the volume break, and packers pick the wrong one.</p>
<p>The better answer is normally a single specification set to the harder condition, with the cost difference recovered through volume. Board grade differences are small in unit terms; carrying an extra SKU is not.</p>
<p>Where the split is genuinely large — say a substantial cold-chain line alongside a dry-goods line — two specifications are justified. <a href="/resources/corrugated-box-strength-guide/">The strength guide</a> covers how much humidity actually costs in stacking terms.</p>`,
    },
    {
      h2: 'Agricultural and bulk packaging',
      html: `<p>Missouri agriculture buys packaging in single large seasonal orders rather than continuously, which makes call-off scheduling worth setting up rather than an afterthought. Commit to the annual quantity for the volume price, take delivery before the season, and avoid a barn full of boxes absorbing moisture through the winter.</p>
<p><a href="/product/cardboard-bulk-shipping-trays/">Bulk shipping trays</a> and <a href="/product/cardboard-corrugated-pallet-boxes/">pallet boxes</a> cover most of the volume; <a href="/product-category/wholesale-cardboard-boxes/">wholesale ordering</a> covers the terms.</p>`,
    },
    {
      h2: 'Consolidating a box ladder',
      html: `<p>For distribution operations the largest available saving is usually structural rather than commercial. Seven box sizes ordered in small quantities each miss every volume break; four sizes ordered together hit a materially better price and simplify the packing bench at the same time.</p>
<p>Send us a month of shipment dimensions and we will model the ladder against your order profile rather than quoting from a standard list.</p>`,
    },
  ],
  faqHeading: 'Missouri distribution questions',
  faqs: [
    { q: 'Should I hold different box grades for different destinations?', a: 'Usually not. Two SKUs each miss the volume break and packers pick wrong. A single specification set to the harder condition, bought at volume, normally costs less overall.' },
    { q: 'How much does humidity at the destination actually matter?', a: 'Enough that a box specified for a dry warehouse can fail in a humid one, particularly under sustained stacking. If a meaningful share of your volume goes to the Southeast, specify for that.' },
    { q: 'Can I order a season\'s packaging in one go?', a: 'Yes, and it is usually the cheapest route. Commit to the annual quantity for the volume price and set a call-off schedule so the boxes arrive when you need them rather than months early.' },
    { q: 'How do I know how many box sizes to carry?', a: 'Send a month of shipment dimensions. We sort by largest single dimension and draw the cut lines so each box covers roughly a quarter of orders — that usually lands on three or four.' },
    { q: 'Do you deliver to multiple Missouri sites?', a: 'Yes. Give us all the addresses at quote stage so the freight is priced correctly rather than adjusted afterwards.' },
  ],
  shop: [
    { path: '/product-category/wholesale-cardboard-boxes/', label: 'Wholesale and bulk' },
    { path: '/product/cardboard-bulk-shipping-trays/', label: 'Bulk shipping trays' },
    { path: '/product/cardboard-corrugated-pallet-boxes/', label: 'Pallet boxes' },
  ],
  guides: [
    { path: '/resources/cardboard-box-sizes-guide/', label: 'Building a size ladder' },
    { path: '/resources/reduce-packaging-and-shipping-costs/', label: 'Reducing packaging costs' },
  ],
  cta: { heading: 'Model a Missouri box ladder', body: 'Send a month of shipment dimensions and we will show you which sizes to keep and which to drop.', label: 'Send my order data' },
};

export const maryland: LocationPage = {
  slug: 'maryland', kind: 'state', name: 'Maryland', region: 'Northeast',
  title: 'Cardboard Boxes in Maryland | Seafood, Biotech & Port',
  description: 'Cardboard packaging for Maryland businesses — crab and seafood cold chain boxes, biotech shipping, and export packaging through the Port of Baltimore.',
  h1: 'Cardboard Boxes for Maryland',
  eyebrow: 'Northeast',
  summary: 'Seafood cold chain, biotech shipping, and export packaging through a working port.',
  lede: `<p>Maryland packs an unusual amount into a small state: a major working port, a dense biotech corridor, and a seafood industry with one of the most demanding cold chains in the country. Each has a different failure mode, and none of them is solved by a heavier box.</p>`,
  layout: 'form-in-hero',
  sections: [
    {
      h2: 'Seafood and the condensation problem',
      html: `<p>Chesapeake seafood ships live or chilled, and in both cases the difficulty is water rather than temperature. Live product carries moisture with it; chilled product generates condensation every time the box crosses a temperature boundary. Untreated board absorbs both and loses strength quickly.</p>
<p>The specification is a moisture barrier plus an insulating liner, with the coolant sized to the journey rather than to the box. Vents are a judgement call: live product needs airflow, chilled product needs the temperature held. Those pull in opposite directions and the answer depends on which you are shipping. See <a href="/product/cardboard-seafood-packaging-boxes/">seafood packaging</a> and <a href="/product/cardboard-insulated-cold-boxes/">insulated cold boxes</a>.</p>`,
    },
    {
      h2: 'Biotech and laboratory shipping',
      html: `<p>The corridor between Baltimore and Washington generates steady demand for temperature-controlled and shock-protected shipping. The recurring requirement is repeatability: the same box, the same insert, the same performance, every time.</p>
<p>We hold approved dielines on file so a reorder is identical to the one that was validated. For shock-sensitive instruments, the two-box arrangement — inner box suspended inside an outer with a cushioning gap — is the reliable structure, and it is one of the few cases where foam earns its cost.</p>`,
    },
    {
      h2: 'Export through Baltimore',
      html: `<p>Two things matter for export freight. Long dwell in humid conditions reduces stacking strength, so specify a grade above what a dry warehouse would need. And a <a href="/product/cardboard-heavy-duty-shipping-crates/">corrugated crate</a> avoids the ISPM 15 heat-treatment and marking that solid wood packaging requires — removing a cost and a compliance step from the shipment entirely.</p>`,
    },
  ],
  faqHeading: 'Maryland packaging questions',
  faqs: [
    { q: 'Should a seafood box be vented or sealed?', a: 'It depends on the product. Live shellfish needs airflow; chilled fillets need the temperature held and the moisture kept out. Those requirements conflict, so the box is specified for one or the other rather than both.' },
    { q: 'How is coolant sized for a chilled shipment?', a: 'To the route — journey duration and ambient temperature both matter more than the box does. A two-day and a four-day journey get different coolant specifications for the same product.' },
    { q: 'Can you reproduce a validated packaging specification exactly?', a: 'Yes. Approved dielines stay on file, so every reorder matches the one that was validated. A repeat order needs only a quantity.' },
    { q: 'Do corrugated crates need heat treatment for export?', a: 'No. The ISPM 15 heat-treatment and marking requirements apply to solid wood packaging. Corrugated is exempt, which removes a cost and a compliance step.' },
    { q: 'Does port dwell time affect the packaging specification?', a: 'Yes. Days in humid conditions measurably reduce stacking strength, so export freight is normally specified a grade above the equivalent domestic shipment.' },
  ],
  shop: [
    { path: '/product/cardboard-seafood-packaging-boxes/', label: 'Seafood packaging' },
    { path: '/product/cardboard-insulated-cold-boxes/', label: 'Insulated cold boxes' },
    { path: '/product/cardboard-heavy-duty-shipping-crates/', label: 'Export crates' },
  ],
  guides: [
    { path: '/resources/food-packaging-box-guide/', label: 'Food packaging guide' },
    { path: '/resources/packaging-fragile-products/', label: 'Packaging fragile products' },
  ],
  cta: { heading: 'Specify a Maryland order', body: 'Tell us the journey and the temperature range. Both change the specification more than the product does.', label: 'Request a specification' },
};

export const colorado: LocationPage = {
  slug: 'colorado', kind: 'state', name: 'Colorado', region: 'West',
  title: 'Cardboard Boxes in Colorado | Craft Beverage & Outdoor Gear',
  description: 'Cardboard packaging for Colorado businesses — craft beverage carriers and bottle dividers, outdoor gear boxes, and altitude effects on sealed packaging.',
  h1: 'Cardboard Boxes for Colorado',
  eyebrow: 'West',
  summary: 'Craft beverage carriers, outdoor gear packaging, and the one place where altitude genuinely changes a box.',
  lede: `<p>Colorado sends us more beverage packaging enquiries per head than any other state, and a steady stream of outdoor equipment work alongside it. It is also the one place where altitude comes up as a genuine packaging variable rather than a curiosity.</p>`,
  layout: 'form-after-first-section',
  sections: [
    {
      h2: 'Craft beverage packaging',
      html: `<p>Beverage packaging is a fit problem, not a strength problem. Glass and cans survive compression well and impact badly, and the impact that damages them is nearly always container against container.</p>
<p>Corrugated dividers that hold each unit separately solve it, and the divider grid matters more than the board grade. The arithmetic is worth getting right: cell size is the container diameter plus two or three millimetres, and the divider walls themselves take up length inside the box — a common omission that makes the grid not fit.</p>
${specTable('Common beverage configurations', ['Config', 'Gross weight', 'Board'], [
  ['4-pack cans', 'Around 4 lb', 'Single wall with dividers'],
  ['6 bottles', 'Around 20 lb', 'Single or double wall'],
  ['12 bottles', 'Around 40 lb', 'Double wall'],
  ['24 cans', 'Around 25 lb', 'Double wall, handled'],
])}
<p>See <a href="/product/cardboard-boxes-for-bottles/">bottle packaging</a>, <a href="/product/cardboard-juice-bottle-carriers/">bottle carriers</a> and <a href="/resources/cardboard-box-inserts-guide/">the divider sizing guide</a>.</p>`,
    },
    {
      h2: 'Outdoor and equipment packaging',
      html: `<p>Outdoor gear is bulky, often irregular, and frequently sold to customers who care about packaging waste. That combination pushes towards a tight box with a corrugated insert rather than a generous box with foam — better fit, lower dimensional weight, and packaging that goes into the paper stream in one piece.</p>
<p><a href="/product/cardboard-eco-friendly-compostable-boxes/">Uncoated recyclable boxes</a> and <a href="/product/cardboard-recycled-kraft-boxes/">recycled kraft</a> suit the audience, and <a href="/resources/recyclable-cardboard-packaging/">the recyclability guide</a> covers which finishes would undermine the claim.</p>`,
    },
    {
      h2: 'Does altitude matter?',
      html: `<p>For the box itself, not really — corrugated is not a sealed system and it equalises freely. Where altitude does show up is in anything sealed inside the box: pouches, bags and containers that expand as external pressure drops, particularly on air freight.</p>
<p>That is a filling and sealing question rather than a board question, but it changes the box in one respect: an expanding inner pack needs headroom, or it presses against a lid that was sized flat. If you ship sealed pouches by air, allow for it in the internal height.</p>`,
    },
  ],
  faqHeading: 'Colorado packaging questions',
  faqs: [
    { q: 'How do I size a divider grid for cans or bottles?', a: 'Cell size is the container diameter plus two to three millimetres. Then add the divider walls — on a four-wide grid that is three internal walls, each around 3 mm, which has to exist inside the box length.' },
    { q: 'What board suits a 12-bottle case?', a: 'Double wall. Twelve full bottles is around 40 lb, and the load concentrates on the base. The dividers do the protecting; the board handles the stack.' },
    { q: 'Does altitude affect cardboard boxes?', a: 'Not the box itself — corrugated equalises freely. It affects sealed pouches and containers inside the box, which expand as external pressure drops. Allow headroom in the internal height if you ship sealed packs by air.' },
    { q: 'What packaging suits a brand selling on sustainability?', a: 'A tight box with a die-cut corrugated insert, uncoated or with a water-based coating. It recycles in one piece, and right-sizing reduces measured impact more than most material substitutions do.' },
    { q: 'Can carriers be printed with brand artwork?', a: 'Yes. Beverage carriers are usually flexo-printed for bold flat artwork, or litho-laminated where photographic quality is needed. Both are quoted per unit at your volume.' },
  ],
  shop: [
    { path: '/product/cardboard-boxes-for-bottles/', label: 'Bottle packaging' },
    { path: '/product/cardboard-juice-bottle-carriers/', label: 'Bottle carriers' },
    { path: '/product/cardboard-recycled-kraft-boxes/', label: 'Recycled kraft boxes' },
  ],
  guides: [
    { path: '/resources/cardboard-box-inserts-guide/', label: 'Dividers and inserts' },
    { path: '/resources/recyclable-cardboard-packaging/', label: 'Recyclable packaging' },
  ],
  cta: { heading: 'Quote a Colorado order', body: 'Send the container dimensions and the pack count and we will build the divider grid around them.', label: 'Request a quote' },
};
