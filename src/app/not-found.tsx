import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/primitives/Section";
import { Button } from "@/components/primitives/Button";
import { GeoArt } from "@/components/primitives/GeoArt";

export const metadata: Metadata = {
  title: siteConfig.pages.notFound.title,
};

export default function NotFound() {
  const { notFound } = siteConfig.pages;

  return (
    <Section tone="ink" className="relative overflow-hidden py-24 text-center">
      <GeoArt
        className="absolute -right-10 -top-10 h-40 w-40"
        shapes={[{ shape: "quarter-circle", tone: "yellow", size: 160, corner: "bottom-left" }]}
      />
      <GeoArt
        className="absolute -bottom-10 -left-10 h-32 w-32"
        shapes={[{ shape: "square", tone: "rose", size: 96, corner: "top-right" }]}
      />
      <p className="font-mono text-[13px] font-medium uppercase tracking-[0.1em] text-yellow">404</p>
      <h1 className="font-display mt-4 text-[clamp(36px,5vw,56px)] leading-[1.08] tracking-[-0.02em] font-medium">
        {notFound.title}
      </h1>
      <p className="mx-auto mt-4 max-w-md text-[17px] text-offwhite/80">{notFound.message}</p>
      <div className="mt-8 flex justify-center">
        <Button href="/" variant="primary">
          {notFound.backHomeLabel}
        </Button>
      </div>
    </Section>
  );
}
