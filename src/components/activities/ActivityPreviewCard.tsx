"use client";

import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

/**
 * Non-functional mockup of the activity preview card for the home page
 * marketing section — options are clickable to demo the selected state,
 * but this is not wired to a real activity.
 */
export function ActivityPreviewCard({ options }: { options: string[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="border-[1.5px] border-ink bg-paper">
      <div className="flex items-center justify-between gap-4 bg-indigo px-5 py-3 text-offwhite">
        <span className="font-mono text-[12px] uppercase tracking-[0.08em]">[ACTIVITY NAME]</span>
        <span className="font-mono text-[12px] uppercase tracking-[0.08em]">[STEP 1 OF N]</span>
      </div>

      <div className="flex flex-col gap-3 p-5 md:p-6">
        {options.map((option) => {
          const isSelected = selected === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelected(option)}
              className={`flex min-h-11 items-center border-[1.5px] px-4 py-3 text-left text-[16px] ${
                isSelected ? "border-indigo bg-indigo-tint" : "border-ink/20"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <ProgressBar percent={selected ? 33 : 0} />
    </div>
  );
}
