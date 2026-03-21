(() => {
  const root = window.MobiModules = window.MobiModules || {}
  root.ordersCenter = root.ordersCenter || {}

  root.ordersCenter.Data = {
    authKey: "mebi_ctv_auth",
    orders: [
      { id: "#D4CA9C6", status: "pending", statusLabel: "Chờ xác nhận", products: ["https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=80&q=80"], itemCount: 1, slot: "8:00 - 10:00", time: "16:07 05/03/2026", total: 60000 },
      { id: "#499D364A", status: "cancelled", statusLabel: "Đã hủy", products: ["https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?auto=format&fit=crop&w=80&q=80"], itemCount: 1, slot: "8:00 - 10:00", time: "08:45 05/03/2026", total: 220000, canRetry: false },
      { id: "#MOCK-PEN", status: "pending", statusLabel: "Chờ xác nhận", products: ["https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=80&q=80", "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?auto=format&fit=crop&w=80&q=80"], itemCount: 2, slot: "14:00 - 16:00", voucher: "Voucher: GIAM5K", time: "08:05 05/03/2026", total: 108000 },
      { id: "#MOCK-PRO", status: "preparing", statusLabel: "Đang soạn", products: ["https://images.unsplash.com/photo-1569288052389-dac9b01ff6ea?auto=format&fit=crop&w=80&q=80"], itemCount: 1, slot: "10:00 - 12:00", time: "07:50 05/03/2026", total: 75000 }
    ],
    el: {
      toast: document.getElementById("toast"),
      mobileNav: document.getElementById("mobileNav"),
      ordersBackBtn: document.getElementById("ordersBackBtn"),
      ordersTabs: document.getElementById("ordersTabs"),
      ordersList: document.getElementById("ordersList")
    },
    state: { activeStatus: "all" }
  }
})()

