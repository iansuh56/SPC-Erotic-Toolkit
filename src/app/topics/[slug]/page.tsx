import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { topics, getTopic, getAdjacentTopics } from "@/content/topics";
import { getActivity } from "@/content/activities";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/primitives/Section";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Skeleton } from "@/components/primitives/Skeleton";
import { ColorBlock } from "@/components/primitives/ColorBlock";
import { ActivityPageBody } from "@/components/activities/ActivityPageBody";
import type { BlockTone } from "@/content/types";

const keyIdeaToneClasses: Record<BlockTone, string> = {
  indigo: "bg-indigo text-offwhite",
  seafoam: "bg-seafoam text-ink",
  rose: "bg-rose text-ink",
  yellow: "bg-yellow text-ink",
};

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/topics/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  return { title: topic?.title ?? "[Topic title]" };
}

export default async function TopicPage({ params }: PageProps<"/topics/[slug]">) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const { prev, next } = getAdjacentTopics(topic.slug);
  const activity = getActivity(topic.activitySlot);
  const template = siteConfig.pages.topicTemplate;

  return (
    <>
      <Section tone={topic.tone} className="pt-14 pb-10 md:pt-20 md:pb-14">
        <SectionLabel label={topic.heroLabel} />
        <h1 className="font-display mt-3 max-w-[20ch] text-[clamp(36px,4.5vw,56px)] leading-[1.08] tracking-[-0.02em] font-medium">
          {topic.title}
        </h1>
      </Section>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_2.5fr]">
          <nav aria-label={template.tocHeading} className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-[13px] font-medium uppercase tracking-[0.1em] text-ink/70">
              {template.tocHeading}
            </p>
            <ol className="mt-4 flex flex-col gap-3 border-l border-ink/20 pl-4">
              {topic.toc.map((entry, i) => (
                <li key={i} className="text-[15px] text-ink/80">
                  {entry}
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex flex-col gap-12">
            {topic.sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-display text-[32px] leading-tight">{section.heading}</h2>
                <Skeleton spec={section.body} className="mt-4 max-w-2xl" />
              </div>
            ))}

            <div className={`border-[1.5px] border-ink p-6 ${keyIdeaToneClasses[topic.tone]}`}>
              <ColorBlock tone={topic.tone} size={48} />
              <p className="mt-4 font-display text-[22px]">{topic.keyIdea.heading}</p>
              <Skeleton spec={topic.keyIdea.body} className="mt-3 max-w-xl" />
            </div>

            {activity && (
              <div>
                <h2 className="font-display text-[32px] leading-tight">
                  {template.activityHeading}
                </h2>
                <div className="mt-5">
                  <ActivityPageBody activity={activity} />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t-[1.5px] border-ink pt-6">
          {prev ? (
            <Link href={`/topics/${prev.slug}`} className="flex min-h-11 items-center gap-2 text-[16px] font-semibold underline-offset-2 hover:underline">
              <span aria-hidden="true">←</span> {template.previousLabel}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/topics/${next.slug}`} className="flex min-h-11 items-center gap-2 text-[16px] font-semibold underline-offset-2 hover:underline">
              {template.nextLabel} <span aria-hidden="true">→</span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </Section>
    </>
  );
}
