import Image from "next/image";
import { businessAi } from "@/content/site";
import aiLogo from "@/public/brand/aellpr-ai.png";
import { Title } from "@/components/motion/Title";
import { delay } from "@/components/motion/delay";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CtaButton } from "@/components/ui/Button";
import { AppShot, Phone } from "@/components/mockups/Phone";
import businessInbox from "@/public/mockups/business-inbox.jpg";

/** Purple chapter: the Business AI overview screen beside the four feature tiles. */
export function BusinessAI() {
  return (
    <section id="business-ai" aria-labelledby="business-ai-title" className="relative">
      <div className="relative overflow-hidden bg-purple text-white">
        {/* ambient glows */}
        <div aria-hidden className="pointer-events-none absolute -left-60 top-0 size-[760px] rounded-full bg-[radial-gradient(closest-side,rgb(91_94_196/0.55),transparent)]" />
        <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 size-[640px] rounded-full bg-[radial-gradient(closest-side,rgb(245_107_34/0.22),transparent)]" />

        <div className="container-x relative pt-28 lg:pt-40">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-20">
            <div>
              <SectionLabel tone="light">{businessAi.label}</SectionLabel>
              <p data-reveal className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 py-1.5 pl-1.5 pr-4 text-[13px] font-medium">
                <Image src={aiLogo} alt={`Aellpr ${businessAi.product}`} sizes="32px" className="size-[26px] rounded-[8px] ring-1 ring-white/40" />
                <span className="text-white/70">· {businessAi.audience}</span>
              </p>
              <Title
                id="business-ai-title"
                lines={businessAi.title}
                className="display-lg mt-6"
                lineClassName={(i) => (i === 1 ? "text-orange-glow" : undefined)}
              />
            </div>
            <div>
              <p data-reveal className="font-display text-[clamp(1.25rem,1.8vw,1.6rem)] leading-snug tracking-[-0.02em]">
                {businessAi.lede}
              </p>
              <p data-reveal className="mt-4 text-[16px] leading-[1.75] text-white/70">
                {businessAi.body}
              </p>
              <div data-reveal className="mt-7 flex flex-col items-start gap-3">
                <CtaButton cta="businessAi" variant="paper" size="lg" />
                <p className="text-[12.5px] text-white/50">{businessAi.linkNote}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container-x grid items-center gap-14 py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-28">
            <div className="relative flex justify-center pb-10 lg:pb-0">
              <div aria-hidden className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgb(255_255_255/0.12),transparent)]" />
              <Phone className="relative" label="Mobile concept" labelClassName="text-white/70" tone="purple">
                <AppShot src={businessInbox} alt="Aellpr Business AI app: inbox of customer conversations from Facebook, WhatsApp and Instagram" />
              </Phone>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                {businessAi.features.map((f, i) => (
                  <article
                    key={f.tag}
                    data-reveal
                    style={delay(i * 80)}
                    className="rounded-3xl border border-white/15 bg-white/[0.07] p-6 lg:p-7"
                  >
                    <p className="label-mono text-orange-glow">{f.tag}</p>
                    <h3 className="mt-4 font-display text-[1.6rem] font-medium leading-tight tracking-[-0.03em]">{f.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-white/70">{f.body}</p>
                  </article>
                ))}
              </div>
              <div data-reveal className="mt-3 flex gap-4 rounded-3xl bg-purple-deep/70 p-6 text-[13.5px] leading-relaxed text-white/70">
                <span className="label-mono shrink-0 text-orange-glow">Planned</span>
                <p>{businessAi.planned}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 lg:h-24" />
      </div>
    </section>
  );
}
