---
title: Cài đặt workspace
description: Ngôn ngữ, múi giờ, tiền tệ, thông báo, mẫu tin nhắn — những thứ bạn đặt một lần.
sidebar:
  order: 8
---

**Cài đặt** là một trang với nhiều tab, và mọi tab ở đó đều thuộc về **workspace** mà cả nhóm dùng
chung. Tài khoản của riêng bạn cố ý không nằm trong số đó — nó ở sau menu tài khoản cuối thanh bên,
vì đó là nơi người ta tìm mật khẩu của chính mình. Xem
[Tài khoản và bảo mật của bạn](/vi/setup/account/).

| Tab | Phạm vi |
| --- | --- |
| **Không gian làm việc** | Dùng chung — tên, ngôn ngữ, múi giờ, tiền tệ |
| **Kênh** | Dùng chung — [kết nối kênh](/vi/channels/), cùng tab **Ứng dụng** (bên dưới) |
| **Mẫu tin nhắn** | Dùng chung — câu trả lời đã lưu |
| **Đội ngũ** | Dùng chung — [người và vai trò](/vi/setup/team/) |
| **Thanh toán** | Dùng chung — [gói và hóa đơn](/vi/setup/billing/) |

[Website đặt phòng](/vi/setup/booking-site/) của bạn không phải là một tab Cài đặt: nó có mục riêng,
**Trang đặt phòng**, trên thanh bên, vì khách tiềm năng và yêu cầu đặt phòng ở đó cần xử lý hằng tuần.

### Ứng dụng đã kết nối

**Cài đặt → Kênh → Ứng dụng** liệt kê các ứng dụng bạn đã cho phép dùng tài khoản Santara AI của mình
— ví dụ [Santi](/vi/help/santi-app/) — kèm những gì mỗi ứng dụng làm được và nút **Ngắt kết nối**.
Mục **Ứng dụng đã kết nối** trong menu tài khoản mở đúng tab này. Danh sách này là của riêng bạn: chỉ
bạn thấy, và đồng đội tự quản lý ứng dụng của họ.

![Cài đặt workspace: giờ và ngôn ngữ bản tin hằng ngày, múi giờ, tiền tệ và phần còn lại.](/screens/workspace-settings.vi.png)

## Ngôn ngữ

Giao diện Santara AI có sẵn bằng **English, Bahasa Indonesia và Tiếng Việt**.

- Cài đặt ngôn ngữ của **bạn** đổi giao diện cho bạn.
- Ngôn ngữ của **workspace** quyết định [bản tin hằng ngày](/vi/daily/) được viết bằng ngôn ngữ
  nào, và là mặc định cho mọi thứ workspace tạo ra cho cả nhóm.

Hai thứ này tách nhau có chủ ý: một quản lý nói tiếng Việt có thể làm việc bằng tiếng Việt trong một
workspace mà bản tin hằng ngày được gửi bằng tiếng Indonesia cho đội dọn phòng.

## Múi giờ

Múi giờ của workspace quyết định "hôm nay" nghĩa là gì — cho lượt đến, dọn phòng, bản tin hằng ngày, và mọi
ngày trên mọi báo cáo. Hãy đặt theo nơi có bất động sản, không phải nơi bạn đang ở.

## Tiền tệ

Tiền tệ của workspace là đơn vị hiển thị các con số. [Website đặt phòng](/vi/setup/booking-site/) của
bạn có cài đặt tiền tệ riêng cho những gì khách thấy.

## Tùy chọn vận hành

Tab workspace chứa những thiết lập thay đổi cách sản phẩm hoạt động với mọi người trong đó:

| Thiết lập | Tác dụng |
| --- | --- |
| **Giờ báo cáo hằng ngày** | Khi nào [bản tin hằng ngày](/vi/daily/) được tạo mỗi ngày |
| **Ngôn ngữ báo cáo hằng ngày** | Nó được viết bằng ngôn ngữ nào — tách khỏi ngôn ngữ giao diện |
| **Múi giờ workspace** | "Hôm nay" nghĩa là gì, ở mọi nơi |
| **Tiền tệ hiển thị** | Đơn vị hiển thị các con số |
| **Giọng điệu tin nhắn mặc định** | Giọng mà bản nháp trả lời khách bắt đầu từ đó |
| **Giá trị upsell tối thiểu** | Cơ hội thấp hơn mức này không được đưa lên, để dòng cơ hội còn đáng đọc |
| **Mở Bản tin hằng ngày trước** | Khởi động ứng dụng ở bản tin hằng ngày thay vì bảng điều khiển |
| **Cảnh báo khách đến trong ngày** | Gửi email cho nhóm khi có đặt phòng cho khách nhận phòng hôm nay — mặc định bật |
| **Kênh thông báo** | Hiện tại là bảng điều khiển; email và SMS chưa nối |

