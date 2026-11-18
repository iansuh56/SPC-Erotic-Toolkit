import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/primitives/Section";
import { SectionLabel } from "@/components/primitives/SectionLabel";

function PathwayCard({
  tone,
  audience,
  title,
  href,
  goLabel,
}: {
  tone: "seafoam" | "yellow";
  audience: string;
  title: string;
  href: string;
  goLabel: string;
}) {
  const toneClass = tone === "seafoam" ? "bg-seafoam" : "bg-yellow";
  return (
    <Link href={href} className={`flex min-h-[220px] flex-col justify-between p-8 text-ink ${toneClass}`}>
      <p className="font-mono text-[13px] font-medium uppercase tracking-[0.1em]">{audience}</p>
      <div>
        <p className="font-display text-[28px] leading-tight">{title}</p>
        <span className="mt-4 inline-flex items-center gap-2 font-sans text-[16px] font-semibold">
          {goLabel} <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

export function Pathways() {
  const { pathways } = siteConfig.home;

  return (
    <Section tone="paper">
      <SectionLabel index={pathways.index} label={pathways.label} />
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <PathwayCard tone="seafoam" goLabel={pathways.goLabel} {...pathways.learners} />
        <PathwayCard tone="yellow" goLabel={pathways.goLabel} {...pathways.adults} />
      </div>
    </Section>
  );
}
