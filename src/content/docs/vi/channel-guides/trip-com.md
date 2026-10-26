---
title: "Kết nối Trip.com (Ctrip)"
description: "Kết nối Channex trong Trip.com eBooking, nhập Hotel ID, rồi ánh xạ phòng — thường theo số khách."
sidebar:
  order: 4
  label: "Trip.com (Ctrip)"
---

Cách kết nối Trip.com (Ctrip) với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho Trip.com (Ctrip).

## Trước khi bắt đầu

- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.
- **Không có channel manager hay liên kết iCal nào khác** trên chỗ nghỉ trong Trip.com (Ctrip) — hai hệ thống cùng cập nhật một lịch sẽ ghi đè lẫn nhau.

## 1. Bật kết nối trong Trip.com (Ctrip)

Trip.com (Ctrip) phải cho phép kết nối trước. Channex là đối tác kết nối của Santara AI — đó là tên mà Trip.com (Ctrip) biết đến chúng tôi.

1. Đăng nhập **Trip.com eBooking**.
2. Mở **Rates & Availability → Connectivity Settings**.
3. Tìm **Channex**, chọn, bấm **Continue**, rồi **Connect**.

Nếu tài khoản của bạn không có các mục này, hãy email Trip.com tại lodgingsupport@trip.com.

## 2. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **Trip.com (Ctrip)**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.
4. Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**.

![Bước 2 trong Santara AI: các trường thiết lập của Trip.com (Ctrip), rồi Kiểm tra kết nối.](/screens/channel-guides/trip-com.vi.png)

| Trường | Nhập gì |
| --- | --- |
| Hotel Code | Mã khách sạn Trip.com của bạn. |
| Send Property Notification | Không bắt buộc. Tích chọn thì ô **Property Email** hiện ra — địa chỉ đó nhận email cho mỗi đặt phòng mới. |
| Tax Setting For Bookings | **Inclusive** hoặc **Exclusive** — tổng tiền đặt phòng có gồm thuế hay không. |

Nếu **Kiểm tra kết nối** thất bại, hãy kiểm tra lại ID, rồi nhờ bộ phận hỗ trợ của Trip.com (Ctrip) xác nhận chỗ nghỉ đã được kết nối với Channex.

## 3. Ánh xạ phòng và mức giá

- Thường là **Theo số khách** — mỗi số khách một giá. Nếu phòng chỉ có một giá, hãy ánh xạ cùng gói giá đó cho mọi số khách.

Ánh xạ **mọi** phòng và mức giá mà Trip.com (Ctrip) hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và Trip.com (Ctrip) tiếp tục bán nó theo tình trạng trống cũ.

## 4. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú Trip.com (Ctrip) đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

## Nên biết

- Các đặt phòng sắp tới được nhập về — nhưng chỉ những lượt Trip.com đã giao cho một channel manager. Một số lượt có thể về thiếu thông tin khách, và Trip.com không cho cách nào biết lượt nào bị thiếu. Hãy kiểm tra extranet cho những lượt đặt trước khi bạn kết nối.
- Trả lời khách Trip.com (Ctrip) trong hộp thư của chính Trip.com (Ctrip) — tin nhắn khách từ Trip.com (Ctrip) không về Santara AI.

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
