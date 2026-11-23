import clsx from "clsx";

export function Arrow({ dir = "up-right", className }: { dir?: "up-right" | "right" | "down" | "up"; className?: string }) {
  const rot = { "up-right": 0, right: 45, down: 135, up: -45 }[dir];
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={clsx("size-[1em] shrink-0 transition-transform duration-300 ease-[var(--ease-expo)]", className)}
      style={{ rotate: `${rot}deg` }}
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
