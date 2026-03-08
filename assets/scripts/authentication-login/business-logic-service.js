(() => {
  const module = window.MobiModules.loginPortal
  const Data = module.Data

  module.Service = {
    setFieldError(fieldEl, errorEl, message) {
      if (!fieldEl || !errorEl) return
      errorEl.textContent = message || ""
      fieldEl.classList.toggle("has-error", Boolean(message))
    },
    clearErrorWhenTyping(inputEl, fieldEl, errorEl) {
      inputEl?.addEventListener("input", () => {
        if ((inputEl.value || "").trim() !== "") {
          module.Service.setFieldError(fieldEl, errorEl, "")
        }
      })
    },
    validateInputs() {
      const username = (Data.el.usernameInput?.value || "").trim()
      const password = (Data.el.passwordInput?.value || "").trim()
      let isValid = true

      if (!username) {
        module.Service.setFieldError(Data.el.usernameField, Data.el.usernameError, "Vui lòng nhập tên đăng nhập.")
        isValid = false
      } else {
        module.Service.setFieldError(Data.el.usernameField, Data.el.usernameError, "")
      }

      if (!password) {
        module.Service.setFieldError(Data.el.passwordField, Data.el.passwordError, "Vui lòng nhập mật khẩu.")
        isValid = false
      } else {
        module.Service.setFieldError(Data.el.passwordField, Data.el.passwordError, "")
      }

      return isValid
    },
    isCredentialValid(username, password) {
      return username === Data.credentials.username && password === Data.credentials.password
    }
  }
})()

