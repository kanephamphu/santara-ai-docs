---
title: Santi trên Telegram
description: Trò chuyện với Santi trên Telegram — riêng tư hoặc trong nhóm của đội. Liên kết một lần bằng tài khoản Santara AI, rồi hỏi, duyệt thay đổi, bắt đầu và báo xong việc dọn, gửi ảnh dọn phòng.
sidebar:
  order: 2
---

Santi cũng có trên Telegram, tên là **[@AskSantiBot](https://t.me/AskSantiBot)**. Đây vẫn là Santi
trong [ứng dụng Santi](/vi/help/santi-app/), cùng tài khoản Santara AI phía sau — chỉ là bạn nói
chuyện với Santi ở nơi đội của bạn vẫn nhắn tin.

Mỗi người dùng **tài khoản Santara AI của chính mình**, nên Santi chỉ xem và làm những gì vai trò của
người đó trong workspace cho phép. Nhân viên dọn phòng có thể bắt đầu và báo xong việc dọn của mình;
họ không thể chặn lịch hay xem doanh thu.

## Kết nối trong hai phút

![Kết nối Santi trên Telegram trong ba bước: nhắn chào, kiểm tra trang và liên kết, rồi hỏi bất cứ gì.](/diagrams/santi-telegram-connect.vi.svg)

1. Mở **[t.me/AskSantiBot](https://t.me/AskSantiBot)** và bấm **Start**.
2. Nhắn bất cứ điều gì — *"Hôm nay có gì?"*. Santi trả lời kèm nút **Đăng nhập Santara**.
3. Bấm nút đó, đăng nhập Santara AI (thường bạn đã đăng nhập sẵn), và kiểm tra trang: trang ghi rõ
   tài khoản Telegram **của bạn** và tài khoản Santara AI **của bạn**. Bấm **Link Telegram**.
4. Quay lại Telegram, Santi báo đã liên kết — và trả lời câu bạn hỏi lúc đầu.

:::caution[Chỉ liên kết Telegram của chính bạn]
Nếu ai đó gửi cho bạn một liên kết đăng nhập, hãy đóng lại. Trang sẽ ghi tài khoản Telegram nào sẽ
được liên kết — nếu không phải bạn, đừng bấm nút.
:::

Liên kết chỉ dùng được một lần và có hiệu lực 10 phút; nếu hết hạn, nhắn Santi bất cứ điều gì để
nhận liên kết mới. Muốn ngắt kết nối sau này, gửi **/unlink**.

## Hỏi bất cứ điều gì

Viết như nhắn cho đồng nghiệp — *"Ngày mai ai đến?"*, *"Soạn trả lời cho Anna"*, *"Villa 2 cuối tuần
sau còn trống không?"*. Santi đọc dữ liệu Santara AI hiện tại, trả lời bằng ngôn ngữ của bạn và ngắn
gọn.

### Thay đổi luôn hỏi trước

Khi bạn yêu cầu một thay đổi — chặn lịch, gửi trả lời cho khách, phân công việc dọn — Santi cho thấy
chính xác điều gì sẽ thay đổi, kèm nút **Có** và **Không**. Bấm **Có**, rồi **Xác nhận**. Không có gì
thay đổi trước đó, và chỉ người yêu cầu mới xác nhận được. Thay đổi lớn, như hủy một đặt phòng, được
xác nhận trong ứng dụng Santi.

## Dọn phòng: Bắt đầu, Xong và ảnh

![Gửi ảnh dọn phòng: gửi ảnh, chọn việc dọn Santi liệt kê, ảnh được gắn — rồi bấm Xong.](/diagrams/santi-photos.vi.svg)

Gửi **/jobs** — hoặc hỏi *"hôm nay tôi dọn những đâu?"* — và bạn nhận danh sách việc hôm nay, mỗi
việc có nút:

- **▶ Bắt đầu** khi bạn bắt đầu dọn.
- **✅ Xong** khi đã dọn xong. Danh sách tự cập nhật và chủ nhà thấy ngay trong Santara AI.

Nhân viên dọn phòng chỉ thấy việc của mình. Chủ nhà hoặc đồng chủ nhà thấy việc của mọi người (khi
có hơn 8 việc đang mở, danh sách không kèm nút — hãy mở việc đó trong Santara AI).

**Ảnh:** gửi ảnh cho Santi — trong nhóm, thêm **@AskSantiBot** vào chú thích. Santi hỏi **"Ảnh này
cho việc dọn nào?"**; bấm vào việc đó và ảnh được gắn vào việc trong Santara AI, rồi Santi gợi ý
**✅ Xong**. Gửi một lần (một album tính là một), tối đa 10 ảnh mỗi việc, và chọn việc trong vòng 30
phút.

## Nhóm của đội

![Thêm Santi vào nhóm Telegram: thêm @AskSantiBot, chủ nhà gửi /use, rồi nhắc tên Santi — ví dụ /jobs với nút Bắt đầu / Xong.](/diagrams/santi-telegram-group.vi.svg)

1. Thêm **@AskSantiBot** vào nhóm.
2. **Chủ nhà, admin hoặc đồng chủ nhà** gửi **/use**. Nhóm giờ làm việc với workspace đó.
3. Mọi người trong nhóm nói chuyện với Santi bằng cách bắt đầu tin nhắn với **@AskSantiBot**, hoặc
   gửi **/jobs**.

Mọi người trong nhóm đều đọc được câu trả lời của Santi, nên một nhóm đội bình thường chỉ nhận **việc
của đội** — dọn phòng, sự cố và lịch. Doanh thu, tiền chi trả và tin nhắn khách được trả lời **trong
chat riêng** với Santi. Nhóm chỉ dành cho quản lý thì dùng **/use managers**.

Mỗi người vẫn cần tự liên kết Telegram của mình lần đầu — Santi sẽ nhắn riêng để hướng dẫn.

## Thông báo

Người đã liên kết nhận thông báo của Santi trong chat **riêng** (không bao giờ trong nhóm): tóm tắt
buổi sáng, đặt phòng mới và hủy phòng, và khách đã chờ trả lời hơn hai giờ. Mỗi thông báo có liên
kết mở Santi với câu hỏi đã sẵn.

## Lệnh

| Lệnh | Tác dụng |
|---|---|
| **/jobs** | Lịch dọn hôm nay với ▶ Bắt đầu / ✅ Xong |
| **/use** | Kết nối nhóm này với workspace (chủ nhà, admin, đồng chủ nhà) |
| **/help** | Santi làm được gì ở đây |
| **/unlink** | Ngắt kết nối tài khoản Telegram của bạn |

## Nếu có gì không hoạt động

- **Santi không trả lời trong nhóm.** Bắt đầu tin nhắn với **@AskSantiBot**. Nếu Santi báo nhóm chưa
  kết nối, chủ nhà hoặc đồng chủ nhà gửi **/use**.
- **"Bạn không có quyền truy cập workspace này."** Nhờ chủ nhà thêm bạn vào workspace trong
  Santara AI ([Đội ngũ](/vi/setup/team/)).
- **Nút báo bạn không thể đổi việc này.** Việc đó được giao cho người khác — nhờ chủ nhà giao cho
  bạn.
- **Liên kết đăng nhập hết hạn.** Nhắn Santi bất cứ điều gì để nhận liên kết mới.
