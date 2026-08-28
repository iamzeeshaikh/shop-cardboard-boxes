import type { Resource } from './types';
import { specTable } from '../../../lib/seo/blocks';

/** Articles written for a particular kind of business rather than a particular box. */

export const ecommerce: Resource = {
  slug: 'ecommerce-packaging-guide',
  title: 'Ecommerce Packaging Guide | Boxes, Costs & Unboxing',
  h1: 'Ecommerce Packaging Guide',
  description: 'Building an ecommerce packaging set-up: choosing a size ladder, controlling dimensional weight, packing bench speed and where branding is worth paying for.',
  summary: 'How to put together an ecommerce packaging set-up that survives the carrier, the packing bench and the finance review.',
  topic: 'By industry',
  updated: '2026-08-27',
  readingMinutes: 8,
  body: `
<p class="scb-lede">Ecommerce packaging has to satisfy three audiences that want different things. The carrier wants small and robust. The packing bench wants fast. The customer wants an experience. Most of the craft is in not letting one of them win outright.</p>

<h2>Start with a week of real orders</h2>
<p>Not the catalogue — the orders. Export a week of shipments with dimensions and weights. Almost every range clusters far more tightly than the product list suggests, and the cluster is what your box ladder should serve.</p>
<p>Sort by largest single dimension, because that is what forces a box size. Then draw three or four cut lines so each box covers roughly a quarter of orders. <a href="/resources/cardboard-box-sizes-guide/">The sizes guide</a> works through this in more detail.</p>

<h2>Control dimensional weight before anything else</h2>
<p>Carriers bill on whichever is greater: actual weight, or volume divided by a fixed divisor. For most ecommerce parcels the volume figure wins, which means you are paying to ship air.</p>
<p>Two consequences follow. First, a tighter box is worth more than a cheaper box. Second, void fill is not free — every inch of clearance it needs is billed on every parcel that leaves.</p>

<h2>The packing bench is a real cost</h2>
<p>A few seconds per parcel does not sound like much until you multiply it by a year of volume. Three things move the number:</p>
<ul>
  <li><strong>Closure.</strong> A <a href="/product/cardboard-mailing-boxes/">self-seal mailer</a> closes in one motion. A taped carton needs a tape gun, a strip and a check.</li>
  <li><strong>Number of sizes.</strong> Every additional box size is a decision the packer has to make. Fewer sizes means faster and fewer wrong choices.</li>
  <li><strong>Void fill.</strong> Reaching for filler, judging how much, and stuffing it takes longer than dropping a product into a fitted insert.</li>
</ul>

<h2>Where branding earns its cost</h2>
<p>Printed outers are the most common place ecommerce brands overspend. The box is opened and recycled within a minute, and a printed one costs materially more than a plain one.</p>
<p>The spend goes further on things the customer actually experiences:</p>
${specTable('Branding spend, ranked by effect per dollar', ['Option', 'Relative cost', 'What the customer notices'], [
  ['Printed inner face of the lid', 'Low', 'The first thing seen on opening — high impact'],
  ['Branded tape on a plain box', 'Very low', 'Visible on arrival, replaces a plain tape you buy anyway'],
  ['Printed sleeve over a plain box', 'Low–medium', 'Full retail look, and versionable per season'],
  ['A card or insert in the box', 'Low', 'Read, kept more often than the box'],
  ['Fully printed outer', 'Highest', 'Seen briefly, then recycled'],
])}

<h2>Returns are packaging too</h2>
<p>If your category has meaningful returns, the box has to survive being opened and reclosed. A taped regular slotted carton does not — the customer cuts it open and then has nothing to seal it with. A mailer with a second adhesive strip, or a box with a separate lid, turns a support problem into a non-event.</p>

<h2>Subscription boxes are a different problem</h2>
<p>A subscription box is opened every month, photographed sometimes, and judged against the last one. That justifies a printed inner and a fitted insert in a way a one-off order does not. It also means the structure should stay fixed while the print varies — one dieline, versioned artwork, no retooling each cycle.</p>

<h2>A sensible starting set-up</h2>
<ol>
  <li>Three box sizes covering roughly a quarter of orders each, in 32 ECT single wall.</li>
  <li>One larger double wall size for the heavy tail.</li>
  <li>Fitted inserts for the two or three products that generate most of the damage claims.</li>
  <li>Branded tape rather than printed outers, unless unboxing is central to the brand.</li>
  <li>An annual volume commitment with staged delivery, so you get the volume price without the warehouse.</li>
</ol>
<p><a href="/product-category/cardboard-shipping-boxes/">The shipping collection</a> covers the boxes; <a href="/product-category/wholesale-cardboard-boxes/">wholesale ordering</a> covers the commitment.</p>`,
  faqs: [
    { q: 'How many box sizes does an ecommerce brand need?', a: 'Three or four covers most ranges. More than that and fragmented purchasing plus packer decision time usually cost more than the freight saving from a closer fit.' },
    { q: 'Are printed boxes worth it for ecommerce?', a: 'Rarely for the transit outer, which is recycled within a minute. Branded tape, a printed inner face or a card in the box deliver more noticed brand per dollar.' },
    { q: 'What board grade for a typical ecommerce parcel?', a: '32 ECT single wall for anything under about 20 lb on a parcel network. Move to double wall only for heavier orders or if boxes are stacked in storage before despatch.' },
    { q: 'How do I stop paying dimensional weight on empty space?', a: 'Right-size the boxes and replace loose fill with fitted inserts. Loose fill needs one to two inches of clearance per side, and you are billed for that volume on every parcel.' },
    { q: 'Should the box be resealable for returns?', a: 'If your category has meaningful returns, yes. A mailer with a second adhesive strip, or a box with a separate lid, removes a recurring support problem for a small unit cost.' },
    { q: 'Can I order a small quantity to test before committing?', a: 'Yes. Digitally printed boxes start at 100 units, which is enough to run a real test through your own packing bench and carrier before committing to a volume.' },
  ],
  faqHeading: 'Ecommerce packaging questions',
  shop: [
    { path: '/product-category/cardboard-shipping-boxes/', label: 'Shipping and mailing boxes' },
    { path: '/product/cardboard-mailing-boxes/', label: 'Self-seal mailers' },
    { path: '/product/custom-cardboard-shipping-boxes/', label: 'Custom shipping boxes' },
    { path: '/product-category/wholesale-cardboard-boxes/', label: 'Wholesale ordering' },
  ],
  next: [
    { path: '/resources/reduce-packaging-and-shipping-costs/', label: 'Reducing packaging costs' },
    { path: '/resources/how-to-choose-a-shipping-box/', label: 'Choosing a shipping box' },
    { path: '/resources/cardboard-box-sizes-guide/', label: 'Building a size ladder' },
  ],
};

