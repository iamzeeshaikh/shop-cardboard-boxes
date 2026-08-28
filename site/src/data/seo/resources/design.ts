import type { Resource } from './types';
import { fitComparison } from '../../../lib/seo/diagrams';
import { specTable } from '../../../lib/seo/blocks';

/** Articles about materials, print and what goes inside the box. */

export const materials: Resource = {
  slug: 'cardboard-packaging-materials',
  title: 'Cardboard Packaging Materials | Corrugated, Kraft & SBS',
  h1: 'Cardboard Packaging Materials Compared',
  description: 'What separates corrugated board, kraft, SBS, chipboard and greyboard — how each is made, what it prints like, and which packaging each one belongs in.',
  summary: 'A glossary of the boards behind the word "cardboard", how each is made, and what each one prints and folds like.',
  topic: 'Materials',
  updated: '2026-08-27',
  readingMinutes: 6,
  body: `
<p class="scb-lede">"Cardboard" is a colloquialism covering at least five genuinely different materials. They fold differently, print differently and cost very differently, so it is worth being able to name the one you want.</p>

<h2>Corrugated board</h2>
<p>A fluted layer glued between flat liners. It is strong for its weight because the flutes act as a series of arches, and it is what almost every shipping box is made from. It is not smooth, so print quality is limited by flute size, and it does not fold cleanly at small dimensions.</p>
<p><strong>Recognise it by:</strong> the wavy layer visible on a cut edge. See <a href="/product/corrugated-cardboard-boxes/">corrugated cardboard boxes</a>.</p>

<h2>Kraft paperboard</h2>
<p>Made by the kraft chemical pulping process, which produces unusually long, strong fibres. Left unbleached it is the familiar warm brown. It is strong, it takes a folding crease well, and it has become the default visual language for anything positioning itself as natural or low-intervention.</p>
<p><strong>Print behaviour:</strong> the brown base shifts every ink laid on it, so bright colours read muted. Many brands use that deliberately; if you need accurate colour, you need a white liner.</p>
<p>See <a href="/product/cardboard-recycled-kraft-boxes/">recycled kraft boxes</a> and <a href="/product/brown-cardboard-boxes/">brown cardboard boxes</a>.</p>

<h2>SBS — solid bleached sulphate</h2>
<p>A bleached virgin board, white through its whole thickness, usually clay-coated on one side. It is the premium folding carton material: excellent print surface, clean fold, food-safe grades widely available. It costs more than recycled alternatives and has no recycled content.</p>
<p><strong>Where you have seen it:</strong> cosmetics cartons, pharmaceutical packs, premium confectionery. See <a href="/product/cardboard-cosmetic-packaging/">cosmetic packaging</a>.</p>

<h2>Chipboard and greyboard</h2>
<p>Dense recycled board, grey through its thickness, and rigid rather than foldable. It is not used as a printed surface — it is the structural skeleton of a rigid box, wrapped in printed paper. This is why a rigid box feels so different in the hand from a folding carton.</p>
<p>See <a href="/product/cardboard-rigid-lid-base-boxes/">rigid lid and base boxes</a>.</p>

<h2>Coated recycled board</h2>
<p>Recycled fibre with a white coated top liner. It gives most of SBS's print surface at a lower cost and with substantial recycled content, with a slightly greyer base and marginally less consistent folding. For a great many retail cartons it is the sensible middle.</p>

<h2>Side by side</h2>
${specTable('Board materials compared', ['Material', 'Structure', 'Print', 'Recycled content', 'Typical use'], [
  ['<strong>Corrugated</strong>', 'Fluted, strong for weight', 'Limited by flute', 'Often high', 'Shipping, transit, display'],
  ['<strong>Kraft</strong>', 'Strong fibre, folds well', 'Muted on brown base', 'Virgin or recycled', 'Natural-positioned retail, sleeves'],
  ['<strong>SBS</strong>', 'Smooth, clean fold', 'Excellent', 'None', 'Cosmetics, pharma, premium food'],
  ['<strong>Chipboard</strong>', 'Rigid, not foldable', 'Wrapped, not printed', 'High', 'Rigid box frames'],
  ['<strong>Coated recycled</strong>', 'Good fold, white top', 'Very good', 'High', 'General retail cartons'],
])}

<h2>Coatings and laminations</h2>
<p>The board is only half the specification. What goes on top decides grease resistance, moisture resistance, scuff resistance and how the box feels.</p>
<ul>
  <li><strong>Varnish</strong> — thin, cheap, mild scuff protection, keeps the box fully recyclable.</li>
  <li><strong>Matte or gloss lamination</strong> — a plastic film. Durable and wipeable, but it complicates recycling.</li>
  <li><strong>Water-based dispersion coating</strong> — grease and light moisture resistance while staying recyclable in most streams. The usual choice for food packaging that has to be both.</li>
  <li><strong>PE coating</strong> — full liquid resistance, and considerably harder to recycle.</li>
  <li><strong>Soft touch</strong> — a textured film with a distinctive velvety feel, used almost exclusively on premium packaging.</li>
</ul>
<p><a href="/resources/recyclable-cardboard-packaging/">The recyclability guide</a> covers which of these survive a paper stream and which do not.</p>`,
  shop: [
    { path: '/product/cardboard-recycled-kraft-boxes/', label: 'Recycled kraft boxes' },
    { path: '/product/white-cardboard-boxes/', label: 'White cardboard boxes' },
    { path: '/product/cardboard-rigid-lid-base-boxes/', label: 'Rigid boxes' },
    { path: '/product-category/cardboard-boxes-by-material-strength/', label: 'Boxes by material strength' },
  ],
  next: [
    { path: '/resources/cardboard-flute-types/', label: 'Flute types explained' },
    { path: '/resources/custom-box-printing-methods/', label: 'Printing methods compared' },
    { path: '/resources/recyclable-cardboard-packaging/', label: 'Recyclable cardboard packaging' },
  ],
};

