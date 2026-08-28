---
title: Dùng tài liệu này với công cụ AI
description: Mỗi trang là markdown sạch, kèm llms.txt và llms-full.txt trong cả ba ngôn ngữ.
sidebar:
  order: 2
---

Tài liệu này được viết bằng markdown và xuất bản dưới dạng markdown. Nếu bạn muốn đưa một trang cho
ChatGPT, Claude hay tác nhân của riêng bạn, bạn không cần bóc tách HTML.

## Sao chép một trang

Ở đầu mỗi trang:

- **Sao chép trang** — đưa markdown của trang đó vào bộ nhớ tạm.
- **Xem dạng markdown** — mở tệp thô.
- **Mở trong ChatGPT / Mở trong Claude** — mở cuộc trò chuyện mới với URL markdown của trang và một
  câu lệnh đã viết sẵn.

## Bản sinh đôi `.md`

Bất kỳ URL trang nào thêm `.md` ở cuối sẽ trả về nguồn markdown:

```
https://docs.santara.ai/vi/channels/airbnb/      → trang web
https://docs.santara.ai/vi/channels/airbnb.md    → markdown
https://docs.santara.ai/channels/airbnb.md       → markdown bản tiếng Anh
```

Bản sinh đôi của trang chủ là `/vi/index.md`. Mỗi trang đều mang thẻ
`<link rel="alternate" type="text/markdown">` trỏ tới bản của nó, nên trình thu thập không phải đoán
quy ước.

## Toàn bộ tài liệu trong một tệp

| Tệp | Là gì |
| --- | --- |
| [`/vi/llms.txt`](/vi/llms.txt) | Bản đồ: mỗi trang, URL, một dòng mô tả |
| [`/vi/llms-full.txt`](/vi/llms-full.txt) | Toàn bộ tài liệu trong một tệp markdown |
| `/llms.txt`, `/llms-full.txt` | Tương tự, bằng tiếng Anh |
| `/id/llms.txt`, `/id/llms-full.txt` | Tương tự, bằng tiếng Indonesia |

Một ngôn ngữ chưa dịch xong sẽ quay về bản tiếng Anh cho những trang còn thiếu, nên `llms.txt` ngoài
tiếng Anh vẫn luôn là bản đồ đầy đủ của sản phẩm.

## Vì sao phải làm vậy

Một trang tài liệu đã kết xuất là vài trăm kilobyte HTML bọc quanh vài kilobyte chữ. Một cỗ máy trả lời
lấy bản markdown nhận được đúng những chữ ấy với một phần nhỏ dung lượng, và trích dẫn chính xác, vì
không có thanh điều hướng, sidebar hay biểu ngữ cookie chen vào.

## Hỏi về workspace *của bạn*

Tài liệu này mô tả sản phẩm. Với câu hỏi về dữ liệu của chính bạn — đặt phòng, doanh thu, listing của
bạn — hãy dùng [Hỏi Santara](/vi/help/assistant/) trong sản phẩm. Nó có workspace của bạn; một chatbot
chỉ có URL này thì không.
