---
title: "Kết nối Expedia"
description: "Chọn Channex cho kết nối và đặt phòng trong extranet Expedia, nhập property ID, ánh xạ, và các đặt phòng sắp tới sẽ chuyển về."
sidebar:
  order: 3
  label: "Expedia"
---

Cách kết nối Expedia với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho Expedia.

## Trước khi bắt đầu

- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.
- **Không có channel manager hay liên kết iCal nào khác** trên chỗ nghỉ trong Expedia — hai hệ thống cùng cập nhật một lịch sẽ ghi đè lẫn nhau.

## 1. Bật kết nối trong Expedia

Expedia phải cho phép kết nối trước. Channex là đối tác kết nối của Santara AI — đó là tên mà Expedia biết đến chúng tôi.

1. Trong extranet Expedia, mở **Rooms and rates → Connectivity settings**. Expedia thường yêu cầu đăng nhập hai lớp ở bước này.
2. Chọn **Channex** cho **cả hai** mục: kết nối (connectivity) **và** đặt phòng (bookings).

![Expedia Partner Central: Rooms and rates → Connectivity settings.](/channel-guides/extranet/expedia-menu.webp)

![Expedia yêu cầu xác minh thêm trước khi hiện Connectivity settings.](/channel-guides/extranet/expedia-verify.webp)

## 2. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **Expedia**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.
4. Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**.

![Bước 2 trong Santara AI: các trường thiết lập của Expedia, rồi Kiểm tra kết nối.](/screens/channel-guides/expedia.vi.png)

| Trường | Nhập gì |
| --- | --- |
| Hotel ID | Hotel ID Expedia của bạn. Expedia gọi là property ID. |
| Min Stay Type | Loại số đêm tối thiểu gửi đi: **Arrival** hoặc **Through**. Thường là Arrival. |
| Send Property Notification | Không bắt buộc. Tích chọn thì ô **Property Email** hiện ra — địa chỉ đó nhận email cho mỗi đặt phòng mới. |
| Booking Amount | **Collect Amount** — số tiền bạn thu của khách hoặc thẻ ảo; khớp với VCC. **Total Amount** — số khách đã trả, gồm thuế và phí. **Total Amount Excluding Tax** — cho chỗ nghỉ ở Mỹ. |

Nếu **Kiểm tra kết nối** thất bại, hãy kiểm tra lại ID, rồi nhờ bộ phận hỗ trợ của Expedia xác nhận chỗ nghỉ đã được kết nối với Channex.

## 3. Ánh xạ phòng và mức giá

- Phòng và mức giá của Expedia ở bên trái; chọn phòng và gói giá tương ứng của bạn ở bên phải.

Ánh xạ **mọi** phòng và mức giá mà Expedia hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và Expedia tiếp tục bán nó theo tình trạng trống cũ.

## 4. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú Expedia đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

## Nên biết

- Khi go live, toàn bộ giá, tình trạng trống và ràng buộc được gửi đi trong một lần đồng bộ đầy đủ.
- **Các đặt phòng Expedia sắp tới được nhập về.**
- **Tin nhắn khách** trên Expedia có thể trả lời ngay từ Santara AI.

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
