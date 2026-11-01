---
title: Báo cáo
description: Mỗi tháng một bảng kê cho chủ nhà — doanh thu từ khách, phần mỗi kênh giữ lại, chi phí và phần còn lại của chủ nhà.
sidebar:
  order: 4
---

Báo cáo là một màn hình duy nhất: **Bảng kê cho chủ nhà**. Nó trả lời một câu hỏi cho một tháng —
các lượt nghỉ mang về bao nhiêu, các kênh giữ lại bao nhiêu, chi phí hết bao nhiêu, và chủ nhà còn
lại bao nhiêu.

Màn hình này thay cho thư viện báo cáo cũ và mục Kế toán riêng. Hai màn hình trả lời cùng một câu
hỏi là cách bạn có hai con số thực nhận của chủ nhà mà không biết số nào đúng, nên giờ chỉ còn một,
và mọi con số trên đó khớp với nhau.

## Bảng kê cho chủ nhà

Đọc từ trên xuống:

| Dòng | Nghĩa là gì |
| --- | --- |
| **Doanh thu đặt phòng gộp** | Số tiền khách trả cho các lượt nghỉ trong kỳ, kèm số lượt nghỉ |
| **Phí kênh — {channel}** | Mỗi kênh một dòng: phần Airbnb, Booking.com và các kênh khác giữ lại |
| **Chi phí** | Mọi khoản chi được ghi trong kỳ, kèm số khoản |
| **Chủ nhà thực nhận** | Doanh thu gộp − phí kênh − chi phí |

Hai quy tắc quyết định thứ gì được tính vào tháng, và cả hai được in ngay dưới tiêu đề:

- **Kỳ nghỉ được tính vào tháng trả phòng.** Lượt nghỉ từ 28/3 đến 3/4 thuộc về tháng 4. Lượt đã
  hủy không được tính.
- **Mỗi loại tiền được trình bày riêng và không bao giờ quy đổi.** Một căn villa định giá bằng IDR
  nhận một đặt phòng bằng USD sẽ có hai bảng kê, không phải một con số trộn lẫn.

Nếu không có lượt nào trả phòng trong tháng, bạn sẽ thấy *Không có lượt nghỉ nào trả phòng trong
tháng này.*

## Doanh thu gộp, phí kênh và khoản chi trả

Mỗi lượt nghỉ có thể mang ba con số khác nhau — doanh thu gộp (khách trả), doanh thu phòng (phần
lưu trú) và khoản chi trả (phần về tới bạn). Bảng kê bắt đầu từ **doanh thu gộp** và tách phần mỗi
kênh giữ lại thành một dòng riêng, để chủ nhà thấy tiền đã đi đâu.

Không phải kênh nào cũng báo phí, và bảng kê không bao giờ đoán. Dưới một dòng phí kênh bạn có thể
thấy:

- **"… tính từ khoản chi trả"** — kênh không báo phí, nên phí được tính bằng doanh thu gộp − khoản
  chi trả.
- **"… kênh không báo phí"** — không có phí và không có cách tính ra. Các lượt đó vẫn được đếm, chứ
  không lặng lẽ coi như miễn phí: giả định kênh không lấy gì sẽ làm số tiền của chủ nhà cao hơn
  thực tế.
- **"… chưa có số gộp"**, dưới dòng doanh thu gộp — lượt nghỉ chỉ từng ghi nhận khoản chi trả.
  Khoản chi trả được dùng thay, khiến dòng đầu thấp hơn một cách thấy rõ thay vì giả vờ.

Nếu bạn đối chiếu với sao kê ngân hàng, khoản chi trả là con số khớp.

## Chi phí

Bên dưới bảng kê là danh sách **Chi phí** — chính những dòng đã trừ ở trên, để bạn kiểm tra từng
khoản. Chuyển sang **Chỉ chi phí** để chỉ xem các khoản chi.

### Thêm chi phí

Bấm **Thêm chi phí**. Biểu mẫu có năm trường:

