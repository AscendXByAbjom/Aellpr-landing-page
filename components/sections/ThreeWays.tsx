import clsx from "clsx";
import { threeWays } from "@/content/site";
import { Title } from "@/components/motion/Title";
import { delay } from "@/components/motion/delay";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Arrow } from "@/components/ui/Arrow";
import { ParcelGlyph, RouteGlyph, GrowGlyph } from "@/components/mockups/Glyphs";

const tones = {
  cream: "bg-cream text-ink",
  ink: "bg-ink text-paper",
  purple: "bg-purple text-white",
} as const;

const glyphs = { send: ParcelGlyph, go: RouteGlyph, grow: GrowGlyph };

/** The three sides of Aellpr, side by side. */
export function ThreeWays() {
  return (
    <section id="three-ways" aria-labelledby="three-ways-title" className="relative pb-8 lg:pb-12">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>{threeWays.label}</SectionLabel>
            <Title id="three-ways-title" lines={threeWays.title} className="display-lg mt-6" lineClassName={(i) => (i === 1 ? "text-muted" : undefined)} />
          </div>
          <p data-reveal className="max-w-[340px] text-[16px] leading-relaxed text-muted">
            Whether you’re sending, already commuting, or building something of your own — pick the side of Aellpr that fits your next move.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-3 lg:gap-5">
          {threeWays.cards.map((c, i) => {
            const Glyph = glyphs[c.id];
            return (
              <a
                key={c.id}
                href={c.href}
                data-reveal
                style={delay(i * 100)}
                className={clsx(
                  "group relative flex min-h-[420px] flex-col overflow-hidden rounded-[28px] p-7 sm:p-9 lg:min-h-[520px]",
                  tones[c.tone],
                )}
              >
                <div className="flex items-start justify-between">
                  <p className={clsx("label-mono", c.tone === "cream" ? "text-orange-deep" : "text-orange-glow")}>{c.tag}</p>
                  <span aria-hidden className={clsx("font-display text-[14px] tabular-nums", c.tone === "cream" ? "text-ink/40" : "text-white/40")}>
                    0{i + 1} / 03
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[clamp(2.8rem,4.6vw,4.4rem)] font-medium leading-[0.9] tracking-[-0.05em]">
                  {c.title}
                </h3>
                <div className={clsx("mt-4 max-w-[36ch] space-y-3 text-[15.5px] leading-[1.55]", c.tone === "cream" ? "text-ink/70" : "text-white/75")}>
                  {c.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>

                <div aria-hidden className="pointer-events-none mx-auto mt-6 w-[58%] max-w-[240px] transition-transform duration-700 ease-[var(--ease-out)] group-hover:-translate-y-1.5">
                  <Glyph className="h-auto w-full" />
                </div>

                <span className="mt-auto inline-flex items-center gap-4 pt-6 text-[15px] font-semibold">
                  <span className={clsx("grid size-11 place-items-center rounded-full", c.tone === "cream" ? "bg-orange text-white" : "bg-white text-ink")}>
                    <Arrow dir="right" className="transition-transform duration-300 group-hover:translate-x-[2px]" />
                  </span>
                  {c.audience}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
