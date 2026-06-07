"use client";
import { LangProvider, useLang } from "@/components/LangContext";
import CosmicBackground from "@/components/CosmicBackground";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import KnowledgeGraph from "@/components/KnowledgeGraph";
import AIGuide from "@/components/AIGuide";
import FinalMessage from "@/components/FinalMessage";
import { SECTIONS } from "@/content";

function Body() {
  const { lang } = useLang();
  return (
    <>
      <CosmicBackground />
      <Nav sections={SECTIONS} />
      <div className="app">
        <Hero />
        {SECTIONS.map((s) => (
          <Section key={s.id} s={s} />
        ))}
        <section className="section" id="human-graph" style={{ ["--ac" as any]: "#e8b34a" }}>
          <div className="sec-kicker">{lang === "zh" ? "人类知识图谱" : "The Human Knowledge Graph"}</div>
          <h2 className="sec-title">
            {lang === "zh" ? "万象交汇于你" : "Every Force Meets in You"}
            <span className="zh">{lang === "zh" ? "Every Force Meets in You" : "万象交汇于你"}</span>
          </h2>
          <p className="sec-lead">
            {lang === "zh"
              ? "基因、家庭、教育、文化、技术、财富、社会、决策、运气、历史——它们并非孤立运转，而是彼此牵动、共同制造出「你」。点击任意力量，看它如何连向其余一切。"
              : "Genes, family, education, culture, technology, money, society, decisions, luck, history — none act alone. They pull on one another and, together, manufacture you. Click any force to trace its links."}
          </p>
          <div className="viz" style={{ marginTop: 36 }}>
            <div className="viz-head">
              <div className="viz-title">{lang === "zh" ? "制造「你」的力量之网" : "The Web of Forces That Make You"}</div>
              <div className="viz-hint">{lang === "zh" ? "点击节点" : "click a node"}</div>
            </div>
            <KnowledgeGraph />
          </div>
        </section>
        <AIGuide />
        <FinalMessage />
      </div>
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Body />
    </LangProvider>
  );
}
