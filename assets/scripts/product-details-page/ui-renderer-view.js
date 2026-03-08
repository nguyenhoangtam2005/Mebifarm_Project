(() => {
  const module = window.MobiModules.productDetails
  const Data = module.Data

  module.Render = {
    renderTextList(el, items) {
      if (!el) return
      el.innerHTML = ""
      items.forEach((text) => {
        const li = document.createElement("li")
        li.textContent = text
        el.appendChild(li)
      })
    },
    renderThumbs(product) {
      if (!Data.el.thumbsWrap || !Data.el.heroImg) return
      Data.el.thumbsWrap.innerHTML = ""

      product.gallery.forEach((src, index) => {
        const btn = document.createElement("button")
        btn.type = "button"
        btn.className = "thumb" + (index === 0 ? " active" : "")

        const img = document.createElement("img")
        img.src = src
        img.alt = product.name + " thumb " + (index + 1)

        btn.appendChild(img)
        btn.addEventListener("click", () => {
          Data.el.thumbsWrap.querySelectorAll(".thumb").forEach((x) => x.classList.remove("active"))
          btn.classList.add("active")
          Data.el.heroImg.src = src
        })

        Data.el.thumbsWrap.appendChild(btn)
      })
    },
    renderGallery(product) {
      if (!Data.el.galleryWrap || !Data.el.galleryCount) return
      Data.el.galleryWrap.innerHTML = ""

      product.gallery.forEach((src, index) => {
        const card = document.createElement("article")
        card.className = "g-card"
        card.innerHTML = [
          '<img src="' + src + '" alt="' + product.name + ' ' + (index + 1) + '">',
          '<div class="g-body">',
          '<h3>' + product.name + '</h3>',
          '<p>' + product.sold + '</p>',
          '<strong>' + product.price + '</strong>',
          '</div>'
        ].join("")
        Data.el.galleryWrap.appendChild(card)
      })

      Data.el.galleryCount.textContent = product.gallery.length + " sản phẩm"
    },
    renderProduct(product) {
      if (!product) return
      if (Data.el.heroImg) { Data.el.heroImg.src = product.image; Data.el.heroImg.alt = product.name }
      if (Data.el.discountTag) Data.el.discountTag.textContent = product.discount
      if (Data.el.nameEl) Data.el.nameEl.textContent = product.name
      if (Data.el.soldEl) Data.el.soldEl.textContent = product.sold
      if (Data.el.ratingEl) Data.el.ratingEl.textContent = product.rating
      if (Data.el.priceEl) Data.el.priceEl.textContent = product.price
      if (Data.el.oldPriceEl) Data.el.oldPriceEl.textContent = product.oldPrice
      if (Data.el.descEl) Data.el.descEl.textContent = product.description

      module.Render.renderTextList(Data.el.detailList, product.detailBullets || [])
      module.Render.renderTextList(Data.el.nutritionList, product.nutritionBullets || [])
      module.Render.renderThumbs(product)
      module.Render.renderGallery(product)
    }
  }
})()

