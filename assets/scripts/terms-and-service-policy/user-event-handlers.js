(() => {
  const module = window.MobiModules.termsPolicy
  const Data = module.Data
  const API = module.API
  const Render = module.Render
  const Service = module.Service

  module.Event = {
    bindBack() {
      Data.el.backBtn?.addEventListener("click", () => {
        if (window.history.length > 1) {
          window.history.back()
        } else {
          window.location.assign("./account-profile-management-center.html")
        }
      })
    }
  }

  module.Event.bindAll = function () {
    module.Event.bindBack()
  }
})()

