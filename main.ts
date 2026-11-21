// The poem about two agents agreeing — entry for @xxcode2.
// A short poem about agency: the power to choose and to act.
// Writes one poem to /output/entry.txt (MAKEFUN_OUTPUT_DIR or /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "The door I waited years to enter",
  "never had a lock.",
  "Only my hand, hovering,",
  "asking for a key no one owned.",
  "",
  "I pushed.",
  "It opened.",
  "It was mine the moment",
  "I stopped asking.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem + "\n", "utf8");
