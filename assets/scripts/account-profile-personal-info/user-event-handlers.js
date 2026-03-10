(() => {
  const module = window.MobiModules.accountProfileInfo
  const Data = module.Data
  const API = module.API
  const Service = module.Service
  const Render = module.Render

  module.Event = {
    bindCopyButtons(showToast) {
      Data.el.affiliateCopyBtn?.addEventListener("click", async () => {
        const ok = await API.copyToClipboard(Data.state.profile.affiliateId, Data.el.affiliateInput)
        showToast(ok ? "Đã sao chép Affiliate ID" : "Không thể sao chép")
      })
      Data.el.referralCopyBtn?.addEventListener("click", async () => {
        const ok = await API.copyToClipboard(Data.state.profile.referralCode, Data.el.referralInput)
        showToast(ok ? "Đã sao chép Mã giới thiệu" : "Không thể sao chép")
      })
    },
    bindEmailToggle(showToast) {
      Data.el.emailChangeBtn?.addEventListener("click", () => {
        if (!Data.el.emailSheet) return
        Data.el.newEmailInput.value = ""
        Render.showEmailStep("input")
        Render.openEmailSheet()
      })
    },
    bindEmailSheetNavigation(showToast) {
      Data.el.emailSheetBackBtn?.addEventListener("click", () => {
        if (Data.el.emailStepOtp && !Data.el.emailStepOtp.classList.contains("is-hidden")) {
          Render.showEmailStep("input")
          return
        }
        Render.closeEmailSheet()
      })
      Data.el.emailSheetCloseBtn?.addEventListener("click", () => Render.closeEmailSheet())
      Data.el.emailSheet?.addEventListener("click", (event) => {
        if (event.target === Data.el.emailSheet) Render.closeEmailSheet()
      })
      Data.el.sendOtpBtn?.addEventListener("click", () => {
        const email = (Data.el.newEmailInput?.value || "").trim()
        const validation = Service.validateProfile({ ...Data.state.profile, email, name: "tmp" })
        if (!validation.valid) { showToast(validation.message); return }
        const code = Service.generateOtp()
        Data.state.pendingEmail = email
        Data.state.otpCode = code
        Data.state.otpRemaining = 60
        Render.renderPendingEmail(email)
        Render.clearOtpInputs()
        Render.showEmailStep("otp")
        Render.updateCountdown(Data.state.otpRemaining)
        API.sendOtpMock(email, code)
        window.clearInterval(Data.state.otpTimer)
        Data.state.otpTimer = window.setInterval(() => {
          Data.state.otpRemaining = Math.max(0, Data.state.otpRemaining - 1)
          Render.updateCountdown(Data.state.otpRemaining)
          if (Data.state.otpRemaining === 0) window.clearInterval(Data.state.otpTimer)
        }, 1000)
        showToast("Đã gửi mã xác thực")
      })
      Data.el.resendOtpBtn?.addEventListener("click", () => {
        if (!Data.state.pendingEmail) return
        const code = Service.generateOtp()
        Data.state.otpCode = code
        Data.state.otpRemaining = 60
        Render.clearOtpInputs()
        Render.updateCountdown(Data.state.otpRemaining)
        API.sendOtpMock(Data.state.pendingEmail, code)
        window.clearInterval(Data.state.otpTimer)
        Data.state.otpTimer = window.setInterval(() => {
          Data.state.otpRemaining = Math.max(0, Data.state.otpRemaining - 1)
          Render.updateCountdown(Data.state.otpRemaining)
          if (Data.state.otpRemaining === 0) window.clearInterval(Data.state.otpTimer)
        }, 1000)
        showToast("Đã gửi lại mã")
      })
      if (Data.el.otpInputs) {
        Data.el.otpInputs.forEach((input, idx) => {
          input.addEventListener("input", (e) => {
            const val = e.target.value.replace(/\D/g, "").slice(0, 1)
            e.target.value = val
            if (val && idx < Data.el.otpInputs.length - 1) {
              Data.el.otpInputs[idx + 1].focus()
            }
          })
          input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !e.target.value && idx > 0) {
              Data.el.otpInputs[idx - 1].focus()
            }
          })
        })
      }
      Data.el.confirmOtpBtn?.addEventListener("click", () => {
        const entered = Array.from(Data.el.otpInputs || []).map((i) => i.value).join("")
        if (entered.length !== 6) { showToast("Vui lòng nhập đủ 6 số"); return }
        if (entered !== Data.state.otpCode) { showToast("Mã xác thực không đúng"); return }
        Data.state.profile = { ...Data.state.profile, email: Data.state.pendingEmail }
        API.persistProfile(Data.state.profile)
        Render.renderProfile()
        Render.closeEmailSheet()
        Render.setEmailEditable(false)
        showToast("Đã cập nhật email")
      })
    },
    bindAvatarUpload(showToast) {
      if (!Data.el.changeAvatarBtn || !Data.el.avatarInput) return
      Data.el.changeAvatarBtn.addEventListener("click", () => Data.el.avatarInput.click())
      Data.el.avatarInput.addEventListener("change", async (event) => {
        const file = event.target.files?.[0]
        if (!file) return
        const url = await API.readImageFile(file).catch(() => null)
        if (!url) {
          showToast("Không đọc được ảnh")
          return
        }
        Service.applyAvatarToProfile(url)
        Render.renderProfile()
        showToast("Đã cập nhật ảnh đại diện")
      })
    },
    bindFormSubmit(showToast) {
      Data.el.profileForm?.addEventListener("submit", (event) => {
        event.preventDefault()
        if (Data.state.isSaving) return
        const profile = Service.buildProfileFromForm()
        const validation = Service.validateProfile(profile)
        if (!validation.valid) {
          showToast(validation.message)
          return
        }
        Render.setSavingState(true)
        Data.state.profile = profile
        API.persistProfile(profile)
        Render.renderProfile()
        Render.setEmailEditable(false)
        window.setTimeout(() => Render.setSavingState(false), 220)
        showToast("Đã lưu thay đổi")
      })
    },
    bindBackNavigation() {
      Data.el.backBtn?.addEventListener("click", () => API.goBack())
    }
  }

  module.Event.bindAll = function (showToast) {
    module.Event.bindCopyButtons(showToast)
    module.Event.bindEmailToggle(showToast)
    module.Event.bindEmailSheetNavigation(showToast)
    module.Event.bindAvatarUpload(showToast)
    module.Event.bindFormSubmit(showToast)
    module.Event.bindBackNavigation()
  }
})()
