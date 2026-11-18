---
title: Khắc phục sự cố kênh
description: Hơn chục thứ thực sự hay hỏng với một kết nối, và cách xử lý từng cái.
sidebar:
  order: 7
---

Bắt đầu bằng hai thao tác xử lý được phần lớn vấn đề: kiểm tra trạng thái và lần đồng bộ cuối của kết
nối tại **Cài đặt → Kênh**, rồi bấm **Làm mới**.

## Sự cố hiện ra ở đâu

Bạn không cần tự đi tìm. Có hai nơi báo cho bạn khi một kênh ngừng hoạt động.

**Dải tình trạng.** Khi có gì đó trục trặc, một dải hiện ở đầu mọi trang, ngay dưới dải báo thanh
toán nếu có. Một sự cố là một dòng; nhiều sự cố gộp lại thành **3 việc cần xem**, bấm **Xem** để mở
danh sách. Mỗi dòng có nút **Sửa**, mở đúng trang để xử lý. Nút **×** (*Ẩn cho đến khi có thay đổi*)
ẩn các sự cố đó — sự cố mới sẽ hiện lại. Khi mọi thứ ổn, dải này không xuất hiện.

| Dải báo | Ý nghĩa |
| --- | --- |
| *… chưa được kết nối. Kết nối lại để đặt phòng và giá tiếp tục đồng bộ.* | Kết nối đã dừng — bị gỡ quyền, hết hạn, bị gỡ ở phía channel manager, hoặc kích hoạt thất bại. Hãy kết nối lại |
| *… đang chờ bạn hoàn tất một bước.* | Còn việc dang dở: tin đăng chờ go live, sức chứa cần xác nhận, hoặc chưa ánh xạ phòng nào |
| *Đăng nhập … hết hạn vào …. Hãy kết nối lại trước ngày đó.* | Phiên đăng nhập kênh hết hạn trong vòng 7 ngày. Kết nối lại trước ngày đó |
| *…: lần đồng bộ gần nhất bị lỗi.* | Lần đồng bộ gần nhất lỗi và chưa có lần nào thành công sau đó. Bấm **Làm mới** trên kết nối |
| *3 cập nhật giá hoặc phòng trống liên tục không gửi được tới kênh của bạn.* | Cập nhật đã lỗi từ ba lần trở lên. Kiểm tra kết nối, rồi [liên hệ hỗ trợ](/vi/help/support/) nếu vẫn còn |
| *3 tin đăng bị channel manager từ chối.* | Một phòng hoặc rate plan bị từ chối. **Sửa** mở trang phòng, nơi lý do hiện cạnh cài đặt gây ra nó |

**Cảnh báo ở chuông.** Khi một kênh từ chối bản cập nhật giá hoặc phòng trống, chuông báo **… không
nhận bản cập nhật** — *giá hoặc phòng trống trên đó có thể chưa đúng*. Thông báo nhẹ hơn, **… gửi
cảnh báo đồng bộ**, nghĩa là bản cập nhật vẫn được nhận nhưng kênh có góp ý nên xem qua. Mỗi ngày tối
đa một cảnh báo cho cùng một kênh, chỗ nghỉ và lỗi. Cảnh báo gửi tới chủ, quản trị viên và co-host,
và mở **Cài đặt → Kênh**.

## Khi kết nối

**Popup Airbnb không mở ra.**
Trình duyệt đã chặn. Cho phép popup cho trang này rồi bấm *Kết nối Airbnb* lần nữa.

**"Cấp phép chưa hoàn tất."**
Cửa sổ đóng trước khi bạn phê duyệt trên Airbnb. Không có gì được kết nối — bấm *Thử lại*.

**"Tài khoản Airbnb này đã được kết nối."**
Cùng tài khoản đang nằm ở một kết nối khác trong workspace này. Hãy ngắt cái đó trước.

**Không có listing Airbnb nào sau khi cấp phép.**
Airbnb cần chút thời gian để chia sẻ. Bấm *Kiểm tra lại* sau vài giây. Nếu vẫn trống, hãy chắc chắn
bạn đã cấp phép bằng tài khoản sở hữu listing — tài khoản co-host sẽ không hiện gì.

