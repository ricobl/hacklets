// ==UserScript==
// @name     Count links on page
// @emoji    🔗
// @grant    none
// ==/UserScript==

const count = document.querySelectorAll('a').length
alert(`This page has ${count} link${count !== 1 ? 's' : ''}.`)
