(() => {
  const module = window.MobiModules.revenueDashboard
  const Data = module.Data

  module.API = {
    isAuthenticated() { return sessionStorage.getItem(Data.authKey) === "1" },
    redirectToLogin() { window.location.href = "./authentication-sign-in-portal.html" },
    goBackOrHome() {
      if (window.history.length > 1) { window.history.back(); return }
      window.location.href = "./sales-affiliate-dashboard-overview.html"
    }
  }
})()

