import type { Resource } from './types';
import { boxDimensions, fluteProfiles, wallConstructions, boxStyles } from '../../../lib/seo/diagrams';
import { specTable } from '../../../lib/seo/blocks';

/** Articles about specifying a box: dimensions, measurement, structure. */

export const boxSizes: Resource = {
  slug: 'cardboard-box-sizes-guide',
  title: 'Cardboard Box Sizes Guide | Standard Dimensions & Bands',
  h1: 'Cardboard Box Sizes: A Practical Guide',
  description: 'Standard cardboard box sizes by band, what fits in each, and how to build a size ladder that covers your range without carrying seven SKUs.',
  summary: 'The size bands most operations actually use, what fits in each, and how to reduce a sprawling box range down to three or four.',
  topic: 'Specification',
  updated: '2026-08-27',
  readingMinutes: 7,
  body: `
<p class="scb-lede">There is no legal standard for cardboard box sizes. What exists instead is a set of conventions that carriers, pallets and warehouse racking have pushed the industry towards, and a much smaller set of sizes that any given business actually needs.</p>
<p>This guide covers both: the bands you will see quoted, and the more useful question of how few sizes you can get away with.</p>

<h2>The bands, and what each one holds</h2>
<p>Dimensions here are internal, quoted as length × width × height with the opening facing up. Internal is the number that matters, because it is the space your product has.</p>
${specTable('Common internal size bands', ['Band', 'Typical internal size', 'Holds', 'Usual board'], [
  ['Tiny', 'Under 4 × 4 × 2 in', 'Rings, USB drives, sachets, single cosmetics', 'Folding carton or rigid'],
  ['Small', '4 × 4 × 4 to 8 × 6 × 4 in', 'Mugs, candles, phone accessories, books', '32 ECT single wall'],
  ['Medium', '10 × 8 × 6 to 14 × 12 × 10 in', 'Apparel, multi-item orders, footwear', '32 ECT single wall'],
  ['Large', '16 × 12 × 12 to 24 × 18 × 18 in', 'Bulk orders, homeware, relocation', '48 ECT double wall'],
  ['Extra large', 'Above 24 × 18 × 18 in', 'Furniture parts, appliances, bulk stock', 'Double or triple wall'],
])}

<h2>Why "one size bigger" costs more than you think</h2>
<p>Most carriers bill on dimensional weight: length × width × height divided by a fixed divisor, compared against actual weight, with the larger figure charged. A 12 × 10 × 8 in box has almost exactly twice the volume of a 10 × 8 × 6 in box, so a light product in the larger box is billed as roughly twice the weight.</p>
<p>That is the entire argument for right-sizing. It is not about saving board — board is a small part of the landed cost. It is about not paying freight on air.</p>

<h2>Building a size ladder</h2>
<p>The instinct when a product does not quite fit is to add another box size. Do that four or five times and you are holding seven SKUs, each ordered in quantities too small to earn a volume price, in a stockroom that keeps running out of the one you need.</p>
<p>A better approach is to work backwards from your order profile:</p>
<ol>
  <li><strong>Measure a week of real orders.</strong> Not the catalogue — the orders. Most ranges cluster far more tightly than the product list suggests.</li>
  <li><strong>Sort by the largest single dimension.</strong> That is what forces a box size, not volume.</li>
  <li><strong>Draw three or four cut lines.</strong> Aim for each box to cover roughly a quarter of orders. Anything covering under 5% is a candidate for merging upwards.</li>
  <li><strong>Check the top of each band.</strong> The largest order in a band determines the box, so one outlier product can force a whole size up. Those are usually worth their own box or a different structure.</li>
  <li><strong>Price the ladder as one order.</strong> Three sizes bought together almost always beat three sizes bought separately across a year.</li>
</ol>
<div class="scb-callout"><p><strong>A useful test:</strong> if a size accounts for less than one in twenty shipments, it is probably costing more in fragmented purchasing and stockroom space than it saves in freight.</p></div>

<h2>Sizes that come up constantly</h2>
<p>Some dimensions are requested far more than others, usually because a common product drives them.</p>
<ul>
  <li><strong>4 × 4 × 4 in</strong> — the single most requested fixed size we make, used across candles, jars, small electronics and samples. See <a href="/product/4x4-cardboard-boxes/">4x4 cardboard boxes</a>.</li>
  <li><strong>10 × 8 × 6 in</strong> — the workhorse ecommerce size, sitting comfortably inside most carriers' cheaper dimensional bands.</li>
  <li><strong>12 × 9 × 4 in</strong> — apparel and flat goods, where a shallow box beats a cube.</li>
  <li><strong>18 × 18 × 18 in</strong> — the standard moving and bulk cube, almost always specified in double wall.</li>
</ul>

<h2>When a standard size is the wrong answer</h2>
<p>Every box we make is cut from a dieline built for your dimensions, so a "non-standard" size costs the same to produce as a standard one at the same board grade. If your product sits awkwardly inside a stock size, a <a href="/product/custom-size-cardboard-boxes/">custom size box</a> is usually cheaper across a year than the freight premium on the box that nearly fits.</p>`,
  faqs: [
    { q: 'Are box sizes quoted internally or externally?', a: 'Internally, throughout our catalogue. External dimensions are larger by roughly twice the board thickness on each axis — a difference that matters when you are checking pallet or shelf fit.' },
    { q: 'How much clearance should I leave around a product?', a: 'For a retail box that will not be shipped alone, 1–2 mm per axis. For a shipping box relying on void fill, 1–2 inches per side. For a shipping box with a fitted insert, keep it tight — the insert does the work.' },
    { q: 'What is the most common ecommerce box size?', a: '10 × 8 × 6 inches in 32 ECT single wall. It suits a wide range of apparel and homeware orders and sits inside most carriers\' cheaper dimensional weight bands.' },
    { q: 'Does a custom size cost more than a standard one?', a: 'No. Every box is cut to a dieline made for the order, so the size itself carries no premium. Board grade, print and quantity drive the price.' },
    { q: 'How many box sizes should a small ecommerce brand carry?', a: 'Three or four covers the majority of ranges. Beyond that, the fragmented purchasing and stockroom space usually cost more than the freight saving from a closer fit.' },
    { q: 'Can one box size work for several products?', a: 'Often, if you vary the insert rather than the box. One outer with two or three insert variants avoids holding several complete box SKUs and still keeps each product held tightly.' },
  ],
  faqHeading: 'Sizing questions',
  shop: [
    { path: '/product/small-cardboard-boxes/', label: 'Small cardboard boxes' },
    { path: '/product/medium-cardboard-boxes/', label: 'Medium cardboard boxes' },
    { path: '/product/large-cardboard-boxes/', label: 'Large cardboard boxes' },
    { path: '/product/4x4-cardboard-boxes/', label: '4x4 cardboard boxes' },
    { path: '/product/custom-size-cardboard-boxes/', label: 'Custom size boxes' },
  ],
  next: [
    { path: '/resources/how-to-measure-a-cardboard-box/', label: 'How to measure a cardboard box' },
    { path: '/resources/how-to-choose-a-shipping-box/', label: 'How to choose a shipping box' },
    { path: '/resources/reduce-packaging-and-shipping-costs/', label: 'Reducing packaging and shipping costs' },
  ],
};

