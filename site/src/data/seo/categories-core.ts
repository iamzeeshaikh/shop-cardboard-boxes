import type { CategoryContent } from './types';
import { specTable, linkRow, linkCards } from '../../lib/seo/blocks';

const HOME = { name: 'Home', path: '/' };
const SHOP = { name: 'All cardboard boxes', path: '/products/' };

/**
 * Editorial content for the three category archives that carry the most search
 * demand. Each one is written to its own outline: the strength collection opens on a
 * board-selection decision, the size collection opens on a size ladder, and the
 * functionality collection opens on how fifty products are grouped. They deliberately
 * do not share a section skeleton.
 */

export const functionality: CategoryContent = {
  path: '/product-category/cardboard-boxes-by-functionality/',
  title: 'Cardboard Boxes by Function | 50 Box Types, Wholesale',
  description: 'Fifty cardboard box styles grouped by the job they do — electronics, health, stationery, decor and printed retail packaging. Custom sizes, wholesale pricing.',
  crumbs: [HOME, SHOP, { name: 'Boxes by functionality', path: '/product-category/cardboard-boxes-by-functionality/' }],
  intro: `<p class="scb-lede">This is the widest collection on the site: fifty box styles grouped by <strong>what the box has to do</strong> rather than what it is made from. If you already know the product going inside — a router, a bottle of serum, a rolled poster, a stack of business cards — start here and work outwards.</p>
<p>Every style below is made to order. Board grade, size, colour and print are chosen per job, so the same base structure can arrive as an unprinted white mailer or as a fully branded retail box. Pricing starts at $0.30 per piece and falls with volume.</p>`,
  quote: {
    heading: 'Not sure which style fits?',
    note: 'Describe the product and we will suggest two or three structures from this collection, with pricing for each.',
    boxType: 'Cardboard boxes by functionality',
    buttonLabel: 'Send my brief',
  },
  sections: `
<section class="scb-section">
  <h2>How the fifty styles are grouped</h2>
  <p>The collection covers six clusters. Most enquiries land in one of them within a sentence or two, which is usually the fastest route to a sensible quote.</p>
  ${linkCards([
    { path: '/product/cardboard-phone-accessory-boxes/', title: 'Electronics and devices', blurb: 'Phone accessories, earbuds, speakers, power banks, routers, smartwatches, camera lenses and VR headsets — mostly small rigid or tuck-end boxes with a foam or board insert.' },
    { path: '/product/cardboard-supplement-boxes/', title: 'Health and pharma', blurb: 'Supplements, vitamins, pill packs, syrup cartons, first aid kits, PPE and medical devices, where a printed panel has to carry dosage and batch information.' },
    { path: '/product/cardboard-notebook-boxes/', title: 'Stationery and print', blurb: 'Notebooks, pens, certificates, book sleeves, magazine files, document mailers and poster tubes — flat, rigid formats that protect edges and corners.' },
    { path: '/product/cardboard-home-decor-packaging/', title: 'Home, craft and decor', blurb: 'Decor pieces, craft kits, organiser boxes and photo frame packaging, where the box is often part of the display as well as the transit protection.' },
    { path: '/product/colored-cardboard-boxes/', title: 'Colour and finish led', blurb: 'Pink, white, black, brown and full-colour boxes chosen for how they look on a shelf or in an unboxing video rather than for a specific product.' },
    { path: '/product/branded-cardboard-boxes/', title: 'Branded and blank', blurb: 'Branded boxes printed with your artwork, and deliberately blank stock for resellers who apply their own labels after receipt.' },
  ])}
</section>

<section class="scb-section scb-tinted">
  <h2>Printed or plain — the decision that changes the price most</h2>
  <p>Across this collection the single biggest cost lever is not the board or the size. It is whether the box is printed, and how. A plain kraft or white box at 1,000 units and the same box with a two-colour logo are close in price; the same box in full-bleed CMYK with a spot gloss finish is a different quote entirely.</p>
  <p>If the box is going straight into a retail environment, printing usually pays for itself. If it is a transit outer that a customer opens and recycles, a <a href="/product/blank-cardboard-boxes/">plain unprinted box</a> with a printed label is nearly always the better economics.</p>
  ${specTable('What each print method suits', ['Method', 'Best for', 'Practical minimum', 'Look'], [
    ['<strong>Unprinted</strong>', 'Transit outers, resellers applying their own labels', '100', 'Natural kraft or plain white board'],
    ['<strong>Flexo, 1–2 colours</strong>', 'Logo and address on corrugated shipping boxes', '500', 'Solid line work, no photographic detail'],
    ['<strong>Offset litho, CMYK</strong>', 'Retail and gift boxes with photography', '500', 'Full colour, fine gradients, sharp type'],
    ['<strong>Digital</strong>', 'Short runs, seasonal artwork, versioned packs', '100', 'Full colour, no plate cost, slightly higher unit price'],
    ['<strong>Foil or spot UV</strong>', 'Premium finishes on rigid and gift boxes', '500', 'Metallic or gloss detail over a matte base'],
  ])}
  <p>Our design team sets artwork up free of charge against the dieline for whichever structure you choose, so switching print method later does not mean starting the artwork again. The <a href="/design-your-box/">box configurator walks through these options</a> step by step if you would rather specify it yourself.</p>
</section>

<section class="scb-section">
  <h2>Where this collection overlaps with the rest of the site</h2>
  <p>Function is only one way to slice a catalogue. If you are working from a dimension, a board grade or a shipping requirement instead, these collections will get you there faster.</p>
  ${linkRow([
    { path: '/product-category/cardboard-boxes-by-size-and-shape/', label: 'Boxes by size and shape' },
    { path: '/product-category/cardboard-boxes-by-material-strength/', label: 'Boxes by material strength' },
    { path: '/product-category/cardboard-shipping-boxes/', label: 'Shipping and mailing boxes' },
    { path: '/product-category/cosmetic-and-gift-cardboard-boxes/', label: 'Cosmetic and gift boxes' },
    { path: '/product-category/retail-and-display-packaging/', label: 'Retail and display packaging' },
  ])}
  <h3>Guides that answer the questions this collection raises</h3>
  <ul>
    <li><a href="/resources/custom-box-printing-methods/">A comparison of custom box printing methods</a>, including where each one stops being economic.</li>
    <li><a href="/resources/cardboard-box-inserts-guide/">How inserts and dividers are specified</a> — relevant to almost every electronics and health box here.</li>
    <li><a href="/resources/box-styles-explained/">The structural box styles behind these names</a>, from tuck-end cartons to rigid two-piece boxes.</li>
  </ul>
</section>`,
  faqHeading: 'Questions about ordering from this collection',
  ctaHeading: 'Tell us what goes in the box',
  ctaBody: 'Fifty structures is a lot to choose between. Describe the product and we will shortlist two or three, with pricing for each.',
  faqIntro: 'Answers that apply across the fifty styles here. Individual product pages carry the detail specific to that box.',
  faqs: [
    { q: 'Can I mix several box styles from this collection in one order?', a: 'Yes. Mixed orders are common — a brand might order printed retail boxes, plain transit outers and a small run of PR boxes together. Each style is quoted on its own quantity, and they ship together.' },
    { q: 'What is the minimum order for a printed box here?', a: 'Digitally printed boxes start at 100 units. Offset and flexo printing carry a plate setup, so the practical minimum is around 500 units before the per-piece price becomes competitive.' },
    { q: 'Do you supply the box unassembled?', a: 'Almost always. Corrugated and folding cartons ship flat and are assembled by hand or by a case erector. Rigid boxes ship assembled because their construction cannot be folded flat.' },
    { q: 'Can you match a box we already buy elsewhere?', a: 'Send the existing box or its dimensions and board grade and we will quote a like-for-like replacement. If you can post a sample, we can also match the board calliper and print colours more precisely than a photograph allows.' },
    { q: 'Is there a charge for the dieline and artwork setup?', a: 'No. Dieline preparation and artwork setup are included, including a print-ready proof before production starts. You only pay for the boxes.' },
    { q: 'How do these boxes arrive — how many to a carton?', a: 'Flat-packed boxes are bundled and shipped on pallets or in outer cartons depending on volume. We confirm the pack quantity and pallet count on the quote so you can plan receiving space.' },
    { q: 'Can I get a sample before committing to a full run?', a: 'Yes. A plain structural sample shows the fit and the board feel. A printed sample is also possible on digital presses, which is worth it if colour accuracy matters to the launch.' },
    { q: 'Do any of these boxes work for food contact?', a: 'Some do, but food contact needs a food-grade board and coating specified explicitly. The dedicated <a href="/product-category/food-related-cardboard-boxes/">food-related cardboard boxes</a> collection is the right starting point for anything edible.' },
    { q: 'What lead time should I plan for?', a: 'Standard production and delivery runs 8–10 business days from artwork approval. Rigid boxes and specialist finishes such as foil add a few days. Tell us your launch date and we will confirm before you commit.' },
  ],
};

