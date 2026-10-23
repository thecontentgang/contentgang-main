type NavigatorHints = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
};

/**
 * Best-effort check for phones and tablets that struggle with heavy animation:
 * few CPU cores, little memory, or data saver on. Browser-only (returns false on the server).
 */
export function isLowEndDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  const nav = navigator as NavigatorHints;
  const cores = nav.hardwareConcurrency ?? 8;
  const memory = nav.deviceMemory ?? 8;
  const saveData = nav.connection?.saveData === true;
  return saveData || cores <= 4 || memory <= 4;
}
