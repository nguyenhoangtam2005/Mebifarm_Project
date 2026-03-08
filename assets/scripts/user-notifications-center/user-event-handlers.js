(() => {
  const module = window.MobiModules.notificationsCenter
  const Data = module.Data
  const API = module.API
  const Service = module.Service
  const Render = module.Render

  module.Event = {
    bindBackButton() { Data.el.notifyBackBtn?.addEventListener("click", API.goBackOrHome) },
    bindReadAction(showToast) {
      Data.el.notifyContent?.addEventListener("click", (event) => {
        const card = event.target.closest(".notify-card.highlight")
        if (!card) return
        Service.markRead(card)
        Render.toastMarked(showToast)
      })
    }
  }
})()

