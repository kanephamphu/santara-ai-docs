---
title: Smart pricing
description: Chọn ai đặt giá cho từng phòng — quy tắc dựng sẵn của Santara AI cho khu vực của bạn, PriceLabs, hay chính bạn — với giới hạn cứng, và giá nhập tay được giữ nguyên.
sidebar:
  order: 1
---

Bộ máy định giá của Santara AI tính ra giá cho mọi đêm sắp tới và xuất bản sang các kênh của bạn. Nó
chạy trên **quy tắc dựng sẵn của Santara AI cho từng khu vực** — mùa, cuối tuần và ngày lễ của thị
trường nơi chỗ nghỉ của bạn tọa lạc — và bạn thấy chính xác nó sẽ làm gì trước khi bất cứ thứ gì đi ra.

Không gì được định giá tự động cho tới khi một phòng được đặt sang **Tự động (Santara AI)** và chỗ
nghỉ của nó đã có khu vực. Phòng ở chế độ **Thủ công — tôi tự đặt giá** giữ nguyên giá hiện tại.

Màn hình **Giá** có ba tab — **Lịch giá**, **Giá trên kênh** và **Ai đặt giá** — và thuộc gói
**Operator** (và thuộc gói duy nhất ở các
[thị trường có giá riêng](/vi/setup/billing/#thị-trường-có-giá-riêng)). Xem
[Gói và thanh toán](/vi/setup/billing/).

Để đặt một đêm cụ thể bằng tay — hoặc số đêm tối thiểu, hoặc bao nhiêu đơn vị bán được — xem
**[Giá và tình trạng trống](/vi/money/rates/)**.

![Tab Ai đặt giá: mọi phòng xếp theo chỗ nghỉ, mỗi phòng có một ô chọn Tự động (Santara AI), PriceLabs hoặc Thủ công — tôi tự đặt giá, khu vực mà mỗi chỗ nghỉ dùng cho chế độ Tự động, và giờ cập nhật mỗi đêm.](/screens/pricing.vi.png)

## Ai đặt giá cho từng phòng

Tab **Ai đặt giá** liệt kê mọi phòng dưới chỗ nghỉ của nó, mỗi phòng một lựa chọn:

| Lựa chọn | Nghĩa là |
| --- | --- |
| **Tự động (Santara AI)** | Thay đổi mỗi ngày theo nhu cầu, dựa trên quy tắc dựng sẵn cho khu vực của chỗ nghỉ. Giá bắt đầu thay đổi từ tối nay |
| **PriceLabs** | Giá lấy từ chỗ nghỉ PriceLabs mà bạn chọn cho phòng đó — xem [bên dưới](#nếu-bạn-đã-dùng-pricelabs) |
| **Thủ công — tôi tự đặt giá** | Không gì thay đổi giá. Giá giữ nguyên như hiện tại, và bạn sửa nó trong [lịch giá](/vi/money/rates/) |

Mỗi phòng chỉ ở đúng một lựa chọn; chọn cái này thì các cái kia bị xóa. Mỗi dòng có một chấm: xanh
khi đang chạy, vàng cam khi cần bạn xử lý — bấm vào để xem lý do, chẳng hạn *Tự động đăng giá* đang
tắt nên giá chỉ là gợi ý, hoặc phòng chưa có trên kênh nào.

**Đổi nhiều phòng** cho phép bạn tích chọn nhiều phòng, hoặc mọi phòng của một chỗ nghỉ, rồi đặt
cùng lúc. Đầu tab đếm số phòng ở mỗi lựa chọn và cho biết giờ cập nhật mỗi đêm.

## Chọn khu vực

Chế độ Tự động dùng một **khu vực** cho mỗi chỗ nghỉ — thị trường có mùa, ngày lễ và cuối tuần giống
với chỗ của bạn. Mọi phòng của chỗ nghỉ đó ở chế độ Tự động đều dùng chung. Chỗ nghỉ chưa có khu vực
sẽ hiện *Chưa chọn khu vực cho chế độ Tự động* và các phòng của nó vẫn là thủ công; ở tab Lịch giá nó
hiện *Chưa chọn bộ quy tắc — chỗ nghỉ này không bao giờ được định giá*.

Bạn chọn khu vực khi chuyển một phòng sang Tự động, hoặc bằng nút **Đổi** cạnh tên chỗ nghỉ. Ô chọn
tìm theo thành phố, đảo hoặc quốc gia, và đặt khu vực **Gợi ý cho chỗ nghỉ này** lên đầu, dựa trên vị
trí của chỗ nghỉ. Không gì được xuất bản cho tới khi bạn chọn.

Không có gì để dựng hay chỉnh sửa: quy tắc là của Santara AI, và chúng tôi cập nhật ngày lễ của
chúng hằng năm — kể cả những ngày dịch chuyển theo mặt trăng, như Nyepi và Idul Fitri. Một rule set
bạn đã sao chép và chỉnh sửa trước đây vẫn nằm trong **Quy tắc của bạn** và chạy như cũ, nhưng
**chúng tôi không bảo trì ngày tháng của nó**.

## Hai nửa

**Quy tắc của khu vực quyết định hình dạng của cả năm. Các con số của phòng quyết định đó là hình
dạng của cái gì.**

- **Quy tắc** là các hệ số nhân: mùa này ×1,85, thứ Sáu +20%, Giáng sinh thay thế mùa. Một khu vực
  có thể định giá năm mươi chỗ nghỉ.
- **Cài đặt định giá của phòng** là giá gốc, sàn và trần, và chi phí của nó. Phần này do bạn quyết,
  trong [Sửa giá](#các-con-số-của-listing).

![Giá mỗi đêm bắt đầu từ giá cơ sở, nhân với mùa và thứ trong tuần, có thể bị sự kiện thay thế, rồi bị chặn bởi giới hạn của bạn và của kênh trước khi xuất bản. Giá bạn nhập tay bỏ qua tất cả.](/diagrams/pricing-pipeline.vi.svg)

Chế độ xem **Năm** ở tab Lịch giá liệt kê **Sự kiện ảnh hưởng đến giá** trong 12 tháng tới và tác
dụng của từng sự kiện — dịch giá bao nhiêu, và có chặn giảm giá, nhận phòng hay trả phòng không.

## Các con số của listing

Bấm **Sửa giá** ở tab **Lịch giá**. Nó mở đúng phòng đang được vẽ biểu đồ:

| Cài đặt | Nghĩa là |
| --- | --- |
| **Giá gốc** | Mốc mà mọi hệ số nhân dựa vào. Chỉ dùng khi gói giá không có giá riêng — giá của gói được ưu tiên |
| **Gói giá** | Định giá động đặt giá cho gói chính. Gói *Bám theo gói chính* dịch theo nó bằng độ lệch của mình; gói để *Đứng riêng* giữ nguyên |
| **Tối thiểu / Tối đa** | Giới hạn cứng. Định giá tự động không bao giờ vượt qua. Mức tối thiểu thay thế sàn tính toán; không nâng nó lên |
| **Chi phí mỗi đêm** | Chi phí phục vụ một đêm. Điền cả sáu ô hoặc không ô nào — thiếu một ô là sàn quay về một phần của giá gốc |
| **Tự động định giá chỗ nghỉ này** | Tắt là quy tắc hoàn toàn không chạy ở đây |
| **Tự động đăng giá** | Tắt là giá vẫn được tính và hiển thị nhưng không xuất bản |
| **Ghi đè giá tôi tự nhập** | Mặc định tắt. Xem bên dưới |
| **Mức giá kênh chấp nhận** | Một khoảng riêng do Booking.com và Airbnb giữ. Nó thu hẹp khoảng ở trên chứ không thay thế |

## Bảo vệ giá nhập tay

**Giá bạn nhập tay không bao giờ bị ghi đè**, trừ khi bạn bật *Ghi đè giá tôi tự nhập* cho listing đó.
Khi bật, mức giá bạn nhập bị ghi đè và **giá trị đó mất — không có hoàn tác**.

Nhờ vậy bạn có thể yên tâm định giá tay cho một tuần cưới trên một phòng vốn đang chạy tự động. Lưới
đánh dấu đêm bạn tự đặt giá; xóa ô đó để trả đêm lại cho định giá động. Với phòng mà không gì được
phép đổi giá, hãy chọn **Thủ công — tôi tự đặt giá**.

## Xem trước khi xuất bản

Tab **Lịch giá** có hai chế độ xem. **Lưới** vẽ giá của bạn cho 90 đêm tới phía trên
[lưới giá](/vi/money/rates/), với tỷ lệ đã đặt ở dưới cùng — bấm một đêm để xem vì sao nó có giá đó —
và một hàng số liệu cho 14 đêm tới: giá trung bình, đã đặt, đêm hết phòng và định giá thông minh có
đang bật không. **Năm** hiển thị giá cả năm: biểu đồ xu hướng cho thấy đề xuất của bộ máy so với giá
gốc cùng sàn và trần mà nó không được vượt, các sự kiện, và một bản đồ nhiệt.

Hãy đặt phòng sang Tự động, để *Tự động đăng giá* tắt, và theo dõi một tuần trước khi thả ra.

### Đồng bộ ngay

**Đồng bộ ngay** ở tab **Lịch giá** chạy các quy tắc cho listing đang được vẽ biểu đồ và mở **Xem
trước định giá động**. Chưa có gì được xuất bản. Mỗi đêm được liệt kê là **Sẽ thay đổi**, **Giá của
bạn, giữ nguyên** (giá bạn nhập tay) hoặc **Đã đúng**, và **Vì sao có mức giá này** tách một đêm ra
thành giá cơ sở, mùa, ngày trong tuần, sự kiện, nhịp đặt phòng, đêm lẻ và phút chót. Đêm nào bị giữ ở
sàn hay trần của bạn sẽ ghi rõ.

**Áp dụng các mức giá này** xuất bản chúng sang các kênh. Nếu *Tự động đăng giá* đang tắt cho listing
đó, danh sách chỉ là gợi ý và nút đổi thành **Áp dụng N giá gợi ý**: các đêm đó được lưu như giá bạn
tự nhập trên lưới, nên định giá động sẽ không đụng tới cho tới khi bạn xóa giá. Khi PriceLabs đang nắm
giá, hoặc định giá động đang tắt, thì không có nút Áp dụng — danh sách là những gì sẽ được ghi, chứ
chưa được ghi. Lưu một giá gốc mới ở **Sửa giá** cũng đề nghị mở đúng bản xem trước này, nên bạn không
phải đợi lượt chạy ban đêm mới thấy tác động. Chỉ chủ workspace mới chạy được.

### So sánh thị trường

Ở nơi đã thiết lập Santara Revenue, **So sánh thị trường** (Beta) ở tab Lịch giá cho thấy đối thủ của
bạn đang bán giá bao nhiêu, được kiểm tra mỗi ngày, và gợi ý những đêm đáng đổi giá. Không có gì thay
đổi cho tới khi bạn áp dụng một đêm. Trước tiên hãy chọn đối thủ cho một listing trong Santara Revenue
— nút **Chọn đối thủ** đưa bạn tới đó. Với phòng ở chế độ Tự động, *Để Định giá thông minh theo đối
thủ* kéo mỗi đêm nửa chừng về giá gợi ý, tối đa 15%, trong giới hạn của bạn.

## Giá trên kênh

Tab **Giá trên kênh** giữ **mỗi kênh một mức điều chỉnh**. Mọi gói giá gắn với một kênh được bán ở đó
bằng giá của bạn cộng mức điều chỉnh, nên bạn đổi giá một lần là mọi kênh theo.

Cạnh mỗi kênh là hoa hồng kênh đã lấy trên các lượt đặt gần đây và mức điều chỉnh **hòa vốn**. Kênh
lấy phần của mình trên giá đã điều chỉnh, nên muốn bù hoa hồng 18% thì phải cộng hơn 18%; **Dùng
+N%** áp mức hòa vốn đó. Một mức điều chỉnh áp cho mọi chỗ nghỉ trên kết nối kênh đó, còn của Airbnb
thì đặt trên Airbnb. Các nhãn kênh dưới mỗi gói giá trong lưới cũng mở đúng mức điều chỉnh này.

## Khi nào bộ máy chạy

Khi một phòng ở chế độ Tự động và *Tự động đăng giá* đang bật, bộ máy **chạy mỗi đêm** và xuất bản
những gì thay đổi. Hai giới hạn giữ nó ổn định để không làm xáo trộn thứ hạng của bạn trên kênh:

- **Một đêm đã từng được định giá chỉ nhích một chút mỗi lượt chạy** — mặc định tối đa 8% lên hoặc
  xuống. Một bước nhảy mùa vụ lớn sẽ đạt được qua nhiều đêm chạy, không phải một lần. Lần đầu một đêm
  được định giá, nó đi thẳng tới mức mục tiêu.
- **Nó bám sát lịch theo mùa** — mặc định trong phạm vi 30% so với giá mà mùa, ngày trong tuần và sự
  kiện tạo ra — để tín hiệu nhu cầu không kéo nó đi quá xa.

Giá tối thiểu và tối đa của bạn luôn được ưu tiên hơn cả hai. Workspace có thanh toán ở chế độ chỉ
đọc đã 30 ngày sẽ bị bỏ qua cho tới khi thanh toán — xem
[Nếu thanh toán thất bại](/vi/setup/billing/#nếu-thanh-toán-thất-bại).

## Nó có hiệu quả không?

Doanh thu, công suất, giá trung bình mỗi đêm và RevPAR nằm ở **Báo cáo → Hiệu quả kinh doanh**, tính
theo đêm khách thực sự ở — xem [Báo cáo](/vi/money/reports/). RevPAR — doanh thu ÷ toàn bộ số đêm phải
bán — là con số quan trọng: giá trung bình mỗi đêm và công suất dịch chuyển độc lập, và không cái nào
một mình cho biết việc định giá có kiếm được gì không.

Dưới lưới ở màn hình Giá, **Tín hiệu công suất · 30 đêm tới** chia các phòng thành **Ổn định**,
**Kiểm tra giá**, **Cần tăng nhu cầu** và **Theo dõi** dựa trên 30 đêm tới của chúng, và mỗi phòng mở
được trong bảng giá.

## Nếu bạn đã dùng PriceLabs

PriceLabs là một trong ba lựa chọn ở **Ai đặt giá**. Nếu chưa kết nối, chọn nó sẽ đề nghị bạn kết nối
trước. Sau đó chọn chỗ nghỉ PriceLabs định giá cho phòng — mỗi chỗ nghỉ PriceLabs chỉ định giá được một
phòng. Giá của nó được lấy về mỗi đêm và gửi sang mọi kênh, và **Cập nhật ngay** lấy về ngay lập tức.
Bộ máy của Santara AI nhường bước cho những phòng đó, thay vì hai bên giành nhau cùng một cuốn lịch.

Chấm vàng cam báo một chỗ nghỉ đang tắt đồng bộ trong PriceLabs, hoặc một chỗ nghỉ mà PriceLabs cũng
đổi giá trực tiếp trên Airbnb — khi đó Airbnb nhận giá từ hai nơi. Xem
[PriceLabs](/vi/channels/listings/#pricelabs).
