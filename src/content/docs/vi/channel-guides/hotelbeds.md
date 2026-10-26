---
title: "Kết nối Hotelbeds"
description: "Chọn Channex trong Maxiroom, kết nối bằng username và password Hotelbeds, chọn hợp đồng, rồi ánh xạ — mỗi hợp đồng một kết nối."
sidebar:
  order: 11
  label: "Hotelbeds"
---

Cách kết nối Hotelbeds với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho Hotelbeds.

## Trước khi bắt đầu

- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.
- **Không có channel manager hay liên kết iCal nào khác** trên chỗ nghỉ trong Hotelbeds — hai hệ thống cùng cập nhật một lịch sẽ ghi đè lẫn nhau.

## 1. Bật kết nối trong Hotelbeds

Hotelbeds phải cho phép kết nối trước. Channex là đối tác kết nối của Santara AI — đó là tên mà Hotelbeds biết đến chúng tôi.

1. Đăng nhập extranet **Maxiroom** và chọn **Channex** trong danh sách channel manager.

Nếu không thấy, hãy mở một yêu cầu hỗ trợ với Hotelbeds để kết nối Channex. Channex phải là channel manager duy nhất được kết nối.

## 2. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **Hotelbeds**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.
4. Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**.

| Trường | Nhập gì |
| --- | --- |
| Username and password | Thông tin Hotelbeds cấp cho bạn. Hai giá trị thường giống nhau — điều đó bình thường. |
| Contract | Hiện ra sau khi Kiểm tra kết nối. Chọn hợp đồng dành cho kết nối này. |
| Update availability / rates / restrictions | Những gì được gửi đi. Để bật cả ba, trừ khi hợp đồng của bạn cố định giá hoặc allotment. |

Nếu **Kiểm tra kết nối** thất bại, hãy kiểm tra lại ID, rồi nhờ bộ phận hỗ trợ của Hotelbeds xác nhận chỗ nghỉ đã được kết nối với Channex.

## 3. Ánh xạ phòng và mức giá

- Các phòng của Hotelbeds được liệt kê; ánh xạ từng phòng với phòng và gói giá của bạn.
- **Không** gửi giá tới các mức giá đánh dấu **FIT** hoặc các mức giá hợp đồng tương tự — chúng sẽ từ chối.

Ánh xạ **mọi** phòng và mức giá mà Hotelbeds hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và Hotelbeds tiếp tục bán nó theo tình trạng trống cũ.

## 4. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú Hotelbeds đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

:::note[Mỗi hợp đồng một kết nối]
Có bốn hợp đồng Hotelbeds thì kết nối Hotelbeds bốn lần — mỗi hợp đồng một lần.
:::

## Nên biết

- Trả lời khách Hotelbeds trong hộp thư của chính Hotelbeds — tin nhắn khách từ Hotelbeds không về Santara AI.

## Lỗi Hotelbeds

| Lỗi | Cần làm gì |
| --- | --- |
| *This request is out of the contract period* | Đề nghị Hotelbeds gia hạn hợp đồng quá hai năm. |
| *day … has no inventory loaded* | Đề nghị Hotelbeds nạp giá cho mọi ngày trong hai năm tới. |
| *This change is not permitted as it does not agree with the signed contract* | Tắt **Update rates** cho kết nối này. |
| *Minimum allotment activated …* | Hợp đồng có allotment mà bạn không đóng được. Đề nghị Hotelbeds một hợp đồng không có allotment — allotment có thể gây đặt trùng. |

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
