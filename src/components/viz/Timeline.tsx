"use client";
import { useState } from "react";
import type { VizNode } from "@/lib/types";
import { useLang } from "@/components/LangContext";

// A chronological rail. Nodes carry `year` (negative = BCE).
export default function Timeline({ nodes, accent = "#e8c074" }: { nodes: VizNode[]; accent?: string }) {
  const { t, lang } = useLang();
  const [sel, setSel] = useState(0);
  const sorted = [...nodes].sort((a, b) => (a.year ?? 0) - (b.year ?? 0));
  const fmtYear = (y?: number) => {
    if (y === undefined) return "";
    if (y < 0) return Math.abs(y).toLocaleString() + (lang === "zh" ? " 年前·公元前" : " BCE");
    return y.toLocaleString() + (lang === "zh" ? " 年" : " CE");
  };
  const node = sorted[sel];
  return (
    <>
      <div className="viz-stage" style={{ minHeight: 180, padding: "26px 18px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 0, overflowX: "auto", paddingBottom: 8 }}>
          {sorted.map((n, i) => (
            <div key={i} style={{ flex: "0 0 auto", textAlign: "center", minWidth: 110, position: "relative" }}>
              <div style={{ height: 2, background: "rgba(180,160,240,0.2)", position: "absolute", top: 7, left: 0, right: 0 }} />
              <button
                onClick={() => setSel(i)}
                style={{
                  width: i === sel ? 16 : 11, height: i === sel ? 16 : 11, borderRadius: "50%",
                  background: i === sel ? "#fff" : accent, border: "none", cursor: "pointer",
                  position: "relative", zIndex: 2, boxShadow: `0 0 12px ${accent}`,
                  margin: "0 auto", display: "block",
                }}
                aria-label={t(n.label)}
              />
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: accent, marginTop: 10, letterSpacing: ".05em" }}>
                {fmtYear(n.year)}
              </div>
              <div style={{ fontFamily: "var(--display)", fontSize: 14, color: i === sel ? "#fff" : "var(--ink-dim)", marginTop: 4, lineHeight: 1.2 }}>
                {t(n.label)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="viz-readout">
        {node && (
          <>
            <b>{t(node.label)}</b> {node.note ? " — " + t(node.note) : ""}
          </>
        )}
      </div>
    </>
  );
}
