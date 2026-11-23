import clsx from "clsx";
import { delay } from "./delay";

type Props = {
  /** Each item is a line; a line may contain inline elements (e.g. a logo). */
  lines: readonly React.ReactNode[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  lineClassName?: (i: number) => string | undefined;
  /** Base delay in ms before the first line. */
  wait?: number;
  id?: string;
};

/**
 * Headline whose lines fade up one after another when scrolled into view.
 * Server-rendered, animated by CSS only. Each array item is a line.
 */
export function Title({ lines, as: Tag = "h2", className, lineClassName, wait, id }: Props) {
  return (
    <Tag id={id} data-reveal="lines" className={className} style={wait ? delay(wait) : undefined}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={clsx("line block", lineClassName?.(i))}
          style={{ ["--i" as string]: i }}
        >
          {line}
        </span>
      ))}
    </Tag>
  );
}
