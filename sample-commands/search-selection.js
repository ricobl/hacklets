// ==UserScript==
// @name     Search Selection Google
// @emoji    🔎
// @grant    none
// ==/UserScript==

const searchTerm = encodeURIComponent(window.getSelection()?.toString() ?? '')
window.open(`https://www.google.com/search?q=${searchTerm}`)
