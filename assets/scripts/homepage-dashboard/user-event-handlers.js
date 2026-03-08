(() => {
  const module = window.MobiModules.homeDashboard
  const Data = module.Data
  const API = module.API
  const Service = module.Service

  module.Event = {
    bindSlider() {
      Data.nextBtn?.addEventListener("click", () => { Service.showSlide(Data.state.currentSlide + 1); Service.resetAutoSlide() })
      Data.prevBtn?.addEventListener("click", () => { Service.showSlide(Data.state.currentSlide - 1); Service.resetAutoSlide() })
      Data.dots.forEach((dot) => {
        dot.addEventListener("click", () => {
          const index = Number(dot.getAttribute("data-index") || 0)
          Service.showSlide(index)
          Service.resetAutoSlide()
        })
      })
    },
    bindFilters(showToast) {
      Data.el.quickFilters?.addEventListener("click", (event) => {
        const chip = event.target.closest(".chip")
        if (!chip) return
        Service.setActiveChip(Data.el.quickFilters, ".chip", chip)
        const filter = chip.getAttribute("data-filter") || "all"
        Service.filterCardsByKind(Data.el.dailyList?.querySelectorAll(".mini-card"), filter, "data-kind")
        showToast("Lọc nhanh: " + chip.textContent.trim())
      })

      Data.el.galleryTags?.addEventListener("click", (event) => {
        const tag = event.target.closest(".tag")
        if (!tag) return
        Service.setActiveChip(Data.el.galleryTags, ".tag", tag)
        const kind = tag.getAttribute("data-kind") || "all"
        Service.filterCardsByKind(Data.el.galleryGrid?.querySelectorAll(".gallery-card"), kind, "data-kind")
        showToast("Thư viện: " + tag.textContent.trim())
      })
    },
    bindBodyActions(showToast) {
      document.body.addEventListener("click", (event) => {
        const shareBtn = event.target.closest(".share-btn")
        if (shareBtn) {
          const card = shareBtn.closest("[data-name]")
          Service.openShareModal(card?.getAttribute("data-name"), card?.getAttribute("data-product-id") || "p12")
          return
        }

        const appBtn = event.target.closest("[data-share-channel]")
        if (appBtn && Data.el.shareModal?.classList.contains("is-open")) {
          const channel = appBtn.getAttribute("data-share-channel") || "app"
          Service.shareByChannel(channel, showToast)
          return
        }

        const detailTarget = event.target.closest("[data-open-detail='true']")
        if (detailTarget) {
          const card = detailTarget.closest("[data-product-id]")
          const productId = card?.getAttribute("data-product-id")
          if (productId) API.goDetail(productId)
          return
        }

        const actionBtn = event.target.closest("[data-action]")
        if (actionBtn) { event.preventDefault(); showToast("Đang mở: " + actionBtn.textContent.trim()) }
      })
    },
    bindSearch() {
      Data.el.searchForm?.addEventListener("click", (event) => { event.preventDefault(); Service.goSearchPage() })
      Data.el.searchInput?.addEventListener("focus", Service.goSearchPage)
      Data.el.searchForm?.addEventListener("submit", (event) => { event.preventDefault(); Service.goSearchPage() })
    },
    bindNotifyButton() { Data.el.notifyBtn?.addEventListener("click", API.goNotifications) },
    bindShareActions(showToast) {
      Data.el.copyShareLinkBtn?.addEventListener("click", async () => {
        const copied = await API.copyToClipboard(Data.el.shareLinkInput?.value || "", Data.el.shareLinkInput)
        if (copied) { showToast("Đã sao chép link chia sẻ"); Service.closeShareModal(); return }
        showToast("Không thể sao chép tự động")
      })

      Data.el.shareModal?.addEventListener("click", (event) => {
        if (event.target instanceof HTMLElement && event.target.getAttribute("data-share-close") === "true") {
          Service.closeShareModal()
        }
      })

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") Service.closeShareModal()
      })
    }
  }
})()

