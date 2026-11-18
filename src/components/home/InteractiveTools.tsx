import { siteConfig } from "@/content/site";
import { Section } from "@/components/primitives/Section";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Skeleton } from "@/components/primitives/Skeleton";
import { Button } from "@/components/primitives/Button";
import { ActivityPreviewCard } from "@/components/activities/ActivityPreviewCard";

export function InteractiveTools() {
  const { interactive } = siteConfig.home;

  return (
    <Section tone="rose">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionLabel index={interactive.index} label={interactive.label} />
          <h2 className="font-display mt-2 text-[40px] leading-[1.1] tracking-[-0.015em] font-medium">
            {interactive.heading}
          </h2>
          <Skeleton spec={interactive.body} className="mt-5 max-w-md" />
          <div className="mt-7">
            <Button href={interactive.action.href} variant="dark" trailingArrow>
              {interactive.action.label}
            </Button>
          </div>
        </div>

        <ActivityPreviewCard options={interactive.previewOptions} />
      </div>
    </Section>
  );
}