export const foodGuide: Resource = {
  slug: 'food-packaging-box-guide',
  title: 'Food Packaging Box Guide | Grease, Heat, Cold & Coatings',
  h1: 'Food Packaging Boxes: Grease, Heat and Cold',
  description: 'How to specify food packaging boxes by what goes inside — grease barriers, ventilation for hot food, cold chain liners and food-safe inks.',
  summary: 'Specifying food packaging from what goes inside: barriers for grease, vents for steam, liners for the cold chain.',
  topic: 'By industry',
  updated: '2026-08-27',
  readingMinutes: 7,
  body: `
<p class="scb-lede">Food packaging is specified from the contents outwards. Three properties of the food decide almost the whole specification: how greasy it is, what temperature it is, and whether it needs to breathe.</p>

<h2>Grease and moisture</h2>
<p>Untreated board absorbs fat within minutes, and once it does the box weakens and looks unpleasant. Anything fried, buttery or oily needs a barrier.</p>
${specTable('Grease barrier options', ['Barrier', 'Resists', 'Recycles', 'Typical use'], [
  ['<strong>None (food-grade board)</strong>', 'Dry contact only', 'Yes', 'Bakery, confectionery, dry snacks, tea'],
  ['<strong>Water-based dispersion</strong>', 'Grease, light moisture', 'Yes, in most streams', 'Burgers, pastries, sandwich wedges'],
  ['<strong>Greaseproof liner</strong>', 'Grease', 'Yes — liner separates', 'Fried food, catering trays'],
  ['<strong>PE coating</strong>', 'Grease and liquid', 'Harder to recycle', 'Wet foods, salads, meal prep'],
])}
<div class="scb-callout"><p><strong>"Food safe" and "recyclable" pull against each other.</strong> The stronger the barrier, the harder the box is to recycle. Most operators end up with a coated box for wet lines and an uncoated one for dry, rather than one compromise box for everything.</p></div>

<h2>Temperature</h2>
<h3>Hot food</h3>
<p>Steam is the enemy. Trapped in a sealed box it condenses on the lid, drips back onto the food and softens both the food and the board. Vents solve it, and placement matters more than count: high on the side walls lets steam escape without letting heat dump straight out of the top.</p>
<p>See <a href="/product/cardboard-pizza-boxes/">pizza boxes</a>, <a href="/product/cardboard-burger-boxes/">burger boxes</a> and <a href="/product/cardboard-takeout-box/">takeout boxes</a>.</p>

<h3>Chilled and frozen</h3>
<p>The box has to hold temperature and resist the condensation that forms when a cold pack meets warm air. <a href="/product/cardboard-insulated-cold-boxes/">Insulated cold boxes</a> pair a moisture barrier with an insulating liner, and the coolant is sized to the route rather than to the box. Two to three days is the window most chilled subscription and direct-to-consumer food operates in.</p>

<h2>Ventilation for fresh produce</h2>
<p>Produce respires, and a sealed box accelerates spoilage. <a href="/product/cardboard-vegetable-packaging-boxes/">Vegetable boxes</a> and <a href="/product/cardboard-fruit-packaging-boxes/">fruit boxes</a> use die-cut vents and hand holes that double as airflow. Those cuts remove load-bearing board, so a ventilated produce box needs a higher grade than a plain box of the same size to stack the same.</p>

<h2>Food-safe inks and board</h2>
<p>Food-contact packaging is produced on food-grade board with food-safe inks. That should be stated on the quote rather than assumed, and it is worth keeping the specification on file — it is the document you will be asked for.</p>
<p>Where print is heavy and contact is direct, a common approach is to print the outside only and leave the food-contact surface unprinted, which removes the question entirely.</p>

<h2>Specifying by service type</h2>
<ul>
  <li><strong>Takeaway and delivery.</strong> Vented, stackable in a delivery bag, rigid enough for a moped. <a href="/product/cardboard-noodle-boxes/">Noodle boxes</a>, <a href="/product/cardboard-salad-boxes/">salad boxes</a>.</li>
  <li><strong>Bakery.</strong> Often no barrier needed, but nearly always a fitted insert so nothing tips. <a href="/product/cardboard-muffin-boxes/">Muffin boxes</a>, <a href="/product/cardboard-macaron-boxes/">macaron boxes</a>.</li>
  <li><strong>Catering.</strong> Sized around a portion count, with hand holes. <a href="/product/cardboard-catering-trays/">Catering trays</a>.</li>
  <li><strong>Grocery retail.</strong> Printed cartons where barrier requirements are usually minimal. <a href="/product/cardboard-coffee-packaging-boxes/">Coffee</a>, <a href="/product/cardboard-tea-packaging-boxes/">tea</a>.</li>
</ul>`,
  faqs: [
    { q: 'Which coating should I use for fried food?', a: 'A water-based dispersion coating handles most fried items and keeps the box recyclable in most streams. For heavily saturated items such as chips sitting in their own oil, a greaseproof liner performs better and separates cleanly.' },
    { q: 'Where should vents go on a hot food box?', a: 'High on the side walls rather than in the lid. That lets steam escape without dumping heat straight out of the top, and it keeps condensation off the food.' },
    { q: 'How long does an insulated box hold temperature?', a: 'A cold box with an appropriate coolant typically holds a chilled range through a two to three day window. Performance depends on coolant mass and ambient temperature, so the coolant is sized to your route.' },
    { q: 'Are your food boxes microwave or oven safe?', a: 'Plain uncoated board tolerates short microwave reheating. PE-coated board is not oven safe. If reheating in packaging is part of your service, say so at quote stage so a rated board is specified rather than assumed.' },
    { q: 'Can I print full colour on food packaging?', a: 'Yes, with food-safe inks. On coated board the quality matches standard retail packaging. On uncoated kraft the colours sit back noticeably, which many bakery brands choose deliberately.' },
    { q: 'Do ventilated boxes stack as well as plain ones?', a: 'No. Every die cut removes load-bearing board, so a vented produce box needs a higher board grade than a plain box of the same size to reach the same stacking performance.' },
    { q: 'Are compostable food boxes available?', a: 'Uncoated food-grade board and water-based coatings are broadly compostable in industrial facilities. Home-compostable claims depend on the coating and the local scheme, so we describe what the material is rather than making a blanket claim.' },
  ],
  faqHeading: 'Food packaging questions',
  shop: [
    { path: '/product-category/food-related-cardboard-boxes/', label: 'All food packaging boxes' },
    { path: '/product/cardboard-pizza-boxes/', label: 'Pizza boxes' },
    { path: '/product/cardboard-bakery-boxes/', label: 'Bakery boxes' },
    { path: '/product/cardboard-insulated-cold-boxes/', label: 'Insulated cold boxes' },
  ],
  next: [
    { path: '/resources/recyclable-cardboard-packaging/', label: 'Recyclable cardboard packaging' },
    { path: '/resources/cardboard-packaging-materials/', label: 'Board materials compared' },
    { path: '/resources/retail-packaging-guide/', label: 'Retail packaging guide' },
  ],
};

