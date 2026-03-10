(() => {
  const module = window.MobiModules.faqHelp
  const Data = module.Data
  const API = module.API
  const Render = module.Render
  const Event = module.Event
  const Service = module.Service

  function bootstrap() {
    if (!API.isAuthenticated()) { API.redirectToLogin(); return }
    const showToast = window.MobiCommon.showToastFactory(Data.el.toast)
    Render.renderFaqs(Service.filterFaqs())
    // mở mặc định câu hỏi đầu tiên
    const first = Data.el.faqList?.querySelector('.faq-item')
    if (first) first.classList.add('is-open')
    Event.bindAll(showToast)
  }

  bootstrap()
})()
