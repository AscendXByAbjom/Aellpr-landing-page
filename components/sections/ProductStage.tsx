"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Phone } from "@/components/mockups/Phone";

type Step = { title: string; body: string };

const INTERVAL = 5200;

/**
 * Steps on one side, the app preview on the other (presented on a tinted
 * panel, as on the reference site). Choosing a step shows its screen.
 * While on screen (and only when motion is allowed) it advances on its own
 * until the visitor picks a step themselves.
 */
export function ProductStage({
  id,
  steps,
  screens,
  product,
  note,
  mirrored,
}: {
  id: string;
  steps: Step[];
  screens: React.ReactNode[];
  product: "send" | "go";
  note?: string;
  mirrored?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(false);
  const [manual, setManual] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Auto-advance only while visible, motion allowed and not overridden.
  useEffect(() => {
    if (manual || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => setAuto(e.isIntersecting), { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [manual]);

  useEffect(() => {
    if (!auto || manual) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % steps.length), INTERVAL);
    return () => window.clearTimeout(t);
  }, [auto, manual, active, steps.length]);

  const choose = (i: number) => {
    setManual(true);
    setAuto(false);
    setActive(i);
  };

  const running = auto && !manual;

  return (
    <div ref={ref} className="container-x grid items-center gap-14 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
      <div className={clsx(mirrored && "lg:order-2")}>
        <ol className="space-y-3" aria-label="Steps">
          {steps.map((s, i) => {
            const on = i === active;
            return (
              <li key={s.title}>
                <button
                  type="button"
                  onClick={() => choose(i)}
                  aria-pressed={on}
                  aria-controls={`${id}-screens`}
                  className={clsx(
                    "w-full rounded-3xl border p-6 text-left transition-colors duration-300 lg:p-7",
                    on ? "border-line bg-white" : "border-transparent hover:bg-white/60",
                  )}
                >
                  <span className="flex items-baseline gap-5">
                    <span className={clsx("font-display text-[15px] font-semibold tabular-nums transition-colors", on ? "text-orange" : "text-muted")}>
                      0{i + 1}
                    </span>
                    <span className="flex-1">
                      <span className={clsx("block font-display text-[clamp(1.3rem,1.8vw,1.7rem)] font-medium leading-tight tracking-[-0.03em] transition-colors", on ? "text-ink" : "text-ink/75")}>
                        {s.title}
                      </span>
                      <span className="mt-2 block max-w-[44ch] text-[15px] leading-relaxed text-muted">
                        {s.body}
                      </span>
                    </span>
                  </span>
                  <span aria-hidden className="ml-[calc(15px+1.25rem)] mt-5 block h-[2px] overflow-hidden rounded-full bg-line">
                    {on && (
                      <span
                        key={`${active}-${running}`}
                        className="block h-full origin-left rounded-full bg-orange"
                        style={running ? { animation: `progress ${INTERVAL}ms linear both` } : undefined}
                      />
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
        {note && <p className="label-mono mt-5 pl-6 text-[10.5px] text-muted lg:pl-7">* {note}</p>}
      </div>

      <div
        data-reveal
        className={clsx("relative overflow-hidden rounded-[28px] bg-paper-3 px-6 pb-16 pt-16 sm:px-10", mirrored && "lg:order-1")}
      >
        <p className="label-mono absolute left-6 top-6 text-ink/60 sm:left-8">The {product} experience</p>
        <p className="label-mono absolute right-6 top-6 tabular-nums text-ink/60 sm:right-8" aria-hidden>
          0{active + 1} / 0{steps.length}
        </p>
        {/* faint rings behind the phone */}
        <div aria-hidden className="absolute left-1/2 top-1/2 aspect-square w-[min(440px,92%)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/12" />
        <div aria-hidden className="absolute left-1/2 top-1/2 aspect-square w-[min(380px,80%)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ink/10" />
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-[0.2em] -right-[0.04em] select-none font-display text-[clamp(6rem,12vw,10rem)] font-semibold leading-none tracking-[-0.06em] text-ink/[0.06]"
        >
          {product}.
        </span>

        <div className="relative flex justify-center">
          <Phone label={null}>
            <div id={`${id}-screens`} className="absolute inset-0">
              {screens.map((screen, i) => (
                <div
                  key={i}
                  inert={i !== active}
                  aria-hidden={i !== active}
                  className={clsx(
                    "absolute inset-0 transition-[opacity,translate] duration-500 ease-[var(--ease-out)]",
                    i === active ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                  )}
                >
                  {screen}
                </div>
              ))}
            </div>
          </Phone>
        </div>
        <p className="label-mono absolute bottom-6 left-6 text-ink/60 sm:left-8">Design preview</p>
      </div>
    </div>
  );
}
