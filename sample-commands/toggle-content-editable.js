// ==UserScript==
// @name     Toggle content editable
// @emoji    ✏️
// @grant    none
// ==/UserScript==

// Makes the whole page editable (or read-only again) by toggling
// contentEditable + designMode. Handy for quick tweaks or pranking a screenshot.

const body = document.body
const isEditable = body.contentEditable === 'true'
body.contentEditable = isEditable ? 'false' : 'true'
document.designMode = isEditable ? 'off' : 'on'
