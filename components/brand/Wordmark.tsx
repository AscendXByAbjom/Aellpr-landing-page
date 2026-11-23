import Image from "next/image";
import clsx from "clsx";
import logo from "@/public/brand/aellpr-logo.png";
import logoWhite from "@/public/brand/aellpr-logo-white.png";

/**
 * The Aellpr logo
 */
export function Wordmark({
  className,
  tone = "color",
  sizes = "120px",
}: {
  className?: string;
  tone?: "color" | "white";
  sizes?: string;
}) {
  return (
    <Image
      src={tone === "white" ? logoWhite : logo}
      alt="Aellpr"
      sizes={sizes}
      className={clsx("select-none", className)}
      draggable={false}
    />
  );
}

/**
 * Renders `text` with the last "Aellpr" swapped for the logo, sized to the
 * surrounding font (≈ ascender height) and sat on the text baseline.
 * Text without the word is returned unchanged.
 */
export function WithLogo({
  text,
  sizes = "240px",
}: {
  text: string;
  sizes?: string;
}) {
  const word = "Aellpr";
  const at = text.lastIndexOf(word);
  if (at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <span className="whitespace-nowrap">
        <Wordmark
          sizes={sizes}
          className="inline-block h-[0.98em] w-auto align-[-0.26em]"
        />
        {text.slice(at + word.length)}
      </span>
    </>
  );
}
