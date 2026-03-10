(() => {
  const module = window.MobiModules.accountProfileInfo
  const Data = module.Data
  const Service = module.Service

  module.Render = {
    renderProfile() {
      const profile = Data.state.profile || Data.fallbackProfile
      if (Data.el.displayNameInput) Data.el.displayNameInput.value = profile.name || ""
      if (Data.el.genderSelect) Data.el.genderSelect.value = profile.gender || ""
      if (Data.el.birthdayInput) Data.el.birthdayInput.value = profile.birthday || ""
      if (Data.el.phoneInput) Data.el.phoneInput.value = Service.maskPhone(profile.phone)
      if (Data.el.emailInput) Data.el.emailInput.value = profile.email || ""
      if (Data.el.affiliateInput) Data.el.affiliateInput.value = profile.affiliateId || ""
      if (Data.el.referralInput) Data.el.referralInput.value = profile.referralCode || ""
      if (Data.el.avatarImg) Data.el.avatarImg.src = profile.avatar || Data.fallbackProfile.avatar
    },
    setEmailEditable(isEditable) {
      Data.state.isEmailEditable = isEditable
      if (!Data.el.emailInput || !Data.el.emailChangeBtn) return
      const shell = Data.el.emailInput.closest(".input-shell")
      Data.el.emailInput.readOnly = !isEditable
      shell?.classList.toggle("is-editing", isEditable)
      Data.el.emailChangeBtn.textContent = isEditable ? "Hủy" : "Thay đổi"
      if (isEditable) {
        Data.el.emailInput.focus()
        const end = Data.el.emailInput.value.length
        Data.el.emailInput.setSelectionRange(end, end)
      }
    },
    setSavingState(isSaving) {
      Data.state.isSaving = isSaving
      if (Data.el.saveBtn) {
        Data.el.saveBtn.disabled = isSaving
        Data.el.saveBtn.textContent = isSaving ? "Đang lưu..." : "Lưu thay đổi"
      }
    },
    openEmailSheet() {
      if (!Data.el.emailSheet) return
      Data.el.emailSheet.classList.add("is-open")
      Data.el.emailSheet.setAttribute("aria-hidden", "false")
    },
    closeEmailSheet() {
      if (!Data.el.emailSheet) return
      Data.el.emailSheet.classList.remove("is-open")
      Data.el.emailSheet.setAttribute("aria-hidden", "true")
    },
    showEmailStep(step) {
      if (!Data.el.emailStepInput || !Data.el.emailStepOtp) return
      const isOtp = step === "otp"
      Data.el.emailStepInput.classList.toggle("is-hidden", isOtp)
      Data.el.emailStepOtp.classList.toggle("is-hidden", !isOtp)
      if (Data.el.emailSheetTitle) Data.el.emailSheetTitle.textContent = isOtp ? "Mã xác thực" : "Thay đổi Email"
    },
    renderPendingEmail(email) {
      if (Data.el.pendingEmailLabel) {
        Data.el.pendingEmailLabel.textContent = email || ""
      }
    },
    updateCountdown(seconds) {
      if (Data.el.otpCountdown) {
        const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
        const ss = String(seconds % 60).padStart(2, "0")
        Data.el.otpCountdown.textContent = `(${mm}:${ss})`
      }
      if (Data.el.resendOtpBtn) {
        Data.el.resendOtpBtn.disabled = seconds > 0
      }
    },
    clearOtpInputs() {
      if (!Data.el.otpInputs) return
      Data.el.otpInputs.forEach((input) => {
        input.value = ""
      })
      const first = Data.el.otpInputs[0]
      if (first) first.focus()
    }
  }
})()
