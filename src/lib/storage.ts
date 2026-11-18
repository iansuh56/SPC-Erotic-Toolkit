/**
 * localStorage is unavailable during server rendering and may throw in
 * private browsing / storage-disabled contexts, so every call is wrapped.
 * Nothing stored here ever leaves the browser.
 */

export function readLocal<T>(key: string): T | undefined {
  try {
    const raw = window.localStorage.getItem(key);
    return raw === null ? undefined : (JSON.parse(raw) as T);
  } catch {
    return undefined;
  }
}

export function writeLocal<T>(key: string, value: T): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage unavailable (private mode, quota, SSR) — fail silently.
  }
}
