"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { BiText } from "@/lib/types";

type Lang = "en" | "zh";
interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (b?: BiText | null) => string;
}

const Ctx = createContext<LangCtx>({
  lang: "en",
  setLang: () => {},
  toggle: () => {},
  t: (b) => (b ? b.en : ""),
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("hf-lang");
      if (saved === "zh" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("hf-lang", l);
    } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", l === "zh" ? "zh-CN" : "en");
    }
  }, []);

  const toggle = useCallback(() => setLang(lang === "en" ? "zh" : "en"), [lang, setLang]);
  const t = useCallback((b?: BiText | null) => (b ? (lang === "zh" ? b.zh : b.en) : ""), [lang]);

  return <Ctx.Provider value={{ lang, setLang, toggle, t }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
