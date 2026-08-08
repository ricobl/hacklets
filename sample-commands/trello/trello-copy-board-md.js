// ==UserScript==
// @name     Copy Trello board as Markdown
// @emoji    📋
// @match    *://trello.com/*
// @grant    none
// ==/UserScript==

// Copies the current Trello board (lists + cards) as a Markdown document.
// Starting point — tweak the selectors/formatting to match your workflow.

;(async function () {
  async function copyAndNotify(text) {
    await navigator.clipboard.write([
      new ClipboardItem({
        'text/plain': new Blob([text], { type: 'text/plain' }),
      }),
    ])
    toast('Copied board as Markdown')
  }

  function toast(message) {
    const el = document.createElement('div')
    el.textContent = message
    el.style.cssText =
      'position:fixed;bottom:16px;left:50%;transform:translateX(-50%);background:#111;color:#fff;padding:8px 12px;border-radius:8px;z-index:99999;font:14px sans-serif'
    document.body.appendChild(el)
    setTimeout(() => el.remove(), 1500)
  }

  const boardTitle = document
    .querySelector('[data-testid="board-name-display"]')
    ?.textContent?.trim()
  if (!boardTitle) {
    toast('Not a Trello board')
    return
  }

  const lines = ['# ' + boardTitle, '']
  document.querySelectorAll('[data-testid="list"]').forEach((column) => {
    const columnTitle = column
      .querySelector('[data-testid="list-name"]')
      ?.textContent?.trim()
    if (columnTitle) {
      lines.push('## ' + columnTitle)
      lines.push('')
    }
    column.querySelectorAll('[data-testid="card-name"]').forEach((cardName) => {
      const anchor = cardName
      lines.push(`* [${anchor.textContent}](${anchor.href})`)
    })
    lines.push('')
  })

  await copyAndNotify(lines.join('\n'))
})()
