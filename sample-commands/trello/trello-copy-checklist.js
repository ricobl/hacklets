// ==UserScript==
// @name     Copy Trello card checklist
// @emoji    ☑️
// @match    *://trello.com/*
// @grant    none
// ==/UserScript==

// Copies the checklists of the open Trello card as Markdown task list items.

;(async function () {
  async function copyAndNotify(text) {
    await navigator.clipboard.write([
      new ClipboardItem({
        'text/plain': new Blob([text], { type: 'text/plain' }),
      }),
    ])
    toast('Copied checklist')
  }

  function toast(message) {
    const el = document.createElement('div')
    el.textContent = message
    el.style.cssText =
      'position:fixed;bottom:16px;left:50%;transform:translateX(-50%);background:#111;color:#fff;padding:8px 12px;border-radius:8px;z-index:99999;font:14px sans-serif'
    document.body.appendChild(el)
    setTimeout(() => el.remove(), 1500)
  }

  let checklistLines = ''
  document.querySelectorAll('.js-checkitem-name').forEach((itemName) => {
    const text = itemName.textContent
    if (text) checklistLines += '  - [ ] ' + text + '\n'
  })

  if (!checklistLines) {
    toast('No checklist found on this card')
    return
  }

  await copyAndNotify(checklistLines)
})()
