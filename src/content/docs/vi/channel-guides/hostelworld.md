---
title: "Kết nối Hostelworld"
description: "Email Hostelworld để kết nối Channex, nhập property ID, rồi ánh xạ mỗi phòng theo số khách tối đa."
sidebar:
  order: 10
  label: "Hostelworld"
---

Cách kết nối Hostelworld với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho Hostelworld.

## Trước khi bắt đầu

- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.
- **Không có channel manager hay liên kết iCal nào khác** trên chỗ nghỉ trong Hostelworld — hai hệ thống cùng cập nhật một lịch sẽ ghi đè lẫn nhau.

## 1. Bật kết nối trong Hostelworld

Hostelworld phải cho phép kết nối trước. Channex là đối tác kết nối của Santara AI — đó là tên mà Hostelworld biết đến chúng tôi.

1. Email bộ phận hỗ trợ của Hostelworld để kết nối **Channex**.
2. Họ trả lời khi kết nối đã bật, kèm **property ID** của bạn.

## 2. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **Hostelworld**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.
4. Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**.

![Bước 2 trong Santara AI: các trường thiết lập của Hostelworld, rồi Kiểm tra kết nối.](/screens/channel-guides/hostelworld.vi.png)

| Trường | Nhập gì |
| --- | --- |
| Hotel ID | Hotel ID Hostelworld của bạn. Hostelworld gửi dưới tên property ID. |
| Min Stay Type | Loại số đêm tối thiểu gửi đi: **Arrival** hoặc **Through**. Thường là Arrival. |
| Send Property Notification | Không bắt buộc. Tích chọn thì ô **Property Email** hiện ra — địa chỉ đó nhận email cho mỗi đặt phòng mới. |
| Booking Amount | **With Commission** hoặc **Without Commission** — tổng tiền đặt phòng được nhận thế nào. |

Nếu **Kiểm tra kết nối** thất bại, hãy kiểm tra lại ID, rồi nhờ bộ phận hỗ trợ của Hostelworld xác nhận chỗ nghỉ đã được kết nối với Channex.

## 3. Ánh xạ phòng và mức giá

- Hostelworld định giá mỗi phòng theo **số khách tối đa**: phòng đôi gửi giá 2 người, phòng 4 giường gửi giá 4 người. Hostelworld không bán được phòng đôi như phòng đơn.
- **Giường dorm** gửi giá 1 người.

Ánh xạ **mọi** phòng và mức giá mà Hostelworld hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và Hostelworld tiếp tục bán nó theo tình trạng trống cũ.

## 4. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú Hostelworld đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

## Nên biết

- Hostelworld không hỗ trợ **đóng nhận phòng** hay **đóng trả phòng** — các ràng buộc này không được gửi đi.
- Trả lời khách Hostelworld trong hộp thư của chính Hostelworld — tin nhắn khách từ Hostelworld không về Santara AI.

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
