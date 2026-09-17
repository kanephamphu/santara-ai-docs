---
title: Smart pricing
description: Quy tắc dịch chuyển giá mỗi đêm theo mùa, thứ trong tuần, sự kiện và nhu cầu — với giới hạn cứng, và giá nhập tay được giữ nguyên.
sidebar:
  order: 1
---

Bộ máy định giá của Santara AI tính ra giá cho mọi đêm sắp tới và xuất bản sang các kênh của bạn. Bạn
điều khiển nó bằng một **rule set**, và bạn thấy chính xác nó sẽ làm gì trước khi bất cứ thứ gì đi ra.

Không gì được định giá tự động cho tới khi bạn gán một rule set cho một listing. Listing không có quy
tắc thì giữ nguyên giá hiện tại.

Để đặt một đêm cụ thể bằng tay — hoặc số đêm tối thiểu, hoặc bao nhiêu đơn vị bán được — xem
**[Giá và tình trạng trống](/vi/money/rates/)**.

![Một rule set ở tab Quy tắc: các mùa cùng hệ số nhân và cường độ cuối tuần. Đây là mẫu của Santara AI, nên nó chỉ đọc cho tới khi bạn tạo bản sao của mình.](/screens/pricing.vi.png)

## Hai nửa

**Quy tắc quyết định hình dạng của cả năm. Các con số của listing quyết định đó là hình dạng của cái
gì.**

- **Rule set** là các hệ số nhân: mùa này ×1,85, thứ Sáu +20%, Giáng sinh thay thế mùa. Nó dùng chung
  — một rule set có thể định giá năm mươi listing.
- **Cài đặt định giá của listing** là giá cơ sở, sàn và trần, và chi phí của nó. Cái này theo từng
  listing.

![Giá mỗi đêm bắt đầu từ giá cơ sở, nhân với mùa và thứ trong tuần, có thể bị sự kiện thay thế, rồi bị chặn bởi giới hạn của bạn và của kênh trước khi xuất bản. Giá bạn nhập tay bỏ qua tất cả.](/diagrams/pricing-pipeline.vi.svg)

## Dựng một rule set

**Mùa.** Các khoảng ngày kèm hệ số nhân. `1,85` nghĩa là cao hơn giá cơ sở 85%. Mỗi mùa còn có **cường
độ cuối tuần** để co giãn phụ phí theo thứ — dưới 1 làm phẳng trong mùa cao điểm, trên 1 làm sắc nét
hơn trong mùa vắng.

**Thứ trong tuần.** Phụ phí theo từng thứ, áp cho **đêm, không phải cho lượt đặt**. Mỗi mùa co giãn
chúng bằng cường độ cuối tuần của nó.

**Sự kiện.** Các khoảng ngày có tên **thay thế mùa** trong những ngày đó, lấy mức cao hơn. Dùng cho
ngày lễ chúng tôi không cung cấp sẵn, và cho những ngày không ai đi lại.

| Tùy chọn sự kiện | Tác dụng |
| --- | --- |
| **Lặp lại hằng năm** | Cho ngày cố định như Giáng sinh. Tắt với những ngày dịch chuyển — Phục sinh, Tết, Nyepi |
| **Thay thế mùa** | Mặc định bật; mức cao hơn được áp dụng. Tắt với thứ làm giảm nhu cầu suốt nhiều tuần, như Ramadan |
| **Blackout** | Chặn giảm giá phút chót và giảm giá theo nhu cầu trong những đêm đó |
| **Chặn nhận phòng** | Là quy tắc tình trạng trống, không phải quy tắc giá |

**Bắt đầu từ bộ của chúng tôi.** Santara AI cung cấp sẵn các rule set với ngày lễ khu vực được cập nhật
hằng năm. Bạn thấy chính xác chúng sẽ làm gì. Hãy tạo bản sao của riêng bạn để chỉnh sửa — và lưu ý,
khi đã là của bạn thì **chúng tôi ngừng bảo trì ngày tháng của nó**, kể cả những ngày dịch chuyển theo
mặt trăng: Nyepi và Idul Fitri đổi mỗi năm.

