import clsx from "clsx";
import { Arrow } from "./Arrow";

export type Variant = "orange" | "ink" | "purple" | "paper" | "outline" | "glass";

const variants: Record<Variant, string> = {
  orange: "bg-orange text-white hover:bg-orange-deep",
  ink: "bg-ink text-paper hover:bg-ink-2",
  purple: "bg-purple text-white hover:bg-purple-deep",
  paper: "bg-paper text-ink hover:bg-white",
  outline: "border border-ink/20 text-ink hover:border-ink",
  glass: "border border-white/40 bg-white/10 text-white hover:bg-white/20",
};

export type ButtonStyle = {
  variant?: Variant;
  arrow?: "up-right" | "right" | "down" | null;
  size?: "md" | "lg";
  className?: string;
};

export function buttonClasses({ variant = "orange", size = "md", className }: ButtonStyle) {
  return clsx(
    "group relative inline-flex items-center justify-center gap-5 rounded-full font-semibold tracking-[-0.01em]",
    "transition-[background-color,color,border-color] duration-300",
    size === "lg" ? "h-14 pl-7 pr-5 text-[15px]" : "h-12 pl-5 pr-3.5 text-[14px]",
    variants[variant],
    className,
  );
}

export function ButtonInner({ children, arrow = "up-right" }: { children: React.ReactNode; arrow?: ButtonStyle["arrow"] }) {
  return (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="grid size-7 place-items-center rounded-full bg-current/15">
          <Arrow
            dir={arrow}
            className={clsx(
              "text-[15px] transition-transform duration-300",
              arrow === "up-right" && "group-hover:translate-x-[2px] group-hover:-translate-y-[2px]",
              arrow === "right" && "group-hover:translate-x-[3px]",
              arrow === "down" && "group-hover:translate-y-[3px]",
            )}
          />
        </span>
      )}
    </>
  );
}

/** Link-style button. Server-safe; in-page hash links use native smooth scrolling. */
export function ButtonLink({
  href,
  external,
  children,
  ...style
}: ButtonStyle & { href: string; external?: boolean; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={buttonClasses(style)}
    >
      <ButtonInner arrow={style.arrow}>{children}</ButtonInner>
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
