# Sample Commands

These are example user scripts files for the Hacklets browser extension.

Each `.js` file uses a **UserScript-style header** with metadata comments:

```js
// ==UserScript==
// @name     Command title
// @emoji    🔗
// @match    *://*/*
// ==/UserScript==

// raw JS — runs in the current tab when selected in the commands palette
```

Supported directives: `@name` (required), `@emoji`, `@match` (glob patterns).

Try it:

1. Open the Hacklets settings page (right-click extension icon → Options)
2. Click **Choose Folder** and select this `sample-commands/` directory
3. Open the command palette (`Cmd+Shift+P`, `Ctrl+Shift+P` or your configured shortcut)
4. The sample commands should appear alongside built-in ones
