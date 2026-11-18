---
title: Thuật ngữ
description: Mọi thuật ngữ Santara AI dùng trên màn hình, trong một trang.
sidebar:
  order: 10
---

**ADR** — giá trung bình mỗi đêm. Doanh thu chia số đêm đã bán.

**AI Agents** — đội sáu agent do Santi dẫn dắt — Sunny, Lulu, Penny, Loop, Kiko và Bubbles — mỗi agent
theo dõi một mảng công việc. **AI Agents** ở thanh bên mở trang riêng của đội, với mục **Cần bạn** ở
trên cùng. Agent chỉ đọc. Xem [Đội AI Agents](/vi/help/assistant/#đội-ai-agents).

**Trợ lý AI (ChatGPT, Claude)** — một ứng dụng AI bên ngoài được kết nối với workspace, để bạn hỏi về
lịch, đặt phòng và ca dọn ngay trong ứng dụng chat bạn vẫn dùng. Tin nhắn cho khách và đặt phòng luôn
chờ bạn đồng ý; thanh toán, cài đặt, đội ngũ và kênh thì không bao giờ được động tới. Xem
[Kết nối ChatGPT, Claude hoặc Grok](/vi/help/ai-assistants/).

**Tự động trả lời** — tab của Tin nhắn nơi Santi có thể tự trả lời những câu hỏi đơn giản của khách:
**Tắt**, **Chạy thử** hoặc **Chạy thật**. Tắt cho tới khi chủ sở hữu hoặc quản trị viên bật lên; tiền,
đổi ngày, phàn nàn và trường hợp khẩn cấp luôn để lại cho bạn. Xem
[Tự động trả lời](/vi/daily/messages/#tự-động-trả-lời).

**Năng lực** — một quyền có tên như `stay.read` hoặc `pricing.write`. Vai trò là gói năng lực; màn hình
và route API đều yêu cầu cùng những năng lực đó. Xem [Đội ngũ và vai trò](/vi/setup/team/).

**Kênh** — nơi bạn bán: Airbnb, Booking.com, Agoda, Expedia và các kênh khác trong danh mục, website đặt phòng của bạn.

**Cụm dọn phòng** — nhóm phòng do một người dọn phụ trách, thường trải qua nhiều tòa nhà. Các phòng có
cùng tên **Nhóm dọn phòng** tạo thành một cụm. Bản tin hằng ngày chia phần dọn phòng theo cụm, mỗi cụm
có menu **Chia sẻ** (Zalo, WhatsApp, Messenger, Telegram, SMS, email) chỉ chứa lịch dọn của cụm đó. Xem
[Cụm dọn phòng](/vi/daily/tasks/#cụm-dọn-phòng).

**Nhóm dọn phòng** — mục trên trang của một phòng để đưa phòng đó vào một cụm dọn phòng. Đặt theo từng
phòng, không theo tòa nhà.

**Kết nối** — một tài khoản kênh đã liên kết. Một workspace có thể có nhiều.

**Bản tin hằng ngày** — cả ngày được viết ra: rủi ro, lượt đến, dọn phòng, doanh thu. Tạo cho
workspace bằng ngôn ngữ của workspace, gửi email mặc định lúc 06:00, và hiện ở tab **Bản tin** của
**Hôm nay**. Xem [Hôm nay và bản tin hằng ngày](/vi/daily/).

**Nhân viên mặc định** — người dọn mà các ca dọn mới của một phòng tự động được giao cho. Đặt theo từng
phòng ở tab **Nhân viên mặc định** của Công việc; không có mặc định theo tòa nhà. Xem
[Nhân viên mặc định theo phòng](/vi/daily/tasks/#nhân-viên-mặc-định-theo-phòng).

**Đặt phòng trực tiếp** — lượt đặt qua website của chính bạn.

**Go live** — hành động có chủ ý trao quyền kiểm soát lịch của một listing cho Santara AI. Xem
[Go live](/vi/channels/going-live/).

**Phí đặt phòng của khách** — khoản phí tùy chọn trên [website đặt phòng trực tiếp](/vi/setup/booking-site/#5-kết-nối-stripe),
**do khách trả** thêm trên tiền phòng và hiện thành một dòng riêng. Mặc định tắt, và chỉ áp dụng cho
lượt đặt trực tiếp thanh toán trực tuyến khi checkout — không bao giờ cho yêu cầu đặt phòng. Santara AI
không lấy hoa hồng trên booking từ kênh hay upsell. Xem [Hoa hồng](/vi/setup/billing/#hoa-hồng).

**Sổ tay hướng dẫn** — trang khách mở từ nhãn QR trong phòng: thông tin chỗ ở, địa điểm gợi ý và dịch vụ
bán thêm cho bất kỳ ai; mã cửa chỉ cho khách đã xác nhận đặt phòng. Xem
[Sổ tay hướng dẫn và mã QR dán phòng](/vi/setup/guidebook/).

**Tổng thu** — số khách trả, gồm cả hoa hồng kênh.

**Đã xử lý** — luồng tin của khách không còn gì tồn đọng. Một trong ba trạng thái của luồng, cùng
**Cần phản hồi** và **Đang chờ khách**; **Đánh dấu đã xử lý** đặt trạng thái này, và khi khách nhắn
lại thì nó tự quay về. Xem [Mỗi luồng một trạng thái](/vi/daily/messages/#mỗi-luồng-một-trạng-thái).

**Dải tình trạng** — dải hiện ở đầu mọi trang khi một kết nối kênh hoặc việc đồng bộ cần bạn: mỗi sự
cố một dòng, mỗi dòng có nút **Sửa**. Khi mọi thứ ổn thì không có dải này. Xem
[Sự cố hiện ra ở đâu](/vi/channels/troubleshooting/#sự-cố-hiện-ra-ở-đâu).

**Nhập dữ liệu từ kênh** — nút trên một bất động sản để kéo về đặt phòng, lịch, tin nhắn và chi tiết
listing mới nhất từ kênh. Ở đâu kênh có giá trị thì giá trị đó thay thế của bất động sản. Xem
[Đồng bộ từ kênh](/vi/setup/properties/#đồng-bộ-từ-kênh).

**Sự cố** — tab của **Công việc** nơi chứa các ticket: phàn nàn và bảo trì, từ **Cần làm** tới
**Hoàn tất**. Không còn mục Ticket riêng ở thanh bên. Xem [Sự cố (phiếu xử lý)](/vi/daily/tickets/).

**Trễ** — xem **Chờ / Trễ**.

**Listing** — một mục trên kênh, ánh xạ một-một tới một phòng Santara AI.

**Giá nhập tay** — mức giá mỗi đêm bạn tự nhập. Được bảo vệ khỏi bộ máy định giá trừ khi bạn cho phép
ghi đè.

**Ánh xạ** — mối liên kết giữa listing của kênh và phòng Santara AI.

**Cần bạn** — bộ lọc hộp thư mở ra đầu tiên: những luồng khách đang chờ bạn làm gì đó. Trang AI Agents
cũng có danh sách **Cần bạn**. Trong hộp thư, **Đánh dấu tất cả đã xử lý** dọn sạch nó một lần. Xem
[Danh sách hiển thị gì](/vi/daily/messages/#danh-sách-hiển-thị-gì).

**Chưa gán phòng** — hàng màu xám trên lịch, dưới một chỗ nghỉ, chứa các lượt lưu trú không nằm ở
phòng nào của chỗ nghỉ đó. Chỉ hiện khi thật sự có lượt như vậy; một đặt phòng từ kênh nằm ở đây thường
nghĩa là tin đăng bị ánh xạ sai. Xem [Cách đọc](/vi/daily/calendar/#cách-đọc).

**Thông báo** — chiếc chuông. Có mười sáu loại, gồm đặt phòng (kể cả **Trùng phòng**), dọn phòng,
ticket, kênh, yêu cầu của khách và trợ lý AI, mỗi loại gửi tới người có thể xử lý. Xem
[Thông báo](/vi/setup/workspace/#thông-báo).

**Công suất** — số đêm bán chia số đêm khả dụng.

**Trùng phòng** — một phòng có nhiều lượt lưu trú hơn số đơn vị trong một số đêm, nên phải dời một
lượt. Hiện thành dải đỏ trên Đặt phòng, nhãn trên từng lượt, thanh đỏ trên lịch và một thông báo ở
chuông. Xem [Lượt đặt bị trùng phòng](/vi/daily/bookings/#lượt-đặt-bị-trùng-phòng).

**Bảng kê cho chủ nhà** — màn hình duy nhất của Báo cáo: trong một tháng, doanh thu đặt phòng gộp, phí
của từng kênh, chi phí, và phần **Chủ nhà thực nhận** còn lại. Xem
[Bảng kê cho chủ nhà](/vi/money/reports/#bảng-kê-cho-chủ-nhà).

**Tiền thực nhận** — số kênh thực trả cho bạn. Đây là ý nghĩa của **doanh thu** trong Santara AI.

**Bất động sản** — một tòa nhà hoặc địa chỉ. Chứa các phòng.

**Rate plan** — giá của một phòng kèm các quy tắc: số đêm tối thiểu, số khách bao gồm, giá khách phụ
trội, điều khoản hủy.

**Mục tiêu trả lời** — khách nên được trả lời nhanh tới đâu ở thời điểm đó của kỳ lưu trú: 10 phút
trong ngày nhận phòng, 30 phút khi đang ở, 60 phút với câu hỏi đặt phòng, v.v. Quá mục tiêu thì
**Chờ** chuyển thành **Trễ**. Xem [Khách đã chờ bao lâu](/vi/daily/messages/#khách-đã-chờ-bao-lâu).

**RevPAN** — doanh thu trên mỗi đêm khả dụng: doanh thu chia toàn bộ số đêm phải bán. Con số dùng để
chấm điểm định giá.

**Phòng** — đơn vị có thể đặt. Thứ khách đặt, thứ kênh ánh xạ tới, thứ được tính phí.

**Rule set** — tập quy tắc định giá: mùa, phụ phí theo thứ, sự kiện. Dùng chung cho nhiều listing.

**Santi** — trợ lý AI bên trong Santara AI, cạnh chiếc chuông trên mọi màn hình. Santi đọc workspace
của bạn, dẫn dắt đội AI Agents, và chỉ thay đổi điều gì sau khi bạn bấm **Xác nhận**. Xem
[Hỏi Santi](/vi/help/assistant/).

**Lượt lưu trú** — một lượt đặt phòng. Được liệt kê ở **Đặt phòng**.

**Ticket** — một vấn đề được theo dõi: phàn nàn, sửa chữa, công việc. Nằm ở **Công việc → Sự cố**. Nội
bộ; khách không bao giờ thấy. Xem [Sự cố (phiếu xử lý)](/vi/daily/tickets/).

**Turnover** — ca dọn giữa lượt trả phòng và lượt đến kế tiếp. Tự tạo vào đêm trước đó.

**Số đơn vị** — một phòng đại diện cho bao nhiêu căn giống nhau. Giới hạn cứng của tình trạng trống.

**Upsell** — thêm đêm, trả phòng muộn hoặc nhận phòng sớm bán cho khách đang lưu trú.

**Chờ / Trễ** — nhãn trên luồng đang chờ bạn trả lời: **Chờ 12 phút**, rồi **Trễ · 40 phút** khi đã
quá [mục tiêu trả lời](/vi/daily/messages/#khách-đã-chờ-bao-lâu) của thời điểm đó trong kỳ lưu trú.

**Workspace** — một danh mục: bất động sản, đội ngũ, thanh toán và website đặt phòng của nó. Không gì
được chia sẻ giữa các workspace.
