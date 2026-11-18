---
title: Kết nối Booking.com
description: Thêm nhà cung cấp kết nối trong extranet, chọn chỗ nghỉ, nhập Hotel ID và ánh xạ phòng — ánh xạ một phòng là đưa phòng đó lên chạy.
sidebar:
  order: 3
---

Booking.com hoạt động khác Airbnb: không có popup đăng nhập. Bạn cấp quyền trong extranet của chính
mình, rồi kết nối nó với một chỗ nghỉ bạn đã có trong Santara AI.

## Bạn cần gì

- **Một chỗ nghỉ có ít nhất một phòng** trong Santara AI. Kết nối Booking.com chỉ ánh xạ những phòng
  bạn đã có — không tạo chỗ nghỉ mới. Khi chưa có, ô Booking.com hiện **Cần tạo chỗ nghỉ trước**. Hãy
  thêm ở [Chỗ nghỉ](/vi/setup/properties/).
- Quyền truy cập **extranet Booking.com** với tư cách chủ chỗ nghỉ.
- **Hotel ID** của bạn — con số ở đầu extranet, cạnh tên chỗ nghỉ.

Quy trình gồm ba bước: **Chọn chỗ nghỉ**, **Kết nối và ánh xạ**, **Nhập dữ liệu**.

![Bước kết nối Booking.com — ô xác nhận extranet và Hotel ID.](/screens/connect-booking-com.vi.png)

## 1. Bật kết nối trong extranet

Booking.com phải cho phép kết nối trước. Santara AI kết nối qua **Channex**, đối tác kết nối của chúng
tôi — đó là cái tên bạn tìm trong Booking.com. Nên để chủ chỗ nghỉ làm bước này: Booking.com gửi mã
đăng nhập hai bước tới điện thoại của chủ tài khoản.

1. Đăng nhập tại **account.booking.com**. Ghi lại **mã chỗ nghỉ** ở đầu trang, cạnh tên chỗ nghỉ —
   đó là Hotel ID bạn nhập ở bước 3. Rồi mở **Account → Connectivity provider**.

   ![Extranet Booking.com: mã chỗ nghỉ cạnh tên, và Account → Connectivity provider.](/channel-guides/extranet/booking-com-account-menu.webp)

2. Nhấn **Search**.

   ![Trang Connectivity provider — nhấn Search.](/channel-guides/extranet/booking-com-connectivity-provider.webp)

3. Gõ đủ chữ **Channex** — gõ thiếu sẽ không tìm thấy — rồi chọn **Channex.io**.

   ![Search for a provider: gõ Channex và chọn Channex.io.](/channel-guides/extranet/booking-com-search-channex.webp)

4. Giữ dấu tích ở **Reservations, Rates & Availability** và nhấn **Next**.

   ![Đã chọn Channex.io, tích Reservations, Rates & Availability — nhấn Next.](/channel-guides/extranet/booking-com-next.webp)

5. Tích ô đồng ý XML Service Agreement và nhấn **Yes, I accept**. Không cần điền gì khác trên biểu mẫu.

   ![XML Service Agreement: tích ô, rồi Yes, I accept.](/channel-guides/extranet/booking-com-agreement.webp)

6. Yêu cầu giờ chờ xác nhận — điều này là bình thường. Giữ lựa chọn **Connect me to the provider
   automatically**. Bạn có thể tiếp tục ngay trong Santara AI; kênh hoạt động khi kết nối được xác nhận.

   ![Đang chờ nhà cung cấp xác nhận — tiếp tục trong Santara AI.](/channel-guides/extranet/booking-com-waiting.webp)

Không gì xảy ra trong Santara AI trước khi việc này hoàn tất. Bước kết nối có ô xác nhận, vì bỏ qua
bước này là nguyên nhân thất bại phổ biến nhất.

