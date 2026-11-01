---
title: Kết nối kênh hoạt động ra sao
description: Kết nối là gì, dữ liệu nào đồng bộ theo mỗi chiều, mỗi kênh được kết nối ở đâu, và các trạng thái mà một listing đi qua.
sidebar:
  order: 1
---

Santara AI chính là channel manager của bạn: nó kết nối các kênh bạn bán. Khi một listing
đã chạy, bốn thứ luân chuyển:

| Chiều | Cái gì di chuyển |
| --- | --- |
| **Ra kênh** | Tình trạng trống, giá mỗi đêm, số đêm tối thiểu, các ràng buộc |
| **Vào từ kênh** | Đặt phòng, hủy, khách, tin nhắn, đánh giá |
| **Vào một lần, khi nhập** | Chi tiết listing — tiêu đề, ảnh, tiện nghi, sức chứa, giá hiện có |
| **Ra khi bạn yêu cầu** | Trả lời của bạn cho tin nhắn khách; phản hồi của bạn cho đánh giá |

Santara AI không bao giờ ghi vào nội dung tin đăng **Airbnb** của bạn — tiêu đề, mô tả và ảnh vẫn
giữ nguyên như trên Airbnb. Santara AI cũng không bao giờ thay đổi một mức giá trên kênh mà bạn không
nhập hoặc không do quy tắc định giá của bạn tính ra.

Trên **Booking.com và các kênh khác**, nội dung chỗ nghỉ của bạn cũng được gửi đi. Khi bạn lưu một
chỗ nghỉ hoặc một phòng, Santara AI đẩy ảnh (tối đa 30), mô tả, nội quy, chính sách hủy và tiện nghi
sang channel manager, nơi chuyển chúng tới các kênh chấp nhận.

![Tình trạng trống và giá đi ra kênh; đặt phòng, khách, tin nhắn và đánh giá đi vào. Chi tiết listing đến một lần, khi nhập.](/diagrams/sync-directions.vi.svg)

## Các kênh được hỗ trợ

Santara AI kết nối với **54 kênh bán phòng**, cùng website đặt phòng của bạn. Mọi kênh, kể cả Airbnb
và Booking.com, là một ô trong **Cài đặt → Kênh → Thêm kênh**. Bấm **Kết nối** trên một ô và quy
trình ba bước sẽ mở ra.

| Kênh | Cách kết nối |
| --- | --- |
| **Airbnb** | Kết nối, chọn tin đăng, nhập. Santara AI tạo chỗ nghỉ và phòng từ tin đăng của bạn — [Kết nối Airbnb](/vi/channels/airbnb/) |
| **Booking.com** | Chọn chỗ nghỉ, kết nối và ánh xạ (Hotel ID của bạn), nhập dữ liệu — [Kết nối Booking.com](/vi/channels/booking-com/) |
| **Mọi kênh khác** — Agoda, Expedia, Trip.com, Traveloka, Tiket.com, Hostelworld và nhiều kênh khác | Chọn chỗ nghỉ, kết nối và ánh xạ, nhập dữ liệu — [Kết nối kênh khác](/vi/channels/other-channels/) |
| **Website đặt phòng của bạn** | Có sẵn trong Santara AI, không cần kết nối — [Website đặt phòng trực tiếp của bạn](/vi/setup/booking-site/) |

**Mọi kênh trừ Airbnb đều cần một chỗ nghỉ có phòng trước.** Khi chưa có, ô của kênh hiện **Cần tạo
chỗ nghỉ trước** — kết nối kênh chỉ ánh xạ những phòng bạn đã có, chứ không tạo mới. Hãy thêm ở
[Chỗ nghỉ](/vi/setup/properties/), hoặc kết nối Airbnb trước để nó tạo giúp bạn.

:::note[PriceLabs đang tạm dừng]
Kết nối PriceLabs mới đang tạm dừng, nên PriceLabs không có ô nào. Kết nối PriceLabs bạn đã có vẫn
hoạt động và vẫn có thể ngắt kết nối.
:::

Mọi kênh đều dùng chung lịch, giá và ràng buộc, và đều đưa về đặt phòng, lượt hủy và khách. Có hai
điểm khác nhau theo kênh:

- **Tin nhắn khách.** Chỉ trả lời được trên **Airbnb, Booking.com và Expedia** — những kênh chuyển
  tin nhắn khách qua kết nối. Với kênh khác, hãy trả lời khách trong hộp thư của chính kênh đó.