export const printing: Resource = {
  slug: 'custom-box-printing-methods',
  title: 'Custom Box Printing Methods | Litho, Flexo, Digital & Foil',
  h1: 'Custom Box Printing Methods',
  description: 'Offset litho, flexo, digital, foil, embossing and spot UV compared on quality, minimum quantity, setup cost and what each process can hold.',
  summary: 'Six printing and finishing processes compared on quality, minimum quantity and where each one stops being economic.',
  topic: 'Design and print',
  updated: '2026-08-27',
  readingMinutes: 7,
  body: `
<p class="scb-lede">Printing is usually the biggest single variable in a box quote, and the choice is driven less by quality than by quantity. Below a certain run length, the setup cost of the better process swamps its advantage.</p>

<h2>Flexography</h2>
<p>Flexible plates print directly onto the corrugated liner. It is the workhorse for shipping boxes: cheap, fast, and it runs on board no other process handles as well.</p>
<p><strong>Holds:</strong> solid colours, line work, type down to moderate sizes. <strong>Struggles with:</strong> photographs, fine gradients, tight registration between colours.</p>
<p><strong>Practical minimum:</strong> around 500 units, because each colour needs a plate.</p>

<h2>Offset lithography</h2>
<p>Printed on a paper sheet at high resolution, then either used directly as a folding carton or laminated onto corrugated board. This is retail-quality print — photographic images, accurate Pantone matching, sharp small type.</p>
<p><strong>Holds:</strong> essentially anything. <strong>Costs:</strong> plate setup per colour, plus the lamination step on corrugated.</p>
<p><strong>Practical minimum:</strong> around 500 units, and it gets more competitive the higher you go.</p>

<h2>Digital printing</h2>
<p>No plates. The file goes straight to the press, so setup cost is close to zero and every box in a run can differ. The per-unit price is higher and stays roughly flat with volume, which is exactly the opposite of the other processes.</p>
<p><strong>Holds:</strong> full colour, photographic imagery. Pantone colours are simulated in CMYK rather than matched exactly. <strong>Practical minimum:</strong> 100 units.</p>

<h2>Where the crossover falls</h2>
${specTable('Print process by quantity', ['Quantity', 'Usually cheapest', 'Why'], [
  ['100–400', 'Digital', 'No plate cost to amortise'],
  ['500–2,000', 'Digital or offset', 'Close; depends on colour count'],
  ['2,000–10,000', 'Offset or flexo', 'Plate cost is now a small share'],
  ['10,000+', 'Flexo or offset', 'Per-unit press cost dominates'],
])}
<div class="scb-callout"><p><strong>A practical shortcut:</strong> if the artwork has a photograph, you want offset or digital. If it is flat colour and a logo, flexo will do it for less. If you are printing fewer than 500, it is digital regardless.</p></div>

<h2>Finishing processes</h2>
<h3>Foil stamping</h3>
<p>Metallic foil pressed onto the board with a heated die. Genuinely metallic in a way printed metallic ink is not. It carries a die cost, so it makes sense from around 500 units.</p>

<h3>Embossing and debossing</h3>
<p>The board is pressed between a matched die pair to raise or recess an area. Tactile, works without any colour at all, and pairs particularly well with foil. Also die-dependent.</p>

<h3>Spot UV</h3>
<p>Gloss varnish applied to selected areas only. Highest impact over a matte base — the contrast is the effect. It is easy to overuse: on a logo it looks considered, across half the box it looks cluttered.</p>

<h3>Lamination</h3>
<p>A film over the whole surface — matte, gloss or soft touch. It changes the feel more than the look, and it complicates recycling.</p>

<h2>Getting artwork right first time</h2>
<ol>
  <li><strong>Work on the dieline.</strong> We supply it free. Artwork designed to a flat rectangle will not fold where you expect.</li>
  <li><strong>Allow bleed past every trimmed edge.</strong> 3 mm is standard; more is safer on corrugated, which cuts less precisely than paper.</li>
  <li><strong>Keep type away from creases.</strong> Text across a fold cracks. Around 5 mm of clearance is the usual rule.</li>
  <li><strong>Supply vector artwork with outlined fonts,</strong> or 300 dpi raster at final size.</li>
  <li><strong>Name your colours.</strong> If a Pantone matters, state it. "Our blue" is not a specification.</li>
  <li><strong>Check the proof properly.</strong> The digital proof confirms content and placement; a printed proof confirms colour. On a large run, ask for the printed one.</li>
</ol>
<p>Dieline preparation, artwork setup and a print-ready proof are included with every order — <a href="/design-your-box/">the box configurator</a> collects the specification and passes it to the design team.</p>`,
  faqs: [
    { q: 'What is the cheapest way to print a small run of boxes?', a: 'Digital printing, below roughly 500 units. It has no plate cost, so a run of 100 is viable at a sensible price where offset or flexo would not be.' },
    { q: 'Can you match a Pantone exactly?', a: 'On offset and flexo, yes — a spot ink is mixed to the Pantone. On digital the colour is simulated in CMYK, which gets close but is not an exact match. For a signature brand colour, offset is the safer choice.' },
    { q: 'Why does my artwork look banded on corrugated board?', a: 'That is washboarding — the flutes showing through the liner under solid colour. Move to a finer flute, or litho-laminate a printed sheet onto the board instead of printing the liner directly.' },
    { q: 'Do you charge for artwork setup?', a: 'No. Dieline preparation, artwork setup and a print-ready proof are included. You pay for the boxes.' },
    { q: 'Can I print the inside of the box?', a: 'Yes, and on gift and ecommerce packaging it is one of the highest-impact choices available. A printed interior usually costs less than adding a second finish to the outside.' },
    { q: 'How many colours can I print?', a: 'Full colour CMYK plus spot colours is standard on offset and digital. On flexo each colour is a separate plate, so cost rises per colour and most flexo work stays at one to three.' },
  ],
  faqHeading: 'Printing questions',
  shop: [
    { path: '/product/custom-cardboard-boxes-with-logo/', label: 'Custom boxes with logo' },
    { path: '/product/branded-cardboard-boxes/', label: 'Branded cardboard boxes' },
    { path: '/product/blank-cardboard-boxes/', label: 'Blank unprinted boxes' },
    { path: '/design-your-box/', label: 'Design your box' },
  ],
  next: [
    { path: '/resources/cardboard-packaging-materials/', label: 'Board materials compared' },
    { path: '/resources/retail-packaging-guide/', label: 'Retail packaging guide' },
    { path: '/resources/box-styles-explained/', label: 'Box styles explained' },
  ],
};