**Không tìm thấy phòng Booking.com.**
Hầu như luôn là bước nhà cung cấp kết nối. Trong extranet: **Account → Connectivity provider**, tìm
nhà cung cấp được nêu trong hộp thoại kết nối, chọn, chấp nhận thỏa thuận. Rồi làm mới tại đây. Nếu vẫn trống, kiểm tra lại Hotel ID.

## Sau khi nhập

**Một phòng không có giá.**
Bộ nhập từ chối đoán một mức giá mơ hồ. Mở phòng đó, đặt giá mỗi đêm, và phòng bán được. Trên Airbnb,
liên kết kênh tự phục hồi khi đã có giá thật.

**"Giữ trên Airbnb."**
Các thiết lập không có tương đương chính xác ở đây. Chúng vẫn áp dụng trên Airbnb. Không cần làm gì.

**Một listing vẫn *đã liên kết — chưa ánh xạ*.**
Nó chưa trỏ tới phòng nào. Hãy ánh xạ từ trang kết nối. Với Booking.com, nguyên nhân thường gặp là rate
plan không có giá cho số khách mà Booking.com chấp nhận.

**Xuất hiện phòng tôi không tạo.**
Booking.com phát hiện phòng khi đặt phòng đến và thêm vào bất động sản đã liên kết. Hãy đổi tên, hoặc
liên kết chúng với phòng bạn đã có.

## Sau khi chạy

**Kênh và Santara AI khác nhau về một ngày.**
Bấm **Làm mới** trên kết nối. Nếu vẫn khác, ghi lại chính xác ngày và phòng rồi
[liên hệ hỗ trợ](/vi/help/support/) — đừng sửa cả hai phía cùng lúc.

**Tình trạng trống ít hơn tôi nghĩ.**
Tình trạng trống bị chặn ở số đơn vị của phòng. Một căn hộ là một đơn vị.

**"Quyền truy cập của Santara AI đã bị gỡ khỏi tài khoản Airbnb của bạn nên việc đồng bộ đã dừng."**
Ai đó đã gỡ Santara AI khỏi các ứng dụng đã kết nối của tài khoản Airbnb, hoặc Airbnb đã thu hồi
quyền. Kết nối hiện **Cần kết nối lại**. Bấm **Kết nối lại** và đăng nhập bằng **đúng** tài khoản
Airbnb đó — tin đăng và lịch sử của bạn vẫn được giữ. Xem [Kết nối lại](/vi/channels/airbnb/#kết-nối-lại).

**"Kênh này đã bị gỡ ở phía channel manager."**
Kết nối bị hủy ở đầu trên. Chấp nhận lại trên kênh, rồi ngắt và kết nối lại tại đây.

**Giá tôi nhập tay bị ghi đè.**
Kiểm tra cài đặt định giá của listing: *Ghi đè giá tôi tự nhập* mặc định tắt, và khi bật nó ghi đè mà
không hoàn tác được. Xem [Smart pricing](/vi/money/pricing/#bảo-vệ-giá-nhập-tay).

**Tin nhắn ngừng về.**
Kiểm tra trạng thái kết nối trước. Nếu đang kết nối và mới đồng bộ, luồng có thể đã chuyển — một số
kênh đóng luồng sau khi trả phòng. Liên hệ hỗ trợ kèm mã đặt phòng.

**Có một lượt đặt tôi không thấy trên lịch.**
Kiểm tra phòng mà nó rơi vào: một listing ánh xạ sai phòng sẽ đặt các lượt đặt thật vào sai chỗ. Sửa
ánh xạ ([Quản lý listing](/vi/channels/listings/)) và báo hỗ trợ để chuyển đặt phòng hiện có.

## Vẫn bế tắc

Hỏi [trợ lý](/vi/help/assistant/) — nó đọc được workspace của bạn. Rồi
[liên hệ hỗ trợ](/vi/help/support/) từ trong sản phẩm, để workspace và kết nối được đính kèm.
