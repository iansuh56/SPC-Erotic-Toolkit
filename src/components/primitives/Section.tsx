import type { ReactNode } from "react";
import type { Tone } from "@/content/types";
import { Container } from "./Container";

/**
 * Tone sets background + the text color the contrast spec requires for
 * that background, so a page section never has to pick text color itself.
 */
const toneClasses: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  offwhite: "bg-offwhite text-ink",
  ink: "bg-ink text-offwhite",
  indigo: "bg-indigo text-offwhite",
  seafoam: "bg-seafoam text-ink",
  rose: "bg-rose text-ink",
  yellow: "bg-yellow text-ink",
};

export function Section({
  tone = "paper",
  children,
  className = "",
  containerClassName = "",
  padded = true,
  id,
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  padded?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`tone-${tone} ${toneClasses[tone]} ${
        padded ? "py-14 md:py-22" : ""
      } ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
