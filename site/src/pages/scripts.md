---
layout: '../layouts/Doc.astro'
title: 'Scripts'
description: 'Run JavaScript from a local folder with Hacklets: folder picker, metadata headers, URL matching, and on-demand execution.'
lead: 'Folder commands — run your own JavaScript from the palette.'
---

Hacklets can turn any local folder of `.js` files into a set of palette
commands. Point it at a folder and every script becomes searchable and
runnable — without a server, without a build step.

## Pick a folder

1. Open the settings page (right-click the extension icon → **Options**).
2. Click **Choose Folder** and select the folder containing your scripts.
3. Open the commands palette (**⌘⇧P**) — your scripts appear alongside the
   built-in commands.

The folder handle is stored locally in your browser. The scripts themselves
stay on disk and are read only when a command runs.

## The metadata header

Each script carries a Tampermonkey/Greasemonkey-style header that names it:

```js
// ==UserScript==
// @name     Count links on page
// @emoji    🔗
// @match    *://*/*
// ==/UserScript==

// your script body here
```

| Directive  | Required | Purpose                                             |
| ---------- | -------- | --------------------------------------------------- |
| `@name`    | yes      | The command title shown in the palette              |
| `@emoji`   | no       | Icon shown next to the title                        |
| `@match`   | no       | URL glob pattern; script only shows on matching pages |

## URL-based visibility

Use `@match` to make a script appear only on pages it makes sense for:

```js
// @match https://github.com/*/blob/*
// @match *://trello.com/*
```

Multiple `@match` lines are allowed. When no `@match` is present the script is
available on every page.

## On-demand execution

Unlike traditional user-script managers, folder commands are **never
auto-injected** on page load. The palette lists the folder's files when it
opens, and a script only runs when you select it. Nothing executes without
your explicit action.

When it runs, the script executes in the page's **MAIN world**, so it has full
access to the page's DOM and JavaScript. Scripts can read the current
selection with `window.getSelection()`.

## Example commands

The repository ships sample scripts in `sample-commands/`:

| Script                  | Emoji | What it does                      |
| ----------------------- | ----- | --------------------------------- |
| `count-links.js`        | 🔗    | Count links on the page           |
| `greet.js`              | 👋    | Prompt for a name, greet the page |
| `inject-style.js`       | 🌙    | Toggle a dark-mode style          |
| `search-selection.js`   | 🔎    | Search the selected text in Google|
| `share-on-slack.js`     | 💬    | Share the page on Slack           |
| `show-site-header.js`   | 🏷️    | Display the page's site header    |
| `toggle-content-editable.js` | ✏️ | Toggle content editing            |
| `github/github-latest-commit.js` | 🔀 | Latest commit on a GitHub blob |
| `trello/trello-copy-board-md.js` | 📋 | Copy a Trello board as Markdown |
| `trello/trello-copy-checklist.js` | ☑️ | Copy a card's checklist          |
| `trello/trello-view-card-history.js` | 📜 | View a card's history          |

## Known limitations

- **Stale listings** — the browser caches directory listings; newly added
  files may not appear until the cache syncs or you re-pick the folder. Script
  *execution* always reads fresh code from disk.
- **Firefox** — the File System Access API isn't supported, so folder commands
  are unavailable there. See [Browser Support](/hacklets/browser-support/).
