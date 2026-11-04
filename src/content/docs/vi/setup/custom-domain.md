---
title: Kết nối tên miền riêng
description: Đưa website đặt phòng lên tên miền bạn sở hữu — thêm hai bản ghi DNS, HTTPS được thiết lập tự động.
sidebar:
  order: 3
---

[Website đặt phòng](/vi/setup/booking-site/) của bạn luôn chạy ở địa chỉ Santara AI,
`tencuaban.book.santara.ai`. Nếu bạn có tên miền riêng, bạn có thể đưa website lên đó — ví dụ
`www.villacuaban.com` hoặc `book.villacuaban.com`. Khách thấy tên của bạn trên thanh địa chỉ, có biểu
tượng ổ khóa, và công cụ tìm kiếm lập chỉ mục tên miền của bạn.

Bạn chỉ mất khoảng năm phút. Chứng chỉ HTTPS được cấp và gia hạn tự động.

## Trước khi bắt đầu

- **Một tên miền bạn sở hữu**, và tài khoản đăng nhập nơi quản lý DNS của nó — thường là nơi bạn mua
  tên miền (PA Vietnam, Mắt Bão, Tenten, iNET, GoDaddy, Namecheap, Cloudflare…).
- **Chọn địa chỉ** cho website. Hãy dùng tên có tiền tố, như `www.villacuaban.com` hoặc
  `book.villacuaban.com`. Tên miền trống `villacuaban.com` cần thêm một bước — xem
  [Dùng tên miền gốc](#dùng-tên-miền-gốc).
- Nếu `www.villacuaban.com` đang chạy một website khác, hãy chọn tiền tố khác (`book.`, `stay.`),
  vì website kia sẽ ngừng hiển thị khi bạn trỏ địa chỉ đó về chúng tôi.

## 1. Thêm tên miền trong Santara AI

**Trang đặt phòng → Thiết lập → Tên miền riêng.** Nhập địa chỉ (ví dụ `www.villacuaban.com`) rồi
bấm **Kết nối tên miền**. Santara AI hiển thị hai bản ghi DNS dành riêng cho website của bạn.

## 2. Thêm hai bản ghi tại nhà cung cấp DNS

Mở phần cài đặt DNS của tên miền và thêm đúng hai bản ghi như hiển thị. Dùng nút sao chép.

| Loại | Host / Tên | Giá trị / Trỏ tới |
|---|---|---|
| CNAME | `www` (tiền tố của bạn) | `edge.book.santara.ai` |
| TXT | `_santara-verify.www` | `santara-verify=…` (mã hiển thị trong Santara AI) |

- **Ô Host:** đa số nhà cung cấp chỉ cần phần trước tên miền — `www` và `_santara-verify.www`, không
  phải `www.villacuaban.com`. Nếu bên cạnh ô đã hiện sẵn tên miền, hệ thống sẽ tự ghép vào.
- **TTL:** để mặc định (hoặc 1 giờ).
- **Cloudflare:** đặt bản ghi CNAME ở chế độ **DNS only** (đám mây xám). Nếu bật đám mây cam,
  Cloudflare sẽ trả lời thay chúng tôi và bước kiểm tra sẽ thất bại.
- Bản ghi TXT chứng minh tên miền là của bạn. Bản ghi CNAME đưa khách tới website đặt phòng.

## 3. Xác minh

Quay lại Santara AI và bấm **Xác minh**. Bản ghi mới thường có hiệu lực sau vài phút, nhưng một số nhà
cung cấp mất tới một giờ. Nếu kiểm tra thất bại, thẻ sẽ cho biết bản ghi nào thiếu hoặc sai — sửa lại
rồi bấm **Xác minh** lần nữa.

## 4. HTTPS được thiết lập tự động

Khi cả hai bản ghi đều đúng, thẻ hiển thị **Đang bật HTTPS** trong lúc chúng tôi cấp chứng chỉ cho tên
miền của bạn — thường từ 5 đến 30 phút. Bạn có thể đóng trang; hệ thống không cần bạn chờ.

Khi thẻ hiển thị **Đang hoạt động**, website đã chạy tại `https://www.villacuaban.com`:

- Địa chỉ Santara AI (`tencuaban.book.santara.ai`) **tự chuyển hướng** sang tên miền của bạn, đúng
  từng trang, nên liên kết cũ và kết quả tìm kiếm vẫn dẫn về website của bạn.
- Kết quả tìm kiếm, sitemap và ảnh xem trước mạng xã hội dùng tên miền của bạn.
- Chứng chỉ tự gia hạn. Hãy giữ nguyên cả hai bản ghi — xóa bản ghi CNAME sẽ gỡ website khỏi tên miền.

## Dùng tên miền gốc

Đa số nhà cung cấp không đặt được CNAME cho tên miền gốc (`villacuaban.com` không có gì phía trước).
Có hai cách:

- **Chuyển tiếp (đơn giản nhất).** Kết nối `www.villacuaban.com` như trên, rồi trong cài đặt của nhà
  cung cấp, chuyển tiếp `villacuaban.com` sang `https://www.villacuaban.com`. Hầu hết nhà cung cấp đều
  có tùy chọn "chuyển tiếp" (forwarding/redirect).
- **ALIAS / ANAME / CNAME flattening.** Một số nhà cung cấp (Cloudflare, AWS Route 53, DNSimple) cho
  phép trỏ tên miền gốc tới `edge.book.santara.ai` bằng các loại bản ghi này. Dùng nó thay cho CNAME ở
  bước 2, giữ bản ghi TXT (host `_santara-verify`), và kết nối `villacuaban.com`.

## Nếu có lỗi

| Bạn thấy | Cách xử lý |
|---|---|
| "No TXT record was found at …" | Host của bản ghi TXT phải là `_santara-verify.<tiền tố>`. Đợi vài phút sau khi lưu rồi xác minh lại. |
| "is a CNAME to …, but it needs to point at edge.book.santara.ai" | Sửa giá trị CNAME thành đúng `edge.book.santara.ai`. |
| Đã qua bước kiểm tra nhưng vẫn **Đang bật HTTPS** hơn một giờ | Nếu tên miền có bản ghi **CAA**, hãy thêm một bản ghi cho phép `amazon.com` — chứng chỉ của chúng tôi do Amazon cấp. Trên Cloudflare, kiểm tra CNAME đang ở chế độ **DNS only**. Sau đó bấm **Xác minh** lại. |
| "already connected to another booking site" | Tên miền đang được dùng ở một website Santara AI khác. Gỡ nó ở đó trước, hoặc [liên hệ hỗ trợ](/vi/help/support/). |

## Đổi hoặc gỡ tên miền

Trên cùng thẻ đó, **Gỡ tên miền** đưa website về lại địa chỉ Santara AI ngay lập tức; chứng chỉ được
gỡ tự động. Để chuyển sang tên miền khác, gỡ tên miền cũ rồi kết nối tên miền mới. Sau đó bạn có thể
xóa các bản ghi DNS tại nhà cung cấp.
