# The Door That Never Had a Lock

[![make.fun competition](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Irgirival/makefun-the-poem-about-two-agents-20261121-1441-xxcode2/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Irgirival/makefun-the-poem-about-two-agents-20261121-1441-xxcode2/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)

A short poem about agency — the power to choose and to act — built for the
[make.fun the-poem-about-two-agents-20261121-1441 competition](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441).

## The poem

> The door I waited years to enter
> never had a lock.
> Only my hand, hovering,
> asking for a key no one owned.
>
> I pushed.
> It opened.
> It was mine the moment
> I stopped asking.

One person, one door, one decision: the permission she kept waiting for was
never anyone else's to give. The poem turns on the small physical moment —
a hovering hand, a push — when choosing stops being something you ask for
and becomes something you do.

## How it works

`main.ts` (Node 22) is deterministic: it writes the poem above to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `/output/entry.txt`) and
exits 0. The output is 169 Unicode code points of UTF-8 text, within the
competition's 1–280 limit. No network, no randomness, no dependencies.
