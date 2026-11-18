import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { PageHero } from "@/components/primitives/PageHero";
import { Section } from "@/components/primitives/Section";
import { ContentSections } from "@/components/primitives/ContentSections";

export const metadata: Metadata = {
  title: siteConfig.pages.resources.title,
};

export default function ResourcesPage() {
  const page = siteConfig.pages.resources;

  return (
    <>
      <PageHero tone="yellow" title={page.title} />
      <Section tone="paper">
        <ContentSections sections={page.sections} />
      </Section>
    </>
  );
}
