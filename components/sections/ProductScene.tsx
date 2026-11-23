import Image, { type StaticImageData } from "next/image";
import { Title } from "@/components/motion/Title";
import { delay } from "@/components/motion/delay";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CtaButton } from "@/components/ui/Button";
import { WithLogo } from "@/components/brand/Wordmark";
import { ProductStage } from "./ProductStage";
import type { ctas } from "@/content/site";

type Step = { title: string; body: string };

export type ProductSceneProps = {
  id: string;
  label: string;
  product: string;
  /** Product wordmark shown in the pill (alt text = product). */
  logo: StaticImageData;
  audience: string;
  title: readonly string[];
  sub?: string;
  lede: string;
  body: string;
  steps: Step[];
  note?: string;
  screens: React.ReactNode[];
  cta: keyof typeof ctas;
  mirrored?: boolean;
};

/** Product chapter: an editorial intro, then steps beside the app preview. */
export function ProductScene(p: ProductSceneProps) {
  return (
    <section id={p.id} aria-labelledby={`${p.id}-title`} className="relative">
      <div className="container-x pt-24 lg:pt-32">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-20">
          <div>
            <SectionLabel>{p.label}</SectionLabel>
            <p data-reveal className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-ink/12 bg-white/70 px-4 py-2 text-[13px] font-medium">
              <Image src={p.logo} alt={p.product} sizes="120px" className="h-[18px] w-auto lg:h-5" />
              <span className="text-muted">· {p.audience}</span>
            </p>
            <Title id={`${p.id}-title`} lines={p.title} className="display-lg mt-6" lineClassName={(i) => (i === 1 ? "text-orange" : undefined)} />
            {p.sub && (
              <p data-reveal className="mt-5 font-display text-[clamp(1.3rem,2vw,1.8rem)] italic tracking-tight text-ink/70">
                <WithLogo text={p.sub} sizes="180px" />
              </p>
            )}
          </div>
          <div>
            <p data-reveal className="font-display text-[clamp(1.2rem,1.7vw,1.5rem)] leading-snug tracking-[-0.02em]">
              {p.lede}
            </p>
            <p data-reveal style={delay(60)} className="mt-4 text-[16px] leading-[1.75] text-muted">
              {p.body}
            </p>
            <div data-reveal style={delay(120)} className="mt-7">
              <CtaButton cta={p.cta} size="lg" variant={p.id === "go" ? "ink" : "orange"} />
            </div>
          </div>
        </div>
      </div>

      <ProductStage
        id={p.id}
        steps={p.steps}
        screens={p.screens}
        note={p.note}
        mirrored={p.mirrored}
        product={p.id === "go" ? "go" : "send"}
      />
    </section>
  );
}