:::caution[Kiểm tra giá phái sinh sau khi kết nối]
Khi kết nối channel manager, Booking.com có thể đổi cài đặt của **giá phái sinh** (derived rates) — ví
dụ số đêm tối thiểu. Hãy kiểm tra từng giá phái sinh trong extranet sau khi kết nối.
:::

## 2. Chọn chỗ nghỉ

**Cài đặt → Kênh → Thêm kênh**, rồi bấm **Kết nối** trên ô **Booking.com**. Bước đầu tiên hỏi
**Khách sạn này là chỗ nghỉ nào?** Chọn chỗ nghỉ trong Santara AI, rồi bấm **Tiếp tục**. Các phòng
Booking.com của bạn được ánh xạ vào phòng của chỗ nghỉ đó — không tạo chỗ nghỉ mới. Nếu chỗ nghỉ đã
có trên Airbnb, điều đó bình thường; một chỗ nghỉ bán ở cả hai nơi.

## 3. Kết nối và ánh xạ

**Kết nối.** Đánh dấu ô xác nhận bạn đã thêm nhà cung cấp kết nối và chấp nhận thỏa thuận trong
extranet. Nhập **Hotel ID** (ví dụ `1234567`) và, nếu muốn, **Tên hiển thị (tùy chọn)**. Bấm
**Kiểm tra kết nối** để kiểm tra trước:

- *Booking.com đã chấp nhận Hotel ID này.* — tiếp tục.
- *Booking.com không chấp nhận Hotel ID này.* — kiểm tra lại con số, và yêu cầu nhà cung cấp ở bước
  1 đã được chấp nhận chưa.

Rồi bấm **Kết nối Booking.com**. Khác Airbnb, việc này diễn ra ngay, không có cửa sổ nào phải chờ.

**Ánh xạ.** Santara AI hỏi Booking.com về các phòng của khách sạn và liệt kê trong **Các phòng của
bạn**. Với mỗi phòng Booking.com:

- chọn phòng Santara AI tương ứng (**Chọn một phòng…**);
- trỏ từng mức giá Booking.com tới một gói giá của bạn, rồi **Lưu ánh xạ giá**. Trong **Gói giá của
  phòng này** bạn có thể thêm gói ngay tại chỗ (**+ Thêm gói giá**) hoặc đổi gói chính (**Đặt làm
  chính**).

Mỗi phòng được ánh xạ từ dòng riêng của nó; khi có nhiều phòng, **Map, kích hoạt & đồng bộ N phòng**
ánh xạ tất cả cùng lúc. Xong thì bấm **Tiếp tục**.

:::caution[Ánh xạ một phòng là đưa phòng đó lên chạy]
Booking.com không có bước Go live riêng. Ánh xạ một phòng sẽ thiết lập và đưa phòng đó lên
Booking.com — tình trạng phòng trống bắt đầu đồng bộ ngay. Hãy đọc [Go live](/vi/channels/going-live/)
trước khi ánh xạ.
:::

:::note[Phân biệt các phòng]
Booking.com hiển thị tên phòng **mặc định**, không phải tên bạn đã đổi trong extranet, nên hai căn hộ
có thể trông giống hệt nhau. Hãy đối chiếu theo **Room ID**. Ánh xạ **mọi** phòng và mức giá: mức giá
chưa ánh xạ — kể cả **giá phái sinh** cũ hiện ra như có thể ánh xạ — khiến đặt phòng của nó bị lỗi.
Nếu không cần, hãy xoá trong extranet (giá phái sinh tạo lại ở đó sẽ không cần ánh xạ).
:::

## 4. Nhập dữ liệu

Santara AI đưa về các lượt lưu trú, tin nhắn và đánh giá mà khách sạn đã có (*Đang chuyển các đặt
phòng của bạn sang*). Bạn có thể rời trang — việc này vẫn chạy tiếp. Khi hiện *Đã kết nối xong*,
**Mở kênh này** đưa bạn tới trang kết nối.

