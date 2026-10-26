---
title: "Kết nối Despegar"
description: "Thêm Channex trong extranet Despegar, sao chép API password chỉ hiện một lần, rồi ánh xạ mọi phòng và mức giá."
sidebar:
  order: 12
  label: "Despegar"
---

Cách kết nối Despegar với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho Despegar.

## Trước khi bắt đầu

- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.
- **Không có channel manager hay liên kết iCal nào khác** trên chỗ nghỉ trong Despegar — hai hệ thống cùng cập nhật một lịch sẽ ghi đè lẫn nhau.

## 1. Bật kết nối trong Despegar

Despegar phải cho phép kết nối trước. Channex là đối tác kết nối của Santara AI — đó là tên mà Despegar biết đến chúng tôi.

1. Trong extranet Despegar, mở **General Settings → Channel Manager Connection**.
2. **Tắt hoặc gỡ** mọi kết nối channel manager cũ.
3. Bấm **Add channel manager / PMS**, chọn **Channex**, rồi chấp nhận điều khoản.
4. Sao chép **property ID**, **username** và **API password** mà Despegar hiển thị.

![Extranet Despegar: General Settings → Channel Manager Connection.](/channel-guides/extranet/despegar-menu.webp)

![Các kết nối channel manager trong Despegar — tắt hoặc xoá kết nối cũ.](/channel-guides/extranet/despegar-connections.webp)

![Chọn channel manager trong Despegar và đồng ý điều khoản.](/channel-guides/extranet/despegar-add.webp)

:::danger[Sao chép API password ngay]
Despegar chỉ hiển thị API password một lần. Nếu làm mất, hãy đặt lại kết nối trong Despegar để nhận mật khẩu mới. Mật khẩu extranet thông thường của bạn không dùng được ở đây.
:::

## 2. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **Despegar**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.
4. Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**.

| Trường | Nhập gì |
| --- | --- |
| Hotel ID | Property ID Despegar. |
| Username | Username mà Despegar hiển thị. |
| Password | **API password** — không phải mật khẩu extranet của bạn. |
| Min stay type | Despegar chỉ nhận một loại; chọn loại sẽ gửi đi. |

Nếu **Kiểm tra kết nối** thất bại, hãy kiểm tra lại ID, rồi nhờ bộ phận hỗ trợ của Despegar xác nhận chỗ nghỉ đã được kết nối với Channex.

## 3. Ánh xạ phòng và mức giá

- Ánh xạ từng phòng của kênh với phòng của bạn, và từng mức giá của kênh với một gói giá của bạn.
- Gói giá 1 người trên phòng đôi vẫn ổn — Despegar có thể đặt giá khách phụ trội trong extranet của họ.

Ánh xạ **mọi** phòng và mức giá mà Despegar hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và Despegar tiếp tục bán nó theo tình trạng trống cũ.

## 4. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú Despegar đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

## Nên biết

- Trả lời khách Despegar trong hộp thư của chính Despegar — tin nhắn khách từ Despegar không về Santara AI.

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