export const howToMeasure: Resource = {
  slug: 'how-to-measure-a-cardboard-box',
  title: 'How to Measure a Cardboard Box | Internal vs External',
  h1: 'How to Measure a Cardboard Box',
  description: 'The order dimensions are written in, where internal and external measurements differ, and the four mistakes that produce a box that does not fit.',
  summary: 'A short procedure for measuring a box correctly, plus the four mistakes that most often produce a dieline that does not fit.',
  topic: 'Specification',
  updated: '2026-08-27',
  readingMinutes: 5,
  body: `
<p class="scb-lede">Getting this wrong is the most common cause of a reprint. The measurement itself takes thirty seconds; the convention behind it is what people get wrong.</p>

<h2>The convention</h2>
<p>Box dimensions are always written <strong>length × width × height</strong>, and always measured with the opening facing up.</p>
<ul>
  <li><strong>Length</strong> is the longer of the two edges of the opening.</li>
  <li><strong>Width</strong> is the shorter edge of the opening.</li>
  <li><strong>Height</strong> is the distance from the inside of the base to the top of the opening — not including the flaps.</li>
</ul>
${boxDimensions()}

<h2>The procedure</h2>
<ol>
  <li><strong>Open the box and stand it upright.</strong> Flaps up and out of the way. Measuring a closed box gives you external dimensions and a habit that will bite you later.</li>
  <li><strong>Measure the opening, inside edge to inside edge.</strong> Longer edge first — that is your length. Shorter edge second — that is your width.</li>
  <li><strong>Measure from the inside of the base to the top of the side wall.</strong> That is the height. Stop at the crease where the flaps begin.</li>
  <li><strong>Round to the nearest sensible unit.</strong> Whole millimetres or eighths of an inch. Chasing a tenth of a millimetre on corrugated board is false precision; the board itself varies more than that.</li>
  <li><strong>Write the units down.</strong> A dieline built in inches from a measurement taken in centimetres is the single most expensive mistake on this list.</li>
</ol>

<h2>Measuring a box that is not rectangular</h2>
<p>Round and cylindrical boxes are quoted as <strong>diameter × height</strong>, measured across the widest point of the opening. Hexagonal boxes are quoted across the flats, not point to point, unless you say otherwise — the difference is around 15%, which is enough to matter. If you are working with either, say which measurement you took and we will confirm before cutting a dieline.</p>

<h2>Four mistakes worth checking for</h2>
<ol>
  <li><strong>Measuring the outside.</strong> External dimensions are larger by roughly twice the board thickness on every axis. On double wall that is close to a quarter of an inch per side, which is often enough that the product no longer fits.</li>
  <li><strong>Including the flaps in the height.</strong> Flaps fold down; they are not internal space. A box measured this way arrives noticeably too short.</li>
  <li><strong>Measuring an empty box that has already been used.</strong> Corrugated relaxes after it has been packed once. If precision matters, measure a flat unassembled blank or a new box.</li>
  <li><strong>Measuring the product, not the packed product.</strong> Tissue, a label, a bubble sleeve and an insert all take space. Measure what actually goes in.</li>
</ol>

<div class="scb-callout"><p><strong>If you would rather not measure at all:</strong> post us the product or the existing box. We will take the dimensions, build the dieline and send a structural sample back before anything is produced.</p></div>`,
  faqs: [
    { q: 'Should I give you internal or external dimensions?', a: 'Internal, unless the box has to fit inside something specific — a shelf, a shipper carton, a mailbox slot. In that case give us the external constraint and we will work back to the internal size.' },
    { q: 'How do I measure a round box?', a: 'Diameter across the widest point of the opening, then height from the inside of the base to the rim. Quote it as diameter × height so there is no ambiguity about which figure is which.' },
    { q: 'Does board thickness really change the fit?', a: 'On single wall the difference between internal and external is about 3 mm per axis; on double wall it is closer to 7 mm. For a tightly fitted product that is easily the difference between fitting and not.' },
    { q: 'What if my product is an awkward shape?', a: 'Measure the bounding box — the largest length, width and height at the widest points, including anything that protrudes. Then tell us the shape, because a fitted insert is usually a better answer than a box sized to the extremes.' },
    { q: 'Can you work from a photograph?', a: 'For a first conversation, yes, if there is a ruler or a known object in the shot. For a production dieline we need real measurements or a physical sample.' },
  ],
  faqHeading: 'Measuring questions',
  shop: [
    { path: '/product/custom-size-cardboard-boxes/', label: 'Custom size cardboard boxes' },
    { path: '/design-your-box/', label: 'Design your box' },
    { path: '/product-category/cardboard-boxes-by-size-and-shape/', label: 'Boxes by size and shape' },
  ],
  next: [
    { path: '/resources/cardboard-box-sizes-guide/', label: 'Cardboard box sizes guide' },
    { path: '/resources/cardboard-box-inserts-guide/', label: 'Specifying inserts and dividers' },
    { path: '/resources/box-styles-explained/', label: 'Box styles explained' },
  ],
};