export const materialStrength: CategoryContent = {
  path: '/product-category/cardboard-boxes-by-material-strength/',
  title: 'Cardboard Boxes by Strength | Single, Double & Triple Wall',
  description: 'Choose board strength by weight and journey: single wall for light goods, double wall for heavy or stacked loads, triple wall for industrial freight. Wholesale pricing.',
  crumbs: [HOME, SHOP, { name: 'Boxes by material strength', path: '/product-category/cardboard-boxes-by-material-strength/' }],
  intro: `<p class="scb-lede">Board strength is a load question, not a taste question. Pick it from three things: the weight going in the box, how high the boxes will be stacked, and how far they travel.</p>
<p>The quick version — under about 15 lb and travelling on a parcel network, single wall is enough. Between roughly 15 and 60 lb, or anything palletised, use double wall. Above that, or for machinery and export freight, triple wall. Everything below is available in those grades, with the corrugation profile chosen to match.</p>`,
  quote: {
    heading: 'Tell us the weight, we will spec the board',
    note: 'Give us the product weight, the box size and whether they stack. We will come back with a board grade and a price rather than a list of options.',
    boxType: 'Cardboard boxes by material strength',
    buttonLabel: 'Get a board recommendation',
  },
  sections: `
<section class="scb-section scb-tinted">
  <h2>Matching board grade to the load</h2>
  <p>Edge Crush Test (ECT) measures how much stacking force the board takes before the walls buckle. It is the number that matters for palletised freight, and it is what we quote against. The figures below are the grades we run most often.</p>
  ${specTable('Board grades we stock and what they carry', ['Board', 'Typical ECT', 'Comfortable gross weight', 'Where it belongs'], [
    ['Single wall, B flute', '32 ECT', 'Up to 20 lb', 'Ecommerce parcels, retail cartons, light consumer goods'],
    ['Single wall, C flute', '32–40 ECT', 'Up to 30 lb', 'Bulkier but light items where cushioning matters more than crush'],
    ['Double wall, BC flute', '48 ECT', '30–65 lb', 'Palletised freight, stacked storage, heavier ecommerce'],
    ['Double wall, EB flute', '48 ECT', '20–50 lb', 'Heavy goods that still need a printable smooth outer surface'],
    ['Triple wall', '90+ ECT', '65–300 lb', 'Machinery, industrial parts, export crates, pallet boxes'],
  ])}
  <p>If you are unsure where a product sits, <a href="/resources/corrugated-box-strength-guide/">our guide to ECT and Mullen ratings</a> explains how the two tests differ and which one your carrier actually cares about.</p>
</section>

<section class="scb-section">
  <h2>The three wall constructions, side by side</h2>
  <h3>Single wall</h3>
  <p>One fluted layer between two liners. It is the default for parcels because it is light, cheap to ship and folds cleanly. Most of what you receive as an online shopper is 32 ECT single wall. Choose <a href="/product/single-wall-cardboard-boxes/">single wall cardboard boxes</a> when the contents are under about 20 lb and the box will not be stacked more than a few high.</p>
  <h3>Double wall</h3>
  <p>Two fluted layers and three liners. Roughly double the stacking strength for about 40% more board cost, which is why it dominates palletised distribution. It is also the right answer for anything with a hard corner that could punch through a single wall in transit — <a href="/product/double-wall-cardboard-boxes/">double wall cardboard boxes</a> handle that far better.</p>
  <h3>Triple wall</h3>
  <p>Three fluted layers. At this point the board behaves more like a lightweight crate than a carton, and it is priced accordingly. It earns its place on machinery, engine parts and export shipments where a damaged pallet costs far more than the packaging. See <a href="/product/triple-wall-cardboard-boxes/">triple wall cardboard boxes</a> for the range.</p>
  <div class="scb-callout"><p><strong>A common mistake:</strong> upgrading the board when the real problem is the fit. A product rattling inside an oversized box fails in transit regardless of wall count. Fixing the internal dimensions or adding a <a href="/product/cardboard-partitioned-insert-boxes/">partitioned insert</a> is usually cheaper than a board upgrade.</p></div>
</section>

<section class="scb-section">
  <h2>Beyond strength — the specialist boards in this collection</h2>
  <p>Not everything here is chosen for load. Several grades in this collection exist for temperature, chemical resistance or recycled content.</p>
  <ul>
    <li><strong>Insulated and thermal.</strong> <a href="/product/cardboard-insulated-cold-boxes/">Insulated cold boxes</a> pair corrugated board with a liner that holds temperature through a two to three day shipping window, which is what most perishable subscription boxes need.</li>
    <li><strong>Chemical safe.</strong> <a href="/product/cardboard-chemical-safe-cardboard-packaging/">Chemical-safe packaging</a> uses coatings that resist absorption, for cleaning products and industrial liquids in secondary containment.</li>
    <li><strong>Recycled content.</strong> <a href="/product/cardboard-recycled-kraft-boxes/">Recycled kraft boxes</a> and <a href="/product/cardboard-eco-friendly-compostable-boxes/">compostable boxes</a> trade a little brightness and print sharpness for a much better recycled-content figure.</li>
  </ul>
</section>

<section class="scb-section scb-tinted">
  <h2>Where to go next</h2>
  ${linkRow([
    { path: '/product-category/cardboard-shipping-boxes/', label: 'Shipping and mailing boxes' },
    { path: '/product-category/wholesale-cardboard-boxes/', label: 'Wholesale and bulk ordering' },
    { path: '/product-category/cardboard-boxes-by-size-and-shape/', label: 'Boxes by size and shape' },
    { path: '/resources/single-wall-vs-double-wall/', label: 'Single vs double vs triple wall' },
    { path: '/resources/boxes-for-heavy-products/', label: 'Boxes for heavy products' },
  ])}
</section>`,
  faqHeading: 'Board strength questions we are asked most',
  ctaHeading: 'Send us a weight, not a board grade',
  ctaBody: 'Give us the product weight, the box size and whether they stack. We will specify the board and price it.',
  faqs: [
    { q: 'What does 32 ECT actually mean?', a: 'Edge Crush Test measures the force a one-inch strip of board withstands on its edge before it buckles, in pounds per inch. A 32 ECT board takes 32 lb per inch of edge. It predicts stacking performance, which is why carriers and pallet operations quote it.' },
    { q: 'Is ECT or Mullen the right rating to ask for?', a: 'ECT predicts stacking strength and is the modern default for palletised distribution. Mullen measures burst resistance and matters more for rough handling and puncture risk. If you are shipping on pallets, ask for ECT; if boxes are handled individually and thrown around, Mullen is the more useful number.' },
    { q: 'How much weight can a double wall box actually hold?', a: 'A 48 ECT double wall box comfortably carries 30–65 lb gross. The ceiling depends on box dimensions as much as board: a tall narrow box loses stacking strength faster than a cube of the same board.' },
    { q: 'Does humidity change how much a box can carry?', a: 'Considerably. Corrugated board loses a meaningful share of its stacking strength in sustained high humidity, so cold-chain and tropical export shipments are usually specified a grade up, or with a moisture-resistant coating.' },
    { q: 'Which flute should I ask for?', a: 'B flute is thin and good for printing and retail. C flute is thicker and cushions better. E and F flutes are thin enough for small retail cartons. BC combines B and C in a double wall. Our <a href="/resources/cardboard-flute-types/">flute types guide</a> shows the profiles side by side.' },
    { q: 'Can you print full colour on double and triple wall?', a: 'Yes, though the fluting shows through more on heavier board. For photographic artwork on double wall we usually recommend an E-flute outer or a litho-laminated liner, which gives a smooth printable surface over the heavier structure.' },
    { q: 'Do heavier boards cost proportionally more to ship?', a: 'Flat-packed board weight roughly scales with wall count, so a double wall order weighs more inbound. It is usually offset by lower damage rates and the ability to stack higher on a pallet, which reduces outbound freight.' },
    { q: 'What if my product is heavy but small?', a: 'Small and dense is the classic case for double wall in a tight-fitting box. Keeping the internal dimensions close to the product stops the load shifting, which matters more than adding another layer of board.' },
    { q: 'Are recycled boards weaker?', a: 'Modern recycled liners reach the same ECT grades as virgin board. What changes is surface brightness and print sharpness, not load capacity. If both matter, a recycled inner with a virgin outer liner is the usual compromise.' },
    { q: 'Can I order a strength test report with my boxes?', a: 'Board certificates showing the ECT or Mullen rating can be supplied with the shipment. Ask for it at quote stage so the mill certificate travels with the production run.' },
  ],
};

