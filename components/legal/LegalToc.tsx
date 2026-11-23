"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import type { LegalSection } from "@/content/legal/types";

/** Sticky contents with scroll-spy; collapses to a disclosure on mobile. */
export function LegalToc({ sections }: { sections: LegalSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  const list = (
    <ol className="space-y-0.5">
      {sections.map((s) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            onClick={() => setOpen(false)}
            aria-current={active === s.id ? "location" : undefined}
            className={clsx(
              "flex gap-3 rounded-lg py-1.5 pr-2 text-[13.5px] leading-snug transition-colors",
              s.level === 3 ? "pl-8" : "pl-2",
              active === s.id ? "bg-cream font-medium text-ink" : "text-muted hover:text-ink",
            )}
          >
            <span
              className={clsx(
                "w-6 shrink-0 font-mono text-[11px] tabular-nums",
                active === s.id ? "text-orange-deep" : "text-muted/70",
              )}
            >
              {s.number}
            </span>
            <span>{s.heading}</span>
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <div className="no-print lg:hidden">
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between rounded-2xl border border-line bg-white px-5 py-4 text-[15px] font-semibold"
        >
          Contents
          <span aria-hidden className={clsx("text-xl text-orange transition-transform", open && "rotate-45")}>
            +
          </span>
        </button>
        {open && <div className="mt-2 rounded-2xl border border-line bg-white p-3">{list}</div>}
      </div>
      <nav aria-label="Contents" className="no-print hidden lg:block">
        <p className="label-mono mb-4 pl-2 text-muted">Contents</p>
        <div className="max-h-[calc(100svh-220px)] overflow-y-auto pr-2">
          {list}
        </div>
      </nav>
    </>
  );
}
