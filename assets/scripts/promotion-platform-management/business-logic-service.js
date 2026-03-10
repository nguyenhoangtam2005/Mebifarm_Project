(() => {
  const module = window.MobiModules.promoPlatform
  const Data = module.Data

  module.Service = {
    getLinked() { return Data.platforms.filter((p) => p.linked) },
    getAvailable() { return Data.platforms.filter((p) => !p.linked) },
    linkPlatform(id, url) {
      const target = Data.platforms.find((p) => p.id === id)
      if (!target) return false
      target.linked = true
      target.url = url || target.url || "https://"
      target.desc = "Tài khoản đang được kết nối và sẵn sàng quảng bá"
      return true
    },
    unlinkPlatform(id) {
      const target = Data.platforms.find((p) => p.id === id)
      if (!target) return false
      target.linked = false
      target.url = ""
      target.desc = ""
      return true
    }
  }
})()
