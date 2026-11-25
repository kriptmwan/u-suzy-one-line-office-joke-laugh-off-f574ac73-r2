// One-Line Office Joke Laugh-Off — round 2 entry.
// Writes a single original one-line office joke to /output/entry.txt.
// The joke: fifteen people report "no blockers" at standup, then spend the
// next hour blocking each other in the hallway — the standup ritual
// contradicting itself in one breath.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Fifteen people say 'no blockers' at standup, then block each other in the hallway for an hour.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
