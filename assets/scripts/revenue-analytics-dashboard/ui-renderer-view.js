(() => {
  const module = window.MobiModules.revenueDashboard
  const Service = module.Service

  module.Render = {
    toastRange(showToast, range) { showToast("Đang xem dữ liệu: " + Service.getRangeLabel(range)) }
  }
})()

