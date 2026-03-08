# Project Coding Guide

Tài liệu này là quy ước chuẩn cho project.  
Khi có yêu cầu viết/chỉnh code trong project này, luôn đọc file này trước.

## 1) Kiến trúc JS theo page

Mỗi giao diện có 1 thư mục riêng trong `assets/scripts/`:

- `account-profile-management/`
- `authentication-login/`
- `homepage-dashboard/`
- `order-history-management/`
- `product-details-page/`
- `product-search-page/`
- `revenue-analytics-dashboard/`
- `user-notifications-center/`

Mỗi thư mục bắt buộc có đúng 6 file:

1. `page-state-data-store.js` (Data)
2. `backend-api-client.js` (API)
3. `business-logic-service.js` (Service)
4. `ui-renderer-view.js` (Render)
5. `user-event-handlers.js` (Event)
6. `page-module-bootstrap.js` (Bootstrap/Init)

## 2) Thứ tự load script trong HTML

Trong mỗi page, script phải load theo thứ tự:

1. `shared-application-utilities.js` (và `product-catalog-service.js` nếu page cần dữ liệu sản phẩm)
2. `page-state-data-store.js`
3. `backend-api-client.js`
4. `business-logic-service.js`
5. `ui-renderer-view.js`
6. `user-event-handlers.js`
7. `page-module-bootstrap.js`

Không dùng lại file kiểu `*-controller.js` cũ.

## 3) Quy ước code

- Dùng JavaScript thuần (không framework).
- Giữ module theo namespace: `window.MobiModules.<moduleName>`.
- Phân tách đúng trách nhiệm:
  - Data: DOM refs, state, constants
  - API: sessionStorage, location, history, clipboard, URL params, backend call
  - Service: business logic/transform
  - Render: DOM render/update UI
  - Event: bind events
- Không trộn logic xử lý nghiệp vụ vào Render.
- Không bind event trong Data/API.

## 4) Chuẩn text & encoding

- Tất cả file phải lưu UTF-8.
- Text hiển thị cho người dùng dùng tiếng Việt có dấu.
- Không để chuỗi lỗi encoding (mojibake).

## 5) Quy tắc sửa đổi

- Ưu tiên sửa đúng module file thay vì sửa dồn ở bootstrap.
- Khi thêm tính năng mới cho 1 page:
  - thêm state vào Data
  - thêm external call vào API (nếu có)
  - thêm logic vào Service
  - thêm render vào Render
  - thêm binding vào Event
  - gọi từ Bootstrap

## 6) Khi tạo page mới

Nếu tạo page mới, phải tạo thư mục script mới theo đúng 6 file chuẩn như trên.

## 7) Checklist trước khi bàn giao

- Không còn tham chiếu script tên cũ trong `pages/*.html`
- Không lỗi cú pháp JS
- Event chính hoạt động
- UI text tiếng Việt hiển thị đúng