export const sizeAndShape: CategoryContent = {
  path: '/product-category/cardboard-boxes-by-size-and-shape/',
  title: 'Cardboard Boxes by Size & Shape | Small to Extra Large',
  description: 'Cardboard boxes organised by dimension and geometry — small, medium, large, cube, round, hexagon, rectangle and rigid formats. Custom sizes made to your measurements.',
  crumbs: [HOME, SHOP, { name: 'Boxes by size and shape', path: '/product-category/cardboard-boxes-by-size-and-shape/' }],
  intro: `<p class="scb-lede">Two different questions live in this collection. One is <em>how big</em> — the small-to-extra-large ladder that most shipping decisions run on. The other is <em>what shape</em> — round, hexagonal, cube, pyramid and the rigid formats that exist because a square box would not sell the product.</p>
<p>If you know your dimensions, skip straight to a custom size: every box here is made to order, so a stock size is a starting point rather than a constraint.</p>`,
  quote: {
    heading: 'Have your dimensions already?',
    note: 'Send length, width and height in inches or millimetres and we will price it as a custom size — there is no premium for a non-standard measurement.',
    boxType: 'Cardboard boxes by size and shape',
    buttonLabel: 'Price my dimensions',
  },
  sections: `
<section class="scb-section">
  <h2>The size ladder, and what actually fits</h2>
  <p>Box sizing is where most packaging money is quietly wasted. An oversized box costs more in board, more in void fill and — because carriers bill on dimensional weight — considerably more in freight. These are the bands the catalogue is built around.</p>
  ${specTable('Typical internal dimensions by size band', ['Band', 'Typical range', 'What it holds', 'Product page'], [
    ['<strong>Tiny</strong>', 'Under 4 × 4 × 2 in', 'Jewellery, rings, USB drives, samples, single cosmetics', '<a href="/product/tiny-cardboard-boxes/">Tiny cardboard boxes</a>'],
    ['<strong>Small</strong>', '4 × 4 × 4 to 8 × 6 × 4 in', 'Mugs, candles, small electronics, single-unit ecommerce', '<a href="/product/small-cardboard-boxes/">Small cardboard boxes</a>'],
    ['<strong>Medium</strong>', '10 × 8 × 6 to 14 × 12 × 10 in', 'Apparel, multi-item orders, shoes, kitchen goods', '<a href="/product/medium-cardboard-boxes/">Medium cardboard boxes</a>'],
    ['<strong>Large</strong>', '16 × 12 × 12 to 24 × 18 × 18 in', 'Bulk orders, home goods, moving and storage', '<a href="/product/large-cardboard-boxes/">Large cardboard boxes</a>'],
    ['<strong>Fixed square</strong>', '4 × 4 × 4 in', 'The most requested single dimension we make', '<a href="/product/4x4-cardboard-boxes/">4x4 cardboard boxes</a>'],
  ])}
  <p>Dimensions are quoted internally, measured length × width × height with the opening facing up. If you are working from an existing box, <a href="/resources/how-to-measure-a-cardboard-box/">our measuring guide</a> covers the places people usually go wrong — measuring the outside, or measuring a flap as part of the height.</p>
</section>

<section class="scb-section scb-tinted">
  <h2>Shape, and why a round box exists at all</h2>
  <p>A square box is cheaper to make, cheaper to ship and easier to stack. Every other shape here is paying for something in return, and it is worth being clear about what.</p>
  <h3>Round and cylindrical</h3>
  <p>Round boxes read as a gift before they are opened, which is why they dominate candles, cosmetics and confectionery. They also protect circular products better than a square box with void fill. The trade-off is stacking: cylinders waste pallet space. <a href="/product/round-cardboard-boxes/">Round cardboard boxes</a> are our most requested shape by a wide margin, available with lift-off lids in diameters from a few inches to extra large.</p>
  <h3>Hexagon, octagon, pyramid and triangle</h3>
  <p>These sell on shelf presence. A <a href="/product/hexagon-cardboard-boxes/">hexagon cardboard box</a> sits between round and square — distinctive, but it still tessellates on a pallet, which is why it has become the default "premium but practical" shape for hampers and candle sets.</p>
  <h3>Cube and rectangle</h3>
  <p>The workhorses. A <a href="/product/cube-cardboard-boxes/">cube box</a> is the strongest geometry for a given board grade because no wall is disproportionately long. A <a href="/product/rectangle-cardboard-boxes/">rectangular box</a> is the most space-efficient for mixed loads. Neither is exciting, and both are usually right.</p>
  <h3>Rigid formats</h3>
  <p>Rigid boxes are not folded from a single sheet; they are built on a chipboard frame and wrapped. That is why <a href="/product/cardboard-rigid-drawer-boxes/">rigid drawer boxes</a> and <a href="/product/cardboard-rigid-lid-base-boxes/">lid-and-base boxes</a> feel substantially more expensive in the hand — and why they cost more and ship assembled rather than flat.</p>
</section>

<section class="scb-section">
  <h2>Dividers, compartments and the inside of the box</h2>
  <p>Several products here are about internal geometry rather than external shape. <a href="/product/cardboard-divider-packaging/">Divider packaging</a> and <a href="/product/cardboard-multi-compartment-boxes/">multi-compartment boxes</a> turn one box into a grid of protected cells, which is how glassware, bottles and cosmetics sets travel without individually wrapping every item. <a href="/resources/cardboard-box-inserts-guide/">Our insert and divider guide</a> covers how the cell sizes are calculated from the product dimensions.</p>
  ${linkRow([
    { path: '/resources/cardboard-box-sizes-guide/', label: 'Cardboard box sizes guide' },
    { path: '/resources/how-to-measure-a-cardboard-box/', label: 'How to measure a box' },
    { path: '/design-your-box/', label: 'Build a box to your dimensions' },
    { path: '/product-category/cardboard-boxes-by-material-strength/', label: 'Choose a board strength' },
  ])}
</section>`,
  faqHeading: 'Sizing and shape questions',
  ctaHeading: 'Price your exact dimensions',
  ctaBody: 'There is no premium for a non-standard size. Send length, width and height and we will quote it as a custom box.',
  faqIntro: 'If your question is about a specific shape, the individual product pages go deeper — these cover the collection as a whole.',
  faqs: [
    { q: 'Are the dimensions on your product pages internal or external?', a: 'Internal. That is the space your product actually has. External dimensions are larger by roughly twice the board thickness on each axis, which matters when you are checking whether boxes fit a shelf or a pallet footprint.' },
    { q: 'Can I order a size that is not listed?', a: 'Yes, and it is the normal case rather than the exception. Every box is cut to a dieline made for your measurements, so a 7 × 5 × 3 in box costs the same to produce as a 6 × 6 × 4 in one at the same board grade.' },
    { q: 'How much clearance should I leave around my product?', a: 'For a snug retail box, about 1–2 mm on each axis. For a shipping box that needs cushioning, allow 1–2 inches on each side for void fill, or specify an insert instead and keep the box tight.' },
    { q: 'What size box do most ecommerce orders use?', a: 'The single most common ecommerce band is 10 × 8 × 6 in in 32 ECT single wall. It suits a wide range of apparel and homeware orders and sits comfortably inside most carriers\' cheaper dimensional-weight bands.' },
    { q: 'Do round boxes cost more than square ones?', a: 'Usually yes. A cylinder needs a wrapped body and two separately cut ends rather than one folded blank, so there is more material handling per unit. The gap narrows considerably at higher volumes.' },
    { q: 'Can hexagon boxes be stacked on a pallet?', a: 'Yes — a regular hexagon tessellates, so a hexagonal box packs a pallet far more efficiently than a cylinder of the same diameter. It is the main practical reason hexagons get chosen over round boxes for hampers.' },
    { q: 'What is the largest box you make?', a: 'Large and extra large formats run past 24 × 18 × 18 in, and pallet boxes go considerably beyond that. Above a certain size the constraint stops being the board and starts being what a person can lift, so we usually discuss double wall and handles at the same time.' },
    { q: 'Do rigid boxes ship flat?', a: 'No. Their chipboard frame is built and wrapped in production, so they arrive assembled. Plan for more inbound freight volume than the equivalent folding carton, and factor that into the landed cost.' },
  ],
};
