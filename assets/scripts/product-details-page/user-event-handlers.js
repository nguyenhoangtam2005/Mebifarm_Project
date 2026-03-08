(() => {
  const module = window.MobiModules.productDetails
  const Data = module.Data
  const API = module.API
  const Service = module.Service

  module.Event = {
    bindBuyNow() {
      Data.el.buyNowBtn?.addEventListener("click", () => {
        const product = Data.state.product
        if (!product) return
        Service.openShareModal(product.name, product.id)
      })
    },
    bindShareActions(showToast) {
      Data.el.copyShareLinkBtn?.addEventListener("click", async () => {
        const copied = await API.copyToClipboard(Data.el.shareLinkInput?.value || "", Data.el.shareLinkInput)
        if (copied) { showToast("Đã sao chép link bán hàng"); Service.closeShareModal(); return }
        showToast("Không thể sao chép tự động")
      })

      Data.el.shareModal?.addEventListener("click", (event) => {
        const closeTarget = event.target.closest("[data-share-close='true']")
        if (closeTarget) { Service.closeShareModal(); return }

        const appBtn = event.target.closest("[data-share-channel]")
        if (appBtn) {
          const channel = appBtn.getAttribute("data-share-channel") || "app"
          Service.shareByChannel(channel, showToast)
        }
      })

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") Service.closeShareModal()
      })
    },
    bindHeaderActions() {
      Data.el.backBtn?.addEventListener("click", API.goHome)
      Data.el.notifyBtnDetail?.addEventListener("click", API.goNotifications)
    }
  }
})()

