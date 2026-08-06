---
layout: '../layouts/Doc.astro'
title: 'Making the Most of Search'
description: 'How Hacklets search works: matching rules, scoring, ranking, and keyboard interaction.'
lead: 'Search rules, ranking, and keyboard interaction — how to find anything fast.'
---

## The basic rules

- Search is **case-insensitive**.
- Query terms are separated by spaces.
- Every term must be a **substring of a word** in an item's title.
- **All** terms must match for a result to appear.
- Terms that match **in the order you typed them** score higher than unordered
  matches.

For a query `git push`:

| Title                   | Matches?                       |
| ----------------------- | ------------------------------ |
| "GitHub Push Command"   | ✅ both terms, in order        |
| "Push to GitHub"        | ✅ both terms, in order        |
| "Push Git Command"      | ✅ both terms, unordered       |
| "Git Command"           | ❌ missing "push"              |

## How results are ranked

Every match is scored, and results are sorted best-first. Four factors
combine:

1. **Base score** — one point per matched term.
2. **Length bonus** — longer matches beat partial ones, so `git` matching
   "github" beats `gi` matching "github".
3. **Position bonus** — matches that start earlier in the title score higher.
4. **Word-start bonus** — a term that matches at the start of a word gets
   extra points.

Unordered matches get a **0.6× multiplier** applied to their final score, so
ordered matches always rank above unordered ones for the same title.

### Examples

- **"git push"** on *GitHub Push Command* — both terms match, in order, at word
  starts → very high.
- **"push git"** on *GitHub Push Command* — both terms match but unordered →
  0.6× penalty, still high.
- **"gi pu"** on *GitHub Push Command* — partial matches, shorter length bonus →
  medium.

## Smart ranking (recency + frequency)

Search relevance is only half the story. Every item also carries a usage score
that decides the order of otherwise-equal results:

- **Exponential decay** — an item loses half its score every 30 days. Recent
  use keeps an item prominent; old use fades.
- **Frequency bonus** — items used often get a persistent, logarithmically
  scaled boost, so a frequently-used item can outrank a more recent but rarely
  used one.
- **Auto-cleanup** — entries older than 120 days are pruned, and the store caps
  at 50 items, so the ranking stays fast.

## Keyboard interaction

The palette is designed to be driven entirely from the keyboard:

| Key                    | Action                                     |
| ---------------------- | ------------------------------------------ |
| `Type`                 | Filter results live                        |
| `↓` / `↑`              | Move the highlight                          |
| `↵`                    | Run the highlighted item                    |
| `Alt+1` … `Alt+9`      | Run the 1st…9th result directly             |
| `Esc`                  | Close the palette                           |
| `⌘↵` / `Ctrl+↵`        | Run with modifiers (e.g. open in new tab)   |

With modifiers held while running a bookmark or command, the item executes in
a different context — for example opening a bookmark in a new tab or a new
window.

## Why a word must fully match

Requiring each term to be a substring of a word keeps results precise: you can
type fragments (`dupli tab`) and still match *Duplicate Tab*, but you never get
fuzzy noise that shares just a few letters. The trade-off is that a typo
returns nothing — retype and the score model does the rest.
