import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#07070a",
        bg2: "#0d0d12",
        bg3: "#15151c",
        ink: "#ece4d3",
        "ink-dim": "rgba(236, 228, 211, 0.65)",
        "ink-faint": "rgba(236, 228, 211, 0.25)",
        gold: "#c9a24b",
        "gold-bright": "#e6c071",
        "gold-deep": "#7c6024",
        // Per-world accents — restrained, cinematic
        physical: "#6ea8c8",      // cool starlight blue
        "physical-deep": "#345168",
        mental: "#b48ad9",         // violet — consciousness
        "mental-deep": "#4f3a66",
        computational: "#5fbfa9",  // teal — code
        "computational-deep": "#2c5650",
        social: "#d4a25a",         // warm amber — institutions
        "social-deep": "#705228",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Noto Serif SC"', "serif"],
        display: ['"Fraunces"', '"Noto Serif SC"', "serif"],
        cjk: ['"Noto Serif SC"', '"Cormorant Garamond"', "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "62ch",
        wide: "1400px",
      },
    },
  },
  plugins: [],
} satisfies Config;