## Điều gì có thể giữ một phòng lại

| Trên màn hình | Nghĩa là |
| --- | --- |
| *Đã liên kết — chưa map* | Booking.com biết phòng đó; nó chưa trỏ tới phòng Santara AI nào |
| *Đã map — chờ kích hoạt* | Đã ánh xạ, nhưng kênh chưa kích hoạt. Đặt phòng đồng bộ sau khi kích hoạt thành công |
| *Xác nhận sức chứa để tiếp tục* | Xác nhận chỗ nghỉ có bao nhiêu đơn vị giống nhau, và giá mỗi đêm — xem [Go live](/vi/channels/going-live/#kiểm-tra-những-điều-này-trước) |
| *vẫn liên kết nhưng chưa ánh xạ — rate plan không có giá cho số khách mà Booking.com chấp nhận* | Mở rate plan của phòng, đặt giá cho mức sức chứa đó, rồi ánh xạ lại |
| *Chưa tìm thấy phòng nào* | Kiểm tra Hotel ID và nhà cung cấp kết nối, rồi làm mới |

Santara AI sẽ không đoán giá theo sức chứa trên một listing đang bán. Việc từ chối đó là cố ý: một mức
giá đoán trên Booking.com sẽ bán những đêm thật với giá sai.

## Lượt lưu trú được nhập khi kết nối

Các lượt lưu trú Booking.com đã có sẽ được đưa sang khi kênh hoạt động, nhưng Booking.com gửi chúng
**ít chi tiết hơn** so với đặt phòng mới: không có thuế hay phí, không có email, địa chỉ hay số điện thoại
của khách, không có hoa hồng và không có thông tin thẻ. Hãy xem extranet cho những thông tin đó. Đặt phòng
tạo sau khi kết nối sẽ về đầy đủ.

## Giá trên Booking.com

Booking.com không mở giá của bạn cho nhà cung cấp kết nối theo cách đọc ngược lại được. Giá bạn đặt
trong Santara AI được đẩy **ra** Booking.com; không có gì được nhập **vào**. Hãy đặt giá tại đây (hoặc
bằng [quy tắc định giá](/vi/money/pricing/)) và xem Santara AI là nguồn đúng.

## Thay đổi hoặc gỡ bỏ

- **Đổi bất động sản** — đặt phòng và tin nhắn trong tương lai sẽ về bất động sản bạn chọn. Những gì
  đã nhập vẫn ở nguyên chỗ và ánh xạ phòng được giữ. Nút này chỉ hiện khi khách sạn không gắn với
  phòng riêng của một chỗ nghỉ; nếu không, hãy ngắt kết nối rồi kết nối lại Hotel ID trên chỗ nghỉ kia.
- **Gỡ khỏi Santara AI** trên một phòng — chỉ xóa dữ liệu đã nhập tại đây.
- **Ngắt kết nối** — dừng đồng bộ và xóa dữ liệu Booking.com đã nhập của chỗ nghỉ này. Extranet của
  bạn không bị ảnh hưởng.

:::note[Các kỳ nghỉ sắp tới được giữ lại]
Gỡ hoặc ngắt kết nối chỉ dừng đồng bộ — không hủy gì trên kênh. Các kỳ nghỉ chưa kết thúc vẫn ở lại
Santara AI, nên những đêm đó vẫn bị chặn trên các kênh khác và không bị đặt trùng. Các kỳ nghỉ đã
qua cùng tin nhắn và đánh giá của chúng sẽ bị xóa.
:::

:::caution[Nếu kênh biến mất]
*"Kênh này đã bị gỡ ở phía channel manager"* nghĩa là kết nối bị hủy ở đầu trên — thường do nhà cung
cấp kết nối bị gỡ trong extranet. Đồng bộ đã dừng. Hãy chấp nhận lại nhà cung cấp trên Booking.com,
rồi ngắt và kết nối lại tại đây.
:::
