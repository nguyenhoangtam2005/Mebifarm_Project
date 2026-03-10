(() => {
  const module = window.MobiModules.termsPolicy
  const Data = module.Data

  module.Service = {
    allSections() {
      return Data.sections || []
    }
  }
})()

