---
title: "Hubungkan Expedia"
description: "Pilih Channex untuk konektivitas dan booking di extranet Expedia, masukkan property ID, petakan, dan booking mendatang ikut masuk."
sidebar:
  order: 3
  label: "Expedia"
---

Cara menghubungkan Expedia ke Santara AI. Penyiapan di dalam Santara AI sama untuk setiap channel ([Hubungkan channel lain](/id/channels/other-channels/)); halaman ini membahas yang khusus untuk Expedia.

## Sebelum mulai

- Sebuah **properti dengan minimal satu kamar** di Santara AI.
- **Tidak ada channel manager lain atau link iCal** pada properti itu di Expedia — dua sistem yang memperbarui satu kalender saling menimpa.

## 1. Aktifkan koneksi di Expedia

Expedia harus mengizinkan koneksinya terlebih dahulu. Channex adalah mitra konektivitas Santara AI — dengan nama itulah Expedia mengenal kami.

1. Di extranet Expedia, buka **Rooms and rates → Connectivity settings**. Expedia biasanya meminta login dua langkah di sini.
2. Pilih **Channex** untuk **kedua** opsi: konektivitas **dan** booking.

![Expedia Partner Central: Rooms and rates → Connectivity settings.](/channel-guides/extranet/expedia-menu.webp)

![Expedia meminta verifikasi tambahan sebelum menampilkan Connectivity settings.](/channel-guides/extranet/expedia-verify.webp)

## 2. Hubungkan di Santara AI

1. Buka **Pengaturan → Channel → Tambah channel**, cari **Expedia**, lalu tekan **Hubungkan**.
2. Pilih properti yang dituju.
3. Isi kolom di bawah, lalu tekan **Uji koneksi**.
4. Setelah uji berhasil, tekan **Hubungkan dan lanjut**.

![Langkah 2 di Santara AI: kolom penyiapan Expedia, lalu Uji koneksi.](/screens/channel-guides/expedia.id.png)

| Kolom | Yang diisi |
| --- | --- |
| Hotel ID | Hotel ID Expedia Anda. Expedia menyebutnya property ID. |
| Min Stay Type | Minimum menginap yang dikirim: **Arrival** atau **Through**. Biasanya Arrival. |
| Send Property Notification | Opsional. Centang, lalu kolom **Property Email** muncul — alamat itu menerima email untuk setiap pemesanan baru. |
| Booking Amount | **Collect Amount** — yang Anda tagih ke tamu atau kartu virtual; sama dengan VCC. **Total Amount** — yang dibayar tamu, termasuk pajak dan biaya. **Total Amount Excluding Tax** — untuk properti di AS. |

Jika **Uji koneksi** gagal, periksa ID-nya, lalu minta tim support Expedia memastikan properti sudah terhubung ke Channex.

## 3. Petakan kamar dan tarif

- Kamar dan tarif Expedia ada di kiri; pilih kamar dan tarif Anda yang cocok di kanan.

Petakan **setiap** kamar dan tarif yang ditampilkan Expedia. Yang dibiarkan tidak dipetakan tidak menerima pembaruan, dan Expedia terus menjualnya dengan ketersediaan lamanya.

## 4. Impor dan go live

Santara AI memeriksa apa yang sudah dipetakan, mengaktifkan channel, lalu membawa masuk menginap yang sudah ada di Expedia. Sejak itu, tarif, ketersediaan, dan restriksi tersinkron dari Santara AI — lihat [Go live](/id/channels/going-live/).

## Perlu diketahui

- Go live mengirim semua tarif, ketersediaan, dan restriksi dalam satu sinkronisasi penuh.
- **Booking Expedia yang akan datang ikut diimpor.**
- **Pesan tamu** di Expedia bisa dibalas dari Santara AI.

Perbaikan lain: [Pemecahan masalah channel](/id/channels/troubleshooting/).