export const fluteTypes: Resource = {
  slug: 'cardboard-flute-types',
  title: 'Cardboard Flute Types Explained | A, B, C, E and F Flute',
  h1: 'Flute Types Explained: A, B, C, E and F',
  description: 'A reference for corrugated flute profiles — height, cushioning, stacking strength, print quality and which flute suits which kind of box.',
  summary: 'A reference table for the five corrugated flute profiles, drawn at relative scale, with what each one is actually good at.',
  topic: 'Materials',
  updated: '2026-08-27',
  readingMinutes: 5,
  body: `
<p class="scb-lede">The flute is the wavy layer between the liners. Its height and pitch decide almost everything else about how a corrugated box behaves — how much it cushions, how high it stacks, how cleanly it folds and how well it prints.</p>
<p>This is a reference article rather than an argument. The short version: taller flutes cushion, finer flutes print.</p>

${fluteProfiles()}

<h2>The five profiles</h2>
${specTable('Flute profiles at a glance', ['Flute', 'Height', 'Cushioning', 'Print surface', 'Typical use'], [
  ['<strong>A</strong>', '≈ 4.8 mm', 'Best', 'Coarsest', 'Fragile goods needing maximum cushioning'],
  ['<strong>C</strong>', '≈ 4.0 mm', 'Very good', 'Acceptable', 'General shipping — the default single wall flute'],
  ['<strong>B</strong>', '≈ 3.0 mm', 'Good', 'Good', 'Retail-facing shipping boxes, canned goods, printed cartons'],
  ['<strong>E</strong>', '≈ 1.5 mm', 'Modest', 'Very good', 'Retail cartons, small ecommerce mailers'],
  ['<strong>F</strong>', '≈ 0.8 mm', 'Minimal', 'Excellent', 'Small premium cartons, cosmetics, confectionery'],
])}

<h2>Combined flutes</h2>
<p>Double wall boards pair two profiles, and the pairing is written with the outer flute first. <strong>BC</strong> is the common one — a B flute outer for a printable surface over a C flute inner for cushioning, giving 48 ECT and the stacking performance most palletised freight needs. <strong>EB</strong> pairs a very fine outer with a B inner, used where a heavy box still has to carry photographic print.</p>

<h2>How flute interacts with the other decisions</h2>
<ul>
  <li><strong>Score lines and small boxes.</strong> A tall flute will not fold cleanly on a small carton — the board cracks at the crease. Below roughly 4 inches on any dimension, E or F flute is usually necessary rather than optional.</li>
  <li><strong>Print.</strong> Solid areas of colour show flute lines through the liner. This is called washboarding, and it is worse on taller flutes. If the artwork has large flat colour areas, either drop to a finer flute or litho-laminate a printed sheet onto the board.</li>
  <li><strong>Stacking.</strong> Flute height helps, but wall count and liner grade matter more. See <a href="/resources/corrugated-box-strength-guide/">the strength guide</a> for how ECT is actually determined.</li>
  <li><strong>Board thickness in the box.</strong> A flute costs internal volume. On a small box, moving from C to E flute can recover several millimetres of internal space at the same external size.</li>
</ul>

<h2>Choosing quickly</h2>
<p>Most decisions collapse to three cases. A shipping box that will be stacked: C flute single wall, or BC double wall if it is heavy. A retail carton that has to look good: E flute. A small premium box: F flute. Anything genuinely fragile and unstacked: A flute.</p>
<p>If you are specifying a box rather than reading for interest, the practical route is to tell us the product weight, the box size and whether it stacks — <a href="/product-category/cardboard-boxes-by-material-strength/">the board strength collection</a> is organised around exactly that.</p>`,
  shop: [
    { path: '/product/corrugated-cardboard-boxes/', label: 'Corrugated cardboard boxes' },
    { path: '/product/double-wall-cardboard-boxes/', label: 'Double wall boxes' },
    { path: '/product/single-wall-cardboard-boxes/', label: 'Single wall boxes' },
  ],
  next: [
    { path: '/resources/corrugated-box-strength-guide/', label: 'ECT and Mullen explained' },
    { path: '/resources/single-wall-vs-double-wall/', label: 'Single, double and triple wall' },
    { path: '/resources/cardboard-packaging-materials/', label: 'Board and material types' },
  ],
};

