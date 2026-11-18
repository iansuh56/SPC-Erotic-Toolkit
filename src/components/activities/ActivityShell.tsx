import type { ReactNode } from "react";
import { ProgressBar } from "./ProgressBar";
import { formatStep } from "@/lib/activities/formatStep";

/**
 * Shared preview-card visual language: ink border, paper body, indigo
 * title bar, and a progress bar at the bottom. Used by all four activity
 * mechanics so they read as one system.
 */
export function ActivityShell({
  activityName,
  current,
  total,
  progressPercent,
  liveMessage,
  children,
}: {
  activityName: string;
  current: number;
  total?: number;
  progressPercent: number;
  liveMessage?: string;
  children: ReactNode;
}) {
  return (
    <div className="border-[1.5px] border-ink bg-paper">
      <div className="flex items-center justify-between gap-4 bg-indigo px-5 py-3 text-offwhite">
        <span className="font-mono text-[12px] uppercase tracking-[0.08em]">
          {activityName}
        </span>
        <span className="font-mono text-[12px] uppercase tracking-[0.08em]">
          {formatStep(current, total)}
        </span>
      </div>

      <div className="p-5 md:p-6">{children}</div>

      <p role="status" aria-live="polite" className="sr-only">
        {liveMessage}
      </p>

      <ProgressBar percent={progressPercent} />
    </div>
  );
}
