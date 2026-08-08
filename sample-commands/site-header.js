// ==UserScript==
// @name     Show site header
// @emoji    🏷️
// @match    *://*/*
// @grant    none
// ==/UserScript==

const h1 = document.querySelector('h1')
const text = h1 ? h1.textContent?.trim() : '(no h1 found)'
alert(`Site heading: ${text}`)
