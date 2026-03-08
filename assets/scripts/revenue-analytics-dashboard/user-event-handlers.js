(() => {
  const module = window.MobiModules.revenueDashboard
  const Data = module.Data
  const API = module.API
  const Service = module.Service
  const Render = module.Render

  module.Event = {
    bindBackButton() { Data.el.revenueBackBtn?.addEventListener("click", API.goBackOrHome) },
    bindRangeSelector(showToast) {
      Data.el.rangeRow?.addEventListener("click", (event) => {
        const button = event.target.closest("[data-range]")
        if (!button) return
        const range = Service.setActiveRange(button)
        Render.toastRange(showToast, range)
      })
    }
  }
})()

