export function ProgressBar({ percent }: { percent: number }) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(clamped)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="h-1.5 w-full bg-placeholder"
    >
      <div className="h-full bg-seafoam transition-[width]" style={{ width: `${clamped}%` }} />
    </div>
  );
}
