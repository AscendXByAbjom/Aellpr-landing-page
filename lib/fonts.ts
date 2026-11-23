import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";

/**
 * Brand typography. Swap any of these to change the look site-wide —
 * the CSS variables are consumed by the Tailwind theme in globals.css.
 */
export const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["600"],
  // Small labels only — not worth competing with the hero for bandwidth.
  preload: false,
});

export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`;
