import { everyday } from "@/content/site";
import { Marquee } from "@/components/motion/Marquee";
import { delay, parallax } from "@/components/motion/delay";
import { Arrow } from "@/components/ui/Arrow";
import { SectionLabel } from "@/components/ui/SectionLabel";

function RouteChip({ from, to, tone = "light" }: { from: string; to: string; tone?: "light" | "dark" }) {
  return (
    <span
      className={
        tone === "dark"
          ? "mx-2 inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3.5 text-[clamp(0.95rem,1.4vw,1.2rem)] font-medium tracking-tight text-paper"
          : "mx-2 inline-flex items-center gap-3 rounded-full border border-ink/12 bg-white px-5 py-3.5 text-[clamp(0.95rem,1.4vw,1.2rem)] font-medium tracking-tight"
      }
    >
      <span className="size-2 rounded-full bg-orange" />
      {from}
      <Arrow className="text-orange" />
      {to}
    </span>
  );
}

export function Everyday() {
  const routes = everyday.routes;
  return (
    <section id="everyday" aria-label="The everyday, connected" className="relative overflow-hidden py-24 lg:py-36">
      <div className="container-x relative">
        <SectionLabel>{everyday.label}</SectionLabel>

        <p
          data-reveal
          style={delay(80)}
          className="mt-10 max-w-[19ch] font-display text-[clamp(2rem,4.6vw,4.4rem)] font-medium leading-[1.04] tracking-[-0.04em] sm:max-w-[21ch]"
        >
          {everyday.statement}
        </p>

        {/* Postcards — a little depth beside the statement (desktop only) */}
        <div data-parallax style={parallax(-12)} className="pointer-events-none absolute right-[4%] top-6 hidden lg:block">
          <div data-reveal style={delay(200)} className="rotate-[4deg] rounded-2xl border border-line bg-white p-5 shadow-[0_24px_48px_-28px_rgb(23_37_43/0.3)]">
            <p className="label-mono text-muted">Your next delivery</p>
            <p className="mt-2 flex items-center gap-2 font-display text-2xl tracking-tight">
              Ikeja <Arrow className="text-orange" /> Ikorodu
            </p>
          </div>
        </div>
        <div data-parallax style={parallax(-24)} className="pointer-events-none absolute bottom-[-80px] right-[8%] hidden lg:block">
          <div data-reveal style={delay(320)} className="-rotate-[4deg] rounded-2xl bg-orange p-5 text-white shadow-[0_24px_48px_-28px_rgb(245_107_34/0.7)]">
            <p className="label-mono text-white/80">More possibilities</p>
            <p className="mt-2 flex items-center gap-2 font-display text-2xl tracking-tight">
              Lagos Island <Arrow /> Yaba
            </p>
          </div>
        </div>
      </div>

      <div data-reveal="fade" className="mt-16 space-y-3 lg:mt-24" aria-label="Example Lagos routes">
        <Marquee duration={80}>
          {routes.map(([a, b], i) => (
            <RouteChip key={i} from={a} to={b} tone={i % 3 === 1 ? "dark" : "light"} />
          ))}
        </Marquee>
        <Marquee duration={95} reverse>
          {[...routes].reverse().map(([a, b], i) => (
            <RouteChip key={i} from={b} to={a} tone={i % 4 === 2 ? "dark" : "light"} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
