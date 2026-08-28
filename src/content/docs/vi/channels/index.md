---
title: Kết nối kênh hoạt động ra sao
description: Kết nối là gì, dữ liệu nào đồng bộ theo mỗi chiều, và bốn trạng thái mà một listing đi qua.
sidebar:
  order: 1
---

Santara kết nối tới các kênh bạn bán thông qua một channel manager được chứng nhận. Khi một listing
đã chạy, bốn thứ luân chuyển:

| Chiều | Cái gì di chuyển |
| --- | --- |
| **Ra kênh** | Tình trạng trống, giá mỗi đêm, số đêm tối thiểu, các ràng buộc |
| **Vào từ kênh** | Đặt phòng, hủy, khách, tin nhắn, đánh giá |
| **Vào một lần, khi nhập** | Chi tiết listing — tiêu đề, ảnh, tiện nghi, sức chứa, giá hiện có |
| **Ra khi bạn yêu cầu** | Trả lời của bạn cho tin nhắn khách; phản hồi của bạn cho đánh giá |

Ngoài ra không có gì khác. Santara không sửa mô tả listing của bạn, và không bao giờ thay đổi một mức
giá trên kênh mà bạn không nhập hoặc không do quy tắc định giá của bạn tính ra.

![Tình trạng trống và giá đi ra kênh; đặt phòng, khách, tin nhắn và đánh giá đi vào. Chi tiết listing đến một lần, khi nhập.](/diagrams/sync-directions.vi.svg)

## Các kênh được hỗ trợ

| Kênh | Cách kết nối | Trạng thái |
| --- | --- | --- |
| **Airbnb** | Bạn cấp phép cho Santara trên Airbnb, rồi chọn listing | Có sẵn |
| **Booking.com** | Bạn thêm nhà cung cấp kết nối trong extranet, rồi nhập Hotel ID | Có sẵn |
| **Website đặt phòng của bạn** | Có sẵn trong Santara, không cần kết nối | Có sẵn |
| **VRBO** | Qua cùng channel manager | Trong lộ trình — hiện là thẻ xám trong Cài đặt → Kênh cho tới khi phát hành |
| **PriceLabs** | Phát hiện chỉ-đọc: nếu bạn dùng PriceLabs, bộ máy định giá của Santara nhường bước | Có sẵn |

![Cài đặt → Kênh trước khi kết nối bất cứ thứ gì. Mỗi kênh được liên kết riêng, với trạng thái và thời điểm đồng bộ cuối của nó.](/screens/channels.vi.png)

## Kết nối và tài khoản

**Kết nối** là một tài khoản kênh. Bạn có thể kết nối:

- nhiều **tài khoản Airbnb** vào một workspace — thường gặp với đơn vị quản lý giữ listing dưới nhiều
  tài khoản chủ nhà;
- nhiều **chỗ nghỉ Booking.com**, mỗi Hotel ID một cái.

Mỗi kết nối có trang riêng tại **Cài đặt → Kênh**, hiển thị listing của nó, lần đồng bộ gần nhất, và
mọi thao tác khả dụng. Không phần nào của Santara giả định chỉ có một cái duy nhất.

## Bốn trạng thái của một listing

Bộ từ vựng này được dùng giống hệt trên mọi màn hình:

![Bốn trạng thái mà một listing đi qua, với Go live là cánh cổng trước trạng thái cuối.](/diagrams/listing-states.vi.svg)

1. **Chưa kết nối** — chưa liên kết tài khoản kênh nào.
2. **Đã liên kết — chưa ánh xạ** — Santara thấy listing trên kênh, nhưng nó chưa trỏ tới phòng nào ở
   đây. Không gì đồng bộ.
3. **Đã ánh xạ — chờ kích hoạt** — đã trỏ tới một phòng. Vẫn chưa có gì đồng bộ.
4. **Đang chạy** — tình trạng trống và giá đi ra, đặt phòng và tin nhắn đi vào.

Khoảng cách giữa 3 và 4 là cố ý và do bạn khép lại. Xem [Go live](/vi/channels/going-live/).

## Thời gian đồng bộ

- **Đặt phòng mới, hủy và tin nhắn** đến trong vài giây tới một phút.
- **Thay đổi tình trạng trống và giá** được đẩy đi khi bạn lưu, thường hiện trên kênh trong một phút.
- **Đọc lại toàn bộ** diễn ra khi bạn bấm **Làm mới**, và theo lịch định kỳ.

Nếu kênh gặp sự cố, thay đổi xếp hàng và chảy tiếp khi kênh hồi phục. Bạn không cần làm lại.

## Ngắt kết nối nghĩa là gì

Ngắt kết nối sẽ dừng đồng bộ và xóa các đặt phòng, khách, tin nhắn và đánh giá đến từ nó. **Không gì
trên kênh bị ảnh hưởng** — listing, lịch và các lượt đặt ở đó vẫn nguyên. Bạn có thể kết nối lại tài
khoản đó sau.

Xóa một listing (**Xóa khỏi Santara**) làm điều tương tự cho riêng phòng đó.

:::caution
Ngắt kết nối không phải cách để tạm dừng. Nếu muốn kênh ngừng nhận đặt phòng một thời gian, hãy đóng
ngày trong [lịch](/vi/daily/calendar/) — dữ liệu và lịch sử của bạn được giữ lại.
:::
