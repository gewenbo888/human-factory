"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/components/LangContext";

const STAGES = [
  { en: "Cell", zh: "细胞" },
  { en: "Embryo", zh: "胚胎" },
  { en: "Child", zh: "孩童" },
  { en: "Student", zh: "学生" },
  { en: "Adult", zh: "成人" },
  { en: "Citizen", zh: "公民" },
  { en: "Creator", zh: "创造者" },
  { en: "Civilization", zh: "文明" },
];

export default function Hero() {
  const { lang } = useLang();
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext("2d"); if (!ctx) return;
    let W = 0, H = 0, raf = 0, t = 0;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    type P = { a: number; r: number; sp: number; sz: number; c: string };
    let ps: P[] = [];
    const cols = ["rgba(79,214,196,", "rgba(232,179,74,", "rgba(155,140,255,", "rgba(234,240,247,"];
    function init() {
      W = cv!.width = cv!.clientWidth; H = cv!.height = cv!.clientHeight;
      const n = Math.min(240, Math.floor((W * H) / 7500));
      ps = [];
      for (let i = 0; i < n; i++) {
        ps.push({
          a: Math.random() * Math.PI * 2,
          r: Math.pow(Math.random(), 0.7) * Math.min(W, H) * 0.5,
          sp: (Math.random() < 0.5 ? -1 : 1) * (0.0004 + Math.random() * 0.0014),
          sz: Math.random() * 1.7 + 0.3,
          c: cols[Math.floor(Math.random() * cols.length)],
        });
      }
    }
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H / 2;
      t += 0.01;
      // central "cell" core that breathes
      const coreR = Math.min(W, H) * 0.05 * (1 + 0.12 * Math.sin(t));
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 6);
      cg.addColorStop(0, "rgba(232,179,74,0.5)");
      cg.addColorStop(0.4, "rgba(79,214,196,0.18)");
      cg.addColorStop(1, "rgba(79,214,196,0)");
      ctx.beginPath(); ctx.arc(cx, cy, coreR * 6, 0, Math.PI * 2); ctx.fillStyle = cg; ctx.fill();
      ctx.beginPath(); ctx.arc(cx, cy, coreR, 0, Math.PI * 2); ctx.fillStyle = "rgba(246,207,134,0.9)"; ctx.fill();
      // orbiting particles (the expanding factory)
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        if (!reduce) p.a += p.sp;
        const x = cx + Math.cos(p.a) * p.r;
        const y = cy + Math.sin(p.a) * p.r * 0.72;
        const alpha = 0.5 * (1 - p.r / (Math.min(W, H) * 0.55));
        ctx.beginPath(); ctx.arc(x, y, p.sz, 0, Math.PI * 2);
        ctx.fillStyle = p.c + Math.max(0.05, alpha).toFixed(3) + ")"; ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    }
    init(); draw();
    const onR = () => { init(); if (reduce) draw(); };
    window.addEventListener("resize", onR);
    const iv = reduce ? 0 : window.setInterval(() => setStage((s) => (s + 1) % STAGES.length), 1600);
    return () => { window.removeEventListener("resize", onR); cancelAnimationFrame(raf); if (iv) clearInterval(iv); };
  }, []);

  return (
    <section className="hero" id="top">
      <canvas className="hero-canvas" ref={ref} aria-hidden="true" />
      <div className="hero-inner">
        <div className="eyebrow">{lang === "zh" ? "人类发展模拟器 · 一座制造人的工厂" : "A Human Development Simulator · The Factory That Makes People"}</div>
        <h1>
          {lang === "zh" ? "人类制造厂" : "Human Factory"}
          <span className="zh">{lang === "zh" ? "Human Factory" : "人类制造厂"}</span>
        </h1>
        <div style={{ marginTop: 22, fontFamily: "var(--mono)", fontSize: 13, letterSpacing: ".18em", color: "var(--teal)", textTransform: "uppercase", minHeight: 20 }}>
          {lang === "zh" ? STAGES[stage].zh : STAGES[stage].en}
          <span style={{ color: "var(--ink-faint)" }}>{"  →  " + (lang === "zh" ? "人" : "Human")}</span>
        </div>
        <p className="tagline">
          {lang === "zh"
            ? "你并非由某一个决定塑造，而是由无数因素共同制造而成。"
            : "You are not the result of a single choice. You are the product of millions of interacting forces."}
        </p>
      </div>
      <div className="scrollcue">{lang === "zh" ? "向下滚动 ↓" : "SCROLL ↓"}</div>
    </section>
  );
}
