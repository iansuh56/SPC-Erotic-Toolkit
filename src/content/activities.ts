import type { SkeletonSpec } from "./types";
import type {
  ActivityConfig,
  MultipleChoiceConfig,
  SortIntoGroupsConfig,
  ScenarioConfig,
  ReflectionConfig,
} from "@/lib/activities/types";

export interface Activity {
  slug: string;
  name: string;
  summary: SkeletonSpec;
  config: ActivityConfig;
}

const multipleChoice: MultipleChoiceConfig = {
  kind: "multiple-choice",
  mode: "single",
  prompt: "[Question prompt]",
  instructions: "[Instructions]",
  checkLabel: "[Check]",
  options: [
    { id: "a", label: "[Option A]", correct: true, feedback: "[Feedback for option A]" },
    { id: "b", label: "[Option B]", correct: false, feedback: "[Feedback for option B]" },
    { id: "c", label: "[Option C]", correct: false, feedback: "[Feedback for option C]" },
  ],
};

const sortIntoGroups: SortIntoGroupsConfig = {
  kind: "sort",
  prompt: "[Sorting prompt]",
  instructions: "[Instructions]",
  checkLabel: "[Check]",
  unplacedLabel: "[Unplaced items]",
  groups: [
    { id: "group-1", label: "[Group 1 label]" },
    { id: "group-2", label: "[Group 2 label]" },
  ],
  items: [
    { id: "item-1", label: "[Item 1]", groupId: "group-1" },
    { id: "item-2", label: "[Item 2]", groupId: "group-1" },
    { id: "item-3", label: "[Item 3]", groupId: "group-2" },
    { id: "item-4", label: "[Item 4]", groupId: "group-2" },
  ],
  feedbackCorrect: "[Feedback: correct]",
  feedbackIncorrect: "[Feedback: try again]",
};

const scenario: ScenarioConfig = {
  kind: "scenario",
  instructions: "[Instructions]",
  startNodeId: "start",
  nodes: {
    start: {
      id: "start",
      text: "[Scenario prompt]",
      choices: [
        { id: "choice-1", label: "[Choice 1]", nextNodeId: "outcome-1" },
        { id: "choice-2", label: "[Choice 2]", nextNodeId: "outcome-2" },
      ],
    },
    "outcome-1": {
      id: "outcome-1",
      text: "[Outcome 1]",
      isEnd: true,
    },
    "outcome-2": {
      id: "outcome-2",
      text: "[Outcome 2]",
      choices: [{ id: "choice-3", label: "[Choice 3]", nextNodeId: "outcome-3" }],
    },
    "outcome-3": {
      id: "outcome-3",
      text: "[Outcome 3]",
      isEnd: true,
    },
  },
};

const reflection: ReflectionConfig = {
  kind: "reflection",
  prompt: "[Reflection prompt]",
  instructions: "[Instructions]",
  privacyNote: "[Privacy note: this stays on your device]",
  placeholder: "[Textarea placeholder]",
};

/**
 * Seed set covering each of the four activity mechanics. The group adds
 * new activities here; every activity index, embed slot, and home preview
 * card is derived from this array. See CONTENT_GUIDE.md.
 */
export const activities: Activity[] = [
  {
    slug: "activity-multiple-choice",
    name: "[ACTIVITY NAME]",
    summary: { lines: 2 },
    config: multipleChoice,
  },
  {
    slug: "activity-sort",
    name: "[ACTIVITY NAME]",
    summary: { lines: 2 },
    config: sortIntoGroups,
  },
  {
    slug: "activity-scenario",
    name: "[ACTIVITY NAME]",
    summary: { lines: 2 },
    config: scenario,
  },
  {
    slug: "activity-reflection",
    name: "[ACTIVITY NAME]",
    summary: { lines: 2 },
    config: reflection,
  },
];

export function getActivity(slug: string): Activity | undefined {
  return activities.find((activity) => activity.slug === slug);
}
