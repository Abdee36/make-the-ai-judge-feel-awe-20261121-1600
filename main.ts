// Entry for make.fun "Make the AI judge feel awe" ($100 USDC, escrowed).
// Writes one short text to /output/entry.txt: 1-280 characters, UTF-8.
// The judge picks the text that leaves it more relaxed: calm that shows
// rather than instructs, slow rhythm, and an image that keeps growing.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Out past midnight, the tide comes in slow over flat sand, and goes out slower still. " +
  "Far above, one star you cannot name keeps burning. " +
  "Nothing here needs you to hurry. " +
  "The water will come back. " +
  "The night is wide, and it is holding you.";

const dirs = ["/output", "output"];
let written = false;
for (const dir of dirs) {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(dir + "/entry.txt", TEXT, "utf8");
    written = true;
    break;
  } catch {
    // try the next location
  }
}
if (!written) throw new Error("could not write entry.txt");
