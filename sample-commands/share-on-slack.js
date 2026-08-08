// ==UserScript==
// @name     Share on Slack
// @emoji    💬
// @grant    none
// ==/UserScript==

// Copies the current page as a Slack-formatted link (with rich HTML so it
// unfurls when pasted). Uses the selected text as the title when present.
// Customize the emoji/title lookup for the sites you care about.

async function copyAndNotify({ text, html }) {
  try {
    const permission = await Notification.requestPermission()

    const clipboardContent = {}
    if (text) {
      clipboardContent['text/plain'] = new Blob([text], {
        type: 'text/plain',
      })
    }
    if (html) {
      clipboardContent['text/html'] = new Blob([html], {
        type: 'text/html',
      })
    }

    await navigator.clipboard.write([new ClipboardItem(clipboardContent)])

    if (permission === 'granted') {
      new Notification('Copied to clipboard', { body: text || '' })
    }
  } catch (error) {
    console.error('Failed to copy or notify:', error)
  }
}

async function shareOnSlack() {
  const selectedText = window.getSelection()?.toString() ?? ''
  const title = (selectedText || document.title || location.href).trim()
  const url = location.href
  const emoji = ':link:'

  const text = `*[${emoji} ${title}](${url})*`
  const html = `${emoji} <a href="${url}"><strong>${title}</strong></a>`

  await copyAndNotify({ text, html })
}

shareOnSlack()
