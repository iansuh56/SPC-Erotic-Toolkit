"use client";

import { useState } from "react";
import type { Activity } from "@/content/activities";
import { siteConfig } from "@/content/site";
import { ActivityRenderer } from "./ActivityRenderer";
import { Skeleton } from "@/components/primitives/Skeleton";
import { Button } from "@/components/primitives/Button";

export function ActivityPageBody({ activity }: { activity: Activity }) {
  const [completed, setCompleted] = useState(false);
  const template = siteConfig.pages.activityTemplate;

  return (
    <div>
      <p className="font-mono text-[13px] font-medium uppercase tracking-[0.1em] text-ink/70">
        {template.instructionsHeading}
      </p>
      <p className="mt-2 text-[16px] text-ink/80">{activity.config.instructions}</p>

      <div className="mt-6">
        <ActivityRenderer
          id={activity.slug}
          activityName={activity.name}
          config={activity.config}
          onComplete={() => setCompleted(true)}
        />
      </div>

      {completed && (
        <div className="mt-8 border-[1.5px] border-ink bg-seafoam p-6">
          <p className="font-mono text-[13px] font-medium uppercase tracking-[0.1em] text-ink">
            {template.completionHeading}
          </p>
          <Skeleton spec={template.completionBody} className="mt-3 max-w-md" />
          <div className="mt-5">
            <Button href="/activities" variant="dark">
              {template.backToActivitiesLabel}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