export const retail: Resource = {
  slug: 'retail-packaging-guide',
  title: 'Retail Packaging Guide | Shelf Ready, Display & Compliance',
  h1: 'Retail and Shelf-Ready Packaging Guide',
  description: 'What retailers specify for shelf-ready packaging, how display units are built, and a realistic timeline for getting packaging approved before a launch.',
  summary: 'What a retailer actually specifies, how display units are built, and a realistic timeline from brief to shelf.',
  topic: 'By industry',
  updated: '2026-08-27',
  readingMinutes: 7,
  body: `
<p class="scb-lede">Retail packaging is judged twice: once by a buyer looking at labour and fixture fit, and once by a shopper who gives it about three seconds. The two judgements pull in different directions, and the spec sheet usually decides which one wins.</p>

<h2>What the retailer specifies</h2>
<p>For anything shelf-ready, the requirements normally arrive fixed. Expect to be given:</p>
<ul>
  <li><strong>Case count</strong> — units per case, driven by their replenishment model.</li>
  <li><strong>External case dimensions</strong> — so the case fits the fixture and the pallet pattern.</li>
  <li><strong>Tray height after opening</strong> — how much of the case remains once the front is removed.</li>
  <li><strong>Perforation position and type</strong> — where the tear line runs and how it opens.</li>
  <li><strong>Front panel print area</strong> — what the shopper sees, and often what may not appear there.</li>
  <li><strong>Barcode placement and magnification</strong> — a scanning requirement, not a design preference.</li>
</ul>
<p>Send us the spec sheet and we build to it. Guessing at these is the most common cause of a rejected first sample.</p>

<h2>Why shelf-ready exists</h2>
<p>It is a labour argument. A case that opens into a display in one movement replaces unpacking twelve units individually and arranging them. Multiply across a store estate and it is a substantial operating saving, which is why buyers ask for it and why they are unwilling to negotiate the spec.</p>
<p>See <a href="/product/cardboard-shelf-ready-packaging/">shelf-ready packaging</a>.</p>

<h2>Display units</h2>
${specTable('Display formats', ['Format', 'Where it lives', 'Typical run', 'Lifespan'], [
  ['<a href="/product/cardboard-counter-display-units/">Counter display unit</a>', 'Beside the till', '250–5,000', '4–8 weeks'],
  ['<a href="/product/cardboard-pop-display-boxes/">POP display box</a>', 'Aisle end, promo space', '250–2,500', '4–8 weeks'],
  ['<a href="/product/cardboard-hanging-display-packaging/">Hanging pack</a>', 'Peg hook, slat wall', '500+', 'Sold individually'],
  ['<a href="/product/cardboard-retail-display-trays/">Display tray</a>', 'Shelf, stacked', '500+', 'Replenishment cycle'],
])}
<div class="scb-callout"><p><strong>The failure nobody tests for:</strong> a counter unit that will not stay upright once it is half empty. If the structure relies on the product for rigidity, it collapses exactly when it is working. Ask for a sample and load it to 30%.</p></div>

<h2>Printing for a shelf</h2>
<p>Corrugated is not a smooth surface, and fluting shows through solid colour. Direct flexo printing is cheaper and suits bold, flat artwork. Litho lamination — printing a paper sheet offset and bonding it to the board — costs more and gives photographic quality. For a national retailer, litho lamination is usually the expectation rather than an upgrade.</p>
<p><a href="/resources/custom-box-printing-methods/">The printing guide</a> covers where the crossover falls.</p>

<h2>A realistic timeline</h2>
<ol>
  <li><strong>Weeks 1–2 — brief and structure.</strong> Retailer spec in, dieline built, structural sample produced and shipped.</li>
  <li><strong>Week 3 — structural approval.</strong> Sample loaded, opened, put on the actual fixture if possible.</li>
  <li><strong>Weeks 3–4 — artwork.</strong> Design to the approved dieline, barcode placed and verified.</li>
  <li><strong>Week 5 — printed proof.</strong> The only reliable colour check. Skipping this is where launches go wrong.</li>
  <li><strong>Weeks 6–7 — production and delivery.</strong> 8–10 business days from artwork approval.</li>
</ol>
<p>Roughly seven weeks from brief to delivered stock, assuming no round trips. Build in two weeks of contingency for a first launch with a new retailer, because there almost always is one.</p>

<h2>Versioning across a range</h2>
<p>Keep the structure fixed and vary the print. One dieline means one tooling cost and one structural approval, with only artwork changing per variant. Where the product carries the branding, a plain box with a <a href="/product/cardboard-sleeve-packaging/">printed sleeve</a> is cheaper still.</p>`,
  faqs: [
    { q: 'What does a retailer usually specify for shelf-ready packaging?', a: 'Case count, external case dimensions, tray height after opening, perforation position and type, front panel print area, and barcode placement and magnification. Most large retailers publish a spec sheet.' },
    { q: 'How long does a counter display unit need to last?', a: 'Most promotional units are specified for a four to eight week cycle. Beyond that the board scuffs and the unit stops selling. For a full season, specify a heavier flute and a laminated surface.' },
    { q: 'Can display units be assembled in store?', a: 'Yes, and for volume rollouts it is the sensible default because flat-packing cuts freight substantially. Complex units can be supplied part-assembled to reduce the steps a store colleague follows.' },
    { q: 'Is litho lamination necessary?', a: 'If the artwork is photographic or a brand colour must be exact, yes. If the design is bold flat colour and simple type, direct flexo looks nearly as good for noticeably less.' },
    { q: 'What is a euro slot?', a: 'The keyhole-shaped die cut that lets a pack hang on a peg hook. It needs reinforcement — an unreinforced slot tears within days of handling.' },
    { q: 'How far ahead should I start a retail packaging project?', a: 'Around seven weeks from brief to delivered stock with no round trips, so plan nine for a first launch with a new retailer. The structural approval and the printed proof are the two stages worth protecting.' },
  ],
  faqHeading: 'Retail packaging questions',
  shop: [
    { path: '/product-category/retail-and-display-packaging/', label: 'Retail and display packaging' },
    { path: '/product/cardboard-shelf-ready-packaging/', label: 'Shelf ready packaging' },
    { path: '/product/cardboard-counter-display-units/', label: 'Counter display units' },
    { path: '/product/cardboard-boxes-with-window/', label: 'Window boxes' },
  ],
  next: [
    { path: '/resources/custom-box-printing-methods/', label: 'Printing methods compared' },
    { path: '/resources/cardboard-boxes-with-lids-guide/', label: 'Lid and closure styles' },
    { path: '/resources/box-styles-explained/', label: 'Box styles explained' },
  ],
};

