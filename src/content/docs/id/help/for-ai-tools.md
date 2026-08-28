---
title: Menggunakan dokumentasi ini dengan alat AI
description: Setiap halaman sebagai markdown bersih, plus llms.txt dan llms-full.txt dalam tiga bahasa.
sidebar:
  order: 3
---

Dokumentasi ini ditulis dalam markdown dan diterbitkan sebagai markdown. Jika Anda ingin memberikan
sebuah halaman kepada ChatGPT, Claude, atau agen Anda sendiri, Anda tidak perlu mengikis HTML.

## Menyalin satu halaman

Di bagian atas setiap halaman:

- **Salin halaman** — menempatkan markdown halaman itu ke papan klip Anda.
- **Lihat sebagai markdown** — membuka berkas mentahnya.
- **Buka di ChatGPT / Buka di Claude** — membuka obrolan baru dengan URL markdown halaman dan prompt
  yang sudah ditulis.

## Kembaran `.md`

URL halaman mana pun dengan akhiran `.md` mengembalikan sumber markdown-nya:

```
https://docs.santara.ai/id/channels/airbnb/      → halamannya
https://docs.santara.ai/id/channels/airbnb.md    → markdown-nya
https://docs.santara.ai/channels/airbnb.md       → markdown versi Inggris
```

Kembaran halaman depan adalah `/id/index.md`. Setiap halaman membawa
`<link rel="alternate" type="text/markdown">` yang menunjuk kembarannya, jadi crawler tidak perlu
menebak polanya.

## Seluruh manual dalam satu berkas

| Berkas | Isinya |
| --- | --- |
| [`/id/llms.txt`](/id/llms.txt) | Petanya: setiap halaman, URL-nya, satu baris deskripsi |
| [`/id/llms-full.txt`](/id/llms-full.txt) | Seluruh dokumentasi sebagai satu berkas markdown |
| `/llms.txt`, `/llms-full.txt` | Sama, dalam bahasa Inggris |
| `/vi/llms.txt`, `/vi/llms-full.txt` | Sama, dalam bahasa Vietnam |

Sebuah bahasa yang belum lengkap terjemahannya jatuh kembali ke bahasa Inggris untuk halaman yang
belum ada, jadi `llms.txt` non-Inggris selalu merupakan peta produk yang utuh.

## Kenapa repot

Halaman dokumentasi yang dirender adalah ratusan kilobita HTML yang membungkus beberapa kilobita
prosa. Mesin jawaban yang mengambil markdown-nya mendapat kata yang sama dengan sebagian kecil byte,
dan mengutipnya dengan benar, karena tidak ada navigasi, sidebar, atau banner cookie yang menghalangi.

## Bertanya tentang workspace *Anda*

Dokumentasi ini menjelaskan produk. Untuk pertanyaan tentang data Anda sendiri — booking, pendapatan,
listing Anda — gunakan [Tanya Santara](/id/help/assistant/) di dalam produk. Ia punya workspace Anda;
chatbot yang hanya punya URL ini tidak.
