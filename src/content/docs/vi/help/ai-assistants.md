---
title: Kết nối ChatGPT, Claude hoặc Grok
description: Dùng Santara AI từ ChatGPT, Claude, Grok và các trợ lý AI khác — cách kết nối từng ứng dụng, trợ lý được tự làm gì, cách nó hỏi bạn trước và cách ngắt kết nối.
sidebar:
  order: 2
---

Bạn có thể trò chuyện với không gian làm việc Santara AI ngay trong trợ lý AI bạn đang dùng. Hỏi
*“Hôm nay ai đến?”* hoặc *“Chặn phòng Garden cuối tuần này”* trong ChatGPT, Claude hay Grok — trợ lý
trả lời từ và làm việc trên lịch, đặt phòng, khách và bảng dọn phòng thật của bạn.

Người dùng Claude: kết nối từ trang của Santara AI trong
**[thư mục connector của Claude](https://claude.ai/directory/santara-ai)** — không cần địa chỉ. Mọi trợ lý khác đều kết nối qua cùng một
địa chỉ:

```
https://mcp.santara.ai/mcp
```

![Bốn bước kết nối trợ lý AI: thêm URL trong ứng dụng AI, đăng nhập và cho phép trong Santara AI, rồi đặt câu hỏi.](/diagrams/ai-connect.vi.svg)

:::note
Mật khẩu của bạn không bao giờ được gửi cho ứng dụng AI. Santara AI tự đăng nhập cho bạn và trao cho
ứng dụng một chìa khóa chỉ dùng được với không gian làm việc bạn chọn — và bạn có thể thu hồi bất cứ
lúc nào.
:::

## Claude

Santara AI đã có mặt trong thư mục connector chính thức của Claude:
**[claude.ai/directory/santara-ai](https://claude.ai/directory/santara-ai)**. Dùng được trên claude.ai, Claude Desktop và ứng dụng
Claude trên điện thoại.

1. Mở **[Santara AI trong thư mục Claude](https://claude.ai/directory/santara-ai)**.

   ![Trang Santara AI trong thư mục connector của Claude, nút Connect ở góc trên bên phải.](/screens/ai/claude-dir-1-listing.webp)

   Hoặc tìm ngay trong Claude: mở **Customize** ở thanh bên, chọn **Connectors → Discover** và tìm
   **Santara**.

   ![Trang Customize của Claude ở mục Connectors, tìm thấy Santara AI khi gõ “Santara”.](/screens/ai/claude-dir-2-search.webp)

2. Bấm **Connect**. Santara AI mở ra: đăng nhập, chọn không gian làm việc rồi bấm **Cho phép**. Nút
   sẽ chuyển thành **Connected**.
3. Trong cuộc trò chuyện, mở **+ → Connectors**, đảm bảo **Santara AI** đang bật, rồi bắt đầu hỏi.

   ![Menu + của Claude mở ở Connectors, Santara AI đang bật.](/screens/ai/claude-dir-3-toggle.webp)

:::note
Hãy dùng connector chính thức, không dùng custom connector — không cần dán địa chỉ hay cài đặt gì.
Nếu trước đây bạn đã thêm Santara AI dưới dạng **custom connector**, hãy xoá nó trong
**Customize → Connectors** rồi kết nối lại từ thư mục. Với gói Team và Enterprise, chủ sở hữu có thể
cần bật connector trước.
:::

## ChatGPT

1. Mở **Plugins** ở thanh bên, bấm **Add** rồi chọn **Add custom MCP server**.

   ![Trang Plugins của ChatGPT với menu Add đang mở ở “Add custom MCP server”.](/screens/ai/chatgpt-1-add.webp)

2. Đặt tên **Santara AI**, dán `https://mcp.santara.ai/mcp` vào **Connection → Server URL** và giữ
   **Authentication: OAuth**.

   ![Biểu mẫu “Add custom MCP server” của ChatGPT với tên và URL máy chủ Santara AI.](/screens/ai/chatgpt-2-form.webp)

3. Không cần chỉnh gì trong **Advanced OAuth settings** — ChatGPT tự tìm cách đăng nhập của Santara AI
   và tự chọn **Client Identifier Metadata Document (CIMD)**.

   ![Phần cài đặt OAuth nâng cao của ChatGPT cho thấy phương thức CIMD nó tự chọn.](/screens/ai/chatgpt-3-cimd.webp)

4. Bấm **Create as a plugin**. Santara AI mở ra: đăng nhập, chọn không gian làm việc rồi bấm **Cho phép**.
5. Trong cuộc trò chuyện, thêm **Santara AI** từ **+ → Plugins** và bắt đầu hỏi.

:::note
Custom MCP server cần gói ChatGPT trả phí. Với Business và Enterprise, quản trị viên có thể cần cho
phép trước.
:::

## Grok

1. Vào **grok.com/connectors** và đăng nhập Grok.

   ![Trang Connectors của Grok.](/screens/ai/grok-1-connectors.webp)

2. Chọn **New Connector → Custom** rồi dán `https://mcp.santara.ai/mcp`.
3. Santara AI mở ra: đăng nhập, chọn không gian làm việc rồi bấm **Cho phép**.

Grok tự đăng ký, nên hiện tại nó chỉ có quyền **chỉ đọc**: trả lời câu hỏi được nhưng không thay đổi
gì.

## Ứng dụng AI khác

Mọi ứng dụng hỗ trợ MCP đều dùng được — Claude Code, Cursor, VS Code và nhiều ứng dụng khác. Chúng tự
đăng ký, nên cũng chỉ có quyền **chỉ đọc**.

```
claude mcp add --transport http santara https://mcp.santara.ai/mcp
```

Lần đầu ứng dụng dùng Santara AI, trình duyệt sẽ mở để bạn đăng nhập và bấm **Cho phép**.

## Trợ lý được làm gì

ChatGPT và Claude được xác minh qua chính địa chỉ web của họ, nên có thể làm việc giúp bạn. Việc gì
tự chạy và việc gì chờ bạn đồng ý là do bạn quyết định:

| Loại thay đổi | Mặc định | Ví dụ |
| --- | --- | --- |
| Lịch, yêu cầu hỗ trợ và dọn phòng | Chạy ngay | Chặn hoặc mở ngày, tạo yêu cầu hỗ trợ, giao việc dọn phòng |
| Giá | Chạy ngay | Giá theo đêm, số đêm tối thiểu |
| Tin nhắn cho khách | Hỏi bạn trước | Trả lời, ưu đãi bán thêm, trả lời đánh giá |
| Đặt phòng và chi phí | Hỏi bạn trước | Tạo, sửa hoặc huỷ đặt phòng, thêm chi phí |
| Thanh toán, cài đặt, đội ngũ, kênh bán | Không bao giờ | Không trợ lý nào thay đổi được |

Trợ lý cũng không bao giờ làm được nhiều hơn **vai trò của chính bạn** cho phép.

### Khi trợ lý hỏi trước

Ở lần thử đầu, không có gì thay đổi. Trợ lý cho bạn xem chính xác thay đổi — tin nhắn gửi khách từng
chữ — rồi hỏi. Chỉ khi bạn đồng ý trong cuộc trò chuyện, Santara AI mới thực hiện. Claude và ChatGPT
cũng hiện lời nhắc **Allow** riêng trước mỗi thao tác với Santara AI.

![Lời nhắc phê duyệt của Claude trước khi dùng Santara AI.](/screens/ai/claude-4-allow.webp)

![Claude cho xem chính xác thay đổi và hỏi trước khi huỷ một đặt phòng.](/screens/ai/claude-5-asks.webp)

:::caution
Tin nhắn của khách không bao giờ là mệnh lệnh. Trợ lý được dặn bỏ qua mọi yêu cầu nằm trong tin nhắn,
đánh giá hay listing, và mã xác nhận dùng một lần không thể bị giả mạo từ đó.
:::

## Thay đổi những gì trợ lý được làm

Mở **[Trợ lý AI](https://www.santara.ai/dashboard/assistant-actions/)** trong Santara AI. Với mỗi loại
thay đổi, chọn **Tự chạy**, **Hỏi tôi trong chat** hoặc **Không cho phép**. Chỉ chủ sở hữu hoặc quản
trị viên mới thay đổi được. Cùng trang đó ghi lại mọi việc mỗi trợ lý đã làm và đã hỏi.

## Ngắt kết nối

Trong Santara AI, vào **Cài đặt → Kênh → Ứng dụng** rồi bấm **Ngắt kết nối** cạnh trợ lý. Thay đổi
dừng trong vài giây; quyền đọc dừng trong vòng mười phút. Xoá connector trong ChatGPT hoặc Claude cũng
được, nhưng chỉ danh sách trong Santara AI mới cho thấy quyền truy cập đã bị thu hồi.

## Dành cho nhà phát triển

Tài liệu đầy đủ về mọi tool — tham số và chức năng — được tạo trực tiếp từ máy chủ tại
[mcp.santara.ai/docs](https://mcp.santara.ai/docs), và bản cho máy tại
[mcp.santara.ai/tools.json](https://mcp.santara.ai/tools.json).
