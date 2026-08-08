// ==UserScript==
// @name     Inject dark mode toggle
// @emoji    🌙
// @grant    none
// ==/UserScript==

const existing = document.getElementById('hc-dark-toggle')
if (existing) {
  existing.remove()
} else {
  const style = document.createElement('style')
  style.id = 'hc-dark-toggle'
  style.textContent = `
    html {
      filter: invert(1) hue-rotate(180deg) !important;
    }
    img, video, canvas, svg {
      filter: invert(1) hue-rotate(180deg) !important;
    }
  `
  document.head.appendChild(style)
}
