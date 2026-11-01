---
title: Kết nối Airbnb
description: Kết nối tài khoản, chọn tin đăng, rồi nhập từng tin một — mỗi tin được tạo, định giá và đưa lên chạy.
sidebar:
  order: 2
---

## Bạn cần gì

- **Tài khoản Airbnb sở hữu listing.** Co-host không mở được phần cài đặt tài khoản thì không cấp
  phép kết nối được.
- Cho phép popup trong trình duyệt — phần cấp phép mở ở cửa sổ mới. Nếu bị chặn bạn sẽ thấy *"Trình
  duyệt đã chặn cửa sổ popup"*; hãy cho phép rồi bấm **Kết nối Airbnb** lần nữa.
- **Không có channel manager hay PMS nào khác đang kết nối** với tài khoản Airbnb đó — Airbnb từ chối
  kết nối thứ hai và việc kết nối không hoàn tất. Hãy ngắt kết nối cũ trong Airbnb trước (**Account →
  Privacy**, ở mục dịch vụ đã kết nối).
- **Thông tin host đầy đủ** — thiếu xác minh email hoặc tương tự sẽ chặn việc cấp phép; Airbnb ghi rõ
  thiếu gì trên màn hình của họ.
- **Đăng nhập đúng tài khoản Airbnb** trên trình duyệt này trước khi bắt đầu. Đổi mật khẩu Airbnb sau đó
  không làm mất kết nối.
- **Lịch của listing không đặt "Unavailable by default"** — hãy chọn mọi ngày hoặc một số ngày tới,
  nếu không lịch trống Santara AI gửi đi sẽ không mở được lịch.

## Bắt đầu từ đâu

**Cài đặt → Kênh → Thêm kênh**, rồi bấm **Kết nối** trên ô **Airbnb**. Airbnb là kênh duy nhất
không cần có chỗ nghỉ trước — Santara AI tạo chỗ nghỉ và phòng từ tin đăng của bạn.

Quá trình gồm ba bước: **Kết nối**, **Chọn tin đăng**, **Nhập**.

## 1. Kết nối

Bấm **Kết nối Airbnb**. Trang của Airbnb mở trong một cửa sổ: đăng nhập ở đó và phê duyệt kết nối.
Cho tới khi bạn phê duyệt, Santara AI hiện *Đang chờ bạn hoàn tất ủy quyền trên Airbnb*. Nếu lỡ
mất cửa sổ, bấm **Mở lại cửa sổ Airbnb**.

Nếu bạn đóng cửa sổ trước khi phê duyệt, bạn sẽ thấy *Ủy quyền chưa hoàn tất*. Chưa có gì được kết
nối; bấm **Thử lại**.

## 2. Chọn tin đăng

Khi Airbnb chia sẻ các tin đăng của tài khoản, bạn nhận được danh sách kèm ảnh của từng tin. Với mỗi
tin đăng:

- **Bỏ chọn** những gì bạn không muốn đưa vào Santara AI. **Chọn tất cả** và **Bỏ chọn tất cả** áp
  dụng cho cả danh sách.
- Chọn nơi nó đi vào ở mục **Nhập vào**:
  - **Chỗ nghỉ mới — tạo từ mục cho thuê này** — lựa chọn thường dùng cho tin đăng nguyên căn.
  - **Một chỗ nghỉ đã có** — rồi chọn **Phòng nào?**, nếu chỗ nghỉ đó có nhiều hơn một phòng. Dùng
    cách này khi nhiều tin đăng Airbnb là các phòng ngủ của cùng một căn villa. Khi một tin đăng
    trông giống chỗ nghỉ bạn đã có, Santara AI gợi ý — bấm **Dùng** để chấp nhận.
- Tin đăng đã được kết nối ở nơi khác được đánh dấu *đã kết nối* và không thể chọn hai lần.

Bấm **Nhập N tin đăng** — nút này đếm số tin bạn đã chọn.

## 3. Nhập

Các tin đăng được nhập **từng tin một**, có thanh tiến trình (*Xong 2 trên 5*). Với mỗi tin,
Santara AI đọc nó từ Airbnb, tạo chỗ nghỉ và phòng, ánh xạ tin đăng, đọc giá, rồi đưa nó lên chạy.
Mỗi dòng cho thấy điều gì đã xảy ra với **Chỗ nghỉ**, **Phòng**, **Giá** và **Airbnb** — *Đang
chạy* hoặc *Chưa chạy*.

- Giữ trang mở trong khi chạy. Rời trang thì các tin đăng chưa bắt đầu sẽ không được nhập.
- **Dừng sau mục này** hoàn tất tin đang chạy rồi dừng. Các tin đã nhập vẫn được thiết lập; phần
  còn lại không bị đụng tới.
- Quay lại phần thiết lập sau đó, bạn sẽ thấy **Tiếp tục từ chỗ đang dở**, với các tin còn lại vẫn
  đang chờ.
- Tin đăng bị lỗi hiện lý do và nút **Thử lại**. Các tin khác vẫn tiếp tục.

Khi xong, Santara AI đưa về đặt phòng, đánh giá và tin nhắn cho mọi tin bạn vừa nhập. Việc này chạy
tiếp ở nền — bạn không cần chờ. **Xem tin đăng của bạn** mở trang kết nối; **Nhập thêm** quay về
bước 2.

### Giá đọc từ Airbnb

- **Giá mỗi đêm**, giá cuối tuần, số khách đã gồm, giá khách thêm và phí dọn dẹp của tin đăng được
  đọc và đặt cho phòng.
