// Shared bilingual content schema for the Human Spiritual Universe atlas.

export interface BiText {
  en: string;
  zh: string;
}

export interface Card {
  icon?: string;            // a single glyph/emoji or short symbol
  title: BiText;
  body: BiText;
}

export interface QA {
  q: BiText;
  a: BiText;
}

export interface VizNode {
  label: BiText;
  group?: string;           // cluster / family
  note?: BiText;            // shown on hover/select
  year?: number;            // for timelines (negative = BCE)
}

export type VizKind =
  | "constellation"         // star-map of nodes (belief map, deity atlas, spirit map, mythology)
  | "timeline"              // chronological eras
  | "comparison"            // compare traditions across a question
  | "cards"                 // plain card grid (no canvas)
  | "none";

export interface Section {
  id: string;               // slug, e.g. "monotheism"
  num: number;              // section number for display
  kicker: BiText;           // small label above title
  title: BiText;            // section title
  lead: BiText;             // one-paragraph framing
  body: BiText[];           // 2–5 paragraphs of substance
  cards: Card[];            // traditions / concepts / figures
  questions?: QA[];         // big questions explored
  viz: VizKind;
  vizTitle?: BiText;        // label for the interactive
  vizData?: VizNode[];      // nodes/items for the viz
  comparison?: {            // for viz === "comparison"
    dimensions: BiText[];   // rows (e.g. traditions)
    aspect: BiText;         // what is being compared
    cells: BiText[];        // one per dimension, aligned
  };
  quote?: { text: BiText; attr: BiText };
  accent: string;           // hex accent for this section
}
