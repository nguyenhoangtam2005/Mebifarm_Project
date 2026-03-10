(() => {
  const root = (window.MobiModules = window.MobiModules || {})
  root.accountProfileInfo = root.accountProfileInfo || {}

  root.accountProfileInfo.Data = {
    authKey: "mebi_ctv_auth",
    userKey: "mebi_ctv_user",
    profileKey: "mebi_ctv_profile",
    fallbackProfile: {
      name: "Tên cộng tác viên",
      gender: "",
      birthday: "",
      phone: "0965123789",
      email: "khachhang@gmail.com",
      affiliateId: "MVA-CTV-261",
      referralCode: "MVA-CTV-261",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=520&q=80"
    },
    el: {
      toast: document.getElementById("toast"),
      profileForm: document.getElementById("profileForm"),
      displayNameInput: document.getElementById("displayNameInput"),
      genderSelect: document.getElementById("genderSelect"),
      birthdayInput: document.getElementById("birthdayInput"),
      phoneInput: document.getElementById("phoneInput"),
      emailInput: document.getElementById("emailInput"),
      emailChangeBtn: document.getElementById("emailChangeBtn"),
      emailSheet: document.getElementById("emailSheet"),
      emailSheetTitle: document.getElementById("emailSheetTitle"),
      emailSheetBackBtn: document.getElementById("emailSheetBackBtn"),
      emailSheetCloseBtn: document.getElementById("emailSheetCloseBtn"),
      emailStepInput: document.getElementById("emailStepInput"),
      emailStepOtp: document.getElementById("emailStepOtp"),
      newEmailInput: document.getElementById("newEmailInput"),
      marketingOptIn: document.getElementById("marketingOptIn"),
      sendOtpBtn: document.getElementById("sendOtpBtn"),
      pendingEmailLabel: document.getElementById("pendingEmailLabel"),
      otpInputs: document.querySelectorAll("#otpInputs input"),
      otpCountdown: document.getElementById("otpCountdown"),
      resendOtpBtn: document.getElementById("resendOtpBtn"),
      confirmOtpBtn: document.getElementById("confirmOtpBtn"),
      affiliateInput: document.getElementById("affiliateInput"),
      affiliateCopyBtn: document.getElementById("affiliateCopyBtn"),
      referralInput: document.getElementById("referralInput"),
      referralCopyBtn: document.getElementById("referralCopyBtn"),
      saveBtn: document.getElementById("saveBtn"),
      backBtn: document.getElementById("backBtn"),
      avatarImg: document.getElementById("avatarImg"),
      avatarInput: document.getElementById("avatarInput"),
      changeAvatarBtn: document.getElementById("changeAvatarBtn")
    },
    state: {
      profile: null,
      isEmailEditable: false,
      isSaving: false,
      pendingEmail: "",
      otpCode: "",
      otpTimer: null,
      otpRemaining: 60
    }
  }
})()
