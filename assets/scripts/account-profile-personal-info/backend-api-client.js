(() => {
  const module = window.MobiModules.accountProfileInfo
  const Data = module.Data

  module.API = {
    isAuthenticated() {
      return sessionStorage.getItem(Data.authKey) === "1"
    },
    redirectToLogin() {
      window.location.href = "./authentication-sign-in-portal.html"
    },
    loadProfile() {
      try {
        const stored = localStorage.getItem(Data.profileKey)
        if (!stored) return { ...Data.fallbackProfile }
        const parsed = JSON.parse(stored)
        return { ...Data.fallbackProfile, ...parsed }
      } catch (error) {
        return { ...Data.fallbackProfile }
      }
    },
    persistProfile(profile) {
      localStorage.setItem(Data.profileKey, JSON.stringify(profile))
    },
    async copyToClipboard(text, fallbackInput) {
      try {
        await navigator.clipboard.writeText(text)
        return true
      } catch (error) {
        if (!fallbackInput) return false
        const wasReadOnly = fallbackInput.readOnly
        fallbackInput.readOnly = false
        fallbackInput.focus()
        fallbackInput.select()
        const ok = document.execCommand("copy")
        fallbackInput.setSelectionRange(0, 0)
        fallbackInput.blur()
        fallbackInput.readOnly = wasReadOnly
        return ok
      }
    },
    goBack() {
      if (window.history.length > 1) {
        window.history.back()
        return
      }
      window.location.href = "./account-profile-management-center.html"
    },
    readImageFile(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(file)
      })
    },
    sendOtpMock(email, code) {
      console.info("OTP sent to", email, "code:", code)
      return Promise.resolve(true)
    }
  }
})()
