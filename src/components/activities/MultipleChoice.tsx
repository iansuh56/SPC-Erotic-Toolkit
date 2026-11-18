"use client";

import { useEffect, useState } from "react";
import type { MultipleChoiceConfig } from "@/lib/activities/types";
import { ActivityShell } from "./ActivityShell";
import { Button } from "@/components/primitives/Button";
import { readLocal, writeLocal } from "@/lib/storage";

interface SavedState {
  selected: string[];
  checked: boolean;
}

export function MultipleChoice({
  id,
  activityName,
  config,
  onComplete,
}: {
  id: string;
  activityName: string;
  config: MultipleChoiceConfig;
  onComplete?: () => void;
}) {
  const storageKey = `spc-toolkit:activity:${id}`;
  const [selected, setSelected] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const saved = readLocal<SavedState>(storageKey);
    if (saved) {
      // Syncing from localStorage (an external system) on mount, not derived render state.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelected(saved.selected);
      setChecked(saved.checked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    writeLocal<SavedState>(storageKey, { selected, checked });
  }, [storageKey, selected, checked]);

  useEffect(() => {
    if (checked) onComplete?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  function toggle(optionId: string) {
    setChecked(false);
    setSelected((prev) => {
      if (config.mode === "single") return [optionId];
      return prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId];
    });
  }

  const liveMessage = checked
    ? config.options
        .filter((option) => selected.includes(option.id))
        .map((option) => option.feedback)
        .join(" ")
    : undefined;

  return (
    <ActivityShell
      activityName={activityName}
      current={1}
      total={1}
      progressPercent={checked ? 100 : selected.length > 0 ? 50 : 0}
      liveMessage={liveMessage}
    >
      <p className="font-display text-[22px]">{config.prompt}</p>

      <fieldset className="mt-5 flex flex-col gap-3">
        <legend className="sr-only">{config.prompt}</legend>
        {config.options.map((option) => {
          const isSelected = selected.includes(option.id);
          return (
            <div key={option.id}>
              <label
                className={`flex min-h-11 cursor-pointer items-center gap-3 border-[1.5px] px-4 py-3 ${
                  isSelected ? "border-indigo bg-indigo-tint" : "border-ink/20"
                }`}
              >
                <input
                  type={config.mode === "single" ? "radio" : "checkbox"}
                  name={`${id}-option`}
                  checked={isSelected}
                  onChange={() => toggle(option.id)}
                  className="h-4 w-4 accent-indigo"
                />
                <span className="text-[16px]">{option.label}</span>
              </label>
              {checked && isSelected && (
                <p className="mt-1.5 flex items-start gap-2 pl-1 text-[14px] text-ink/80">
                  <span aria-hidden="true">{option.correct ? "✓" : "✗"}</span>
                  <span>{option.feedback}</span>
                </p>
              )}
            </div>
          );
        })}
      </fieldset>

      <div className="mt-5">
        <Button
          variant="dark"
          type="button"
          disabled={selected.length === 0}
          onClick={() => setChecked(true)}
        >
          {config.checkLabel}
        </Button>
      </div>
    </ActivityShell>
  );
}
