---
title: Sự cố (phiếu xử lý)
description: Tab Sự cố trong Công việc — phàn nàn và bảo trì theo dõi từ Cần làm đến Hoàn tất, phần lớn do sản phẩm tự mở, không phải bạn.
sidebar:
  order: 4
---

**Phiếu xử lý** (ticket) là bất cứ thứ gì cần sửa hoặc cần theo đuổi: máy lạnh hỏng, khách phàn nàn,
một chuyến đưa đón sân bay cần sắp xếp. Phiếu nằm ở tab **Sự cố** trong [Công việc](/vi/daily/tasks/)
— **Công việc → Sự cố**. Thanh bên không còn mục Ticket riêng; đường dẫn Ticket cũ sẽ mở tab này.

Phiếu là nội bộ. **Khách không bao giờ thấy**, kể cả phiếu mở ra từ chính tin nhắn của họ.

![Tab Sự cố: phiếu theo trạng thái, người phụ trách, và chỗ nghỉ nó đến từ.](/screens/tickets.vi.png)

## Phiếu tự mở

Phần lớn phiếu không do con người tạo. Một tin nhắn khách đọc ra như lời phàn nàn hoặc sự cố bảo trì
sẽ tự mở một phiếu, liên kết ngược về luồng hội thoại và chỗ nghỉ — để việc sửa chữa được theo dõi ở
nơi khác ngoài một cuộc trò chuyện rồi sẽ trôi mất.

Ba quy tắc giữ cho nó không thành tạp âm:

- **Một luồng, một phiếu, mãi mãi.** Dù việc phân loại chạy bao nhiêu lần, một hội thoại đã sinh ra
  phiếu sẽ không sinh ra phiếu thứ hai.
- **Chỉ hai tuần gần nhất.** Một luồng không ai đụng tới trong hai tuần là lịch sử, không phải việc.
- **Không tràn ngập trong ngày đầu.** Kết nối cả năm lịch sử tin nhắn không mở ba trăm phiếu — chỉ
  những cái gần đây mà ai đó còn xử lý được.

Bạn cũng có thể tạo thủ công: **Phiếu mới** ở tab Sự cố, **Tạo ticket** từ một hội thoại với khách
trong [Tin nhắn](/vi/daily/messages/) (ở đó **Điền bằng AI** đọc hội thoại và điền sẵn các trường để
bạn kiểm tra), hoặc chọn ngày trên [lịch](/vi/daily/calendar/).

## Bảng phiếu

Phiếu đi qua bốn trạng thái:

| Trạng thái | Nghĩa là |
| --- | --- |
| **Cần làm** | Đang mở, chưa ai bắt đầu |
| **Đang xử lý** | Đã có người làm |
| **Hoàn tất** | Đã sửa xong |
| **Đã hủy** | Không làm nữa |

Chuyển giữa **Bảng** — mỗi trạng thái một cột, kéo thẻ sang cột khác để đổi trạng thái — và **Danh
sách**, một bảng gồm **Phiếu**, **Loại**, **Trạng thái**, **Ưu tiên**, **Người phụ trách** và **Hạn**.

Phía trên có **Tìm phiếu**, bộ lọc ưu tiên (**Mọi mức ưu tiên**) và nút **Quá hạn** để chỉ xem các
phiếu đã trễ hạn.

Mỗi thẻ hiện hạn xử lý, được đánh dấu **Quá hạn** khi đã trễ, và người phụ trách — hoặc **Chưa giao**.

## Xử lý một phiếu

Mở phiếu để xem toàn bộ hồ sơ:

| | |
| --- | --- |
| **Trạng thái** | Cần làm, Đang xử lý, Hoàn tất hoặc Đã hủy |
| **Ưu tiên** | Thấp, Trung bình, Cao hoặc Khẩn cấp |
| **Loại** | Phàn nàn, Bảo trì, Đưa đón sân bay hoặc Khác |
| **Người phụ trách** | Một thành viên hoặc một nhân viên dọn phòng. Họ nhận thông báo khi được giao |
| **Hạn xử lý** | Phải xong trước khi nào. Trễ hạn thì phiếu hiện **Quá hạn** |
| **Chỗ ở và phòng** | Lấy từ tin nhắn mà phiếu bắt nguồn |
| **Luồng hội thoại của khách** | **Tạo trong** dẫn ngược về hội thoại, để bạn trả lời mà không mất ngữ cảnh |
| **Ảnh** | Bằng chứng **Trước** và **Sau**, mỗi ảnh tối đa 5 MB |
| **Lên lịch từ / đến** | Một khoảng ngày — xem bên dưới |
| **Lịch sử** | Mọi thay đổi: tạo phiếu, trạng thái, giao việc, đặt hoặc xóa hạn, tạo kế hoạch AI |

Khi người phụ trách chuyển phiếu sang **Đang xử lý** hoặc **Hoàn tất**, người đã giao phiếu sẽ nhận
thông báo.

Phiếu **Đưa đón sân bay** còn có **Giờ đón**. Tên và số điện thoại của khách hiện ra trên phiếu từ một
ngày trước giờ đón.

### Lên lịch nghĩa là đưa nó lên lịch làm việc

Đặt cho phiếu khoảng **Lên lịch từ / Lên lịch đến** và **nó được vẽ trên [lịch](/vi/daily/calendar/)**
qua những đêm đó. Một lần sửa hai ngày khi đó nằm rõ ràng cạnh các lượt đặt xung quanh — và đó chính
là điểm mấu chốt: bạn thấy được nó có đụng vào một lượt khách đến hay không trước khi cam kết.

Nó không tự khóa các đêm đó. Nếu phòng thực sự không bán được, hãy đóng luôn ngày trên lịch.

### Kế hoạch xử lý bằng AI

Nhấn **Tạo chi tiết bằng AI** và bạn nhận được tóm tắt, nguyên nhân khả dĩ, các bước xử lý, gợi ý trả
lời khách, vật tư hoặc nhà cung cấp, và thời gian dự kiến — dựng từ phiếu, chỗ nghỉ và lịch sử của nó.
Đây là điểm khởi đầu cho người sẽ làm — đặc biệt hữu ích khi giao việc cho người chưa từng đến tòa nhà
đó.

Nó soạn nháp. Nó không đặt linh kiện, không nhắn cho khách, và không đóng phiếu.

## Ticket đã đóng ở lại bảng bao lâu

Phiếu đang mở luôn hiển thị. Phiếu **Hoàn tất** và **Đã hủy** ở lại trên bảng **30 ngày sau lần cập
nhật cuối**, rồi rời khỏi bảng để bảng chỉ còn việc hiện tại. Dùng **Hiện mục đã xong & đã hủy** để
xem lại. Không có gì bị xóa: phiếu và lịch sử của nó vẫn còn.

## Ai thấy được phiếu

Phiếu theo cùng [quy tắc năng lực](/vi/setup/team/) như mọi thứ khác. Thành viên chỉ lo sửa chữa chỉ
thấy tab Sự cố. Thành viên không có quyền xem phiếu được nói rõ, thay vì thấy một danh sách trống mà họ
sẽ báo là lỗi. Nếu bạn nghĩ mình nên có quyền mà lại không, hãy đề nghị chủ sở hữu hoặc quản lý trong
workspace.
