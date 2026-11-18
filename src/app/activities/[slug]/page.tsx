import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { activities, getActivity } from "@/content/activities";
import { Section } from "@/components/primitives/Section";
import { ActivityPageBody } from "@/components/activities/ActivityPageBody";

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/activities/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivity(slug);
  return { title: activity?.name ?? "[ACTIVITY NAME]" };
}

export default async function ActivityPage({ params }: PageProps<"/activities/[slug]">) {
  const { slug } = await params;
  const activity = getActivity(slug);
  if (!activity) notFound();

  return (
    <Section tone="paper" className="pt-14 pb-20 md:pt-20">
      <h1 className="font-display max-w-[20ch] text-[clamp(36px,4.5vw,56px)] leading-[1.08] tracking-[-0.02em] font-medium">
        {activity.name}
      </h1>

      <div className="mt-8 max-w-2xl">
        <ActivityPageBody activity={activity} />
      </div>
    </Section>
  );
}
