(() => {
  const module = window.MobiModules.promoPlatform
  const Data = module.Data

  module.Render = {
    renderSummary() {
      const count = module.Service.getLinked().length
      if (Data.el.summaryDesc) {
        Data.el.summaryDesc.textContent = `Bạn đã liên kết thành công ${count} nền tảng`
      }
    },
    renderLinked() {
      const list = module.Service.getLinked()
      if (!Data.el.linkedList) return
      Data.el.linkedList.innerHTML = ""
      list.forEach((item) => {
        const bg = item.color.startsWith("linear") ? item.color : `linear-gradient(135deg, ${item.color}, ${item.color})`
        const node = document.createElement("article")
        node.className = "card"
        node.dataset.id = item.id
        node.innerHTML = `
          <div class="card-head">
            <div class="platform-logo" style="background:${bg}"><i class="${item.icon}"></i></div>
            <div>
              <p class="platform-title">Đã liên kết ${item.name}</p>
              <p class="platform-sub">${item.desc || "Tài khoản đã kết nối"}</p>
            </div>
            <div class="inline-actions">
              <button class="link-btn" type="button" data-action="link" aria-label="Cập nhật liên kết ${item.name}"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
          <div class="platform-meta url-row">
            <input class="url-field" type="text" value="${item.url}" readonly aria-label="Liên kết ${item.name}" />
            <button class="remove-btn trash" type="button" data-action="unlink" aria-label="Hủy liên kết ${item.name}"><i class="fa-regular fa-trash-can"></i></button>
          </div>
        `
        Data.el.linkedList.appendChild(node)
        const gap = document.createElement("div")
        gap.className = "platform-list-gap"
        Data.el.linkedList.appendChild(gap)
      })
    },
    renderAvailable() {
      const list = module.Service.getAvailable()
      if (!Data.el.availableList) return
      Data.el.availableList.innerHTML = list.map((item) => {
        const style = item.color.startsWith("linear") ? item.color : item.color
        return `
          <div class="platform-chip" data-id="${item.id}">
            <div class="platform-logo" style="background:${style}"><i class="${item.icon}"></i></div>
            <div>
              <p class="platform-title">${item.name}</p>
              <p class="platform-sub">Thêm liên kết</p>
            </div>
            <button class="link-btn" type="button" data-action="link"><i class="fa-solid fa-plus"></i><span>Thêm liên kết</span></button>
          </div>
        `
      }).join("")
    },
    renderAddCard() {
      if (!Data.el.linkedList) return
      const addCard = document.createElement("article")
      addCard.className = "card add-card"
      addCard.innerHTML = `
        <div class="card-head">
          <div class="platform-logo add-logo"><i class="fa-solid fa-plus"></i></div>
          <div>
            <p class="platform-title">Thêm nền tảng</p>
            <p class="platform-sub">Bổ sung kênh quảng bá mới</p>
          </div>
          <button class="link-btn" type="button" data-action="add-new"><i class="fa-solid fa-plus"></i><span>Thêm</span></button>
        </div>
      `
      Data.el.linkedList.prepend(addCard)
      const gap = document.createElement("div")
      gap.className = "platform-list-gap"
      Data.el.linkedList.insertBefore(gap, addCard.nextSibling)
    }
  }
})()
