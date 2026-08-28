import type { LocationPage } from './types';
import { specTable } from '../../../lib/seo/blocks';

export const seattle: LocationPage = {
  slug: 'seattle', kind: 'city', name: 'Seattle', stateName: 'Washington', stateSlug: 'washington', region: 'West',
  title: 'Cardboard Boxes in Seattle | Coffee, Seafood & Wet Weather',
  description: 'Cardboard packaging for Seattle businesses — coffee retail cartons, seafood cold chain boxes, and how persistent damp affects board specification.',
  h1: 'Cardboard Boxes for Seattle',
  eyebrow: 'City',
  summary: 'Coffee retail cartons, seafood cold chain, and the effect of persistent damp on stored board.',
  lede: `<p>Seattle's climate does something to packaging that summer heat does not: it works slowly. Board stored through a wet winter absorbs moisture gradually and loses stacking strength without anything obvious happening, until a stack that held last month does not.</p>`,
  layout: 'form-in-hero',
  sections: [
    {
      h2: 'Persistent damp and stored stock',
      html: `<p>The difference between Seattle and a genuinely humid climate is duration rather than intensity. Moderate humidity sustained for months produces the same outcome as extreme humidity for days, because board absorbs continuously and creeps under sustained load.</p>
<p>Practical responses, in order of cost:</p>
<ol>
  <li><strong>Stack lower.</strong> Free, and it addresses creep directly.</li>
  <li><strong>Keep pallets off concrete floors.</strong> Slab moisture wicks upward into the bottom layer.</li>
  <li><strong>Order to a call-off schedule</strong> so stock does not sit for months in the first place.</li>
  <li><strong>Specify a grade up</strong> where the first three are not possible.</li>
</ol>
<p><a href="/resources/corrugated-box-strength-guide/">The strength guide</a> covers the mechanism in more detail.</p>`,
    },
    {
      h2: 'Coffee retail cartons',
      html: `<p>Coffee packaging is a print job rather than a structural one — a coffee shelf is a wall of competing brown, and differentiation is visual. Where roasters do hit a structural question it is usually the degassing valve, which sits in the bag rather than the carton; the carton simply needs to accommodate it without pressing against it.</p>
<p>Kraft board suits the unbleached aesthetic many roasters want, at the cost of muted print colour; a coated white board gives accurate colour and loses the raw look. <a href="/product/cardboard-coffee-packaging-boxes/">Coffee packaging boxes</a> are produced on either, and the choice is aesthetic before it is technical.</p>
<p>How much colour each substrate actually holds is easier to judge from a comparison than a description, and <a href="/resources/cardboard-packaging-materials/">the materials guide</a> sets them against each other.</p>`,
    },
    {
      h2: 'Landing seafood in a box that survives the damp',
      html: `<p>Pacific seafood ships in insulated boxes where condensation, not cold, is the specific enemy. Moisture forms every time the box crosses a temperature boundary, and untreated board absorbs it. A moisture barrier is the baseline, and the coolant is sized to the route rather than to the box. See <a href="/product/cardboard-seafood-packaging-boxes/">seafood packaging</a>.</p>`,
    },
  ],
  faqHeading: 'Seattle packaging questions',
  faqs: [
    { q: 'Does damp storage weaken boxes even without visible moisture?', a: 'Yes. Board absorbs atmospheric moisture continuously and creeps under sustained load. A stack that held for a month can fail in the next one with nothing visibly different.' },
    { q: 'What is the cheapest way to protect stored stock?', a: 'Stack lower and keep pallets off concrete floors — slab moisture wicks into the bottom layer. Both are free, and both address the mechanism directly.' },
    { q: 'Kraft or white board for coffee packaging?', a: 'Kraft for the unbleached look many roasters want, at the cost of muted print colour. Coated white board where the artwork needs accurate colour. It is a brand decision more than a technical one.' },
    { q: 'Does the degassing valve affect the carton?', a: 'Only in that the carton must not press against it. The valve sits in the bag; the carton needs enough internal clearance that the valve is not compressed.' },
    { q: 'What decides how long a chilled box stays cold?', a: 'Coolant mass and outside temperature, far more than the board. That is why we size the coolant against your actual route rather than quoting a headline number of hours that assumes ideal conditions.' },
  ],
  shop: [
    { path: '/product/cardboard-coffee-packaging-boxes/', label: 'Coffee packaging' },
    { path: '/product/cardboard-seafood-packaging-boxes/', label: 'Seafood packaging' },
    { path: '/product/cardboard-insulated-cold-boxes/', label: 'Insulated cold boxes' },
  ],
  guides: [
    { path: '/resources/corrugated-box-strength-guide/', label: 'Board strength and moisture' },
    { path: '/resources/cardboard-packaging-materials/', label: 'Board materials compared' },
  ],
  cta: { heading: 'Quote a Seattle order', body: 'Tell us how long the boxes will sit before use. Storage time matters here more than most places.', label: 'Request a quote' },
};

