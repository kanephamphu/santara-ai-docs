---
title: Santi trên Discord
description: Dùng Santi trên Discord bằng lệnh gạch chéo — riêng tư hoặc trong máy chủ của đội. Liên kết một lần bằng tài khoản Santara AI, rồi hỏi, duyệt thay đổi, bắt đầu và báo xong việc dọn, gửi ảnh dọn phòng.
sidebar:
  order: 3
---

Santi cũng có trên Discord. Đó vẫn là Santi như trong [ứng dụng Santi](/vi/help/santi-app/) và
[trên Telegram](/vi/help/santi-telegram/), với cùng tài khoản Santara AI phía sau.

Trên Discord bạn nói chuyện với Santi bằng **lệnh gạch chéo**: gõ **/** rồi chọn một lệnh của Santi.
Santi không đọc tin nhắn chat thông thường, nên muốn hỏi thì dùng **/santi**.

Mỗi người dùng **tài khoản Santara AI của chính mình**, nên Santi chỉ xem và làm những gì vai trò
của họ trong workspace cho phép. Nhân viên dọn phòng có thể bắt đầu và báo xong việc của mình; họ
không thể chặn ngày hay xem doanh thu.

## Kết nối trong hai phút

![Kết nối Santi trên Discord: thêm Santi, hỏi bằng /santi và mở liên kết đăng nhập riêng, rồi Santi trả lời.](/diagrams/santi-discord-connect.vi.svg)

