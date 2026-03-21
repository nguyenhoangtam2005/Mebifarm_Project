(() => {
  const module = window.MobiModules.ordersCenter
  const Data = module.Data
  const Service = module.Service

  module.Render = {
    renderOrders() {
      if (!Data.el.ordersList) return
      const visible = Service.getVisibleOrders()
      if (!visible.length) { Data.el.ordersList.innerHTML = '<p class="empty-state">Chua co don trong muc nay</p>'; return }

      Data.el.ordersList.innerHTML = visible.map((order) => {
        const badges = order.products.map((src, index) => '<img src="' + src + '" alt="Sản phẩm ' + (index + 1) + '">').join("")
        return [
          '<article class="order-card">',
          '<div class="order-head">',
          '<p class="order-code">' + order.id + '</p>',
          '<span class="status-pill ' + order.status + '"><i class="' + Service.getStatusIcon(order.status) + '"></i>' + order.statusLabel + '</span>',
          '</div>',
          '<div class="order-body">',
          '<div class="order-products">',
          '<div class="product-badges">' + badges + '</div>',
          '<p>' + order.itemCount + ' sản phẩm</p>',
          '</div>',
          '<p class="order-delivery"><i class="fa-regular fa-clock"></i> Giáo lúc: ' + order.slot + '</p>',
          order.voucher ? '<p class="order-voucher"><i class="fa-regular fa-file-lines"></i>' + order.voucher + '</p>' : '',
          '<div class="order-foot">',
          '<p class="order-date">' + order.time + '</p>',
          '<div class="order-right">',
          order.status === "cancelled" ? '' : (order.canRetry ? '<button class="retry-btn" type="button" data-retry-id="' + order.id + '"><i class="fa-solid fa-rotate-right"></i>Đặt lại</button>' : ''),
          '<p class="order-price">' + Service.formatCurrency(order.total) + '</p>',
          '</div>', '</div>', '</div>', '</article>'
        ].join('')
      }).join('')

      window.MobiCommon.setupImageFallback()
    }
  }
})()

