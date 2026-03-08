(() => {
  const module = window.MobiModules.notificationsCenter

  module.Service = {
    markRead(card) { card.classList.remove("highlight") }
  }
})()

