---
title: "Kết nối WebBeds"
description: "Đề nghị WebBeds kết nối Channex, nhập Hotel Code và loại số đêm tối đa, rồi ánh xạ mọi phòng và mức giá."
sidebar:
  order: 31
  label: "WebBeds"
---

Cách kết nối WebBeds với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho WebBeds.

## Trước khi bắt đầu

- Bạn cần **hợp đồng riêng** với WebBeds, với thông tin và hình ảnh của chỗ nghỉ đã có sẵn trong extranet của kênh. Santara AI kết nối chỗ nghỉ đã đăng ký; Santara AI không thể tạo chỗ nghỉ trên WebBeds thay bạn.
- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.
- **Không có channel manager hay liên kết iCal nào khác** trên chỗ nghỉ trong WebBeds — hai hệ thống cùng cập nhật một lịch sẽ ghi đè lẫn nhau.

## 1. Bật kết nối trong WebBeds

WebBeds phải cho phép kết nối trước. Channex là đối tác kết nối của Santara AI — đó là tên mà WebBeds biết đến chúng tôi.

1. Đề nghị bộ phận hỗ trợ của WebBeds kết nối **Channex** (hoặc tự làm trong giao diện của họ).
2. Ghi lại **Hotel Code WebBeds** của bạn.

## 2. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **WebBeds**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.
4. Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**.

![Bước 2 trong Santara AI: các trường thiết lập của WebBeds, rồi Kiểm tra kết nối.](/screens/channel-guides/webbeds.vi.png)

| Trường | Nhập gì |
| --- | --- |
| Hotel Code | Mã khách sạn WebBeds của bạn. |
| Send Property Notification | Không bắt buộc. Tích chọn thì ô **Property Email** hiện ra — địa chỉ đó nhận email cho mỗi đặt phòng mới. |
| Min Stay Type | Loại số đêm tối thiểu gửi đi: **Arrival** hoặc **Through**. Thường là Arrival. |

Nếu **Kiểm tra kết nối** thất bại, hãy kiểm tra lại ID, rồi nhờ bộ phận hỗ trợ của WebBeds xác nhận chỗ nghỉ đã được kết nối với Channex.

## 3. Ánh xạ phòng và mức giá

- Ánh xạ từng phòng của kênh với phòng của bạn, và từng mức giá của kênh với một gói giá của bạn.

Ánh xạ **mọi** phòng và mức giá mà WebBeds hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và WebBeds tiếp tục bán nó theo tình trạng trống cũ.

## 4. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú WebBeds đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

## Nên biết

- Trả lời khách WebBeds trong hộp thư của chính WebBeds — tin nhắn khách từ WebBeds không về Santara AI.

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
