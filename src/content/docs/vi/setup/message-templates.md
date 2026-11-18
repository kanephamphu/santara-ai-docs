---
title: Mẫu tin nhắn
description: Những câu trả lời bạn hay gửi, viết một lần, với thông tin của khách tự điền vào.
sidebar:
  order: 5
---

**Cài đặt → Mẫu tin nhắn**. Một mẫu là câu trả lời bạn hay gửi, với **biến** tự điền từ lượt lưu trú —
nên "mã cửa của bạn là 4417" chỉ gõ một lần, không phải bốn trăm lần.

Mẫu **thuộc phạm vi workspace**, nên câu trả lời cả đội đã thống nhất là câu trả lời mọi người gửi.

![Mẫu tin nhắn, với các biến tự điền từ lượt lưu trú.](/screens/message-templates.vi.png)

## Biến

Viết một chỗ giữ trong ngoặc nhọn và nó sẽ được điền khi mẫu được dùng:

```
Chào {guest_name}, chúng tôi rất mong đón bạn tại {property_name}.
Nhận phòng từ {check_in_time}. Mã cửa của bạn là {door_code}.
```

Giá trị đến từ khách, lượt đặt của họ, và bất động sản phía sau — tên, bất động sản, giờ nhận và trả
phòng, mã cửa, wifi, số tiền phải trả.

**Một biến chỉ tốt bằng bất động sản phía sau nó.** `{door_code}` trên một bất động sản chưa ghi mã
cửa sẽ không cho ra gì hữu ích — thêm một lý do nữa để điền
[thông tin lưu trú](/vi/setup/properties/#thông-tin-lưu-trú-wifi-mã-cửa-lối-vào).

## Xem trước với dữ liệu thật

Chọn một lượt đặt, bất động sản hoặc khách có thật làm **bối cảnh** trong lúc soạn, và bản xem trước
sẽ điền bằng giá trị thật trong workspace thay vì chỗ giữ. Đó là khác biệt giữa một mẫu trông có vẻ
đúng và một mẫu bạn đã thực sự thấy nó tạo ra câu hoàn chỉnh.

## Mẫu được dùng ở đâu

- **Trong [Tin nhắn](/vi/daily/messages/)** — chèn vào bất kỳ luồng nào, sửa trước khi gửi.
- **Trong bản nháp AI** — gợi ý trả lời của trợ lý dựa trên mẫu của bạn, nên cách diễn đạt vẫn là của
  bạn thay vì quay về một giọng chung chung.

Không gì được gửi tự động. Mẫu điền vào khung; bạn là người bấm gửi.

## Năm mẫu mặc định để nhập

Workspace mới bắt đầu **chưa có mẫu nào**. Bấm **Nhập mẫu mặc định** và năm mẫu sẽ được thêm vào, bao
quát những gì hầu như ai cũng viết:

| Mẫu | Khi nào |
| --- | --- |
| **Nhắc nhận phòng** | Trước giờ nhận phòng: giờ giấc, mã cửa, cách vào |
| **Nhắc trả phòng** | Ngày hôm trước: giờ, chìa khóa, những gì cần để lại |
| **Đề xuất trả phòng muộn** | Khi lịch cho phép — xem [Upsell](/vi/money/upsells/) |
| **Yêu cầu đánh giá** | Sau một lượt lưu trú tốt |
| **Xin lỗi khi có sự cố** | Khi có chuyện không ổn và bạn cần thời gian, một cách trung thực |

Các mẫu được nhập theo ngôn ngữ giao diện bạn đang dùng lúc đó. Mẫu nào trùng tên với mẫu đã có trong
danh sách sẽ được bỏ qua, nên bấm hai lần cũng không tạo bản trùng.

Cứ sửa thoải mái — thay đổi chỉ áp cho mẫu đã lưu đó, và bản mặc định là điểm khởi đầu chứ không phải
thứ sản phẩm liên tục cập nhật.

## Viết theo từng ngôn ngữ

Mẫu là văn bản, nên một workspace phục vụ khách bằng ba ngôn ngữ cần ba bộ. Hãy đặt tên sao cho ngôn
ngữ hiện rõ trong danh sách; không có dịch tự động, và một lời xin lỗi dịch máy còn tệ hơn một lời
ngắn gọn bằng tiếng Anh.
