(() => {
  const module = window.MobiModules.faqHelp
  const Data = module.Data

  module.Render = {
    renderFaqs(list) {
      if (!Data.el.faqList) return
      Data.el.faqList.innerHTML = ""
      list.forEach((item) => {
        const wrapper = document.createElement("article")
        wrapper.className = "faq-item"
        wrapper.dataset.id = item.id
        wrapper.innerHTML = `
          <div class="faq-header" data-id="${item.id}">
            <p class="faq-question">${item.question}</p>
            <i class="fa-solid fa-chevron-down faq-icon"></i>
          </div>
          <div class="faq-body">${item.answer}</div>
        `
        Data.el.faqList.appendChild(wrapper)
      })
    },
    toggleFaq(id) {
      const card = Data.el.faqList?.querySelector(`[data-id="${id}"]`)
      card?.classList.toggle("is-open")
    },
    showPolicy(policy) {
      if (!policy || !Data.el.policySheet || !Data.el.policyTitle || !Data.el.policyBody) return
      Data.el.policyTitle.textContent = policy.title
      Data.el.policyBody.innerHTML = policy.sections.map((sec) => `
        <section class="policy-section">
          <h3>${sec.heading}</h3>
          <p>${sec.body}</p>
        </section>
      `).join("")
      Data.el.policySheet.classList.add("is-open")
      Data.state.currentPolicy = policy.title
      document.body.classList.add("lock-scroll")
    },
    hidePolicy() {
      Data.el.policySheet?.classList.remove("is-open")
      document.body.classList.remove("lock-scroll")
      Data.state.currentPolicy = null
    }
  }
})()
