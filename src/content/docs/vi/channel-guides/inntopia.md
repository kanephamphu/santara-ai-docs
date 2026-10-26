---
title: "Kết nối Inntopia"
description: "Thêm mã tham chiếu chéo Channex cho từng sản phẩm Inntopia, nhập Hotel ID, rồi ánh xạ mức giá RACK theo phòng."
sidebar:
  order: 24
  label: "Inntopia"
---

Cách kết nối Inntopia với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho Inntopia.

## Trước khi bắt đầu

- Bạn cần **hợp đồng riêng** với Inntopia, với thông tin và hình ảnh của chỗ nghỉ đã có sẵn trong extranet của kênh. Santara AI kết nối chỗ nghỉ đã đăng ký; Santara AI không thể tạo chỗ nghỉ trên Inntopia thay bạn.
- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.
- **Không có channel manager hay liên kết iCal nào khác** trên chỗ nghỉ trong Inntopia — hai hệ thống cùng cập nhật một lịch sẽ ghi đè lẫn nhau.

## 1. Bật kết nối trong Inntopia

Inntopia phải cho phép kết nối trước. Channex là đối tác kết nối của Santara AI — đó là tên mà Inntopia biết đến chúng tôi.

1. Đăng nhập Inntopia và mở tab **Products**.
2. Với mỗi sản phẩm, bấm nút cài đặt bên phải và chọn **Cross-reference codes**.
3. Đặt **Remote system** là **Channex**.
4. Đặt **Cross-reference code** là product ID Inntopia — con số trong ngoặc ở tên sản phẩm.
5. Lưu bằng ô đánh dấu màu xanh, đóng lại, rồi làm tiếp với sản phẩm kế tiếp.

![Tab Products trong Inntopia, với nút cài đặt ở mỗi sản phẩm.](/channel-guides/extranet/inntopia-products.webp)

![Cross-reference code của Inntopia: Remote System là Channex, mã = ID sản phẩm trong ngoặc.](/channel-guides/extranet/inntopia-cross-reference.webp)

## 2. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **Inntopia**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.
4. Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**.

| Trường | Nhập gì |
| --- | --- |
| Hotel ID | Hotel ID Inntopia của bạn. |

Nếu **Kiểm tra kết nối** thất bại, hãy kiểm tra lại ID, rồi nhờ bộ phận hỗ trợ của Inntopia xác nhận chỗ nghỉ đã được kết nối với Channex.

## 3. Ánh xạ phòng và mức giá

- **Theo phòng** — một giá cho cả phòng, bất kể ai ở. Ánh xạ gói giá cho số khách tối đa của bạn.
- Chỉ ánh xạ mức giá **RACK**.

Ánh xạ **mọi** phòng và mức giá mà Inntopia hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và Inntopia tiếp tục bán nó theo tình trạng trống cũ.

## 4. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú Inntopia đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

## Nên biết

- Trả lời khách Inntopia trong hộp thư của chính Inntopia — tin nhắn khách từ Inntopia không về Santara AI.

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
