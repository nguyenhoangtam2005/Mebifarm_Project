(() => {
  const module = window.MobiModules.faqHelp
  const Data = module.Data

  module.Service = {
    filterFaqs() {
      const query = Data.state.query.toLowerCase()
      const filter = Data.state.filter
      return Data.faqs.filter((item) => {
        const matchFilter = filter === "all" || item.category === filter
        const matchQuery = !query || item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query)
        return matchFilter && matchQuery
      })
    },
    getPolicy(key) {
      return Data.policies[key] || null
    }
  }
})()
