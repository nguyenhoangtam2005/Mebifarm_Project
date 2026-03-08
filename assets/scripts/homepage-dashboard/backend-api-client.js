(() => {
  const module = window.MobiModules.homeDashboard
  const Data = module.Data

  module.API = {
    isAuthenticated() { return sessionStorage.getItem(Data.authKey) === "1" },
    redirectToLogin() { window.location.href = "./authentication-sign-in-portal.html" },
    goDetail(productId) {
      window.location.href = "./product-detail-information-page.html?id=" + encodeURIComponent(productId)
    },
    goSearch(value) {
      const nextUrl = value
        ? "./product-search-discovery-page.html?q=" + encodeURIComponent(value)
        : "./product-search-discovery-page.html"
      window.location.href = nextUrl
    },
    goNotifications() { window.location.href = "./notifications-activity-center.html" },
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