export const denver: LocationPage = {
  slug: 'denver', kind: 'city', name: 'Denver', stateName: 'Colorado', stateSlug: 'colorado', region: 'West',
  title: 'Cardboard Boxes in Denver | Mountain Distribution & Events',
  description: 'Cardboard packaging for Denver businesses — distribution into the mountain west, cold weather handling, and event and hospitality packaging.',
  h1: 'Cardboard Boxes for Denver',
  eyebrow: 'City',
  summary: 'Distribution into the mountain west, cold-weather handling, and event and hospitality packaging.',
  lede: `<p>Denver is a distribution point for a region where the last hundred miles are frequently the hardest. Freight into the mountains means switchbacks, temperature swings and vehicles that are rarely full — a combination that treats packaging differently from a flat interstate run.</p>`,
  layout: 'form-after-first-section',
  sections: [
    {
      h2: 'Freight into the mountain west',
      html: `<p>Three things are worth planning for on mountain distribution:</p>
<ul>
  <li><strong>Load shift.</strong> Sustained cornering and grade changes move a partially filled pallet in a way flat-highway freight does not. A tight box and a fitted insert matter more than an extra layer of board.</li>
  <li><strong>Temperature swings.</strong> A trailer that is below freezing at altitude and above it in the valley cycles condensation onto the load repeatedly.</li>
  <li><strong>Part loads.</strong> Freight into small mountain towns is often consolidated with other shippers, which means more handling and more restacking than a dedicated run.</li>
</ul>
<p>None of these is solved by board grade alone. Fit and closure do most of the work — an H-taped base rather than a single centre strip is worth the extra second.</p>`,
    },
    {
      h2: 'Cold weather handling',
      html: `<p>Cold does not weaken corrugated. Condensation does, and it forms whenever cold stock is brought into a warm space. Where pallets move between an unheated dock and a heated packing area all winter, the cycle repeats daily.</p>
<p>Two cheap responses: let pallets acclimatise before unwrapping, and specify a moisture-resistant coating where boxes will see the cycle repeatedly.</p>`,
    },
    {
      h2: 'Events and hospitality',
      html: `<p>Denver's events and hospitality trade buys short runs on fixed dates, which suits digital printing — no plate cost at 100 units and artwork that can change late.</p>
<p>For catering the priorities are assembly speed and a lid that takes stacking weight in a transport rack, which is what <a href="/product/cardboard-catering-trays/">catering trays with reinforced bases</a> are built around.</p>
<p>Individually portioned service needs the opposite: one box per person, assembled fast and carried by hand. <a href="/product/lunch-cardboard-boxes/">Lunch boxes with fold-flat lids</a> are sized for that.</p>`,
    },
  ],
  faqHeading: 'Denver packaging questions',
  faqs: [
    { q: 'What packaging suits mountain freight?', a: 'A tight box with a fitted insert and an H-taped base. Load shift from sustained cornering and grade changes is the main risk, and fit addresses it better than extra board.' },
    { q: 'Does cold weaken cardboard?', a: 'Cold itself does not. Condensation does — moisture forming when cold stock meets warm air, repeatedly through a winter. Letting pallets acclimatise before unwrapping helps considerably.' },
    { q: 'Should I specify heavier board for altitude?', a: 'No. Corrugated is not a sealed system and equalises freely. Altitude affects sealed pouches inside the box, not the box itself.' },
    { q: 'What matters most in catering packaging?', a: 'Assembly speed and a lid that takes stacking weight without deflecting into the food. At a few hundred boxes per event, seconds per box are real money.' },
    { q: 'Can you deliver to mountain addresses?', a: 'We ship nationwide. Remote mountain addresses can take longer on the final leg, so tell us the destination at quote stage if a date matters.' },
  ],
  shop: [
    { path: '/product/cardboard-catering-trays/', label: 'Catering trays' },
    { path: '/product/cardboard-box-inserts/', label: 'Fitted inserts' },
    { path: '/product-category/cardboard-shipping-boxes/', label: 'Shipping boxes' },
  ],
  guides: [
    { path: '/resources/packaging-fragile-products/', label: 'Packaging fragile products' },
    { path: '/resources/how-to-choose-a-shipping-box/', label: 'Choosing a shipping box' },
  ],
  cta: { heading: 'Quote a Denver order', body: 'Tell us where the freight is going after Denver. The last hundred miles change the specification.', label: 'Request a quote' },
};

