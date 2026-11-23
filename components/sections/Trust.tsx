import { trust } from "@/content/site";
import { Title } from "@/components/motion/Title";
import { delay } from "@/components/motion/delay";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Arrow } from "@/components/ui/Arrow";
import { Check } from "@/components/mockups/Phone";

const pillarIcons = [
  // identity
  <g key="i">
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <circle cx="9" cy="11" r="2.2" />
    <path d="M6 16c.6-1.4 1.7-2 3-2s2.4.6 3 2M14.5 10h4M14.5 13.5h3" />
  </g>,
  // visibility
  <g key="v">
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </g>,
  // handover
  <g key="h">
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <path d="M14 14h3v3h-3zM20 14v.01M20 20h-6M17 20v-3" />
  </g>,
];

// The two handover codes: one for each side of the journey (illustrative digits).
const otps = [
  { label: "Pickup OTP", digits: ["7", "3", "5", "9"], note: "Shared only between the sender and the commuter." },
  { label: "Delivery OTP", digits: ["4", "8", "2", "1"], note: "Shared only between the receiver and the commuter." },
];

/** Trust chapter — static and calm; check marks draw in as each pillar arrives. */
export function Trust() {
  return (
    <section id="trust" aria-labelledby="trust-title" className="relative overflow-hidden bg-paper-2 py-28 lg:py-40">

      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-20">
          <div>
            <SectionLabel>{trust.label}</SectionLabel>
            <Title id="trust-title" lines={trust.title} className="display-lg mt-6" lineClassName={(i) => (i === 1 ? "text-orange" : undefined)} />
          </div>
          <div>
            <p data-reveal className="text-[17px] leading-[1.75] text-muted">
              {trust.body}
            </p>
            <a data-reveal href="#faq" className="group mt-5 inline-flex items-center gap-2 text-[15px] font-semibold">
              A few useful answers <Arrow className="text-orange group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          {/* Handover card */}
          <div data-reveal className="relative overflow-hidden rounded-[32px] bg-ink p-8 text-paper lg:flex lg:flex-col lg:p-12">
            <div aria-hidden className="absolute -right-32 -top-32 size-96 rounded-full bg-[radial-gradient(closest-side,rgb(245_107_34/0.35),transparent)]" />
            <p className="label-mono relative text-paper/55">Handover check</p>
            <div className="relative mt-8 grid gap-8 sm:grid-cols-2 sm:gap-6">
              {otps.map((o) => (
                <div key={o.label}>
                  <p className="text-[13px] text-paper/70">{o.label}</p>
                  <div className="mt-2 flex gap-2">
                    {o.digits.map((d, i) => (
                      <span key={i} className="grid h-14 w-11 place-items-center rounded-xl bg-paper/10 font-display text-2xl font-medium">
                        {d}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 max-w-[26ch] text-[12.5px] leading-relaxed text-paper/60">{o.note}</p>
                </div>
              ))}
            </div>
            {/* Who shares which code */}
            <div className="relative mt-12 hidden items-center sm:flex lg:mt-auto lg:pt-12" aria-hidden>
              {["Sender", "Commuter", "Receiver"].map((who, i) => (
                <div key={who} className="contents">
                  {i > 0 && (
                    <div className="relative mx-2 flex-1">
                      <div className="h-px border-t border-dashed border-paper/30" />
                      <span className="label-mono absolute left-1/2 top-[-22px] -translate-x-1/2 whitespace-nowrap text-[9.5px] text-orange-glow">
                        {i === 1 ? "Pickup OTP" : "Delivery OTP"}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col items-center gap-1.5">
                    <span className={i === 1 ? "grid size-10 place-items-center rounded-full bg-orange text-[12px] font-semibold" : "grid size-10 place-items-center rounded-full bg-paper/10 text-[12px] font-semibold"}>
                      {who[0]}
                    </span>
                    <span className="text-[11.5px] text-paper/70">{who}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-10 inline-flex items-center gap-3 self-start rounded-full bg-leaf px-5 py-3 text-[14px] font-semibold">
              <span className="grid size-6 place-items-center rounded-full bg-white/20">
                <Check className="size-3.5" />
              </span>
              Right package · right person
            </div>
          </div>

          {/* Pillars */}
          <ol className="grid gap-4">
            {trust.pillars.map((p, i) => (
              <li key={p.tag} data-reveal style={delay(i * 90)} className="flex gap-4 rounded-[28px] border border-line bg-paper p-6 sm:gap-6 lg:p-8">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-cream text-orange-deep">
                  <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {pillarIcons[i]}
                  </svg>
                </span>
                <div className="flex-1">
                  <p className="label-mono text-muted">
                    0{i + 1} · {p.tag}
                  </p>
                  <h3 className="mt-2 font-display text-[1.7rem] font-medium leading-tight tracking-[-0.03em]">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.body}</p>
                </div>
                <svg viewBox="0 0 32 32" className="hidden size-8 shrink-0 self-start text-leaf sm:block" aria-hidden>
                  <circle cx="16" cy="16" r="15" fill="currentColor" opacity="0.12" />
                  <path data-draw pathLength={1} d="M9 16.5 14 21.5 23.5 11" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </li>
            ))}
          </ol>
        </div>

        {/* Promises — pulled from the Terms and Privacy Policy */}
        <div data-reveal className="mt-6 grid gap-px overflow-hidden rounded-[28px] border border-line bg-line lg:mt-10 lg:grid-cols-[1fr_1fr_1fr_auto]">
          {trust.promises.map((p) => (
            <p key={p} className="flex items-start gap-3 bg-paper p-6 text-[14.5px] leading-relaxed">
              <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-orange" />
              {p}
            </p>
          ))}
          <div className="flex flex-col justify-center gap-2 bg-paper p-6 text-[14px] font-semibold">
            <a href="/terms" className="group inline-flex items-center gap-2 hover:text-orange-deep">
              Terms & Conditions <Arrow className="group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </a>
            <a href="/privacy" className="group inline-flex items-center gap-2 hover:text-orange-deep">
              Privacy Policy <Arrow className="group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
