(() => {
  const module = window.MobiModules.revenueDashboard
  const Data = module.Data

  module.Service = {
    getRangeLabel(range) { return Data.rangeLabels[range] || Data.rangeLabels.today },
    setActiveRange(button) {
      Data.el.rangeRow?.querySelectorAll(".range-btn").forEach((item) => item.classList.remove("active"))
      button.classList.add("active")
      return button.getAttribute("data-range") || "today"
    }
  }
})()

