import { siteConfig } from "@/content/site";
import { Section } from "@/components/primitives/Section";
import { Button } from "@/components/primitives/Button";
import { Skeleton } from "@/components/primitives/Skeleton";
import { GeoArt } from "@/components/primitives/GeoArt";

export function Hero() {
  const { hero } = siteConfig.home;

  return (
    <Section tone="paper" className="pt-14 pb-14 md:pt-20 md:pb-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="font-mono text-[13px] font-medium uppercase tracking-[0.1em] text-ink bg-yellow inline-block px-2 py-1">
            {hero.tag}
          </p>
          <h1 className="font-display mt-5 max-w-[15ch] text-[clamp(42px,5vw,66px)] leading-[1.06] tracking-[-0.02em] font-medium text-ink">
            {hero.heading}
          </h1>
          <Skeleton spec={hero.body} className="mt-6 max-w-md" />
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={hero.primaryAction.href} variant="primary" trailingArrow>
              {hero.primaryAction.label}
            </Button>
            <Button href={hero.secondaryAction.href} variant="secondary">
              {hero.secondaryAction.label}
            </Button>
          </div>
        </div>

        <figure>
          <div className="relative aspect-[4/5] w-full bg-seafoam">
            <GeoArt
              className="absolute inset-0"
              shapes={[
                { shape: "square", tone: "indigo", size: 96, corner: "bottom-left" },
                { shape: "quarter-circle", tone: "rose", size: 120, corner: "bottom-right" },
                { shape: "square", tone: "yellow", size: 110, corner: "top-right" },
                {
                  shape: "quarter-circle",
                  tone: "offwhite",
                  size: 56,
                  corner: "top-right",
                  inset: 0,
                },
              ]}
            />
            <span className="absolute left-4 top-4 bg-offwhite px-2 py-1 font-mono text-[12px] uppercase tracking-[0.08em] text-ink">
              {hero.figureTag}
            </span>
          </div>
          <figcaption className="mt-2 text-[13px] text-ink/60">{hero.caption}</figcaption>
        </figure>
      </div>
    </Section>
  );
}
