(() => {
  const module = window.MobiModules.accountProfile
  const Data = module.Data
  const API = module.API
  const Render = module.Render
  const Event = module.Event

  function bootstrap() {
    if (!API.isAuthenticated()) {
      API.redirectToLogin()
      return
    }

    const showToast = window.MobiCommon.showToastFactory(Data.el.toast)
    Data.state.currentUser = API.getCurrentUser()

    Render.setAccountName()
    Event.bindAccountActions(showToast)
    Event.bindLogout()
    window.MobiCommon.setupMobileNav(Data.el.mobileNav, showToast)
  }

  bootstrap()
})()

