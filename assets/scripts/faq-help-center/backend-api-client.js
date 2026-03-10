(() => {
  const module = window.MobiModules.faqHelp
  const Data = module.Data

  module.API = {
    isAuthenticated() { return sessionStorage.getItem(Data.authKey) === "1" },
    redirectToLogin() { window.location.href = "./authentication-sign-in-portal.html" },
    goBack() { window.history.length > 1 ? window.history.back() : window.location.assign("./account-profile-management-center.html") }
  }
})()
