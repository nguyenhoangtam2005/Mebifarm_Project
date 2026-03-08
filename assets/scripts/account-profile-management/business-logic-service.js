(() => {
  const module = window.MobiModules.accountProfile
  const Data = module.Data

  module.Service = {
    resolveActionToast(action) {
      return Data.actionToastMap[action] || "Đang mở"
    }
  }
})()

