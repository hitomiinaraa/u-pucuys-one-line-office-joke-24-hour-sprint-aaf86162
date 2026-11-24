import { mkdirSync, writeFileSync } from "node:fs";

// One line, no trailing newline: the gate counts 1-200 characters exactly.
const ENTRY =
  "The printer only jams on urgent documents, which is how I know it reads the subject line.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
