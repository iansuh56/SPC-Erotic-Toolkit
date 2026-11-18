import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { PageHero } from "@/components/primitives/PageHero";
import { Section } from "@/components/primitives/Section";
import { TopicRows } from "@/components/topics/TopicRows";

export const metadata: Metadata = {
  title: siteConfig.home.topicsSection.heading,
};

export default function TopicsIndexPage() {
  return (
    <>
      <PageHero
        tone="paper"
        label={siteConfig.home.topicsSection.label}
        title={siteConfig.home.topicsSection.heading}
      />
      <Section tone="paper" className="pt-0">
        <TopicRows />
      </Section>
    </>
  );
}
