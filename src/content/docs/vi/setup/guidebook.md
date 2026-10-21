---
title: Sổ tay hướng dẫn và mã QR dán phòng
description: Mỗi phòng một mã QR mở trang hướng dẫn cho kỳ lưu trú — thông tin chỗ ở, gợi ý quanh đây, dịch vụ bán thêm để yêu cầu, và mã cửa khi khách đã xác nhận đặt phòng.
sidebar:
  order: 4
---

In một nhãn QR cho mỗi phòng. Khách quét bằng camera điện thoại và mở ra một trang về kỳ lưu trú của
họ, bằng ngôn ngữ của họ: giờ nhận và trả phòng, tên mạng Wi-Fi, nội quy, tiện nghi, những địa điểm
bạn gợi ý, bản đồ, và các dịch vụ bán thêm. Khi khách nhập mã đặt phòng, cùng trang đó hiện
**mã cửa**, **mật khẩu Wi-Fi** và **cách vào phòng**.

Khách không phải cài gì, cũng không phải tạo tài khoản.

Mở từ **Chỗ nghỉ**, chọn một bất động sản, rồi bấm **Thiết lập sổ tay** trên thẻ **Sổ tay hướng dẫn
cho khách**. Trang của từng phòng cũng có thẻ này, với nút **Quản lý mã QR**.

## Khách thấy gì

Trang có hai lớp, và sự khác biệt giữa hai lớp là toàn bộ thiết kế.

![Trang khách mở từ nhãn QR của phòng, trước khi xác nhận: thông tin lưu trú, nội quy và một ô nhập mã đặt phòng.](/screens/guidebook-guest.vi.png)

| Bất kỳ ai quét nhãn | Chỉ khách đã xác nhận đặt phòng |
| --- | --- |
| Giờ nhận và trả phòng | Mã cửa |
| Tên mạng Wi-Fi | Mật khẩu Wi-Fi |
| Nội quy, chỗ đậu xe, thú cưng | Hướng dẫn nhận phòng ("cách vào phòng") |
| Tiện nghi của phòng | Giá các dịch vụ bán thêm, và nút **Gửi yêu cầu** |
| Địa điểm gợi ý và bản đồ | Lời chào kèm tên và ngày lưu trú |
| Những dịch vụ bạn bán thêm | |
| Liên kết tới [website đặt phòng](/vi/setup/booking-site/) của bạn, nếu đã xuất bản | |

