(() => {
  const module = window.MobiModules.faqHelp
  const Data = module.Data
  const Render = module.Render

  module.Event = {
    bindBack() { Data.el.backBtn?.addEventListener("click", () => window.history.length > 1 ? window.history.back() : window.location.assign("./account-profile-management-center.html")) },
    bindFilters(showToast) {
      Data.el.filterChips?.addEventListener("click", (event) => {
        const chip = event.target.closest(".chip")
        if (!chip) return
        Data.el.filterChips.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"))
        chip.classList.add("active")
        Data.state.filter = chip.dataset.filter || "all"
        Render.renderFaqs(module.Service.filterFaqs())
        const first = Data.el.faqList?.querySelector('.faq-item')
        if (first) first.classList.add('is-open')
      })
      Data.el.searchInput?.addEventListener("input", (e) => {
        Data.state.query = e.target.value || ""
        Render.renderFaqs(module.Service.filterFaqs())
        const first = Data.el.faqList?.querySelector('.faq-item')
        if (first) first.classList.add('is-open')
      })
    },
    bindFaqAccordion() {
      Data.el.faqList?.addEventListener("click", (event) => {
        const header = event.target.closest(".faq-header")
        if (!header) return
        const card = header.closest('.faq-item')
        card?.classList.toggle('is-open')
      })
    },
    bindSupport(showToast) {
      Data.el.supportCard?.addEventListener("click", (event) => {
        const btn = event.target.closest(".support-btn")
        if (!btn) return
        const action = btn.dataset.action
        const map = { chat: "Mở chat hỗ trợ", hotline: "Gọi hotline 1900 1234", email: "Mở soạn Email" }
        showToast(map[action] || "Đang xử lý")
      })
      Data.el.policyCard?.addEventListener("click", (event) => {
        const link = event.target.closest(".policy-row")
        if (!link) return
        event.preventDefault()
        const policy = module.Service.getPolicy(link.dataset.policy)
        if (policy) {
          module.Render.showPolicy(policy)
        } else {
          showToast("Chưa có nội dung chính sách")
        }
      })
      Data.el.policyClose?.addEventListener("click", () => module.Render.hidePolicy())
      Data.el.policySheet?.addEventListener("click", (e) => {
        if (e.target.classList.contains("policy-sheet")) module.Render.hidePolicy()
      })
    }
  }

  module.Event.bindAll = function (showToast) {
    module.Event.bindBack()
    module.Event.bindFilters(showToast)
    module.Event.bindFaqAccordion()
    module.Event.bindSupport(showToast)
  }
})()
