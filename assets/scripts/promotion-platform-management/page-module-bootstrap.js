(() => {
  const module = window.MobiModules.promoPlatform
  const API = module.API
  const Render = module.Render
  const Service = module.Service
  const Event = module.Event

  function bootstrap() {
    if (!API.isAuthenticated()) { API.redirectToLogin(); return }
    Render.renderSummary()
    Render.renderLinked()
    Render.renderAvailable()
    Render.renderAddCard()
    const showToast = window.MobiCommon.showToastFactory(module.Data.el.toast)
    Event.bindAll(showToast)
  }

  bootstrap()
})()
