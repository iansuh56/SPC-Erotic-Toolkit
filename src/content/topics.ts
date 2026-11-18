import type { BlockTone, SkeletonSpec } from "./types";

export interface TopicContentSection {
  heading: string;
  body: SkeletonSpec;
}

export interface Topic {
  slug: string;
  /** Row number shown in the color block, e.g. "01". */
  number: string;
  tone: BlockTone;
  title: string;
  dek: SkeletonSpec;
  heroLabel: string;
  toc: string[];
  sections: TopicContentSection[];
  keyIdea: {
    heading: string;
    body: SkeletonSpec;
  };
  /** Slug of the activity embedded partway through the topic page. */
  activitySlot: string;
}

/**
 * Seed set of four topics, one per row color. The group can rename, add,
 * or remove topics here — every topic/index/prev-next link is derived from
 * this array. See CONTENT_GUIDE.md.
 */
export const topics: Topic[] = [
  {
    slug: "topic-01",
    number: "01",
    tone: "seafoam",
    title: "[Topic title]",
    dek: { lines: 2 },
    heroLabel: "[TOPIC LABEL]",
    toc: ["[Section heading]", "[Section heading]", "[Section heading]"],
    sections: [
      { heading: "[Section heading]", body: { lines: 4 } },
      { heading: "[Section heading]", body: { lines: 4 } },
      { heading: "[Section heading]", body: { lines: 3 } },
    ],
    keyIdea: { heading: "[Key idea]", body: { lines: 2 } },
    activitySlot: "activity-multiple-choice",
  },
  {
    slug: "topic-02",
    number: "02",
    tone: "rose",
    title: "[Topic title]",
    dek: { lines: 2 },
    heroLabel: "[TOPIC LABEL]",
    toc: ["[Section heading]", "[Section heading]", "[Section heading]"],
    sections: [
      { heading: "[Section heading]", body: { lines: 4 } },
      { heading: "[Section heading]", body: { lines: 4 } },
      { heading: "[Section heading]", body: { lines: 3 } },
    ],
    keyIdea: { heading: "[Key idea]", body: { lines: 2 } },
    activitySlot: "activity-sort",
  },
  {
    slug: "topic-03",
    number: "03",
    tone: "yellow",
    title: "[Topic title]",
    dek: { lines: 2 },
    heroLabel: "[TOPIC LABEL]",
    toc: ["[Section heading]", "[Section heading]", "[Section heading]"],
    sections: [
      { heading: "[Section heading]", body: { lines: 4 } },
      { heading: "[Section heading]", body: { lines: 4 } },
      { heading: "[Section heading]", body: { lines: 3 } },
    ],
    keyIdea: { heading: "[Key idea]", body: { lines: 2 } },
    activitySlot: "activity-scenario",
  },
  {
    slug: "topic-04",
    number: "04",
    tone: "indigo",
    title: "[Topic title]",
    dek: { lines: 2 },
    heroLabel: "[TOPIC LABEL]",
    toc: ["[Section heading]", "[Section heading]", "[Section heading]"],
    sections: [
      { heading: "[Section heading]", body: { lines: 4 } },
      { heading: "[Section heading]", body: { lines: 4 } },
      { heading: "[Section heading]", body: { lines: 3 } },
    ],
    keyIdea: { heading: "[Key idea]", body: { lines: 2 } },
    activitySlot: "activity-reflection",
  },
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}

export function getAdjacentTopics(slug: string): { prev?: Topic; next?: Topic } {
  const index = topics.findIndex((topic) => topic.slug === slug);
  if (index === -1) return {};
  return {
    prev: topics[index - 1],
    next: topics[index + 1],
  };
}
