---
title: Go live
description: Nhập listing không đồng nghĩa với giao lịch. Trang này nói điều gì thay đổi khi bạn bấm Go live, và cần kiểm tra gì trước.
sidebar:
  order: 4
---

Hãy đọc trước khi bấm nút. Đây là trang duy nhất trong tài liệu này mô tả một hành động không thể âm
thầm hoàn tác.

## Lời cam kết

**Nhập một listing không bao giờ chiếm quyền kiểm soát lịch của nó.** Sau khi nhập, listing của bạn
được tạo, ánh xạ và định giá từ chính dữ liệu của kênh, và kênh vẫn chạy y như trước. Bạn có thể xem
lại mọi thứ, sửa chỗ sai, và để yên đó cả tuần.

Quyền kiểm soát chuyển ở đúng một thời điểm, bằng đúng một hành động có chủ ý: **Go live**.

![Bốn trạng thái mà một listing đi qua, với Go live là cánh cổng trước trạng thái cuối.](/diagrams/listing-states.vi.svg)

## Go live thay đổi điều gì

Từ lúc đó, với các listing bạn đã đưa lên:

- **Kênh trao quyền kiểm soát lịch cho Santara AI.** Tình trạng trống nay được điều khiển từ đây. Một
  lượt đặt ở bất kỳ kênh nào sẽ đóng đêm đó ở mọi kênh.
- **Giá được đẩy từ đây.** Giá vẫn y như trên kênh cho tới khi bạn đổi trong Santara AI hoặc
  [quy tắc định giá](/vi/money/pricing/) xuất bản.
- **Các ràng buộc được đẩy đi** — số đêm tối thiểu, đóng nhận phòng, v.v.
- Đặt phòng, khách, tin nhắn và đánh giá đã đồng bộ từ lúc nhập; điều đó không đổi.

## Kiểm tra năm điều này trước

1. **Mỗi phòng đều có giá mỗi đêm.** Phòng không giá thì không bán được, và go live với giá bằng
   không là sai lầm duy nhất phải trả giá ngay trong ngày.
2. **Sức chứa đúng.** Số khách quyết định giá khách phụ trội và những gì Booking.com chấp nhận.
3. **Lịch giống lịch của kênh.** Mở [Lịch](/vi/daily/calendar/) và so một tháng với kênh.
4. **Đúng phòng ánh xạ đúng listing.** Ánh xạ chéo sẽ gửi tình trạng trống sai tới listing sai — tệ
   hơn cả không ánh xạ.
5. **Số lượng đơn vị của bạn.** Tình trạng trống bị chặn ở số đơn vị của phòng. Nếu một phòng là một
   căn hộ nhưng số đơn vị ghi 3, bạn vừa chào bán ba căn.

## Go live từng listing một

Bạn không phải đưa mọi thứ lên cùng lúc. Cho một listing chạy, theo dõi một ngày, rồi làm phần còn
lại. Listing chưa chạy vẫn giữ nguyên thiết lập và ánh xạ.

## Nếu không thành công

Lỗi được hiển thị đúng như kênh báo. Các lỗi thường gặp và cách xử lý có trong
[Kết nối Airbnb](/vi/channels/airbnb/#4-go-live).

## Tạm dừng hoặc rút lui

- **Để ngừng bán đêm**, hãy đóng ngày trong [lịch](/vi/daily/calendar/). Đây là cách đúng để tạm dừng.
- **Để trả lại quyền kiểm soát**, xóa listing khỏi Santara AI hoặc ngắt kết nối. Listing và lịch trên
  kênh không bị ảnh hưởng, nhưng các đặt phòng, tin nhắn và đánh giá đã nhập ở đây sẽ bị xóa theo.

:::caution[Đặt phòng phát sinh khi đang chạy là thật]
Bất cứ điều gì khách đặt trong thời gian chạy đều tồn tại trên kênh và phải được thực hiện, dù sau đó
bạn làm gì trong Santara AI. Ngắt kết nối xóa bản ghi ở đây, không xóa nghĩa vụ.
:::
