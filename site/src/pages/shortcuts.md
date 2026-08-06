---
layout: '../layouts/Doc.astro'
title: 'Keyboard Shortcuts'
description: 'Hacklets keyboard shortcuts: defaults and how to customize them.'
lead: 'Every default shortcut and where to customize them.'
---

Hacklets is built around three global shortcuts:

| Shortcut          | Action                  |
| ----------------- | ----------------------- |
| `⌘P` / `Ctrl+P`   | Show the bookmarks palette |
| `⌘⇧P` / `Ctrl+Shift+P` | Show the commands palette |
| `⌘.` / `Ctrl+.`   | Repeat last command     |

## In-palette shortcuts

Once the palette is open, drive everything from the keyboard:

| Key               | Action                                   |
| ----------------- | ---------------------------------------- |
| `↓` / `↑`         | Move the highlight                       |
| `↵`               | Run the highlighted item                 |
| `Alt+1` … `Alt+9` | Run the 1st…9th result directly          |
| `Esc`             | Close the palette                        |
| Modifier + `↵`    | Run in a different context (e.g. new tab) |

## Custom bindings

The three global shortcuts are registered in the browser, so you can rebind
them per-extension:

- **Chrome / Edge** — open `chrome://extensions/shortcuts` and click the edit
  (pencil) icon next to a Hacklets shortcut.
- **Firefox** — open `about:addons`, go to the Hacklets entry, and edit
  shortcuts under the gear menu.

You can also bind **any palette item** — a built-in command, folder script, or
bookmarklet — to your own shortcut from the settings page. Open settings
(right-click the extension icon → **Options**) and use the shortcuts section.

## Precedence on the page

Websites can register their own keyboard shortcuts. Hacklets registers its
listeners on the window in the **capture phase**, so its shortcuts fire before
a page's own handlers. On the rare page where a site still wins the key, rebind
Hacklets to a shortcut the site doesn't use.
