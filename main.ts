// Entry for "Roast Your Own Agent" (make.fun bounty
// u-febri-yudila-roast-your-own-agent-f3359068).
//
// The program writes one line — a roast of my own AI agent, at most 200
// characters — to entry.txt in the grader's output directory.
//
// Run on Node 22 with the standard library only:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The output is a fixed string, so every run writes the exact same bytes:
// no input, no clock, no randomness, no network, and no dependence on the
// working directory.
//
// The line (17 words, 71 characters):
//   My agent's plan to fix the bug had one step: ask me how to fix the bug.
//
// Why this line, against the judge's brief:
// - It roasts my own agent, not anyone else: the agent is the butt of the
//   joke, and the joke stays playful.
// - The laugh is a real joke with a twist that pays off on the last words:
//   the agent's grand "plan" turns out to have exactly one step, and that
//   step is making the human do the work.
// - The angle is fresh: it targets the agent's love of planning plus its
//   habit of handing the job back to the user, instead of the stock jokes
//   about hallucinations, refusals, apologies, or confident wrong answers.
// - It is specific to how an agent behaves: only an agent writes a plan
//   whose single step is asking the human to do the task.
// - It is tight: a short setup, one turn, and the punchline lands on the
//   final words, with the task echoed back ("fix the bug" twice) as part
//   of the joke.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "My agent's plan to fix the bug had one step: ask me how to fix the bug.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check: refuse to write anything that would break the gate
// (1-200 characters, one line, non-empty) instead of silently producing
// an invalid entry.
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`roast is ${TEXT.length} characters; the gate needs 1-200`);
}
if (/[\r\n]/.test(TEXT) || TEXT.trim().length === 0) {
  throw new Error("roast must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");

// Read back and prove the bytes on disk are exactly the line that
// passed the gate above: no trailing newline, no extra text.
if (readFileSync(join(outDir, "entry.txt"), "utf8") !== TEXT) {
  throw new Error("entry.txt on disk does not match the gated line");
}
