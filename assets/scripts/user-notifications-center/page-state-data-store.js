(() => {
  const root = window.MobiModules = window.MobiModules || {}
  root.notificationsCenter = root.notificationsCenter || {}

  root.notificationsCenter.Data = {
    authKey: "mebi_ctv_auth",
    el: {
      toast: document.getElementById("toast"),
      mobileNav: document.getElementById("mobileNav"),
      notifyBackBtn: document.getElementById("notifyBackBtn"),
      notifyContent: document.querySelector(".notify-content")
    }
  }
})()

