---
title: "Kết nối Vrbo"
description: "Kết nối Vrbo bằng thông tin đăng nhập Vrbo (và mã SMS), sau khi gỡ channel manager cũ và các liên kết iCal, rồi ánh xạ từng listing."
sidebar:
  order: 9
  label: "Vrbo"
---

Cách kết nối Vrbo với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho Vrbo.

## Trước khi bắt đầu

- **Tài khoản Vrbo không được kết nối API với phần mềm khác.** Nếu trước đây có PMS hoặc channel manager kết nối, hãy gửi bộ phận hỗ trợ của Vrbo: *"Please disconnect my account from my current channel manager, I will control the extranet manually."* Chỉ kết nối sau khi họ xác nhận.
- **Gỡ mọi liên kết iCal** trên các listing Vrbo của bạn (từ Airbnb hoặc hệ thống khác). iCal sẽ liên tục ghi đè những gì Santara AI gửi.
- Để sẵn **điện thoại của chủ tài khoản** — Vrbo có thể gửi mã SMS.
- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.

![Tài khoản Vrbo vẫn đang kết nối với phần mềm khác — hãy nhờ Vrbo chuyển đổi trước khi kết nối.](/channel-guides/extranet/vrbo-api-connected.webp)

## 1. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **VRBO**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Nhập **username** và **password** Vrbo của bạn.
4. Bấm **Authenticate** — không phải Kiểm tra kết nối.
5. Nếu Vrbo gửi **mã SMS** tới chủ tài khoản, hãy nhập mã đó.
6. Bấm **Kiểm tra kết nối**. Các listing Vrbo của bạn hiện trên màn hình ánh xạ.

| Trường | Nhập gì |
| --- | --- |
| Username | Tên đăng nhập Vrbo của bạn. |
| Password | Mật khẩu Vrbo của bạn. |

## 2. Ánh xạ phòng và mức giá

- Vrbo ánh xạ **từng listing một**: chọn phòng và gói giá cho mỗi listing bạn muốn kết nối.

Ánh xạ **mọi** phòng và mức giá mà Vrbo hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và Vrbo tiếp tục bán nó theo tình trạng trống cũ.

## 3. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú Vrbo đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

:::caution[Đổi mật khẩu Vrbo sẽ ngắt kết nối]
Nếu mật khẩu tài khoản Vrbo thay đổi, kết nối sẽ bị ngắt. Hãy kết nối lại bằng mật khẩu mới.
:::

## Nên biết

- Giá, tình trạng trống, ràng buộc và đặt phòng (mới, thay đổi, hủy) đều đồng bộ.
- Tiền tệ: **USD, CAD, EUR, AUD, NZD, JPY, SGD, BRL, MXN, GBP**.
- **Tin nhắn khách và đánh giá chưa được hỗ trợ** trên Vrbo.

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
