(() => {
  const module = window.MobiModules.ordersCenter
  const Data = module.Data
  const API = module.API
  const Render = module.Render

  module.Event = {
    bindTabs() {
      Data.el.ordersTabs?.addEventListener("click", (event) => {
        const tab = event.target.closest("[data-status]")
        if (!tab) return
        Data.state.activeStatus = tab.getAttribute("data-status") || "all"
        Data.el.ordersTabs.querySelectorAll(".tab-btn").forEach((item) => item.classList.remove("active"))
        tab.classList.add("active")
        Render.renderOrders()
      })
    },
    bindRetry(showToast) {
      Data.el.ordersList?.addEventListener("click", (event) => {
        const retryBtn = event.target.closest("[data-retry-id]")
        if (!retryBtn) return
        showToast("Đã thêm đơn vào giỏ để đặt lại")
      })
    },
    bindBackButton() { Data.el.ordersBackBtn?.addEventListener("click", API.goBackOrHome) }
  }
})()

