import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { activities } from "@/content/activities";
import { PageHero } from "@/components/primitives/PageHero";
import { Section } from "@/components/primitives/Section";
import { Skeleton } from "@/components/primitives/Skeleton";
import { ArrowRight } from "@/components/icons/ArrowRight";

export const metadata: Metadata = {
  title: siteConfig.home.interactive.heading,
};

export default function ActivitiesIndexPage() {
  return (
    <>
      <PageHero
        tone="rose"
        label={siteConfig.home.interactive.label}
        title={siteConfig.home.interactive.heading}
        body={siteConfig.home.interactive.body}
      />
      <Section tone="paper">
        <ul className="border-t-[1.5px] border-ink">
          {activities.map((activity) => (
            <li key={activity.slug} className="border-b border-ink/20">
              <Link
                href={`/activities/${activity.slug}`}
                className="flex min-h-11 items-center gap-5 py-6"
              >
                <div className="flex-1">
                  <p className="font-display text-[28px] leading-tight">{activity.name}</p>
                  <Skeleton spec={activity.summary} className="mt-2 max-w-md" />
                </div>
                <ArrowRight className="hidden shrink-0 sm:block" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
