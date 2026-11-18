import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { PageHero } from "@/components/primitives/PageHero";
import { Section } from "@/components/primitives/Section";
import { ContentSections } from "@/components/primitives/ContentSections";

export const metadata: Metadata = {
  title: siteConfig.pages.about.title,
};

export default function AboutPage() {
  const page = siteConfig.pages.about;

  return (
    <>
      <PageHero tone="indigo" title={page.title} body={page.intro} />
      <Section tone="paper">
        <ContentSections sections={page.sections} />
      </Section>
    </>
  );
}
