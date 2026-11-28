---
title: Giá và tình trạng trống
description: Giá theo từng ngày, bao nhiêu đơn vị bán được, và những quy tắc lưu trú đi kèm ra các kênh của bạn.
sidebar:
  order: 2
---

[Smart pricing](/vi/money/pricing/) quyết định hình dạng của cả năm. Đây là nơi bạn đặt một đêm cụ thể
bằng tay, và cũng là nơi những quy tắc không phải giá — số đêm tối thiểu, bao nhiêu đơn vị bán được —
sinh sống.

Mở nó từ **Giá → Lịch giá**, ở chế độ xem **Lưới**, rồi chọn chỗ nghỉ và phòng ở phía trên.

![Tab Lịch giá của màn hình Giá ở chế độ Lưới: ô chọn chỗ nghỉ và phòng, nút chuyển Lưới / Năm, Sửa giá và Đồng bộ ngay, số liệu 14 đêm tới, So sánh thị trường, và lưới với hàng Còn bán phía trên giá mỗi đêm của gói giá.](/screens/rates.vi.png)

## Lưới

Phòng và gói giá của chúng ở bên trái, ngày chạy ngang phía trên, với hàng **Còn bán** phía trên các
gói giá của mỗi phòng. **Bấm một đêm, rồi bấm thêm một đêm khác trên cùng hàng — hoặc kéo — để chọn
nhiều đêm**; shift-bấm cũng mở rộng khoảng chọn. Đó là cách bạn định giá một tuần mà không phải chạm
vào bảy ô.

Một ô nhỏ **Ngày đã chọn** sẽ hỏi bạn muốn làm gì với khoảng đó: **Sửa giá & quy định** hoặc **Xem
giá** — ở hàng Còn bán thì là **Sửa số phòng mở bán** hoặc **Xem tình trạng phòng**. Trình sửa gồm:

| Trường | Nghĩa là |
| --- | --- |
| **Giá mỗi đêm** | Giá mỗi đêm cho những ngày đó trên gói giá đó. Nó được xuất bản sang các kênh đã kết nối |
| **Số phòng mở bán** | Bao nhiêu phòng loại đó bán được mỗi đêm. Bị chặn ở số đơn vị của phòng, và các lượt đặt trừ dần vào đó |
| **Mở bán** | **Giữ** để nguyên như hiện tại; **Mở bán**, hoặc **Đã đóng** — không ai đặt được những đêm đó, ở bất kỳ kênh nào |
| **Quy định lưu trú** | Số đêm tối thiểu (áp cho cả quy tắc ngày đến lẫn lưu trú xuyên suốt), số đêm tối đa, **Không nhận phòng** và **Không trả phòng**, mỗi mục đều có lựa chọn Giữ như trên |

Với một đêm đơn lẻ, **Vì sao có giá này & lịch sử** cho thấy mức giá, ai đặt nó — bạn, định giá
động, PriceLabs hay dữ liệu nhập — lý do, giá bán trên từng kênh và đã tới kênh hay chưa, kèm **Xem
lịch sử thay đổi** của đêm đó.

**Thêm vào danh sách chờ** chỉ tạm giữ thay đổi; **chưa có gì được gửi cho tới khi bạn bấm Lưu tất
cả** trên thanh đếm số thay đổi chưa lưu, nơi **Xem lại** liệt kê chúng và **Hủy tất cả** bỏ chúng
đi. Lưu là đẩy một bản cập nhật gộp sang các kênh — không có bước xuất bản riêng. Đêm nào còn chờ gửi
sẽ có biểu tượng đồng hồ.

Phía trên lưới, **Giá trên** chuyển giữa giá của bạn và giá mà một kênh đang bán; các nhãn kênh dưới
mỗi gói giá mở mức điều chỉnh của kênh đó (xem [Giá trên kênh](/vi/money/pricing/#giá-trên-kênh)); và
**Lịch sử** liệt kê 50 thay đổi gần nhất về giá, quy định lưu trú và số phòng tại chỗ nghỉ.

## Rate plan

**Rate plan** là giá của một phòng cùng các quy tắc của nó: bao nhiêu khách đã bao gồm, khách phụ trội
tính bao nhiêu, điều khoản hủy, và các ràng buộc ở trên. Một phòng có thể có nhiều hơn một — một giá
linh hoạt và một giá không hoàn hủy rẻ hơn.

Các plan được **phản chiếu với những kênh bạn đã kết nối**. Sửa ở đây thì đồng bộ đi ra; một plan tạo
ở phía kênh sẽ xuất hiện tại đây sau khi làm mới, không phải gõ lại.

Các trường ràng buộc trên một plan áp cho **mọi ngày**. Để trống một trường là giữ nguyên giá trị
kênh đang có — trống nghĩa là "đừng quản lý cái này", không phải "đặt về 0".

:::caution[Booking.com cần các mức sức chứa được định giá]
Nếu một rate plan không có giá cho số khách mà Booking.com chấp nhận, phòng đó sẽ ở nguyên trạng thái
*đã liên kết nhưng chưa ánh xạ* — Santara AI sẽ không đoán giá trên một listing đang bán. Hãy định giá
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
3. **Sàn và trần của bạn** trong [Sửa giá](/vi/money/pricing/#các-con-số-của-listing) — định giá tự
   động không bao giờ vượt qua.
4. **Giá bạn gõ ở đây** — được bảo vệ khỏi bộ máy định giá trừ khi bạn cho phép ghi đè giá nhập tay.
5. **Các quy tắc định giá** — phần còn lại.

## Khi lưới trống

*"Chưa có phòng nào kèm gói giá có thể chỉnh sửa"* nghĩa là bất động sản có phòng nhưng chưa phòng nào
có rate plan để định giá. Thêm một cái từ phòng đó, rồi quay lại đây.
