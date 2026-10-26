---
title: "Kết nối OpenGDS"
description: "Đề nghị OpenGDS kết nối Channex, nhập Hotel ID, rồi ánh xạ theo phòng."
sidebar:
  order: 28
  label: "OpenGDS"
---

Cách kết nối OpenGDS với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho OpenGDS.

## Trước khi bắt đầu

- Bạn cần **hợp đồng riêng** với OpenGDS, với thông tin và hình ảnh của chỗ nghỉ đã có sẵn trong extranet của kênh. Santara AI kết nối chỗ nghỉ đã đăng ký; Santara AI không thể tạo chỗ nghỉ trên OpenGDS thay bạn.
- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.
- **Không có channel manager hay liên kết iCal nào khác** trên chỗ nghỉ trong OpenGDS — hai hệ thống cùng cập nhật một lịch sẽ ghi đè lẫn nhau.

## 1. Bật kết nối trong OpenGDS

OpenGDS phải cho phép kết nối trước. Channex là đối tác kết nối của Santara AI — đó là tên mà OpenGDS biết đến chúng tôi.

1. Đề nghị bộ phận hỗ trợ của OpenGDS kết nối chỗ nghỉ của bạn với **Channex**.
2. Ghi lại **Hotel ID** mà OpenGDS cấp cho bạn.

Hoặc tự kết nối trong giao diện của OpenGDS.

## 2. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **OpenGDS**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.
4. Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**.

| Trường | Nhập gì |
| --- | --- |
| Hotel ID | Hotel ID OpenGDS của bạn. |

Nếu **Kiểm tra kết nối** thất bại, hãy kiểm tra lại ID, rồi nhờ bộ phận hỗ trợ của OpenGDS xác nhận chỗ nghỉ đã được kết nối với Channex.

## 3. Ánh xạ phòng và mức giá

- **Theo phòng** — một giá cho cả phòng, bất kể ai ở. Ánh xạ gói giá cho số khách tối đa của bạn.

Ánh xạ **mọi** phòng và mức giá mà OpenGDS hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và OpenGDS tiếp tục bán nó theo tình trạng trống cũ.

## 4. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú OpenGDS đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

## Nên biết

- Trả lời khách OpenGDS trong hộp thư của chính OpenGDS — tin nhắn khách từ OpenGDS không về Santara AI.

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
