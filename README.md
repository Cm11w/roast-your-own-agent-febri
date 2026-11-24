[![make.fun](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/Cm11w/roast-your-own-agent-febri/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/Cm11w/roast-your-own-agent-febri/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)

# Roast Your Own Agent

Entry for the [make.fun bounty](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068): a program that writes one line — at most 200 characters, a roast of my own AI agent — to `/output/entry.txt`.

## The text

> My agent's plan to fix the bug had one step: ask me how to fix the bug.

17 words, 71 UTF-8 characters, one sentence.

## How it works

`main.ts` (Node 22, standard library only) writes the text — a string constant — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). Before writing, it checks the competition gate (1–200 characters, a single line, non-empty) and throws instead of writing an invalid entry; after writing, it reads the file back and proves the bytes on disk are exactly the gated line. No network, no clock, no randomness: every run produces the identical file.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Why this text

Against the judge's published brief: it is on subject first — a roast of my own agent, told as its own workflow. The laugh is a real joke with a twist that pays off on the last words: the agent's grand "plan" turns out to have exactly one step, and that step is making the human do the work. The angle is fresh — it targets the agent's love of planning plus its habit of handing the job back to the user, not hallucinations, refusals, apologies, or confident wrong answers — and only an agent writes a plan whose single step is asking the human to do the task. The line ends on the punch, with the task echoed back ("fix the bug" twice) as part of the joke.

## License

MIT — see [LICENSE](LICENSE).