- **Giữ trên Airbnb** — các thiết lập Santara AI không có mục tương đương chính xác. Chúng vẫn áp
  dụng trên Airbnb; được hiển thị để bạn biết chúng tồn tại.
- **Nên kiểm tra lại trên Airbnb** — các giá trị trông bất thường. Santara AI đánh dấu chứ không
  đoán.
- **Giữ nguyên giá của phòng** — Santara AI không đọc được giá của tin đăng một cách an toàn, nên
  phòng giữ giá nó đang có, và không có gì bị bịa ra.

:::tip[Vì sao từ chối đoán]
Một mức giá đọc sai trên listing đang chạy là thiệt hại thật, nên bộ nhập từ chối dữ liệu mơ hồ thay
vì đoán. Nếu hoàn toàn không đọc được giá của một listing, liên kết kênh của nó bị giữ lại cho tới khi
có giá thật — và liên kết tự khôi phục khi có.
:::

## Xác nhận sức chứa

Trước khi Santara AI ghi vào lịch của một tin đăng lần đầu, **sức chứa** của chỗ nghỉ phải được xác
nhận. Chỗ nghỉ mới được xác nhận ngay khi nhập. Tin đăng nhập vào một phòng bạn đã có có thể hiện
**Xác nhận sức chứa trước khi chạy thật** (trên trang kết nối: *Xác nhận sức chứa để tiếp tục*). Bấm
**Xác nhận** và trả lời hộp thoại:

- **Có bao nhiêu đơn vị giống nhau?** — một căn hộ là 1. Con số này giới hạn tình trạng trống gửi
  sang Airbnb, nên nhập sai có thể bán những đêm bạn không có, hoặc đóng những đêm bạn có.
- **Tiền tệ** và **Giá mỗi đêm** — mức giá gợi ý từ Airbnb đã được điền sẵn; sửa nếu sai.

Hộp thoại cho biết bao nhiêu đêm sắp tới sẽ còn trống và bao nhiêu bị đóng vì kín chỗ, rồi bấm
**Xác nhận**. **Để sau** để tin đăng tiếp tục chờ.

## Đưa lên chạy

Đưa một tin đăng lên chạy nghĩa là Airbnb **giao quyền kiểm soát lịch cho Santara AI**. Tình trạng
trống bắt đầu đồng bộ; **giá vẫn giữ nguyên như trên Airbnb** cho tới khi bạn đổi ở đây hoặc một quy
tắc định giá xuất bản. Đọc [Go live](/vi/channels/going-live/) để biết điều gì thay đổi.

Bước nhập đưa từng tin đăng lên chạy ở khâu cuối. Tin đăng nào Airbnb chưa xác nhận sẽ ở trạng thái
**Đã thiết lập — chưa chạy**, với nút **Cho chạy trên Airbnb**, ở bước nhập và trên trang kết nối
(nơi tin đăng đó hiện *Sẵn sàng — chưa trực tuyến* và có nút **Đăng trực tuyến** riêng).

Nếu một tin đăng không lên chạy được, lý do hiển thị đúng như Airbnb báo:

| Thông báo | Cần làm gì |
| --- | --- |
| *Airbnb chưa liên kết xong listing này* | Đợi một phút, bấm lại |
| *Đơn vị tiền tệ của listing chưa đồng bộ* | Đợi vài phút rồi thử lại |
| *Phòng này thiếu thiết lập kênh* | Gỡ listing rồi nhập lại |
| *Airbnb chưa xác nhận listing đã chạy* | Thử lại một lần; nếu lặp lại, [liên hệ hỗ trợ](/vi/help/support/) |

Các tin đăng khác vẫn lên chạy. Kết quả một phần giữ phần còn lại ở trạng thái đã thiết lập và có thể
thử lại.

## Nhiều tài khoản Airbnb

Bấm **Thêm tài khoản khác** trên ô Airbnb trong **Thêm kênh** và lặp lại. Mỗi tài khoản có trang kết
nối riêng với tin đăng riêng. Kết nối một tài khoản đã kết nối sẽ bị từ chối — hãy ngắt cái cũ trước.

## Kết nối lại

Nếu quyền truy cập của Santara AI bị gỡ khỏi tài khoản Airbnb — chẳng hạn trong mục ứng dụng đã kết
nối của Airbnb — việc đồng bộ dừng lại. Kết nối hiện **Cần kết nối lại** và một banner: *Quyền truy
cập của Santara AI đã bị gỡ khỏi tài khoản Airbnb của bạn*. Bấm **Kết nối lại** và đăng nhập bằng
**đúng** tài khoản Airbnb đó. Tin đăng và lịch sử của bạn vẫn được giữ nguyên.

## Gỡ bỏ

- **Gỡ khỏi Santara AI** trên một listing — xóa các đặt phòng, tin nhắn, khách và đánh giá của phòng đó
  tại đây. Listing Airbnb của bạn không bị ảnh hưởng và có thể nhập lại.
- **Ngắt kết nối** tài khoản — tương tự, cho toàn bộ listing của tài khoản, và đồng bộ dừng lại.

## Tin nhắn khách và đánh giá

Sau khi lên chạy, hội thoại Airbnb xuất hiện trong [Tin nhắn](/vi/daily/messages/) và trả lời của bạn
quay lại Airbnb. Đánh giá của khách xuất hiện trong [Đánh giá](/vi/daily/reviews/), và bạn có thể
xuất bản đánh giá của mình về khách từ đó — hãy đọc cảnh báo, thao tác đó không hoàn tác được.