export const boston: LocationPage = {
  slug: 'boston', kind: 'city', name: 'Boston', stateName: 'Massachusetts', stateSlug: 'massachusetts', region: 'Northeast',
  title: 'Cardboard Boxes in Boston | Moving, Storage & Small Producers',
  description: 'Cardboard packaging for Boston businesses — moving and storage boxes for a seasonal city, small-batch food producer packaging, and short print runs.',
  h1: 'Cardboard Boxes for Boston',
  eyebrow: 'City',
  summary: 'Moving and storage boxes for a city with a compressed moving season, plus packaging for small-batch food producers.',
  lede: `<p>Boston has a moving season rather than a moving pattern. An enormous share of the city's leases turn over within a few days at the start of September, which produces a demand spike for moving and storage packaging that is difficult to serve from stock.</p>`,
  layout: 'form-at-end',
  sections: [
    {
      h2: 'Planning for a compressed moving season',
      html: `<p>If your business sells or supplies moving boxes, the constraint is not the box — it is that everyone needs them in the same week. Production runs 8–10 business days, so a September peak is a July or early August order.</p>
<p>Committing to the annual quantity and taking a heavy delivery before the peak, with lighter deliveries after, gets the volume price without a warehouse full of boxes in February.</p>
<p>Student moves and seasonal turnover run on the same two structures. <a href="/product/cardboard-storage-boxes/">Storage boxes with reinforced bases</a> handle repeated lifting rather than a single journey.</p>
<p>Bulkier and lighter loads want span instead of strength, which <a href="/product/large-cardboard-boxes/">large cardboard boxes</a> give without the extra wall.</p>
<p>What a call-off schedule changes about the price is set out on the <a href="/product-category/wholesale-cardboard-boxes/">wholesale cardboard boxes page</a>.</p>
${specTable('Moving box sizes that actually get used', ['Size', 'Internal', 'Holds'], [
  ['Small', 'Around 16 × 12 × 12 in', 'Books, records, dense items'],
  ['Medium', 'Around 18 × 18 × 16 in', 'Kitchen goods, general household'],
  ['Large', 'Around 18 × 18 × 24 in', 'Bedding, clothing, light bulk'],
])}
<p>The commonest mistake is buying only large boxes. Filled with books, a large box exceeds what anyone should lift, and it fails at the base.</p>`,
    },
    {
      h2: 'Small-batch food producers',
      html: `<p>Boston's specialty food scene orders in the low hundreds, which digital printing serves well: no plate cost, and the artwork can change for the next run without waste.</p>
<p>The specification question is nearly always the barrier. Dry goods need no coating at all and stay fully recyclable. Anything greasy needs a water-based dispersion coating. Anything wet needs PE, with the recyclability trade-off that brings. <a href="/resources/food-packaging-box-guide/">The food packaging guide</a> works through it.</p>`,
    },
    {
      h2: 'Short runs generally',
      html: `<p>Minimum order is 100 boxes. That is genuinely the floor rather than a headline, and it suits a first production run, a seasonal one-off or a market stall. The per-unit price is higher than at 2,500, because setup is spread over fewer pieces — but nothing is wasted.</p>`,
    },
  ],
  faqHeading: 'Boston packaging questions',
  faqs: [
    { q: 'When should I order for a September moving peak?', a: 'July or early August. Production runs 8–10 business days from artwork approval, and the peak is compressed into a few days — there is no room to reorder once it starts.' },
    { q: 'What moving box sizes should I stock?', a: 'Three: around 16 × 12 × 12, 18 × 18 × 16 and 18 × 18 × 24 inches. Stocking only large boxes is the classic error — filled with books, a large box exceeds what anyone should lift.' },
    { q: 'Can I get the volume price without storing a year of boxes?', a: 'Yes. Commit to the annual quantity and take delivery on a call-off schedule — heavy before the peak, light after it. The stock stays with us until you need it.' },
    { q: 'What coating does a small food producer need?', a: 'For dry goods, none — uncoated food-grade board stays fully recyclable. For greasy items, a water-based dispersion coating. For wet items, PE, with the recyclability cost that carries.' },
    { q: 'Is 100 boxes really enough to order?', a: 'Yes. Digital printing carries no plate cost at that quantity, so a hundred-unit run is economic. It is a common first order.' },
  ],
  shop: [
    { path: '/product/cardboard-storage-boxes/', label: 'Storage boxes' },
    { path: '/product/large-cardboard-boxes/', label: 'Large moving boxes' },
    { path: '/product-category/food-related-cardboard-boxes/', label: 'Food packaging' },
  ],
  guides: [
    { path: '/resources/cardboard-box-sizes-guide/', label: 'Cardboard box sizes' },
    { path: '/resources/food-packaging-box-guide/', label: 'Food packaging guide' },
  ],
  cta: { heading: 'Plan a Boston order', body: 'Tell us the date you need stock in hand and we will work backwards from it.', label: 'Talk to us' },
};

