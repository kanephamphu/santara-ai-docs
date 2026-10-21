---
title: Hỏi Santi
description: Santi, trợ lý bên trong Santara AI — nó ở đâu, đội AI Agents, nó đọc được gì, thay đổi được gì, và điều gì nó sẽ không bao giờ làm thay bạn.
sidebar:
  order: 1
---

Santi là trợ lý có sẵn trong bảng điều khiển. Nó đọc workspace của bạn, nên những câu hỏi về công
việc thật của bạn là hợp lệ:

- *Cuối tuần tới phòng nào còn trống?*
- *Tháng Bảy villa thu về bao nhiêu, tiền thực nhận?*
- *Vì sao listing Airbnb của Unit 3 chưa chạy?*
- *Soạn giúp câu trả lời cho khách hỏi nhận phòng sớm.*

![Hỏi Santi ở chế độ toàn trang: lời chào và bốn câu hỏi để bắt đầu.](/screens/assistant.vi.png)

:::note
Santi còn có ứng dụng riêng cho điện thoại của bạn, tại **santi.santara.ai** — cùng Santi, cùng tài
khoản Santara AI. Xem [Ứng dụng Santi](/vi/help/santi-app/), mở tại
[santi.santara.ai](https://santi.santara.ai), hoặc làm quen với Santi và cả đội tại
[santara.ai/vi/santi](https://www.santara.ai/vi/santi/).
:::

## Tìm Santi ở đâu

- **Bên cạnh chuông thông báo**, ở đầu mọi màn hình. Bấm vào Santi và **Hỏi Santi** mở ra ở cuộc trò
  chuyện gần nhất của bạn.
- **Trên điện thoại**, Santi nổi ở góc dưới bên phải. Nó mở cùng một bảng.
- **Toàn trang** — liên kết ở đầu bảng mở `/dashboard/assistant`, cùng cuộc trò chuyện trong khung
  lớn hơn.

Gương mặt của Santi cho bạn biết tình hình, từ dữ liệu thật: nó **cảnh giác** khi có tin nhắn khách
đang chờ trả lời, **buồn ngủ** từ 22:00 đến 06:00, **vẫy tay** vào buổi sáng, và **bình thản** những
lúc còn lại. Rê chuột lên Santi để đọc lý do.

## Đội AI Agents

Santi dẫn dắt một đội sáu agent, mỗi agent trông một mảng công việc:

| Agent | Phụ trách |
| --- | --- |
| **Sunny** · Agent Bản tin | Daily Brief, khách đến và khách đi |
| **Lulu** · Agent Khách | Hộp thư, khách và đánh giá — soạn nháp, bạn bấm Gửi |
| **Penny** · Agent Giá | Giá phòng, doanh thu và đêm trống |
| **Loop** · Agent Đồng bộ | Kênh, đồng bộ và phòng trống |
| **Kiko** · Agent Đặt phòng | Đặt phòng, trang đặt phòng và upsell |
| **Bubbles** · Agent Dọn phòng | Ca dọn, chuyển khách và ticket |

Trên những màn hình thuộc về một agent, agent đó đứng cạnh Santi ở thanh trên cùng — bấm vào để hỏi
thẳng agent đó. Khi bạn hỏi Santi, Santi có thể giao câu hỏi cho tối đa hai agent và bạn thấy việc
giao nhận ngay trong câu trả lời. Các agent chỉ **đọc**; mọi thứ thay đổi dữ liệu của bạn vẫn do
Santi làm và luôn hỏi bạn trước.

**AI Agents** ở thanh bên mở trang riêng của đội:

![Trang AI Agents: cả đội cùng số việc của từng agent, và mục Cần bạn phía trên khung chat.](/screens/agents.vi.png)

- **Danh sách đội** cho thấy mỗi agent với **{count} việc**, **Ổn cả**, hoặc **Chưa kiểm tra được**
  khi không lấy được dữ liệu. **Làm mới** kiểm tra lại.
- **Cần bạn** liệt kê những gì đang chờ bạn, gấp nhất lên trước — khách chờ trả lời, phòng cần dọn
  hôm nay, kết nối kênh cần xem lại, đêm trống sắp tới, ưu đãi upsell sẵn sàng gửi, đánh giá mới.
- Mỗi mục có **Giao cho {name}** (agent đó xem xét và cho bạn biết nên làm gì) và **Mở** (đi tới màn
  hình đó).
- Chọn một agent trong danh sách để trò chuyện riêng với agent đó.

### Một buổi sáng thật trên trang AI Agents

Hình trên là workspace demo đúng như cả đội nhìn thấy. Đọc từ trên xuống:

1. **Lulu báo 3** và **Cần bạn** ghi *3 khách đang chờ trả lời*. Bấm **Giao cho Lulu** — Santi nhờ
   Lulu đọc các cuộc trò chuyện đó, và Lulu báo lại điều mỗi khách cần. Sau đó nhờ Santi *soạn
   nháp câu trả lời*: mỗi bản nháp được lưu vào hộp thư sau khi bấm **Xác nhận**, và không có gì
   được gửi cho tới khi bạn gửi (hoặc bảo Santi *gửi đi*, việc này cần **Xác nhận** lần nữa).
2. **Loop báo 1** — *Chưa kết nối kênh nào*. **Mở** đưa bạn tới Cài đặt → Kênh. Santi sẽ không kết
   nối kênh thay bạn; bước đó vẫn là của bạn.
3. **Penny báo 4** — có đêm trống sắp tới. Hỏi Penny *đêm nào còn trống và năm ngoái bán giá bao
   nhiêu?* trước khi đụng vào giá; đổi giá vẫn do bạn làm ở trang Giá.
4. **Sunny, Kiko và Bubbles có dấu tích** — hôm nay không có gì chờ họ.

## Nó thấy được gì

Workspace của bạn, qua đúng quyền mà bạn có. Nó không thể thấy nhiều hơn bạn: một nhân viên dọn phòng
hỏi về doanh thu sẽ được cho biết là không có quyền, chứ không nhận được con số.

Nó không bao giờ nhìn thấy workspace khác. Workspace mà nó đang trả lời đến từ phiên đăng nhập của
bạn, không đến từ bất cứ điều gì bạn hay nó có thể gõ ra.

## Nó làm được gì

Phần lớn thời gian nó **chỉ đọc**. Nó cũng thực hiện được những thay đổi sau, mỗi việc chỉ sau khi
bạn xác nhận:

- **Soạn nháp câu trả lời cho khách** — lưu vào hộp thư dưới dạng nháp; không gửi gì cả.
- **Gửi câu trả lời cho khách** — chỉ khi bạn nói *gửi*, và chỉ trên cuộc trò chuyện Airbnb và
  Booking.com. Ở các kênh khác, nó lưu nháp.
- **Tạo ticket.**
- **Giao ca dọn** cho một người dọn, kể cả người dọn
  [chưa có tài khoản](/vi/daily/tasks/#người-dọn-chưa-có-tài-khoản) mà nó thêm theo tên.
- **Giao ticket** cho một đồng nghiệp.
- **Đổi trạng thái ticket** — sang cần làm, đang làm, đã xong hoặc đã hủy.
- **Thêm, sửa hoặc hủy đặt phòng** — chỉ chủ workspace, và chỉ với đặt phòng tạo trong Santara AI
  (trực tiếp, khách vãng lai, qua điện thoại). Đặt phòng đến từ Airbnb, Booking.com hay kênh khác
  phải sửa trên kênh đó; thay đổi sẽ tự đồng bộ về.

Trước mọi thay đổi, nó hiện một thẻ **Xác nhận trước khi tôi làm**, ghi chính xác việc sắp làm.
**Xác nhận** thì thực hiện; **Đừng làm** giữ nguyên mọi thứ (**Chưa thực hiện — không có gì bị thay
đổi.**). Mỗi lần nó chỉ đề xuất một thay đổi, và người được giao sẽ nhận thông báo như thể chính bạn
giao. Thẻ có hiệu lực ba phút — sau đó, hỏi lại và nó sẽ kiểm tra lại trước.

Nó không thể đổi giá hay phòng trống, đưa listing lên chạy, kết nối kênh, hay chuyển tiền — với những
việc đó nó chỉ bạn tới đúng màn hình. Trước khi viết cho khách, nó luôn đọc cuộc trò chuyện trước, và
không bao giờ báo một mức giá hay một đêm mà nó chưa tra.

Nó hành động bằng quyền **của bạn**: nếu bạn không làm được việc gì đó trên màn hình, nó cũng không.

## Các cuộc trò chuyện

Cuộc trò chuyện được lưu theo từng người, từng workspace — co-host không thấy của bạn. Bảng hiện
**Cuộc trò chuyện gần đây**; **Trò chuyện mới** bắt đầu lại từ đầu, và **Xóa cuộc trò chuyện** (biểu
tượng thùng rác) xóa vĩnh viễn.

## Để có câu trả lời tốt

- **Gọi đúng tên.** "Villa Melati phòng 2" tốt hơn "cái villa".
- **Cho một khoảng thời gian.** "Tháng trước", "30 ngày tới".
- **Hỏi vì sao, không chỉ hỏi cái gì.** "Vì sao listing này chưa chạy" cho bạn lý do thật từ kênh.

## Khi nó sai

Nó đọc dữ liệu của bạn, nên thường sai vì một trong hai lý do: dữ liệu bị thiếu (một cơ sở chưa có giờ
nhận phòng), hoặc câu hỏi mơ hồ. Cả hai đều lộ ra trong câu trả lời — nó nói rõ đã xem những gì. Nếu
câu trả lời dừng vì hết lượt tra cứu, câu hỏi cần nhiều hơn một câu trả lời chứa được; hãy hỏi từng
phần nhỏ hơn.

**Santi đang bận. Thử lại sau một phút nhé.** chỉ là tạm thời. Nếu bạn gửi nhiều tin rất nhanh, bạn có
thể thấy **Xin lỗi, đã xảy ra lỗi** — đợi một phút rồi thử lại.

Nếu nó sai về điều gì quan trọng, [liên hệ hỗ trợ](/vi/help/support/) ngay từ màn hình đó. Cuộc trò
chuyện sẽ đi kèm tin nhắn.

## Chuyển cho người thật

**Nói chuyện với người thật**, ở đầu bảng, là kênh thật tới đội ngũ Santara AI, tách biệt với Santi.
Cuộc trò chuyện của bạn với Santi được chuyển theo để bạn không phải nhắc lại.
