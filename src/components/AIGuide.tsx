"use client";
import { useState } from "react";
import { useLang } from "@/components/LangContext";

type Persp = { name: { en: string; zh: string }; body: { en: string; zh: string } };
type Q = { q: { en: string; zh: string }; perspectives: Persp[] };

const QS: Q[] = [
  {
    q: { en: "Why am I who I am?", zh: "我为何成为现在的我？" },
    perspectives: [
      { name: { en: "The short answer", zh: "简短的回答" }, body: { en: "Because dozens of forces — genes, family, language, schooling, place, era, money, chance, and your own choices — interacted across every year of your life. No one cause is decisive.", zh: "因为数十种力量——基因、家庭、语言、教育、地域、时代、财富、机遇，以及你自己的选择——在你生命的每一年里相互作用。没有任何单一原因起决定作用。" } },
      { name: { en: "Nature & nurture", zh: "先天与后天" }, body: { en: "Twin studies suggest genes account for a large share of variation in many traits — but they act through environments, which switch genes on and off. The two are not rivals; they are collaborators.", zh: "双生子研究表明，基因解释了许多特质中相当大的变异——但它们通过环境起作用，而环境又开启或关闭着基因。二者并非对手，而是合作者。" } },
      { name: { en: "The honest caveat", zh: "诚实的提醒" }, body: { en: "Much remains uncertain, and averages never predict an individual. You are a sample size of one.", zh: "许多问题仍不确定，平均数也从不预测个体。你，是样本量为一的存在。" } },
    ],
  },
  {
    q: { en: "How much does luck matter?", zh: "运气有多重要？" },
    perspectives: [
      { name: { en: "More than we admit", zh: "比我们承认的更多" }, body: { en: "Birthplace, birth year, and family are pure luck — yet they shape the odds before you make a single choice. Where you start is itself a lottery.", zh: "出生地、出生年份与家庭都是纯粹的运气——但它们在你做出任何选择之前，就已塑造了概率。你的起点，本身就是一场抽签。" } },
      { name: { en: "But not everything", zh: "但并非全部" }, body: { en: "Luck sets the range; effort and decisions move you within it. Skill also raises how often you can convert luck into outcomes.", zh: "运气设定区间；努力与决策让你在区间内移动。技能还提高了你将运气转化为结果的频率。" } },
      { name: { en: "The interaction", zh: "二者的交互" }, body: { en: "The luckiest pattern is preparation meeting opportunity — which is why building capability matters even in a world full of chance.", zh: "最幸运的模式，是准备遇上机遇——这正是为何即便在充满偶然的世界里，积累能力依然重要。" } },
    ],
  },
  {
    q: { en: "How important is education?", zh: "教育有多重要？" },
    perspectives: [
      { name: { en: "A powerful lever", zh: "强大的杠杆" }, body: { en: "Education correlates strongly with income, health, and mobility — one of the most reliable ways societies move people across starting lines.", zh: "教育与收入、健康和流动性高度相关——是社会让人跨越起跑线最可靠的方式之一。" } },
      { name: { en: "Not just schooling", zh: "不只是上学" }, body: { en: "Much learning happens outside classrooms — from family, peers, work, and now algorithms and AI tutors. The 'curriculum' of a life is far wider than school.", zh: "大量学习发生在课堂之外——来自家庭、同伴、工作，如今还有算法与 AI 导师。人生的「课程表」远比学校宽广。" } },
      { name: { en: "Diminishing returns", zh: "边际递减" }, body: { en: "Credentials matter less than the capability and curiosity behind them; what compounds is the habit of learning itself.", zh: "文凭的意义，不及其背后的能力与好奇心；真正复利的，是学习这一习惯本身。" } },
    ],
  },
  {
    q: { en: "How does family affect life outcomes?", zh: "家庭如何影响人生结果？" },
    perspectives: [
      { name: { en: "The first factory", zh: "最初的工厂" }, body: { en: "Family delivers language, attachment, nutrition, expectations, and the earliest model of how the world works — installed before conscious memory.", zh: "家庭提供语言、依恋、营养、期望，以及关于世界如何运转的最初模型——在有意识的记忆之前便已安装。" } },
      { name: { en: "Economic floor & ceiling", zh: "经济的地板与天花板" }, body: { en: "Family resources shape neighborhoods, schools, networks, and the freedom to take risks — quietly setting many defaults.", zh: "家庭资源塑造社区、学校、人脉，以及承担风险的自由——悄然设定了诸多默认值。" } },
      { name: { en: "Not deterministic", zh: "并非决定论" }, body: { en: "Many escape difficult starts and many squander easy ones; family is a strong current, not a fixed track.", zh: "许多人摆脱了艰难的起点，也有许多人挥霍了优越的开局；家庭是一股强劲的水流，而非固定的轨道。" } },
    ],
  },
  {
    q: { en: "Will AI change human development?", zh: "AI 会改变人的发展吗？" },
    perspectives: [
      { name: { en: "A new factory", zh: "一座新工厂" }, body: { en: "Personal AI tutors, ubiquitous information, and brain-computer interfaces could reshape how skills and knowledge are built — potentially as large a shift as literacy or the internet.", zh: "个人 AI 导师、无处不在的信息与脑机接口，可能重塑技能与知识的构建方式——其影响或许不亚于识字或互联网。" } },
      { name: { en: "New divides", zh: "新的鸿沟" }, body: { en: "Access to powerful tools may widen gaps as much as it narrows them; who gets the best AI becomes a new dimension of luck.", zh: "对强大工具的可及性，可能在缩小差距的同时也在扩大差距；谁能用上最好的 AI，成为运气的新维度。" } },
      { name: { en: "Still uncertain", zh: "仍不确定" }, body: { en: "Whether AI amplifies human potential or flattens it depends on choices we are making now — individually and collectively.", zh: "AI 究竟是放大人的潜能，还是将其抹平，取决于我们此刻——个体与集体——所做的选择。" } },
    ],
  },
];

