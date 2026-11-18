import Link from "next/link";
import { topics } from "@/content/topics";
import { ColorBlock } from "@/components/primitives/ColorBlock";
import { Skeleton } from "@/components/primitives/Skeleton";
import { ArrowRight } from "@/components/icons/ArrowRight";

/** Shared row list for the home topics preview and the /topics index. */
export function TopicRows() {
  return (
    <ul className="border-t-[1.5px] border-ink">
      {topics.map((topic) => (
        <li key={topic.slug} className="border-b border-ink/20">
          <Link href={`/topics/${topic.slug}`} className="flex min-h-11 items-center gap-5 py-6">
            <ColorBlock tone={topic.tone} size={64}>
              {topic.number}
            </ColorBlock>
            <div className="flex-1">
              <p className="font-display text-[28px] leading-tight">{topic.title}</p>
              <Skeleton spec={topic.dek} className="mt-2 max-w-md" />
            </div>
            <ArrowRight className="hidden shrink-0 sm:block" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
