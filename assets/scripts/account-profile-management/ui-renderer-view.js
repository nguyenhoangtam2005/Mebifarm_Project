(() => {
  const module = window.MobiModules.accountProfile
  const Data = module.Data

  module.Render = {
    setAccountName() {
      if (Data.el.accountName) {
        Data.el.accountName.textContent = Data.state.currentUser
      }
    }
  }
})()
