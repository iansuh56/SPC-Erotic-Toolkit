import type { ActivityConfig } from "@/lib/activities/types";
import { MultipleChoice } from "./MultipleChoice";
import { SortIntoGroups } from "./SortIntoGroups";
import { Scenario } from "./Scenario";
import { Reflection } from "./Reflection";

export function ActivityRenderer({
  id,
  activityName,
  config,
  onComplete,
}: {
  id: string;
  activityName: string;
  config: ActivityConfig;
  onComplete?: () => void;
}) {
  switch (config.kind) {
    case "multiple-choice":
      return (
        <MultipleChoice id={id} activityName={activityName} config={config} onComplete={onComplete} />
      );
    case "sort":
      return (
        <SortIntoGroups id={id} activityName={activityName} config={config} onComplete={onComplete} />
      );
    case "scenario":
      return <Scenario id={id} activityName={activityName} config={config} onComplete={onComplete} />;
    case "reflection":
      return <Reflection id={id} activityName={activityName} config={config} onComplete={onComplete} />;
  }
}
