export function SectionLabel({
  index,
  label,
  className = "",
}: {
  index?: string;
  label: string;
  className?: string;
}) {
  return (
    <p
      className={`font-mono text-[13px] font-medium uppercase tracking-[0.1em] ${className}`}
    >
      {index ? `${index} · ${label}` : label}
    </p>
  );
}
