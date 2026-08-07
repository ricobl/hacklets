---
layout: '../layouts/Doc.astro'
title: 'Browser Support'
description: 'Hacklets compatibility matrix across Chrome, Firefox, and Safari, with feature gaps per browser.'
lead: 'What works where — and the known gaps per browser.'
---

Hacklets is built for Chrome (and Chromium browsers such as Edge) and works
partially in Firefox.

Safari is not supported at this stage.

## Compatibility matrix

| Feature                     | Chrome / Edge | Firefox               |
| --------------------------- | ------------- | --------------------- |
| Bookmark search             | ✅            | ✅                    |
| Built-in commands           | ✅            | ✅                    |
| Bookmarklet runner          | ✅            | ✅                    |
| User Scripts (local folder) | ✅            | ❌                    |
| New tab palette             | ✅            | ✅                    |
| Favicon icons               | ✅ native     | ✅ via Google service |

Feature support are detected at runtime, so a browser release that gains
a capability will likely pick it up automatically.

## Firefox gaps

### No filesystem access for User Scripts

Firefox doesn't support the **File System Access API**, so pointing Hacklets at
a local folder of scripts is unavailable. The rest of the extension still works.

### Restricted domains

Firefox refuses to inject content scripts on certain Mozilla-controlled
domains (configured in `extensions.webextensions.restrictedDomains` in
`about:config`). On pages like `addons.mozilla.org` or `accounts.firefox.com`
the palette shortcut fires but nothing appears, because the content script
can't load. This is a deliberate browser restriction, not a Hacklets bug.

### Favicons over the network

Without a native `chrome://favicon/` API, Firefox fetches favicons from
`https://www.google.com/s2/favicons`, sending each bookmark's hostname to
Google. Results are cached locally. See the [Privacy Policy](/privacy/).

## Safari notes

Safari is unsupported at this stage. The WebExtension APIs support is limited
and may require workarounds.

## Stale folder listings (all browsers)

The File System Access API returns a cached directory snapshot, so newly
added or renamed files may not appear in the palette immediately. Re-pick the
folder for a fresh handle, or accept the brief delay — Chrome syncs its cache
periodically. Script execution always reads the latest code from disk.
