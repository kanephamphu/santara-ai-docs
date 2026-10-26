---
title: "Kết nối Tiket.com"
description: "Đề nghị Tiket.com kết nối Channex (hoặc tự làm), nhập Hotel ID, rồi ánh xạ mọi phòng và mức giá."
sidebar:
  order: 6
  label: "Tiket.com"
---

Cách kết nối Tiket.com với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho Tiket.com.

## Trước khi bắt đầu

- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.
- **Không có channel manager hay liên kết iCal nào khác** trên chỗ nghỉ trong Tiket.com — hai hệ thống cùng cập nhật một lịch sẽ ghi đè lẫn nhau.

## 1. Bật kết nối trong Tiket.com

Tiket.com phải cho phép kết nối trước. Channex là đối tác kết nối của Santara AI — đó là tên mà Tiket.com biết đến chúng tôi.

1. Email bộ phận hỗ trợ của Tiket.com để đề nghị kết nối **Channex**.
2. Ghi lại **Hotel ID Tiket.com** của bạn.

Nếu chưa có channel manager nào được kết nối, bạn có thể tự chọn Channex trong extranet.

![Extranet Tiket.com: Connectivity hiển thị channel manager đã kết nối và Hotel ID của bạn.](/channel-guides/extranet/tiket-com-connectivity.webp)

## 2. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **Tiket.com**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.
4. Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**.

![Bước 2 trong Santara AI: các trường thiết lập của Tiket.com, rồi Kiểm tra kết nối.](/screens/channel-guides/tiket-com.vi.png)

| Trường | Nhập gì |
| --- | --- |
| Hotel ID | Hotel ID Tiket.com của bạn. |
| Send Property Notification | Không bắt buộc. Tích chọn thì ô **Property Email** hiện ra — địa chỉ đó nhận email cho mỗi đặt phòng mới. |
| Min Stay Type | Loại số đêm tối thiểu gửi đi: **Arrival** hoặc **Through**. Thường là Arrival. |

Nếu **Kiểm tra kết nối** thất bại, hãy kiểm tra lại ID, rồi nhờ bộ phận hỗ trợ của Tiket.com xác nhận chỗ nghỉ đã được kết nối với Channex.

## 3. Ánh xạ phòng và mức giá

- Ánh xạ từng phòng của kênh với phòng của bạn, và từng mức giá của kênh với một gói giá của bạn.

Ánh xạ **mọi** phòng và mức giá mà Tiket.com hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và Tiket.com tiếp tục bán nó theo tình trạng trống cũ.

## 4. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú Tiket.com đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

## Nên biết

- Trả lời khách Tiket.com trong hộp thư của chính Tiket.com — tin nhắn khách từ Tiket.com không về Santara AI.

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
