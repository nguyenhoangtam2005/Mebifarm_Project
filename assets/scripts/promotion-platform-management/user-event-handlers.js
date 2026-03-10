(() => {
  const module = window.MobiModules.promoPlatform
  const Data = module.Data

  module.Event = {
    bindBack() {
      Data.el.backBtn?.addEventListener("click", () => {
        if (window.history.length > 1) {
          window.history.back()
        } else {
          window.location.assign("./account-profile-management-center.html")
        }
      })
    },
    bindLinkActions(showToast) {
      const openModal = (platformId, placeholder, title) => {
        Data.state = Data.state || {}
        Data.state.currentPlatform = platformId
        if (Data.el.modalTitle) Data.el.modalTitle.textContent = title || "Thêm nền tảng"
        if (Data.el.modalDesc) Data.el.modalDesc.textContent = "Vui lòng nhập đường dẫn nền tảng để tham gia chương trình tiếp thị liên kết."
        if (Data.el.modalInput) {
          Data.el.modalInput.value = ""
          Data.el.modalInput.placeholder = placeholder || "https://"
          Data.el.modalInput.focus()
        }
        Data.el.linkModal?.classList.add("is-open")
        document.body.classList.add("lock-scroll")
      }
      const closeModal = () => {
        Data.el.linkModal?.classList.remove("is-open")
        document.body.classList.remove("lock-scroll")
      }

      Data.el.availableList?.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-action='link']")
        if (!btn) return
        const card = btn.closest(".platform-chip")
        const id = card?.dataset.id
        if (!id) return
        const plat = module.Service.getAvailable().find((p) => p.id === id) || { name: "nền tảng" }
        openModal(id, `Ví dụ https://www.${plat.name.toLowerCase()}.com/...`, `Thêm ${plat.name}`)
      })
      Data.el.linkedList?.addEventListener("click", (e) => {
        const addBtn = e.target.closest("[data-action='add-new']")
        if (addBtn) {
          openModal("other", "Dán liên kết nền tảng mới", "Thêm nền tảng")
          return
        }
        const plusBtn = e.target.closest("[data-action='link']")
        if (plusBtn) {
          const card = plusBtn.closest("[data-id]")
          const id = card?.dataset.id
          if (!id) return
          const plat = module.Service.getLinked().find((p) => p.id === id) || { name: "nền tảng" }
          openModal(id, plat.url || "https://", `Cập nhật ${plat.name}`)
          return
        }
        const trashBtn = e.target.closest("[data-action='unlink']")
        if (!trashBtn) return
        const card = trashBtn.closest("[data-id]")
        const id = card?.dataset.id
        if (!id) return
        module.Service.unlinkPlatform(id)
        module.Render.renderSummary()
        module.Render.renderLinked()
        module.Render.renderAvailable()
        module.Render.renderAddCard()
        showToast("Đã hủy liên kết")
      })

      Data.el.modalClose?.addEventListener("click", closeModal)
      Data.el.modalCancel?.addEventListener("click", closeModal)
      Data.el.linkModal?.addEventListener("click", (e) => {
        if (e.target === Data.el.linkModal) closeModal()
      })
      Data.el.modalConfirm?.addEventListener("click", () => {
        const id = Data.state?.currentPlatform || "other"
        const url = (Data.el.modalInput?.value || "").trim()
        if (!url || url.length < 5) { showToast("Vui lòng nhập URL hợp lệ"); return }
        module.Service.linkPlatform(id, url)
        module.Render.renderSummary()
        module.Render.renderLinked()
        module.Render.renderAvailable()
        module.Render.renderAddCard()
        closeModal()
        showToast("Đã lưu liên kết")
      })
    }
  }

  module.Event.bindAll = function (showToast) {
    module.Event.bindBack()
    module.Event.bindLinkActions(showToast)
  }
})()
