"use client";
import { useEffect, useRef } from "react";
import type { Section as Sec } from "@/lib/types";
import { useLang } from "@/components/LangContext";
import ConstellationMap from "@/components/viz/ConstellationMap";
import Timeline from "@/components/viz/Timeline";
import HumanSimulator from "@/components/HumanSimulator";

function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("in"); return; }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function Section({ s }: { s: Sec }) {
  const { t, lang } = useLang();
  const ref = useReveal();
  return (
    <section className="section" id={s.id} ref={ref as any} style={{ ["--ac" as any]: s.accent }}>
      <div className="reveal">
        <div className="sec-kicker">{t(s.kicker)}</div>
        <h2 className="sec-title">
          {lang === "zh" ? s.title.zh : s.title.en}
          <span className="zh">{lang === "zh" ? s.title.en : s.title.zh}</span>
        </h2>
        <p className="sec-lead">{t(s.lead)}</p>
      </div>

      {s.body.length > 0 && (
        <div className="sec-body reveal">
          {s.body.map((p, i) => (
            <p key={i}>{t(p)}</p>
          ))}
        </div>
      )}

      {s.id === "human-simulator" && <HumanSimulator />}

      {s.viz === "constellation" && s.vizData && s.vizData.length > 0 && (
        <div className="viz reveal">
          <div className="viz-head">
            <div className="viz-title">{t(s.vizTitle) || (lang === "zh" ? "星图" : "Star Map")}</div>
            <div className="viz-hint">{lang === "zh" ? "点击星辰" : "click the stars"}</div>
          </div>
          <ConstellationMap nodes={s.vizData} accent={s.accent} />
        </div>
      )}

      {s.viz === "timeline" && s.vizData && s.vizData.length > 0 && (
        <div className="viz reveal">
          <div className="viz-head">
            <div className="viz-title">{t(s.vizTitle) || (lang === "zh" ? "时间线" : "Timeline")}</div>
            <div className="viz-hint">{lang === "zh" ? "点击节点" : "click a node"}</div>
          </div>
          <Timeline nodes={s.vizData} accent={s.accent} />
        </div>
      )}

      {s.cards.length > 0 && (
        <div className="cards reveal">
          {s.cards.map((c, i) => (
            <div className="card" key={i}>
              {c.icon && <span className="ci">{c.icon}</span>}
              <div className="ct">
                {lang === "zh" ? c.title.zh : c.title.en}
                <span className="zh">{lang === "zh" ? c.title.en : c.title.zh}</span>
              </div>
              <div className="cb">{t(c.body)}</div>
            </div>
          ))}
        </div>
      )}

      {s.viz === "comparison" && s.comparison && (
        <div className="cmp reveal">
          {s.comparison.dimensions.map((dim, i) => (
            <div className="cmp-row" key={i}>
              <div className="k">
                {lang === "zh" ? dim.zh : dim.en}
                <span className="zh">{lang === "zh" ? dim.en : dim.zh}</span>
              </div>
              <div className="v">{t(s.comparison!.cells[i])}</div>
            </div>
          ))}
        </div>
      )}

      {s.questions && s.questions.length > 0 && (
        <div className="qa reveal">
          {s.questions.map((q, i) => (
            <div className="qa-item" key={i}>
              <div className="qa-q">{t(q.q)}</div>
              <div className="qa-a">{t(q.a)}</div>
            </div>
          ))}
        </div>
      )}

      {s.quote && (
        <div className="quote reveal">
          <blockquote>{t(s.quote.text)}</blockquote>
          <span className="attr">{t(s.quote.attr)}</span>
        </div>
      )}
    </section>
  );
}
