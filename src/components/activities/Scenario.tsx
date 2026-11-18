"use client";

import { useEffect, useState } from "react";
import type { ScenarioConfig } from "@/lib/activities/types";
import { ActivityShell } from "./ActivityShell";
import { readLocal, writeLocal } from "@/lib/storage";

export function Scenario({
  id,
  activityName,
  config,
  onComplete,
}: {
  id: string;
  activityName: string;
  config: ScenarioConfig;
  onComplete?: () => void;
}) {
  const storageKey = `spc-toolkit:activity:${id}`;
  const [path, setPath] = useState<string[]>([config.startNodeId]);

  useEffect(() => {
    const saved = readLocal<string[]>(storageKey);
    // Syncing from localStorage (an external system) on mount, not derived render state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved && saved.every((nodeId) => config.nodes[nodeId])) setPath(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    writeLocal(storageKey, path);
  }, [storageKey, path]);

  const currentNode = config.nodes[path[path.length - 1]];

  useEffect(() => {
    if (currentNode?.isEnd) onComplete?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentNode?.isEnd]);

  if (!currentNode) return null;

  // No fixed branch length is known in advance, so the bar fills in steps
  // rather than against a precomputed total.
  const progressPercent = currentNode.isEnd ? 100 : Math.min(85, path.length * 30);

  return (
    <ActivityShell
      activityName={activityName}
      current={path.length}
      progressPercent={progressPercent}
      liveMessage={currentNode.text}
    >
      <p className="font-display text-[22px]">{currentNode.text}</p>

      {currentNode.choices && (
        <div className="mt-5 flex flex-col gap-3">
          {currentNode.choices.map((choice) => (
            <button
              key={choice.id}
              type="button"
              onClick={() => setPath((prev) => [...prev, choice.nextNodeId])}
              className="flex min-h-11 items-center border-[1.5px] border-ink/20 px-4 py-3 text-left text-[16px] hover:border-indigo"
            >
              {choice.label}
            </button>
          ))}
        </div>
      )}
    </ActivityShell>
  );
}
