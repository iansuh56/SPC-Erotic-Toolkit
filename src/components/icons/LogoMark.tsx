/**
 * 28px square, four quadrants: indigo fill, yellow top-right, seafoam
 * bottom-left, as specified in the Bold Blocks v3 header spec.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 28 28"
      width="28"
      height="28"
      className={className}
    >
      <rect width="28" height="28" fill="var(--indigo)" />
      <rect x="14" y="0" width="14" height="14" fill="var(--yellow)" />
      <rect x="0" y="14" width="14" height="14" fill="var(--seafoam)" />
    </svg>
  );
}
