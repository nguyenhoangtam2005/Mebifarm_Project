(() => {
  const module = window.MobiModules.productSearch
  const Data = module.Data
  const API = module.API
  const Render = module.Render
  const Event = module.Event

  function bootstrap() {
    if (!API.isAuthenticated()) { API.redirectToLogin(); return }

    const showToast = window.MobiCommon.showToastFactory(Data.el.toast)
    Data.state.searchKeyword = (Data.params.get("q") || "").trim() || "Trứng"
    if (Data.el.searchInput) Data.el.searchInput.value = Data.state.searchKeyword

    Render.applyUiLabels()
    window.MobiCommon.setupImageFallback()

    Event.bindToolRow()
    Event.bindResultGrid()
    Event.bindLoadMore()
    Event.bindSearchSubmit(showToast)
    Event.bindBackButton()
    Event.bindShareActions(showToast)

    Render.renderResults()
  }

  bootstrap()
})()

