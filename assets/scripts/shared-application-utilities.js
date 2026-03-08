(function () {
  function showToastFactory(toastEl) {
    var timer = null
    return function showToast(message) {
      if (!toastEl) return
      toastEl.textContent = message
      toastEl.classList.add("show")
      window.clearTimeout(timer)
      timer = window.setTimeout(function () {
        toastEl.classList.remove("show")
      }, 1800)
    }
  }

  function buildFallbackImage(label) {
    var safeLabel = String(label || "MobiFarm")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
    var svg = [
      "<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>",
      "<defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>",
      "<stop offset='0%' stop-color='#ffd5b6'/>",
      "<stop offset='100%' stop-color='#f36a22'/>",
      "</linearGradient></defs>",
      "<rect width='1200' height='800' fill='url(#g)'/>",
      "<text x='70' y='420' fill='white' font-size='74' font-family='Arial, sans-serif' font-weight='700'>PINKY EGG</text>",
      "<text x='70' y='490' fill='white' font-size='34' font-family='Arial, sans-serif'>",
      safeLabel,
      "</text>",
      "</svg>"
    ].join("")
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg)
  }

  function setupImageFallback() {
    var failedSet = new WeakSet()
    document.querySelectorAll("img").forEach(function (img) {
      img.addEventListener("error", function () {
        if (failedSet.has(img)) return
        failedSet.add(img)
        img.src = buildFallbackImage(img.alt || "MobiFarm")
      })
    })
  }

  function setupMobileNav(navEl, showToast) {
    if (!navEl) return
    navEl.addEventListener("click", function (event) {
      var tab = event.target.closest("a")
      if (!tab) return

      var href = tab.getAttribute("href")
      if (href && href !== "#") {
        return
      }

      event.preventDefault()
      navEl.querySelectorAll("a").forEach(function (item) {
        item.classList.remove("active")
      })
      tab.classList.add("active")
      var labelEl = tab.querySelector(".nav-label")
      var label = labelEl ? labelEl.textContent.trim() : tab.textContent.trim()
      if (showToast) showToast("Tab: " + label)
    })
  }

  window.MobiCommon = {
    showToastFactory: showToastFactory,
    setupImageFallback: setupImageFallback,
    setupMobileNav: setupMobileNav
  }
})()
