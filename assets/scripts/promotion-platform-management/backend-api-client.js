(() => {
  const module = window.MobiModules.promoPlatform
  const Data = module.Data

  module.API = {
    isAuthenticated() {
      return !!sessionStorage.getItem(Data.authKey)
    },
    redirectToLogin() {
      window.location.assign("./authentication-sign-in-portal.html")
    }
  }
})()
