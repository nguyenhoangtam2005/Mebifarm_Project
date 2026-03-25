(() => {
  const module = window.MobiModules.termsPolicy
  const Data = module.Data

  module.API = {
    isAuthenticated() {
      return !!sessionStorage.getItem(Data.authKey)
    },
    redirectToLogin() {
      window.location.assign("./authentication-sign-in-portal.html")
    },
    redirectToAccountOverview() {
      window.location.assign("./account-profile-management-center.html")
    }
  }
})()
