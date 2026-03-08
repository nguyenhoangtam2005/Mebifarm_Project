(() => {
  const module = window.MobiModules.notificationsCenter
  const Data = module.Data
  const API = module.API
  const Event = module.Event

  function bootstrap() {
    if (!API.isAuthenticated()) { API.redirectToLogin(); return }
    const showToast = window.MobiCommon.showToastFactory(Data.el.toast)
    Event.bindBackButton()
    Event.bindReadAction(showToast)
    window.MobiCommon.setupMobileNav(Data.el.mobileNav, showToast)
  }

  bootstrap()
})()

