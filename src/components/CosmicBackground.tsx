"use client";
import { useEffect, useRef } from "react";

export default function CosmicBackground() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    let W = 0, H = 0, raf = 0;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    type Star = { x: number; y: number; r: number; tw: number; ph: number; c: string };
    let stars: Star[] = [];
    const palette = ["rgba(236,231,247,", "rgba(232,192,116,", "rgba(164,137,255,", "rgba(95,214,196,"];
    function rnd() { return Math.random(); }
    function init() {
      W = cv!.width = window.innerWidth;
      H = cv!.height = window.innerHeight;
      const n = Math.min(220, Math.floor((W * H) / 9000));
      stars = [];
      for (let i = 0; i < n; i++) {
        stars.push({
          x: rnd() * W, y: rnd() * H, r: rnd() * 1.5 + 0.3,
          tw: 0.002 + rnd() * 0.01, ph: rnd() * 6.28,
          c: palette[Math.floor(rnd() * palette.length)],
        });
      }
    }
    let frame = 0;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      frame++;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const a = reduce ? 0.7 : 0.35 + 0.45 * (0.5 + 0.5 * Math.sin(frame * s.tw + s.ph));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.c + a.toFixed(3) + ")";
        ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    }
    init();
    draw();
    const onR = () => { init(); if (reduce) draw(); };
    window.addEventListener("resize", onR);
    return () => { window.removeEventListener("resize", onR); cancelAnimationFrame(raf); };
  }, []);
  return <canvas id="cosmos" ref={ref} aria-hidden="true" />;
}
