---
layout: '../layouts/Doc.astro'
title: 'Browser Support'
description: 'Hacklets compatibility matrix across Chrome, Firefox, and Safari, with feature gaps per browser.'
lead: 'What works where — and the known gaps per browser.'
---

Hacklets is built for Chrome (and Chromium browsers such as Edge) and works
partially in Firefox and Safari.

## Compatibility matrix

| Feature                       | Chrome / Edge | Firefox | Safari |
| ----------------------------- | ------------- | ------- | ------ |
| Bookmark search               | ✅            | ✅      | partial |
| Built-in commands             | ✅            | ✅      | partial |
| Bookmarklet runner            | ✅            | ✅      | partial |
| Folder commands (local scripts) | ✅          | ❌      | ❌     |
| New tab palette               | ✅            | partial | ❌     |
| Favicon icons                 | ✅ native     | ✅ via Google service | ❌ |

Feature flags are detected at runtime, so a browser that gains a capability
picks it up automatically.

## Firefox gaps

### No folder commands

Firefox doesn't support the **File System Access API**, so pointing Hacklets at
a local folder of scripts is unavailable. The rest of the extension still
works. Supporting folder commands on Firefox would need an alternative storage
mechanism (e.g. drag-and-drop import).

### Restricted domains

Firefox refuses to inject content scripts on certain Mozilla-controlled
domains (configured in `extensions.webextensions.restrictedDomains` in
`about:config`). On pages like `addons.mozilla.org` or `accounts.firefox.com`
the palette shortcut fires but nothing appears, because the content script
can't load. This is a deliberate browser restriction, not a Hacklets bug.

### Favicons over the network

Without a native `chrome://favicon/` API, Firefox fetches favicons from
`https://www.google.com/s2/favicons`, sending each bookmark's hostname to
Google. Results are cached locally. See the [Privacy Policy](/hacklets/privacy/).

## Safari notes

Safari support is partial. The WebExtension APIs Hacklets relies on — in
particular `chrome.userScripts` and the File System Access API — are not
available in Safari, which limits script execution and folder commands.

## Stale folder listings (all browsers)

The File System Access API returns a cached directory snapshot, so newly
added or renamed files may not appear in the palette immediately. Re-pick the
folder for a fresh handle, or accept the brief delay — Chrome syncs its cache
periodically. Script execution always reads the latest code from disk.