export const inserts: Resource = {
  slug: 'cardboard-box-inserts-guide',
  title: 'Cardboard Box Inserts & Dividers Guide | Sizing & Types',
  h1: 'Box Inserts and Dividers: A Fit Guide',
  description: 'How inserts and dividers are specified, a worked example of calculating cell sizes, and when a fitted insert beats a bigger box with void fill.',
  summary: 'How insert cell sizes are actually calculated, with a worked example, and when a fitted insert beats a bigger box.',
  topic: 'Specification',
  updated: '2026-08-27',
  readingMinutes: 6,
  body: `
<p class="scb-lede">An insert does one job: it stops the product moving. Everything else — the protection, the presentation, the smaller box, the lower freight bill — follows from that.</p>

${fitComparison()}

<h2>Insert or divider?</h2>
<p>They solve the same problem from opposite directions. An <strong>insert</strong> is shaped around one product or one arrangement: a die-cut platform, a moulded tray, a foam cavity. A <strong>divider</strong> is a grid of interlocking strips that turns the whole box into identical cells, which is what you want when the box holds twelve of the same thing.</p>

<h2>Working out cell sizes</h2>
<p>Divider grids are simple arithmetic, and the arithmetic is where they go wrong. Worked example — twelve 70 mm diameter jars in a single layer:</p>
<ol>
  <li><strong>Cell size.</strong> Product diameter plus clearance. 70 mm plus 3 mm gives a 73 mm cell. Too tight and packing is slow; too loose and the jars rattle.</li>
  <li><strong>Grid.</strong> 4 × 3 cells for twelve.</li>
  <li><strong>Divider thickness.</strong> Corrugated strips are around 3 mm. A 4-wide grid has 3 internal walls; a 3-deep grid has 2.</li>
  <li><strong>Internal box length.</strong> (4 × 73) + (3 × 3) = 301 mm.</li>
  <li><strong>Internal box width.</strong> (3 × 73) + (2 × 3) = 225 mm.</li>
  <li><strong>Internal height.</strong> Jar height plus a few millimetres, plus a pad if anything stacks on top.</li>
</ol>
<div class="scb-callout"><p><strong>The step people skip:</strong> the divider walls themselves. On a 6 × 4 grid that is nine internal walls — nearly 30 mm of length that has to exist inside the box. Leave it out and the grid does not fit the box you ordered.</p></div>

<h2>Choosing the material</h2>
${specTable('Insert materials', ['Material', 'Holds', 'Cost', 'Recycles with the box', 'Best for'], [
  ['<strong>Die-cut corrugated</strong>', 'Very well', 'Low', 'Yes', 'Most products — the default'],
  ['<strong>Interlocking dividers</strong>', 'Very well', 'Lowest per cell', 'Yes', 'Multipacks of identical items'],
  ['<strong>Moulded pulp</strong>', 'Excellently on curves', 'Medium', 'Yes', 'Bottles, jars, curved electronics'],
  ['<strong>Foam</strong>', 'Best shock absorption', 'High', 'No', 'Instruments, optics, lab equipment'],
  ['<strong>Card platform</strong>', 'Presentation only', 'Lowest', 'Yes', 'Retail and gift sets, light items'],
])}

<h2>When an insert pays for itself</h2>
<p>Three situations, and in all of them the insert is cheaper than the alternative:</p>
<ul>
  <li><strong>Freight.</strong> A fitted insert lets you drop a box size. Carriers bill on volume, so that saving recurs on every parcel.</li>
  <li><strong>Damage.</strong> Movement causes most transit damage. A replacement costs the product, a second box, a second freight charge and the support time.</li>
  <li><strong>Range coverage.</strong> One outer box with two or three insert variants covers several products without holding several complete box SKUs.</li>
</ul>

<h2>What to send us</h2>
<p>Product dimensions at the widest points, the quantity per box, whether items stack, and whether the insert needs to look good or only work. A physical sample makes the first dieline accurate; a photograph against a ruler is enough to start the conversation.</p>
<p>Order from <a href="/product/cardboard-box-inserts/">cardboard box inserts</a>, <a href="/product/cardboard-divider-packaging/">divider packaging</a> or <a href="/product/cardboard-partitioned-insert-boxes/">partitioned insert boxes</a>.</p>`,
  faqs: [
    { q: 'How much clearance should each cell have?', a: 'Two to three millimetres around the product. Tighter than that slows packing noticeably; looser and the item rattles, which is the thing the insert exists to prevent.' },
    { q: 'Do dividers arrive assembled?', a: 'No. They ship flat as interlocking strips and slot together in seconds. Assembled shipping would multiply the inbound volume for no benefit.' },
    { q: 'Can one box take several insert configurations?', a: 'Yes, and across a range it is usually the cheaper route — one outer size with two or three insert variants instead of several complete box SKUs.' },
    { q: 'Is corrugated or foam better?', a: 'Corrugated for most products: it holds position well, costs less and recycles with the box. Foam only where the item is genuinely shock-sensitive, such as optics or laboratory instruments.' },
    { q: 'Will an insert let me use a smaller box?', a: 'Usually, and that is often where the money is. Loose fill needs one to two inches of clearance per side; an insert holds the product with far less, and carriers bill on the volume you save.' },
  ],
  faqHeading: 'Insert and divider questions',
  shop: [
    { path: '/product/cardboard-box-inserts/', label: 'Cardboard box inserts' },
    { path: '/product/cardboard-divider-packaging/', label: 'Divider packaging' },
    { path: '/product/cardboard-partitioned-insert-boxes/', label: 'Partitioned insert boxes' },
    { path: '/product/cardboard-multi-compartment-boxes/', label: 'Multi-compartment boxes' },
  ],
  next: [
    { path: '/resources/packaging-fragile-products/', label: 'Packaging fragile products' },
    { path: '/resources/how-to-measure-a-cardboard-box/', label: 'How to measure a box' },
    { path: '/resources/reduce-packaging-and-shipping-costs/', label: 'Reducing packaging costs' },
  ],
};

