(() => {
  const module = window.MobiModules.homeDashboard

  module.Render = {
    init() {
      module.Service.showSlide(0)
      module.Service.resetAutoSlide()
      window.MobiCommon.setupImageFallback()
    }
  }
})()

