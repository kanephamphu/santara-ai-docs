---
title: "Kết nối Google Hotels và Vacation Rentals"
description: "Hiển thị miễn phí trên Google: điền đủ thông tin chỗ nghỉ, kết nối Google, chọn nơi nhận đặt phòng, rồi chờ 1–4 tuần để Google hiển thị."
sidebar:
  order: 36
  label: "Google Hotels và Vacation Rentals"
---

Cách kết nối Google Hotels và Vacation Rentals với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho Google Hotels và Vacation Rentals.

## Trước khi bắt đầu

- Google **không có extranet**: Google chỉ hiển thị những gì chỗ nghỉ của bạn gửi sang. Trước khi kết nối, hãy điền **địa chỉ, số điện thoại, vị trí bản đồ, múi giờ, nội quy, chính sách huỷ, ít nhất một tiện nghi, ảnh và mô tả** của chỗ nghỉ.
- **Nhà cho thuê (vacation rental) cần thêm**: địa chỉ website bắt đầu bằng `https://`, **ít nhất 8 ảnh**, và số giường, phòng ngủ, phòng tắm (hỏi trong biểu mẫu bên dưới).
- Google nhận diện chỗ nghỉ qua **tên, địa chỉ và số điện thoại** — hãy đảm bảo khớp với Google Maps.
- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.

## 1. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **Google Hotel ARI**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.
4. Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**.

| Trường | Nhập gì |
| --- | --- |
| Partner Account | Giữ nguyên trừ khi chúng tôi hướng dẫn khác. |
| Use built-in IBE | Có tích: khách bấm trên Google sẽ vào trang đặt phòng có sẵn. Không tích: điền **Booking Link**. |
| Booking Link | Trang đặt phòng của riêng bạn, với các biến Google tự điền — ví dụ `https://example.com/book?checkin=(CHECKIN_DATE)&nights=(LENGTH)`. Biến khác: `(CHECKOUT_DATE)`, `(ADULTS)`, `(CURRENCY)`. |
| Beds count / Bedrooms count / Bathrooms count | Bắt buộc với nhà cho thuê. |
| Send Property Notification | Không bắt buộc. Tích chọn thì ô **Property Email** hiện ra — địa chỉ đó nhận email cho mỗi đặt phòng mới. |

## 2. Ánh xạ phòng và mức giá

- Tích các phòng và mức giá Google sẽ hiển thị. Có thể đổi bất cứ lúc nào.
- **Nhà cho thuê: mỗi kết nối một loại phòng.** Nhiều căn hộ trong cùng toà nhà cần mỗi căn một kết nối Google, và chỗ nghỉ ở địa chỉ khác nhau phải là các chỗ nghỉ riêng trong Santara AI.

Ánh xạ **mọi** phòng và mức giá mà Google Hotels và Vacation Rentals hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và Google Hotels và Vacation Rentals tiếp tục bán nó theo tình trạng trống cũ.

## 3. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú Google Hotels và Vacation Rentals đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

## Nên biết

- Google quét chỗ nghỉ mới hằng tuần: chờ **khoảng 1 tuần** với khách sạn và **tới 4 tuần** với nhà cho thuê trước khi chỗ nghỉ xuất hiện.
- Đây là **liên kết đặt phòng miễn phí** của Google; nhà cho thuê hiện thành ghim trên bản đồ khi người dùng tìm trong khu vực.

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
