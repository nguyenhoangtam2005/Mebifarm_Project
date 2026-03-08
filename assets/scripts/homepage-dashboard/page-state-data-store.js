(() => {
  const root = window.MobiModules = window.MobiModules || {}
  root.homeDashboard = root.homeDashboard || {}

  root.homeDashboard.Data = {
    authKey: "mebi_ctv_auth",
    el: {
      toast: document.getElementById("toast"),
      mobileNav: document.getElementById("mobileNav"),
      galleryTags: document.getElementById("galleryTags"),
      quickFilters: document.getElementById("quickFilters"),
      dailyList: document.getElementById("dailyList"),
      galleryGrid: document.getElementById("galleryGrid"),
      searchForm: document.getElementById("searchForm"),
      searchInput: document.getElementById("searchInput"),
      shareModal: document.getElementById("shareModal"),
      shareProductName: document.getElementById("shareProductName"),
      shareLinkInput: document.getElementById("shareLinkInput"),
      copyShareLinkBtn: document.getElementById("copyShareLinkBtn"),
      notifyBtn: document.getElementById("notifyBtn")
    },
    slides: Array.from(document.querySelectorAll(".slide")),
    dots: Array.from(document.querySelectorAll(".dot")),
    nextBtn: document.getElementById("nextSlide"),
    prevBtn: document.getElementById("prevSlide"),
    state: {
      currentSlide: 0,
      autoTimer: null,
      searchRedirecting: false,
      currentShare: { name: "Sản phẩm", url: "" }
    }
  }
})()

