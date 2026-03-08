(() => {
  const module = window.MobiModules.productSearch
  const Data = module.Data
  const API = module.API

  module.Service = {
    priceNumber(text) { return Number(String(text || "0").replace(/[^\d]/g, "")) || 0 },
    formatPrice(text) {
      const value = module.Service.priceNumber(text)
      if (!value) return String(text || "")
      return value.toLocaleString("vi-VN") + "d"
    },
    soldNumber(text) {
      const value = String(text || "").toLowerCase().replace("da ban", "").trim()
      if (value.includes("k")) return Number(value.replace("k", "")) * 1000
      return Number(value) || 0
    },
    normalizeText(text) {
      return String(text || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    },
    buildDataset(items) {
      const list = []
      while (list.length < 16) { list.push(...items); if (!items.length) break }
      return list.slice(0, 16)
    },
    sortResults(items) {
      const list = [...items]
      if (Data.state.sortMode === "best") {
        list.sort((a, b) => module.Service.soldNumber(b.sold) - module.Service.soldNumber(a.sold))
      } else if (Data.state.sortMode === "new") {
        list.sort((a, b) => String(b.id).localeCompare(String(a.id)))
      } else if (Data.state.sortMode === "price") {
        list.sort((a, b) => module.Service.priceNumber(a.price) - module.Service.priceNumber(b.price))
      }
      return list
    },
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
      if (copied) { showToast("Đã sao chép link chia sẻ " + channel); module.Service.closeShareModal(); return }
      showToast("Không thể sao chép tự động")
    }
  }
})()

