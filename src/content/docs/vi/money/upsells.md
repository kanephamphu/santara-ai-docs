---
title: Upsell
description: Trả phòng muộn, nhận phòng sớm và đêm tăng thêm, được tìm ra từ lịch và chào trước khi khách kịp nghĩ tới.
sidebar:
  order: 3
---

![Dòng cơ hội upsell: từng cơ hội kèm lượt lưu trú phía sau, giá trị của nó, và bản nháp tin nhắn để chào.](/screens/upsells.vi.png)

Upsell là một đêm hoặc một giờ bạn đã có, bán cho khách đang ở. Santara AI tìm ra chúng bằng cách đọc
lịch, không phải bằng cách đoán khách muốn gì.

## Nó tìm gì

Ba lời chào, mỗi cái là một quy tắc bạn bật, tắt và định giá trong [Cài đặt](#cài-đặt):

| Lời chào | Khi nào được chào | Cách tính giá |
| --- | --- | --- |
| **Nhận phòng sớm** | Vào ngày khách đến, nếu đêm trước còn trống | Phần trăm của một đêm |
| **Trả phòng muộn** | Vào sáng ngày trả phòng, nếu hôm đó không có khách đến | Phần trăm của một đêm |
| **Gia hạn lưu trú** | Trước khi trả phòng, nếu đêm tiếp theo còn trống | Giá mỗi đêm trừ phần giảm giá |

Tất cả đều dựa trên lịch và mang tính tất định: nếu đêm đó thực sự trống và thời điểm phù hợp, cơ hội
tồn tại. Nếu không, không có lời chào nào được tạo ra.

## Xử lý dòng cơ hội

Màn hình **Upsell** xếp hạng các cơ hội đang mở theo giá trị. Với mỗi cơ hội bạn thấy:

- **Dữ kiện phía sau** — lượt đặt, các đêm trống, mức giá dùng làm cơ sở.
- **Vì sao được khuyến nghị** — tín hiệu và độ tin cậy phía sau điểm số.
- **Ràng buộc thời điểm** — khung vận hành, xung đột, và bất cứ điều gì đang kìm nó lại.
- **Bản nháp tin nhắn** gửi khách, sẵn sàng gửi từ [Tin nhắn](/vi/daily/messages/).

Chấp nhận thì nó trở thành lời chào bạn gửi đi. Bỏ qua thì nó ngừng được gợi ý.

### Gửi nhiều lời chào một lúc

**Hàng đợi quản lý** liệt kê các lời chào đã có tin nhắn sẵn sàng. **Gửi tất cả** mở **Gửi tin nhắn bán
thêm** với lời chào giá trị cao nhất của mỗi khách đã được chọn sẵn — mỗi khách một lời chào. Đổi lựa
chọn hoặc bỏ tích bất kỳ mục nào, rồi bấm **Gửi tất cả**: tin nhắn được gửi lần lượt từng cái, tiến độ
của từng khách hiện ra, và **Dừng** sẽ ngưng phần còn lại.

## Khi khách đồng ý

Bạn kéo dài hoặc điều chỉnh lượt lưu trú trong [Đặt phòng](/vi/daily/bookings/) hoặc
[lịch](/vi/daily/calendar/). Các đêm được đóng ở mọi kênh như thường lệ, và doanh thu tăng thêm xuất
hiện trong [Báo cáo](/vi/money/reports/).

Santara AI không âm thầm sửa một lượt đặt thay bạn.

## Lời chào còn xuất hiện ở đâu

- Trong [bản tin hằng ngày](/vi/daily/) — cơ hội giá trị nhất cho khách hôm nay.
- Trong [Tin nhắn](/vi/daily/messages/) — như một gợi ý trong luồng liên quan.

## Khi khách hỏi trước

Khách đã xác nhận đặt phòng trong [sổ tay hướng dẫn](/vi/setup/guidebook/) có thể tự yêu cầu nhận phòng
sớm, trả phòng muộn hoặc ở thêm một đêm, từ nhãn QR trong phòng. Yêu cầu hiện ở đây với trạng thái
**Đã chấp nhận**, đúng mức giá sổ tay đã hiện cho khách, và cả nhóm nhận thông báo. Yêu cầu đã qua cùng
bước kiểm tra lịch như một cơ hội được phát hiện, nhưng đặt phòng không thay đổi cho tới khi bạn điều
chỉnh kỳ lưu trú.

## Cài đặt

Tab **Cài đặt** của Bán thêm đặt từng lời chào một lần cho cả không gian làm việc:

- **Bật / Tắt** cho từng lời chào trong ba lời chào.
- **Giá (% của một đêm)** cho nhận phòng sớm và trả phòng muộn, tính từ giá trên lịch của đêm đó;
  **Giảm giá (% trên giá mỗi đêm)** cho gia hạn lưu trú.
- **Giờ đề xuất** — giờ nhận phòng sớm nhất hoặc trả phòng muộn nhất bạn chào.
- **Tin nhắn gửi khách** — nội dung khách đọc, điền sẵn tin nhắn mặc định của Santara AI theo ngôn ngữ
  không gian làm việc. Chèn các trường như tên khách, giá hoặc giờ; bắt buộc phải có giá. **Đặt lại mặc
  định** đưa nội dung mặc định trở lại.

Mọi phòng đều theo các cài đặt này trừ khi bạn đặt riêng cho một phòng: mở phòng đó từ
[Chỗ nghỉ](/vi/setup/properties/) và đổi quy tắc bán thêm ở đó. **Lưu cài đặt** áp dụng cho lời chào
mới từ lần dò tìm tiếp theo.

## Không gì được gửi tự động

Mọi lời chào đều là bản nháp. Bạn là người gửi — từng cái một, hoặc nhiều cái một lúc với **Gửi tất
cả**. Một khách nhận lời chào tự động cho đêm mà năm phút
trước vừa có người đặt sẽ viết đánh giá về chuyện đó — vì vậy phần này vẫn thủ công.
