(() => {
  const module = window.MobiModules.loginPortal
  const Data = module.Data

  module.Render = {
    setSubmitLoading(isLoading) {
      if (!Data.el.submitBtn) return
      Data.el.submitBtn.disabled = isLoading
      Data.el.submitBtn.textContent = isLoading ? "Đang đăng nhập..." : "Đăng nhập"
    },
    setPasswordVisibility(isVisible) {
      if (!Data.el.passwordInput || !Data.el.togglePasswordBtn) return
      Data.el.passwordInput.type = isVisible ? "text" : "password"
      Data.el.togglePasswordBtn.innerHTML = isVisible
        ? '<i class="fa-solid fa-eye"></i>'
        : '<i class="fa-solid fa-eye-slash"></i>'
    }
  }
})()

