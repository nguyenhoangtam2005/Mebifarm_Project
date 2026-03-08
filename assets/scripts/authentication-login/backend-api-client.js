(() => {
  const module = window.MobiModules.loginPortal
  const Data = module.Data

  module.API = {
    isAuthenticated() { return sessionStorage.getItem(Data.authKey) === "1" },
    setAuthenticated() {
      sessionStorage.setItem(Data.authKey, "1")
      sessionStorage.setItem(Data.userKey, Data.credentials.username)
    },
    redirectDashboard() { window.location.href = "./sales-affiliate-dashboard-overview.html" },
    wait(ms) { return new Promise((resolve) => window.setTimeout(resolve, ms)) }
  }
})()

