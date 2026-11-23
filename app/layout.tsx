import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import { site } from "@/content/site";
import { ComingSoonProvider } from "@/components/providers/ComingSoon";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Aellpr — Send. Go. Grow. | Peer-to-peer delivery in Lagos`,
    template: "%s · Aellpr",
  },
  description: site.description,
  applicationName: "Aellpr",
  keywords: [
    "Aellpr",
    "Lagos delivery",
    "peer-to-peer delivery Nigeria",
    "send a package Lagos",
    "earn as a commuter",
    "Business AI Nigeria",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: "Aellpr",
    title: "Aellpr — Your next move. Made possible.",
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aellpr — Your next move. Made possible.",
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#faf8f4",
  colorScheme: "light",
};

/** Runs before paint: flags JS so scroll-reveal elements can start hidden. */
const bootScript = `document.documentElement.classList.add('js')`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="fixed left-4 top-[-100px] z-[100] rounded-lg bg-ink px-4 py-3 text-sm text-paper focus:top-4"
        >
          Skip to content
        </a>
        <ComingSoonProvider>{children}</ComingSoonProvider>
      </body>
    </html>
  );
}
