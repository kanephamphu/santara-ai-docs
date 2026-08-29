---
title: Template pesan
description: Balasan yang sering Anda kirim, ditulis sekali, dengan detail tamu terisi sendiri.
sidebar:
  order: 4
---

**Pengaturan → Template Pesan**. Template adalah balasan yang sering Anda kirim, dengan **variabel**
yang terisi sendiri dari data menginap — jadi "kode pintu Anda 4417" diketik sekali, bukan empat
ratus kali.

Template **dicakup oleh workspace**, jadi jawaban yang disepakati tim adalah jawaban yang dikirim
semua orang.

![Template pesan, dengan variabel yang terisi sendiri dari data menginap.](/screens/message-templates.id.png)

## Variabel

Tulis placeholder di dalam kurung kurawal dan ia akan terisi saat template dipakai:

```
Hai {guest_name}, kami senang menyambut Anda di {property_name}.
Check-in mulai {check_in_time}. Kode pintu Anda {door_code}.
```

Nilainya berasal dari tamu, reservasinya, dan properti di baliknya — nama, properti, jam check-in dan
check-out, kode pintu, wifi, jumlah tagihan.

**Sebuah variabel hanya sebaik properti di baliknya.** `{door_code}` pada properti yang belum punya
kode pintu tidak menghasilkan apa-apa yang berguna — satu alasan lagi untuk mengisi
[informasi menginap](/id/setup/properties/#informasi-menginap-wifi-kode-pintu-akses).

## Pratinjau terhadap data nyata

Pilih reservasi, properti, atau tamu nyata sebagai **konteks** saat menulis, dan pratinjaunya terisi
nilai asli dari workspace, bukan placeholder. Itulah beda antara template yang tampak benar dan
template yang sudah Anda lihat menghasilkan kalimat sungguhan.

## Di mana template dipakai

- **Di [Pesan](/id/daily/messages/)** — sisipkan ke utas mana pun, sunting sebelum dikirim.
- **Di draf AI** — saran balasan asisten memanfaatkan template Anda, sehingga gaya bahasanya tetap
  milik Anda alih-alih kembali ke suara generik.

Tidak ada yang dikirim otomatis. Template mengisi kotaknya; Anda yang menekan kirim.

## Yang sudah tersedia sejak awal

Workspace baru mendapat lima, mencakup apa yang hampir semua orang tulis:

| Template | Kapan |
| --- | --- |
| **Sambutan / kedatangan** | Sebelum check-in: jam, kode pintu, cara masuk |
| **Pengingat check-out** | Sehari sebelumnya: jam, kunci, apa yang perlu ditinggalkan |
| **Tawaran late check-out** | Saat kalender memungkinkan — lihat [Upsell](/id/money/upsells/) |
| **Permintaan ulasan** | Setelah masa menginap yang baik |
| **Permintaan maaf** | Saat ada yang salah dan Anda perlu waktu, dengan jujur |

Sunting sesuka Anda — perubahan hanya berlaku pada template tersimpan itu, dan bawaannya adalah titik
awal, bukan sesuatu yang terus diperbarui produk.

## Menulisnya per bahasa

Template adalah teks, jadi workspace yang melayani tamu dalam tiga bahasa membutuhkan tiga set. Beri
nama agar bahasanya jelas terlihat di daftar; tidak ada terjemahan otomatis, dan permintaan maaf hasil
terjemahan mesin lebih buruk daripada yang singkat dalam bahasa Inggris.
