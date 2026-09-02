---
title: Santara AI được cấu trúc thế nào
description: Workspace, bất động sản, phòng, rate plan, listing, kết nối. Sáu từ giải thích mọi màn hình trong sản phẩm.
sidebar:
  order: 3
---

Gần như mọi câu hỏi "cái này nằm ở đâu?" đều được sáu từ này trả lời. Đáng bỏ ra năm phút.

## Workspace

Mọi thứ bạn thấy đều thuộc về một **workspace** — bất động sản, đội ngũ, thanh toán, website đặt
phòng của bạn. Nếu bạn quản lý hai danh mục không được lẫn vào nhau, đó là hai workspace, và bạn
chuyển đổi từ menu tài khoản.

Tài khoản đăng nhập tách biệt với workspace. Một người có thể là chủ sở hữu ở workspace của mình và
là nhân viên dọn phòng ở workspace của người khác.

## Bất động sản, rồi phòng

**Bất động sản** là một tòa nhà hoặc một địa chỉ. **Phòng** là đơn vị có thể đặt bên trong nó.

| Bạn bán gì | Bất động sản | Phòng |
| --- | --- | --- |
| Nguyên villa, một listing | Villa đó | Một phòng — cả villa |
| Villa 3 phòng ngủ cho thuê theo phòng | Villa đó | Ba phòng |
| Nhà nghỉ nhỏ, 8 căn | Nhà nghỉ đó | Tám phòng |
| Năm căn hộ trong một tòa, bán riêng | Thường là năm bất động sản | Mỗi cái một phòng |

![Workspace chứa các bất động sản; bất động sản chứa các phòng; mỗi phòng có rate plan riêng và ánh xạ một-đối-một tới listing của kênh.](/diagrams/object-model.vi.svg)

**Phòng là thứ khách đặt, và phòng là thứ được tính phí.** Giá, tình trạng trống, ảnh, sức chứa và
ánh xạ kênh đều gắn với phòng. Bất động sản giữ những gì dùng chung: địa chỉ, wifi, nội quy, nhóm dọn
phòng.

Một số thông tin tồn tại ở cả hai cấp — wifi, mã cửa, ghi chú lối vào. Đặt ở bất động sản thì mọi
phòng thừa hưởng; đặt ở phòng thì phòng đó thắng. Xem
[Bất động sản và phòng](/vi/setup/properties/).

## Rate plan

**Rate plan** là mức giá bán của một phòng, kèm các quy tắc: số đêm tối thiểu, số khách đã bao gồm,
phí mỗi khách phụ trội, điều khoản hủy.

Một phòng có thể có nhiều rate plan (giá linh hoạt và giá không hoàn hủy rẻ hơn chẳng hạn). Phòng
nhập về đã có sẵn rate plan dựng từ dữ liệu của kênh.

Giá mỗi đêm trên lịch là giá của rate plan cho đêm đó. Quy tắc định giá thay đổi con số ấy; chúng
không tạo plan mới.

## Listing và kết nối

**Kết nối** là một tài khoản kênh bạn đã liên kết — một tài khoản Airbnb, hoặc một chỗ nghỉ
Booking.com. Bạn có thể có nhiều, kể cả nhiều tài khoản Airbnb.

**Listing** là một mục trên kênh, ánh xạ tới một phòng Santara AI. Ánh xạ là một-một. Khi listing đã
được ánh xạ và kênh đang hoạt động, tình trạng trống và giá của phòng đó chảy ra, còn đặt phòng và
tin nhắn chảy vào.

Một listing đi qua các trạng thái sau, và chữ trên màn hình cũng đúng như vậy:

| Trạng thái | Nghĩa là |
| --- | --- |
| **Chưa kết nối** | Chưa liên kết tài khoản kênh |
| **Đã liên kết — chưa ánh xạ** | Thấy được listing; chưa trỏ tới phòng nào |
| **Đã ánh xạ — chờ kích hoạt** | Đã trỏ tới một phòng, nhưng kênh chưa bàn giao |
| **Đang chạy** | Tình trạng trống và giá đi ra, đặt phòng và tin nhắn đi vào |

Không gì tự chuyển từ *đã ánh xạ* sang *đang chạy*. Xem [Go live](/vi/channels/going-live/).

## Đặt phòng, khách, luồng hội thoại

**Đặt phòng** (còn gọi là lượt lưu trú) thuộc về một phòng và một khoảng ngày. **Khách** là một con
người, và cùng một người qua hai lượt lưu trú là một khách có lịch sử. **Luồng** là cuộc hội thoại
với khách đó.

## Năng lực, không phải chức danh

Quyền truy cập không phải là "nhân viên dọn phòng thấy ba màn hình". Mỗi màn hình và mỗi route API
đều yêu cầu một **năng lực** có tên — `stay.read`, `pricing.write`, `guest.message.send` — và vai trò
của bạn là một gói năng lực, có thể được thu hẹp về một số tòa nhà. Nhờ vậy nhân viên dọn phòng biết
được công việc ở tòa nào mà không mở được cả danh mục của bạn. Xem
[Đội ngũ và vai trò](/vi/setup/team/).

## Các từ về tiền

- **Doanh thu** trong Santara AI nghĩa là **tiền thực nhận** — số kênh thực trả cho bạn sau hoa hồng.
  Điều này được ghi nhãn ở mọi nơi, vì tổng thu và tiền thực nhận chênh nhau khoảng 15% và lẫn lộn
  chúng sẽ phá hỏng báo cáo cả năm.
- **RevPAN** là doanh thu trên mỗi đêm khả dụng: doanh thu chia cho toàn bộ số đêm bạn phải bán. Đó
  là con số dùng để chấm điểm bộ máy định giá, vì ADR và công suất dịch chuyển độc lập và không cái
  nào một mình cho biết bạn có đang thắng hay không.
