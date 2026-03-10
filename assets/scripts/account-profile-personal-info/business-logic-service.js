(() => {
  const module = window.MobiModules.accountProfileInfo
  const Data = module.Data

  module.Service = {
    maskPhone(phone) {
      if (!phone) return ""
      const cleaned = phone.replace(/\s+/g, "")
      const lastPart = cleaned.slice(-3)
      return "*******" + lastPart.padStart(3, "*")
    },
    buildProfileFromForm() {
      return {
        ...Data.state.profile,
        name: (Data.el.displayNameInput?.value || "").trim() || Data.fallbackProfile.name,
        gender: Data.el.genderSelect?.value || "",
        birthday: Data.el.birthdayInput?.value || "",
        email: (Data.el.emailInput?.value || "").trim()
      }
    },
    validateProfile(profile) {
      if (!profile.name) return { valid: false, message: "Vui lòng nhập họ tên" }
      if (!profile.email) return { valid: false, message: "Vui lòng nhập email" }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(profile.email)) return { valid: false, message: "Email không hợp lệ" }
      return { valid: true }
    },
    applyAvatarToProfile(fileUrl) {
      Data.state.profile = { ...Data.state.profile, avatar: fileUrl }
      return Data.state.profile
    },
    generateOtp() {
      return Math.floor(100000 + Math.random() * 900000).toString()
    }
  }
})()
