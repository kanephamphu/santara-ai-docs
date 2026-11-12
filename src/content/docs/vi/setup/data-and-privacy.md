---
title: Dữ liệu và quyền riêng tư của bạn
description: Santara AI lưu gì, ai trong workspace của bạn xem được, cái gì đi ra ngoài, cách lấy dữ liệu về, và điều gì xảy ra khi bạn xóa thứ gì đó.
sidebar:
  order: 10
---

Bạn đang đưa thông tin khách của mình vào phần mềm của người khác. Trang này là câu trả lời vận hành
cho điều đó — cái gì được lưu, ai chạm tới được, và làm sao lấy lại.

Văn bản pháp lý là [chính sách quyền riêng tư](https://www.santara.ai/vi/quyen-rieng-tu/). Trang này
là cách nó vận hành trên thực tế.

## Ai kiểm soát dữ liệu

Santara AI là sản phẩm của **AirCierge AI LLC**, đăng ký tại Wyoming, Hoa Kỳ, với đội vận hành tại
Đà Nẵng, Việt Nam. Câu hỏi và yêu cầu về dữ liệu gửi tới **hello@santara.ai**, hoặc qua
[hỗ trợ](/vi/help/support/) từ trong sản phẩm, nơi tin nhắn đi kèm sẵn workspace của bạn.

**Dữ liệu chủ nhà và khách của bạn không được bán.** Không cho ai, dưới bất kỳ hình thức nào.

## Những gì được lưu

Đại thể là mọi thứ sản phẩm cần để vận hành ngày của bạn:

| Loại | Ví dụ |
| --- | --- |
| **Bất động sản** | Tòa nhà, phòng, ảnh, nội quy, wifi, mã cửa, ghi chú lối vào |
| **Thương mại** | Giá, rate plan, tình trạng trống, quy tắc định giá, chi phí, bảng kê chủ sở hữu |
| **Đặt phòng** | Lượt lưu trú, ngày, trạng thái, doanh thu gộp, doanh thu phòng, payout ròng |
| **Khách** | Tên, thông tin liên hệ khi kênh chia sẻ, lịch sử lưu trú, tin nhắn |
| **Vận hành** | Lượt dọn, ticket, ghi chú, ai làm gì và khi nào |
| **Tài khoản** | Tên, email, ngôn ngữ, múi giờ, và bản băm mật khẩu của bạn |

Mật khẩu được lưu dưới dạng **băm PBKDF2 với 310.000 vòng lặp**, không bao giờ ở dạng văn bản thô.
Không ai ở Santara AI đọc được mật khẩu của bạn, và chúng tôi cũng không khôi phục được — vì thế việc
đặt lại sẽ cấp mật khẩu mới thay vì cho bạn biết mật khẩu cũ.

## Ai trong workspace xem được

Không phải "mọi người có tài khoản". Quyền truy cập được quyết định trên ba trục riêng biệt, và cả
ba phải đồng thuận:

1. **Năng lực** — mỗi màn hình *và mỗi route API* đều đòi một quyền có tên (`stay.read`,
   `pricing.write`, `guest.message.send`). Ẩn một mục menu không phải là bảo mật; chính route mới từ
   chối đường dẫn ai đó tự gõ.
2. **Phạm vi** — người đó gắn với tòa nhà và phòng nào. Thành viên bị giới hạn hoàn toàn không thấy
   phần còn lại của danh mục.
3. **Lớp dữ liệu** — mã cửa, thông tin liên hệ khách và các con số tài chính, mỗi thứ là một lớp
   riêng, độc lập với màn hình mà chúng xuất hiện.

Trục thứ ba là thứ người ta hay bỏ sót. Nhờ nó, một nhân viên dọn phòng biết được công việc ở tòa
nhà nào mà không được trao mã cửa, và một quản lý vận hành được công việc mà không thấy payout của
chủ sở hữu. Xem
[Quyền truy cập thực sự hoạt động ra sao](/vi/setup/team/#quyền-truy-cập-thực-sự-hoạt-động-ra-sao).

**Không có gì được chia sẻ giữa các workspace, không bao giờ.** Nếu bạn chạy hai danh mục dưới dạng
hai workspace, đó là hai thế giới tách biệt dù bạn đăng nhập vào cả hai.

## AI thấy được gì

[Trợ lý](/vi/help/assistant/) trả lời dựa trên workspace của bạn — đó chính là mục đích của nó —
nhưng dưới những giới hạn thật:

- **Nó dùng quyền của bạn, không phải quyền của nó.** Nhân viên dọn phòng hỏi về doanh thu sẽ được
  trả lời là họ không có quyền, chứ không nhận được con số.
- **Workspace đến từ phiên đăng nhập của bạn**, không bao giờ từ thứ bạn hay nó gõ ra. Không thể
  thuyết phục nó chuyển sang workspace khác.
- **Mọi thay đổi nó làm đều được đề xuất trước và chờ bạn duyệt.** Nó đọc thoải mái, nhưng bất cứ
  việc gì làm thay đổi dữ liệu — gửi trả lời cho khách, tạo ticket, giao việc dọn phòng hoặc
  ticket, đổi trạng thái ticket, hay tạo, sửa hoặc hủy đặt phòng — đều hiện thành một thẻ để bạn
  xác nhận. Không có gì xảy ra cho tới khi bạn bấm **Xác nhận**. Nó không đổi được giá, không đưa
  listing lên chạy và không chuyển tiền.

Tin nhắn khách, bản tóm tắt và bản nháp được xử lý bởi **nhà cung cấp mô hình AI bên thứ ba** theo
hợp đồng, như [chính sách quyền riêng tư](https://www.santara.ai/vi/quyen-rieng-tu/) mô tả. Kết quả
AI có thể sai — bản tóm tắt, bản nháp và tín hiệu giá đều là những thứ bạn xem lại trước khi hành
động. Không gì được gửi tới khách trừ khi bạn bấm gửi hoặc xác nhận — hoặc chính bạn bật tự động trả
lời.

Nếu bạn [kết nối ChatGPT hoặc Claude](/vi/help/ai-assistants/), trợ lý đó truy cập workspace của bạn
qua `mcp.santara.ai` bằng quyền của bạn, và những gì nó đọc được xử lý bởi nhà cung cấp trợ lý đó,
theo tài khoản riêng của bạn với họ.

## Khi nhân viên Santara AI mở workspace của bạn

Để xử lý sự cố bạn báo, nhân viên Santara AI có thể mở workspace của bạn với **quyền quản trị**.
Quyền đó:

- **Kéo dài tối đa 2 giờ**, rồi tự hết hạn. Nhân viên có thể thoát sớm hơn.
- **Được ghi lại mỗi lần** — ai mở workspace nào, lúc nào và vì sao — trong nhật ký kiểm tra.
- **Hiện với họ thành một dải băng đỏ** ở đầu mọi màn hình trong suốt thời gian truy cập, nhắc rằng
  mọi thay đổi họ làm là thật.

Nhân viên không bao giờ được thêm vào danh sách đội của bạn, và không nhận thông báo hay bản tin
của bạn.

## Cái gì rời khỏi workspace của bạn

| Đi tới | Cái gì, và vì sao |
| --- | --- |
| **Các kênh đặt phòng của bạn** — Airbnb, Booking.com, Google Hotel và các kênh khác bạn kết nối | Tình trạng trống, giá và ràng buộc đi ra, cùng nội dung chỗ nghỉ: ảnh, mô tả, nội quy và chính sách hủy, tiện nghi. Đặt phòng, khách, tin nhắn và đánh giá đi vào. Tất cả qua nhà cung cấp kết nối kênh của chúng tôi |
| **Nhà cung cấp mô hình AI** | Phần văn bản cần để viết bản tóm tắt, soạn nháp trả lời hoặc chấm điểm cơ hội |
| **Trợ lý AI bạn kết nối** — ChatGPT, Claude | Những gì bạn hoặc đội của bạn hỏi chúng, qua `mcp.santara.ai` — xem [Kết nối ChatGPT, Claude hoặc Grok](/vi/help/ai-assistants/) |
| **Stripe** | Thẻ của bạn, cho gói thuê bao. Santara AI không bao giờ thấy số thẻ |
| **Stripe, tài khoản của chính bạn** | Thanh toán đặt phòng trực tiếp — xem bên dưới |
| **Email** | Lời mời, mã xác minh và mã đặt lại, cùng những gì bạn chủ động gửi |

Không có gì khác. Trong danh sách này không có mạng quảng cáo và không có nhà môi giới dữ liệu.

## Tiền trên website đặt phòng của bạn

Thanh toán từ [website đặt phòng trực tiếp](/vi/setup/booking-site/) đi thẳng **vào tài khoản Stripe
của chính bạn**, không phải của chúng tôi. Santara AI không bao giờ giữ tiền của khách.

Santara AI lấy **3% hoa hồng** trên đặt phòng trực tiếp.

## Lấy dữ liệu ra

- **Báo cáo** — bảng kê cho chủ nhà cùng các khoản chi xuất ra CSV bằng
  [Tải CSV](/vi/money/reports/#tải-csv), cho bất kỳ kỳ nào và bất kỳ nhóm listing nào.
- **Hóa đơn** — từ chính cổng của Stripe, qua
  [Quản lý thanh toán](/vi/setup/billing/#quản-lý-thanh-toán).
- **Tài liệu này** — mỗi trang cũng có bản markdown, nếu bạn muốn chính bộ tài liệu
  ([Dùng tài liệu này với công cụ AI](/vi/help/for-ai-tools/)).

Để xuất đầy đủ ngoài phạm vi báo cáo — hoặc để xóa cả một workspace — hãy gửi email tới
**hello@santara.ai**. Nhớ nêu rõ workspace nào.

## Xóa thì thực sự xóa những gì

Đáng đọc trước khi bấm bất cứ nút nào, vì mức ảnh hưởng khác nhau:

| Hành động | Cái gì mất | Cái gì không bị đụng tới |
| --- | --- | --- |
| **Xóa một listing** | Đặt phòng, tin nhắn, khách và đánh giá đã nhập của phòng đó | Listing trên Airbnb hoặc Booking.com |
| **Ngắt một tài khoản** | Y như trên, cho mọi listing của kết nối đó; việc đồng bộ dừng lại | Mọi thứ ở phía kênh |
| **Xóa một bất động sản** | Bất động sản đó, các phòng, đặt phòng, lịch, tin nhắn và các tin đăng đã kết nối của nó trong Santara AI | Không hoàn tiền cho tháng đang chạy |
| **Gỡ một thành viên** | Quyền truy cập của họ, ngay lập tức, trên mọi thiết bị | Công việc họ đã làm vẫn ghi tên họ |
| **Hủy gói thuê bao** | Không mất gì, cho tới khi hết kỳ đã trả tiền | Listing trên kênh vẫn chạy bình thường |

Hai điều trong số đó hay khiến người ta bất ngờ:

- **Xóa rồi nhập lại một listing sẽ mang lịch sử trở về** ở lần đồng bộ kế tiếp. Nó không phá hủy
  như nghe có vẻ — kênh vẫn giữ dữ liệu.
- **Xóa một thành viên không xóa công việc của họ.** Những lượt dọn họ đánh dấu hoàn thành và tin
  nhắn họ đã gửi vẫn nằm trong hồ sơ dưới tên họ. Đó là chủ đích; một lịch sử vận hành tự viết lại
  mỗi khi có người rời đi thì không còn là lịch sử.

Xóa một bất động sản vẫn đang kết nối với kênh sẽ **bị từ chối** — hãy ngắt kết nối kênh trước, để
phía kênh cũng được dọn dẹp thay vì bị bỏ lại trỏ tới một phòng không còn tồn tại.

## Xóa tài khoản của bạn

Bạn có thể tự xóa tài khoản của mình trên web: đăng nhập tại
[santara.ai/delete-account](https://www.santara.ai/delete-account/?lang=vi) rồi gõ email để xác nhận.
Ứng dụng di động không xoá tài khoản.

Điều gì xảy ra:

1. Bạn **bị đăng xuất khỏi mọi thiết bị ngay lập tức**, và tài khoản không thể đăng nhập nữa.
2. Đội ngũ của chúng tôi xem xét yêu cầu và **hoàn tất trong vòng 30 ngày**.
3. Tên, email, số điện thoại, ảnh và mật khẩu của bạn bị xóa. Đặt phòng, hóa đơn và các dữ liệu khác
   của workspace bạn từng làm việc **được giữ lại cho kế toán, ở dạng ẩn danh** — không còn thông tin
   cá nhân của bạn.

Nếu bạn là **chủ duy nhất** của một workspace có người khác dùng, hãy chuyển quyền chủ cho người khác
trước; yêu cầu sẽ bị từ chối cho tới khi bạn làm vậy. Không đăng nhập được? Gửi email tới
**support@santara.ai** từ địa chỉ email của tài khoản, đội ngũ sẽ xóa giúp bạn.

## Nếu việc thanh toán bị gián đoạn

Dữ liệu của bạn không biến mất, và không có gì bị xóa.

- **Thời gian dùng thử miễn phí kết thúc mà chưa có thẻ** vẫn được dùng đầy đủ thêm **7 ngày**. Sau
  đó workspace thành **chỉ đọc** — mọi thứ vẫn còn đó, bạn chỉ không thay đổi được cho tới khi chọn
  gói.
- **Gia hạn thất bại** được một khoảng ân hạn ngắn để sửa thẻ, sau đó workspace cũng thành chỉ đọc.
- **Sau 30 ngày chỉ đọc**, các việc chạy nền cũng tạm dừng: bản tin hằng ngày, đồng bộ giá ban đêm,
  và đặt phòng cùng tin nhắn mới từ các kênh. Listing của bạn vẫn chạy bình thường trên chính các
  kênh đó.

Thanh toán xong là mọi thứ chạy lại — kể cả đặt phòng và tin nhắn đến trong lúc tạm dừng. Xem
[Nếu thanh toán thất bại](/vi/setup/billing/#nếu-thanh-toán-thất-bại).

## Dữ liệu khách cũng là trách nhiệm của bạn

Santara AI lưu nó; bạn quyết định ai trong đội chạm tới được. Hai thói quen đáng xây dựng:

- **Hãy mời người khác đúng cách thay vì dùng chung tài khoản.** Tài khoản dùng chung làm mọi quyết
  định kiểm soát truy cập ở trên trở nên vô nghĩa, và phá hủy ghi nhận ai đã làm gì.
- **Giới hạn mỗi người ở những tòa nhà họ làm việc.** Việc đó không tốn gì, và là khác biệt giữa một
  nhân viên dọn phòng thấy một địa chỉ và thấy toàn bộ danh mục của bạn.
