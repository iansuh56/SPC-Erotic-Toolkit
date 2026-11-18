"use client";

import { useEffect, useId, useState } from "react";
import type { ReflectionConfig } from "@/lib/activities/types";
import { ActivityShell } from "./ActivityShell";
import { readLocal, writeLocal } from "@/lib/storage";

export function Reflection({
  id,
  activityName,
  config,
  onComplete,
}: {
  id: string;
  activityName: string;
  config: ReflectionConfig;
  onComplete?: () => void;
}) {
  const storageKey = `spc-toolkit:activity:${id}`;
  const fieldId = useId();
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = readLocal<string>(storageKey);
    // Syncing from localStorage (an external system) on mount, not derived render state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved) setText(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ActivityShell
      activityName={activityName}
      current={1}
      total={1}
      progressPercent={text.trim().length > 0 ? 100 : 0}
    >
      <label htmlFor={fieldId} className="font-display block text-[22px]">
        {config.prompt}
      </label>

      <textarea
        id={fieldId}
        value={text}
        placeholder={config.placeholder}
        onChange={(event) => setText(event.target.value)}
        onBlur={() => {
          writeLocal(storageKey, text);
          if (text.trim().length > 0) onComplete?.();
        }}
        rows={6}
        className="mt-4 w-full border-[1.5px] border-ink/20 bg-paper p-4 text-[16px] focus-visible:border-indigo"
      />

      <p className="mt-3 text-[13px] text-ink/60">{config.privacyNote}</p>
    </ActivityShell>
  );
}
