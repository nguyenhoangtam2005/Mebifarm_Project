(() => {
  const module = window.MobiModules.productDetails
  const Data = module.Data
  const API = module.API

  module.Service = {
    openShareModal(productName, productId) {
      if (!Data.el.shareModal || !Data.el.shareLinkInput) return
      const name = productName || "Sản phẩm"
      const url = API.buildShareLink(productId)
      Data.state.currentShare = { name, url }
      if (Data.el.shareProductName) Data.el.shareProductName.textContent = name
      Data.el.shareLinkInput.value = url
      Data.el.shareModal.classList.add("is-open")
      Data.el.shareModal.setAttribute("aria-hidden", "false")
      document.body.style.overflow = "hidden"
    },
    closeShareModal() {
      if (!Data.el.shareModal) return
      Data.el.shareModal.classList.remove("is-open")
      Data.el.shareModal.setAttribute("aria-hidden", "true")
      document.body.style.overflow = ""
    },
    async shareByChannel(channel, showToast) {
      const url = Data.state.currentShare.url || Data.el.shareLinkInput?.value || ""
      const title = Data.state.currentShare.name || "Sản phẩm"
      if (!url) return

      if (navigator.share) {
        try {
          await navigator.share({ title, text: title, url })
          module.Service.closeShareModal()
          return
        } catch (error) {
          if (error && error.name === "AbortError") return
        }
      }

      const copied = await API.copyToClipboard(url, Data.el.shareLinkInput)
      if (copied) {
        showToast("Đã sao chép link chia sẻ " + channel)
        module.Service.closeShareModal()
        return
      }
      showToast("Không thể sao chép tự động")
    }
  }
})()

