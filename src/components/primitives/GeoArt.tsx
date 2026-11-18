import type { BlockTone } from "@/content/types";

export type GeoShapeKind = "square" | "quarter-circle";
export type GeoCorner = "top-left" | "top-right" | "bottom-left" | "bottom-right";
export type GeoTone = BlockTone | "offwhite" | "ink";

export interface GeoShapeSpec {
  shape: GeoShapeKind;
  tone: GeoTone;
  size: number;
  corner: GeoCorner;
  /** Distance in px from the anchored corner, for layering shapes. */
  inset?: number;
}

const toneClasses: Record<GeoTone, string> = {
  indigo: "bg-indigo",
  seafoam: "bg-seafoam",
  rose: "bg-rose",
  yellow: "bg-yellow",
  offwhite: "bg-offwhite",
  ink: "bg-ink",
};

const cornerPosition: Record<GeoCorner, string> = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
};

/** Which single corner gets rounded to carve a quarter-circle out of a square. */
const quarterCircleRadius: Record<GeoCorner, string> = {
  "top-left": "rounded-br-full",
  "top-right": "rounded-bl-full",
  "bottom-left": "rounded-tr-full",
  "bottom-right": "rounded-tl-full",
};

/**
 * Decorative flat-shape compositions (squares, quarter-circles) built from
 * the design tokens. Purely visual — always aria-hidden.
 */
export function GeoArt({
  shapes,
  className = "",
}: {
  shapes: GeoShapeSpec[];
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none ${className}`}>
      {shapes.map((shape, i) => {
        const inset = shape.inset ?? 0;
        const style: Record<string, number> = { width: shape.size, height: shape.size };
        if (shape.corner.includes("top")) style.top = inset;
        if (shape.corner.includes("bottom")) style.bottom = inset;
        if (shape.corner.includes("left")) style.left = inset;
        if (shape.corner.includes("right")) style.right = inset;

        return (
          <div
            key={i}
            className={`absolute ${cornerPosition[shape.corner]} ${toneClasses[shape.tone]} ${
              shape.shape === "quarter-circle" ? quarterCircleRadius[shape.corner] : ""
            }`}
            style={style}
          />
        );
      })}
    </div>
  );
}
