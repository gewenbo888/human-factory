"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/components/LangContext";

type Opt = { en: string; zh: string; v: number };
const COUNTRY: Opt[] = [
  { en: "Developing economy", zh: "发展中经济体", v: 0.3 },
  { en: "Emerging economy", zh: "新兴经济体", v: 0.6 },
  { en: "Developed economy", zh: "发达经济体", v: 0.85 },
];
const LEVEL: Opt[] = [
  { en: "Low", zh: "低", v: 0.3 },
  { en: "Middle", zh: "中", v: 0.6 },
  { en: "High", zh: "高", v: 0.9 },
];
const AI: Opt[] = [
  { en: "None", zh: "无", v: 0.2 },
  { en: "Some", zh: "部分", v: 0.55 },
  { en: "Full", zh: "充分", v: 0.95 },
];

function Picker({ label, opts, idx, set }: { label: { en: string; zh: string }; opts: Opt[]; idx: number; set: (i: number) => void }) {
  const { lang } = useLang();
  return (
    <div className="field" style={{ minWidth: 180 }}>
      <label>{lang === "zh" ? label.zh : label.en}</label>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {opts.map((o, i) => (
          <button key={i} className={"chip" + (i === idx ? " on" : "")} onClick={() => set(i)}>
            {lang === "zh" ? o.zh : o.en}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function HumanSimulator() {
  const { lang } = useLang();
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [country, setCountry] = useState(1);
  const [income, setIncome] = useState(1);
  const [edu, setEdu] = useState(1);
  const [skills, setSkills] = useState(1);
  const [ai, setAi] = useState(1);
  const [year, setYear] = useState(2000);
  const [run, setRun] = useState(0);

  // deterministic pseudo-random seeded by inputs + run
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext("2d"); if (!ctx) return;
    let W = 0, H = 0;
    function size() { W = cv!.width = cv!.clientWidth; H = cv!.height = cv!.clientHeight; }
    const base = (COUNTRY[country].v * 0.28 + LEVEL[income].v * 0.20 + LEVEL[edu].v * 0.24 + LEVEL[skills].v * 0.18 + AI[ai].v * 0.10);
    const yearBoost = Math.max(0, Math.min(0.12, (year - 1960) / 600));
    function rng(seed: number) { let s = seed; return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      const padL = 40, padB = 28, padT = 18, padR = 14;
      const x0 = padL, x1 = W - padR, y0 = H - padB, y1 = padT;
      // axes
      ctx.strokeStyle = "rgba(150,200,230,0.18)"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y0); ctx.moveTo(x0, y0); ctx.lineTo(x0, y1); ctx.stroke();
      ctx.fillStyle = "rgba(234,240,247,0.4)"; ctx.font = "10px 'IBM Plex Mono',monospace";
      ctx.fillText(lang === "zh" ? "出生" : "birth", x0, y0 + 16);
      ctx.fillText("80", x1 - 14, y0 + 16);
      ctx.save(); ctx.translate(12, (y0 + y1) / 2); ctx.rotate(-Math.PI / 2);
      ctx.fillText(lang === "zh" ? "人生境遇指数" : "life-outcome index", -40, 0); ctx.restore();
      const ages = 64;
      const lines = 14;
      const finals: number[] = [];
      for (let k = 0; k < lines; k++) {
        const r = rng(1000 + k * 131 + run * 17 + country * 7 + income * 11 + edu * 13 + skills * 19 + ai * 23 + year);
        let v = 0.12 + base * 0.2;
        ctx.beginPath();
        for (let a = 0; a <= ages; a++) {
          // growth toward a ceiling set by structural inputs, plus luck shocks
          const ceiling = Math.min(0.98, base + yearBoost);
          const effort = LEVEL[skills].v * 0.012;
          const luck = (r() - 0.5) * 0.06 * (0.5 + AI[ai].v); // luck amplified by access
          v = Math.max(0.02, Math.min(1, v + (ceiling - v) * 0.05 + effort * (r() * 0.8 + 0.2) + luck));
          const px = x0 + (a / ages) * (x1 - x0);
          const py = y0 - v * (y0 - y1);
          if (a === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        finals.push(v);
        const hue = k % 3 === 0 ? "rgba(79,214,196," : k % 3 === 1 ? "rgba(232,179,74," : "rgba(155,140,255,";
        ctx.strokeStyle = hue + "0.5)"; ctx.lineWidth = 1.2; ctx.stroke();
      }
      finals.sort((a, b) => a - b);
      const lo = finals[1], hi = finals[finals.length - 2], med = finals[Math.floor(finals.length / 2)];
      (cv as any)._stats = { lo, hi, med };
    }
    size(); draw();
    const onR = () => { size(); draw(); };
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, [country, income, edu, skills, ai, year, run, lang]);

  const cv = ref.current as any;
  const st = cv && cv._stats ? cv._stats : { lo: 0, hi: 0, med: 0 };
  const pct = (x: number) => Math.round(x * 100);
  return (
    <div className="viz" style={{ marginTop: 36 }}>
      <div className="viz-head">
        <div className="viz-title">{lang === "zh" ? "人生模拟器" : "The Human Simulator"}</div>
        <div className="viz-hint">{lang === "zh" ? "调整起点，生成多条人生轨迹" : "set the starting conditions, generate many lives"}</div>
      </div>
      <div className="viz-stage" style={{ height: 360 }}>
        <canvas ref={ref} style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="viz-controls" style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 16 }}>
        <Picker label={{ en: "Country", zh: "国家" }} opts={COUNTRY} idx={country} set={setCountry} />
        <Picker label={{ en: "Family income", zh: "家庭收入" }} opts={LEVEL} idx={income} set={setIncome} />
        <Picker label={{ en: "Education", zh: "教育" }} opts={LEVEL} idx={edu} set={setEdu} />
        <Picker label={{ en: "Skills / effort", zh: "技能 / 努力" }} opts={LEVEL} idx={skills} set={setSkills} />
        <Picker label={{ en: "AI access", zh: "AI 可及性" }} opts={AI} idx={ai} set={setAi} />
        <div className="field" style={{ minWidth: 200 }}>
          <label>{lang === "zh" ? `出生年份：${year}` : `Birth year: ${year}`}</label>
          <input className="range" type="range" min={1960} max={2025} value={year} onChange={(e) => setYear(parseInt(e.target.value))} />
        </div>
        <div className="field" style={{ minWidth: 120, justifyContent: "flex-end" }}>
          <button className="chip on" onClick={() => setRun((r) => r + 1)}>{lang === "zh" ? "↻ 重新生成" : "↻ Re-roll luck"}</button>
        </div>
      </div>
      <div className="viz-readout">
        {lang === "zh" ? (
          <>
            <b>同一起点，不同人生。</b> 在这些条件下，模拟出的人生境遇指数从约 <b>{pct(st.lo)}</b> 到 <b>{pct(st.hi)}</b> 不等，中位约 <b>{pct(st.med)}</b>。结构（国家、家庭、教育）设定了大致区间，而努力与运气决定你落在区间的哪个位置——也正因如此，结果从来无法被单一因素决定。
          </>
        ) : (
          <>
            <b>Same start, different lives.</b> Under these conditions, simulated life-outcome scores range from about <b>{pct(st.lo)}</b> to <b>{pct(st.hi)}</b>, with a median near <b>{pct(st.med)}</b>. Structure (country, family, education) sets the band; effort and luck decide where in the band you land — which is exactly why no single force determines the result.
          </>
        )}
      </div>
    </div>
  );
}
