---
title: Đội ngũ và vai trò
description: Mời co-host, quản lý và nhân viên dọn phòng, rồi trao cho mỗi người đúng phần workspace họ cần.
sidebar:
  order: 5
---

**Cài đặt → Đội ngũ**. Lời mời được gửi qua email dưới dạng liên kết. Nếu người nhận chưa có tài khoản,
họ đăng ký trước, rồi chấp nhận lời mời để tham gia workspace này.

Một người có thể giữ vai trò khác nhau ở các workspace khác nhau. Tài khoản đăng nhập là của họ; quyền
truy cập là theo từng workspace.

![Màn hình đội ngũ: ai đang trong workspace, vai trò của họ, và họ chạm được tới đâu.](/screens/team.vi.png)

## Ba vai trò

| Vai trò | Thấy gì | Dùng khi nào |
| --- | --- | --- |
| **Host admin** | Mọi thứ: toàn bộ danh mục và phần thanh toán | Bạn, và người bạn tin về chuyện tiền bạc |
| **Co-host** | Quyền vận hành hằng ngày, có giới hạn phạm vi | Đối tác, quản lý, trưởng bộ phận bảo trì |
| **Nhân viên dọn phòng** | Ca dọn được giao cho họ, và đủ thông tin để tìm ra tòa nhà | Nhân viên dọn phòng của bạn |

Không có vai trò "quản lý bất động sản" riêng, và bạn cũng không cần: một **co-host giới hạn ở hai
tòa nhà** chính là quản lý bất động sản. Giới hạn phạm vi là nửa sau của mọi lời mời — xem bên dưới.

**Chủ nhà chính không thể bị xóa** khỏi workspace; đó là thứ ngăn một workspace rơi vào cảnh không
còn ai có thể trả tiền cho nó.

## Quyền truy cập thực sự hoạt động ra sao

Quyền truy cập không phải danh sách màn hình theo chức danh. Mỗi màn hình **và mỗi route API** đều yêu
cầu một **năng lực** có tên — `stay.read`, `pricing.write`, `guest.message.send` — và một vai trò là
một gói năng lực, có thể thu hẹp về một số tòa nhà và phòng.

Hai hệ quả đáng biết:

- **Ẩn một mục menu không phải là biện pháp bảo mật.** Route thực thi đúng năng lực mà thanh điều
  hướng đọc, nên một liên kết gõ tay sẽ bị từ chối, chứ không chỉ bị giấu đi.
- **Lớp dữ liệu tách khỏi màn hình.** Mã cửa, thông tin liên hệ của khách và các con số tài chính đều
  là lớp riêng. Nhân viên dọn phòng có thể biết công việc ở tòa nào mà không được cho mã cửa, và quản
  lý có thể vận hành mà không thấy tiền của chủ sở hữu.

## Giới hạn theo tòa nhà

Mỗi thành viên có một thiết lập **Quyền truy cập**: những tòa nhà nào, và những phòng nào bên trong,
mà họ được làm việc. Hai lựa chọn:

- **Tất cả tòa nhà, kể cả những tòa thêm sau này** — lựa chọn đúng cho một đối tác, và không phải
  xem lại mỗi lần bạn mua thêm.
- **Một tập chọn lọc** — chọn tòa nhà và phòng. Bản tóm tắt ghi *"3 tòa nhà · 7 phòng"*, và thành
  viên không có quyền nào được nói rõ thay vì thấy một bảng điều khiển trống mà họ sẽ báo là lỗi.

Thành viên bị giới hạn chỉ thấy công việc ở tòa của họ và không thấy gì về phần còn lại trong danh
mục của bạn — không lịch, không doanh thu, không khách.

**Host admin luôn có quyền với mọi tòa nhà**, kể cả những tòa thêm sau này. Đó không phải một thiết
lập, và vì thế đây là vai trò bạn trao đi cẩn thận nhất.

## Trải nghiệm của nhân viên dọn phòng

Họ đăng nhập và thấy các ca dọn được giao, đúng ngày diễn ra, kèm địa chỉ và ghi chú lối vào cho những
tòa đó. Họ đánh dấu hoàn tất, kèm ảnh nếu cần. Với họ, sản phẩm chỉ có vậy, và đó là chủ ý.

Nếu bạn không muốn cấp tài khoản, hãy chia sẻ
[tin nhắn cụm dọn phòng](/vi/daily/tasks/#cụm-dọn-phòng) từ bản tóm tắt hằng ngày — nó chứa công việc
của họ và không có gì khác.

## Gỡ một người khỏi đội

Xóa khỏi đội và quyền truy cập của họ chấm dứt ngay lập tức trên mọi thiết bị. Công việc họ đã làm —
ca dọn đã xong, tin nhắn đã gửi, ticket đã xử lý — vẫn ghi nhận tên họ trong lịch sử.

## Tài khoản của chính bạn

**Cài đặt → Cá nhân** chứa tên, ngôn ngữ và múi giờ của bạn. **Cài đặt → Bảo mật** chứa mật khẩu và
bảo vệ tài khoản. Cả hai đi theo bạn giữa các workspace. Xem
[Cài đặt workspace](/vi/setup/workspace/) để biết phần dùng chung.