export const lids: Resource = {
  slug: 'cardboard-boxes-with-lids-guide',
  title: 'Cardboard Boxes With Lids | Lid Styles & Closures Compared',
  h1: 'Lid Styles for Cardboard Boxes',
  description: 'Lift-off, hinged, telescopic, drawer and magnetic lids compared on how well they reopen, what they cost and which products they suit.',
  summary: 'Six lid and closure styles compared on reuse, cost and feel — the detail that decides how a box is experienced.',
  topic: 'Specification',
  updated: '2026-08-27',
  readingMinutes: 5,
  body: `
<p class="scb-lede">The lid is the part of the box a person interacts with. It decides whether the box can be reopened, how it feels to open, and a surprising share of the unit price.</p>

<h2>Lift-off lid (two-piece)</h2>
<p>A separate lid that sits over a base tray. Reopens indefinitely, which is why it dominates <a href="/product/cardboard-shoe-boxes/">shoe boxes</a> and <a href="/product/cardboard-storage-boxes/">storage boxes</a>. The lid depth changes the character completely: a shallow lid looks like storage, a lid covering most of the base looks like a gift.</p>
<p><strong>Costs:</strong> more board than a folded closure, because the lid is a second piece.</p>

<h2>Telescopic lid</h2>
<p>A lift-off lid deep enough to cover most or all of the base. It gives a fully wrapped appearance and adds strength, since the double wall thickness runs down most of the box. Common on <a href="/product/cardboard-gift-boxes/">gift boxes</a> and archive storage.</p>

<h2>Hinged lid (clamshell)</h2>
<p>The lid stays attached and folds back. One-handed to open, which matters in food service where the other hand is holding the food. It is a single piece, so it uses less board than a two-piece box — but the hinge is a wear point and eventually cracks.</p>
<p>Used across <a href="/product/cardboard-burger-boxes/">burger boxes</a> and takeaway formats.</p>

<h2>Tuck-top / roll-end</h2>
<p>The mailer closure: the lid folds over and tucks into the front wall. No tape, quick to pack, and the flap makes a natural printed panel on the inside. It reopens a few times before the tuck flap softens, which is fine for the single delivery journey it is designed for.</p>
<p>See <a href="/product/cardboard-mailing-boxes/">mailing boxes</a>.</p>

<h2>Drawer (slide)</h2>
<p>An inner tray that slides out of an outer sleeve. It reopens indefinitely, feels considered, and needs a pull tab or ribbon because there is nothing to grip. Almost always rigid rather than folded — see <a href="/product/cardboard-rigid-drawer-boxes/">rigid drawer boxes</a>.</p>

<h2>Magnetic closure</h2>
<p>A rigid box with concealed magnets in the flap. The closing action is what most people mean by "premium packaging". It is the most expensive closure here by a clear margin, it ships assembled rather than flat, and the magnets complicate recycling.</p>
<p>See <a href="/product/cardboard-luxury-magnet-boxes/">luxury magnet boxes</a>.</p>

<h2>Compared</h2>
${specTable('Lid styles', ['Style', 'Reopens', 'Ships flat', 'Relative cost', 'Feels like'], [
  ['Lift-off lid', 'Indefinitely', 'Yes', 'Medium', 'Storage or gift, depending on depth'],
  ['Telescopic lid', 'Indefinitely', 'Yes', 'Medium–high', 'Considered, substantial'],
  ['Hinged clamshell', 'Many times', 'Yes', 'Low–medium', 'Practical, food service'],
  ['Tuck-top mailer', 'A few times', 'Yes', 'Low–medium', 'Modern ecommerce'],
  ['Drawer', 'Indefinitely', 'No', 'High', 'Premium, deliberate'],
  ['Magnetic', 'Indefinitely', 'No', 'Highest', 'Luxury'],
])}
<div class="scb-callout"><p><strong>The question that settles it:</strong> how many times will this box be opened? Once, and a tuck-top is right and anything more is wasted. Weekly for years, and only a separate lid or a drawer will still be working.</p></div>`,
  faqs: [
    { q: 'Which lid style reopens best?', a: 'A separate lift-off lid or a drawer. Neither has a folded flap to wear out, so both keep working indefinitely. Tuck flaps soften after a handful of cycles.' },
    { q: 'Are magnetic boxes worth the cost?', a: 'For premium retail and gifting where the opening is part of the product experience, often. For anything shipped and recycled immediately, no — the magnets add cost, freight volume and a recycling complication.' },
    { q: 'Can a lift-off lid be a different colour from the base?', a: 'Yes, and it is a common way to add impact cheaply. The lid and base are separate pieces, so they can carry different board, print and finish.' },
    { q: 'How deep should a lift-off lid be?', a: 'Shallow — around 20% of the box height — reads as functional storage. Covering most of the base reads as a gift. It is one of the cheapest ways to change how a box is perceived.' },
    { q: 'Do hinged lids weaken over time?', a: 'The hinge is the wear point and will eventually crack with repeated folding. For single-use food service that is irrelevant; for anything reopened regularly, specify a separate lid instead.' },
  ],
  faqHeading: 'Lid and closure questions',
  shop: [
    { path: '/product/cardboard-boxes-with-lid/', label: 'Cardboard boxes with lids' },
    { path: '/product/cardboard-shoe-boxes/', label: 'Shoe boxes' },
    { path: '/product/cardboard-rigid-lid-base-boxes/', label: 'Rigid lid and base boxes' },
    { path: '/product/cardboard-luxury-magnet-boxes/', label: 'Magnetic closure boxes' },
  ],
  next: [
    { path: '/resources/box-styles-explained/', label: 'Box styles explained' },
    { path: '/resources/retail-packaging-guide/', label: 'Retail packaging guide' },
    { path: '/resources/cardboard-box-sizes-guide/', label: 'Cardboard box sizes' },
  ],
};
