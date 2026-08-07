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

Every match is scored based on factors that include match length, position and order.

Results are sorted best-first and non-matches are taken out.

For a query `git push`:

| Title                         | Matches?                 |
| ----------------------------- | ------------------------ |
| "**Git**Hub **Push** Command" | ✅ both terms, in order  |
| "**Push** **Git** Command"    | ✅ both terms, unordered |
| "**Git** Command"             | ❌ missing "push"        |

## Why a word must fully match

For the items above `gitpush` (without spaces) won't return results.

Requiring each term to be a substring of a word keeps results precise: you can
type fragments (`gi pu`) and still match _"**Gi**thub **Pu**sh Command"_, but you never get
noise that shares just a few letters from other fuzzy algorithms (e.g. _"**Gi**thub **P**ages **U**sage"_).

The trade-off is that a typo returns nothing — retype and the score model does the rest.

## Optimization

Giving your bookmarks, bookmarklets and scripts good titles will go a long way in
making the search get you better results.

Bookmarks typically carry the page title, it's often short and it might not have
the words to match your mental reference to that page.

So take your time to curate them and give them better titles if you're having
too many clashes.

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
