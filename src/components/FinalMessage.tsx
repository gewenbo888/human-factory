"use client";
import { useLang } from "@/components/LangContext";

export default function FinalMessage() {
  const { lang } = useLang();
  return (
    <footer className="final">
      <p className="msg">
        {lang === "zh"
          ? "没有任何一个人是由单一因素塑造的。每个人都是基因、家庭、文化、技术、社会、历史、选择与机遇，跨越时间共同作用的结果。人并非被一次性创造出来，而是在一生中不断被周围的世界塑造。"
          : "No human is created by a single force. Every person is the result of biology, family, culture, technology, society, history, choices, and chance interacting across time. You are not simply born — you are continuously manufactured by the world around you."}
        <span className="zh">
          {lang === "zh"
            ? "You are not simply born — you are continuously manufactured by the world around you."
            : "人并非被一次性创造出来，而是在一生中不断被周围的世界塑造。"}
        </span>
      </p>
      <div className="links">
        <a href="https://psyverse.fun/">← Psyverse</a>
        <a href="https://psyverse.fun/atlas.html">Atlas</a>
        <a href="#top">{lang === "zh" ? "回到顶部 ↑" : "Back to top ↑"}</a>
      </div>
      <div className="sig">Human Factory · 人类制造厂 — part of the Psyverse · by Gewenbo · 2026</div>
    </footer>
  );
}
