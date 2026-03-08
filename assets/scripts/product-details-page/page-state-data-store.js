(() => {
  const root = window.MobiModules = window.MobiModules || {}
  root.productDetails = root.productDetails || {}

  root.productDetails.Data = {
    authKey: "mebi_ctv_auth",
    el: {
      toast: document.getElementById("toast"),
      mobileNav: document.getElementById("mobileNav"),
      shareModal: document.getElementById("shareModal"),
      shareProductName: document.getElementById("shareProductName"),
      shareLinkInput: document.getElementById("shareLinkInput"),
      copyShareLinkBtn: document.getElementById("copyShareLinkBtn"),
      heroImg: document.getElementById("productHeroImage"),
      discountTag: document.getElementById("discountTag"),
      nameEl: document.getElementById("productName"),
      soldEl: document.getElementById("productSold"),
      ratingEl: document.getElementById("productRating"),
      priceEl: document.getElementById("productPrice"),
      oldPriceEl: document.getElementById("productOldPrice"),
      descEl: document.getElementById("productDescription"),
      detailList: document.getElementById("productDetailList"),
      nutritionList: document.getElementById("productNutritionList"),
      galleryCount: document.getElementById("galleryCount"),
      thumbsWrap: document.getElementById("thumbRow"),
      galleryWrap: document.getElementById("detailGallery"),
      buyNowBtn: document.getElementById("buyNowBtn"),
      backBtn: document.getElementById("backBtn"),
      notifyBtnDetail: document.getElementById("notifyBtnDetail")
    },
    state: {
      product: null,
      currentShare: { name: "Sản phẩm", url: "" }
    }
  }
})()

