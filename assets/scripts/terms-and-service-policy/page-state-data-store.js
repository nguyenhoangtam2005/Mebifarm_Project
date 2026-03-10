(() => {
  const root = window.MobiModules = window.MobiModules || {}
  root.termsPolicy = root.termsPolicy || {}

  root.termsPolicy.Data = {
    authKey: "mebi_ctv_auth",
    sections: [
      {
        heading: "Mục đích thu thập thông tin",
        body: "Chúng tôi thu thập và sử dụng dữ liệu cá nhân của Cộng tác viên nhằm liên hệ công việc, hỗ trợ vận hành, chăm sóc khách hàng, thống kê báo cáo và thực hiện nghĩa vụ pháp lý. Chỉ thu thập thông tin cần thiết và được bạn cung cấp tự nguyện."
      },
      {
        heading: "Điều khoản & Điều kiện",
        body: "Bạn phải tuân thủ hướng dẫn sử dụng Cổng CTV, bảo mật tài khoản, không chia sẻ mã OTP. Không sử dụng nền tảng cho mục đích trái pháp luật. Nội dung, dữ liệu, hình ảnh trên cổng thuộc sở hữu của Công ty; việc sao chép, sửa đổi, phân phối cần có sự đồng ý bằng văn bản."
      },
      {
        heading: "Phạm vi sử dụng thông tin",
        body: "Dữ liệu sẽ được dùng để: (1) Trao đổi và chăm sóc khách hàng; (2) Gửi thông báo, email liên quan chương trình bán; (3) Xử lý đối soát, nghiệm thu doanh số."
      },
      {
        heading: "Bảo mật thông tin",
        body: "Dữ liệu được bảo vệ bởi các biện pháp kỹ thuật và tổ chức phù hợp; chỉ cấp quyền cho bộ phận cần thiết. Không chia sẻ cho bên thứ ba nếu không có cơ sở pháp lý hoặc sự đồng ý của bạn."
      },
      {
        heading: "Thay đổi chính sách",
        body: "Chính sách có thể được cập nhật; thay đổi quan trọng sẽ được thông báo trước qua email hoặc trên cổng. Việc tiếp tục sử dụng được xem là bạn chấp thuận phiên bản mới."
      }
    ],
    el: {
      toast: document.getElementById("toast"),
      backBtn: document.getElementById("policyBack"),
      content: document.getElementById("policyContent")
    }
  }
})()
