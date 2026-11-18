---
title: Câu hỏi và yêu cầu đặt phòng
description: Hai thứ khách gửi cho bạn từ chính website của bạn — một câu hỏi, và một yêu cầu ngày mà bạn phải duyệt.
sidebar:
  order: 3
---

[Website đặt phòng](/vi/setup/booking-site/) của bạn tạo ra hai hộp thư, và chúng không phải là một.

## Câu hỏi

Tab **Khách tiềm năng** trong **Website đặt phòng**. Tất cả những ai đã dùng biểu mẫu liên hệ trên
website: tên, lời nhắn, và cách liên lạc với họ.

Nếu nó trống trong khi bạn nghĩ đáng lẽ phải có, nguyên nhân thường là website không có biểu mẫu nào —
hãy thêm mục **Liên hệ** ở tab Thiết kế, hoặc một trang liên hệ. Không có biểu mẫu thì không có câu
hỏi nào đến.

Đây là khách tiềm năng, không phải lượt đặt. Không có gì bị giữ và không ngày nào bị đặt trước.

## Yêu cầu đặt phòng

Tab **Yêu cầu** trong **Website đặt phòng**. Yêu cầu chỉ tồn tại với các bất động sản bạn đặt ở
**chế độ yêu cầu** thay vì đặt ngay — khách hỏi xin ngày, và không gì được giữ cho tới khi bạn đồng ý.

Danh sách này cũng hiện các lượt lưu trú khách **đã đặt và thanh toán trực tuyến**, gắn nhãn **Đã
thanh toán**, để mỗi khoản thanh toán trực tiếp luôn có một màn hình nơi bạn xem và hoàn tiền được.

Màn hình cho biết bao nhiêu người đang chờ bạn, vì đó mới là con số quan trọng: một yêu cầu bị bỏ
không trả lời là một vị khách đang quyết định đặt ở chỗ khác.

### Duyệt một yêu cầu

Duyệt, và lượt lưu trú được tạo, các đêm đóng lại trên mọi kênh đã kết nối như bất kỳ lượt đặt nào
khác. Từ chối, và các ngày đó vẫn để trống.

Chọn chế độ yêu cầu cho từng bất động sản ở mục **Bất động sản** của website đặt phòng. Đây là lựa
chọn đúng cho một villa mà bạn muốn xét nhóm khách, và là lựa chọn sai cho bất cứ thứ gì cạnh tranh
bằng sự tiện lợi.

### Tiền

Yêu cầu đặt phòng **không được thanh toán trực tuyến** — không có khoản nào bị tính khi khách hỏi, và
[Phí đặt phòng của khách](/vi/setup/booking-site/#5-kết-nối-stripe) (tùy chọn) không bao giờ áp dụng
cho nó.

Lượt lưu trú thanh toán trực tuyến khi checkout đi vào tài khoản Stripe của chính bạn. Nếu Phí đặt
phòng của khách đang bật, dòng đó ghi rõ khoản phí đặt phòng đã bao gồm, phần còn lại là tiền bạn
nhận. Để hoàn tiền:

- **Hoàn tiền theo chính sách** trả lại số tiền mà
  [chính sách hủy phòng](/vi/setup/booking-site/#giá-phụ-phí-và-chính-sách-hủy) của bạn cho phép vào
  hôm nay — dòng đó hiện trước số tiền và tỷ lệ phần trăm.
- **Hoàn tiền toàn bộ** trả lại mọi khoản chưa được hoàn.

Các lần hoàn một phần được cộng dồn, và dòng đó cho biết đã hoàn bao nhiêu tới giờ. Hoàn tiền cũng
trả lại phần phí đặt phòng tương ứng — Santara AI không giữ phí cho một lượt lưu trú không diễn ra.

:::caution[Hoàn tiền không phải là hủy]
**Hoàn tiền chỉ trả lại tiền. Lượt lưu trú vẫn nằm trên lịch của bạn cho tới khi bạn hủy nó** — và
trong lúc còn đó, những đêm ấy vẫn đóng trên mọi kênh. Hai bước, tách rời có chủ ý, vì hoàn một phần
tiền cho một lượt lưu trú vẫn diễn ra là chuyện người ta thật sự làm. Nếu khách không đến nữa, hãy làm
cả hai.
:::

## Khác gì so với lượt đặt từ kênh

Một lượt đặt trực tiếp là của bạn: địa chỉ email thật của khách thay vì một địa chỉ
chuyển tiếp. Thứ bạn đánh đổi là quy trình xử lý tranh chấp của kênh — đó là lý do chế độ yêu cầu tồn
tại, và là lý do [thông tin liên hệ](/vi/setup/booking-site/) trên website của bạn đáng được điền đầy
đủ.
