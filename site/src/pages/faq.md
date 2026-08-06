---
layout: '../layouts/Doc.astro'
title: 'FAQ'
description: 'Troubleshooting and common questions about Hacklets.'
lead: 'Troubleshooting and common questions.'
---

## The palette doesn't open

A few things to check:

- Make sure the extension is loaded and enabled in `chrome://extensions`.
- If you installed it before an update, reopen your tabs once — the palette
  injects into already-open tabs on update.
- Some browsers refuse to inject on certain pages. See
  [Browser Support](/hacklets/browser-support/) for the pages
  where the palette won't appear.

## My shortcut conflicts with a website's shortcut

Websites can register their own keyboard shortcuts. Hacklets registers its
shortcuts to take precedence, but on rare pages a site wins the key first. You
can rebind the palette shortcuts to keys the site doesn't use — see
[Keyboard Shortcuts](/hacklets/shortcuts/).

## Folder commands show a stale file list

The browser's File System Access API returns a cached snapshot of the folder,
so newly added or renamed files may not appear immediately. Two things help:

- **Re-pick the folder** in settings to get a guaranteed-fresh handle.
- **Accept the delay** — Chrome syncs the cache periodically on its own.

Note that when a folder command *runs*, the script is always read fresh from
disk, so you always execute the latest code.

## Folder commands don't work at all

Hacklets uses the File System Access API, which Firefox doesn't support. On
Firefox, the extension still works — built-in commands, bookmarks, and
bookmarklets — but folder commands are unavailable. See
[Browser Support](/hacklets/browser-support/).

## Where is my data stored?

Everything stays on your device in your browser's local storage. Nothing is
synced or sent to a server. See the [Privacy Policy](/hacklets/privacy/).

## How do I reset the "recent items" ranking?

Run the **Reset Recent Items** command from the commands palette. It clears the
usage history that powers smart ranking.

## How do I uninstall?

Chrome: right-click the extension icon → **Remove from Chrome**. Your browser
data (bookmarks, tabs) is untouched — only the extension's own stored
preferences are removed.
