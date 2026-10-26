---
title: "Kết nối HyperGuest"
description: "Đề nghị HyperGuest bật Channex, nhập property ID, rồi ánh xạ — theo số khách nếu bạn định giá như vậy."
sidebar:
  order: 23
  label: "HyperGuest"
---

Cách kết nối HyperGuest với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho HyperGuest.

## Trước khi bắt đầu

- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.
- **Không có channel manager hay liên kết iCal nào khác** trên chỗ nghỉ trong HyperGuest — hai hệ thống cùng cập nhật một lịch sẽ ghi đè lẫn nhau.

## 1. Bật kết nối trong HyperGuest

HyperGuest phải cho phép kết nối trước. Channex là đối tác kết nối của Santara AI — đó là tên mà HyperGuest biết đến chúng tôi.

1. Đề nghị HyperGuest bật giao diện **Channex**.
2. Họ trả lời kèm **property ID** của bạn.

## 2. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **HyperGuest**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.
4. Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**.

| Trường | Nhập gì |
| --- | --- |
| Hotel ID | Property ID HyperGuest của bạn. |

Nếu **Kiểm tra kết nối** thất bại, hãy kiểm tra lại ID, rồi nhờ bộ phận hỗ trợ của HyperGuest xác nhận chỗ nghỉ đã được kết nối với Channex.

## 3. Ánh xạ phòng và mức giá

- HyperGuest hỗ trợ **theo số khách**. Định giá theo từng số khách? Ánh xạ từng số khách. Chỉ có một giá cho cả phòng? Chỉ ánh xạ số khách đó, hoặc tất cả — cách nào cũng được.
- Mã phòng và mã giá trong HyperGuest có thể là bất cứ gì dễ đọc (ví dụ `DBL-Room`, `BAR`).

Ánh xạ **mọi** phòng và mức giá mà HyperGuest hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và HyperGuest tiếp tục bán nó theo tình trạng trống cũ.

## 4. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú HyperGuest đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

:::caution[Đừng đổi mã sau khi ánh xạ]
Nếu bạn đổi mã phòng hoặc mã giá trong HyperGuest sau khi ánh xạ, hãy ánh xạ lại trong Santara AI.
:::

## Nên biết

- Trả lời khách HyperGuest trong hộp thư của chính HyperGuest — tin nhắn khách từ HyperGuest không về Santara AI.

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
