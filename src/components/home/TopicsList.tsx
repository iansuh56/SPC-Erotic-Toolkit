import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/primitives/Section";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { TopicRows } from "@/components/topics/TopicRows";

export function TopicsList() {
  const { topicsSection } = siteConfig.home;

  return (
    <Section tone="paper">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <SectionLabel index={topicsSection.index} label={topicsSection.label} />
          <h2 className="font-display mt-2 text-[40px] leading-[1.1] tracking-[-0.015em] font-medium">
            {topicsSection.heading}
          </h2>
        </div>
        <Link
          href={topicsSection.viewAllLink.href}
          className="flex min-h-11 items-center gap-2 font-sans text-[16px] font-semibold underline-offset-2 hover:underline"
        >
          {topicsSection.viewAllLink.label} <ArrowRight />
        </Link>
      </div>

      <div className="mt-8">
        <TopicRows />
      </div>
    </Section>
  );
}