export const strengthGuide: Resource = {
  slug: 'corrugated-box-strength-guide',
  title: 'Corrugated Box Strength Guide | ECT vs Mullen Explained',
  h1: 'Corrugated Box Strength: ECT, Mullen and What to Ask For',
  description: 'What Edge Crush Test and Mullen burst ratings measure, when each one predicts real-world failure, and how to pick a board grade from weight and stack height.',
  summary: 'What ECT and Mullen actually measure, when each predicts failure, and how to translate a product weight into a board grade.',
  topic: 'Materials',
  updated: '2026-08-27',
  readingMinutes: 8,
  body: `
<p class="scb-lede">Two numbers get quoted for corrugated board, and they measure different failures. Asking for the wrong one is how a box that passed its specification still arrives crushed.</p>

<h2>Edge Crush Test</h2>
<p>ECT measures how much force a one-inch strip of board withstands on its edge before it buckles, in pounds per inch. A 32 ECT board takes 32 lb per inch of edge.</p>
<p>It predicts <strong>stacking</strong> performance — what happens when boxes are put on top of each other on a pallet, in a warehouse rack, or in the back of a truck. That is the failure mode that dominates modern distribution, which is why ECT has become the default rating.</p>

<h2>Mullen burst test</h2>
<p>Mullen measures the pressure needed to rupture the board, in pounds per square inch. A 200 lb test board resists 200 psi before bursting.</p>
<p>It predicts <strong>puncture and rough handling</strong> — a corner impact, a dropped box, a forklift tine. It says almost nothing useful about stacking, which is why a box specified purely on Mullen can still collapse in a stack.</p>

<h2>Which one to ask for</h2>
${specTable('Choosing between the two ratings', ['Your situation', 'Ask for', 'Why'], [
  ['Palletised freight, warehouse racking', 'ECT', 'Stacking load is the dominant failure'],
  ['Parcel network, boxes handled individually', 'Mullen, or both', 'Impact and puncture dominate'],
  ['Heavy dense product in a small box', 'Mullen', 'Wall puncture is the likely failure'],
  ['Light bulky product stacked high', 'ECT', 'The box carries the stack, not the product'],
  ['Export freight, long journey, humidity', 'ECT, one grade up', 'Board loses strength as it absorbs moisture'],
])}
<div class="scb-callout"><p><strong>If you only remember one thing:</strong> ECT for stacking, Mullen for impact. If your boxes both stack and get thrown around, specify both and let the board grade satisfy the harder one.</p></div>

<h2>From product weight to board grade</h2>
${wallConstructions()}
${specTable('Board grade by gross weight', ['Gross weight', 'Board', 'ECT', 'Notes'], [
  ['Up to 20 lb', 'Single wall, B or C flute', '32', 'The ecommerce default'],
  ['20–30 lb', 'Single wall, C flute', '32–40', 'Fine unstacked; go double if palletised'],
  ['30–65 lb', 'Double wall, BC flute', '48', 'The palletised freight standard'],
  ['65–120 lb', 'Triple wall', '90+', 'Machinery, industrial parts'],
  ['120–300 lb', 'Triple wall, reinforced', '90+', 'Export crates and pallet boxes'],
])}

<h2>What quietly reduces the strength you paid for</h2>
<ul>
  <li><strong>Humidity.</strong> Corrugated loses a substantial share of its stacking strength in sustained high humidity. Cold-chain and tropical shipments are routinely specified a grade up.</li>
  <li><strong>Time under load.</strong> Board creeps. A stack that holds for a day can fail after three weeks in a warehouse at the same load.</li>
  <li><strong>Box proportions.</strong> A tall narrow box loses stacking strength much faster than a cube of the same board. Geometry is not a small effect here.</li>
  <li><strong>Die cuts.</strong> Every hand hole, window and vent removes load-bearing board. A ventilated box needs a higher grade than a plain one to reach the same stacking figure.</li>
  <li><strong>A loose fit.</strong> In a well-packed box the contents share the load. In an oversized one the walls carry everything. This is often the real fix when a box "isn't strong enough".</li>
</ul>

<h2>Getting the certificate</h2>
<p>Mill certificates stating the ECT or Mullen rating can travel with a production run. Ask at quote stage rather than after delivery — the certificate is issued against the specific board batch, so it has to be arranged before production rather than reconstructed afterwards.</p>`,
  faqs: [
    { q: 'What does 32 ECT mean in practice?', a: 'A one-inch strip of that board withstands 32 lb of force on its edge before buckling. In real terms it is the standard single wall grade, comfortable to about 20 lb of contents in a parcel network.' },
    { q: 'Is 200 lb test the same as 32 ECT?', a: 'They are roughly equivalent grades of board and are often quoted interchangeably, but they measure different things. 200 lb test is a Mullen burst rating; 32 ECT is a stacking rating. A board can satisfy one and be marginal on the other.' },
    { q: 'Which rating do carriers care about?', a: 'Most carrier packaging guidelines are written around Mullen burst ratings for parcel traffic, because individual handling is the risk they see. Pallet and freight operations work in ECT.' },
    { q: 'Does double wall always mean 48 ECT?', a: 'No. 48 ECT is the common BC-flute grade, but double wall boards are made across a range. Ask for the ECT figure rather than the wall count if the number matters.' },
    { q: 'How much strength does humidity cost?', a: 'Enough to plan around — sustained high humidity can remove a substantial fraction of stacking strength. For cold chain, tropical export or long sea freight, specify a grade up or ask for a moisture-resistant coating.' },
    { q: 'Do vents and hand holes weaken a box?', a: 'Yes, measurably. Every die cut removes load-bearing board. A ventilated produce box typically needs a higher board grade than a plain box of the same size to reach the same stacking performance.' },
    { q: 'Can I get a test certificate with my order?', a: 'Yes. Mill certificates for the board batch can be supplied with the shipment. Request it at quote stage so it is arranged against the production run.' },
  ],
  faqHeading: 'Board strength questions',
  shop: [
    { path: '/product/double-wall-cardboard-boxes/', label: 'Double wall boxes' },
    { path: '/product/triple-wall-cardboard-boxes/', label: 'Triple wall boxes' },
    { path: '/product/cardboard-corrugated-pallet-boxes/', label: 'Corrugated pallet boxes' },
    { path: '/product-category/cardboard-boxes-by-material-strength/', label: 'All board strengths' },
  ],
  next: [
    { path: '/resources/single-wall-vs-double-wall/', label: 'Single vs double vs triple wall' },
    { path: '/resources/cardboard-flute-types/', label: 'Flute types explained' },
    { path: '/resources/boxes-for-heavy-products/', label: 'Boxes for heavy products' },
  ],
};

