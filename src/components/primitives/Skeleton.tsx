import type { SkeletonSpec } from "@/content/types";

/** A single gray placeholder bar standing in for a line of body copy. */
export function SkeletonLine({
  width = "100%",
  className = "",
}: {
  width?: string;
  className?: string;
}) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={`block h-[0.95em] bg-current/15 ${className}`}
      style={{ width }}
    />
  );
}

const defaultWidths = ["100%", "92%", "78%", "60%"];

/** A stack of skeleton bars representing a paragraph's worth of placeholder text. */
export function Skeleton({
  spec,
  className = "",
  lineClassName = "",
}: {
  spec: SkeletonSpec;
  className?: string;
  lineClassName?: string;
}) {
  const widths = spec.widths ?? defaultWidths;
  return (
    <div className={`flex flex-col gap-2 ${className}`} aria-hidden="true">
      {Array.from({ length: spec.lines }).map((_, i) => (
        <SkeletonLine
          key={i}
          width={widths[i % widths.length]}
          className={lineClassName}
        />
      ))}
    </div>
  );
}
