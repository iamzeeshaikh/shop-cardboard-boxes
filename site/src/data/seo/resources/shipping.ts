import type { Resource } from './types';
import { fitComparison } from '../../../lib/seo/diagrams';
import { specTable } from '../../../lib/seo/blocks';

/** Articles about getting a product from a warehouse to a doorstep intact. */

export const wallComparison: Resource = {
  slug: 'single-wall-vs-double-wall',
  title: 'Single Wall vs Double Wall vs Triple Wall Cardboard',
  h1: 'Single Wall vs Double Wall vs Triple Wall',
  description: 'A head-to-head comparison of the three corrugated wall constructions — weight limits, stacking, freight cost and where each one is the wrong choice.',
  summary: 'A head-to-head on the three wall constructions, including the cases where the heavier board is the wrong answer.',
  topic: 'Materials',
  updated: '2026-08-27',
  readingMinutes: 6,
  body: `
<p class="scb-lede">The default assumption is that more layers is safer. It usually is, and it is also heavier, bulkier and more expensive to ship — so the honest question is not which is strongest but which is enough.</p>

<h2>Single wall</h2>
<p><strong>What it is:</strong> one fluted layer between two liners. Typically 32 ECT.</p>
<p><strong>Where it wins:</strong> anything under about 20 lb travelling on a parcel network. It is light, it folds cleanly, it costs the least per unit and it costs the least to ship inbound. Nearly everything you receive as an online shopper is single wall, and that is the correct decision rather than a cost-cutting one.</p>
<p><strong>Where it fails:</strong> stacked storage, palletised freight, and dense products with hard corners that punch through a single liner.</p>
<p>See <a href="/product/single-wall-cardboard-boxes/">single wall cardboard boxes</a>.</p>

<h2>Double wall</h2>
<p><strong>What it is:</strong> two fluted layers and three liners, usually BC flute at 48 ECT.</p>
<p><strong>Where it wins:</strong> 30–65 lb, and anything that goes on a pallet regardless of weight. Roughly double the stacking strength of single wall for around 40% more board cost, which is the best value step on this list. It is also the right answer for hard-cornered products.</p>
<p><strong>Where it fails:</strong> as an ecommerce default. Sending a 2 lb product in double wall adds inbound freight weight and box cost for protection nothing needs.</p>
<p>See <a href="/product/double-wall-cardboard-boxes/">double wall cardboard boxes</a>.</p>

<h2>Triple wall</h2>
<p><strong>What it is:</strong> three fluted layers and four liners, 90+ ECT.</p>
<p><strong>Where it wins:</strong> above 65 lb, and anywhere the alternative is a timber crate. Machinery, engine parts, industrial components, export freight. It is lighter than timber, cheaper to dispose of, and does not need heat treatment for international shipping.</p>
<p><strong>Where it fails:</strong> anything that has to fold neatly or print well. Triple wall is a structural material, not a presentation one.</p>
<p>See <a href="/product/triple-wall-corrugated-cardboard-boxes/">triple wall corrugated boxes</a>.</p>

<h2>Side by side</h2>
${specTable('The three constructions compared', ['', 'Single wall', 'Double wall', 'Triple wall'], [
  ['<strong>Typical ECT</strong>', '32', '48', '90+'],
  ['<strong>Gross weight</strong>', 'Up to 20 lb', '30–65 lb', '65–300 lb'],
  ['<strong>Relative board cost</strong>', '1.0×', '≈1.4×', '≈2.3×'],
  ['<strong>Stacking</strong>', 'Low', 'Good', 'Very high'],
  ['<strong>Print quality</strong>', 'Good', 'Acceptable', 'Poor'],
  ['<strong>Folds small boxes</strong>', 'Yes', 'Marginal', 'No'],
])}

<h2>The upgrade that usually is not the answer</h2>
<p>When boxes arrive damaged, the instinct is to move up a wall count. Before doing that, check three things, because each of them is cheaper to fix:</p>
<ol>
  <li><strong>Is the box too big?</strong> A product moving inside a box breaks it regardless of board grade. Fixing the internal dimensions is usually the whole fix.</li>
  <li><strong>Is the failure at the corners or in the middle of a face?</strong> Corner crush is a stacking problem, so ECT is the lever. A punctured face is an impact problem, so Mullen — or an insert — is the lever.</li>
  <li><strong>Is the load sharing?</strong> In a well-filled box the contents carry part of the stack. In a half-empty one the walls carry everything.</li>
</ol>
<p><a href="/resources/corrugated-box-strength-guide/">The strength guide</a> covers how to read those failures and what to specify instead.</p>`,
  faqs: [
    { q: 'Is double wall twice as strong as single wall?', a: 'Roughly, for stacking — 48 ECT against 32 ECT. It is not twice as strong against puncture, and it does not double the weight the box can carry when the failure is the box bursting rather than crushing.' },
    { q: 'Can I print photographic artwork on double wall?', a: 'Directly, not well — the fluting shows through solid colour. Either use an E-flute outer or litho-laminate a printed sheet onto the board, which gives retail-quality print over a heavy structure.' },
    { q: 'Does triple wall replace a wooden crate?', a: 'For a great many shipments, yes. It is lighter, cheaper, easier to dispose of, and it avoids the heat-treatment requirements that apply to timber in international freight.' },
    { q: 'Which wall count for a heavy but small product?', a: 'Double wall in a tightly fitted box. Small and dense concentrates the load, and keeping the internal dimensions close to the product matters more than adding a third layer.' },
    { q: 'Is heavier board always safer?', a: 'No. It adds inbound freight weight and cost, and it does nothing about the most common cause of transit damage, which is a product moving inside an oversized box.' },
  ],
  faqHeading: 'Wall construction questions',
  shop: [
    { path: '/product/single-wall-cardboard-boxes/', label: 'Single wall boxes' },
    { path: '/product/double-wall-cardboard-boxes/', label: 'Double wall boxes' },
    { path: '/product/triple-wall-cardboard-boxes/', label: 'Triple wall boxes' },
  ],
  next: [
    { path: '/resources/corrugated-box-strength-guide/', label: 'ECT and Mullen explained' },
    { path: '/resources/boxes-for-heavy-products/', label: 'Boxes for heavy products' },
    { path: '/resources/cardboard-flute-types/', label: 'Flute types explained' },
  ],
};

