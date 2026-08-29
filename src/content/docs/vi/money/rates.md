---
title: Giá và tình trạng trống
description: Giá theo từng ngày, bao nhiêu đơn vị bán được, và những quy tắc lưu trú đi kèm ra các kênh của bạn.
sidebar:
  order: 2
---

[Smart pricing](/vi/money/pricing/) quyết định hình dạng của cả năm. Đây là nơi bạn đặt một đêm cụ thể
bằng tay, và cũng là nơi những quy tắc không phải giá — số đêm tối thiểu, bao nhiêu đơn vị bán được —
sinh sống.

Mở từ một bất động sản: **Bất động sản → chọn bất động sản → Giá**.

![Lưới giá: tình trạng trống ở trên, giá ở dưới, và chú giải cách sửa cả một khoảng.](/screens/rates.vi.png)

## Lưới

Phòng và rate plan của chúng ở bên trái, ngày chạy ngang phía trên. **Bấm một ô để sửa, hoặc
shift-bấm một ô khác trên cùng hàng để sửa cả khoảng** giữa hai ô — đó là cách bạn định giá một tuần
mà không phải chạm vào bảy ô.

| Trường | Nghĩa là |
| --- | --- |
| **Giá** | Giá mỗi đêm cho ngày đó trên rate plan đó. Nó được xuất bản sang các kênh đã kết nối |
| **Đơn vị** | Bao nhiêu phòng loại đó bán được trong đêm ấy. Bị chặn ở số đơn vị của phòng — số cao hơn sẽ bị từ chối, và các lượt đặt làm giảm phần còn lại |
| **Số đêm tối thiểu** | Áp cho cả quy tắc ngày đến lẫn lưu trú xuyên suốt |
| **Đã đóng** | Không ai đặt được đêm đó, ở bất kỳ kênh nào |

**Lưu là đẩy một bản cập nhật gộp sang các kênh.** Không có bước xuất bản riêng, và không có trạng
thái nháp — thứ bạn lưu chính là thứ các kênh được báo.

## Rate plan

**Rate plan** là giá của một phòng cùng các quy tắc của nó: bao nhiêu khách đã bao gồm, khách phụ trội
tính bao nhiêu, điều khoản hủy, và các ràng buộc ở trên. Một phòng có thể có nhiều hơn một — một giá
linh hoạt và một giá không hoàn hủy rẻ hơn.

Các plan được **phản chiếu với những kênh bạn đã kết nối**. Sửa ở đây thì đồng bộ đi ra; một plan tạo
ở phía kênh sẽ xuất hiện tại đây sau khi làm mới, không phải gõ lại.

Các trường ràng buộc trên một plan áp cho **mọi ngày**. Để trống một trường là giữ nguyên giá trị
channel manager đang có — trống nghĩa là "đừng quản lý cái này", không phải "đặt về 0".

:::caution[Booking.com cần các mức sức chứa được định giá]
Nếu một rate plan không có giá cho số khách mà Booking.com chấp nhận, phòng đó sẽ ở nguyên trạng thái
*đã liên kết nhưng chưa ánh xạ* — Santara sẽ không đoán giá trên một listing đang bán. Hãy định giá
cho mức sức chứa đó trên plan, rồi ánh xạ lại. Xem
[Kết nối Booking.com](/vi/channels/booking-com/).
:::

## Đồng bộ toàn phần

**Đẩy 500 ngày tình trạng trống và giá cho mọi phòng** của bất động sản, dưới dạng hai lần cập nhật
kênh. Dùng khi bạn nghi một kênh đã lệch nhịp — sau một sự cố, hoặc sau khi sửa ở phía kênh.

Nó an toàn để chạy và nó không phải cách sửa lỗi ánh xạ: nếu một listing trỏ sai phòng, đồng bộ toàn
phần chỉ gửi dữ liệu sai nhanh hơn. Hãy kiểm tra [ánh xạ](/vi/channels/listings/) trước.

## Cái gì thắng cái gì

Từ mạnh nhất trở xuống:

1. **Đã đóng** — không gì bán được, giá có là bao nhiêu cũng vậy.
2. **Khoảng mà kênh chấp nhận** — thu hẹp giá của bạn; không bao giờ nới ra.
3. **Sàn và trần của bạn** trong [cài đặt định giá](/vi/money/pricing/) — định giá tự động không bao
   giờ vượt qua.
4. **Giá bạn gõ ở đây** — được bảo vệ khỏi bộ máy định giá trừ khi bạn cho phép ghi đè giá nhập tay.
5. **Các quy tắc định giá** — phần còn lại.

## Khi lưới trống

*"Chưa có phòng nào có rate plan chỉnh sửa được"* nghĩa là bất động sản có phòng nhưng chưa phòng nào
có rate plan để định giá. Thêm một cái từ phòng đó, rồi quay lại đây.
