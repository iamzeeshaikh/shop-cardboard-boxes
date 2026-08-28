import { esc } from './util';

/**
 * The Design Your Box configurator markup, shared by /design-your-box/ and by every
 * product page. One builder means the tool cannot drift between the two placements,
 * and the same stylesheet and script drive both.
 *
 * Every option is something the business actually produces. Nothing here is invented
 * to fill a step.
 */

export interface Option { value: string; name: string; note: string }

export const STYLES: Option[] = [
  { value: 'rsc', name: 'Shipping carton', note: 'Regular slotted carton. Flaps meet and are taped. The cheapest and strongest per unit.' },
  { value: 'mailer', name: 'Mailer', note: 'Hinged lid that tucks closed. No tape, fast to pack, printable inner face.' },
  { value: 'tuck', name: 'Tuck-end carton', note: 'Folding retail carton in thin board. Cosmetics, food, supplements.' },
  { value: 'lid-base', name: 'Lid and base', note: 'Separate lift-off lid over a tray. Reopens indefinitely.' },
  { value: 'rigid', name: 'Rigid box', note: 'Wrapped chipboard frame. Ships assembled. Premium feel.' },
  { value: 'round', name: 'Round box', note: 'Cylindrical body with a lift-off lid. Quoted as diameter × height.' },
];

export const MATERIALS: Option[] = [
  { value: 'corrugated-kraft', name: 'Kraft corrugated', note: 'Brown, strong, high recycled content. The shipping default.' },
  { value: 'corrugated-white', name: 'White corrugated', note: 'White outer liner for better print, same structure.' },
  { value: 'sbs', name: 'SBS folding board', note: 'Bleached white through the board. Best print surface, food-safe grades.' },
  { value: 'recycled', name: 'Recycled board', note: 'High recycled content, slightly greyer base, good print with a coated top.' },
  { value: 'rigid-chipboard', name: 'Rigid chipboard', note: 'Structural frame for rigid boxes, wrapped in printed paper.' },
  { value: 'food-grade', name: 'Food-grade board', note: 'Food-contact board with food-safe inks. Coating chosen separately.' },
];

export const BOARDS: Option[] = [
  { value: 'single-32', name: 'Single wall · 32 ECT', note: 'Up to about 20 lb. Parcel network, retail, general ecommerce.' },
  { value: 'double-48', name: 'Double wall · 48 ECT', note: '30–65 lb, or anything palletised and stacked.' },
  { value: 'triple-90', name: 'Triple wall · 90+ ECT', note: '65 lb and above. Machinery, industrial, export.' },
  { value: 'folding', name: 'Folding carton board', note: 'Thin board for retail cartons rather than corrugated.' },
  { value: 'advise', name: 'Recommend one for me', note: 'Tell us the weight in the notes and we will specify it.' },
];

export const QUANTITIES: Option[] = [
  { value: '100', name: '100', note: 'Our minimum. Digital printing, no plate cost.' },
  { value: '500', name: '500', note: 'Offset and flexo become viable.' },
  { value: '2500', name: '2,500', note: 'Setup cost largely disappears into the run.' },
  { value: '10000', name: '10,000', note: 'Mill-rate board, call-off delivery available.' },
  { value: 'custom', name: 'Another quantity', note: 'Enter your own figure below.' },
];

export const PRINTING: Option[] = [
  { value: 'none', name: 'Unprinted', note: 'Plain kraft or white. Cheapest, and right for most transit outers.' },
  { value: 'digital', name: 'Digital, full colour', note: 'No plate cost. Best below about 500 units.' },
  { value: 'offset', name: 'Offset litho', note: 'Photographic quality and exact Pantone matching. From 500 units.' },
  { value: 'flexo', name: 'Flexo, 1–2 colours', note: 'Direct onto corrugated. Bold flat artwork, from 500 units.' },
  { value: 'inside-out', name: 'Printed inside and out', note: 'Printed interior — the part customers actually photograph.' },
];

export const FINISHES: Option[] = [
  { value: 'none', name: 'No finish', note: 'Uncoated. Fully recyclable, natural feel.' },
  { value: 'matte', name: 'Matte lamination', note: 'Smooth and non-reflective. Complicates recycling.' },
  { value: 'gloss', name: 'Gloss lamination', note: 'Reflective and wipeable.' },
  { value: 'soft-touch', name: 'Soft touch', note: 'Velvety film. Premium cosmetics and fragrance.' },
  { value: 'spot-uv', name: 'Spot UV', note: 'Raised gloss over matte. Best on a logo only.' },
  { value: 'foil', name: 'Foil stamping', note: 'Pressed metallic foil. Carries a die cost, from 500 units.' },
];

