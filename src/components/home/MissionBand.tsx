import { siteConfig } from "@/content/site";
import { Section } from "@/components/primitives/Section";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { GeoArt } from "@/components/primitives/GeoArt";

export function MissionBand() {
  const { mission } = siteConfig.home;

  return (
    <Section tone="indigo" className="relative overflow-hidden">
      <GeoArt
        className="absolute bottom-0 right-0 h-40 w-40"
        shapes={[
          { shape: "quarter-circle", tone: "yellow", size: 160, corner: "bottom-right" },
          { shape: "quarter-circle", tone: "rose", size: 72, corner: "bottom-right" },
        ]}
      />
      <div className="relative grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <SectionLabel index={mission.index} label={mission.label} className="text-yellow" />
        </div>
        <div>
          <p className="font-display max-w-[28ch] text-[clamp(28px,3vw,38px)] leading-[1.3] font-normal">
            {mission.statement}
          </p>
          <a
            href={mission.link.href}
            className="mt-6 inline-flex min-h-11 items-center gap-2 font-sans text-[16px] font-semibold underline-offset-2 hover:underline"
          >
            {mission.link.label} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
