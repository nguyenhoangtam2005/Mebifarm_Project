(() => {
  const module = window.MobiModules.productDetails
  const Data = module.Data

  module.API = {
    isAuthenticated() { return sessionStorage.getItem(Data.authKey) === "1" },
    redirectToLogin() { window.location.href = "./authentication-sign-in-portal.html" },
    getProductByQuery() {
      const params = new URLSearchParams(window.location.search)
      const id = params.get("id") || "p12"
      const products = window.MOBI_PRODUCTS || {}
      return products[id] || products.p12 || null
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
    },
    goHome() { window.location.href = "./sales-affiliate-dashboard-overview.html" },
    goNotifications() { window.location.href = "./notifications-activity-center.html" }
  }
})()

