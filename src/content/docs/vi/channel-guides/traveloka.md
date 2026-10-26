---
title: "Kết nối Traveloka"
description: "Kết nối Channex trong extranet Traveloka, dùng property ID dạng chữ cái mà Traveloka cấp, và ánh xạ mức giá RETAIL theo số khách."
sidebar:
  order: 5
  label: "Traveloka"
---

Cách kết nối Traveloka với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì riêng cho Traveloka.

## Trước khi bắt đầu

- Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.
- **Không có channel manager hay liên kết iCal nào khác** trên chỗ nghỉ trong Traveloka — hai hệ thống cùng cập nhật một lịch sẽ ghi đè lẫn nhau.

## 1. Bật kết nối trong Traveloka

Traveloka phải cho phép kết nối trước. Channex là đối tác kết nối của Santara AI — đó là tên mà Traveloka biết đến chúng tôi.

1. Trong extranet Traveloka, mở mục **channel manager** và chọn **Channex**.
2. Ghi lại **property ID** mà Traveloka cấp cho kết nối. Mã này gồm các chữ cái, ví dụ `LsBxFfgUQcuf` — không phải con số bạn thấy ở chỗ khác trong extranet.

Hoặc nhờ đội hỗ trợ của Traveloka kết nối giúp bạn.

## 2. Kết nối trong Santara AI

1. Mở **Cài đặt → Kênh → Thêm kênh**, tìm **Traveloka**, rồi bấm **Kết nối**.
2. Chọn chỗ nghỉ cần kết nối.
3. Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.
4. Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**.

| Trường | Nhập gì |
| --- | --- |
| Hotel ID | Property ID dạng chữ cái mà Traveloka cấp cho kết nối. |

Nếu **Kiểm tra kết nối** thất bại, hãy kiểm tra lại ID, rồi nhờ bộ phận hỗ trợ của Traveloka xác nhận chỗ nghỉ đã được kết nối với Channex.

## 3. Ánh xạ phòng và mức giá

- **Theo số khách** — mỗi số khách một giá. Nếu phòng chỉ có một giá, hãy ánh xạ cùng gói giá đó cho mọi số khách.
- Mỗi phòng có **một mức giá cần ánh xạ: RETAIL**. Mọi mức giá Traveloka khác đều suy ra từ mức giá này.

Ánh xạ **mọi** phòng và mức giá mà Traveloka hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, và Traveloka tiếp tục bán nó theo tình trạng trống cũ.

## 4. Nhập dữ liệu và go live

Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú Traveloka đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ Santara AI — xem [Go live](/vi/channels/going-live/).

:::note[Gói bữa ăn trên Traveloka]
Traveloka đặt gói bữa ăn trên **phòng**, không phải trên mức giá, nên cùng một phòng có thể hiện nhiều lần — mỗi gói bữa ăn một lần. Hãy ánh xạ từng dòng.
:::

## Nên biết

- Số tiền đặt phòng có thể về kèm hoặc không kèm thuế và hoa hồng. Để khớp với voucher khách sạn của Traveloka, hãy nhờ người phụ trách Traveloka của bạn đổi thiết lập đó trong extranet của họ.
- Trả lời khách Traveloka trong hộp thư của chính Traveloka — tin nhắn khách từ Traveloka không về Santara AI.

Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).
