---
title: "Kết nối Hotel Trader"
description: "Đề nghị Hotel Trader kết nối Channex, nhập Hotel ID, rồi ánh xạ mọi phòng và mức giá."
sidebar:
  order: 21
  label: "Hotel Trader"
---

Cách kết nối Hotel Trader với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho Hotel Trader.

## Trước khi bắt đầu

- Bạn cần **hợp đồng riêng** với Hotel Trader, với thông tin và hình ảnh của chỗ nghỉ đã có sẵn trong extranet của kênh. Santara AI kết nối chỗ nghỉ đã đăng ký; Santara AI không thể tạo chỗ nghỉ trên Hotel Trader thay bạn.
- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.
- **Không có channel manager hay liên kết iCal nào khác** trên chỗ nghỉ trong Hotel Trader — hai hệ thống cùng cập nhật một lịch sẽ ghi đè lẫn nhau.

## 1. Bật kết nối trong Hotel Trader

Hotel Trader phải cho phép kết nối trước. Channex là đối tác kết nối của Santara AI — đó là tên mà Hotel Trader biết đến chúng tôi.

1. Đề nghị bộ phận hỗ trợ của Hotel Trader kết nối chỗ nghỉ của bạn với **Channex**.
2. Ghi lại **Hotel ID** mà Hotel Trader cấp cho bạn.

## 2. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **HotelTrader**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.
4. Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**.

![Bước 2 trong Santara AI: các trường thiết lập của Hotel Trader, rồi Kiểm tra kết nối.](/screens/channel-guides/hotel-trader.vi.png)

| Trường | Nhập gì |
| --- | --- |
| Hotel Code | Mã khách sạn Hotel Trader của bạn. |
| Send Property Notification | Không bắt buộc. Tích chọn thì ô **Property Email** hiện ra — địa chỉ đó nhận email cho mỗi đặt phòng mới. |

Nếu **Kiểm tra kết nối** thất bại, hãy kiểm tra lại ID, rồi nhờ bộ phận hỗ trợ của Hotel Trader xác nhận chỗ nghỉ đã được kết nối với Channex.

## 3. Ánh xạ phòng và mức giá

- Ánh xạ từng phòng của kênh với phòng của bạn, và từng mức giá của kênh với một gói giá của bạn.

Ánh xạ **mọi** phòng và mức giá mà Hotel Trader hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và Hotel Trader tiếp tục bán nó theo tình trạng trống cũ.

## 4. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú Hotel Trader đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

## Nên biết

- Trả lời khách Hotel Trader trong hộp thư của chính Hotel Trader — tin nhắn khách từ Hotel Trader không về Santara AI.

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
