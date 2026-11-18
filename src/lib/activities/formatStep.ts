export function formatStep(current: number, total?: number): string {
  return total ? `STEP ${current} OF ${total}` : `STEP ${current}`;
}
