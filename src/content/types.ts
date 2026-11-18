/**
 * Shared content types. These describe the SHAPE of every placeholder the
 * group will eventually fill in — not the words themselves. See
 * CONTENT_GUIDE.md for where each field surfaces on the site.
 */

export type Tone =
  | "paper"
  | "offwhite"
  | "ink"
  | "indigo"
  | "seafoam"
  | "rose"
  | "yellow";

export type BlockTone = "indigo" | "seafoam" | "rose" | "yellow";

export interface NavLink {
  label: string;
  href: string;
}

export interface SkeletonSpec {
  /** Number of placeholder text lines to render. */
  lines: number;
  /** Optional per-line width overrides, e.g. ["100%", "80%", "60%"]. */
  widths?: string[];
}