export const ARTWORK: Option[] = [
  { value: 'ready', name: 'Print-ready artwork', note: 'Vector, fonts outlined, ready for the dieline.' },
  { value: 'draft', name: 'Artwork in progress', note: 'We will supply the dieline for your designer to work to.' },
  { value: 'need-design', name: 'We need design help', note: 'Free design support is included with every order.' },
  { value: 'none', name: 'No printing needed', note: 'Plain unprinted boxes.' },
];

export const STEP_NAMES = ['Style', 'Size', 'Material', 'Board', 'Quantity', 'Printing', 'Finish', 'Artwork', 'Notes', 'Contact', 'Review'];

/** Four grouped steps for the copy that sits inside a product page. */
export const COMPACT_STEP_NAMES = ['Style & size', 'Specification', 'Print & artwork', 'Your details'];

/** Unique ids keep two configurators on one page from sharing label targets. */
const options = (name: string, items: Option[], prefix: string) =>
  `<ul class="scb-cfg-options">${items.map((item, index) => `<li class="scb-cfg-option"><input type="radio" id="${prefix}-${esc(name)}-${index}" name="${esc(name)}" value="${esc(item.value)}" data-label="${esc(item.name)}" /><label for="${prefix}-${esc(name)}-${index}"><span class="scb-cfg-opt-name">${esc(item.name)}</span><span class="scb-cfg-opt-note">${esc(item.note)}</span></label></li>`).join('')}</ul>`;

const group = (name: string, items: Option[], prefix: string) =>
  `<div data-require-group="${esc(name)}">${options(name, items, prefix)}<span class="scb-cfg-error" role="alert"></span></div>`;

const nav = (back: boolean, next: boolean) =>
  `<div class="scb-cfg-nav">${back ? '<button type="button" class="scb-cfg-back">Back</button>' : ''}${next ? '<button type="button" class="scb-cfg-next">Continue</button>' : ''}</div>`;

const sub = (text: string, level = 3) => `<h${level} class="scb-cfg-sub">${esc(text)}</h${level}>`;

/* ---- field groups shared by both layouts ---- */
const dimensionFields = (p: string) => `<div class="scb-cfg-fields">
  <div class="scb-cfg-field"><label for="${p}-l">Length</label><input id="${p}-l" name="length_value" type="text" inputmode="decimal" data-required data-kind="number" data-required-message="Enter the internal length." /><span class="scb-cfg-error" role="alert"></span></div>
  <div class="scb-cfg-field"><label for="${p}-w">Width</label><input id="${p}-w" name="width_value" type="text" inputmode="decimal" /><span class="scb-cfg-hint">Leave blank for a round box.</span></div>
  <div class="scb-cfg-field"><label for="${p}-h">Height</label><input id="${p}-h" name="height_value" type="text" inputmode="decimal" data-required data-kind="number" data-required-message="Enter the internal height." /><span class="scb-cfg-error" role="alert"></span></div>
  <div class="scb-cfg-field"><label for="${p}-unit">Units</label><select id="${p}-unit" name="dimension_unit"><option value="in">Inches</option><option value="mm">Millimetres</option><option value="cm">Centimetres</option></select></div>
</div>`;

const quantityField = (p: string) => `<div class="scb-cfg-fields" style="margin-top:14px"><div class="scb-cfg-field scb-cfg-full"><label for="${p}-qty">Your quantity, if different</label><input id="${p}-qty" name="quantity_custom" type="text" inputmode="numeric" placeholder="e.g. 3,500" /></div></div>`;

const colourField = (p: string) => `<div class="scb-cfg-fields" style="margin-top:14px"><div class="scb-cfg-field scb-cfg-full"><label for="${p}-colour">Brand colours</label><input id="${p}-colour" name="colour_note" type="text" placeholder="e.g. Pantone 2955 C and warm grey" /><span class="scb-cfg-hint">Naming a Pantone helps us tell you whether offset is worth it.</span></div></div>`;

const artworkField = (p: string) => `<div class="scb-cfg-fields" style="margin-top:14px"><div class="scb-cfg-field scb-cfg-full"><label for="${p}-file">Upload artwork (optional)</label><input id="${p}-file" name="artwork_file" type="file" accept=".pdf,.ai,.eps,.png,.jpg,.jpeg,.svg" /><span class="scb-cfg-hint">Up to 15 MB — PDF, AI, EPS, PNG, JPG or SVG.</span></div></div>`;

