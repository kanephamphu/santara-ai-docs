---
title: Santi trên Zalo
description: Trò chuyện với Santi trên Zalo — riêng tư hoặc trong nhóm của đội. Liên kết một lần bằng tài khoản Santara AI; các lựa chọn hiện dưới dạng số để bạn trả lời.
sidebar:
  order: 2
---

Santi trên Zalo hoạt động giống [trên Telegram](/vi/help/santi-telegram/): hỏi đáp, duyệt thay đổi,
bắt đầu và báo xong việc dọn, gửi ảnh dọn phòng — mỗi người dùng **tài khoản Santara AI của chính
mình**, nên Santi chỉ xem và làm những gì vai trò của họ cho phép.

Khác biệt duy nhất: **bot Zalo không có nút bấm.** Chỗ nào Telegram có nút, Santi trên Zalo gửi **lựa
chọn đánh số**, và bạn trả lời bằng con số:

> Đây là thay đổi: chặn Villa A 1 đêm. Kiểm tra rồi bấm Có.
>
> **[1] Có   [2] Không**

Trả lời **1**. Vậy thôi — con số có tác dụng y như bấm nút, và vẫn được kiểm tra như vậy (chỉ người
yêu cầu mới xác nhận được thay đổi của mình).

## Kết nối

:::note[Bắt đầu bằng chat riêng]
Zalo không cho bot nhắn cho bạn trước. Vì vậy **lần đầu tiên**, hãy mở **chat riêng với Bot SantiAI**
và nhắn ở đó — kể cả khi đội bạn dùng Santi trong nhóm. Sau khi đã liên kết, Santi trả lời bạn cả
trong nhóm.
:::

![Kết nối Santi trên Zalo: nhắn chào, mở liên kết đăng nhập và bấm Link Zalo, rồi hỏi bất cứ gì.](/diagrams/santi-zalo-connect.vi.svg)

1. Mở **Bot SantiAI** trên Zalo — chủ nhà hoặc đội ngũ Santara AI sẽ gửi liên kết hoặc mã QR — và
   nhắn bất cứ điều gì, ví dụ *"Hôm nay có gì?"*.
2. Santi trả lời kèm **liên kết đăng nhập**. Mở liên kết, đăng nhập Santara AI, và kiểm tra trang ghi
   đúng tài khoản Zalo **của bạn** và tài khoản Santara AI **của bạn**. Bấm **Link Zalo**.
3. Quay lại Zalo, Santi báo đã liên kết và trả lời câu hỏi đầu tiên của bạn.

Liên kết chỉ dùng được một lần và có hiệu lực 10 phút. Muốn ngắt kết nối sau này, gửi **/unlink**.

:::caution[Chỉ liên kết Zalo của chính bạn]
Nếu ai đó gửi cho bạn một liên kết đăng nhập, hãy đóng lại. Trang ghi rõ tài khoản Zalo nào sẽ được
liên kết — nếu không phải bạn, đừng bấm nút.
:::

## Hỏi, duyệt, dọn phòng

Mọi thứ trong [Santi trên Telegram](/vi/help/santi-telegram/) đều dùng được ở đây, với con số thay
cho nút:

- **Câu hỏi** — viết bình thường; Santi trả lời bằng ngôn ngữ của bạn.
- **Thay đổi** — trả lời **1** để chọn Có, rồi **1** lần nữa để Xác nhận.
- **/jobs** — lịch dọn hôm nay dạng danh sách số: *[1] ▶ Bắt đầu · Villa A*, *[2] ✅ Xong · Villa A*…
  Trả lời bằng con số để bắt đầu hoặc báo xong một việc.
- **Ảnh** — gửi ảnh cho Santi (trong nhóm, viết **@Santi** trong chú thích). Santi liệt kê các việc
  hôm nay kèm số; trả lời bằng số của việc đó và ảnh được gắn trong Santara AI.

Các con số có hiệu lực 15 phút và luôn theo danh sách **mới nhất** của Santi trong cuộc chat đó. Nếu
bạn trả lời một danh sách cũ, hãy gửi **/jobs** để lấy danh sách mới.

## Nhóm của đội

![Thêm Santi vào nhóm Zalo: mở link mời và chọn nhóm, chủ nhà gửi /use, rồi nhắc @Santi và trả lời bằng số.](/diagrams/santi-zalo-group.vi.svg)

**Thêm Santi vào nhóm** (một lần, ai trong nhóm cũng làm được — thường là chủ nhà):

1. Trên điện thoại, mở link mời: **[https://bot.zaloplatforms.com/groups/invite/bot.VmIvWNvh](https://bot.zaloplatforms.com/groups/invite/bot.VmIvWNvh)**.
2. Zalo mở trang **Mời Bot SantiAI vào nhóm**. Chọn nhóm của đội và xác nhận.
3. Trong nhóm, **chủ nhà, admin hoặc đồng chủ nhà** gửi **/use**. Santi báo nhóm đã làm việc với
   workspace của bạn.

**Sau đó mọi người đều dùng được:**

4. Viết **@Santi** ở đầu tin nhắn, hoặc gửi **/lệnh** như **/jobs**.
5. Khi Santi gửi lựa chọn có số, chỉ cần trả lời con số — **2** là bấm "Xong".
6. Mỗi người tự liên kết Zalo của mình một lần, **trong chat riêng với Bot SantiAI** (xem *Kết nối*
   ở trên). Trước đó, Santi chỉ nhắc họ trong nhóm hãy nhắn riêng cho bot.
7. Có thể nhắc tên bằng cách chạm: Zalo ghi **@Bot SantiAI** và Santi hiểu, giống như gõ **@Santi**.

Giống trên Telegram, một nhóm đội bình thường chỉ nhận việc của đội — dọn phòng, sự cố và lịch. Hỏi
về doanh thu, tiền chi trả hay tin nhắn khách trong chat riêng với Santi. Tính năng nhóm cho bot của
Zalo vẫn đang Beta, nên nếu Santi bỏ sót tin nhắn trong nhóm, hãy bắt đầu bằng **@Santi** hoặc dùng
**/lệnh**.

## Thông báo

Người đã liên kết nhận thông báo của Santi — tóm tắt buổi sáng, đặt phòng mới và hủy phòng, khách chờ
trả lời hơn hai giờ — trong chat Zalo **riêng** với Santi, không bao giờ trong nhóm.

## Lệnh

| Lệnh | Tác dụng |
|---|---|
| **/jobs** | Lịch dọn hôm nay, đánh số: trả lời để bắt đầu hoặc báo xong |
| **/use** | Kết nối nhóm này với workspace (chủ nhà, admin, đồng chủ nhà) |
| **/help** | Santi làm được gì ở đây |
| **/workspace** | Xem workspace đang dùng, hoặc đổi bằng nút hay **/workspace** *tên* (chat riêng) |
| **/unlink** | Ngắt kết nối tài khoản Zalo của bạn |
