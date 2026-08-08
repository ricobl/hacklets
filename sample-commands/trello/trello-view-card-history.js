// ==UserScript==
// @name     View Trello card history
// @emoji    📜
// @match    *://trello.com/*
// @grant    none
// ==/UserScript==

// Opens the raw action history for the current Trello card in a new tab.

;(function () {
  const cardId = location.pathname.split('/')[2]
  if (!cardId) return
  window.open(
    `https://trello.com/1/cards/${cardId}/actions?filter=updateCard:desc`
  )
})()
