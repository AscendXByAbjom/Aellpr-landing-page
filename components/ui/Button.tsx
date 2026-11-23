"use client";

import { ctas, type CtaTarget } from "@/content/site";
import { useComingSoon } from "@/components/providers/ComingSoon";
import { ButtonInner, ButtonLink, buttonClasses, type ButtonStyle } from "./ButtonLink";

export { ButtonLink } from "./ButtonLink";

/** Renders a CTA from content/site.ts so destinations can be changed in one place. */
export function CtaButton({ cta, label, ...style }: ButtonStyle & { cta: keyof typeof ctas; label?: string }) {
  const { open } = useComingSoon();
  const entry = ctas[cta];
  const target: CtaTarget = entry.target;
  const text = label ?? entry.label;

  if ("href" in target) {
    return (
      <ButtonLink href={target.href} external={target.external} {...style}>
        {text}
      </ButtonLink>
    );
  }

  return (
    <button type="button" onClick={() => open(target.audience)} className={buttonClasses(style)}>
      <ButtonInner arrow={style.arrow}>{text}</ButtonInner>
    </button>
  );
}
