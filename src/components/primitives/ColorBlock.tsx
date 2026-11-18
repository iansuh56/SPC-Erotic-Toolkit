import type { ReactNode } from "react";
import type { BlockTone } from "@/content/types";

const toneClasses: Record<BlockTone, string> = {
  indigo: "bg-indigo text-offwhite",
  seafoam: "bg-seafoam text-ink",
  rose: "bg-rose text-ink",
  yellow: "bg-yellow text-ink",
};

/** A solid color square used for topic numbers, key-idea callouts, etc. */
export function ColorBlock({
  tone,
  size = 64,
  children,
  className = "",
}: {
  tone: BlockTone;
  size?: number;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center font-mono text-sm font-medium ${toneClasses[tone]} ${className}`}
      style={{ width: size, height: size }}
    >
      {children}
    </div>
  );
}
