// ==UserScript==
// @name     Greet the page
// @emoji    👋
// @grant    none
// ==/UserScript==

const name = window.getSelection()?.toString() || 'world'
document.title = `Hello, ${name}!`
