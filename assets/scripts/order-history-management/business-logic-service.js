(() => {
  const module = window.MobiModules.ordersCenter
  const Data = module.Data

  module.Service = {
    formatCurrency(value) { return Number(value || 0).toLocaleString("vi-VN") + "d" },
    getStatusIcon(status) {
      if (status === "cancelled") return "fa-regular fa-circle-xmark"
      if (status === "preparing") return "fa-solid fa-cube"
      return "fa-regular fa-clock"
    },
    getVisibleOrders() {
      if (Data.state.activeStatus === "all") return Data.orders
      return Data.orders.filter((item) => item.status === Data.state.activeStatus)
    }
  }
})()

