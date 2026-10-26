---
title: "Hubungkan Despegar"
description: "Tambahkan Channex di extranet Despegar, salin API password sekali-tampil, dan petakan setiap kamar dan tarif."
sidebar:
  order: 12
  label: "Despegar"
---

Cara menghubungkan Despegar ke Santara AI. Penyiapan di dalam Santara AI sama untuk setiap channel ([Hubungkan channel lain](/id/channels/other-channels/)); halaman ini membahas yang khusus untuk Despegar.

## Sebelum mulai

- Sebuah **properti dengan minimal satu kamar** di Santara AI.
- **Tidak ada channel manager lain atau link iCal** pada properti itu di Despegar — dua sistem yang memperbarui satu kalender saling menimpa.

## 1. Aktifkan koneksi di Despegar

Despegar harus mengizinkan koneksinya terlebih dahulu. Channex adalah mitra konektivitas Santara AI — dengan nama itulah Despegar mengenal kami.

1. Di extranet Despegar, buka **General Settings → Channel Manager Connection**.
2. **Nonaktifkan atau hapus** koneksi channel manager lama.
3. Tekan **Add channel manager / PMS**, pilih **Channex**, dan setujui ketentuannya.
4. Salin **property ID**, **username**, dan **API password** yang ditampilkan Despegar.

![Extranet Despegar: General Settings → Channel Manager Connection.](/channel-guides/extranet/despegar-menu.webp)

![Koneksi channel manager di Despegar — nonaktifkan atau hapus yang lama.](/channel-guides/extranet/despegar-connections.webp)

![Memilih channel manager di Despegar dan menyetujui syaratnya.](/channel-guides/extranet/despegar-add.webp)

:::danger[Salin API password sekarang]
Despegar menampilkan API password hanya sekali. Jika hilang, reset koneksinya di Despegar untuk mendapatkan yang baru. Password extranet biasa Anda tidak berlaku di sini.
:::

## 2. Hubungkan di Santara AI

1. Buka **Pengaturan → Channel → Tambah channel**, cari **Despegar**, lalu tekan **Hubungkan**.
2. Pilih properti yang dituju.
3. Isi kolom di bawah, lalu tekan **Uji koneksi**.
4. Setelah uji berhasil, tekan **Hubungkan dan lanjut**.

| Kolom | Yang diisi |
| --- | --- |
| Hotel ID | Property ID Despegar. |
| Username | Username yang ditampilkan Despegar. |
| Password | **API password** — bukan password extranet Anda. |
| Min stay type | Despegar hanya menerima satu jenis; pilih yang akan dikirim. |

Jika **Uji koneksi** gagal, periksa ID-nya, lalu minta tim support Despegar memastikan properti sudah terhubung ke Channex.

## 3. Petakan kamar dan tarif

- Petakan setiap kamar channel ke kamar Anda, dan setiap tarifnya ke salah satu rate plan Anda.
- Tarif 1 orang pada kamar double tidak masalah — Despegar bisa menetapkan harga tamu tambahan di extranet-nya.

Petakan **setiap** kamar dan tarif yang ditampilkan Despegar. Yang dibiarkan tidak dipetakan tidak menerima pembaruan, dan Despegar terus menjualnya dengan ketersediaan lamanya.

## 4. Impor dan go live

Santara AI memeriksa apa yang sudah dipetakan, mengaktifkan channel, lalu membawa masuk menginap yang sudah ada di Despegar. Sejak itu, tarif, ketersediaan, dan restriksi tersinkron dari Santara AI — lihat [Go live](/id/channels/going-live/).

## Perlu diketahui

- Balas tamu Despegar di kotak masuk Despegar sendiri — pesan tamu dari Despegar tidak masuk ke Santara AI.

Perbaikan lain: [Pemecahan masalah channel](/id/channels/troubleshooting/).