### Cảnh báo khách đến trong ngày

Đặt phòng cho **hôm nay** là loại dễ trục trặc nhất: phòng có thể chưa kịp dọn. Khi một đặt phòng được
tạo — hoặc bị hủy — cho khách nhận phòng hôm nay (theo múi giờ workspace), email được gửi ngay, dù đặt
phòng đến từ kênh bán, website đặt phòng của bạn hay được nhập tay.

- **Quản lý và co-host** nhận email khách đến (hoặc hủy) hôm nay, gồm thông tin lưu trú, liên hệ của
  khách, số tiền và khung giờ dọn phòng. Nếu ca dọn sẽ xong muộn, email nói rõ và yêu cầu quyết định.
- **Nhân viên dọn của phòng đó** nhận email dọn phòng hôm nay (hoặc báo hủy ca dọn) kèm phiếu công việc.
- Người nhập đặt phòng không nhận email về đặt phòng của chính mình.

Đổi ngày không gửi email; thay đổi đó hiện trong [chuông](#thông-báo). Chỉ chủ workspace hoặc admin mới
tắt được cảnh báo này.

Còn có **tên và ảnh đại diện** của workspace — logo hiển thị ở thanh bên và ở trình chuyển workspace,
thứ khiến hai workspace không trông giống hệt nhau khi liếc qua.

## Thông báo

Chiếc chuông trên thanh đầu trang. Thông báo được gửi theo **ai có thể xử lý** thay vì theo tên — nhờ
vậy một quản lý được thêm vào tháng sau lập tức nhận đúng những thông báo vốn dành cho vai trò đó.

Có mười sáu loại:

- **Đặt phòng** — lượt đặt **được tạo**, **thay đổi** hoặc **bị hủy**, và **Trùng phòng**: một phòng
  bị bán quá số phòng còn trống vào một đêm sắp tới, nên phải chuyển một lượt lưu trú.
- **Dọn phòng** — ca dọn **được giao** cho bạn, hoặc **đã hoàn tất**.
- **Phiếu xử lý** — phiếu **được mở**, **được giao** cho bạn, **đang xử lý** hoặc **hoàn tất**. Hai
  loại sau được gửi cho người đã giao phiếu.
- **Kênh** — **đã kết nối kênh**, cho biết kênh, chỗ nghỉ và số phòng đã được ghép; kênh **không nhận
  bản cập nhật**, nên giá hoặc tình trạng phòng ở đó có thể đã cũ; và **cảnh báo đồng bộ**, khi bản cập
  nhật đã qua nhưng nên xem lại.
- **Yêu cầu từ khách** — dịch vụ thêm khách xin qua
  [sổ tay hướng dẫn](/vi/setup/guidebook/#khi-khách-yêu-cầu-dịch-vụ-bán-thêm), cho biết khách, dịch vụ,
  giá và phòng.
- **Trợ lý AI** — một trợ lý bên ngoài như ChatGPT hay Claude **cần bạn duyệt**, hoặc **đã tự thay
  đổi**. Chỉ người sở hữu kết nối mà trợ lý dùng mới được báo.

Mọi thứ khác mà sản phẩm
biết đều nằm trên màn hình của nó chứ không nằm trong chuông, và đó là chủ ý — một danh sách thông
báo kể những chuyện bạn không xử lý được sẽ không còn ai đọc.

**Âm báo tin nhắn mới được đặt theo từng thiết bị**, không phải ở đây: menu tài khoản → **Cài đặt cá
nhân** → **Thông báo trên thiết bị này** → **Âm báo tin nhắn**. Cài đặt chỉ lưu trên trình duyệt đó.

:::note[Lần đồng bộ đầu tiên cố tình im lặng]
Kết nối một kênh sẽ nhập lịch sử đặt phòng của bạn, đôi khi cả một năm. Đó không phải đặt phòng mới và
bạn không nhận thông báo về chúng — chỉ về những gì xảy ra sau khi bạn kết nối.
:::

## Mẫu tin nhắn

Câu trả lời đã lưu với chỗ giữ tự điền từ lượt lưu trú — tên khách, giờ nhận phòng, mật khẩu wifi, mã
cửa, số tiền phải trả. Dùng chung trong workspace, nên câu trả lời cả đội đã thống nhất là câu trả lời
mọi người gửi.

Cách viết, xem trước với một lượt đặt có thật, và năm mẫu mặc định bạn có thể nhập:
**[Mẫu tin nhắn](/vi/setup/message-templates/)**.

## Chuyển workspace

Menu tài khoản liệt kê mọi workspace bạn tham gia. Mỗi cái có bất động sản, đội ngũ, thanh toán và
website đặt phòng riêng; không gì được chia sẻ giữa chúng.
