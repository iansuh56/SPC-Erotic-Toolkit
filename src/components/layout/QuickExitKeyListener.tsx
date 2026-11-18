"use client";

import { useEffect, useRef } from "react";
import { triggerQuickExit } from "@/lib/quickExit";

/** Pressing Escape twice within one second triggers Quick Exit from anywhere on the site. */
export function QuickExitKeyListener() {
  const lastEscapeAt = useRef(0);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const now = Date.now();
      if (now - lastEscapeAt.current < 1000) {
        triggerQuickExit();
        return;
      }
      lastEscapeAt.current = now;
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return null;
}
