"use client";

import { useRef, useState } from "react";
import clsx from "clsx";
import { howItWorks } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";

const icons = [
  // details / verify / conversation
  <path key="a" d="M5 7h14M5 12h10M5 17h7" />,
  // match / journey / capture
  <path key="b" d="M4 18c4 0 3-8 8-8s5-5 8-5M4 18h.01M20 5h.01" />,
  // handover / carry / approve
  <path key="c" d="m5 12 4.5 4.5L19 7" />,
];

const pill = ["bg-orange", "bg-ink", "bg-purple"];

/** Three steps per journey; tabs switch between Send, Go and Business AI. */
export function HowItWorks() {
  const [tab, setTab] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const current = howItWorks.tabs[tab];

  // Arrow keys move between tabs (WAI-ARIA tabs pattern)
  const onKeyDown = (e: React.KeyboardEvent) => {
    const n = howItWorks.tabs.length;
    const next = e.key === "ArrowRight" ? (tab + 1) % n : e.key === "ArrowLeft" ? (tab - 1 + n) % n : null;
    if (next === null) return;
    e.preventDefault();
    setTab(next);
    tabsRef.current?.querySelectorAll<HTMLButtonElement>("[role=tab]")[next]?.focus();
  };

  return (
    <section id="how-it-works" aria-labelledby="how-title" className="relative bg-paper py-24 lg:py-36">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>{howItWorks.label}</SectionLabel>
            <h2 id="how-title" data-reveal="lines" className="display-lg mt-6">
              {howItWorks.title.map((line, i) => (
                <span key={i} className={clsx("line block", i === 1 && "text-muted")} style={{ ["--i" as string]: i }}>
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <div data-reveal>
            <div
              ref={tabsRef}
              role="tablist"
              aria-label="Choose a journey"
              onKeyDown={onKeyDown}
              className="inline-flex rounded-full border border-ink/10 bg-white p-1.5"
            >
              {howItWorks.tabs.map((t, i) => (
                <button
                  key={t.id}
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={tab === i}
                  aria-controls="how-panel"
                  tabIndex={tab === i ? 0 : -1}
                  onClick={() => setTab(i)}
                  className={clsx(
                    "rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors duration-300",
                    tab === i ? `${pill[i]} text-paper` : "text-ink/70 hover:text-ink",
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <p key={current.id} className="mt-4 animate-[fade-in_0.4s_var(--ease-out)] text-[15px] text-muted">
              {current.intro}
            </p>
          </div>
        </div>

        <div
          id="how-panel"
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
          className="relative mt-14 grid gap-4 lg:mt-16 lg:grid-cols-3 lg:gap-5"
        >
          {current.steps.map((s, i) => (
            <article
              key={i}
              data-reveal
              style={{ ["--d" as string]: `${i * 90}ms` }}
              className="relative flex min-h-[300px] flex-col overflow-hidden rounded-[28px] border border-line bg-white p-7 lg:min-h-[380px] lg:p-9"
            >
              <div className="flex items-center justify-between">
                <span
                  className={clsx(
                    "grid size-[52px] place-items-center rounded-full text-white transition-colors duration-300 lg:size-[60px]",
                    tab === 2 ? "bg-purple" : i === 1 ? "bg-ink" : "bg-orange",
                  )}
                >
                  <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {icons[i]}
                  </svg>
                </span>
                <span className="label-mono text-muted">
                  Step 0{i + 1} / {s.tag}
                </span>
              </div>
              <div
                key={`${current.id}-${i}`}
                className="mt-auto animate-[fade-in_0.45s_var(--ease-out)_both] pt-10"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <h3 className="font-display text-[clamp(1.7rem,2.4vw,2.3rem)] font-medium leading-[1] tracking-[-0.04em]">{s.title}</h3>
                <p className="mt-4 max-w-[40ch] text-[15.5px] leading-relaxed text-muted">{s.body}</p>
              </div>
              <span aria-hidden className="pointer-events-none absolute bottom-3 right-6 font-display text-[7rem] font-medium leading-none tracking-[-0.06em] text-ink/[0.04]">
                0{i + 1}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
