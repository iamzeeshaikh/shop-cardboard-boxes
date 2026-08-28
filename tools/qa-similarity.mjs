/**
 * Content similarity QA for the authored page sets.
 *
 * Location, resource and category pages are the ones at risk of reading as one
 * template with the nouns swapped, so this measures exactly that: shared headings,
 * near-identical paragraphs, repeated opening sentences, repeated FAQ questions,
 * repeated calls to action and repeated section sequences.
 */
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const BASE = process.env.QA_BASE || 'http://127.0.0.1:4333';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].replace('https://shopcardboardboxes.com', ''));

const SETS = {
  locations: paths.filter((p) => p.startsWith('/locations/') && p !== '/locations/'),
  resources: paths.filter((p) => p.startsWith('/resources/') && p !== '/resources/'),
  categories: paths.filter((p) => /^\/product-category\/[^/]+\/$/.test(p)),
};

const strip = (html) => html
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
  // Shared widgets are chrome, not content. The box builder alone contributes ~640
  // identical words to every page that carries it, which would otherwise read as
  // duplication between pages whose prose is entirely distinct. The widget nests its
  // own <section> elements, so match forward to the next sibling section instead.
  .replace(/<section class="scb-section scb-cfg-section">[\s\S]*?(?=<section class="scb-section|<div class="scb-cta|$)/gi, ' ')
  .replace(/<ul class="scb-navcards">[\s\S]*?<\/ul>/gi, ' ');

// Only the authored body, so shared header/footer chrome is not counted as duplication.
const mainOf = (html) => {
  const body = html.split('<body')[1] || '';
  const start = body.indexOf('<div class="site-content"');
  const end = body.lastIndexOf('scb-footer-extra');
  return strip(body.slice(start >= 0 ? start : 0, end > 0 ? end : body.length));
};

const text = (html) => html.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();

const shingles = (value, size = 6) => {
  const words = value.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + size <= words.length; i++) set.add(words.slice(i, i + size).join(' '));
  return set;
};

const jaccard = (a, b) => {
  if (!a.size || !b.size) return 0;
  let shared = 0;
  for (const value of a) if (b.has(value)) shared++;
  return shared / (a.size + b.size - shared);
};

const docs = {};
for (const [name, list] of Object.entries(SETS)) {
  docs[name] = [];
  for (const path of list) {
    const html = await (await fetch(`${BASE}${path}`)).text();
    const main = mainOf(html);
    const body = text(main);
    docs[name].push({
      path,
      words: body.split(' ').length,
      body,
      shingles: shingles(body),
      headings: [...main.matchAll(/<h([23])[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => text(m[2])).filter(Boolean),
      faqs: [...main.matchAll(/<summary>([\s\S]*?)<\/summary>/gi)].map((m) => text(m[1])),
      paragraphs: [...main.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map((m) => text(m[1])).filter((p) => p.split(' ').length > 8),
      firstSentence: (body.split(/(?<=[.?!])\s/)[0] || '').slice(0, 160),
    });
  }
}

const report = {};
for (const [name, list] of Object.entries(docs)) {
  const pairs = [];
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      pairs.push({ a: list[i].path, b: list[j].path, score: jaccard(list[i].shingles, list[j].shingles) });
    }
  }
  pairs.sort((x, y) => y.score - x.score);

  const headingCount = new Map();
  const faqCount = new Map();
  const paragraphCount = new Map();
  const openingCount = new Map();
  const sequenceCount = new Map();
  for (const doc of list) {
    new Set(doc.headings).forEach((h) => headingCount.set(h, (headingCount.get(h) || 0) + 1));
    new Set(doc.faqs).forEach((q) => faqCount.set(q, (faqCount.get(q) || 0) + 1));
    new Set(doc.paragraphs).forEach((p) => paragraphCount.set(p, (paragraphCount.get(p) || 0) + 1));
    openingCount.set(doc.firstSentence, (openingCount.get(doc.firstSentence) || 0) + 1);
    const sequence = doc.headings.join(' > ');
    sequenceCount.set(sequence, (sequenceCount.get(sequence) || 0) + 1);
  }

  const words = list.map((doc) => doc.words).sort((a, b) => a - b);
  report[name] = {
    pages: list.length,
    wordCount: { min: words[0], median: words[Math.floor(words.length / 2)], max: words[words.length - 1] },
    maxPairSimilarity: pairs[0]?.score ?? 0,
    medianPairSimilarity: pairs.length ? pairs[Math.floor(pairs.length / 2)].score : 0,
    pairsOver30: pairs.filter((p) => p.score > 0.30).length,
    pairsOver20: pairs.filter((p) => p.score > 0.20).length,
    topPairs: pairs.slice(0, 5),
    repeatedHeadings: [...headingCount].filter(([, n]) => n > 1).sort((a, b) => b[1] - a[1]).slice(0, 10),
    repeatedFaqQuestions: [...faqCount].filter(([, n]) => n > 1).sort((a, b) => b[1] - a[1]).slice(0, 10),
    repeatedParagraphs: [...paragraphCount].filter(([, n]) => n > 1).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([p, n]) => [p.slice(0, 110), n]),
    repeatedOpenings: [...openingCount].filter(([, n]) => n > 1).length,
    identicalHeadingSequences: [...sequenceCount].filter(([, n]) => n > 1).length,
    distinctHeadingSequences: sequenceCount.size,
  };
}

writeFileSync(resolve(root, 'analysis/qa-similarity.json'), JSON.stringify(report, null, 1));

for (const [name, data] of Object.entries(report)) {
  console.log(`\n=== ${name.toUpperCase()} (${data.pages} pages) ===`);
  console.log(`  words          min ${data.wordCount.min} / median ${data.wordCount.median} / max ${data.wordCount.max}`);
  console.log(`  similarity     max ${(data.maxPairSimilarity * 100).toFixed(1)}%  median ${(data.medianPairSimilarity * 100).toFixed(1)}%`);
  console.log(`  pairs >30%     ${data.pairsOver30}      pairs >20% ${data.pairsOver20}`);
  console.log(`  closest pairs:`);
  data.topPairs.forEach((p) => console.log(`     ${(p.score * 100).toFixed(1)}%  ${p.a}  vs  ${p.b}`));
  console.log(`  repeated H2/H3 across pages: ${data.repeatedHeadings.length}`);
  data.repeatedHeadings.slice(0, 6).forEach(([h, n]) => console.log(`     ×${n}  ${h.slice(0, 70)}`));
  console.log(`  repeated FAQ questions:      ${data.repeatedFaqQuestions.length}`);
  data.repeatedFaqQuestions.slice(0, 6).forEach(([q, n]) => console.log(`     ×${n}  ${q.slice(0, 70)}`));
  console.log(`  repeated paragraphs:         ${data.repeatedParagraphs.length}`);
  data.repeatedParagraphs.forEach(([p, n]) => console.log(`     ×${n}  ${p}`));
  console.log(`  identical opening sentences: ${data.repeatedOpenings}`);
  console.log(`  identical heading sequences: ${data.identicalHeadingSequences} (distinct sequences ${data.distinctHeadingSequences}/${data.pages})`);
}
