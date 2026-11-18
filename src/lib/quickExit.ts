import { siteConfig } from "@/content/site";

/** Replaces history so the back button cannot return to the site. */
export function triggerQuickExit() {
  window.location.replace(siteConfig.quickExit.url);
}
