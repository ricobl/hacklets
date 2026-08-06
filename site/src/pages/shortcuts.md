---
layout: '../layouts/Doc.astro'
title: 'Keyboard Shortcuts'
description: 'Hacklets keyboard shortcuts: defaults and how to customize them.'
lead: 'Every default shortcut and where to customize them.'
---

Hacklets is built around three global shortcuts:

| Shortcut                                        | Action                     |
| ----------------------------------------------- | -------------------------- |
| `⌘Cmd + P` <br /> `^Ctrl + P`                   | Show the bookmarks palette |
| `⌘Cmd + ⇧Shift + P` <br /> `^Ctrl + ⇧Shift + P` | Show the commands palette  |
| `⌘Cmd + .` <br /> `^Ctrl + .`                   | Repeat last command        |

These may conflict with native browser shortcuts like the one for the print dialog.

You can customize them shortcuts in the browser extension management but who
prints anything these days? (You still can via the built-in "Print" command though.)

In Chrome, extension shortcuts will take precedence over browser-native ones and
over page shortcuts.

With Firefox, browser shortcuts will win over the others, you'll either need to
pick a different shortcut or disable the native one in `about:keyboard`.

## In-palette shortcuts

Once the palette is open, drive everything from the keyboard:

| Key                     | Action                                    |
| ----------------------- | ----------------------------------------- |
| `↑Up` / `↓Down`         | Move the highlight                        |
| `⌥Alt+1` … `⌥Alt+9`     | Run the 1st…9th result directly           |
| `↵Enter`                | Run the highlighted item                  |
| `<modifier>` + `↵Enter` | Run in a different context (e.g. new tab) |
| `␛Esc`                  | Close the palette                         |

Each script/command has its own way of dealing with modifiers, slightly changing
its behaviour.

Use the following to control how bookmarks are opened:

| Key                        | Action                                                                   |
| -------------------------- | ------------------------------------------------------------------------ |
| `Right Arrow`              | Open in background tab, keeps palette open so you can open multiple tabs |
| `Cmd+Enter` / `Ctrl+Enter` | Open in a new tab                                                        |
| `Shift+Enter`              | Open in a new window                                                     |

## Custom bindings

The three global shortcuts are registered in the browser, so you can rebind
them per-extension:

- **Chrome / Edge** — open `chrome://extensions/shortcuts` and click the edit
  (pencil) icon next to a Hacklets shortcut.
- **Firefox** — open `about:addons`, go to the Hacklets entry, and edit
  shortcuts under the gear menu.

You can also bind **any palette item** — a built-in command, user script, or
bookmarklet — to your own shortcut from the settings page. Open settings
(right-click the extension icon → **Options**) and use the shortcuts section.

## Precedence on the page

Websites can register their own keyboard shortcuts. Hacklets tries its best to
take precedence over the page's own shortcuts to put you in control of the
experience.

But the Internet is a wild place, pages can have very different implementations
and take over precedence back or simply break the extension.

On the rare case where a site still wins the key, try rebinding to a different key
combination the site doesn't use.
