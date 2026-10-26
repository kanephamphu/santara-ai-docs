---
title: "Kết nối Agoda"
description: "Bật chế độ channel manager trong Agoda YCS, nhập Hotel ID, rồi ánh xạ phòng theo số khách."
sidebar:
  order: 2
  label: "Agoda"
---

Cách kết nối Agoda với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho Agoda.

## Trước khi bắt đầu

- Bạn cần **hợp đồng riêng** với Agoda, với thông tin và hình ảnh của chỗ nghỉ đã có sẵn trong extranet của kênh. Santara AI kết nối chỗ nghỉ đã đăng ký; Santara AI không thể tạo chỗ nghỉ trên Agoda thay bạn.
- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.
- **Không có channel manager hay liên kết iCal nào khác** trên chỗ nghỉ trong Agoda — hai hệ thống cùng cập nhật một lịch sẽ ghi đè lẫn nhau.

## 1. Bật kết nối trong Agoda

Agoda phải cho phép kết nối trước. Channex là đối tác kết nối của Santara AI — đó là tên mà Agoda biết đến chúng tôi.

1. Trong Agoda **YCS**, mở **Settings → Property Settings → Optional Settings**.
2. Đánh dấu **Enable channel manager mode**.
3. Chọn **Channex** trong danh sách rồi bấm **Save**.

Hoặc nhắn bộ phận hỗ trợ của Agoda, qua mục tin nhắn trong extranet, để họ kết nối Channex giúp bạn.

![Agoda YCS: Settings → Property Settings → Optional settings, đã tích Enable channel manager mode và chọn nhà cung cấp.](/channel-guides/extranet/agoda-ycs.webp)

## 2. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **Agoda**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.
4. Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**.

![Bước 2 trong Santara AI: các trường thiết lập của Agoda, rồi Kiểm tra kết nối.](/screens/channel-guides/agoda.vi.png)

| Trường | Nhập gì |
| --- | --- |
| Hotel ID | Hotel ID Agoda của bạn. |
| Send Property Notification | Không bắt buộc. Tích chọn thì ô **Property Email** hiện ra — địa chỉ đó nhận email cho mỗi đặt phòng mới. |
| Tax Setting For Bookings | **Inclusive** — đã gồm thuế, đã trừ hoa hồng (khoản bạn nhận). **Inclusive With Commissions** — gồm cả thuế và hoa hồng (tổng khách trả). **Exclusive** — không gồm thuế hay hoa hồng (mô hình Mỹ). |

Nếu **Kiểm tra kết nối** thất bại, hãy kiểm tra lại ID, rồi nhờ bộ phận hỗ trợ của Agoda xác nhận chỗ nghỉ đã được kết nối với Channex.

## 3. Ánh xạ phòng và mức giá

- **Theo số khách** — mỗi số khách một giá. Nếu phòng chỉ có một giá, hãy ánh xạ cùng gói giá đó cho mọi số khách.

Ánh xạ **mọi** phòng và mức giá mà Agoda hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và Agoda tiếp tục bán nó theo tình trạng trống cũ.

## 4. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú Agoda đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

## Nên biết

- Trả lời khách Agoda trong hộp thư của chính Agoda — tin nhắn khách từ Agoda không về Santara AI.

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
