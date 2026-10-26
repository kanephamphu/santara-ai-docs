---
title: "Hubungkan Hostelworld"
description: "Kirim email ke Hostelworld untuk menghubungkan Channex, masukkan property ID, dan petakan setiap kamar pada okupansi maksimumnya."
sidebar:
  order: 10
  label: "Hostelworld"
---

Cara menghubungkan Hostelworld ke Santara AI. Penyiapan di dalam Santara AI sama untuk setiap channel ([Hubungkan channel lain](/id/channels/other-channels/)); halaman ini membahas yang khusus untuk Hostelworld.

## Sebelum mulai

- Sebuah **properti dengan minimal satu kamar** di Santara AI.
- **Tidak ada channel manager lain atau link iCal** pada properti itu di Hostelworld — dua sistem yang memperbarui satu kalender saling menimpa.

## 1. Aktifkan koneksi di Hostelworld

Hostelworld harus mengizinkan koneksinya terlebih dahulu. Channex adalah mitra konektivitas Santara AI — dengan nama itulah Hostelworld mengenal kami.

1. Kirim email ke tim support Hostelworld untuk menghubungkan **Channex**.
2. Mereka membalas saat koneksi sudah aktif, beserta **property ID** Anda.

## 2. Hubungkan di Santara AI

1. Buka **Pengaturan → Channel → Tambah channel**, cari **Hostelworld**, lalu tekan **Hubungkan**.
2. Pilih properti yang dituju.
3. Isi kolom di bawah, lalu tekan **Uji koneksi**.
4. Setelah uji berhasil, tekan **Hubungkan dan lanjut**.

![Langkah 2 di Santara AI: kolom penyiapan Hostelworld, lalu Uji koneksi.](/screens/channel-guides/hostelworld.id.png)

| Kolom | Yang diisi |
| --- | --- |
| Hotel ID | Hotel ID Hostelworld Anda. Hostelworld mengirimnya sebagai property ID. |
| Min Stay Type | Minimum menginap yang dikirim: **Arrival** atau **Through**. Biasanya Arrival. |
| Send Property Notification | Opsional. Centang, lalu kolom **Property Email** muncul — alamat itu menerima email untuk setiap pemesanan baru. |
| Booking Amount | **With Commission** atau **Without Commission** — cara total pemesanan diterima. |

Jika **Uji koneksi** gagal, periksa ID-nya, lalu minta tim support Hostelworld memastikan properti sudah terhubung ke Channex.

## 3. Petakan kamar dan tarif

- Hostelworld memberi harga setiap kamar pada **okupansi maksimumnya**: kamar double mengirim harga 2 orang, kamar 4 tempat tidur harga 4 orang. Kamar double tidak bisa dijual sebagai single.
- **Tempat tidur dorm** mengirim harga 1 orang.

Petakan **setiap** kamar dan tarif yang ditampilkan Hostelworld. Yang dibiarkan tidak dipetakan tidak menerima pembaruan, dan Hostelworld terus menjualnya dengan ketersediaan lamanya.

## 4. Impor dan go live

Santara AI memeriksa apa yang sudah dipetakan, mengaktifkan channel, lalu membawa masuk menginap yang sudah ada di Hostelworld. Sejak itu, tarif, ketersediaan, dan restriksi tersinkron dari Santara AI — lihat [Go live](/id/channels/going-live/).

## Perlu diketahui

- Hostelworld tidak mendukung **closed to arrival** maupun **closed to departure** — restriksi itu tidak dikirim.
- Balas tamu Hostelworld di kotak masuk Hostelworld sendiri — pesan tamu dari Hostelworld tidak masuk ke Santara AI.

Perbaikan lain: [Pemecahan masalah channel](/id/channels/troubleshooting/).
