import Image from "next/image";
import clsx from "clsx";
import { finalCta } from "@/content/site";
import { Title } from "@/components/motion/Title";
import { delay, parallax } from "@/components/motion/delay";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CtaButton } from "@/components/ui/Button";
import { WithLogo } from "@/components/brand/Wordmark";
import heroImg from "@/public/images/aellpr-lagos-hero.webp";

const tones = {
  orange: "bg-orange text-white",
  ink: "bg-ink text-paper",
  purple: "bg-purple text-white",
} as const;

/** Closing section — the opening photo returns, and the page hands over to the visitor. */
export function FinalCTA() {
  return (
    <section id="next" aria-labelledby="final-title" className="relative pb-24 pt-10 lg:pb-32">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>{finalCta.label}</SectionLabel>
          <Title id="final-title" lines={[finalCta.title[0], <WithLogo key="logo" text={finalCta.title[1]} sizes="(min-width: 1024px) 420px, 60vw" />]} className="display-xl mt-8" lineClassName={(i) => (i === 1 ? "text-orange" : undefined)} />
        </div>

        <div data-reveal="fade" className="relative mt-14 overflow-hidden rounded-[28px] bg-shade lg:mt-20">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] lg:aspect-[16/8.5]">
            <div data-parallax style={parallax(5)} className="absolute -inset-y-[8%] inset-x-0">
              <Image
                src={heroImg}
                alt=""
                fill
                sizes="(min-width: 1320px) 1208px, (min-width: 1024px) 92vw, 100vw"
                placeholder="blur"
                className="object-cover object-[65%_40%]"
              />
            </div>
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(0deg,#122026f2_0%,#12202680_40%,transparent_75%)]" />
            <p className="label-mono absolute left-6 top-6 text-white/75 lg:left-10 lg:top-10">Starting in Lagos, Nigeria</p>
          </div>

          <div className="grid gap-3 bg-ink p-3 lg:absolute lg:inset-x-0 lg:bottom-0 lg:grid-cols-3 lg:bg-transparent lg:p-6">
            {finalCta.cards.map((c, i) => (
              <article
                key={c.tag}
                data-reveal
                style={delay(150 + i * 90)}
                className={clsx("flex flex-col rounded-[22px] p-6 lg:min-h-[220px] lg:p-7", tones[c.tone])}
              >
                <p className="label-mono opacity-75">{c.tag}</p>
                <h3 className="mt-3 font-display text-[clamp(1.6rem,2.2vw,2.1rem)] font-medium leading-[1] tracking-[-0.04em]">{c.title}</h3>
                <div className="mt-auto pt-8">
                  <CtaButton cta={c.cta} variant={c.tone === "orange" ? "ink" : c.tone === "ink" ? "orange" : "paper"} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
