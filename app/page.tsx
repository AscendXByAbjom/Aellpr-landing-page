import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { Hero } from "@/components/sections/Hero";
import { Everyday } from "@/components/sections/Everyday";
import { ThreeWays } from "@/components/sections/ThreeWays";
import { SendScene } from "@/components/sections/SendScene";
import { GoScene } from "@/components/sections/GoScene";
import { BusinessAI } from "@/components/sections/BusinessAI";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Trust } from "@/components/sections/Trust";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { faq, site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Aellpr",
      url: site.url,
      slogan: site.tagline,
      areaServed: { "@type": "City", name: "Lagos" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.items.map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: i.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Everyday />
        <ThreeWays />
        <SendScene />
        <GoScene />
        <BusinessAI />
        <HowItWorks />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <RevealObserver />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\u003c") }}
      />
    </>
  );
}
