---
title: "Kết nối HRS"
description: "Đề nghị HRS kết nối Channex, nhập Hotel ID, và giữ một gói giá cho mỗi loại phòng."
sidebar:
  order: 13
  label: "HRS"
---

Cách kết nối HRS với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho HRS.

## Trước khi bắt đầu

- Bạn cần **hợp đồng riêng** với HRS, với thông tin và hình ảnh của chỗ nghỉ đã có sẵn trong extranet của kênh. Santara AI kết nối chỗ nghỉ đã đăng ký; Santara AI không thể tạo chỗ nghỉ trên HRS thay bạn.
- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.
- **Không có channel manager hay liên kết iCal nào khác** trên chỗ nghỉ trong HRS — hai hệ thống cùng cập nhật một lịch sẽ ghi đè lẫn nhau.

## 1. Bật kết nối trong HRS

HRS phải cho phép kết nối trước. Channex là đối tác kết nối của Santara AI — đó là tên mà HRS biết đến chúng tôi.

1. Đề nghị bộ phận hỗ trợ của HRS kết nối chỗ nghỉ của bạn với **Channex**.
2. Ghi lại **Hotel ID** mà HRS cấp cho bạn.

## 2. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **HRS**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.
4. Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**.

| Trường | Nhập gì |
| --- | --- |
| Hotel ID | Hotel ID HRS của bạn. |

Nếu **Kiểm tra kết nối** thất bại, hãy kiểm tra lại ID, rồi nhờ bộ phận hỗ trợ của HRS xác nhận chỗ nghỉ đã được kết nối với Channex.

## 3. Ánh xạ phòng và mức giá

- Ánh xạ phòng đơn với phòng đơn của HRS.
- Giữ **một gói giá cho mỗi loại phòng**. HRS giữ tình trạng trống theo từng gói giá, nên nhiều gói giá trên một phòng có thể khiến phòng bị bán quá số.

Ánh xạ **mọi** phòng và mức giá mà HRS hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và HRS tiếp tục bán nó theo tình trạng trống cũ.

## 4. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú HRS đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

## Nên biết

- Trả lời khách HRS trong hộp thư của chính HRS — tin nhắn khách từ HRS không về Santara AI.

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
