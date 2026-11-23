import Image, { type StaticImageData } from "next/image";
import clsx from "clsx";

/**
 * Device frame: dark bezel around a 9:20 screen (the aspect of the app
 * screenshots in public/mockups). Children are absolutely-positioned screens.
 */
export function Phone({
  children,
  className,
  label = "Design preview",
  labelClassName = "text-muted",
  tone = "ink",
}: {
  children: React.ReactNode;
  className?: string;
  /** Caption under the device; pass null to omit it. */
  label?: string | null;
  labelClassName?: string;
  tone?: "ink" | "purple";
}) {
  return (
    <div
      className={clsx(
        "relative w-[min(290px,74vw)] rounded-[40px] p-[7px] shadow-[0_50px_90px_-40px_rgb(23_37_43/0.5)]",
        tone === "purple" ? "bg-purple-deep" : "bg-ink",
        className,
      )}
    >
      <div className="relative aspect-[9/20] overflow-hidden rounded-[33px] bg-white">{children}</div>
      {label && (
        <span className={clsx("label-mono absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9.5px]", labelClassName)}>
          {label}
        </span>
      )}
    </div>
  );
}

/** One app screenshot filling the phone screen (lazy-loaded, AVIF/WebP via next/image). */
export function AppShot({ src, alt }: { src: StaticImageData; alt: string }) {
  return <Image src={src} alt={alt} fill sizes="290px" className="object-cover object-top" />;
}

export function Check({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={clsx("size-3.5", className)} aria-hidden>
      <path d="M3.5 8.5 6.5 11.5 12.5 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