export const nashville: LocationPage = {
  slug: 'nashville', kind: 'city', name: 'Nashville', stateName: 'Tennessee', stateSlug: 'tennessee', region: 'Southeast',
  title: 'Cardboard Boxes in Nashville | Healthcare, Hospitality & Gifts',
  description: 'Cardboard packaging for Nashville businesses — healthcare distribution cartons, hospitality and event boxes, and gift packaging for visitor retail.',
  h1: 'Cardboard Boxes for Nashville',
  eyebrow: 'City',
  summary: 'Healthcare distribution cartons, hospitality and event packaging, and gift boxes for a large visitor trade.',
  lede: `<p>Nashville's packaging demand comes from two places that rarely meet: a large healthcare administration and distribution sector, and a hospitality trade serving an enormous visitor population. One wants documented consistency; the other wants a box that photographs well and ships in a suitcase.</p>`,
  layout: 'form-in-hero',
  facts: [
    { label: 'Minimum', value: '100 boxes' },
    { label: 'Production', value: '8–10 days' },
    { label: 'Delivery', value: 'Free, US-wide' },
  ],
  sections: [
    {
      h2: 'Healthcare distribution cartons',
      html: `<p>Cartons for regulated healthcare products have to reproduce identically across batches: regulated text at the specified size, a barcode that scans first time, and a spot colour that does not drift.</p>
<p>That points at offset lithography and a coated white board rather than digital and kraft, and approved dielines stay on file so a reorder matches exactly.</p>
<p>Devices carry a physical requirement alongside the print one, with an inner suspended inside an outer. <a href="/product/cardboard-medical-device-packaging/">Medical device packaging</a> is built to it.</p>
<p>Where the carton itself carries the regulated information, <a href="/product/cardboard-pill-packaging-boxes/">pill packaging boxes</a> are produced for print consistency above everything else.</p>`,
    },
    {
      h2: 'Hospitality and events',
      html: `<p>Venue and event packaging is short runs on immovable dates. Digital printing covers both — no plate cost at 100 units, and artwork can change late. For catering the priorities are assembly speed and a lid that takes stacking weight in a transport rack; a crash-lock base recovers its unit premium quickly at a few hundred boxes per event.</p>`,
    },
    {
      h2: 'Gift and visitor retail',
      html: `<p>Visitor retail shares a constraint with other tourism markets: a large share of what is sold travels home in luggage. That rewards packaging that protects without bulk and does not mind being compressed.</p>
<p>A folding carton with a fitted insert weighs less and travels flatter than a rigid box, and costs less to freight. A <a href="/product/cardboard-rigid-lid-base-boxes/">rigid lid and base box</a> reads as a gift and holds its shape, at more cost and more bulk. Which is right depends on whether the box is the gift or merely carries it.</p>
<p>Bottles need both answers at once, protected in transit and presentable on arrival, which is what <a href="/product/cardboard-liquor-gift-boxes/">bottle presentation boxes with fitted inserts</a> are built for.</p>`,
    },
  ],
  faqHeading: 'Nashville packaging questions',
  faqs: [
    { q: 'Why offset printing for healthcare cartons?', a: 'Consistency across batches. A mixed spot ink reproduces exactly and small regulated type stays sharp, where digital simulates colour in CMYK and drifts slightly between runs.' },
    { q: 'Can you meet a fixed event date?', a: 'Production runs 8–10 business days from artwork approval, and digital printing removes the plate stage. Give us the date at quote stage and we will confirm it before you commit.' },
    { q: 'What gift packaging survives a suitcase?', a: 'A folding carton with a fitted insert — it protects without bulk and tolerates compression. Rigid boxes present better but weigh more and cannot be flattened.' },
    { q: 'What packaging suits a bottle gift?', a: 'A box with a fitted insert that holds the neck and base separately, so the bottle cannot move. A rigid outer adds presentation if the box is part of the gift.' },
    { q: 'Is there a Nashville pickup point?', a: 'No. We produce to order and ship to you, with delivery included anywhere in the United States.' },
  ],
  shop: [
    { path: '/product/cardboard-medical-device-packaging/', label: 'Medical device packaging' },
    { path: '/product/cardboard-liquor-gift-boxes/', label: 'Bottle gift boxes' },
    { path: '/product/cardboard-catering-trays/', label: 'Catering trays' },
  ],
  guides: [
    { path: '/resources/custom-box-printing-methods/', label: 'Printing methods' },
    { path: '/resources/cardboard-boxes-with-lids-guide/', label: 'Lid and closure styles' },
  ],
  cta: { heading: 'Quote a Nashville order', body: 'Healthcare consistency or an event deadline — tell us which and we will start from the right place.', label: 'Request a quote' },
};