export const chooseShippingBox: Resource = {
  slug: 'how-to-choose-a-shipping-box',
  title: 'How to Choose a Shipping Box | Size, Board & Carrier Cost',
  h1: 'How to Choose a Shipping Box',
  description: 'Five questions that settle a shipping box specification: fit, weight, journey, stacking and carrier rate bands — in the order that saves the most money.',
  summary: 'Five questions, in the order that saves the most money, that settle almost every shipping box specification.',
  topic: 'Shipping',
  updated: '2026-08-27',
  readingMinutes: 7,
  body: `
<p class="scb-lede">Specifying a shipping box is a sequence, and the order matters. Get the fit right first and several of the later decisions answer themselves.</p>

<h2>1. What are the packed dimensions?</h2>
<p>Not the product — the product plus tissue, plus a label, plus an insert, plus whatever else goes in the box. Measure the packed bundle at its widest points.</p>
<p>This comes first because box size drives the carrier bill more than anything else on this list. Carriers charge on dimensional weight, so an inch of unnecessary space on each axis can be worth more per year than the entire board cost.</p>
${fitComparison()}

<h2>2. What does it weigh, packed?</h2>
<p>Gross weight sets the board grade:</p>
<ul>
  <li>Under 20 lb → 32 ECT single wall</li>
  <li>20–65 lb → 48 ECT double wall</li>
  <li>Above 65 lb → triple wall or a <a href="/product/cardboard-heavy-duty-shipping-crates/">heavy-duty crate</a></li>
</ul>
<p>If the product is dense and small, move up a grade even inside those bands — concentrated load punctures more readily than it crushes.</p>

<h2>3. What is the journey?</h2>
<p>A parcel network means individual handling: drops, corner impacts, conveyor sorting. Puncture resistance matters, and so does a closure that will not spring open. A pallet means stacking: ECT matters, and puncture much less. Sea freight means humidity, which quietly removes stacking strength over weeks.</p>

<h2>4. Will boxes be stacked, and how high?</h2>
<p>Stacking is where most damage originates, and it is the thing people forget to mention. Six boxes high in a warehouse rack for three weeks is a much harder test than a single box on a van, even at the same weight — board creeps under sustained load.</p>
<div class="scb-callout"><p><strong>Ask your warehouse, not your instinct.</strong> The stack height in the receiving bay is usually higher than anyone assumes, and it is the number that determines whether single wall survives.</p></div>

<h2>5. Where do the carrier's rate bands fall?</h2>
<p>Most carriers price in steps. A box one inch over a threshold on a single dimension can move an entire shipping profile into the next band. If you ship at volume, get the band table from your account manager and build the box to sit inside it, allowing for board thickness and tape overlap.</p>
${specTable('Where the money actually goes on a typical parcel', ['Cost element', 'Share of landed cost', 'How much you control it'], [
  ['Carrier charge', 'Usually the majority', 'High — through box dimensions'],
  ['The box itself', 'Small', 'Moderate — board grade and volume'],
  ['Void fill and tape', 'Small but recurring', 'High — a fitted box removes most of it'],
  ['Damage and replacement', 'Variable, often underestimated', 'High — fit matters more than board grade'],
  ['Packing labour', 'Meaningful at volume', 'High — closure style changes seconds per parcel'],
])}

<h2>Then choose the structure</h2>
<p>With size, board and journey settled, the structure is usually obvious. A taped <a href="/product/custom-cardboard-shipping-boxes/">regular slotted carton</a> is cheapest per unit and strongest for weight. A <a href="/product/cardboard-mailing-boxes/">self-seal mailer</a> costs a little more and saves seconds per parcel plus the tape. A <a href="/product/cardboard-postal-boxes/">postal box</a> is worth it when a postal service rate band is the target. <a href="/resources/box-styles-explained/">The box styles guide</a> covers the trade-offs in full.</p>`,
  faqs: [
    { q: 'What is dimensional weight?', a: 'A billing method where the carrier calculates length × width × height divided by a fixed divisor and charges whichever is greater — that figure or the actual weight. It is why an oversized box costs more even when it is light.' },
    { q: 'How much space should I leave for void fill?', a: 'One to two inches per side if you are relying on loose fill. If you use a fitted insert instead, keep the box tight — the insert does the protecting and you stop paying freight on empty volume.' },
    { q: 'Should shipping boxes be printed?', a: 'Usually not. A printed transit box costs more and is recycled minutes after arrival. Branded tape or a printed label gives most of the effect for a fraction of the cost.' },
    { q: 'Is a heavier box always safer?', a: 'No. The most common cause of transit damage is a product moving inside a box that is too big. Fixing the fit costs less than a board upgrade and works better.' },
    { q: 'How do I size a box to a carrier rate band?', a: 'Get the band table from your carrier, then work back from the external dimensions — internal size plus roughly twice the board thickness on each axis, plus any tape overlap. We can build the dieline to a target external size on request.' },
    { q: 'Do you make boxes for third-party fulfilment centres?', a: 'Yes, including delivery direct to the receiving site with whatever pallet or carton labelling that site requires. Give us the address and the booking requirements at quote stage.' },
  ],
  faqHeading: 'Shipping box questions',
  shop: [
    { path: '/product-category/cardboard-shipping-boxes/', label: 'Shipping and mailing boxes' },
    { path: '/product/custom-cardboard-shipping-boxes/', label: 'Custom shipping boxes' },
    { path: '/product/cardboard-mailing-boxes/', label: 'Self-seal mailers' },
    { path: '/design-your-box/', label: 'Design your box' },
  ],
  next: [
    { path: '/resources/reduce-packaging-and-shipping-costs/', label: 'Reducing packaging costs' },
    { path: '/resources/ecommerce-packaging-guide/', label: 'Ecommerce packaging guide' },
    { path: '/resources/packaging-fragile-products/', label: 'Packaging fragile products' },
  ],
};

