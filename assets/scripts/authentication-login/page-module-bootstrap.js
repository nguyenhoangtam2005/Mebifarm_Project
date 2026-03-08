(() => {
  const module = window.MobiModules.loginPortal
  const Data = module.Data
  const API = module.API
  const Service = module.Service
  const Event = module.Event

  function bootstrap() {
    if (API.isAuthenticated()) { API.redirectDashboard(); return }

    const showToast = window.MobiCommon.showToastFactory(Data.el.toast)
    Service.clearErrorWhenTyping(Data.el.usernameInput, Data.el.usernameField, Data.el.usernameError)
    Service.clearErrorWhenTyping(Data.el.passwordInput, Data.el.passwordField, Data.el.passwordError)

    Event.bindFormSubmit(showToast)
    Event.bindPasswordToggle()
    Event.bindQuickActions(showToast)
  }

  bootstrap()
})()

