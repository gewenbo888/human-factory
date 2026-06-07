"use client";
import { useEffect, useState } from "react";
import type { Section } from "@/lib/types";
import { useLang } from "@/components/LangContext";

export default function Nav({ sections }: { sections: Section[] }) {
  const { lang, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const onS = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProg(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onS, { passive: true });
    onS();
    return () => window.removeEventListener("scroll", onS);
  }, []);
  return (
    <>
      <div className="progress" style={{ width: prog + "%" }} />
      <header className="bar">
        <a className="brand" href="#top">
          <svg className="glyph" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M11 6 q10 5 0 10 q-10 5 0 10 M21 6 q-10 5 0 10 q10 5 0 10" fill="none" stroke="#4fd6c4" strokeWidth="1.4" />
            <circle cx="16" cy="16" r="2.2" fill="#e8b34a" />
          </svg>
          <span>
            <b>Human</b> Factory
          </span>
        </a>
        <div className="spacer" />
        <nav className="navlinks">
          <a href="#first-cell">{lang === "zh" ? "第一细胞" : "Cell"}</a>
          <a href="#family-factory">{lang === "zh" ? "家庭" : "Family"}</a>
          <a href="#technology-factory">{lang === "zh" ? "技术" : "Tech"}</a>
          <a href="#human-simulator">{lang === "zh" ? "模拟器" : "Simulator"}</a>
          <a href="#human-graph">{lang === "zh" ? "图谱" : "Graph"}</a>
        </nav>
        <button className="toc-btn" onClick={() => setOpen(true)}>{lang === "zh" ? "目录 ☰" : "Contents ☰"}</button>
        <button className="langbtn" onClick={toggle} aria-label="toggle language">{lang === "zh" ? "EN / 中文" : "中文 / EN"}</button>
      </header>

      <div className={"toc" + (open ? " open" : "")}>
        <button className="toc-close" onClick={() => setOpen(false)} aria-label="close">✕</button>
        <div className="toc-grid">
          {sections.map((s) => (
            <a key={s.id} href={"#" + s.id} onClick={() => setOpen(false)} style={{ ["--ac" as any]: s.accent }}>
              <div className="n">{String(s.num).padStart(2, "0")}</div>
              <div className="tt">
                {lang === "zh" ? s.title.zh : s.title.en}
                <span className="zh">{lang === "zh" ? s.title.en : s.title.zh}</span>
              </div>
            </a>
          ))}
          <a href="#human-graph" onClick={() => setOpen(false)}>
            <div className="n">★</div>
            <div className="tt">{lang === "zh" ? "人类知识图谱" : "The Human Knowledge Graph"}</div>
          </a>
          <a href="#ai-human-guide" onClick={() => setOpen(false)}>
            <div className="n">✦</div>
            <div className="tt">{lang === "zh" ? "AI 人类向导" : "AI Human Guide"}</div>
          </a>
        </div>
      </div>
    </>
  );
}