:::caution[Nhãn QR là một liên kết công khai]
Ai chụp được nhãn là có liên kết — khách cũ, người giao hàng, người đi ngang qua cổng. Vì vậy không có
thứ gì mở được cửa lại truy cập được chỉ bằng liên kết. Nếu một nhãn bị mất hoặc nằm ở chỗ không nên,
hãy [đổi mã](#mã-qr-dán-phòng): nhãn đã in ngừng hoạt động ngay.
:::

Trang mở theo ngôn ngữ trình duyệt của khách — tiếng Anh, tiếng Indonesia hoặc tiếng Việt — và có ô
chọn ngôn ngữ ở trên cùng. Trang không hiện trên công cụ tìm kiếm.

Mọi thứ trên trang lấy từ những gì bạn đã điền: giờ, Wi-Fi và mã từ
[thông tin lưu trú](/vi/setup/properties/#thông-tin-lưu-trú-wifi-mã-cửa-lối-vào), tiện nghi từ phòng,
và dịch vụ bán thêm từ [cài đặt upsell](/vi/money/upsells/).

## Khách xác nhận đặt phòng thế nào

Khách chỉ nhập **mã đặt phòng** trong xác nhận đặt phòng — không cần gì khác. Khoảng trắng, dấu gạch và
chữ hoa không quan trọng. Mã ngắn hơn sáu ký tự không bao giờ được khớp.

![Cùng trang đó sau khi nhập mã đặt phòng: lời chào, mã cửa (được che cho tới khi chạm) và mật khẩu Wi-Fi.](/screens/guidebook-verified.vi.png)

Quyền xem đi theo kỳ lưu trú, theo múi giờ của chính bất động sản:

- **Mở từ một ngày trước khi đến** và **đóng khi hết ngày trả phòng**.
- Đặt phòng **bị hủy** mất quyền xem ngay lập tức, kể cả trên điện thoại đang hiện mã.
- Nhãn trong một phòng nhận đặt phòng của phòng đó, và cả những đặt phòng trong tòa nhà chưa được gắn
  vào phòng nào; nhãn của cả tòa nhà nhận mọi đặt phòng trong tòa nhà.
- Khách kiểm tra quá sớm sẽ được báo ngày thông tin mở, thay vì báo không tìm thấy đặt phòng. Kiểm tra
  sớm không bị tính vào giới hạn nhập sai.

Sau năm lần nhập sai trên cùng một điện thoại, trang yêu cầu khách đó đợi 15 phút. Giới hạn được tính
theo từng điện thoại, nên khách dùng chung Wi-Fi của tòa nhà không khóa lẫn nhau — chỉ khi nhiều điện
thoại trên cùng một kết nối nhập sai liên tục thì kết nối đó mới tạm dừng cho mọi người. **Không phải bạn? Đăng xuất** xóa thông tin khỏi điện thoại đó, dành cho máy dùng
chung hoặc khi khách trả lại máy.

:::note[Đặt phòng không có mã từ kênh]
Khách chỉ xác nhận được đặt phòng có mã xác nhận từ một kênh. Lượt lưu trú bạn tạo thủ công không có mã
để khách nhập, nên những khách này thấy phần công khai của trang nhưng không mở được mã cửa ở đó — hãy gửi
mã qua tin nhắn như bạn vẫn làm.
:::

## Mã QR dán phòng

Mỗi tòa nhà có một nhãn cho cả tòa nhà — sảnh, cổng, quầy đón khách — cộng một nhãn cho mỗi phòng. Các
nhãn được tạo lần đầu bạn mở trang sổ tay.

Mỗi ô nhãn hiện mã QR, mã, số lượt quét trong 30 ngày qua, và ba thao tác:

| Thao tác | Tác dụng |
| --- | --- |
| **Bật / Tắt** | Tắt khiến nhãn đó hiện "không khả dụng" cho tới khi bạn bật lại. Không cần in lại. |
| **Sao chép liên kết** / **Mở trang hướng dẫn** | Cùng trang đó mà không cần quét — để gửi trong tin nhắn hoặc xem khách thấy gì. |
| **Đổi mã** | Cấp mã mới cho nhãn. **Nhãn đã in ngừng hoạt động ngay** và bạn in nhãn mới. |

### In nhãn

**In mã QR** xếp mọi nhãn đang bật lên khổ A4, ba nhãn một hàng. Mỗi nhãn ghi tên bất động sản, tên
phòng và dòng "Quét để xem hướng dẫn lưu trú & Wi-Fi" bằng tiếng Anh, tiếng Việt và tiếng Indonesia, nên
một lần in dùng được cho mọi khách. In ở **tỉ lệ 100%**, cắt theo đường nét đứt và dán mỗi nhãn trong
phòng tương ứng.

Mỗi nhãn cũng tải xuống được dạng **SVG** — định dạng nhà in cần để làm nhãn dán hoặc kệ mica.

## Địa điểm gợi ý

Danh sách **Địa điểm gợi ý** là những nơi bạn tự giới thiệu: nhà hàng, điểm tham quan, nhà thuốc, ga
gần nhất.

- **Thêm địa điểm** — tên, loại (Ăn uống, Tham quan, Trải nghiệm, Mua sắm, Đi lại, Thiết yếu), gợi ý cho
  khách, địa chỉ và liên kết bản đồ tùy chọn. Địa điểm được xuất bản ngay.
- **Soạn nháp bằng AI** — gợi ý tối đa mười hai địa điểm nổi tiếng gần địa chỉ tòa nhà. Chúng được lưu
  dạng **bản nháp**, khách không bao giờ thấy. Mở từng địa điểm trên bản đồ trước khi xuất bản: AI có thể
  nhầm về địa điểm, và liên kết bản đồ là một lượt tìm kiếm nên địa điểm không tồn tại sẽ lộ ra ngay.
  Bất động sản cần có địa chỉ để dùng tính năng này.
- **Xuất bản / Ẩn**, lên, xuống, sửa, xóa. Sửa tên hoặc gợi ý sẽ xóa bản dịch đã lưu của địa điểm đó, để
  khách không bao giờ đọc bản dịch của những chữ bạn đã đổi.
- **Dịch cho khách** — chọn ngôn ngữ bạn dùng để viết địa điểm, các địa điểm đã xuất bản sẽ được dịch
  sang hai ngôn ngữ còn lại. Bản dịch sẵn có được giữ nguyên.

Mỗi tòa nhà chứa tối đa 60 địa điểm.

Khách thấy mỗi địa điểm kèm loại của nó — biểu tượng và nhãn có màu — và lọc được danh sách theo loại. Trên điện thoại, mỗi địa điểm là một dòng gọn với nút **Bản đồ**.

![Địa điểm gợi ý trên điện thoại của khách, lọc theo loại, bằng ngôn ngữ của khách.](/screens/guidebook-places-phone.vi.png)

## Khách sẽ thấy gì: phần cài đặt

Bảng **Khách sẽ thấy gì** trên cùng trang, cho từng tòa nhà:

- **Bật sổ tay hướng dẫn cho tòa nhà này** — tắt thì mọi nhãn trong tòa nhà hiện "không khả dụng", không
  cần đổi mã nào.
- **Lời chào** — mỗi ngôn ngữ một lời chào (EN, ID, VI). Để trống một ngôn ngữ để dùng lời chào mặc định.
- **Các mục** — tắt Tiện nghi; Nội quy, chỗ đậu xe và thú cưng; Bản đồ và chỉ đường; Địa điểm gợi ý; hoặc
  Bán thêm.
- **Hiển thị mã cửa, mật khẩu Wi-Fi và hướng dẫn nhận phòng cho khách đã xác minh** — tắt mục này thì
  trang không bao giờ hiện thông tin vào phòng, kể cả với khách đã xác nhận.

Bấm **Lưu**. Chỉ những gì bạn thay đổi mới được lưu.

## Khi khách yêu cầu dịch vụ bán thêm

Khách đã xác nhận thấy các dịch vụ bạn đang bật trong **Upsell → Cài đặt** — nhận phòng sớm, trả phòng
muộn, ở thêm một đêm — với đúng mức giá mà cài đặt đó tính cho kỳ lưu trú.

Một dịch vụ chỉ được chào khi lịch cho phép:

| Dịch vụ | Điều kiện |
| --- | --- |
| **Nhận phòng sớm** | Đêm trước ngày đến còn trống, và chưa qua ngày đến |
| **Trả phòng muộn** | Không ai ở phòng vào đêm của ngày trả phòng |
| **Ở thêm một đêm** | Tương tự — đêm sau kỳ lưu trú còn trống |

Những đêm bạn đã đóng trên lịch được tính là không khả dụng. Các trường hợp khác hiện "Không khả dụng
cho ngày của bạn".

Khi khách bấm **Gửi yêu cầu**:

1. Yêu cầu hiện trên **Upsell** với trạng thái **Đã chấp nhận**, đúng mức giá khách đã thấy.
2. Mọi người có thể xử lý phòng đó nhận thông báo trong [chuông](/vi/setup/workspace/#thông-báo).
3. **Đặt phòng không tự thay đổi.** Xác nhận với khách, rồi gia hạn hoặc điều chỉnh kỳ lưu trú trong
   [Đặt phòng](/vi/daily/bookings/#hủy-và-thay-đổi) như mọi thay đổi khác.

Mỗi khách yêu cầu được mỗi dịch vụ một lần cho một kỳ lưu trú. Nếu bạn từ chối trên Upsell, yêu cầu đó
giữ nguyên trạng thái từ chối.

## Các con số

Đầu trang sổ tay đếm 30 ngày qua:

| Con số | Đếm gì |
| --- | --- |
| **Lượt quét QR** | Những lần mở từ nhãn đã in |
| **Lượt xem trang** | Mọi lần mở khác, kể cả khách quay lại trang |
| **Khách đã xác minh** | Những lần xác nhận đặt phòng thành công |
| **Yêu cầu bán thêm** | Số dịch vụ được yêu cầu |

Ngày được tính theo giờ UTC, nên một lượt quét ban đêm ở Bali hay Hà Nội có thể rơi vào ngày hôm sau.

## Ai được thay đổi

Xem trang sổ tay cần quyền truy cập bất động sản. Thay đổi nhãn, địa điểm hoặc cài đặt cần quyền sửa bất
động sản **và** quyền truy cập cả tòa nhà — thành viên chỉ được giao một phòng trong tòa nhà có thể xem
nhưng không thay đổi được những gì khách của mọi phòng nhìn thấy. Xem
[Đội ngũ và vai trò](/vi/setup/team/).
