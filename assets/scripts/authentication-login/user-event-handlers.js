(() => {
  const module = window.MobiModules.loginPortal
  const Data = module.Data
  const API = module.API
  const Service = module.Service
  const Render = module.Render

  module.Event = {
    bindFormSubmit(showToast) {
      Data.el.form?.addEventListener("submit", async (event) => {
        event.preventDefault()
        if (!Service.validateInputs()) return

        const username = (Data.el.usernameInput?.value || "").trim()
        const password = (Data.el.passwordInput?.value || "").trim()

        Render.setSubmitLoading(true)
        await API.wait(650)

        if (!Service.isCredentialValid(username, password)) {
          Service.setFieldError(Data.el.usernameField, Data.el.usernameError, "")
          Service.setFieldError(Data.el.passwordField, Data.el.passwordError, "Tên đăng nhập hoặc mật khẩu không đúng.")
          showToast("Sai thông tin đăng nhập")
          Render.setSubmitLoading(false)
          return
        }

        API.setAuthenticated()
        showToast("Đăng nhập thành công")
        window.setTimeout(API.redirectDashboard, 350)
      })
    },
    bindPasswordToggle() {
      Data.el.togglePasswordBtn?.addEventListener("click", () => {
        const isPassword = Data.el.passwordInput?.type === "password"
        Render.setPasswordVisibility(isPassword)
      })
    },
    bindQuickActions(showToast) {
      Data.el.forgotPasswordLink?.addEventListener("click", (event) => {
        event.preventDefault()
        showToast("Liên hệ quản trị để cấp lại mật khẩu")
      })

      Data.el.registerLink?.addEventListener("click", (event) => {
        event.preventDefault()
        showToast("Vui lòng liên hệ quản trị để đăng ký CTV")
      })

      Data.el.closeLoginBtn?.addEventListener("click", () => {
        if (window.history.length > 1) { window.history.back(); return }
        showToast("Vui lòng đăng nhập để tiếp tục")
      })
    }
  }
})()

