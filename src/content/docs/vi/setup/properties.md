---
title: Bất động sản và phòng
description: Tòa nhà, những phòng khách thực sự đặt, và các thông tin giúp tin nhắn khách cùng website đặt phòng trở nên cụ thể thay vì mơ hồ.
sidebar:
  order: 1
---

**Bất động sản** là một tòa nhà hoặc địa chỉ. **Phòng** là đơn vị có thể đặt bên trong nó. Phòng là
thứ khách đặt, thứ kênh ánh xạ tới, và thứ được tính phí. Xem
[Santara AI được cấu trúc thế nào](/vi/start/concepts/#bất-động-sản-rồi-phòng) nếu cách chia này còn mới
với bạn.

![Chỗ nghỉ: mọi phòng nhóm theo chỗ nghỉ của nó, với giá mỗi đêm, số căn, kênh và trạng thái, cùng các bộ lọc Tất cả / Cần bạn xử lý / Đang bán / Chưa đăng.](/screens/properties.vi.png)

## Tạo thủ công

Bạn không cần kênh nào. **Chỗ nghỉ → Thêm chỗ nghỉ**, điền phần cơ bản, rồi thêm phòng đầu tiên
— phòng mới là thứ khách đặt, nên bất động sản không có phòng thì không bán được.

Đây là lối đi đúng nếu bạn chỉ nhận đặt phòng trực tiếp, hoặc muốn chuẩn bị mọi thứ trước khi kết nối
kênh.

## Bất động sản nhập về

Bất động sản tạo từ [listing đã nhập](/vi/channels/airbnb/) sẽ có sẵn dữ liệu từ kênh: tiêu đề, mô tả,
ảnh, tiện nghi, sức chứa và giá. Kênh không giữ mọi thứ, nên hãy kiểm tra hai điều sau mỗi lần nhập:

1. **Giá mỗi đêm** — phòng không có giá thì không bán được.
2. **Sức chứa khách** — nó quyết định giá khách phụ trội và những gì Booking.com chấp nhận.

## Những gì thuộc về bất động sản

Địa chỉ, mô tả, nội quy, ảnh tòa nhà, **cụm dọn phòng**, và các listing đã kết nối.

## Cài đặt chỗ nghỉ

**Cài đặt** trên một bất động sản mở trang **Cài đặt chỗ nghỉ**: những quy tắc mà các kênh áp dụng
cho cả bất động sản. Bấm **Lưu cài đặt**; trang sẽ cho biết thay đổi đã tới các kênh chưa — *Đã đồng bộ với
kênh*, hay đang chờ hoặc bị lỗi.

| Thẻ | Điều chỉnh gì |
| --- | --- |
| **Thông tin cơ bản**, **Liên hệ**, **Vị trí** | Tên, tiền tệ mặc định, loại chỗ nghỉ, thông tin liên hệ, địa chỉ và tọa độ chia sẻ với các kênh. Đổi tiền tệ không làm thay đổi rate plan của các phòng hiện có |
| **Cài đặt giá** | Giá tối thiểu và tối đa của bất động sản |
| **Cài đặt tự động cập nhật tình trạng phòng** | Phòng trống có tự thay đổi khi một lượt đặt bị sửa hoặc hủy hay không. Lượt đặt mới luôn làm giảm phòng trống — không tắt được |
| **Số ngày tồn kho** | Lịch chạy trước bao nhiêu ngày, từ 100 đến 730 |
| **Cài đặt số đêm tối thiểu** | Chỉ dùng một loại số đêm tối thiểu: **Theo ngày đến (arrival)**, **Suốt kỳ nghỉ (through)**, hoặc **Cả hai** |
| **Giờ ngừng bán** | Thời điểm ngừng bán cho ngày hôm đó, theo múi giờ của bất động sản. Tới giờ đó, phòng trống của ngày hôm đó về 0 |
| **Số ngày đặt trước tối đa** | Đóng các ngày xa hơn **Số ngày mở bán** |

:::caution[Hai mục trong số này chỉ đi một chiều]
- Đổi **loại số đêm tối thiểu** sẽ xóa mọi giá trị của loại bạn thôi dùng. Hãy chạy đồng bộ toàn bộ
  sau đó và kiểm tra kết quả.
- **Số ngày đặt trước tối đa** không tự mở lại các ngày khi bạn đổi nó về sau.
:::

## Những gì thuộc về phòng

- **Giá và rate plan** — xem [Smart pricing](/vi/money/pricing/).
- **Sức chứa** — bao nhiêu khách, và giá khách phụ trội.
- **Số đơn vị** — phòng này đại diện cho bao nhiêu căn giống nhau. Một căn hộ là 1. Đây là giới hạn
  cứng của tình trạng trống, ở mọi nơi.
- **Ảnh** của chính phòng đó.
- **Tiện nghi** và mô tả riêng của phòng.
- **Ánh xạ kênh**.

## Thông tin lưu trú: wifi, mã cửa, lối vào

Chúng tồn tại ở **cả hai** cấp. Đặt ở bất động sản thì mọi phòng thừa hưởng; đặt ở phòng thì phòng đó
thắng. Để trống giá trị của phòng để thừa hưởng.

| Trường | Được dùng ở |
| --- | --- |
| Tên và mật khẩu wifi | Tin nhắn nhận phòng, website đặt phòng, trả lời khách, [sổ tay hướng dẫn](/vi/setup/guidebook/) (mật khẩu chỉ cho khách đã xác minh) |
| Mã cửa / hộp khóa | Tin nhắn nhận phòng; sổ tay hướng dẫn, chỉ cho khách đã xác nhận đặt phòng |
| Ghi chú lối vào | Tin nhắn nhận phòng; sổ tay hướng dẫn, chỉ cho khách đã xác minh |
| Giờ nhận và trả phòng | Mọi nơi, kể cả canh giờ dọn phòng |

:::caution[Mã cửa được kiểm soát truy cập]
Mã cửa và ghi chú lối vào chỉ hiển thị cho các vai trò cần đến. Nhân viên dọn phòng thấy những tòa họ
làm việc; họ không thấy mã của phần còn lại trong danh mục của bạn. Xem
[Đội ngũ và vai trò](/vi/setup/team/).
:::

## Vì sao điền đủ lại quan trọng

Các phần AI của sản phẩm chỉ cụ thể bằng đúng mức bất động sản phía sau. Bất động sản không có giờ nhận
phòng, wifi và địa chỉ sẽ cho ra bản nháp mơ hồ và thời điểm upsell yếu. Chính vì vậy trang của mỗi
phòng có danh sách **Sẵn sàng bán**, và **Mã cửa & Wi-Fi** là một mục trong đó.

Trên màn hình chỗ nghỉ, bộ lọc **Cần bạn xử lý** chỉ hiện những phòng chưa bán ổn được — chưa có giá
mỗi đêm, chưa xác nhận số khách tối đa, hoặc đồng bộ kênh thất bại.

## Đồng bộ từ kênh

**Nhập dữ liệu từ kênh** trên một bất động sản kéo về đặt phòng, lịch, tin nhắn và chi tiết listing
mới nhất — xác nhận bằng **Nhập ngay**. Ở đâu kênh có giá trị thì **giá trị đó thay thế của bất động
sản**; những trường kênh không cung cấp vẫn giữ nguyên. Hãy dùng sau khi sửa listing trên kênh; đừng
dùng ngay sau khi sửa ở đây thứ mà kênh cũng biết.

## Di chuyển, nhân bản, xóa

- **Chuyển một phòng sang bất động sản khác** — chỉ được khi phòng chưa ánh xạ tới kênh.
- **Nhân bản một phòng** — sao chép phần cơ bản, sức chứa, chi tiết và rate plan thủ công thành
  *"(bản sao)"*. Bản sao chưa liên kết kênh nào cho tới khi bạn ánh xạ.
- **Xóa một phòng** — rate plan, lịch trống và ảnh của nó biến mất. Đặt phòng và đánh giá cũ được giữ
  nhưng không còn gắn với phòng.
- **Xóa một bất động sản** — chỉ chủ workspace mới làm được, và bị từ chối khi listing kênh còn kết
  nối. Hãy ngắt chúng trước, để phía kênh cũng được dọn sạch. Việc xóa sẽ bỏ luôn **đặt phòng, lịch
  và tin nhắn** của nó cùng các listing đã kết nối trong Santara AI, không chỉ riêng bất động sản.
  Khoản đã trả cho tháng này không được hoàn lại.