export const heavyProducts: Resource = {
  slug: 'boxes-for-heavy-products',
  title: 'Choosing Boxes for Heavy Products | Weight Bands & Failure',
  h1: 'Choosing Boxes for Heavy Products',
  description: 'How heavy loads actually break a cardboard box, the weight bands that map to each board grade, and when a corrugated crate replaces timber.',
  summary: 'How heavy loads actually break a box, what to specify at each weight band, and when corrugated replaces a timber crate.',
  topic: 'Shipping',
  updated: '2026-08-27',
  readingMinutes: 6,
  body: `
<p class="scb-lede">Heavy packaging fails in a small number of predictable ways. Knowing which one you are seeing is more useful than adding board, because three of the four have nothing to do with wall count.</p>

<h2>Four failure modes</h2>
<h3>Base blow-out</h3>
<p>The bottom flaps separate and the contents drop through. Almost always a closure problem, not a board problem: tape applied in a single strip rather than an H-pattern, or a regular slotted carton used where the load needed a full-overlap base. Fixing the taping pattern is free.</p>
<h3>Corner crush</h3>
<p>The vertical corners buckle and the box loses height. This is a stacking failure, and ECT is the correct lever. It is also the failure that humidity and long storage make dramatically worse.</p>
<h3>Wall puncture</h3>
<p>A hard corner of the product pushes through a side. This is an impact and fit failure. A higher Mullen rating helps; a fitted insert or corner protection helps more, because it stops the product reaching the wall at all.</p>
<h3>Handle tear-out</h3>
<p>The die-cut handle rips. The board around a handle carries the whole load through two small apertures. It needs reinforcement, and the handle needs positioning so the box hangs level — an off-centre handle tears at a fraction of the rated load.</p>

<h2>What to specify by weight</h2>
${specTable('Heavy load specification', ['Gross weight', 'Board', 'Closure', 'Also specify'], [
  ['30–65 lb', 'Double wall, 48 ECT', 'H-taped RSC', 'Fitted insert if the product is dense'],
  ['65–120 lb', 'Triple wall, 90+ ECT', 'Full overlap base', 'Corner posts, palletised handling'],
  ['120–200 lb', 'Triple wall, reinforced', 'Full overlap, strapped', 'Pallet base, edge protectors'],
  ['200–300 lb', 'Corrugated crate', 'Strapped to a pallet', 'Forklift access, no manual handling'],
])}

<h2>When corrugated replaces timber</h2>
<p>A <a href="/product/cardboard-heavy-duty-shipping-crates/">heavy-duty corrugated crate</a> is a genuine alternative to a wooden crate up to a few hundred pounds. It is lighter, so it costs less to freight. It is cheaper to buy. It is recyclable rather than a disposal problem at the receiving end. And critically, it avoids the ISPM 15 heat-treatment and marking requirements that apply to solid wood packaging in international shipments.</p>
<p>Timber still wins where the load is genuinely extreme, where the packaging has to be reused for years, or where the contents need to be bolted down rather than cushioned.</p>

<h2>The detail that gets forgotten</h2>
<p>A box rated for 100 lb is rated for 100 lb <em>evenly distributed</em>. A dense component sitting in one corner concentrates the load onto a fraction of the base, and the box fails well under its rating. If the contents are not evenly distributed, either build an insert that spreads the load or specify to the concentrated figure rather than the total.</p>
<div class="scb-callout"><p><strong>Before ordering heavy-load packaging:</strong> ask for a structural sample and load it to the real weight, in the real orientation, for a few days. Board creeps, and a stack that holds for an hour can fail after a week.</p></div>`,
  faqs: [
    { q: 'What is the heaviest load a cardboard box can carry?', a: 'Corrugated crates and pallet boxes handle several hundred pounds when the load is evenly distributed and the box is strapped to a pallet. Beyond that the constraint is usually handling and stability rather than the board.' },
    { q: 'Why did my box fail below its rated weight?', a: 'Most often because the load was concentrated rather than evenly distributed, or because the box was stored under load for weeks. Ratings assume even distribution and short-term loading.' },
    { q: 'Do I need a wooden crate for international freight?', a: 'Frequently not. Corrugated crates avoid the heat-treatment and marking requirements that apply to solid wood packaging, and they are lighter and cheaper to freight for the same protection at most weights.' },
    { q: 'How should a heavy box be taped?', a: 'An H-pattern — one strip along the centre seam and one across each end seam, top and bottom. A single centre strip is the most common cause of base blow-out on heavy loads.' },
    { q: 'Can heavy boxes have carry handles?', a: 'Up to a point. A reinforced die-cut handle carries around 20 lb reliably; a rope or plastic handle carries more. Above roughly 50 lb the box should be handled with equipment rather than by hand, and handles encourage the wrong behaviour.' },
  ],
  faqHeading: 'Heavy load questions',
  shop: [
    { path: '/product/cardboard-heavy-duty-shipping-crates/', label: 'Heavy duty shipping crates' },
    { path: '/product/triple-wall-cardboard-boxes/', label: 'Triple wall boxes' },
    { path: '/product/cardboard-corrugated-pallet-boxes/', label: 'Corrugated pallet boxes' },
    { path: '/product/cardboard-industrial-parts-packaging/', label: 'Industrial parts packaging' },
  ],
  next: [
    { path: '/resources/corrugated-box-strength-guide/', label: 'ECT and Mullen explained' },
    { path: '/resources/single-wall-vs-double-wall/', label: 'Wall constructions compared' },
    { path: '/resources/packaging-fragile-products/', label: 'Packaging fragile products' },
  ],
};

