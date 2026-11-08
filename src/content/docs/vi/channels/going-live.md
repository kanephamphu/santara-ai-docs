---
title: Go live
description: Khi nào một listing lên chạy trên từng kênh, điều gì thay đổi lúc đó, và cần kiểm tra gì trước khi nhập hay ánh xạ bất cứ thứ gì.
sidebar:
  order: 5
---

Hãy đọc trước khi nhập một listing hoặc ánh xạ một phòng. Đây là trang duy nhất trong tài liệu này mô
tả một hành động không thể âm thầm hoàn tác.

## Khi nào một listing lên chạy

Lên chạy là lúc kênh giao quyền kiểm soát lịch cho Santara AI. Thời điểm đó tùy theo kênh:

- **Airbnb** — bước nhập đưa từng listing lên chạy ở khâu cuối, khi listing đã có giá thật và sức
  chứa đã được xác nhận. Listing nào Airbnb chưa xác nhận sẽ ở trạng thái **Đã thiết lập — chưa
  chạy**, và lên chạy khi bạn bấm **Cho chạy trên Airbnb** ở bước nhập, hoặc **Đăng trực tuyến** trên
  trang kết nối. Xem [Kết nối Airbnb](/vi/channels/airbnb/#đưa-lên-chạy).
- **Booking.com và mọi kênh khác** — không có bước Go live riêng. **Ánh xạ một phòng sẽ thiết lập và
  đưa phòng đó lên kênh** — tình trạng phòng trống bắt đầu đồng bộ ngay.

Vì vậy các bước kiểm tra dưới đây cần làm **trước** khi bạn nhập trên Airbnb, và **trước** khi bạn
ánh xạ phòng ở các kênh khác.

## Lên chạy thay đổi điều gì

Từ lúc đó, với các listing đang chạy:

- **Kênh trao quyền kiểm soát lịch cho Santara AI.** Tình trạng trống nay được điều khiển từ đây. Một
  lượt đặt ở bất kỳ kênh nào sẽ đóng đêm đó ở mọi kênh.
- **Giá được đẩy từ đây.** Trên Airbnb, giá vẫn y như cũ cho tới khi bạn đổi trong Santara AI hoặc
  [quy tắc định giá](/vi/money/pricing/) xuất bản. Trên Booking.com và các kênh khác, gói giá bạn đã
  ánh xạ chính là thứ kênh nhận được.
- **Các ràng buộc được đẩy đi** — số đêm tối thiểu, đóng nhận phòng, v.v.
- Đặt phòng, khách, tin nhắn và đánh giá được đồng bộ vào.

## Kiểm tra những điều này trước

1. **Mỗi phòng đều có giá mỗi đêm.** Phòng không giá thì không bán được, và lên chạy với giá bằng
   không là sai lầm duy nhất phải trả giá ngay trong ngày. Santara AI chặn liên kết kênh có giá bằng
   không vì lý do này, nhưng bạn vẫn nên kiểm tra.
2. **Sức chứa đúng.** Số khách quyết định giá khách phụ trội và những gì Booking.com chấp nhận.
3. **Lịch giống lịch của kênh.** Mở [Lịch](/vi/daily/calendar/) và so một tháng với kênh. Các đặt
   phòng hiện có lẽ ra đã nằm ở đó.
4. **Đúng phòng ánh xạ đúng listing.** Ánh xạ chéo sẽ gửi tình trạng trống sai tới listing sai — tệ
   hơn cả không ánh xạ.
5. **Sức chứa đã được xác nhận.** Trước khi một kênh chạm vào lịch của chỗ nghỉ lần đầu, Santara AI
   yêu cầu bạn xác nhận — **Xác nhận sức chứa trước khi chạy thật**, hoặc *Xác nhận sức chứa để tiếp
   tục* bên cạnh một listing. Bấm **Xác nhận** và trả lời **Có bao nhiêu đơn vị giống nhau?**, **Tiền
   tệ** và **Giá mỗi đêm**. Tình trạng trống bị chặn ở số đơn vị đó: nếu một phòng là một căn hộ mà
   bạn nhập 3, bạn vừa chào bán ba căn. Trước khi bạn xác nhận, hộp thoại cho biết bao nhiêu đêm sắp
   tới sẽ còn trống và bao nhiêu bị đóng vì kín chỗ.

## Lên chạy từng listing một

Bạn không phải đưa mọi thứ lên cùng lúc. Trên Airbnb, nhập một listing, theo dõi một ngày, rồi nhập
phần còn lại. Ở các kênh khác, ánh xạ một phòng trước. Listing chưa chạy vẫn giữ nguyên thiết lập và
ánh xạ.

## Nếu không thành công

Lỗi được hiển thị đúng như kênh báo. Các lỗi Airbnb thường gặp và cách xử lý có trong
[Kết nối Airbnb](/vi/channels/airbnb/#đưa-lên-chạy). Kết quả một phần là bình thường: listing đã lên
chạy thì đang chạy, phần còn lại vẫn giữ thiết lập, và bạn có thể thử lại.

## Tạm dừng hoặc rút lui

- **Để ngừng bán đêm**, hãy đóng ngày trong [lịch](/vi/daily/calendar/). Đây là cách đúng để tạm dừng.
  Dữ liệu và lịch sử của bạn được giữ lại.
- **Để trả lại quyền kiểm soát**, gỡ listing khỏi Santara AI hoặc ngắt kết nối. Listing và lịch trên
  kênh không bị ảnh hưởng, nhưng các đặt phòng, tin nhắn và đánh giá đã nhập ở đây sẽ bị xóa theo.

:::note[Các kỳ nghỉ sắp tới được giữ lại]
Gỡ hoặc ngắt kết nối chỉ dừng đồng bộ — không hủy gì trên kênh. Các kỳ nghỉ chưa kết thúc vẫn ở lại
Santara AI, nên những đêm đó vẫn bị chặn trên các kênh khác và không bị đặt trùng. Các kỳ nghỉ đã
qua cùng tin nhắn và đánh giá của chúng sẽ bị xóa.
:::

:::caution[Đặt phòng phát sinh khi đang chạy là thật]
Bất cứ điều gì khách đặt trong thời gian chạy đều tồn tại trên kênh và phải được thực hiện, dù sau đó
bạn làm gì trong Santara AI. Ngắt kết nối xóa bản ghi ở đây, không xóa nghĩa vụ.
:::
