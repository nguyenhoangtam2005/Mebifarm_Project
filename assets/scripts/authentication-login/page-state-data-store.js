(() => {
  const root = window.MobiModules = window.MobiModules || {}
  root.loginPortal = root.loginPortal || {}

  root.loginPortal.Data = {
    authKey: "mebi_ctv_auth",
    userKey: "mebi_ctv_user",
    credentials: { username: "Driven", password: "Driven@gmail.com" },
    el: {
      toast: document.getElementById("toast"),
      form: document.getElementById("loginForm"),
      usernameInput: document.getElementById("usernameInput"),
      passwordInput: document.getElementById("passwordInput"),
      usernameField: document.getElementById("usernameField"),
      passwordField: document.getElementById("passwordField"),
      usernameError: document.getElementById("usernameError"),
      passwordError: document.getElementById("passwordError"),
      submitBtn: document.getElementById("submitLoginBtn"),
      togglePasswordBtn: document.getElementById("togglePasswordBtn"),
      forgotPasswordLink: document.getElementById("forgotPasswordLink"),
      registerLink: null,
      closeLoginBtn: null
    }
  }
})()
