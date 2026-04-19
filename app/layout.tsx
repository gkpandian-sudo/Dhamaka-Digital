// -- Dhamaka Digital — Root Layout --
// Hindi-first standalone project. Loads fonts, injects no-flash theme script,
// wraps in ThemeProvider + LangProvider (HI default, HI ↔ EN only).

import type { Metadata } from "next"
import { Inter, Space_Grotesk, Cormorant_Garamond, Noto_Sans_Devanagari } from "next/font/google"
import Script from "next/script"
import { ThemeProvider, themeScript } from "@/lib/theme"
import { LangProvider } from "@/lib/i18n"
import "./globals.css"

// ── Google Fonts ─────────────────────────────────────────────────────
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
})

// Devanagari font for Hindi — loaded but applied only when lang="hi"
const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

// ── Page metadata ─────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:       "Dhamaka Digital — धमाका डिजिटल | भारत के बिज़नेस के लिए वेबसाइट",
  description: "₹10,000 से शुरू। कस्टम Next.js वेबसाइट — 7-14 दिन में तैयार। मुफ़्त सलाह लें।",
  keywords:    ["वेबसाइट डिज़ाइन", "web development", "Next.js", "India", "business website", "Dhamaka Digital", "धमाका डिजिटल"],
  openGraph: {
    title:       "Dhamaka Digital — धमाका डिजिटल",
    description: "भारत के बिज़नेस के लिए धमाकेदार वेब solutions। ₹10,000 से शुरू।",
    type:        "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // -- Dark class applied here; ThemeProvider + inline script keep it in sync --
    // -- lang attribute is updated dynamically by LangProvider --
    <html lang="hi" className="dark" suppressHydrationWarning>
      <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${cormorant.variable} ${notoDevanagari.variable} font-sans bg-surface text-on-surface`}>
        <ThemeProvider>
          <LangProvider>
            {children}
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
