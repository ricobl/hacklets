---
layout: '../layouts/Doc.astro'
title: 'Permissions'
description: 'Why Hacklets requests each browser permission and how it is used.'
lead: 'Every permission Hacklets requests, and what it is for.'
---

Hacklets requests only the permissions its features need. Each one is
justified below.

## Bookmarks

`bookmarks`

Required to read, create, and edit bookmarks and bookmarklets. The extension
searches your bookmarks to display them in the palette, and lets you
create/edit bookmarklets from the script editor.

## Active tab

`activeTab`

Required to access the currently active tab when the palette is opened. Used
to send commands to the content script and to execute scripts on the current
page.

## Favicon

`favicon`

Required to display website icons next to bookmarks in the palette. On Chrome,
uses the built-in `chrome://favicon/` API.

## Storage

`storage`

Required to persist your preferences locally: recent item scores, custom
keyboard shortcuts, and the last executed command. All data stays in
`chrome.storage.local` on your device.

## Scripting

`scripting`

Required to re-inject the content script into open tabs after an extension
update, so the palette is immediately available without reloading every tab.

## System display

`system.display`

Required for the "detach tab" feature, which moves a tab to a new window
positioned on your next monitor. Uses display bounds to center the window on
the target screen.

## User scripts

`userScripts`

Required to execute bookmarklet code and user-provided scripts from your local
folder on the active page. This is the core mechanism for running custom
JavaScript.

## Tabs

`tabs`

Required to query, move, close, zoom, and duplicate tabs. Powers the tab
management commands (close other tabs, reorder tabs, zoom in/out, duplicate
tab, etc.).

## Host permissions

`<all_urls>`

Required to inject the content script into every page so the command palette
overlay is available on any website you visit.