const notesField = (p: string) => `<div class="scb-cfg-fields"><div class="scb-cfg-field scb-cfg-full"><label for="${p}-notes">Anything else we should know</label><textarea id="${p}-notes" name="additional_requirements" rows="3" placeholder="e.g. product weighs 12 lb, boxes stack six high, needed by 15 October"></textarea></div></div>`;

const contactFields = (p: string) => `<div class="scb-cfg-fields">
  <div class="scb-cfg-field"><label for="${p}-name">Name</label><input id="${p}-name" name="name" type="text" autocomplete="name" data-required data-required-message="We need a name to reply to." /><span class="scb-cfg-error" role="alert"></span></div>
  <div class="scb-cfg-field"><label for="${p}-email">Email</label><input id="${p}-email" name="email" type="email" autocomplete="email" data-required data-required-message="We need an email address to send the quote." /><span class="scb-cfg-error" role="alert"></span></div>
  <div class="scb-cfg-field"><label for="${p}-phone">Phone (optional)</label><input id="${p}-phone" name="phone" type="tel" autocomplete="tel" /></div>
  <div class="scb-cfg-field"><label for="${p}-company">Company (optional)</label><input id="${p}-company" name="company" type="text" autocomplete="organization" /></div>
</div>`;

const submitBlock = (p: string, review: boolean) => `${review ? '<ul class="scb-cfg-review"></ul>' : ''}
  <p class="scb-cfg-hp"><label for="${p}-hp">Leave this field empty</label><input id="${p}-hp" name="website" type="text" tabindex="-1" autocomplete="off" /></p>
  <textarea name="configuration_summary" hidden aria-hidden="true" tabindex="-1" aria-label="Configuration summary"></textarea>
  <div class="scb-cfg-nav"><button type="button" class="scb-cfg-back">Back</button><button type="submit" class="scb-cfg-submit">Send my specification</button></div>`;

export interface ConfiguratorOptions {
  /** Product this instance sits on, carried into the enquiry. */
  productName?: string;
  productUrl?: string;
  /** Distinguishes element ids when the page could hold more than one instance. */
  prefix?: string;
  /** Four grouped steps instead of eleven, for placement inside a product page. */
  compact?: boolean;
}

