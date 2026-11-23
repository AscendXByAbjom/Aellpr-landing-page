import { faq } from "@/content/site";
import { Title } from "@/components/motion/Title";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CtaButton } from "@/components/ui/Button";

/**
 * Native <details> accordion — works without JavaScript, one open at a time
 * (shared `name`), and animates its height in browsers that support
 * ::details-content.
 */
export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative py-24 lg:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionLabel>{faq.label}</SectionLabel>
          <Title id="faq-title" lines={faq.title} className="display-lg mt-6" lineClassName={(i) => (i === 1 ? "text-muted" : undefined)} />
          <p data-reveal className="mt-6 max-w-[34ch] text-[16px] leading-relaxed text-muted">
            Still deciding? Get notified the moment Aellpr opens up for you.
          </p>
          <div data-reveal className="mt-7">
            <CtaButton cta="nav" variant="ink" />
          </div>
        </div>

        <div data-reveal className="border-t border-line">
          {faq.items.map((item, i) => (
            <details key={item.q} name="faq" open={i === 0} className="faq-item group border-b border-line">
              <summary className="flex w-full items-center gap-6 py-6 text-left lg:py-7">
                <span className="label-mono w-8 shrink-0 text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="flex-1 font-display text-[clamp(1.15rem,1.6vw,1.45rem)] font-medium leading-snug tracking-[-0.02em] transition-colors group-hover:text-orange-deep">
                  {item.q}
                </h3>
                <span
                  aria-hidden
                  className="relative grid size-10 shrink-0 place-items-center rounded-full border border-ink/15 transition-[rotate,background-color,border-color,color] duration-300 group-open:rotate-45 group-open:border-orange group-open:bg-orange group-open:text-white"
                >
                  <span className="absolute h-[1.5px] w-3.5 bg-current" />
                  <span className="absolute h-3.5 w-[1.5px] bg-current" />
                </span>
              </summary>
              <p className="max-w-[60ch] pb-7 pl-14 text-[16px] leading-[1.75] text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
