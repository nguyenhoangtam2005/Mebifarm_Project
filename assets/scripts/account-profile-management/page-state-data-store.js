(() => {
  const root = window.MobiModules = window.MobiModules || {}
  root.accountProfile = root.accountProfile || {}

  root.accountProfile.Data = {
    authKey: "mebi_ctv_auth",
    userKey: "mebi_ctv_user",
    fallbackUser: "Driven",
    actionToastMap: {
      profile: "Mở thông tin cá nhân",
      platform: "Mở nền tảng quảng bá",
      faq: "Mở câu hỏi thường gặp",
      terms: "Mở điều khoản và dịch vụ"
    },
    el: {
      toast: document.getElementById("toast"),
      mobileNav: document.getElementById("mobileNav"),
      accountName: document.getElementById("accountName"),
      logoutBtn: document.getElementById("logoutBtn"),
      accountPage: document.querySelector(".account-page")
    },
    state: {
      currentUser: ""
    }
  }
})()