export const fragileProducts: Resource = {
  slug: 'packaging-fragile-products',
  title: 'Packaging Fragile Products | Cushioning, Inserts & Drops',
  h1: 'Packaging Fragile Products',
  description: 'How fragile items actually break in transit, the two-box principle, and how to choose between corrugated inserts, moulded pulp and foam cushioning.',
  summary: 'Why fragile items break in transit, the two-box principle, and how to choose between corrugated, pulp and foam cushioning.',
  topic: 'Shipping',
  updated: '2026-08-27',
  readingMinutes: 6,
  body: `
<p class="scb-lede">Fragile items rarely break because the box was weak. They break because the item moved, or because a shock reached it undamped. Those are different problems from crush resistance, and board grade barely addresses either.</p>

<h2>What actually happens in transit</h2>
<p>A parcel in a sorting network experiences repeated drops from conveyor height, sharp lateral accelerations, and compression from whatever is stacked on it. The drops are the dangerous part. A drop onto a corner concentrates the entire shock into a small area, and it is transmitted straight through to the contents unless something absorbs it.</p>
<p>Two things absorb it: distance and deformation. Distance means the item is held away from the wall. Deformation means something between the item and the wall crushes and gives up energy.</p>

<h2>The two-box principle</h2>
<p>For genuinely fragile items, the most reliable arrangement is an inner box holding the item snugly, suspended inside an outer box with a cushioning gap. The inner box stops the item moving relative to its immediate surroundings; the gap and the cushioning absorb the shock before it reaches the inner box.</p>
<p>It costs more than a single box, and for glassware, ceramics and instruments it is consistently the arrangement that survives.</p>

<h2>Choosing cushioning</h2>
${specTable('Cushioning options compared', ['Material', 'Protection', 'Cost', 'Recyclability', 'Best for'], [
  ['<strong>Die-cut corrugated insert</strong>', 'Good — holds position well', 'Low–medium', 'Excellent, same stream as the box', 'Most products; the default'],
  ['<strong>Moulded pulp</strong>', 'Very good on curves', 'Medium', 'Excellent', 'Bottles, jars, curved electronics'],
  ['<strong>Foam</strong>', 'Best shock absorption', 'High', 'Poor', 'Instruments, optics, lab equipment'],
  ['<strong>Loose fill</strong>', 'Poor — items migrate', 'Low', 'Varies', 'Filling voids, not protecting'],
  ['<strong>Air pillows</strong>', 'Moderate', 'Low', 'Poor to moderate', 'Light goods, void filling'],
])}
<div class="scb-callout"><p><strong>Loose fill is the most over-used option in packaging.</strong> Under vibration, contents migrate through it and end up against a wall. It fills space; it does not hold position. If something must not move, hold it — do not surround it.</p></div>

<h2>The corners are the whole problem</h2>
<p>Most fragile-goods failures trace to a corner drop. Corner protection is cheap and disproportionately effective: die-cut corner pads, a corrugated insert that stands the product off all six faces, or an inner box positioned so no face touches the outer wall. If you can only afford one intervention, make it the corners.</p>

<h2>Testing before you commit</h2>
<p>Formal drop testing to ISTA protocols is worth it at volume. Below that, an informal version catches most problems: pack the item as you would ship it, then drop the box from about a metre onto each face and each corner, onto a hard floor. If it survives six drops it will survive most of what a parcel network does. If it fails, note <em>which</em> drop broke it — that tells you where the protection is missing.</p>

<h2>What to order</h2>
<p>For most fragile goods the answer is a tight box plus a <a href="/product/cardboard-box-inserts/">die-cut insert</a>, or a <a href="/product/cardboard-partitioned-insert-boxes/">partitioned box</a> where several items travel together. For bottles specifically, <a href="/product/cardboard-boxes-for-bottles/">fitted bottle packaging</a> with neck and base dividers outperforms any amount of loose fill.</p>`,
  faqs: [
    { q: 'Is bubble wrap enough for fragile items?', a: 'For light items with no hard corners, often. For anything heavy or angular it is not, because it compresses fully on a corner drop and then transmits the shock. A fitted insert that prevents movement works better.' },
    { q: 'How much cushioning gap do I need?', a: 'For a typical parcel drop, one to two inches of deformable material between the item and the outer wall. More than that is usually wasted, and it costs dimensional weight.' },
    { q: 'Corrugated insert or foam?', a: 'Corrugated for most products — it holds position well, costs less and recycles with the box. Foam only where the item is genuinely shock-sensitive, such as optics or laboratory instruments.' },
    { q: 'Does double wall board help with fragile goods?', a: 'A little, and less than people expect. It resists crush and puncture, but it does not stop the item moving or absorb a corner shock. Spend on the insert before spending on the board.' },
  ],
  faqHeading: 'Fragile packaging questions',
  shop: [
    { path: '/product/cardboard-box-inserts/', label: 'Cardboard box inserts' },
    { path: '/product/cardboard-partitioned-insert-boxes/', label: 'Partitioned insert boxes' },
    { path: '/product/cardboard-boxes-for-bottles/', label: 'Bottle packaging' },
    { path: '/product/cardboard-divider-packaging/', label: 'Divider packaging' },
  ],
  next: [
    { path: '/resources/cardboard-box-inserts-guide/', label: 'Specifying inserts and dividers' },
    { path: '/resources/how-to-choose-a-shipping-box/', label: 'Choosing a shipping box' },
    { path: '/resources/boxes-for-heavy-products/', label: 'Boxes for heavy products' },
  ],
};

