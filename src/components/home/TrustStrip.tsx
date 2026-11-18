import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/primitives/Section";
import { SkeletonLine } from "@/components/primitives/Skeleton";

export function TrustStrip() {
  return (
    <Section tone="seafoam">
      <div className="grid gap-8 sm:grid-cols-3">
        {siteConfig.home.trustStrip.map((item) => (
          <Link key={item.label} href={item.href} className="block min-h-11">
            <p className="font-sans text-[17px] font-bold">{item.label}</p>
            <SkeletonLine width="85%" className="mt-2" />
          </Link>
        ))}
      </div>
    </Section>
  );
}