- **Ngày** — ngày phát sinh khoản chi, không phải ngày bạn nhập.
- **Chỗ nghỉ** — khoản chi thuộc chỗ nghỉ nào.
- **Hạng mục** — **Điện**, **Nước**, **Dọn dẹp** hoặc **Khác**.
- **Số tiền** — theo loại tiền của chỗ nghỉ.
- **Ghi chú** — khoản chi dùng cho việc gì.

Các khoản cũ có thể mang hạng mục khác (Đồ vải, Bảo trì, Sửa chữa, Tiện ích…). Chúng vẫn hiện trên
bảng kê và vẫn lọc được; chỉ là biểu mẫu không đưa ra các hạng mục đó.

### Chủ nhà chịu và đơn vị quản lý chịu

Mỗi khoản chi hoặc là **Chủ nhà chịu**, hoặc là **Đơn vị quản lý chịu**. Khoản bạn thêm bằng
**Thêm chi phí** là chủ nhà chịu. Bảng kê trừ cả hai; dùng bộ lọc để chỉ xem một bên.

### Hóa đơn dùng chung

Một đồng hồ điện cho cả tòa nhà là một hóa đơn cho nhiều listing. Đánh dấu các listing còn lại ở
**Bao gồm thêm** — số tiền chỉ ghi một lần và không bao giờ bị chia nhỏ.

Hóa đơn dùng chung chỉ được trừ khi bảng kê bao gồm **tất cả** listing mà hóa đơn ghi tên. Nếu bạn
thu hẹp phạm vi xem xuống một phần trong số đó, hóa đơn chuyển sang danh sách riêng, **Chi phí dùng
chung — chưa phân bổ**, và không bị trừ — nếu không, bảng kê của từng listing sẽ gánh cả hóa đơn.

## Bộ lọc và kỳ báo cáo

Mở **Bộ lọc** để chọn:

- **Kỳ báo cáo** — **Tháng này**, **Tháng trước**, **3 tháng gần nhất**, **Năm nay** hoặc
  **Khoảng tuỳ chọn**. Kỳ được dùng in trên bảng kê và ghi vào CSV, nên một khoảng thời gian không
  bao giờ bị nhầm thành một tháng.
- **Danh sách chỗ nghỉ** — một chỗ nghỉ, vài chỗ, hoặc tất cả.
- **Hạng mục** và **Chủ nhà chịu** / **Đơn vị quản lý chịu** — để xem một phần chi phí.

Lọc chi phí sẽ đổi tên dòng cuối từ **Chủ nhà thực nhận** thành **Còn lại sau các chi phí hiển
thị**, kèm ghi chú bộ lọc nào đang bật. Một số khoản bị loại ra, nên con số không còn là số thực
nhận của chủ nhà — và màn hình nói rõ điều đó thay vì để nó trông như vậy.

### Bộ lọc đã lưu

Trong **Đã lưu**, bấm **Lưu hiện tại** và đặt tên — ví dụ "Villa Anyar, tiện ích năm nay". Lần sau
chỉ cần một cú bấm để mở lại, và có thể xóa ngay trong danh sách đó.

## Tải CSV

**Tải CSV**, cạnh tiêu đề trang, xuất đúng những gì đang hiện: cùng kỳ, cùng bộ lọc, cùng các
dòng. Gửi cho chủ nhà hoặc kế toán của bạn. Santara AI không phải hệ thống sổ sách — nó là dữ liệu
vận hành để đưa vào hệ thống đó.

## Gói nào có tính năng này

Báo cáo nằm trong gói **Operator** và mọi gói cao hơn. Với **Host**, trang mở ra một bảng khóa giải
thích bản nâng cấp mang lại gì. Xem [Gói và thanh toán](/vi/setup/billing/).

## Công suất, ADR và RevPAR

Các con số đó — công suất, giá trung bình mỗi đêm của đặt phòng, RevPAR và phần so sánh từng phòng
— nay nằm ở [Upsell](/vi/money/upsells/).