export const reduceCosts: Resource = {
  slug: 'reduce-packaging-and-shipping-costs',
  title: 'Reduce Packaging & Shipping Costs | Ranked by Saving',
  h1: 'Reducing Packaging and Shipping Costs',
  description: 'Seven levers for cutting packaging and freight spend, ranked by how much they usually save, with the trade-off attached to each one.',
  summary: 'Seven levers ranked by how much they usually save, each with its trade-off attached — starting with the one nobody looks at.',
  topic: 'Shipping',
  updated: '2026-08-27',
  readingMinutes: 7,
  body: `
<p class="scb-lede">Packaging cost conversations usually start with the price of the box, which is where the least money is. Here are the levers in the order they normally pay, with what each one costs you in return.</p>

<h2>1. Right-size the box</h2>
<p><strong>Typical saving: large.</strong> Carriers bill on dimensional weight, so unnecessary volume is charged as though it were weight. Reducing a 12 × 10 × 8 in box to 10 × 8 × 6 in halves the volume — and often the billable weight — for the same contents.</p>
<p><strong>The trade-off:</strong> a tighter box needs a better fit, which usually means an insert instead of loose fill. That is a cost, and it is normally much smaller than the freight saving.</p>

<h2>2. Cut the number of box sizes</h2>
<p><strong>Typical saving: substantial and recurring.</strong> Seven box SKUs ordered in small quantities each miss every volume break. Three or four sizes ordered together hit a much better price and simplify the packing bench.</p>
<p><strong>The trade-off:</strong> slightly worse fit at the edges of each band. Model it before deciding — sometimes the freight cost of the looser fit exceeds the purchasing saving.</p>

<h2>3. Stop printing transit boxes</h2>
<p><strong>Typical saving: meaningful.</strong> A printed outer costs more per unit and is recycled minutes after arrival. Branded tape or a printed label delivers most of the brand effect at a fraction of the cost.</p>
<p><strong>The trade-off:</strong> real, if unboxing is central to your brand. In that case put the spend on a printed inner or a <a href="/product/cardboard-sleeve-packaging/">printed sleeve</a> that the customer actually sees.</p>

<h2>4. Order to an annual volume, take delivery in stages</h2>
<p><strong>Typical saving: one or two price breaks.</strong> Committing to a yearly quantity gets the volume rate; scheduled call-off delivery means you do not store a year of boxes.</p>
<p><strong>The trade-off:</strong> you are committed. If artwork or box size might change, order shorter batches — a pallet of superseded boxes wipes out the saving.</p>

<h2>5. Change the closure, not the box</h2>
<p><strong>Typical saving: labour, which compounds.</strong> A self-seal mailer packs in one motion. A taped carton needs a tape gun, a strip and a check. A few seconds per parcel is significant at volume, and it removes the tape cost entirely.</p>
<p><strong>The trade-off:</strong> mailers cost a little more per unit and are less board-efficient than a regular slotted carton.</p>

<h2>6. Fix the damage rate before fixing the board</h2>
<p><strong>Typical saving: often the largest single item, and usually unmeasured.</strong> A replacement shipment costs the product, the second box, the second freight charge and the support time. Most people never total it.</p>
<p><strong>The trade-off:</strong> none, but you have to measure it first. Track damage claims by SKU for a month before deciding anything.</p>

<h2>7. Drop a board grade — carefully</h2>
<p><strong>Typical saving: modest.</strong> Moving from double wall to single wall saves board cost and inbound freight weight.</p>
<p><strong>The trade-off:</strong> this is last on the list for a reason. It is the lever most likely to increase damage, and damage costs more than board. Only consider it if you have measured your stacking requirement and know you are over-specified.</p>

<h2>Summary</h2>
${specTable('The levers, ranked', ['Lever', 'Where the saving comes from', 'Risk'], [
  ['Right-size the box', 'Carrier dimensional weight', 'Low — needs a better fit'],
  ['Fewer box sizes', 'Volume pricing and simpler packing', 'Low — model the fit trade-off'],
  ['Unprinted transit boxes', 'Print and setup cost', 'Brand impact if unboxing matters'],
  ['Annual volume, staged delivery', 'Volume price breaks', 'Commitment if specs may change'],
  ['Self-seal closures', 'Packing labour and tape', 'Slightly higher unit price'],
  ['Reduce damage rate', 'Replacements and support cost', 'None — but measure first'],
  ['Lower board grade', 'Board and inbound freight', 'High — damage costs more'],
])}
<p>If you want this applied to your own numbers, send us a month of order dimensions and your carrier rate card. <a href="/product-category/wholesale-cardboard-boxes/">Volume pricing</a> is quoted against the ladder that comes out of it rather than against a standard list.</p>`,
  shop: [
    { path: '/product-category/wholesale-cardboard-boxes/', label: 'Wholesale and bulk pricing' },
    { path: '/product/custom-size-cardboard-boxes/', label: 'Custom size boxes' },
    { path: '/product/cardboard-mailing-boxes/', label: 'Self-seal mailers' },
  ],
  next: [
    { path: '/resources/how-to-choose-a-shipping-box/', label: 'Choosing a shipping box' },
    { path: '/resources/cardboard-box-sizes-guide/', label: 'Building a size ladder' },
    { path: '/resources/ecommerce-packaging-guide/', label: 'Ecommerce packaging guide' },
  ],
};
