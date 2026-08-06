---
layout: '../layouts/Doc.astro'
title: 'Getting Started'
description: 'Install Hacklets, open your first palette, and run your first command.'
lead: 'Install Hacklets and run your first command in under a minute.'
---

## Install (load unpacked)

Hacklets is open source. Install it from source in Chrome or Edge:

1. Clone the repository and build the extension:
   ```bash
   git clone git@github.com:ricobl/hacklets.git
   cd hacklets
   npm install
   npm run build
   ```
2. Open `chrome://extensions`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the `dist/` folder.
5. Pin the extension from the puzzle-piece menu for easy access.

Firefox and Safari have partial support — see [Browser Support](/hacklets/browser-support/) for the details.

## Open your first palette

Press **⌘⇧P** (or **Ctrl+Shift+P** on Windows/Linux) anywhere on a page. A dark
command palette appears, centered on screen — the same interaction as VS Code
or Spotlight.

Type to search commands and built-in actions. Press **↵** to run the
highlighted item, or **Esc** to dismiss the palette.

## The two palettes

There are two palettes, each with its own shortcut:

| Shortcut          | Palette             | What you search              |
| ----------------- | ------------------- | ---------------------------- |
| `⌘P` / `Ctrl+P`   | Bookmarks           | Everything in your bookmarks |
| `⌘⇧P` / `Ctrl+Shift+P` | Commands        | Built-ins, scripts, bookmarklets |

Both use the same search engine and the same result ranking — see
[Making the Most of Search](/hacklets/search/).

## Run your first command

Try the tab commands. Open the commands palette, type `duplicate`, and press
**↵**. Your current tab is duplicated instantly. Or type `zoom in` to zoom the
current page.

## What's next

- [Scripts](/hacklets/scripts/) — run JavaScript from a local folder.
- [Keyboard Shortcuts](/hacklets/shortcuts/) — customize every shortcut.
- [Command Reference](/hacklets/command-reference/) — every built-in command.