export const recyclable: Resource = {
  slug: 'recyclable-cardboard-packaging',
  title: 'Recyclable Cardboard Packaging | What the Claims Mean',
  h1: 'Recyclable and Recycled Cardboard Packaging',
  description: 'What recyclable, recycled, compostable and biodegradable actually mean on packaging, which coatings break recyclability, and how to specify honestly.',
  summary: 'What the four common claims actually mean, which coatings break recyclability, and how to specify without overclaiming.',
  topic: 'Sustainability',
  updated: '2026-08-27',
  readingMinutes: 6,
  body: `
<p class="scb-lede">Four words get used interchangeably on packaging and mean four different things. Getting them right matters commercially as well as ethically, because overclaiming is increasingly something regulators and customers check.</p>

<h2>The four claims</h2>
<h3>Recyclable</h3>
<p>The material can be reprocessed <em>in the systems that actually exist where the customer lives</em>. Plain corrugated board is genuinely recyclable almost everywhere — it is one of the most recovered materials in use. Add a plastic film and that stops being straightforwardly true.</p>

<h3>Recycled</h3>
<p>A claim about what the board is made from, not what happens to it afterwards. A board can be 100% recycled and still be difficult to recycle again if it is laminated. The two claims are independent, and packaging often carries one while implying the other.</p>

<h3>Biodegradable</h3>
<p>Almost meaningless without a timeframe and conditions. Nearly everything biodegrades eventually. Unless the claim names a standard and a timescale, treat it as marketing.</p>

<h3>Compostable</h3>
<p>Specific and testable, but only against a named standard. Industrial composting reaches temperatures a home compost heap does not, so "industrially compostable" and "home compostable" are different claims and only one of them is easy to meet.</p>

<h2>What breaks recyclability</h2>
${specTable('Coatings and finishes against paper recycling', ['Finish', 'Effect on recycling', 'Alternative'], [
  ['<strong>Uncoated board</strong>', 'No effect — fully recyclable', '—'],
  ['<strong>Water-based varnish</strong>', 'No meaningful effect', '—'],
  ['<strong>Water-based dispersion coating</strong>', 'Accepted in most streams', '—'],
  ['<strong>Matte / gloss lamination</strong>', 'Film must separate; often rejected', 'Matte varnish'],
  ['<strong>Soft touch film</strong>', 'Same problem, harder to separate', 'Uncoated textured board'],
  ['<strong>PE coating</strong>', 'Significantly reduces recyclability', 'Dispersion coating where the food allows'],
  ['<strong>Foil stamping</strong>', 'Small areas tolerated; large areas not', 'Metallic ink or metallised board'],
  ['<strong>Plastic windows</strong>', 'Should be removable by the consumer', 'Open die-cut aperture'],
])}

<h2>Specifying honestly</h2>
<ul>
  <li><strong>Say what the material is</strong> rather than making a blanket environmental claim. "Uncoated recycled kraft board" is checkable; "eco-friendly" is not.</li>
  <li><strong>If you laminate, do not print "fully recyclable".</strong> It is the single most common overclaim in packaging.</li>
  <li><strong>Name the standard for compostable claims,</strong> and say whether it is industrial or home.</li>
  <li><strong>Right-sizing is a sustainability lever too,</strong> and an unglamorous one. Less board, less void fill, fewer vehicles. It usually beats a material swap on measured impact.</li>
</ul>
<div class="scb-callout"><p><strong>The trade-off worth naming out loud:</strong> the coatings that make food packaging work are the same ones that make it hard to recycle. Choosing an uncoated box for a greasy product is not a sustainability win if it fails and the order is remade.</p></div>

<h2>What we can supply</h2>
<p><a href="/product/cardboard-recycled-kraft-boxes/">Recycled kraft boxes</a> use high recycled content with no coating. <a href="/product/cardboard-eco-friendly-compostable-boxes/">Compostable boxes</a> use uncoated food-grade board and water-based coatings suitable for industrial composting. Most of our standard corrugated range is recyclable as supplied, because plain board with water-based ink is the default rather than an upgrade.</p>`,
  faqs: [
    { q: 'Is laminated packaging recyclable?', a: 'Usually not straightforwardly. The plastic film has to separate from the fibre, and many facilities reject laminated board. If recyclability is a firm requirement, a water-based matte varnish gives a similar restrained look and stays in the paper stream.' },
    { q: 'Does recycled board perform as well as virgin?', a: 'For strength, yes — modern recycled liners reach the same ECT grades. What changes is surface brightness and print sharpness. A recycled inner with a virgin outer liner is a common compromise.' },
    { q: 'What is the difference between compostable and biodegradable?', a: 'Compostable is testable against a named standard within a defined timeframe. Biodegradable without a standard or timeframe means very little, because nearly everything biodegrades eventually.' },
    { q: 'Can food packaging be both grease resistant and recyclable?', a: 'Often, with a water-based dispersion coating, which most paper streams accept. A PE coating gives stronger resistance and significantly reduces recyclability.' },
    { q: 'Are window boxes recyclable?', a: 'The board is. The film should be removable by the consumer, and a box designed for that is a better claim than one where the window is bonded. An open die-cut aperture avoids the question entirely where the product allows it.' },
    { q: 'What is the single biggest sustainability improvement available?', a: 'Usually right-sizing. Less board, less void fill and fewer vehicle movements typically beat a material substitution on measured impact, and it saves money at the same time.' },
  ],
  faqHeading: 'Sustainability questions',
  shop: [
    { path: '/product/cardboard-recycled-kraft-boxes/', label: 'Recycled kraft boxes' },
    { path: '/product/cardboard-eco-friendly-compostable-boxes/', label: 'Compostable boxes' },
    { path: '/product/brown-cardboard-boxes/', label: 'Brown kraft boxes' },
  ],
  next: [
    { path: '/resources/cardboard-packaging-materials/', label: 'Board materials compared' },
    { path: '/resources/food-packaging-box-guide/', label: 'Food packaging guide' },
    { path: '/resources/reduce-packaging-and-shipping-costs/', label: 'Reducing packaging costs' },
  ],
};