export function configurator({ productName = '', productUrl = '', prefix = 'cfg', compact = false }: ConfiguratorOptions = {}): string {
  const p = esc(prefix);
  const names = compact ? COMPACT_STEP_NAMES : STEP_NAMES;
  const productField = productName
    ? `<input type="hidden" name="product_of_interest" value="${esc(productName)}" /><input type="hidden" name="product_page" value="${esc(productUrl)}" />`
    : '';

  const steps = compact ? [
    `<section class="scb-cfg-step" data-active="true">
      <span class="scb-cfg-stepno">Step 1 of 4</span>
      <h3>Box style and size</h3>
      <p>Pick the closest structure, then give us the internal dimensions — the space your product actually has.</p>
      ${group('box_style', STYLES, p)}
      ${sub('Dimensions', 4)}
      ${dimensionFields(p)}
      ${nav(false, true)}
    </section>`,
    `<section class="scb-cfg-step">
      <span class="scb-cfg-stepno">Step 2 of 4</span>
      <h3>Material, board and quantity</h3>
      <p>Board grade follows from weight and stacking. If you are unsure, choose "recommend one for me" and tell us the weight at the last step.</p>
      ${sub('Material', 4)}${group('material', MATERIALS, p)}
      ${sub('Board strength', 4)}${group('board_strength', BOARDS, p)}
      ${sub('Quantity', 4)}${group('quantity', QUANTITIES, p)}
      ${quantityField(p)}
      ${nav(true, true)}
    </section>`,
    `<section class="scb-cfg-step">
      <span class="scb-cfg-stepno">Step 3 of 4</span>
      <h3>Printing, finish and artwork</h3>
      <p>Below about 500 units digital is nearly always cheapest. Dieline preparation and artwork setup are included either way.</p>
      ${sub('Printing', 4)}${group('printing', PRINTING, p)}
      ${sub('Finish', 4)}${group('finish', FINISHES, p)}
      ${colourField(p)}
      ${sub('Artwork', 4)}${group('artwork_status', ARTWORK, p)}
      ${artworkField(p)}
      ${nav(true, true)}
    </section>`,
    `<section class="scb-cfg-step">
      <span class="scb-cfg-stepno">Step 4 of 4</span>
      <h3>Where should we send the quote?</h3>
      <p>A packaging specialist replies with pricing, board options and a lead time — usually within one working day.</p>
      ${contactFields(p)}
      ${notesField(p)}
      ${submitBlock(p, true)}
    </section>`,
  ] : [
    `<section class="scb-cfg-step" data-active="true"><span class="scb-cfg-stepno">Step 1 of 11</span><h2>Box style</h2><p>The structure decides most of the cost and nearly all of how the box feels. If none of these is quite right, pick the closest and say so in the notes.</p>${group('box_style', STYLES, p)}${nav(false, true)}</section>`,
    `<section class="scb-cfg-step"><span class="scb-cfg-stepno">Step 2 of 11</span><h2>Dimensions</h2><p>Internal dimensions — the space your product actually has. Measure the opening with the flaps folded out of the way. For a round box, enter the diameter as length and leave width blank.</p>${dimensionFields(p)}${nav(true, true)}</section>`,
    `<section class="scb-cfg-step"><span class="scb-cfg-stepno">Step 3 of 11</span><h2>Material</h2><p>Corrugated for anything that ships. Folding board for retail cartons. Food-grade where the box touches food — the coating is chosen separately.</p>${group('material', MATERIALS, p)}${nav(true, true)}</section>`,
    `<section class="scb-cfg-step"><span class="scb-cfg-stepno">Step 4 of 11</span><h2>Board strength</h2><p>Board grade follows from gross weight and whether the boxes stack. If you are unsure, choose the last option and tell us the weight at the notes step.</p>${group('board_strength', BOARDS, p)}${nav(true, true)}</section>`,
    `<section class="scb-cfg-step"><span class="scb-cfg-stepno">Step 5 of 11</span><h2>Quantity</h2><p>Unit price falls in steps rather than smoothly, because setup costs spread across the run. These are the steps worth planning around.</p>${group('quantity', QUANTITIES, p)}${quantityField(p)}${nav(true, true)}</section>`,
    `<section class="scb-cfg-step"><span class="scb-cfg-stepno">Step 6 of 11</span><h2>Printing</h2><p>Below about 500 units digital is nearly always cheapest. Above it, offset or flexo take over. A printed interior is the option most people underrate.</p>${group('printing', PRINTING, p)}${nav(true, true)}</section>`,
    `<section class="scb-cfg-step"><span class="scb-cfg-stepno">Step 7 of 11</span><h2>Finish and colour</h2><p>Pick one hero finish and let the rest of the box stay quiet. Laminations complicate recycling, so we will flag the trade-off if it matters to you.</p>${group('finish', FINISHES, p)}${colourField(p)}${nav(true, true)}</section>`,
    `<section class="scb-cfg-step"><span class="scb-cfg-stepno">Step 8 of 11</span><h2>Artwork</h2><p>Dieline preparation, artwork setup and a print-ready proof are included with every order. Tell us where you are and we will pick it up from there.</p>${group('artwork_status', ARTWORK, p)}${artworkField(p)}${nav(true, true)}</section>`,
    `<section class="scb-cfg-step"><span class="scb-cfg-stepno">Step 9 of 11</span><h2>Anything else we should know</h2><p>Product weight, a launch date, an existing box you want matched, a retailer specification — anything here saves a round of questions.</p>${notesField(p)}${nav(true, true)}</section>`,
    `<section class="scb-cfg-step"><span class="scb-cfg-stepno">Step 10 of 11</span><h2>Where should we send the quote?</h2><p>A packaging specialist replies with pricing, board options and a lead time — usually within one working day.</p>${contactFields(p)}${nav(true, true)}</section>`,
    `<section class="scb-cfg-step"><span class="scb-cfg-stepno">Step 11 of 11</span><h2>Review and send</h2><p>This is what we will receive. Use Back to change anything before you send it.</p>${submitBlock(p, true)}</section>`,
  ];

  return `<div class="scb-cfg${compact ? ' scb-cfg-compact' : ''}">
    <div class="scb-cfg-grid">
      <div>
        <div class="scb-cfg-progress">
          <div class="scb-cfg-bar"><span></span></div>
          <ol class="scb-cfg-steps">${names.map((name) => `<li data-state="todo">${esc(name)}</li>`).join('')}</ol>
        </div>
        <form name="Design Your Box${productName ? ` — ${esc(productName)}` : ''}" aria-label="Design your box configurator" method="post" enctype="multipart/form-data">
          ${productField}
          ${steps.join('')}
          <div class="scb-cfg-nav scb-cfg-nav-static"><button type="submit" class="scb-cfg-submit">Send my specification</button></div>
        </form>
      </div>
      <aside class="scb-cfg-aside">
        <h2>Your box so far</h2>
        <div class="scb-cfg-preview"></div>
        <ul class="scb-cfg-summary"><li><span class="k">Nothing selected yet</span></li></ul>
      </aside>
    </div>
  </div>`;
}
