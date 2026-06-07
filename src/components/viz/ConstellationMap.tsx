"use client";
import { useEffect, useRef, useState } from "react";
import type { VizNode } from "@/lib/types";
import { useLang } from "@/components/LangContext";

// A reusable star-map of nodes, clustered by `group`. Click a star to read its note.
export default function ConstellationMap({
  nodes,
  accent = "#e8c074",
}: {
  nodes: VizNode[];
  accent?: string;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const { t, lang } = useLang();
  const [sel, setSel] = useState<number>(-1);
  const posRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    let W = 0, H = 0, raf = 0;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const groups = Array.from(new Set(nodes.map((n) => n.group || "_")));
    function hash(i: number) { const x = Math.sin(i * 12.9898 + 4.1) * 43758.5453; return x - Math.floor(x); }

    function layout() {
      W = cv!.width = cv!.clientWidth;
      H = cv!.height = cv!.clientHeight;
      const cx = W / 2, cy = H / 2;
      const R = Math.min(W, H) * 0.36;
      const pos: { x: number; y: number }[] = [];
      nodes.forEach((n, i) => {
        const gi = groups.indexOf(n.group || "_");
        const ga = (gi / Math.max(1, groups.length)) * Math.PI * 2;
        const gcx = cx + Math.cos(ga) * R * (groups.length > 1 ? 0.62 : 0);
        const gcy = cy + Math.sin(ga) * R * (groups.length > 1 ? 0.62 : 0);
        const within = nodes.filter((m) => (m.group || "_") === (n.group || "_"));
        const wi = within.indexOf(n);
        const wa = (wi / Math.max(1, within.length)) * Math.PI * 2 + gi;
        const wr = R * (0.16 + 0.18 * hash(i + 7));
        let x = gcx + Math.cos(wa) * wr;
        let y = gcy + Math.sin(wa) * wr;
        x = Math.max(16, Math.min(W - 16, x));
        y = Math.max(16, Math.min(H - 16, y));
        if (isNaN(x) || isNaN(y)) { x = cx; y = cy; }
        pos.push({ x, y });
      });
      posRef.current = pos;
    }

    let frame = 0;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      const pos = posRef.current;
      frame++;
      // links within same group
      ctx.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if ((nodes[i].group || "_") !== (nodes[j].group || "_")) continue;
          const a = pos[i], b = pos[j];
          if (!a || !b) continue;
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > Math.min(W, H) * 0.3) continue;
          ctx.strokeStyle = "rgba(180,160,240,0.10)";
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      // nodes
      for (let i = 0; i < nodes.length; i++) {
        const p = pos[i];
        if (!p) continue;
        const tw = reduce ? 1 : 0.6 + 0.4 * (0.5 + 0.5 * Math.sin(frame * 0.03 + i));
        const isSel = i === sel;
        const r = (isSel ? 6 : 3.2) * (0.8 + 0.4 * tw);
        const gr = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
        gr.addColorStop(0, accent + "cc");
        gr.addColorStop(1, accent + "00");
        ctx.beginPath(); ctx.arc(p.x, p.y, r * 4, 0, Math.PI * 2); ctx.fillStyle = gr; ctx.fill();
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = isSel ? "#fff" : accent; ctx.fill();
        if (isSel || nodes.length <= 14) {
          ctx.font = (isSel ? "600 " : "400 ") + "12px 'Manrope',sans-serif";
          ctx.fillStyle = isSel ? "#fff" : "rgba(236,231,247,0.7)";
          ctx.textAlign = "center";
          const label = lang === "zh" ? nodes[i].label.zh : nodes[i].label.en;
          ctx.fillText(label, p.x, p.y - r - 6);
        }
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    }

    function onClick(e: MouseEvent) {
      const rect = cv!.getBoundingClientRect();
      const mx = e.clientX - rect.left, my = e.clientY - rect.top;
      const pos = posRef.current;
      let best = -1, bd = 1e9;
      for (let i = 0; i < pos.length; i++) {
        const d = Math.hypot(pos[i].x - mx, pos[i].y - my);
        if (d < bd) { bd = d; best = i; }
      }
      if (bd < 30) setSel(best);
    }

    layout(); draw();
    cv.addEventListener("click", onClick);
    const onR = () => { layout(); if (reduce) draw(); };
    window.addEventListener("resize", onR);
    return () => { cv.removeEventListener("click", onClick); window.removeEventListener("resize", onR); cancelAnimationFrame(raf); };
  }, [nodes, accent, sel, lang]);

  const node = sel >= 0 ? nodes[sel] : null;
  return (
    <>
      <div className="viz-stage" style={{ height: 420 }}>
        <canvas ref={ref} style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="viz-readout">
        {node ? (
          <>
            <b>{t(node.label)}</b>
            {node.note ? " — " + t(node.note) : ""}
          </>
        ) : (
          <span style={{ color: "var(--ink-faint)" }}>
            {lang === "zh" ? "点击任意星辰，探索其含义。" : "Click any star to explore what it holds."}
          </span>
        )}
      </div>
    </>
  );
}
