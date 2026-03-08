(() => {
  const module = window.MobiModules.productSearch
  const Data = module.Data
  const API = module.API
  const Service = module.Service
  const Render = module.Render

  module.Event = {
    bindToolRow() {
      Data.el.toolRow?.addEventListener("click", (event) => {
        const chip = event.target.closest("[data-sort]")
        if (!chip) return
        Data.state.sortMode = chip.getAttribute("data-sort") || "best"
        Data.el.toolRow.querySelectorAll(".tool-chip.outline").forEach((el) => el.classList.remove("active"))
        if (chip.classList.contains("outline")) chip.classList.add("active")
        Data.state.showCount = 8
        Render.renderResults()
      })
    },
    bindResultGrid() {
      Data.el.resultGrid?.addEventListener("click", (event) => {
        const shareBtn = event.target.closest(".share-btn")
        if (shareBtn) {
          const card = shareBtn.closest("[data-product-id]")
          Service.openShareModal(card?.getAttribute("data-name"), card?.getAttribute("data-product-id"))
          return
        }

        const detailEl = event.target.closest("[data-open-detail='true']")
        if (detailEl) {
          const card = detailEl.closest("[data-product-id]")
          const id = card?.getAttribute("data-product-id")
          if (id) API.goDetail(id)
          return
        }
      })
    },
    bindLoadMore() {
      Data.el.loadMoreBtn?.addEventListener("click", () => {
        Data.state.showCount += 8
        Render.renderResults()
      })
    },
    bindSearchSubmit(showToast) {
      Data.el.searchForm?.addEventListener("submit", (event) => {
        event.preventDefault()
        const value = (Data.el.searchInput?.value || "").trim()
        if (!value) { showToast("Nhập từ khóa tìm sản phẩm"); return }
        Data.state.searchKeyword = value
        Data.state.showCount = 8
        API.updateQuery(Data.state.searchKeyword)
        Render.renderResults()
      })
    },
    bindBackButton() { Data.el.searchBackBtn?.addEventListener("click", API.goBackOrHome) },
    bindShareActions(showToast) {
      Data.el.copyShareLinkBtn?.addEventListener("click", async () => {
        const copied = await API.copyToClipboard(Data.el.shareLinkInput?.value || "", Data.el.shareLinkInput)
        if (copied) { showToast("Đã sao chép link chia sẻ"); Service.closeShareModal(); return }
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
    }
  }
})()

