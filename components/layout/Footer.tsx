import { footer, site } from "@/content/site";
import { Wordmark } from "@/components/brand/Wordmark";
import { Arrow } from "@/components/ui/Arrow";

/** Footer — server-rendered, no scripts. */
export function Footer() {
  const columns = [
    { title: "Explore", links: footer.explore },
    { title: "Get to know us", links: footer.about },
    { title: "Legal", links: footer.legal },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="container-x relative pt-20 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <p className="display-md max-w-[12ch] text-paper">
              Everyday moves. <span className="text-orange-glow">Extra possibilities.</span>
            </p>
            <a
              href="https://maps.google.com/?q=Lagos,Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex flex-col"
            >
              <span className="label-mono text-paper/50">Starting in</span>
              <span className="mt-1 inline-flex items-center gap-2 font-display text-3xl tracking-tight">
                Lagos, Nigeria
                <Arrow className="text-orange group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="label-mono text-paper/60">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="group inline-flex items-center gap-2 text-[15px] text-paper/85 transition hover:text-white"
                      >
                        <span className="relative">
                          {l.label}
                          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-orange transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-paper/10 pt-6 text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono">
            © {site.year} AELLPR · {site.tagline}
          </p>
          <a
            href="#"
            className="label-mono inline-flex items-center gap-2 self-start transition-colors hover:text-white sm:self-auto"
          >
            Back to top <Arrow dir="up" />
          </a>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none relative mt-6 select-none overflow-hidden">
        <div className="flex justify-center">
          <Wordmark tone="white" sizes="90vw" className="h-auto w-[88%] max-w-[1180px] translate-y-[24%] opacity-[0.09]" />
        </div>
      </div>
    </footer>
  );
}
