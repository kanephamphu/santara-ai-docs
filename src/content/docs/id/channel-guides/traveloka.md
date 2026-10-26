---
title: "Hubungkan Traveloka"
description: "Hubungkan Channex di extranet Traveloka, gunakan property ID berupa kode huruf yang diberikannya, dan petakan tarif RETAIL per jumlah tamu."
sidebar:
  order: 5
  label: "Traveloka"
---

Cara menghubungkan Traveloka ke Santara AI. Penyiapan di dalam Santara AI sama untuk setiap channel ([Hubungkan channel lain](/id/channels/other-channels/)); halaman ini membahas yang khusus untuk Traveloka.

## Sebelum mulai

- Sebuah **properti dengan minimal satu kamar** di Santara AI.
- **Tidak ada channel manager lain atau link iCal** pada properti itu di Traveloka — dua sistem yang memperbarui satu kalender saling menimpa.

## 1. Aktifkan koneksi di Traveloka

Traveloka harus mengizinkan koneksinya terlebih dahulu. Channex adalah mitra konektivitas Santara AI — dengan nama itulah Traveloka mengenal kami.

1. Di extranet Traveloka, buka bagian **channel manager** dan pilih **Channex**.
2. Catat **property ID** yang diberikan Traveloka untuk koneksi ini. ID ini terdiri dari huruf, seperti `LsBxFfgUQcuf` — bukan angka yang Anda lihat di bagian lain extranet.

Atau minta tim support Traveloka menghubungkannya untuk Anda.

## 2. Hubungkan di Santara AI

1. Buka **Pengaturan → Channel → Tambah channel**, cari **Traveloka**, lalu tekan **Hubungkan**.
2. Pilih properti yang dituju.
3. Isi kolom di bawah, lalu tekan **Uji koneksi**.
4. Setelah uji berhasil, tekan **Hubungkan dan lanjut**.

| Kolom | Yang diisi |
| --- | --- |
| Hotel ID | Property ID berupa kode huruf yang diberikan Traveloka untuk koneksi ini. |

Jika **Uji koneksi** gagal, periksa ID-nya, lalu minta tim support Traveloka memastikan properti sudah terhubung ke Channex.

## 3. Petakan kamar dan tarif

- **Multi-okupansi** — satu harga per jumlah tamu. Jika Anda hanya punya satu harga untuk kamar itu, petakan tarif yang sama ke setiap jumlah tamu.
- Setiap kamar punya **satu tarif untuk dipetakan: RETAIL**. Semua tarif Traveloka lainnya diturunkan darinya.

Petakan **setiap** kamar dan tarif yang ditampilkan Traveloka. Yang dibiarkan tidak dipetakan tidak menerima pembaruan, dan Traveloka terus menjualnya dengan ketersediaan lamanya.

## 4. Impor dan go live

Santara AI memeriksa apa yang sudah dipetakan, mengaktifkan channel, lalu membawa masuk menginap yang sudah ada di Traveloka. Sejak itu, tarif, ketersediaan, dan restriksi tersinkron dari Santara AI — lihat [Go live](/id/channels/going-live/).

:::note[Paket makan di Traveloka]
Traveloka menetapkan paket makan pada **kamar**, bukan pada tarif, sehingga kamar yang sama bisa muncul lebih dari sekali — sekali per paket makan. Petakan masing-masing.
:::

## Perlu diketahui

- Jumlah booking bisa masuk dengan atau tanpa pajak dan komisi. Agar cocok dengan voucher hotel Traveloka, minta perwakilan Traveloka Anda mengubah pengaturan itu di extranet mereka.
- Balas tamu Traveloka di kotak masuk Traveloka sendiri — pesan tamu dari Traveloka tidak masuk ke Santara AI.

Perbaikan lain: [Pemecahan masalah channel](/id/channels/troubleshooting/).
