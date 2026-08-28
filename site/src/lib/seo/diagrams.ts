/**
 * Inline SVG diagrams for the resource articles. They are drawn rather than
 * photographed because the point is the geometry, and inline SVG costs no extra
 * request, scales cleanly and stays legible when a page is printed.
 */

const FIG = (title: string, caption: string, svg: string): string =>
  `<figure class="scb-figure" role="group" aria-label="${title}">${svg}<figcaption>${caption}</figcaption></figure>`;

const S = {
  ink: '#23262b',
  blue: '#0b3f74',
  gold: '#f4a62a',
  line: '#94a3b5',
  face: '#f0f4f9',
  faceDark: '#dbe5ef',
  muted: '#6b7480',
};

/** Length, width and height on an open box, with the convention labelled. */
export const boxDimensions = (): string => FIG(
  'How length, width and height are measured on a cardboard box',
  'Length is the longer side of the opening, width the shorter. Height is measured from the base to the top of the opening, ignoring the flaps.',
  `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg">
    <title>Box dimension convention</title>
    <desc>An open-topped box with the longer opening edge labelled length, the shorter edge labelled width, and the vertical side labelled height.</desc>
    <polygon points="120,120 320,120 400,80 200,80" fill="${S.face}" stroke="${S.line}" stroke-width="2"/>
    <polygon points="120,120 320,120 320,230 120,230" fill="${S.faceDark}" stroke="${S.line}" stroke-width="2"/>
    <polygon points="320,120 400,80 400,190 320,230" fill="#c8d6e4" stroke="${S.line}" stroke-width="2"/>
    <line x1="120" y1="250" x2="320" y2="250" stroke="${S.blue}" stroke-width="2"/>
    <path d="M120 245v10M320 245v10" stroke="${S.blue}" stroke-width="2"/>
    <text x="220" y="272" text-anchor="middle" font-size="15" font-weight="700" fill="${S.blue}">Length</text>
    <line x1="336" y1="240" x2="414" y2="200" stroke="${S.blue}" stroke-width="2"/>
    <path d="M332 233l8 14M410 193l8 14" stroke="${S.blue}" stroke-width="2"/>
    <text x="392" y="252" text-anchor="middle" font-size="15" font-weight="700" fill="${S.blue}">Width</text>
    <line x1="96" y1="120" x2="96" y2="230" stroke="${S.gold}" stroke-width="2"/>
    <path d="M91 120h10M91 230h10" stroke="${S.gold}" stroke-width="2"/>
    <text x="86" y="180" text-anchor="end" font-size="15" font-weight="700" fill="#a8710f">Height</text>
    <text x="260" y="104" text-anchor="middle" font-size="12" fill="${S.muted}">measure the opening, not the flaps</text>
  </svg>`,
);

/** Single, double and triple wall shown as board cross-sections. */
export const wallConstructions = (): string => {
  const wave = (x: number, y: number, w: number) => {
    let d = `M${x} ${y}`;
    for (let i = 0; i < w; i += 16) d += ` q4 -9 8 0 q4 9 8 0`;
    return `<path d="${d}" fill="none" stroke="${S.gold}" stroke-width="2"/>`;
  };
  const liner = (x: number, y: number, w: number) => `<rect x="${x}" y="${y}" width="${w}" height="5" fill="${S.blue}"/>`;
  return FIG(
    'Cross-sections of single, double and triple wall corrugated board',
    'Each fluted layer adds a cushion and a stacking gain. The liners carry the compression; the flutes stop the liners buckling into each other.',
    `<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg">
      <title>Single, double and triple wall board</title>
      <desc>Three board cross-sections. Single wall has one fluted layer between two liners, double wall has two fluted layers and three liners, triple wall has three fluted layers and four liners.</desc>
      <text x="20" y="26" font-size="14" font-weight="700" fill="${S.ink}">Single wall — 32 ECT</text>
      ${liner(20, 34, 200)}${wave(20, 46, 200)}${liner(20, 52, 200)}
      <text x="240" y="52" font-size="12" fill="${S.muted}">up to about 20 lb</text>
      <text x="20" y="106" font-size="14" font-weight="700" fill="${S.ink}">Double wall — 48 ECT</text>
      ${liner(20, 114, 200)}${wave(20, 126, 200)}${liner(20, 132, 200)}${wave(20, 144, 200)}${liner(20, 150, 200)}
      <text x="240" y="138" font-size="12" fill="${S.muted}">30–65 lb, palletised freight</text>
      <text x="20" y="196" font-size="14" font-weight="700" fill="${S.ink}">Triple wall — 90+ ECT</text>
      ${liner(20, 204, 200)}${wave(20, 216, 200)}${liner(20, 222, 200)}
      <rect x="20" y="228" width="200" height="5" fill="${S.blue}"/>
      <text x="240" y="222" font-size="12" fill="${S.muted}">65–300 lb, industrial and export</text>
    </svg>`,
  );
};

