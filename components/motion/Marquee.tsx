import clsx from "clsx";

/**
 * Slow infinite CSS marquee.
 */
export function Marquee({
  children,
  reverse,
  duration = 70,
  className,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={clsx("marquee flex overflow-hidden", className)}>
      <div
        className="marquee-track flex w-max shrink-0"
        data-reverse={reverse ? "true" : undefined}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
