"use client";

import Link from "next/link";
import { siteConfig } from "@/content/site";
import { triggerQuickExit } from "@/lib/quickExit";

export function UtilityBar() {
  return (
    <div className="bg-ink text-offwhite text-[14px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-2 px-5 md:px-8">
        <p className="flex min-h-11 items-center truncate py-2">{siteConfig.utilityBar.message}</p>
        <div className="flex items-center gap-4">
          <Link
            href={siteConfig.utilityBar.forAdultsHref}
            className="hidden min-h-11 items-center underline-offset-2 hover:underline sm:flex"
          >
            {siteConfig.utilityBar.forAdultsLabel}
          </Link>
          <Link
            href={siteConfig.utilityBar.utilityLink.href}
            className="hidden min-h-11 items-center underline-offset-2 hover:underline sm:flex"
          >
            {siteConfig.utilityBar.utilityLink.label}
          </Link>
          <button
            type="button"
            onClick={triggerQuickExit}
            className="flex min-h-11 items-center bg-rose px-4 font-sans text-[13px] font-semibold text-ink hover:opacity-90"
          >
            {siteConfig.quickExit.buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
