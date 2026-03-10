(() => {
  const root = window.MobiModules = window.MobiModules || {}
  root.promoPlatform = root.promoPlatform || {}

  root.promoPlatform.Data = {
    authKey: "mebi_ctv_auth",
    platforms: [
      { id: "youtube", name: "Youtube", url: "https://www.youtube.com/@nguyenvana", linked: true, icon: "fa-brands fa-youtube", color: "#ff4b3c", desc: "Tài khoản đang được kết nối và sẵn sàng quảng bá" },
      { id: "tiktok", name: "Tiktok", url: "https://www.tiktok.com/@nguyenvana", linked: true, icon: "fa-brands fa-tiktok", color: "#000", desc: "Tài khoản đang được kết nối và sẵn sàng quảng bá" },
      { id: "instagram", name: "Instagram", url: "https://www.instagram.com/nguyenvana", linked: true, icon: "fa-brands fa-instagram", color: "linear-gradient(135deg,#f36a22,#d92a7f)", desc: "Tài khoản đang được kết nối và sẵn sàng quảng bá" },
      { id: "facebook", name: "Facebook", url: "", linked: false, icon: "fa-brands fa-facebook-f", color: "#1877f2" },
      { id: "x", name: "X", url: "", linked: false, icon: "fa-brands fa-x-twitter", color: "#000" },
      { id: "other", name: "Nền tảng khác", url: "", linked: false, icon: "fa-solid fa-plus", color: "#7a6f68" }
    ],
    el: {
      toast: document.getElementById("toast"),
      backBtn: document.getElementById("backBtn"),
      summaryDesc: document.getElementById("summaryDesc"),
      linkedList: document.getElementById("linkedList"),
      availableList: document.getElementById("availableList"),
      linkModal: document.getElementById("linkModal"),
      modalTitle: document.getElementById("modalTitle"),
      modalDesc: document.getElementById("modalDesc"),
      modalInput: document.getElementById("modalInput"),
      modalClose: document.getElementById("modalClose"),
      modalCancel: document.getElementById("modalCancel"),
      modalConfirm: document.getElementById("modalConfirm")
    },
    state: {
      currentPlatform: null
    }
  }
})()
