"use client";

import { useEffect, useState } from "react";
import type { SortIntoGroupsConfig } from "@/lib/activities/types";
import { ActivityShell } from "./ActivityShell";
import { Button } from "@/components/primitives/Button";
import { readLocal, writeLocal } from "@/lib/storage";

const UNPLACED = "__unplaced__";

interface SavedState {
  placements: Record<string, string>;
  checked: boolean;
}

export function SortIntoGroups({
  id,
  activityName,
  config,
  onComplete,
}: {
  id: string;
  activityName: string;
  config: SortIntoGroupsConfig;
  onComplete?: () => void;
}) {
  const storageKey = `spc-toolkit:activity:${id}`;
  const [placements, setPlacements] = useState<Record<string, string>>(
    () => Object.fromEntries(config.items.map((item) => [item.id, UNPLACED])),
  );
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const saved = readLocal<SavedState>(storageKey);
    if (saved) {
      // Syncing from localStorage (an external system) on mount, not derived render state.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPlacements(saved.placements);
      setChecked(saved.checked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    writeLocal<SavedState>(storageKey, { placements, checked });
  }, [storageKey, placements, checked]);

  useEffect(() => {
    if (checked) onComplete?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  function placeSelected(destinationGroupId: string) {
    if (!selectedItemId) return;
    setChecked(false);
    setPlacements((prev) => ({ ...prev, [selectedItemId]: destinationGroupId }));
    setSelectedItemId(null);
  }

  const allPlaced = config.items.every((item) => placements[item.id] !== UNPLACED);
  const correctCount = config.items.filter(
    (item) => placements[item.id] === item.groupId,
  ).length;
  const allCorrect = correctCount === config.items.length;

  const buckets = [
    { id: UNPLACED, label: config.unplacedLabel },
    ...config.groups,
  ];

  return (
    <ActivityShell
      activityName={activityName}
      current={1}
      total={1}
      progressPercent={checked ? 100 : allPlaced ? 50 : 0}
      liveMessage={checked ? (allCorrect ? config.feedbackCorrect : config.feedbackIncorrect) : undefined}
    >
      <p className="font-display text-[22px]">{config.prompt}</p>
      <p className="sr-only">
        Select an item, then select a destination group to place it there.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {buckets.map((bucket) => {
          const items = config.items.filter((item) => placements[item.id] === bucket.id);
          const isUnplaced = bucket.id === UNPLACED;
          return (
            <div key={bucket.id} className="border-[1.5px] border-ink/20 p-3">
              <button
                type="button"
                onClick={() => placeSelected(bucket.id)}
                disabled={!selectedItemId}
                className="min-h-11 w-full border-b border-ink/20 pb-2 text-left font-mono text-[12px] uppercase tracking-[0.08em] text-ink/70 disabled:cursor-default"
              >
                {bucket.label}
              </button>
              <ul className="mt-2 flex flex-col gap-2">
                {items.map((item) => {
                  const isSelected = selectedItemId === item.id;
                  const isCorrect = checked && item.groupId === bucket.id && !isUnplaced;
                  const isIncorrect = checked && item.groupId !== bucket.id;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() =>
                          setSelectedItemId((current) => (current === item.id ? null : item.id))
                        }
                        className={`flex min-h-11 w-full items-center justify-between gap-2 border-[1.5px] px-3 py-2 text-left text-[15px] ${
                          isSelected ? "border-indigo bg-indigo-tint" : "border-ink/20"
                        }`}
                      >
                        <span>{item.label}</span>
                        {checked && !isUnplaced && (
                          <span aria-hidden="true">{isCorrect ? "✓" : isIncorrect ? "✗" : ""}</span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-5">
        <Button variant="dark" type="button" disabled={!allPlaced} onClick={() => setChecked(true)}>
          {config.checkLabel}
        </Button>
      </div>
    </ActivityShell>
  );
}
