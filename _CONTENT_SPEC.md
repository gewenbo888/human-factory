# HUMAN FACTORY · 人类制造厂 — Content Spec for section files

You write `src/content/secNN.ts` files, each exporting a typed `Section`. The shell renders DATA — you
write content, not components. Tone: National-Geographic / Apple-keynote — cinematic, evidence-based,
educational. NOT self-help, NOT a psychology blog. Theme: how humans are made — the forces that
manufacture a person. For genetics/intelligence/success, carefully note limitations and uncertainty
(predispositions, not destiny; averages never predict an individual). Fully bilingual: natural English +
native 中文 in every field.

## The TypeScript shape (src/lib/types.ts)

import type { Section } from "@/lib/types";
const sec: Section = {
  id: "genetic-factory",        // slug = the assignment id (anchor); MUST match exactly
  num: 2,
  kicker: { en: "Factory 02 · Inheritance", zh: "工厂 02 · 遗传" },
  title: { en: "The Genetic Factory", zh: "基因工厂" },
  lead: { en: "One vivid framing sentence...", zh: "一句有力的引子……" },
  body: [ { en: "Paragraph...", zh: "段落……" } ],   // 3–5 substantial accurate paragraphs
  cards: [ { icon: "🧬", title: { en: "Heritability", zh: "遗传率" }, body: { en: "...", zh: "……" } } ], // 4–8
  questions: [ { q: { en: "...?", zh: "……？" }, a: { en: "...", zh: "……" } } ], // optional 0–3
  viz: "constellation",         // "constellation" | "timeline" | "comparison" | "cards" | "none"
  vizTitle: { en: "...", zh: "……" },
  vizData: [ { label: { en: "Chromosome 1", zh: "1号染色体" }, group: "Genome", note: { en: "...", zh: "..." }, year: 3 } ], // 8–14 nodes; constellation uses group+note; timeline needs year
  comparison: { aspect: { en: "...", zh: "……" }, dimensions: [ { en: "Finland", zh: "芬兰" } ], cells: [ { en: "...", zh: "..." } ] }, // ONLY for viz==="comparison"; cells SAME length as dimensions
  quote: { text: { en: "“...”", zh: "「……」" }, attr: { en: "— Source", zh: "— 出处" } }, // optional
  accent: "#4fd6c4",
};
export default sec;

## CRITICAL RULES
- File src/content/secNN.ts, `const sec: Section = {…}; export default sec;`. Match id/num/accent/viz to the assignment EXACTLY (ids are nav anchors).
- QUOTES: NEVER use a straight ASCII double-quote (") INSIDE any string value — it breaks the build. Use curly “ ” for English quotes and 「」 or “ ” for 中文. Apostrophes ' are fine.
- Bilingual everywhere; 中文 reads natively. Accurate; flag uncertainty for genetics/IQ/success.
- Valid TypeScript, single-line strings, ONLY the `import type { Section }` import. No JSX, no functions.
- vizData (8–14 nodes) for constellation/timeline; `comparison` object for comparison; omit for cards/none.

## ASSIGNMENTS (id · num · titles · viz · accent)
1. first-cell · 1 · The First Cell / 第一个细胞 · constellation (DNA explorer: chromosomes, genes, mitochondria, centromere, fertilization; show two people make a unique third) · #4fd6c4
2. genetic-factory · 2 · The Genetic Factory / 基因工厂 · cards (heritability, polygenic traits, intelligence WITH uncertainty, personality, predisposition≠destiny, gene×environment) · #6ee0a0
3. womb-factory · 3 · The Womb Factory / 子宫工厂 · timeline (prenatal: year=week number 1..40 — neural tube wk3, heartbeat wk6, senses, brain wiring, birth wk40) · #ff7a92
4. family-factory · 4 · The Family Factory / 家庭工厂 · cards (parents, siblings/birth order, parenting styles, family culture, family economics, attachment) · #e8b34a
5. language-factory · 5 · The Language Factory / 语言工厂 · constellation (critical period, mother tongue, writing systems, bilingual brain, cultural transmission; grouped) · #9b8cff
6. education-factory · 6 · The Education Factory / 教育工厂 · comparison (compare Finland / East Asia / USA / Germany dual-system; aspect = what the system optimizes) · #5fb0e6
7. culture-factory · 7 · The Culture Factory / 文化工厂 · cards (traditions, values, religion, customs, norms, individualism vs collectivism) · #e8b34a
8. geography-factory · 8 · The Geography Factory / 地理工厂 · comparison (how birthplace sets odds: compare country/city archetypes on life expectancy, schooling, income, infrastructure) · #5fb0e6
9. history-factory · 9 · The History Factory / 历史工厂 · timeline (birth-year changes destiny: year=1900 world wars, 1945 postwar boom, 1980 PC, 1995 internet, 2010 smartphone, 2023 AI) · #f0a04a
10. technology-factory · 10 · The Technology Factory / 技术工厂 · timeline (electricity 1880, radio/TV 1950, PC 1980, internet 1995, smartphone 2010, AI 2023 — how each rewires behavior; year) · #4fd6c4
11. social-factory · 11 · The Social Factory / 社会工厂 · constellation (friends, weak ties, communities, mentors, social capital; groups) · #ff7a92
12. information-factory · 12 · The Information Factory / 信息工厂 · cards (books, mass media, social media, algorithms, AI, filter bubbles — info diet shapes the person) · #9b8cff
13. money-factory · 13 · The Money Factory / 财富工厂 · comparison (class & mobility: compare low / middle / high starting wealth on opportunity, risk, networks, outcomes) · #e8b34a
14. decision-factory · 14 · The Decision Factory / 决策工厂 · cards (education, career, relationships, investments, migration — choices compound; small choices, large divergence) · #6ee0a0
15. luck-factory · 15 · The Luck Factory / 运气工厂 · cards (birth lottery, random encounters, timing, opportunity, chance vs effort) · #5fb0e6
16. brain-factory · 16 · The Brain Factory / 大脑工厂 · constellation (memory/hippocampus, emotion/amygdala, reward/dopamine, prefrontal control, habit/basal ganglia, neuroplasticity; group Systems) · #4fd6c4
17. identity-factory · 17 · The Identity Factory / 身份工厂 · cards (self-image, beliefs, values, goals, narrative identity — who are you?) · #9b8cff
18. success-factory · 18 · The Success Factory / 成功工厂 · comparison (why some achieve extraordinary outcomes: compare Talent / Effort / Opportunity / Networks / Timing — contribution & limits of each) · #e8b34a
19. future-factory · 19 · The Future Factory / 未来工厂 · constellation (AI tutors, brain-computer interfaces, genetic engineering, digital identities, lifelong learning; speculative, open) · #9b8cff
20. human-simulator · 20 · The Human Simulator / 人生模拟器 · none (an interactive simulator renders automatically below your text — DO NOT add vizData. Write kicker, title, lead, 3–4 body paragraphs: same starting conditions yield a RANGE of lives — structure sets the band, effort & luck place you within it; plus 3–4 cards on inputs: country, birth year, family income, education, AI access. Make the lead resonant — this is the climax.) · #f6cf86
