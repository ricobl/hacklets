---
layout: '../layouts/Doc.astro'
title: 'Bookmarklets'
description: 'Run and edit javascript: bookmarklets from the Hacklets command palette.'
lead: 'Run bookmarklets from the palette — no bookmark bar hunting required.'
---

A bookmarklet is a bookmark whose URL starts with `javascript:`. Instead of
running code through the browser address bar, bookmarklets are regular
bookmarks you click — which makes them fiddly to find and launch.

Hacklets collects every `javascript:` bookmark in your bookmark store and
surfaces it in the **commands palette**. Type its name, press **↵**, and the
bookmarklet runs against the current page.

## What you can do

- **Search them** — bookmarklets appear in the commands palette like any other
  command, with your other scripts and built-ins.
- **Run them anywhere** — a bookmarklet runs on whichever page is active,
  reading the page's DOM and JavaScript.
- **Edit them** — bookmarklets open in the [Script Editor](/script-editor/)
  where you can change the code and save straight back to your bookmarks.
- **Create new ones** — write a new bookmarklet from scratch in the script
  editor and it's added to your bookmarks, immediately searchable.

## A quick example

This bookmarklet greets the current page:

```js
javascript:(function () {
  alert('Hello from Hacklets: ' + document.title)
})()
```

Save it as a bookmark named "Greet Page", then press **⌘⇧P**, type `greet`,
and run it.

## Under the hood

When you select a bookmarklet, Hacklets sends it to the background worker,
which executes the code in the page's **MAIN world** via `chrome.userScripts`
— the same mechanism used for folder commands, giving it full page access.

## Related

- [Script Editor](/script-editor/) — create and edit bookmarklets.
- [Scripts](/scripts/) — run local folder scripts the same way.
