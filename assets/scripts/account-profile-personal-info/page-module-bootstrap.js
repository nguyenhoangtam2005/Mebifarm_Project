(() => {
  const module = window.MobiModules.accountProfileInfo
  const Data = module.Data
  const API = module.API
  const Render = module.Render
  const Event = module.Event

  function bootstrap() {
    if (!API.isAuthenticated()) {
      API.redirectToLogin()
      return
    }

    const showToast = window.MobiCommon.showToastFactory(Data.el.toast)
    Data.state.profile = API.loadProfile()

    Render.renderProfile()
    Render.setEmailEditable(false)

    Event.bindAll(showToast)
    window.MobiCommon.setupImageFallback()
  }

  bootstrap()
})()
