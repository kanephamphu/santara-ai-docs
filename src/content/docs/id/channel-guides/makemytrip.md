---
title: "Hubungkan MakeMyTrip and Goibibo"
description: "Minta MakeMyTrip menghubungkan Channex, masukkan Hotel ID dan access token Anda, dan petakan kamar per jumlah tamu."
sidebar:
  order: 8
  label: "MakeMyTrip and Goibibo"
---

Cara menghubungkan MakeMyTrip and Goibibo ke Santara AI. Penyiapan di dalam Santara AI sama untuk setiap channel ([Hubungkan channel lain](/id/channels/other-channels/)); halaman ini membahas yang khusus untuk MakeMyTrip and Goibibo.

## Sebelum mulai

- Anda memerlukan **kontrak sendiri** dengan MakeMyTrip, dengan detail dan foto properti sudah ada di extranet-nya. Santara AI menghubungkan properti yang sudah terdaftar; Santara AI tidak bisa membuatkannya di MakeMyTrip untuk Anda.
- Sebuah **properti dengan minimal satu kamar** di Santara AI.
- **Tidak ada channel manager lain atau link iCal** pada properti itu di MakeMyTrip and Goibibo — dua sistem yang memperbarui satu kalender saling menimpa.

## 1. Aktifkan koneksi di MakeMyTrip and Goibibo

MakeMyTrip and Goibibo harus mengizinkan koneksinya terlebih dahulu. Channex adalah mitra konektivitas Santara AI — dengan nama itulah MakeMyTrip and Goibibo mengenal kami.

1. Minta tim support MakeMyTrip, lewat fitur pesan di extranet, untuk menghubungkan **Channex**.
2. Mereka memberi Anda sebuah **access token**. Simpan bersama **Hotel ID** Anda.

## 2. Hubungkan di Santara AI

1. Buka **Pengaturan → Channel → Tambah channel**, cari **Make My Trip**, lalu tekan **Hubungkan**.
2. Pilih properti yang dituju.
3. Isi kolom di bawah, lalu tekan **Uji koneksi**.
4. Setelah uji berhasil, tekan **Hubungkan dan lanjut**.

![Langkah 2 di Santara AI: kolom penyiapan MakeMyTrip and Goibibo, lalu Uji koneksi.](/screens/channel-guides/makemytrip.id.png)

| Kolom | Yang diisi |
| --- | --- |
| Hotel ID | Hotel ID MakeMyTrip Anda. |
| Access Token | Token yang diberikan MakeMyTrip saat Channex dihubungkan. |
| Send Property Notification | Opsional. Centang, lalu kolom **Property Email** muncul — alamat itu menerima email untuk setiap pemesanan baru. |
| Sync B2B Rate Type / Sync MyBiz Rate Type | Opsional. Kirim harga juga ke tarif B2B atau MyBiz MakeMyTrip; kolom **Modifier (%)** muncul untuk menyesuaikannya. |
| Booking Amount | **Payout Amount** atau **Total Amount**. |

Jika **Uji koneksi** gagal, periksa ID-nya, lalu minta tim support MakeMyTrip and Goibibo memastikan properti sudah terhubung ke Channex.

## 3. Petakan kamar dan tarif

- Biasanya **multi-okupansi** — satu harga per jumlah tamu. Jika Anda hanya punya satu harga untuk kamar itu, petakan tarif yang sama ke setiap jumlah tamu.

Petakan **setiap** kamar dan tarif yang ditampilkan MakeMyTrip and Goibibo. Yang dibiarkan tidak dipetakan tidak menerima pembaruan, dan MakeMyTrip and Goibibo terus menjualnya dengan ketersediaan lamanya.

## 4. Impor dan go live

Santara AI memeriksa apa yang sudah dipetakan, mengaktifkan channel, lalu membawa masuk menginap yang sudah ada di MakeMyTrip and Goibibo. Sejak itu, tarif, ketersediaan, dan restriksi tersinkron dari Santara AI — lihat [Go live](/id/channels/going-live/).

## Perlu diketahui

- Balas tamu MakeMyTrip and Goibibo di kotak masuk MakeMyTrip and Goibibo sendiri — pesan tamu dari MakeMyTrip and Goibibo tidak masuk ke Santara AI.

Perbaikan lain: [Pemecahan masalah channel](/id/channels/troubleshooting/).
