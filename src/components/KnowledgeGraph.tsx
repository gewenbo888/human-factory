"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/components/LangContext";

type N = { id: string; en: string; zh: string; g: string; note_en: string; note_zh: string };
const GROUPS: Record<string, string> = {
  self: "#f6cf86", innate: "#4fd6c4", nurture: "#9b8cff", world: "#5fb0e6", agency: "#ff7a92",
};
const NODES: N[] = [
  { id: "you", en: "You", zh: "你", g: "self", note_en: "The meeting point of every force below — never a single cause.", note_zh: "以下每一种力量的交汇点——从来不是单一原因。" },
  { id: "genes", en: "Genes", zh: "基因", g: "innate", note_en: "The starting code — predispositions, not destiny.", note_zh: "起始的代码——是倾向，而非定局。" },
  { id: "womb", en: "Womb", zh: "子宫", g: "innate", note_en: "Prenatal environment shapes the earliest brain.", note_zh: "产前环境塑造最初的大脑。" },
  { id: "brain", en: "Brain", zh: "大脑", g: "innate", note_en: "The organ where every input becomes memory and habit.", note_zh: "每一份输入在此化为记忆与习惯的器官。" },
  { id: "family", en: "Family", zh: "家庭", g: "nurture", note_en: "The first world — language, attachment, expectations.", note_zh: "最初的世界——语言、依恋与期望。" },
  { id: "language", en: "Language", zh: "语言", g: "nurture", note_en: "The software of thought, installed before memory.", note_zh: "思维的软件，在记忆之前便已安装。" },
  { id: "education", en: "Education", zh: "教育", g: "nurture", note_en: "Formal sculpting of knowledge and skill.", note_zh: "对知识与技能的系统性雕琢。" },
  { id: "culture", en: "Culture", zh: "文化", g: "nurture", note_en: "The invisible operating system of values.", note_zh: "价值观那看不见的操作系统。" },
  { id: "geography", en: "Geography", zh: "地理", g: "world", note_en: "Birthplace silently sets the odds.", note_zh: "出生地无声地设定了概率。" },
  { id: "history", en: "History", zh: "历史", g: "world", note_en: "Your birth year hands you a different world.", note_zh: "你的出生年份，递给你一个不同的世界。" },
  { id: "technology", en: "Technology", zh: "技术", g: "world", note_en: "Each tool rewires attention and possibility.", note_zh: "每一种工具都重塑注意力与可能性。" },
  { id: "society", en: "Society", zh: "社会", g: "world", note_en: "Networks, institutions, and social capital.", note_zh: "网络、制度与社会资本。" },
  { id: "money", en: "Money", zh: "财富", g: "world", note_en: "Class quietly widens or narrows the path.", note_zh: "阶层悄然拓宽或收窄道路。" },
  { id: "information", en: "Information", zh: "信息", g: "world", note_en: "What you consume becomes how you think.", note_zh: "你所摄取的，成为你思考的方式。" },
  { id: "decisions", en: "Decisions", zh: "决策", g: "agency", note_en: "Small choices compound across decades.", note_zh: "微小的选择在数十年间复利累积。" },
  { id: "luck", en: "Luck", zh: "运气", g: "agency", note_en: "Timing and chance encounters bend the line.", note_zh: "时机与偶遇，弯折了人生的轨迹。" },
  { id: "identity", en: "Identity", zh: "身份", g: "agency", note_en: "The story you tell about yourself.", note_zh: "你为自己讲述的那个故事。" },
];
const EDGES: [string, string][] = [
  ["genes", "you"], ["womb", "you"], ["brain", "you"], ["family", "you"], ["language", "you"],
  ["education", "you"], ["culture", "you"], ["geography", "you"], ["history", "you"], ["technology", "you"],
  ["society", "you"], ["money", "you"], ["information", "you"], ["decisions", "you"], ["luck", "you"], ["identity", "you"],
  ["genes", "brain"], ["womb", "brain"], ["family", "language"], ["family", "money"], ["family", "education"],
  ["culture", "language"], ["culture", "identity"], ["geography", "money"], ["geography", "culture"],
  ["history", "technology"], ["technology", "information"], ["society", "money"], ["society", "luck"],
  ["education", "decisions"], ["information", "identity"], ["decisions", "identity"], ["money", "education"],
];

