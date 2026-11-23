import type { CSSProperties } from "react";

/** Stagger helper for [data-reveal] / [data-enter]: style={delay(120)}. */
export const delay = (ms: number): CSSProperties => ({ ["--d" as string]: `${ms}ms` });

/** Parallax strength for [data-parallax] (percent of the element's height). */
export const parallax = (p: number): CSSProperties => ({ ["--p" as string]: p });
