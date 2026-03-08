(() => {
  const root = window.MobiModules = window.MobiModules || {}
  root.productSearch = root.productSearch || {}

  root.productSearch.Data = {
    authKey: "mebi_ctv_auth",
    params: new URLSearchParams(window.location.search),
    el: {
      toast: document.getElementById("toast"),
      searchBackBtn: document.getElementById("searchBackBtn"),
      searchForm: document.getElementById("searchPageForm"),
      searchInput: document.getElementById("searchPageInput"),
      resultSummary: document.getElementById("resultSummary"),
      resultGrid: document.getElementById("resultGrid"),
      toolRow: document.getElementById("toolRow"),
      loadMoreBtn: document.getElementById("loadMoreBtn"),
      shareModal: document.getElementById("shareModal"),
      shareProductName: document.getElementById("shareProductName"),
      shareLinkInput: document.getElementById("shareLinkInput"),
      copyShareLinkBtn: document.getElementById("copyShareLinkBtn")
    },
    state: {
      allProducts: Object.values(window.MOBI_PRODUCTS || {}),
      searchKeyword: "",
      sortMode: "best",
      showCount: 8,
      searchResults: [],
      currentShare: { name: "Sản phẩm", url: "" }
    }
  }
})()