/** Flute profiles at relative scale. */
export const fluteProfiles = (): string => {
  const profile = (x: number, y: number, amplitude: number, period: number, label: string, note: string) => {
    let d = `M${x} ${y}`;
    for (let i = 0; i < 150; i += period) d += ` q${period / 4} -${amplitude} ${period / 2} 0 q${period / 4} ${amplitude} ${period / 2} 0`;
    return `<text x="${x}" y="${y - amplitude - 12}" font-size="13" font-weight="700" fill="${S.ink}">${label}</text>
      <path d="${d}" fill="none" stroke="${S.gold}" stroke-width="2"/>
      <rect x="${x}" y="${y - amplitude - 6}" width="150" height="3" fill="${S.blue}"/>
      <rect x="${x}" y="${y + 3}" width="150" height="3" fill="${S.blue}"/>
      <text x="${x + 162}" y="${y + 4}" font-size="12" fill="${S.muted}">${note}</text>`;
  };
  return FIG(
    'Relative flute profiles for A, B, C, E and F flute',
    'Taller flutes cushion better and stack higher. Finer flutes give a smoother surface for printing and fold more cleanly on small cartons.',
    `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg">
      <title>Corrugated flute profiles compared</title>
      <desc>Five flute profiles drawn at relative scale, from the tall coarse A flute down to the very fine F flute.</desc>
      ${profile(20, 40, 11, 30, 'A flute — 5 mm', 'best cushioning, coarsest surface')}
      ${profile(20, 105, 7, 22, 'C flute — 4 mm', 'the general-purpose shipping flute')}
      ${profile(20, 165, 5, 16, 'B flute — 3 mm', 'strong, prints acceptably, folds well')}
      ${profile(20, 220, 3, 10, 'E flute — 1.5 mm', 'retail cartons, good print surface')}
      ${profile(20, 268, 2, 7, 'F flute — 0.8 mm', 'small premium cartons, finest surface')}
    </svg>`,
  );
};

/** Four common box styles as flat outlines. */
export const boxStyles = (): string => FIG(
  'Four common cardboard box styles',
  'A regular slotted carton needs tape; a mailer closes on itself; a tuck-end carton suits retail; a rigid two-piece box does not fold flat at all.',
  `<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
    <title>Regular slotted carton, mailer, tuck-end carton and rigid box</title>
    <desc>Four outline drawings showing how each box style closes.</desc>
    <g stroke="${S.line}" stroke-width="2" fill="${S.face}">
      <rect x="20" y="60" width="90" height="80" rx="2"/>
      <path d="M20 60h90M20 100h90" stroke-dasharray="5 4"/>
      <rect x="150" y="60" width="90" height="80" rx="2"/>
      <path d="M150 60q45 -26 90 0" fill="#e7eef6"/>
      <rect x="280" y="60" width="90" height="80" rx="2"/>
      <path d="M280 60h90" stroke-dasharray="5 4"/>
      <path d="M296 60v-16h58v16" fill="#e7eef6"/>
      <rect x="410" y="72" width="90" height="68" rx="2"/>
      <rect x="404" y="56" width="102" height="20" rx="2" fill="#c8d6e4"/>
    </g>
    <g font-size="12.5" font-weight="700" fill="${S.blue}" text-anchor="middle">
      <text x="65" y="164">Regular slotted</text><text x="65" y="180" font-weight="400" fill="${S.muted}">flaps meet, needs tape</text>
      <text x="195" y="164">Mailer</text><text x="195" y="180" font-weight="400" fill="${S.muted}">hinged lid, no tape</text>
      <text x="325" y="164">Tuck end</text><text x="325" y="180" font-weight="400" fill="${S.muted}">retail carton</text>
      <text x="455" y="164">Rigid</text><text x="455" y="180" font-weight="400" fill="${S.muted}">lid and base, ships made up</text>
    </g>
  </svg>`,
);

/** Void versus fitted insert. */
export const fitComparison = (): string => FIG(
  'An oversized box with void fill compared with a fitted insert',
  'The same product in a box sized to it. The fitted version costs less to ship because carriers bill on volume, and it fails less often because nothing moves.',
  `<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
    <title>Void fill compared with a fitted insert</title>
    <desc>Left: a small product loose inside a large box surrounded by filler. Right: the same product held by a die-cut insert in a box barely larger than it.</desc>
    <rect x="30" y="40" width="180" height="140" fill="${S.face}" stroke="${S.line}" stroke-width="2"/>
    <g fill="#e2e8f0"><circle cx="60" cy="70" r="13"/><circle cx="96" cy="60" r="11"/><circle cx="170" cy="72" r="12"/><circle cx="60" cy="150" r="12"/><circle cx="180" cy="150" r="13"/><circle cx="130" cy="60" r="10"/></g>
    <rect x="96" y="96" width="52" height="42" fill="${S.gold}" stroke="#b8801d" stroke-width="2"/>
    <text x="120" y="204" text-anchor="middle" font-size="13" font-weight="700" fill="#8e1f1f">Oversized + void fill</text>
    <rect x="300" y="72" width="90" height="76" fill="${S.face}" stroke="${S.line}" stroke-width="2"/>
    <rect x="310" y="82" width="70" height="56" fill="#dbe5ef" stroke="${S.line}" stroke-width="1.5"/>
    <rect x="319" y="89" width="52" height="42" fill="${S.gold}" stroke="#b8801d" stroke-width="2"/>
    <text x="345" y="204" text-anchor="middle" font-size="13" font-weight="700" fill="#185f31">Fitted insert</text>
    <text x="345" y="60" text-anchor="middle" font-size="12" fill="${S.muted}">same product, 62% less volume</text>
  </svg>`,
);
