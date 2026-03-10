(() => {
  const module = window.MobiModules.accountProfile
  const Data = module.Data

  module.API = {
    isAuthenticated() {
      return sessionStorage.getItem(Data.authKey) === "1"
    },
    redirectToLogin() {
      window.location.href = "./authentication-sign-in-portal.html"
    },
    getCurrentUser() {
      return sessionStorage.getItem(Data.userKey) || Data.fallbackUser
    },
    clearSession() {
      sessionStorage.removeItem(Data.authKey)
      sessionStorage.removeItem(Data.userKey)
    }
  }
})()
