(() => {
  const module = window.MobiModules.homeDashboard
  const Data = module.Data
  const API = module.API
  const Event = module.Event
  const Render = module.Render

  function bootstrap() {
    if (!API.isAuthenticated()) { API.redirectToLogin(); return }
    const showToast = window.MobiCommon.showToastFactory(Data.el.toast)

    Event.bindSlider()
    Event.bindFilters(showToast)
    Event.bindBodyActions(showToast)
    Event.bindSearch()
    Event.bindNotifyButton()
    Event.bindShareActions(showToast)

    window.MobiCommon.setupMobileNav(Data.el.mobileNav, showToast)
    Render.init()
  }

  bootstrap()
})()

