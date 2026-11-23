"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { nav } from "@/content/site";
import { Wordmark } from "@/components/brand/Wordmark";
import { CtaButton } from "@/components/ui/Button";
import { Arrow } from "@/components/ui/Arrow";

export function Header({ variant = "home" }: { variant?: "home" | "legal" }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - last) > 6) {
        setHidden(y > 640 && y > last);
        last = y;
      }
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu]);

  const linkHref = (href: string) => (variant === "home" ? href : `/${href}`);
  const homeHref = variant === "home" ? "#top" : "/";

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 border-b transition-[translate,background-color,border-color] duration-500 ease-[var(--ease-out)]",
          hidden && !menu ? "-translate-y-full" : "translate-y-0",
          scrolled || menu
            ? "border-ink/[0.07] bg-paper/95"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="container-x flex h-[72px] items-center gap-8 lg:h-[80px]">
          <a
            href={homeHref}
            aria-label="Aellpr home"
            onClick={() => setMenu(false)}
          >
            <Wordmark className="h-8 w-auto lg:h-9" />
          </a>

          <nav
            aria-label="Primary"
            className="ml-auto hidden items-center gap-1 md:flex"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={linkHref(item.href)}
                className="label-mono group relative rounded-full px-4 py-2 text-ink/75 transition-colors hover:text-ink"
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-orange transition-transform duration-500 ease-[var(--ease-out)] group-hover:origin-left group-hover:scale-x-100" />
                </span>
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3 md:ml-4">
            <span className="hidden sm:block">
              <CtaButton cta="nav" />
            </span>
            <button
              type="button"
              className="relative grid size-12 place-items-center rounded-full border border-ink/15 md:hidden"
              aria-expanded={menu}
              aria-controls="mobile-menu"
              aria-label={menu ? "Close menu" : "Open menu"}
              onClick={() => setMenu((m) => !m)}
            >
              <span
                className={clsx(
                  "absolute h-[1.5px] w-5 bg-ink transition-transform duration-300",
                  menu ? "rotate-45" : "-translate-y-[4px]",
                )}
              />
              <span
                className={clsx(
                  "absolute h-[1.5px] w-5 bg-ink transition-transform duration-300",
                  menu ? "-rotate-45" : "translate-y-[4px]",
                )}
              />
            </button>
          </div>
        </div>
        <div
          aria-hidden
          className="scroll-progress absolute inset-x-0 bottom-[-1px] h-[2px] bg-orange"
        />
      </header>

      {/* Mobile menu — always in the DOM, faded in/out with CSS; inert while closed */}
      <div
        id="mobile-menu"
        data-scroll-lock={menu ? "true" : undefined}
        inert={!menu}
        className={clsx(
          "fixed inset-0 z-40 flex flex-col bg-paper pt-[96px] transition-[opacity,visibility] duration-300 md:hidden",
          menu ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="container-x flex flex-col">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={linkHref(item.href)}
              onClick={() => setMenu(false)}
              style={{ transitionDelay: menu ? `${80 + i * 40}ms` : "0ms" }}
              className={clsx(
                "flex items-center justify-between border-b border-line py-5 font-display text-[2.4rem] font-medium leading-none tracking-[-0.04em] transition-[opacity,translate] duration-500 ease-[var(--ease-out)]",
                menu ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
              )}
            >
              {item.label}
              <Arrow dir="right" className="text-2xl text-orange" />
            </a>
          ))}
        </nav>
        <div className="container-x mt-auto pb-10">
          <CtaButton cta="nav" size="lg" className="w-full justify-between" />
          <p className="label-mono mt-6 text-muted">
            Starting in Lagos, Nigeria
          </p>
        </div>
      </div>
    </>
  );
}