- **Đánh giá** được đưa về, và trả lời được, ở những kênh có chuyển đánh giá.

![Cài đặt → Kênh trước khi kết nối bất cứ thứ gì. Mỗi kênh được liên kết riêng, với trạng thái và thời điểm đồng bộ cuối của nó.](/screens/channels.vi.png)

## Ba thẻ

**Cài đặt → Kênh** có ba thẻ:

- **Thêm kênh** — danh mục kênh. Tìm theo tên, hoặc lọc theo loại, rồi bấm **Kết nối**. Kênh bạn
  đang dùng sẽ hiện **Thêm tài khoản khác**.
- **Đã kết nối** — mọi kết nối của bạn. Mở một kết nối để xem tin đăng, trạng thái đồng bộ và trạng
  thái chạy.
- **Ứng dụng** — các ứng dụng bạn đã cho phép vào tài khoản, như Santi, ChatGPT hoặc Claude. Xem
  [Kết nối trợ lý AI](/vi/help/ai-assistants/).

## Kết nối và tài khoản

**Kết nối** là một tài khoản kênh. Bạn có thể kết nối:

- nhiều **tài khoản Airbnb** vào một workspace — thường gặp với đơn vị quản lý giữ listing dưới nhiều
  tài khoản chủ nhà;
- nhiều **chỗ nghỉ Booking.com**, mỗi Hotel ID một cái;
- bất kỳ kênh nào khác trong danh sách, **mỗi lần một chỗ nghỉ** — kết nối lại cùng kênh đó cho chỗ
  nghỉ khác.

Mỗi kết nối có trang riêng tại **Cài đặt → Kênh**, hiển thị listing của nó, lần đồng bộ gần nhất, và
mọi thao tác khả dụng. Không phần nào của Santara AI giả định chỉ có một cái duy nhất.

## Trạng thái của listing

Mỗi listing trên trang kết nối mang một trong các nhãn sau:

| Nhãn | Ý nghĩa |
| --- | --- |
| **Chưa liên kết** | Santara AI thấy listing trên kênh; nó chưa trỏ tới phòng nào ở đây. Không gì đồng bộ |
| **Đã liên kết — chưa ánh xạ giá** | Đã trỏ tới một phòng, nhưng giá chưa có nơi để đi |
| **Cần thao tác** | Có việc cần bạn — lý do hiện bên cạnh, ví dụ *Xác nhận sức chứa để tiếp tục* |
| **Sẵn sàng — chưa trực tuyến** | Đã thiết lập và ánh xạ, nhưng kênh chưa giao quyền |
| **Đang đăng…** | Đang được đưa lên chạy |
| **Trực tuyến** | Tình trạng trống và giá đi ra, đặt phòng và tin nhắn đi vào |
| **Lỗi** | Kênh từ chối điều gì đó; lý do hiện bên cạnh |

Trên Airbnb, nhập một tin đăng sẽ đưa nó lên chạy ở bước cuối. Trên Booking.com và mọi kênh khác, ánh
xạ một phòng sẽ đưa phòng đó lên chạy ngay. Xem [Go live](/vi/channels/going-live/).

## Thời gian đồng bộ

- **Đặt phòng mới, hủy và tin nhắn** đến trong vài giây tới một phút.
- **Thay đổi tình trạng trống và giá** được đẩy đi khi bạn lưu, thường hiện trên kênh trong một phút.
- **Đọc lại toàn bộ** diễn ra khi bạn bấm **Làm mới**, và theo lịch định kỳ.

Nếu kênh gặp sự cố, thay đổi xếp hàng và chảy tiếp khi kênh hồi phục. Bạn không cần làm lại.

## Ngắt kết nối nghĩa là gì

Ngắt kết nối sẽ dừng đồng bộ và xóa các đặt phòng, khách, tin nhắn và đánh giá đến từ nó. **Không gì
trên kênh bị ảnh hưởng** — listing, lịch và các lượt đặt ở đó vẫn nguyên. Bạn có thể kết nối lại tài
khoản đó sau.

Gỡ một listing (**Gỡ khỏi Santara AI**) làm điều tương tự cho riêng phòng đó.

:::caution
Ngắt kết nối không phải cách để tạm dừng. Nếu muốn kênh ngừng nhận đặt phòng một thời gian, hãy đóng
ngày trong [lịch](/vi/daily/calendar/) — dữ liệu và lịch sử của bạn được giữ lại.
:::
