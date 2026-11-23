import Image from "next/image";
import { hero } from "@/content/site";
import { CtaButton } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Arrow } from "@/components/ui/Arrow";
import { delay, parallax } from "@/components/motion/delay";
import heroImg from "@/public/images/aellpr-lagos-hero.webp";

/**
 * Opening section. Server-rendered; the entrance is pure CSS so it starts
 * at first paint without waiting for JavaScript. The photo drifts gently
 * with the scroll where CSS scroll-driven animations are supported.
 */
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative bg-paper pb-6 lg:pb-10">
      <div className="container-x pt-[104px] lg:pt-[124px]">
        <div data-enter className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <span className="stamp text-orange">{hero.stamp}</span>
          <span className="label-mono text-muted">Send · Go · Business AI</span>
        </div>

        <h1
          id="hero-title"
          className="mt-7 font-display text-[clamp(3rem,min(8vw,13.5svh),8.25rem)] font-medium leading-[0.92] tracking-[-0.05em]"
        >
          <span data-enter className="block" style={delay(60)}>
            {hero.titleA}
          </span>
          <span data-enter className="block text-orange" style={delay(140)}>
            {hero.titleB}
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-end lg:justify-between">
          <div data-enter className="max-w-[520px]" style={delay(220)}>
            <p className="font-display text-[19px] italic tracking-tight text-ink/80">{hero.kicker}</p>
            <p className="mt-3 text-[16px] leading-[1.7] text-muted">{hero.body}</p>
          </div>
          <div data-enter className="flex flex-wrap items-center gap-3" style={delay(300)}>
            <CtaButton cta="send" size="lg" />
            <CtaButton cta="go" variant="ink" size="lg" />
            <ButtonLink href="#business-ai" variant="outline" arrow="right" size="lg">
              Explore Business AI
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Photo window */}
      <div className="container-x mt-10 lg:mt-14">
        {/* No fade on the frame: the photo is the LCP element and paints immediately */}
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-shade sm:aspect-[16/10] lg:aspect-[16/8] lg:rounded-[32px]"
        >
          <div data-parallax style={parallax(4)} className="absolute -inset-y-[6%] inset-x-0">
            <div data-enter="photo" className="absolute inset-0">
              <Image
                src={heroImg}
                alt="A commuter receiving a parcel from a seller beside a parked car on a sunlit Lagos street"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1320px) 1208px, (min-width: 1024px) 92vw, 100vw"
                placeholder="blur"
                className="object-cover object-[60%_45%]"
              />
            </div>
          </div>
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(90deg,#122026d9_0%,#1423289c_34%,#15232940_62%,transparent_100%),linear-gradient(0deg,#152329b3,transparent_55%)]"
          />

          {/* Route drawn across the scene */}
          <svg
            aria-hidden
            viewBox="0 0 1440 720"
            preserveAspectRatio="xMidYMid slice"
            className="pointer-events-none absolute inset-0 hidden size-full lg:block"
          >
            <path
              data-enter="draw"
              style={delay(700)}
              pathLength={1}
              d="M90 470 C 260 420, 380 560, 560 510 S 820 350, 1040 370"
              fill="none"
              stroke="#ff9c4d"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="90" cy="470" r="7" fill="#ff9c4d" />
            <circle cx="1040" cy="370" r="8" fill="#fff" stroke="#ff9c4d" strokeWidth="4" />
          </svg>

          <div className="absolute inset-0 flex flex-col justify-between p-6 text-white sm:p-10 lg:p-12">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="label-mono text-white/75">{hero.frameCaption}</p>
                <p className="label-mono mt-1 text-white/45">{hero.frameCoords}</p>
              </div>
              <span className="hidden items-center gap-2 rounded-full border border-white/30 bg-ink/30 px-4 py-2 text-[13px] sm:inline-flex">
                <span className="size-2 rounded-full bg-orange-glow" />
                Ikeja <Arrow className="text-orange-glow" /> Ikorodu
              </span>
            </div>
            <div className="flex items-end justify-between gap-8">
              <p className="font-display text-[clamp(1.9rem,4.4vw,4.4rem)] font-medium leading-[0.98] tracking-[-0.04em]">
                {hero.frameLine}
                <br />
                <span className="text-orange-glow">{hero.frameLineB}</span>
              </p>
              <a
                href="#everyday"
                className="label-mono hidden shrink-0 items-center gap-3 text-white/80 transition-colors hover:text-white lg:inline-flex"
              >
                Meet your Aellpr
                <span className="grid size-10 place-items-center rounded-full border border-white/40">
                  <Arrow dir="down" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
