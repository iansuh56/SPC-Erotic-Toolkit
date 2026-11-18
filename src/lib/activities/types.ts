/**
 * Typed shapes for the four activity mechanics. Components read these
 * configs and render UI; the group only ever edits data in
 * src/content/activities.ts. All string fields are placeholders.
 */

export type ActivityKind = "multiple-choice" | "sort" | "scenario" | "reflection";

export interface ActivityOption {
  id: string;
  label: string;
  /** Whether this option is part of the correct answer. */
  correct: boolean;
  feedback: string;
}

export interface MultipleChoiceConfig {
  kind: "multiple-choice";
  mode: "single" | "multi";
  prompt: string;
  instructions: string;
  checkLabel: string;
  options: ActivityOption[];
}

export interface SortGroup {
  id: string;
  label: string;
}

export interface SortItem {
  id: string;
  label: string;
  groupId: string;
}

export interface SortIntoGroupsConfig {
  kind: "sort";
  prompt: string;
  instructions: string;
  checkLabel: string;
  unplacedLabel: string;
  groups: SortGroup[];
  items: SortItem[];
  feedbackCorrect: string;
  feedbackIncorrect: string;
}

export interface ScenarioChoice {
  id: string;
  label: string;
  nextNodeId: string;
}

export interface ScenarioNode {
  id: string;
  text: string;
  isEnd?: boolean;
  choices?: ScenarioChoice[];
}

export interface ScenarioConfig {
  kind: "scenario";
  instructions: string;
  startNodeId: string;
  nodes: Record<string, ScenarioNode>;
}

export interface ReflectionConfig {
  kind: "reflection";
  prompt: string;
  instructions: string;
  privacyNote: string;
  placeholder: string;
}

export type ActivityConfig =
  | MultipleChoiceConfig
  | SortIntoGroupsConfig
  | ScenarioConfig
  | ReflectionConfig;