1. Mở **[link thêm Santi](https://discord.com/oauth2/authorize?client_id=1572558251818487960)**. Chọn
   **Thêm vào Ứng dụng của tôi** để dùng Santi ở mọi nơi trên Discord, hoặc **Thêm vào máy chủ** để
   đưa Santi vào máy chủ của đội. Bấm **Cho phép**.
2. Trong chat với Santi (hoặc bất kỳ kênh nào), gõ **/santi**, chọn lệnh và viết câu hỏi —
   *"Hôm nay có gì?"*.
3. Santi trả lời kèm **Sign in with Santara**, ghi *Chỉ bạn thấy tin này*. Mở liên kết, đăng nhập
   Santara AI, và kiểm tra trang ghi đúng tài khoản Discord **của bạn** và tài khoản Santara AI
   **của bạn**. Bấm **Link Discord**.
4. Santi nhắn báo đã liên kết — và trả lời câu hỏi đầu tiên của bạn.

:::caution[Chỉ liên kết Discord của chính bạn]
Nếu ai đó gửi cho bạn một liên kết đăng nhập, hãy đóng lại. Trang ghi rõ tài khoản Discord nào sẽ
được liên kết — nếu không phải bạn, đừng bấm nút.
:::

Liên kết chỉ dùng được một lần và có hiệu lực 10 phút; nếu hết hạn, gửi **/santi** lần nữa để lấy
liên kết mới. Muốn ngắt kết nối sau này, gửi **/unlink**.

## Hỏi bất cứ gì

**/santi** nhận một câu hỏi, viết như khi bạn nhắn đồng nghiệp — *"Ngày mai ai đến?"*, *"Soạn trả
lời cho Anna"*, *"Villa 2 cuối tuần sau còn trống không?"*. Santi đọc dữ liệu Santara AI trực tiếp,
trả lời bằng ngôn ngữ của bạn và ngắn gọn.

### Thay đổi luôn hỏi trước

Khi bạn yêu cầu một thay đổi — chặn lịch, gửi trả lời cho khách, phân công việc dọn — Santi liệt
kê **đầy đủ chi tiết** ngay dưới câu trả lời (thay đổi gì, từ giá trị nào sang giá trị nào), kèm nút
**✅ Xác nhận** và **Hủy**. Bấm **✅ Xác nhận** một lần — hoặc chỉ cần trả lời **OK** — là xong. Trả
lời **Không** hoặc bấm **Hủy** để bỏ. Không có gì thay đổi trước đó, và chỉ người yêu cầu mới xác nhận
được. Thay đổi lớn, như hủy một đặt phòng, được xác nhận trong ứng dụng Santi.

## Dọn phòng: Bắt đầu, Xong và ảnh

Gửi **/jobs** để xem lịch dọn hôm nay, mỗi việc có nút:

- **▶ Bắt đầu** khi bạn bắt đầu dọn.
- **✅ Xong** khi đã dọn xong. Chủ nhà thấy ngay trong Santara AI.

Nhân viên dọn phòng chỉ thấy việc của mình. Chủ nhà hoặc đồng chủ nhà thấy việc của mọi người (khi có
hơn 8 việc đang mở, danh sách không kèm nút — hãy mở việc đó trong Santara AI).

**Ảnh:** gửi **/photo** và đính kèm ảnh. Santi hỏi **ảnh này cho việc dọn nào**; bấm vào việc đó và
ảnh được gắn trong Santara AI, rồi Santi đưa nút **✅ Xong**. Mỗi ảnh gửi một lần **/photo**, tối đa
10 ảnh mỗi việc.

## Máy chủ của đội

![Santi trong máy chủ Discord: chủ nhà gửi /use, ai cũng gửi /jobs, và bấm Xong cập nhật Santara AI.](/diagrams/santi-discord-server.vi.svg)

1. Thêm Santi vào máy chủ bằng **[link thêm Santi](https://discord.com/oauth2/authorize?client_id=1572558251818487960)**
   → **Thêm vào máy chủ** (bạn cần quyền quản lý máy chủ).
2. Trong kênh của đội, **chủ nhà, admin hoặc đồng chủ nhà** gửi **/use**. Kênh này giờ làm việc với
   workspace đó.
3. Mọi người trong kênh dùng **/santi**, **/jobs** hoặc **/photo**.

Ai trong kênh cũng đọc được câu trả lời của Santi, nên một kênh đội bình thường chỉ nhận **việc của
đội** — dọn phòng, sự cố và lịch. Hỏi về doanh thu, tiền chi trả hay tin nhắn khách trong **chat
riêng** với Santi. Kênh chỉ dành cho quản lý có thể thiết lập bằng **/use managers**.

Mỗi người vẫn tự liên kết Discord của mình một lần: lần đầu họ dùng Santi, liên kết đăng nhập chỉ
hiện cho riêng họ.

## Thông báo

Người đã liên kết nhận thông báo của Santi dưới dạng **tin nhắn riêng** từ Santi (không bao giờ trong
máy chủ): tóm tắt buổi sáng, đặt phòng mới và hủy phòng, khách chờ trả lời hơn hai giờ.

## Lệnh

| Lệnh | Tác dụng |
|---|---|
| **/santi** | Hỏi Santi bất cứ điều gì |
| **/jobs** | Lịch dọn hôm nay với ▶ Bắt đầu / ✅ Xong |
| **/photo** | Gửi ảnh dọn phòng và chọn việc của nó |
| **/use** | Kết nối kênh này với workspace (chủ nhà, admin, đồng chủ nhà) |
| **/help** | Santi làm được gì ở đây |
| **/workspace** | Xem workspace đang dùng, hoặc đổi bằng nút hay **/workspace** *tên* (chat riêng) |
| **/unlink** | Ngắt kết nối tài khoản Discord của bạn |

## Nếu có gì không ổn

- **Santi không trả lời tin nhắn thường.** Trên Discord, Santi chỉ trả lời lệnh gạch chéo — dùng
  **/santi** kèm câu hỏi.
- **Gõ / mà không thấy lệnh của Santi.** Hãy thêm Santi trước bằng link ở trên.
- **Santi báo kênh chưa được kết nối.** Chủ nhà hoặc đồng chủ nhà gửi **/use** trong kênh đó.
- **"Bạn không có quyền truy cập workspace này."** Nhờ chủ nhà thêm bạn vào workspace trong Santara
  AI ([Đội ngũ](/vi/setup/team/)).
- **Nút báo bạn không thể đổi việc đó.** Việc đã giao cho người khác — nhờ chủ nhà giao cho bạn.
- **Liên kết đăng nhập hết hạn.** Gửi **/santi** lần nữa để lấy liên kết mới.
