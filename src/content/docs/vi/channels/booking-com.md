---
title: Kết nối Booking.com
description: Thêm nhà cung cấp kết nối trong extranet, nhập Hotel ID, ánh xạ phòng, và Santara kích hoạt kênh giúp bạn.
sidebar:
  order: 3
---

Booking.com hoạt động khác Airbnb: không có popup đăng nhập. Bạn cấp quyền trong extranet của chính
mình, rồi cho Santara biết nó gắn với bất động sản nào.

![Hộp thoại kết nối Booking.com — bước extranet, Hotel ID, và bất động sản để liên kết.](/screens/connect-booking-com.vi.png)

## 1. Bật kết nối trong extranet

Trong **extranet Booking.com**:

1. Mở **Account → Connectivity provider**.
2. Tìm **Channex** — đối tác kết nối của chúng tôi.
3. Chọn và **chấp nhận thỏa thuận kết nối**.

Không gì xảy ra trong Santara trước khi việc này hoàn tất. Hộp thoại kết nối có ô xác nhận, vì bỏ qua
bước này là nguyên nhân thất bại phổ biến nhất.

## 2. Nhập Hotel ID

**Cài đặt → Kênh → Kết nối Booking.com**.

**Hotel ID** là con số hiển thị ở đầu extranet, cạnh tên chỗ nghỉ — ví dụ `1234567`. Có thể đặt tên
hiển thị cho kết nối.

## 3. Liên kết tới một bất động sản

Chọn bất động sản Santara mà khách sạn này thuộc về. Khách sạn kết nối **trực tiếp tới bất động sản
đó** — không tạo cái mới — và mọi phòng khác tìm thấy trong extranet sẽ được thêm vào đó khi phát hiện.

Chưa có bất động sản? Chọn **Bất động sản mới — tạo từ khách sạn này**. Nếu bất động sản đã có trên
Airbnb, nó được đánh dấu *đã có trên Airbnb* — điều đó bình thường; một chỗ nghỉ bán ở cả hai nơi.

Bấm **Kết nối chỗ nghỉ**. Khác Airbnb, việc này diễn ra ngay, không có cửa sổ nào phải chờ.

## 4. Ánh xạ phòng

Santara hỏi Booking.com về các phòng của khách sạn đó và hiển thị trong **Phòng của bạn**. Với mỗi
phòng, chọn phòng Santara tương ứng.

Nếu không có gì hiện ra, bấm **Tìm phòng của tôi** lần nữa, hoặc dùng **Tự liên kết phòng với bất động
sản** và nhập thủ công từ trang **Property → Rooms & rates** của extranet:

- **Tên phòng** — ví dụ *Standard Double Room*
- **Room ID** — ví dụ `437213702`
- **Rate ID** — ví dụ `25014098, 25014104`
- **Khách** — sức chứa của phòng

Rồi bấm **Ánh xạ, kích hoạt & đồng bộ**. Santara ánh xạ phòng, kích hoạt kênh, và đồng bộ đặt phòng,
đánh giá và tin nhắn, hiển thị từng giai đoạn.

## Điều gì có thể giữ một phòng lại

| Trên màn hình | Nghĩa là |
| --- | --- |
| *Đã liên kết — chưa ánh xạ* | Booking.com biết phòng đó; nó chưa trỏ tới phòng Santara nào |
| *Đã ánh xạ — chờ kích hoạt* | Đã ánh xạ, nhưng kênh chưa kích hoạt. Đặt phòng đồng bộ sau khi kích hoạt thành công |
| *vẫn liên kết nhưng chưa ánh xạ — rate plan không có giá cho số khách mà Booking.com chấp nhận* | Mở rate plan của phòng, đặt giá cho mức sức chứa đó, rồi ánh xạ lại |
| *Chưa tìm thấy phòng nào* | Kiểm tra Hotel ID và nhà cung cấp kết nối, rồi làm mới |

Santara sẽ không đoán giá theo sức chứa trên một listing đang bán. Việc từ chối đó là cố ý: một mức
giá đoán trên Booking.com sẽ bán những đêm thật với giá sai.

## Giá trên Booking.com

Booking.com không mở giá của bạn cho nhà cung cấp kết nối theo cách đọc ngược lại được. Giá bạn đặt
trong Santara được đẩy **ra** Booking.com; không có gì được nhập **vào**. Hãy đặt giá tại đây (hoặc
bằng [quy tắc định giá](/vi/money/pricing/)) và xem Santara là nguồn đúng.

## Thay đổi hoặc gỡ bỏ

- **Đổi bất động sản** — đặt phòng và tin nhắn trong tương lai sẽ về bất động sản bạn chọn. Những gì
  đã nhập vẫn ở nguyên chỗ và ánh xạ phòng được giữ.
- **Xóa khỏi Santara** trên một phòng — chỉ xóa dữ liệu đã nhập tại đây.
- **Ngắt kết nối** — dừng đồng bộ và xóa dữ liệu Booking.com đã nhập của chỗ nghỉ này. Extranet của
  bạn không bị ảnh hưởng.

:::caution[Nếu kênh biến mất]
*"Kênh này đã bị gỡ ở phía channel manager"* nghĩa là kết nối bị hủy ở đầu trên — thường do nhà cung
cấp kết nối bị gỡ trong extranet. Đồng bộ đã dừng. Hãy chấp nhận lại nhà cung cấp trên Booking.com,
rồi ngắt và kết nối lại tại đây.
:::
