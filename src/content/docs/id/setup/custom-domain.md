---
title: Hubungkan domain Anda sendiri
description: Pasang situs booking di domain milik Anda — tambahkan dua catatan DNS, lalu HTTPS disiapkan otomatis.
sidebar:
  order: 3
---

[Situs booking](/id/setup/booking-site/) Anda selalu tersedia di alamat Santara AI,
`namaanda.book.santara.ai`. Jika Anda punya domain sendiri, Anda bisa memasang situs di sana — misalnya
`www.villaanda.com` atau `book.villaanda.com`. Tamu melihat nama Anda di bilah alamat, lengkap dengan
ikon gembok, dan mesin pencari mengindeks domain Anda.

Hanya perlu sekitar lima menit. Sertifikat HTTPS diterbitkan dan diperbarui untuk Anda.

## Sebelum mulai

- **Domain milik Anda**, dan akses login ke tempat pengelolaan DNS-nya — biasanya tempat Anda membeli
  domain (Niagahoster, Rumahweb, Domainesia, GoDaddy, Namecheap, Cloudflare…).
- **Pilih alamat** untuk situs. Gunakan nama dengan awalan, seperti `www.villaanda.com` atau
  `book.villaanda.com`. Domain polos `villaanda.com` butuh satu langkah tambahan — lihat
  [Memakai domain utama](#memakai-domain-utama).
- Jika `www.villaanda.com` sudah menampilkan situs lain, pilih awalan lain (`book.`, `stay.`), karena
  situs itu berhenti tampil setelah alamatnya diarahkan ke kami.

## 1. Tambahkan domain di Santara AI

**Situs Booking → Pengaturan → Domain kustom.** Ketik alamatnya (misalnya `www.villaanda.com`) lalu
tekan **Hubungkan domain**. Santara AI menampilkan dua catatan DNS khusus untuk situs Anda.

## 2. Tambahkan dua catatan di penyedia DNS

Buka pengaturan DNS domain Anda dan tambahkan kedua catatan persis seperti yang ditampilkan. Gunakan
tombol salin.

| Tipe | Host / Nama | Nilai / Mengarah ke |
|---|---|---|
| CNAME | `www` (awalan Anda) | `edge.book.santara.ai` |
| TXT | `_santara-verify.www` | `santara-verify=…` (kode yang ditampilkan di Santara AI) |

- **Kolom Host:** kebanyakan penyedia hanya meminta bagian sebelum domain — `www` dan
  `_santara-verify.www`, bukan `www.villaanda.com`. Jika nama domain sudah tampil di samping kolom,
  sistem akan menambahkannya sendiri.
- **TTL:** biarkan bawaan (atau 1 jam).
- **Cloudflare:** setel catatan CNAME ke **DNS only** (awan abu-abu). Dengan awan oranye menyala,
  Cloudflare yang menjawab, bukan kami, dan pemeriksaan gagal.
- Catatan TXT membuktikan domain milik Anda. Catatan CNAME mengarahkan tamu ke situs booking Anda.

## 3. Verifikasi

Kembali ke Santara AI dan tekan **Verifikasi**. Catatan baru biasanya aktif dalam beberapa menit,
tetapi beberapa penyedia butuh hingga satu jam. Jika pemeriksaan gagal, kartu akan menyebutkan catatan
mana yang kurang atau salah — perbaiki lalu tekan **Verifikasi** lagi.

## 4. HTTPS disiapkan untuk Anda

Setelah kedua catatan benar, kartu menampilkan **Mengamankan HTTPS** selagi kami menerbitkan sertifikat
untuk domain Anda — biasanya 5 sampai 30 menit. Anda boleh menutup halaman; sistem tidak menunggu Anda.

Saat kartu menampilkan **Aktif**, situs Anda sudah tayang di `https://www.villaanda.com`:

- Alamat Santara AI (`namaanda.book.santara.ai`) **dialihkan** ke domain Anda, halaman demi halaman,
  sehingga tautan lama dan hasil pencarian tetap mengarah ke situs Anda.
- Hasil pencarian, sitemap, dan pratinjau media sosial memakai domain Anda.
- Sertifikat diperbarui otomatis. Biarkan kedua catatan tetap ada — menghapus CNAME melepas situs dari
  domain Anda.

## Memakai domain utama

Kebanyakan penyedia tidak bisa memasang CNAME pada domain utama (`villaanda.com` tanpa awalan). Ada dua
cara:

- **Teruskan (paling mudah).** Hubungkan `www.villaanda.com` seperti di atas, lalu di pengaturan
  penyedia teruskan `villaanda.com` ke `https://www.villaanda.com`. Hampir semua penyedia punya opsi
  "forwarding" atau "redirect".
- **ALIAS / ANAME / CNAME flattening.** Beberapa penyedia (Cloudflare, AWS Route 53, DNSimple) bisa
  mengarahkan domain utama ke `edge.book.santara.ai` dengan jenis catatan ini. Pakai itu sebagai ganti
  CNAME di langkah 2, tetap pasang catatan TXT (host `_santara-verify`), dan hubungkan `villaanda.com`.

## Jika ada masalah

| Yang Anda lihat | Yang perlu dilakukan |
|---|---|
| "No TXT record was found at …" | Host catatan TXT harus `_santara-verify.<awalan>`. Tunggu beberapa menit setelah menyimpan, lalu verifikasi lagi. |
| "is a CNAME to …, but it needs to point at edge.book.santara.ai" | Ubah nilai CNAME menjadi tepat `edge.book.santara.ai`. |
| Pemeriksaan lolos tetapi tetap **Mengamankan HTTPS** lebih dari satu jam | Jika domain Anda punya catatan **CAA**, tambahkan satu yang mengizinkan `amazon.com` — sertifikat kami diterbitkan Amazon. Di Cloudflare, pastikan CNAME berstatus **DNS only**. Lalu tekan **Verifikasi** lagi. |
| "already connected to another booking site" | Domain sedang dipakai di situs Santara AI lain. Hapus dulu di sana, atau [hubungi dukungan](/id/help/support/). |

## Mengganti atau menghapus domain

Di kartu yang sama, **Hapus domain** langsung mengembalikan situs ke alamat Santara AI; sertifikat
dihapus otomatis. Untuk pindah ke domain lain, hapus domain lama lalu hubungkan domain baru. Setelah itu
Anda bisa menghapus catatan DNS di penyedia.
