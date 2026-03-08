(() => {
  const module = window.MobiModules.ordersCenter
  const Data = module.Data
  const API = module.API
  const Event = module.Event
  const Render = module.Render

  function bootstrap() {
    if (!API.isAuthenticated()) { API.redirectToLogin(); return }
    const showToast = window.MobiCommon.showToastFactory(Data.el.toast)
    Event.bindTabs()
    Event.bindRetry(showToast)
    Event.bindBackButton()
    window.MobiCommon.setupMobileNav(Data.el.mobileNav, showToast)
    Render.renderOrders()
  }

  bootstrap()
})()

