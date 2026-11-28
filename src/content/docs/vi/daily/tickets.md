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

![Tab Sự cố dạng bảng: các cột Cần làm, Đang xử lý và Hoàn tất, mỗi thẻ hiện loại phiếu, chỗ nghỉ và phòng, cùng người phụ trách.](/screens/tickets.vi.png)

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
bạn kiểm tra), hoặc dấu **+** ở đầu cột **Cần làm**.

## Bảng phiếu

Phiếu đi qua bốn trạng thái:

| Trạng thái | Nghĩa là |
| --- | --- |
| **Cần làm** | Đang mở, chưa ai bắt đầu |
| **Đang xử lý** | Đã có người làm |
| **Hoàn tất** | Đã sửa xong |
| **Đã hủy** | Không làm nữa |

Chuyển giữa **Bảng** và **Danh sách**. Bảng có ba cột — **Cần làm**, **Đang xử lý** và **Hoàn tất**
— và bạn kéo thẻ sang cột khác để đổi trạng thái. Cột **Hoàn tất** xếp phiếu mới nhất lên đầu, nhóm
theo ngày, và tải thêm phiếu cũ khi bạn cuộn; phiếu đã hủy nằm sau nút **Hiện đã hủy** bên dưới bảng.
Danh sách là một bảng gồm **Phiếu**, **Loại**, **Trạng thái**, **Ưu tiên**, **Người phụ trách** và
**Hạn**.

Phía trên có **Tìm phiếu**, bộ lọc ưu tiên (**Mọi mức ưu tiên**) và nút **Quá hạn** để chỉ xem các
phiếu đã trễ hạn.

Mỗi thẻ hiện loại phiếu, chỗ nghỉ (và phòng), hạn xử lý — được đánh dấu **Quá hạn** khi đã trễ — và
người phụ trách. Thẻ chưa có ai nhận hiện **Giao việc** — hoặc **Chưa giao** nếu bạn không có quyền
giao phiếu.

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

### Lên lịch công việc

**Lên lịch từ / Lên lịch đến** ghi lại những ngày công việc diễn ra — chẳng hạn một lần sửa kéo dài
hai ngày. Nó tách biệt với **Hạn xử lý**, thứ quyết định phiếu có bị đánh dấu **Quá hạn** hay không.

Nó không khóa các đêm đó. Nếu phòng thực sự không bán được, hãy đóng luôn ngày trên
[lịch](/vi/daily/calendar/#khóa-hoặc-mở-lại-ngày).

### Kế hoạch xử lý bằng AI

Nhấn **Tạo chi tiết bằng AI** và bạn nhận được tóm tắt, nguyên nhân khả dĩ, các bước xử lý, gợi ý trả
lời khách, vật tư hoặc nhà cung cấp, và thời gian dự kiến — dựng từ phiếu, chỗ nghỉ và lịch sử của nó.
Đây là điểm khởi đầu cho người sẽ làm — đặc biệt hữu ích khi giao việc cho người chưa từng đến tòa nhà
đó.

Nó soạn nháp. Nó không đặt linh kiện, không nhắn cho khách, và không đóng phiếu.

## Ticket đã đóng ở lại bảng bao lâu

Phiếu đang mở luôn hiển thị. Phiếu **Hoàn tất** được tải thêm khi bạn cuộn cột Hoàn tất. Phiếu **Đã
hủy** ở lại trên bảng **30 ngày sau lần cập nhật cuối**, rồi rời khỏi bảng để bảng chỉ còn việc hiện
tại. Trong danh sách, phiếu đã xong nằm sau nút **Hiện mục đã xong & đã hủy**. Không có gì bị xóa:
phiếu và lịch sử của nó vẫn còn.

## Ai thấy được phiếu

Phiếu theo cùng [quy tắc năng lực](/vi/setup/team/) như mọi thứ khác. Thành viên chỉ lo sửa chữa chỉ
thấy tab Sự cố. Thành viên không có quyền xem phiếu được nói rõ, thay vì thấy một danh sách trống mà họ
sẽ báo là lỗi. Nếu bạn nghĩ mình nên có quyền mà lại không, hãy đề nghị chủ sở hữu hoặc quản lý trong
workspace.
