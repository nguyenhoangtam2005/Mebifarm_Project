(() => {
  const module = window.MobiModules.productSearch
  const Data = module.Data
  const Service = module.Service

  module.Render = {
    applyUiLabels() {
      const filterChip = Data.el.toolRow?.querySelector(".tool-chip:not(.outline)")
      const bestChip = Data.el.toolRow?.querySelector(".tool-chip.outline[data-sort='best']")
      const newChip = Data.el.toolRow?.querySelector(".tool-chip.outline[data-sort='new']")
      const priceChip = Data.el.toolRow?.querySelector(".tool-chip.outline[data-sort='price']")
      if (filterChip) filterChip.innerHTML = '<i class="fa-solid fa-sliders"></i>Bộ lọc'
      if (bestChip) bestChip.textContent = "Bán chạy"
      if (newChip) newChip.textContent = "Mới nhất"
      if (priceChip) priceChip.innerHTML = '<i class="fa-solid fa-arrow-up"></i>Giá'
    },
    renderResults() {
      if (!Data.el.resultSummary || !Data.el.resultGrid || !Data.el.loadMoreBtn) return

      const normalizedKeyword = Service.normalizeText(Data.state.searchKeyword)
      const base = Data.state.allProducts.filter((item) => Service.normalizeText(item.name).includes(normalizedKeyword))
      const source = base.length ? base : Data.state.allProducts
      const expanded = Service.buildDataset(source)
      Data.state.searchResults = Service.sortResults(expanded)

      Data.el.resultSummary.innerHTML = 'Có <b>' + Data.state.searchResults.length + ' kết quả</b> cho "<b>' + Data.state.searchKeyword + '</b>"'
      Data.el.resultGrid.innerHTML = ""

      Data.state.searchResults.slice(0, Data.state.showCount).forEach((item) => {
        const card = document.createElement("article")
        card.className = "search-card"
        card.setAttribute("data-product-id", item.id)
        card.setAttribute("data-name", item.name)
        card.innerHTML = [
          '<img src="' + item.image + '" alt="' + item.name + '" data-open-detail="true">',
          '<div class="search-card-body">',
          '<h3 data-open-detail="true">' + item.name + '</h3>',
          '<p class="sold">' + item.sold + '</p>',
          '<div class="price-row">',
          '<strong>' + Service.formatPrice(item.price) + '</strong>',
          '<button class="share-btn" type="button" aria-label="Chia sẻ sản phẩm"><i class="fa-regular fa-bookmark"></i></button>',
          '</div>',
          '<p class="commission">Tỷ lệ hoa hồng: 10%</p>',
          '</div>'
        ].join("")
        Data.el.resultGrid.appendChild(card)
      })

      Data.el.loadMoreBtn.style.display = Data.state.showCount < Data.state.searchResults.length ? "block" : "none"
    }
  }
})()

