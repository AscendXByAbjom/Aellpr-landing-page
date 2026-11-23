import { Fragment } from "react";
import Link from "next/link";
import clsx from "clsx";
import type { LegalBlock, LegalDoc } from "@/content/legal/types";
import { legalMeta } from "@/content/legal/meta";
import { LegalToc } from "./LegalToc";
import { Arrow } from "@/components/ui/Arrow";

/** Renders text, swapping {{contactEmail}} for the configured address. */
function Rich({ text }: { text: string }) {
  const parts = text.split("{{contactEmail}}");
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>
          {p}
          {i < parts.length - 1 && (
            <a
              href={`mailto:${legalMeta.contactEmail}`}
              className={clsx(
                "font-medium underline decoration-orange underline-offset-4",
                legalMeta.isPlaceholder && "rounded bg-cream-2 px-1",
              )}
            >
              {legalMeta.contactEmail}
            </a>
          )}
        </Fragment>
      ))}
    </>
  );
}

function Blocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((b, i) =>
        b.type === "p" ? (
          <p key={i} className="mt-4 text-[16.5px] leading-[1.8] text-ink/85">
            <Rich text={b.text} />
          </p>
        ) : (
          <ul key={i} className="mt-4 space-y-2.5">
            {b.items.map((item, j) => (
              <li key={j} className="flex gap-3 text-[16.5px] leading-[1.75] text-ink/85">
                <span className="mt-[11px] size-1.5 shrink-0 rounded-full bg-orange" />
                <span>
                  <Rich text={item} />
                </span>
              </li>
            ))}
          </ul>
        ),
      )}
    </>
  );
}

const docs = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
];

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  const self = `/${doc.slug}`;
  const other = docs.find((d) => d.href !== self)!;

  return (
    <article className="pb-28">
      {/* Masthead */}
      <header className="border-b border-line bg-paper-2 pb-14 pt-[132px] lg:pb-20 lg:pt-[168px]">
        <div className="container-x">
          <nav aria-label="Legal documents" className="no-print flex flex-wrap gap-2">
            {docs.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={l.href === self ? "page" : undefined}
                className={clsx(
                  "rounded-full px-4 py-2 text-[13px] font-semibold transition",
                  l.href === self ? "bg-ink text-paper" : "border border-ink/15 hover:border-ink",
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="label-mono mt-10 flex items-center gap-3 text-ink/60">
            <span className="h-px w-8 bg-orange" /> {doc.eyebrow}
          </p>
          <h1 className="display-lg mt-5">{doc.title}</h1>
          <p className="mt-5 max-w-[52ch] text-[18px] leading-relaxed text-muted">{doc.summary}</p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-[14px]">
            <div>
              <dt className="label-mono text-muted">Effective date</dt>
              <dd className={clsx("mt-1 font-medium", legalMeta.isPlaceholder && "text-orange-deep")}>
                {legalMeta.effectiveDate}
              </dd>
            </div>
            <div>
              <dt className="label-mono text-muted">Last updated</dt>
              <dd className={clsx("mt-1 font-medium", legalMeta.isPlaceholder && "text-orange-deep")}>
                {legalMeta.lastUpdated}
              </dd>
            </div>
            <div>
              <dt className="label-mono text-muted">Questions</dt>
              <dd className="mt-1 font-medium">
                <a
                  href={`mailto:${legalMeta.contactEmail}`}
                  className="underline decoration-orange underline-offset-4"
                >
                  {legalMeta.contactEmail}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="container-x mt-10 grid gap-10 lg:mt-16 lg:grid-cols-[300px_1fr] lg:gap-20">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <LegalToc sections={doc.sections} />
        </aside>

        <div className="max-w-[72ch]">
          <div className="rounded-2xl border border-line bg-white p-5 text-[14.5px] leading-relaxed">
            <p className="label-mono text-muted">Plain-language key</p>
            <p className="mt-2">
              <strong className="font-semibold">Sender</strong> — the person who needs a package moved.{" "}
              <strong className="font-semibold">Commuter (“Aellpr”)</strong> — someone already commuting along, or
              close to, a compatible route who carries the package.
            </p>
          </div>

          <div className="mt-6">
            <Blocks blocks={doc.intro} />
          </div>

          {doc.sections.map((s) => {
            const H = s.level === 2 ? "h2" : "h3";
            return (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="pt-12">
                <H
                  id={`${s.id}-h`}
                  className={clsx(
                    "group flex items-baseline gap-4 font-display font-medium tracking-[-0.03em]",
                    s.level === 2
                      ? "text-[clamp(1.6rem,2.4vw,2.1rem)] leading-tight"
                      : "text-[1.35rem] leading-snug",
                  )}
                >
                  <span className="font-mono text-[0.55em] font-semibold tracking-normal text-orange-deep">
                    {s.number}
                  </span>
                  <span>{s.heading}</span>
                  <a
                    href={`#${s.id}`}
                    aria-label={`Link to section ${s.number}`}
                    className="no-print text-[0.6em] text-muted opacity-0 transition group-hover:opacity-100 focus:opacity-100"
                  >
                    #
                  </a>
                </H>
                <Blocks blocks={s.blocks} />
              </section>
            );
          })}

          <div className="no-print mt-20 flex flex-col gap-4 rounded-[28px] bg-ink p-8 text-paper sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="label-mono text-paper/50">Also read</p>
              <p className="mt-1 font-display text-2xl tracking-tight">{other.label}</p>
            </div>
            <Link
              href={other.href}
              className="inline-flex h-12 items-center gap-3 self-start rounded-full bg-orange px-6 text-[14px] font-semibold text-white transition hover:bg-orange-deep sm:self-auto"
            >
              Read {other.label} <Arrow dir="right" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
