// ==UserScript==
// @name     GitHub latest commit
// @emoji    🔀
// @match    https://github.com/*/blob/*
// @grant    none
// ==/UserScript==

// On a file/blob page, jumps the URL to the latest commit's revision.

;(function () {
  const link = document
    .evaluate("//span[@data-testid='latest-commit-html']/a", document)
    .iterateNext()
  if (!link) return
  const hash = link.href.split('/').pop()
  if (hash) {
    location.pathname = location.pathname.replace(/blob\/[^/]+/, 'blob/' + hash)
  }
})()