export const styles: Resource = {
  slug: 'box-styles-explained',
  title: 'Box Styles Explained | RSC, Mailer, Tuck End & Rigid',
  h1: 'Box Styles Explained',
  description: 'An illustrated glossary of cardboard box structures — regular slotted cartons, mailers, tuck-end cartons, rigid boxes, gable boxes and sleeves.',
  summary: 'An illustrated glossary of the structures behind the product names, and what each one costs to make, ship and pack.',
  topic: 'Specification',
  updated: '2026-08-27',
  readingMinutes: 6,
  body: `
<p class="scb-lede">Product names describe what a box is for. Style names describe how it is built. Knowing the second set makes it much easier to ask for the right thing, because a "gift box" could be four completely different structures at four different prices.</p>

${boxStyles()}

<h2>Regular slotted carton (RSC)</h2>
<p>The default shipping box. Cut from a single blank, with four flaps top and bottom that meet in the middle and are taped. Cheapest per unit, strongest for its weight, ships flat. It needs tape, and it looks like what it is — a transit box.</p>
<p>Used for: <a href="/product/custom-cardboard-shipping-boxes/">custom shipping boxes</a>, <a href="/product/corrugated-cardboard-boxes/">corrugated boxes</a>, most bulk and pallet formats.</p>

<h2>Mailer (roll-end tuck-top)</h2>
<p>A hinged lid that folds over and tucks into the front wall. No tape, packs in one motion, and the inside face is naturally printable — which is why almost every subscription box is a mailer. It costs more per unit than an RSC and is less efficient with board.</p>
<p>Used for: <a href="/product/cardboard-mailing-boxes/">mailing boxes</a>, ecommerce and subscription packaging.</p>

<h2>Tuck-end carton</h2>
<p>A folding carton, usually in thin board rather than corrugated, with flaps that tuck at both ends. Straight tuck-end has both flaps folding the same way; reverse tuck-end has them opposing, which uses less board. This is the standard retail carton for cosmetics, food and pharmaceuticals.</p>
<p>Used for: <a href="/product/cardboard-cosmetic-packaging/">cosmetic cartons</a>, <a href="/product/cardboard-supplement-boxes/">supplement boxes</a>, most printed retail packaging.</p>

<h2>Crash-lock base</h2>
<p>A tuck-end carton whose base is pre-glued so it locks flat when the box is opened out. The packing time saving is significant at volume — no assembling the base, no tape. It costs slightly more per unit and cannot be reflattened once erected.</p>

<h2>Rigid box (set-up box)</h2>
<p>Not folded at all. A chipboard frame is cut, assembled and wrapped in printed paper. This is what "premium packaging" usually means in the hand — it is heavy, it holds its shape permanently, and the lid releases with a soft resistance folding cartons cannot reproduce. It costs several times more per unit and ships assembled rather than flat.</p>
<p>Used for: <a href="/product/cardboard-rigid-lid-base-boxes/">lid and base boxes</a>, <a href="/product/cardboard-rigid-drawer-boxes/">drawer boxes</a>, <a href="/product/cardboard-luxury-magnet-boxes/">magnetic closure boxes</a>.</p>

<h2>Gable box</h2>
<p>A carton whose top folds into a peaked handle. Recognisable, quick to close, and it carries by hand without a separate handle die cut. Structurally it is a folding carton, so it is not for heavy contents. See <a href="/product/cardboard-gable-boxes/">gable boxes</a>.</p>

<h2>Sleeve</h2>
<p>Not a box — a printed band that slides over a plain tray or box. Its value is versioning: one structural item plus several printed sleeves runs a whole range without retooling. See <a href="/product/cardboard-sleeve-packaging/">sleeve packaging</a>.</p>

<h2>Two-piece tray and lid</h2>
<p>A base tray and a separate lift-off lid, in corrugated or rigid board. Reopens indefinitely, which is why it dominates <a href="/product/cardboard-shoe-boxes/">shoe boxes</a> and <a href="/product/cardboard-storage-boxes/">storage boxes</a>. It uses more board than an RSC of the same internal size.</p>

<h2>Choosing between them</h2>
${specTable('Structures compared', ['Style', 'Ships flat', 'Needs tape', 'Relative cost', 'Reopens'], [
  ['Regular slotted carton', 'Yes', 'Yes', 'Lowest', 'Once'],
  ['Mailer', 'Yes', 'No', 'Low–medium', 'A few times'],
  ['Tuck-end carton', 'Yes', 'No', 'Low', 'A few times'],
  ['Crash-lock base', 'Yes', 'No', 'Medium', 'A few times'],
  ['Two-piece tray and lid', 'Yes', 'No', 'Medium', 'Indefinitely'],
  ['Rigid box', 'No', 'No', 'Highest', 'Indefinitely'],
])}`,
  shop: [
    { path: '/product-category/cardboard-boxes-for-specific-uses/', label: 'Boxes for specific uses' },
    { path: '/product/cardboard-mailing-boxes/', label: 'Mailing boxes' },
    { path: '/product/cardboard-rigid-lid-base-boxes/', label: 'Rigid lid and base boxes' },
    { path: '/design-your-box/', label: 'Design your box' },
  ],
  next: [
    { path: '/resources/cardboard-boxes-with-lids-guide/', label: 'Lid and closure styles' },
    { path: '/resources/how-to-measure-a-cardboard-box/', label: 'How to measure a box' },
    { path: '/resources/custom-box-printing-methods/', label: 'Printing methods compared' },
  ],
};
