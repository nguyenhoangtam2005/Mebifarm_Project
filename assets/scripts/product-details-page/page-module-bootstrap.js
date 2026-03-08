(() => {
  const module = window.MobiModules.productDetails
  const Data = module.Data
  const API = module.API
  const Render = module.Render
  const Event = module.Event

  function bootstrap() {
    if (!API.isAuthenticated()) { API.redirectToLogin(); return }

    Data.state.product = API.getProductByQuery()
    if (!Data.state.product) return

    const showToast = window.MobiCommon.showToastFactory(Data.el.toast)
    Render.renderProduct(Data.state.product)
    Event.bindBuyNow()
    Event.bindShareActions(showToast)
    Event.bindHeaderActions()
    window.MobiCommon.setupImageFallback()
    window.MobiCommon.setupMobileNav(Data.el.mobileNav, showToast)
  }

  bootstrap()
})()

