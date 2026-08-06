---
layout: '../layouts/Doc.astro'
title: 'Features'
description: 'Every feature Hacklets ships: bookmark search, commands, scripts, bookmarklets, smart ranking, and more.'
lead: 'Everything Hacklets can do, from bookmark search to running scripts from a local folder.'
---

## Bookmark search

Fuzzy-search all your bookmarks from one palette. Results are ranked by match
quality and your usage history, so the bookmark you want is usually one
keystroke away. Open results in the current tab, in a new tab, or in a new
window using modifier keys.

## Built-in commands

Eighteen commands ship with Hacklets, covering tab management, zoom, and
browser utilities:

- **Tabs** — close other tabs, close tabs to the right, duplicate, detach to a
  new window, move, open incognito.
- **Zoom** — zoom in, zoom out, reset.
- **Page** — print, share as Markdown, speed up media, open selected links,
  parse a selected date.
- **Hacklets** — open settings, open the script editor, reload the extension,
  reset recent items.

See the full [command reference](/hacklets/command-reference/).

## Bookmarklet runner

Any `javascript:` bookmark is searchable in the commands palette. Run a
bookmarklet on the current page without finding it in your bookmark bar —
just type its name and press **↵**.

## Folder commands

Point Hacklets at any local folder of `.js` files and every script becomes a
command. Scripts use a UserScript-style metadata header for their name, emoji,
and the pages they apply to. They execute on demand — nothing runs until you
pick it from the palette. See [Scripts](/hacklets/scripts/).

## Repeat last command

Press **⌘.** (or **Ctrl+.**) to re-run whatever you just executed. Handy for
commands you use in a loop, like zooming or switching tabs.

## Smart ranking

Results aren't just alphabetical. Each item is scored by how well it matches
your query plus a recency model: items lose half their score every 30 days,
and frequently used items get a persistent boost. Items you use regularly stay
prominent; old favorites fade. See
[Making the Most of Search](/hacklets/search/).

## Custom keyboard shortcuts

Bind any palette item to your own shortcut from the settings page. The default
bindings work everywhere, but when you have a command you reach for constantly,
one custom binding removes the extra keystrokes.

## Script editor

A built-in editor for creating and editing user scripts and bookmarklets —
with a file tree, syntax highlighting, and local saving. See
[Script Editor](/hacklets/script-editor/).

## New tab replacement

Hacklets also takes over the new-tab page with the bookmarks palette, so a
fresh tab is a search box — not a wallpaper.