export default function AIGuide() {
  const { lang } = useLang();
  const [i, setI] = useState(0);
  const cur = QS[i];
  return (
    <section className="guide" id="ai-human-guide">
      <div className="reveal">
        <div className="sec-kicker" style={{ ["--ac" as any]: "#4fd6c4" }}>{lang === "zh" ? "AI 人类向导" : "AI Human Guide"}</div>
        <h2 className="sec-title">
          {lang === "zh" ? "向工厂提问" : "Ask the Factory"}
          <span className="zh">{lang === "zh" ? "Ask the Factory" : "向工厂提问"}</span>
        </h2>
        <p className="sec-lead">
          {lang === "zh"
            ? "对「你为何成为你」这类问题，没有单一答案。这里给出多个角度的、基于证据的回应。"
            : "There is no single answer to why you became you. This guide offers balanced, evidence-informed perspectives."}
        </p>
        <div className="q-chips">
          {QS.map((q, k) => (
            <button key={k} className={"chip" + (k === i ? " on" : "")} onClick={() => setI(k)}>
              {lang === "zh" ? q.q.zh : q.q.en}
            </button>
          ))}
        </div>
        <div className="guide-answer">
          {cur.perspectives.map((p, k) => (
            <div className="perspective" key={k}>
              <div className="pname">{lang === "zh" ? p.name.zh : p.name.en}</div>
              <div className="pbody">{lang === "zh" ? p.body.zh : p.body.en}</div>
            </div>
          ))}
        </div>
        <div className="guide-note">
          {lang === "zh" ? "※ 基于发展科学的教育性概述；平均规律不预测任何具体个人。" : "※ Educational summaries grounded in developmental science — averages never predict any individual."}
        </div>
      </div>
    </section>
  );
}
