(() => {
  const module = window.MobiModules.termsPolicy
  const Data = module.Data

  module.Render = {
    renderSections(list) {
      if (!Data.el.content) return
      Data.el.content.innerHTML = list.map((item) => `
        <article class="policy-block">
          <h2>${item.heading}</h2>
          <p>${item.body}</p>
        </article>
      `).join("")
    }
  }
})()

