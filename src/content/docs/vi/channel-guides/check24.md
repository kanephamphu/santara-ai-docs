---
title: "Kết nối Check24"
description: "Đề nghị Check24 kết nối Channex, nhập Hotel ID, rồi ánh xạ phòng theo số khách."
sidebar:
  order: 14
  label: "Check24"
---

Cách kết nối Check24 với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho Check24.

## Trước khi bắt đầu

- Bạn cần **hợp đồng riêng** với Check24, với thông tin và hình ảnh của chỗ nghỉ đã có sẵn trong extranet của kênh. Santara AI kết nối chỗ nghỉ đã đăng ký; Santara AI không thể tạo chỗ nghỉ trên Check24 thay bạn.
- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.
- **Không có channel manager hay liên kết iCal nào khác** trên chỗ nghỉ trong Check24 — hai hệ thống cùng cập nhật một lịch sẽ ghi đè lẫn nhau.

## 1. Bật kết nối trong Check24

Check24 phải cho phép kết nối trước. Channex là đối tác kết nối của Santara AI — đó là tên mà Check24 biết đến chúng tôi.

1. Gửi Check24 một yêu cầu hỗ trợ để kết nối chỗ nghỉ của bạn với **Channex**.
2. Ghi lại **Hotel ID Check24** của bạn.

## 2. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **Check24**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.
4. Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**.

| Trường | Nhập gì |
| --- | --- |
| Hotel ID | Hotel ID Check24 của bạn. |

Nếu **Kiểm tra kết nối** thất bại, hãy kiểm tra lại ID, rồi nhờ bộ phận hỗ trợ của Check24 xác nhận chỗ nghỉ đã được kết nối với Channex.

## 3. Ánh xạ phòng và mức giá

- **Theo số khách** — mỗi số khách một giá. Nếu phòng chỉ có một giá, hãy ánh xạ cùng gói giá đó cho mọi số khách.

Ánh xạ **mọi** phòng và mức giá mà Check24 hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và Check24 tiếp tục bán nó theo tình trạng trống cũ.

## 4. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú Check24 đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

## Nên biết

- Trả lời khách Check24 trong hộp thư của chính Check24 — tin nhắn khách từ Check24 không về Santara AI.

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