export default function KnowledgeGraph() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const { lang } = useLang();
  const [sel, setSel] = useState<string | null>(null);
  const posRef = useRef<Record<string, { x: number; y: number }>>({});

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext("2d"); if (!ctx) return;
    let W = 0, H = 0, raf = 0;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function hash(s: string) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return (h % 1000) / 1000; }
    function layout() {
      W = cv!.width = cv!.clientWidth; H = cv!.height = cv!.clientHeight;
      const cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.42;
      const pos: Record<string, { x: number; y: number }> = {};
      const ring = NODES.filter((n) => n.id !== "you");
      pos["you"] = { x: cx, y: cy };
      ring.forEach((n, i) => {
        const a = (i / ring.length) * Math.PI * 2 - Math.PI / 2;
        let x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R * 0.92;
        x = Math.max(20, Math.min(W - 20, x)); y = Math.max(20, Math.min(H - 20, y));
        pos[n.id] = { x, y };
      });
      posRef.current = pos;
    }
    const neigh = new Set<string>();
    if (sel) { neigh.add(sel); EDGES.forEach(([a, b]) => { if (a === sel) neigh.add(b); if (b === sel) neigh.add(a); }); }
    let frame = 0;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H); frame++;
      const pos = posRef.current;
      EDGES.forEach(([a, b]) => {
        const pa = pos[a], pb = pos[b]; if (!pa || !pb) return;
        const hot = sel && (a === sel || b === sel);
        ctx.strokeStyle = hot ? "rgba(232,179,74,0.5)" : "rgba(120,180,210,0.08)";
        ctx.lineWidth = hot ? 1.4 : 0.6;
        ctx.beginPath(); ctx.moveTo(pa.x, pa.y); ctx.lineTo(pb.x, pb.y); ctx.stroke();
      });
      NODES.forEach((n) => {
        const p = pos[n.id]; if (!p) return;
        const col = GROUPS[n.g] || "#e8b34a";
        const dim = sel && !neigh.has(n.id);
        const tw = reduce ? 1 : 0.7 + 0.3 * (0.5 + 0.5 * Math.sin(frame * 0.03 + hash(n.id) * 6));
        const isYou = n.id === "you";
        const r = (n.id === sel ? 8 : isYou ? 9 : 5) * (0.85 + 0.3 * tw);
        ctx.globalAlpha = dim ? 0.22 : 1;
        const gr = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
        gr.addColorStop(0, col + "cc"); gr.addColorStop(1, col + "00");
        ctx.beginPath(); ctx.arc(p.x, p.y, r * 4, 0, Math.PI * 2); ctx.fillStyle = gr; ctx.fill();
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fillStyle = n.id === sel || isYou ? "#fff" : col; ctx.fill();
        if (n.id === sel || !sel || isYou) {
          ctx.font = (isYou ? "600 13px " : "400 11px ") + "'Manrope',sans-serif";
          ctx.fillStyle = isYou ? "#fff" : "rgba(234,240,247,0.78)"; ctx.textAlign = "center";
          ctx.fillText(lang === "zh" ? n.zh : n.en, p.x, p.y - r - 5);
        }
        ctx.globalAlpha = 1;
      });
      if (!reduce) raf = requestAnimationFrame(draw);
    }
    function onClick(e: MouseEvent) {
      const rect = cv!.getBoundingClientRect();
      const mx = e.clientX - rect.left, my = e.clientY - rect.top;
      const pos = posRef.current; let best: string | null = null, bd = 1e9;
      NODES.forEach((n) => { const p = pos[n.id]; if (!p) return; const d = Math.hypot(p.x - mx, p.y - my); if (d < bd) { bd = d; best = n.id; } });
      setSel(bd < 28 ? best : null);
    }
    layout(); draw();
    cv.addEventListener("click", onClick);
    const onR = () => { layout(); if (reduce) draw(); };
    window.addEventListener("resize", onR);
    return () => { cv.removeEventListener("click", onClick); window.removeEventListener("resize", onR); cancelAnimationFrame(raf); };
  }, [sel, lang]);

  const node = sel ? NODES.find((n) => n.id === sel) : null;
  const links = sel ? EDGES.filter(([a, b]) => a === sel || b === sel).length : 0;
  return (
    <>
      <div className="viz-stage" style={{ height: 560 }}>
        <canvas ref={ref} style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="viz-readout">
        {node ? (
          <>
            <b>{lang === "zh" ? node.zh : node.en}</b> — {lang === "zh" ? node.note_zh : node.note_en}{" "}
            <span style={{ color: "var(--ink-faint)" }}>({links} {lang === "zh" ? "条联结" : "links"})</span>
          </>
        ) : (
          <span style={{ color: "var(--ink-faint)" }}>
            {lang === "zh" ? "点击任意力量，看它如何连向「你」，又如何彼此牵动。" : "Click any force to see how it connects to 'You' — and to every other force."}
          </span>
        )}
      </div>
    </>
  );
}
