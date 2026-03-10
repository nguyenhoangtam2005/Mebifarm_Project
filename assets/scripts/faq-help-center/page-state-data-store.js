(() => {
  const root = window.MobiModules = window.MobiModules || {}
  root.faqHelp = root.faqHelp || {}

  root.faqHelp.Data = {
    authKey: "mebi_ctv_auth",
    faqs: [
      { id: "faq1", question: "Đặt hàng trên ứng dụng Pinky Market?", answer: "Vào Trang chủ, chọn sản phẩm, bấm Mua ngay hoặc Thêm vào giỏ, kiểm tra thông tin và xác nhận đơn.", category: "order" },
      { id: "faq2", question: "Thời gian giao hàng bao lâu?", answer: "Đơn nội thành giao trong 1-2 ngày làm việc; ngoại tỉnh 3-5 ngày tùy khu vực.", category: "delivery" },
      { id: "faq3", question: "Phương thức thanh toán hỗ trợ?", answer: "Thanh toán qua ví, thẻ ATM nội địa, thẻ quốc tế và COD (thu hộ khi giao).", category: "payment" },
      { id: "faq4", question: "Làm sao hủy đơn đã đặt?", answer: "Vào Đơn hàng > chọn đơn > bấm Hủy nếu đơn chưa chuyển giao; nếu đã giao, liên hệ hỗ trợ.", category: "order" },
      { id: "faq5", question: "Theo dõi trạng thái đơn ở đâu?", answer: "Vào mục Đơn hàng ở thanh đáy hoặc từ Trang chủ > Đơn hàng để xem chi tiết tiến trình.", category: "order" },
      { id: "faq6", question: "Phí giao hàng tính thế nào?", answer: "Phí hiển thị ở bước xác nhận; miễn phí cho đơn từ 500K hoặc theo chương trình ưu đãi.", category: "delivery" }
    ],
    policies: {
      payment: {
        title: "Chính sách thanh toán",
        sections: [
          { heading: "Hình thức thanh toán", body: "Hỗ trợ ví điện tử, thẻ ATM nội địa (đã bật Internet Banking), thẻ quốc tế và COD khi giao hàng." },
          { heading: "Bảo mật & đối soát", body: "Thông tin thẻ được xử lý qua cổng thanh toán đạt chuẩn bảo mật PCI-DSS; mã hóa và không lưu trên hệ thống của Pinky." },
          { heading: "Hoàn tiền", body: "Hoàn về đúng phương thức đã thanh toán trong 3-7 ngày làm việc (tùy ngân hàng/đối tác). COD hoàn tiền qua chuyển khoản." }
        ]
      },
      delivery: {
        title: "Chính sách giao vận",
        sections: [
          { heading: "Phạm vi & thời gian", body: "Nội thành 1-2 ngày làm việc; ngoại tỉnh 3-5 ngày tùy đối tác vận chuyển và khu vực." },
          { heading: "Phí giao hàng", body: "Hiển thị ở bước xác nhận; miễn phí với đơn từ 500.000đ hoặc theo chương trình ưu đãi đang áp dụng." },
          { heading: "Kiểm hàng", body: "Cho phép kiểm ngoại quan trước khi thanh toán COD; từ chối nhận nếu sản phẩm hư hỏng, thiếu hàng." }
        ]
      },
      refund: {
        title: "Chính sách đổi & trả",
        sections: [
          { heading: "Thời hạn", body: "Yêu cầu đổi/trả trong 7 ngày kể từ khi nhận hàng; sản phẩm còn nguyên tem/mác và chưa qua sử dụng." },
          { heading: "Không áp dụng", body: "Sản phẩm khuyến mãi xả kho, thực phẩm tươi sống, hàng đặt theo yêu cầu riêng." },
          { heading: "Quy trình", body: "Gửi yêu cầu qua mục Hỗ trợ/Chat; đóng gói lại sản phẩm, ghi mã đơn; đối tác vận chuyển sẽ đến thu hồi." }
        ]
      }
    },
    el: {
      toast: document.getElementById("toast"),
      backBtn: document.getElementById("faqBackBtn"),
      searchInput: document.getElementById("faqSearchInput"),
      filterChips: document.getElementById("faqFilterChips"),
      faqList: document.getElementById("faqList"),
      supportCard: document.querySelector(".support-card"),
      policyCard: document.querySelector(".policy-card"),
      policySheet: document.querySelector(".policy-sheet"),
      policyTitle: document.getElementById("policyTitle"),
      policyBody: document.getElementById("policyBody"),
      policyClose: document.getElementById("policyClose")
    },
    state: {
      filter: "all",
      query: "",
      currentPolicy: null
    }
  }
})()
