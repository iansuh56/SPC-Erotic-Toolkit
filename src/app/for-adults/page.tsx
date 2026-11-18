import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { PageHero } from "@/components/primitives/PageHero";
import { Section } from "@/components/primitives/Section";
import { ContentSections } from "@/components/primitives/ContentSections";

export const metadata: Metadata = {
  title: siteConfig.pages.forAdults.title,
};

export default function ForAdultsPage() {
  const page = siteConfig.pages.forAdults;

  return (
    <>
      <PageHero tone="offwhite" title={page.title} body={page.intro} />
      <Section tone="paper">
        <ContentSections sections={page.sections} />
      </Section>
    </>
  );
}
