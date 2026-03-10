(() => {
  const module = window.MobiModules.accountProfile
  const Data = module.Data
  const API = module.API
  const Service = module.Service

  module.Event = {
    bindAccountActions(showToast) {
      Data.el.accountPage?.addEventListener("click", (event) => {
        const actionEl = event.target.closest("[data-action]")
        if (!actionEl) return
        const action = actionEl.getAttribute("data-action") || ""
        showToast(Service.resolveActionToast(action))
      })
    },
    bindLogout() {
      Data.el.logoutBtn?.addEventListener("click", () => {
        API.clearSession()
        API.redirectToLogin()
      })
    }
  }
})()
