import clsx from "clsx";

/** Mono chapter label, e.g. "03 / From you to them", with a short rule. */
export function SectionLabel({
  children,
  className,
  tone = "ink",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "ink" | "light";
}) {
  return (
    <p
      data-reveal
      className={clsx(
        "label-mono flex items-center gap-3",
        tone === "ink" ? "text-ink/60" : "text-white/65",
        className,
      )}
    >
      <span className={clsx("h-px w-8", tone === "ink" ? "bg-orange" : "bg-orange-glow")} />
      {children}
    </p>
  );
}
