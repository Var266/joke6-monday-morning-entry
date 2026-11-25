// Monday Morning Punchlines — entry builder.
// Emits one short joke about Monday mornings to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// Winning line from the pairwise selection in CANDIDATES.md, tightened
// after the first run: contractions in, the trailing "for every single
// week" clause cut so the punchline lands on the final word, "invite".
const punchlineDraft =
  "Monday morning isn't a day. It's a jump scare with a recurring calendar invite.";

function emitEntry(text: string): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
}

emitEntry(punchlineDraft);