export const atlanta: LocationPage = {
  slug: 'atlanta', kind: 'city', name: 'Atlanta', stateName: 'Georgia', stateSlug: 'georgia', region: 'Southeast',
  title: 'Cardboard Boxes in Atlanta | Air Freight, Beverage & Film',
  description: 'Cardboard packaging for Atlanta businesses — boxes sized for air freight bands, beverage carriers and dividers, and short-run production and studio packaging.',
  h1: 'Cardboard Boxes for Atlanta',
  eyebrow: 'City',
  summary: 'Boxes sized for air freight bands, beverage carriers, and short-run packaging for production and studio work.',
  lede: `<p>More freight leaves Atlanta by air than almost anywhere, and air freight bills volume harder than any other mode. For a great many Atlanta businesses, the highest-value packaging decision is a dimension rather than a material.</p>`,
  layout: 'form-after-first-section',
  sections: [
    {
      h2: 'Boxes sized to the air freight band',
      html: `<p>Air carriers use a less forgiving dimensional weight divisor than ground services, so a light product in a generous box is billed as heavy on every shipment. Reducing a box by an inch on each axis often saves more per year than any negotiation on unit price.</p>
<p>Work from external dimensions — internal size plus roughly twice the board thickness on each axis, plus tape overlap — and check against your carrier's band table. <a href="/product/custom-size-cardboard-boxes/">Custom size boxes</a> carry no premium for being non-standard, because every box is cut to its own dieline.</p>
<p>Choosing that size in the first place is the harder half, and <a href="/resources/how-to-choose-a-shipping-box/">the shipping box guide</a> works through it from the product outward.</p>`,
    },
    {
      h2: 'Beverage carriers and dividers',
      html: `<p>Atlanta's beverage sector needs divider grids more than it needs heavy board. Glass and aluminium survive compression well and impact badly, and the impact that damages them is container against container.</p>
<p>The grid arithmetic is where these go wrong: cell size is container diameter plus two to three millimetres, and the divider walls themselves take up length inside the box. On a four-wide grid that is three internal walls of around 3 mm each.</p>
<p><a href="/product/cardboard-boxes-for-bottles/">Bottle packaging with corrugated dividers</a> is built with that allowance already made.</p>
<p>For grids you are specifying yourself, <a href="/resources/cardboard-box-inserts-guide/">the divider sizing guide</a> works the calculation through step by step.</p>`,
    },
    {
      h2: 'Production and studio packaging',
      html: `<p>Film and production work brings a steady stream of short-run, fixed-date packaging: press kits, cast gifts, wrap boxes. Digital printing handles all of it at 100 units with no plate cost and artwork that can change late.</p>
<p>A <a href="/product/cardboard-pr-kit-boxes/">PR kit box with a fitted insert</a> is the usual structure, holding the arrangement through the courier so it still reads as deliberate when it is filmed.</p>
<p>Where the opening itself is the point, <a href="/product/cardboard-luxury-magnet-boxes/">magnetic closure boxes</a> deliver it — but they ship assembled rather than flat, so allow for the freight volume in the timeline.</p>`,
    },
  ],
  faqHeading: 'Atlanta packaging questions',
  faqs: [
    { q: 'How do I size a box to an air freight band?', a: 'Work from external dimensions — internal size plus roughly twice the board thickness on each axis, plus tape overlap — against your carrier\'s band table. We build the dieline to sit inside it at no extra cost.' },
    { q: 'Does a smaller box always cost less to ship by air?', a: 'Up to the point where actual weight takes over from dimensional weight. For light bulky products that point is a long way down, which is why right-sizing pays so well on air freight.' },
    { q: 'How do I size a divider grid for bottles or cans?', a: 'Container diameter plus two to three millimetres per cell, then add the divider wall thickness — around 3 mm each — into the internal box dimensions. Omitting the walls is the usual reason a grid does not fit.' },
    { q: 'Can you produce packaging on a production deadline?', a: 'Production runs 8–10 business days from artwork approval. Digital printing removes the plate stage, so a short run moves as fast as the artwork does.' },
    { q: 'Do magnetic boxes ship flat?', a: 'No. The rigid frame cannot fold, so they arrive assembled. Allow for more inbound freight volume and a slightly longer delivery leg in the schedule.' },
  ],
  shop: [
    { path: '/product/custom-size-cardboard-boxes/', label: 'Custom size boxes' },
    { path: '/product/cardboard-boxes-for-bottles/', label: 'Bottle and can packaging' },
    { path: '/product/cardboard-pr-kit-boxes/', label: 'PR kit boxes' },
  ],
  guides: [
    { path: '/resources/how-to-choose-a-shipping-box/', label: 'Choosing a shipping box' },
    { path: '/resources/cardboard-box-inserts-guide/', label: 'Dividers and inserts' },
  ],
  cta: { heading: 'Quote an Atlanta order', body: 'Send your carrier band table or the container dimensions and we will build the box to fit.', label: 'Request a quote' },
};
