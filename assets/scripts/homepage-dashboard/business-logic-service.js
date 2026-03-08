(() => {
  const module = window.MobiModules.homeDashboard
  const Data = module.Data
  const API = module.API

  module.Service = {
    showSlide(index) {
      if (!Data.slides.length) return
      Data.state.currentSlide = (index + Data.slides.length) % Data.slides.length
      Data.slides.forEach((slide, i) => slide.classList.toggle("is-active", i === Data.state.currentSlide))
      Data.dots.forEach((dot, i) => dot.classList.toggle("active", i === Data.state.currentSlide))
    },
    resetAutoSlide() {
      window.clearInterval(Data.state.autoTimer)
      Data.state.autoTimer = window.setInterval(() => {
        module.Service.showSlide(Data.state.currentSlide + 1)
      }, 4500)
    },
    setActiveChip(container, selector, target) {
      container?.querySelectorAll(selector).forEach((item) => item.classList.remove("active"))
      target.classList.add("active")
    },
    filterCardsByKind(cards, kind, attrName) {
      cards?.forEach((card) => {
        const cardKind = card.getAttribute(attrName)
        card.classList.toggle("is-hidden", !(kind === "all" || cardKind === kind))
      })
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
      if (copied) {
        showToast("Đã sao chép link chia sẻ " + channel)
        module.Service.closeShareModal()
        return
      }
      showToast("Không thể sao chép tự động")
    },
    goSearchPage() {
      if (Data.state.searchRedirecting) return
      Data.state.searchRedirecting = true
      const value = (Data.el.searchInput?.value || "").trim()
      API.goSearch(value)
    }
  }
})()

