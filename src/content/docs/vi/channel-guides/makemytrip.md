---
title: "Kết nối MakeMyTrip and Goibibo"
description: "Đề nghị MakeMyTrip kết nối Channex, nhập Hotel ID và access token, rồi ánh xạ phòng theo số khách."
sidebar:
  order: 8
  label: "MakeMyTrip and Goibibo"
---

Cách kết nối MakeMyTrip and Goibibo với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho MakeMyTrip and Goibibo.

## Trước khi bắt đầu

- Bạn cần **hợp đồng riêng** với MakeMyTrip, với thông tin và hình ảnh của chỗ nghỉ đã có sẵn trong extranet của kênh. Santara AI kết nối chỗ nghỉ đã đăng ký; Santara AI không thể tạo chỗ nghỉ trên MakeMyTrip thay bạn.
- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.
- **Không có channel manager hay liên kết iCal nào khác** trên chỗ nghỉ trong MakeMyTrip and Goibibo — hai hệ thống cùng cập nhật một lịch sẽ ghi đè lẫn nhau.

## 1. Bật kết nối trong MakeMyTrip and Goibibo

MakeMyTrip and Goibibo phải cho phép kết nối trước. Channex là đối tác kết nối của Santara AI — đó là tên mà MakeMyTrip and Goibibo biết đến chúng tôi.

1. Nhắn bộ phận hỗ trợ của MakeMyTrip, qua mục tin nhắn trong extranet, để kết nối **Channex**.
2. Họ cấp cho bạn một **access token**. Giữ nó cùng với **Hotel ID**.

## 2. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **Make My Trip**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.
4. Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**.

![Bước 2 trong Santara AI: các trường thiết lập của MakeMyTrip and Goibibo, rồi Kiểm tra kết nối.](/screens/channel-guides/makemytrip.vi.png)

| Trường | Nhập gì |
| --- | --- |
| Hotel ID | Hotel ID MakeMyTrip của bạn. |
| Access Token | Mã token MakeMyTrip cấp khi kết nối Channex. |
| Send Property Notification | Không bắt buộc. Tích chọn thì ô **Property Email** hiện ra — địa chỉ đó nhận email cho mỗi đặt phòng mới. |
| Sync B2B Rate Type / Sync MyBiz Rate Type | Không bắt buộc. Gửi giá cả sang mức giá B2B hoặc MyBiz của MakeMyTrip; ô **Modifier (%)** hiện ra để điều chỉnh. |
| Booking Amount | **Payout Amount** hoặc **Total Amount**. |

Nếu **Kiểm tra kết nối** thất bại, hãy kiểm tra lại ID, rồi nhờ bộ phận hỗ trợ của MakeMyTrip and Goibibo xác nhận chỗ nghỉ đã được kết nối với Channex.

## 3. Ánh xạ phòng và mức giá

- Thường là **Theo số khách** — mỗi số khách một giá. Nếu phòng chỉ có một giá, hãy ánh xạ cùng gói giá đó cho mọi số khách.

Ánh xạ **mọi** phòng và mức giá mà MakeMyTrip and Goibibo hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và MakeMyTrip and Goibibo tiếp tục bán nó theo tình trạng trống cũ.

## 4. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú MakeMyTrip and Goibibo đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

## Nên biết

- Trả lời khách MakeMyTrip and Goibibo trong hộp thư của chính MakeMyTrip and Goibibo — tin nhắn khách từ MakeMyTrip and Goibibo không về Santara AI.

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
