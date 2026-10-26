---
title: "Hubungkan Hotelbeds"
description: "Pilih Channex di Maxiroom, hubungkan dengan username dan password Hotelbeds, pilih kontrak, dan petakan — satu koneksi per kontrak."
sidebar:
  order: 11
  label: "Hotelbeds"
---

Cara menghubungkan Hotelbeds ke Santara AI. Penyiapan di dalam Santara AI sama untuk setiap channel ([Hubungkan channel lain](/id/channels/other-channels/)); halaman ini membahas yang khusus untuk Hotelbeds.

## Sebelum mulai

- Sebuah **properti dengan minimal satu kamar** di Santara AI.
- **Tidak ada channel manager lain atau link iCal** pada properti itu di Hotelbeds — dua sistem yang memperbarui satu kalender saling menimpa.

## 1. Aktifkan koneksi di Hotelbeds

Hotelbeds harus mengizinkan koneksinya terlebih dahulu. Channex adalah mitra konektivitas Santara AI — dengan nama itulah Hotelbeds mengenal kami.

1. Masuk ke extranet **Maxiroom** dan pilih **Channex** dari daftar channel manager.

Jika tidak ada, buka tiket support Hotelbeds untuk menghubungkan Channex. Channex harus menjadi satu-satunya channel manager yang terhubung.

## 2. Hubungkan di Santara AI

1. Buka **Pengaturan → Channel → Tambah channel**, cari **Hotelbeds**, lalu tekan **Hubungkan**.
2. Pilih properti yang dituju.
3. Isi kolom di bawah, lalu tekan **Uji koneksi**.
4. Setelah uji berhasil, tekan **Hubungkan dan lanjut**.

| Kolom | Yang diisi |
| --- | --- |
| Username and password | Yang diberikan Hotelbeds kepada Anda. Keduanya sering sama — itu wajar. |
| Contract | Muncul setelah Uji koneksi. Pilih kontrak untuk koneksi ini. |
| Update availability / rates / restrictions | Apa yang dikirim. Biarkan ketiganya aktif kecuali kontrak Anda menetapkan harga atau alokasi secara tetap. |

Jika **Uji koneksi** gagal, periksa ID-nya, lalu minta tim support Hotelbeds memastikan properti sudah terhubung ke Channex.

## 3. Petakan kamar dan tarif

- Kamar Hotelbeds ditampilkan; petakan masing-masing ke kamar dan tarif Anda.
- **Jangan** kirim harga ke tarif bertanda **FIT** atau tarif kontrak serupa — tarif itu menolaknya.

Petakan **setiap** kamar dan tarif yang ditampilkan Hotelbeds. Yang dibiarkan tidak dipetakan tidak menerima pembaruan, dan Hotelbeds terus menjualnya dengan ketersediaan lamanya.

## 4. Impor dan go live

Santara AI memeriksa apa yang sudah dipetakan, mengaktifkan channel, lalu membawa masuk menginap yang sudah ada di Hotelbeds. Sejak itu, tarif, ketersediaan, dan restriksi tersinkron dari Santara AI — lihat [Go live](/id/channels/going-live/).

:::note[Satu koneksi per kontrak]
Dengan empat kontrak Hotelbeds, hubungkan Hotelbeds empat kali — sekali per kontrak.
:::

## Perlu diketahui

- Balas tamu Hotelbeds di kotak masuk Hotelbeds sendiri — pesan tamu dari Hotelbeds tidak masuk ke Santara AI.

## Error Hotelbeds

| Error | Yang harus dilakukan |
| --- | --- |
| *This request is out of the contract period* | Minta Hotelbeds memperpanjang kontrak hingga lebih dari dua tahun. |
| *day … has no inventory loaded* | Minta Hotelbeds memuat harga di setiap tanggal hingga dua tahun ke depan. |
| *This change is not permitted as it does not agree with the signed contract* | Matikan **Update rates** untuk koneksi ini. |
| *Minimum allotment activated …* | Kontraknya punya alokasi yang tidak bisa Anda tutup. Minta kontrak tanpa alokasi ke Hotelbeds — alokasi bisa menyebabkan overbooking. |

Perbaikan lain: [Pemecahan masalah channel](/id/channels/troubleshooting/).
