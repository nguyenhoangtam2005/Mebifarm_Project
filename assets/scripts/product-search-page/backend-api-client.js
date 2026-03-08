(() => {
  const module = window.MobiModules.productSearch
  const Data = module.Data

  module.API = {
    isAuthenticated() { return sessionStorage.getItem(Data.authKey) === "1" },
    redirectToLogin() { window.location.href = "./authentication-sign-in-portal.html" },
    updateQuery(keyword) {
      history.replaceState({}, "", "./product-search-discovery-page.html?q=" + encodeURIComponent(keyword))
    },
    goBackOrHome() {
      if (window.history.length > 1) { window.history.back(); return }
      window.location.href = "./sales-affiliate-dashboard-overview.html"
    },
    goDetail(id) {
      window.location.href = "./product-detail-information-page.html?id=" + encodeURIComponent(id)
    },
    buildShareLink(productId) {
      const shareUrl = new URL("./product-detail-information-page.html", window.location.href)
      shareUrl.searchParams.set("id", productId || "p12")
      shareUrl.searchParams.set("source", "ctv-share")
      return shareUrl.toString()
    },
    async copyToClipboard(text, fallbackInput) {
      try {
        await navigator.clipboard.writeText(text)
        return true
      } catch (error) {
        if (!fallbackInput) return false
        fallbackInput.focus()
        fallbackInput.select()
        return document.execCommand("copy")
      }
    }
  }
})()

