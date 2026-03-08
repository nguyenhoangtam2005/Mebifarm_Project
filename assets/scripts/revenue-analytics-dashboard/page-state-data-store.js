(() => {
  const root = window.MobiModules = window.MobiModules || {}
  root.revenueDashboard = root.revenueDashboard || {}

  root.revenueDashboard.Data = {
    authKey: "mebi_ctv_auth",
    rangeLabels: {
      today: "Hôm nay",
      "7d": "7 ngày",
      "30d": "30 ngày",
      custom: "Tùy chọn"
    },
    el: {
      toast: document.getElementById("toast"),
      mobileNav: document.getElementById("mobileNav"),
      revenueBackBtn: document.getElementById("revenueBackBtn"),
      rangeRow: document.getElementById("rangeRow")
    }
  }
})()

