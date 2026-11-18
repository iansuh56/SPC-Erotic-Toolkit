import type { SkeletonSpec } from "@/content/types";
import { Skeleton } from "./Skeleton";

export function ContentSections({
  sections,
}: {
  sections: { heading: string; body: SkeletonSpec }[];
}) {
  return (
    <div className="flex flex-col gap-12">
      {sections.map((section, i) => (
        <div key={i}>
          <h2 className="font-display text-[32px] leading-tight">{section.heading}</h2>
          <Skeleton spec={section.body} className="mt-4 max-w-2xl" />
        </div>
      ))}
    </div>
  );
}
