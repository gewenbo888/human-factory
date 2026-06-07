import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://human-factory.psyverse.fun"),
  title: "Human Factory · 人类制造厂 | How Humans Are Made",
  description:
    "Human Factory — a world-class bilingual, cinematic exploration of how human beings are made: the biology, genetics, family, language, education, culture, geography, history, technology, society, money, decisions, and luck that manufacture every person. Why did you become who you are?",
  keywords: [
    "human development", "how humans are made", "genetics", "nature vs nurture", "family", "education",
    "culture", "geography", "epigenetics", "social capital", "life outcomes", "the brain", "identity",
    "luck and success", "life simulator", "人类制造厂", "人的发展", "基因", "家庭", "教育", "文化", "Psyverse",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: { canonical: "/", languages: { en: "/", "zh-CN": "/", "x-default": "/" } },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Human Factory · 人类制造厂 — How Humans Are Made: a bilingual cinematic exploration of the forces that manufacture every person — biology, genetics, family, language, education, culture, geography, history, technology, society, money, decisions and luck — across 20 sections, a human knowledge graph, and an interactive life simulator" }],
    title: "Human Factory · 人类制造厂",
    description:
      "How Humans Are Made — you are not the result of a single choice, but the product of millions of interacting forces.",
    url: "https://human-factory.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: "Human Factory · 人类制造厂",
    description: "How humans are made — biology, family, culture, technology, society, decisions & luck across a lifetime.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#070a12" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%23070a12'/%3E%3Cpath d='M11 7 q10 5 0 10 q-10 5 0 10 M21 7 q-10 5 0 10 q10 5 0 10' fill='none' stroke='%234fd6c4' stroke-width='1.3'/%3E%3Ccircle cx='16' cy='16' r='2' fill='%23e8b34a'/%3E%3C/svg%3E"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Human Factory",
              alternateName: "人类制造厂",
              description: "A bilingual cinematic exploration of how human beings are made.",
              url: "https://human-factory.psyverse.fun/",
              inLanguage: ["en", "zh-CN"],
              author: { "@type": "Person", name: "Gewenbo", url: "https://psyverse.fun/" },
              publisher: { "@type": "Organization", name: "Psyverse", url: "https://psyverse.fun/" },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Script src="https://analytics-dashboard-two-blue.vercel.app/tracker.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