Thay đổi trong trình soạn quy tắc là **tạm giữ**. Không gì có hiệu lực cho tới khi bạn bấm Lưu.

## Các con số của listing

Mở cài đặt định giá của một listing:

| Cài đặt | Nghĩa là |
| --- | --- |
| **Giá cơ sở** | Mốc mà mọi hệ số nhân dựa vào. Chỉ dùng khi rate plan không có giá riêng — giá của plan được ưu tiên |
| **Tối thiểu / tối đa** | Giới hạn cứng. Định giá tự động không bao giờ vượt qua. Mức tối thiểu thay thế sàn tính toán; không nâng nó lên |
| **Chi phí** | Chi phí phục vụ một đêm. Điền cả sáu ô hoặc không ô nào — thiếu một ô là sàn quay về một phần của giá cơ sở |
| **Định giá tự động cho listing này** | Tắt là quy tắc hoàn toàn không chạy ở đây |
| **Tự xuất bản giá** | Tắt là giá vẫn được tính và hiển thị nhưng không xuất bản |
| **Thay giá tôi nhập tay** | Mặc định tắt. Xem bên dưới |
| **Mức kênh chấp nhận** | Một khoảng riêng do Booking.com và Airbnb giữ. Nó thu hẹp khoảng ở trên chứ không thay thế |

## Bảo vệ giá nhập tay

**Giá bạn nhập tay không bao giờ bị ghi đè**, trừ khi bạn bật *Thay giá tôi nhập tay* cho listing đó.
Khi bật, mức giá bạn nhập bị ghi đè và **giá trị đó mất — không có hoàn tác**.

Nhờ vậy bạn có thể yên tâm định giá tay cho một tuần cưới trên một listing vốn đang chạy tự động.

## Xem trước khi xuất bản

Màn hình định giá hiển thị giá cả năm dưới dạng lưới, và một biểu đồ xu hướng cho thấy đề xuất của bộ
máy so với giá cơ sở cùng sàn và trần mà nó không được vượt. Hãy gán rule set, để *Tự xuất bản giá*
tắt, và theo dõi một tuần trước khi thả ra.

## Nó có hiệu quả không?

Bảng hiệu quả trả lời điều đó:

- **RevPAN** — doanh thu ÷ toàn bộ số đêm phải bán. **Đây là con số quan trọng.**
- **ADR** — doanh thu ÷ số đêm đã bán.
- **Công suất** — số đêm bán ÷ số đêm khả dụng.

ADR và công suất dịch chuyển độc lập và không cái nào một mình cho biết bộ máy có kiếm được gì không;
RevPAN thì có.

Còn có biểu đồ **hoạt động của bộ máy**: nó dịch giá bao nhiêu, và có đang chạm giới hạn của bạn
không. *Một rừng cột cao nghĩa là nó đang giật — hãy nới dải chết. Một đường phẳng ở mức 0 nghĩa là nó
đã ổn định, và đó là mục tiêu.*

Mỗi đêm được định giá chỉ giữ một dòng, ghi đè sau mỗi lần chạy — nên cột hoạt động là kết quả của lần
chạy mới nhất, không phải tổng của cả kỳ.

## Gợi ý theo thị trường

Dựa trên vị trí của từng listing, Santara AI có thể gợi ý mức giá nền. Gợi ý vẫn là gợi ý: không gì được
xuất bản cho tới khi bạn chọn.

## Nếu bạn đã dùng PriceLabs

Kết nối tại [Cài đặt → Kênh](/vi/channels/listings/#pricelabs) và bộ máy của Santara AI sẽ nhường bước cho
các listing do PriceLabs quản lý, thay vì hai bên giành nhau cùng một cuốn lịch.
