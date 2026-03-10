(() => {
  const module = window.MobiModules.termsPolicy
  const API = module.API
  const Render = module.Render
  const Service = module.Service
  const Event = module.Event

  function bootstrap() {
    if (!API.isAuthenticated()) { API.redirectToLogin(); return }
    Render.renderSections(Service.allSections())
    Event.bindAll()
  }

  bootstrap()
})()

