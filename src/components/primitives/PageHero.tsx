import type { ReactNode } from "react";
import type { Tone, SkeletonSpec } from "@/content/types";
import { Section } from "./Section";
import { SectionLabel } from "./SectionLabel";
import { Skeleton } from "./Skeleton";

export function PageHero({
  tone = "paper",
  label,
  title,
  body,
  children,
}: {
  tone?: Tone;
  label?: string;
  title: string;
  body?: SkeletonSpec;
  children?: ReactNode;
}) {
  return (
    <Section tone={tone} className="pt-14 pb-10 md:pt-20 md:pb-14">
      {label && <SectionLabel label={label} />}
      <h1 className="font-display mt-3 max-w-[20ch] text-[clamp(36px,4.5vw,56px)] leading-[1.08] tracking-[-0.02em] font-medium">
        {title}
      </h1>
      {body && <Skeleton spec={body} className="mt-5 max-w-xl" />}
      {children}
    </Section>
  );
}
