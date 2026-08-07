---
layout: '../layouts/Doc.astro'
title: 'Privacy'
description: 'Hacklets privacy policy — everything runs locally, no data is collected or transmitted.'
lead: 'Hacklets runs entirely locally. This page covers the extension and this website.'
---

Last updated: July 2026

## The extension

Hacklets runs entirely in your browser and does not collect, transmit, or
share any personal data.

### Data stored locally

Hacklets stores the following in your browser's local storage
(`browser.storage.local` and IndexedDB):

- **Recent items** — command and bookmark IDs with timestamps, used to rank
  recently-used items higher in search results.
- **Keyboard shortcuts** — custom shortcut bindings you configure.
- **Last executed command** — to support the "repeat last command" feature.
- **Scripts folder handle** — a reference to the local folder you chose, used
  to load your custom scripts.

All of this stays on your device. Nothing is synced, uploaded, or transmitted
to any server.

### Network requests

On **Chrome**, favicons are fetched via the built-in `chrome://favicon/` API —
no external network request.

On **Firefox only**, Hacklets fetches website favicons from
`https://www.google.com/s2/favicons` to display icons next to bookmarks. The
hostname of each bookmark is sent to Google's favicon service; results are
cached locally. No other data is included.

No other external servers, APIs, or endpoints are contacted.

If anonymous, aggregate usage analytics are ever added to the extension, they
will be opt-in only, enabled by you, and used solely to understand feature
usage. This policy will be updated before that happens.

### Bookmarks and scripts

Hacklets reads your bookmarks to display them in the search palette. Bookmark
data is processed locally and never leaves your browser. Creating or editing
bookmarklets saves changes directly to your browser's bookmark store. Folder
scripts are read from disk only when you run them.

### Permissions

Hacklets requests the minimum permissions its features need. See the
[Chrome Web Store listing copy](/hacklets/features/) for the
justification of each permission.

## This website

This website is separate from the extension. It uses **Google Analytics (GA4)**
to measure aggregate page views. GA4 is loaded only after you accept the
cookie notice; declining disables the tracker entirely. The analytics code has
no connection to the extension runtime — visiting this site tells us nothing
about how you use Hacklets.

## Children's Privacy

Hacklets does not knowingly collect any information from children under 13.

## Changes to This Policy

If this policy is updated, changes will be published in the project's source
repository.

## Contact

For questions about this privacy policy, open an issue at the
[Hacklets GitHub repository](https://github.com/ricobl/hacklets).
