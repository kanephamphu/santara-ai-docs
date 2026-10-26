---
title: "Hubungkan Agoda"
description: "Aktifkan mode channel manager di Agoda YCS, masukkan Hotel ID Anda, dan petakan kamar per jumlah tamu."
sidebar:
  order: 2
  label: "Agoda"
---

Cara menghubungkan Agoda ke Santara AI. Penyiapan di dalam Santara AI sama untuk setiap channel ([Hubungkan channel lain](/id/channels/other-channels/)); halaman ini membahas yang khusus untuk Agoda.

## Sebelum mulai

- Anda memerlukan **kontrak sendiri** dengan Agoda, dengan detail dan foto properti sudah ada di extranet-nya. Santara AI menghubungkan properti yang sudah terdaftar; Santara AI tidak bisa membuatkannya di Agoda untuk Anda.
- Sebuah **properti dengan minimal satu kamar** di Santara AI.
- **Tidak ada channel manager lain atau link iCal** pada properti itu di Agoda — dua sistem yang memperbarui satu kalender saling menimpa.

## 1. Aktifkan koneksi di Agoda

Agoda harus mengizinkan koneksinya terlebih dahulu. Channex adalah mitra konektivitas Santara AI — dengan nama itulah Agoda mengenal kami.

1. Di Agoda **YCS**, buka **Settings → Property Settings → Optional Settings**.
2. Centang **Enable channel manager mode**.
3. Pilih **Channex** dari daftar, lalu **Save**.

Atau minta tim support Agoda, lewat fitur pesan di extranet, untuk menghubungkan Channex bagi Anda.

![Agoda YCS: Settings → Property Settings → Optional settings, dengan Enable channel manager mode dicentang dan penyedia dipilih.](/channel-guides/extranet/agoda-ycs.webp)

## 2. Hubungkan di Santara AI

1. Buka **Pengaturan → Channel → Tambah channel**, cari **Agoda**, lalu tekan **Hubungkan**.
2. Pilih properti yang dituju.
3. Isi kolom di bawah, lalu tekan **Uji koneksi**.
4. Setelah uji berhasil, tekan **Hubungkan dan lanjut**.

![Langkah 2 di Santara AI: kolom penyiapan Agoda, lalu Uji koneksi.](/screens/channel-guides/agoda.id.png)

| Kolom | Yang diisi |
| --- | --- |
| Hotel ID | Hotel ID Agoda Anda. |
| Send Property Notification | Opsional. Centang, lalu kolom **Property Email** muncul — alamat itu menerima email untuk setiap pemesanan baru. |
| Tax Setting For Bookings | **Inclusive** — termasuk pajak, dikurangi komisi (payout Anda). **Inclusive With Commissions** — termasuk pajak dan komisi (total tamu). **Exclusive** — tanpa pajak atau komisi (model AS). |

Jika **Uji koneksi** gagal, periksa ID-nya, lalu minta tim support Agoda memastikan properti sudah terhubung ke Channex.

## 3. Petakan kamar dan tarif

- **Multi-okupansi** — satu harga per jumlah tamu. Jika Anda hanya punya satu harga untuk kamar itu, petakan tarif yang sama ke setiap jumlah tamu.

Petakan **setiap** kamar dan tarif yang ditampilkan Agoda. Yang dibiarkan tidak dipetakan tidak menerima pembaruan, dan Agoda terus menjualnya dengan ketersediaan lamanya.

## 4. Impor dan go live

Santara AI memeriksa apa yang sudah dipetakan, mengaktifkan channel, lalu membawa masuk menginap yang sudah ada di Agoda. Sejak itu, tarif, ketersediaan, dan restriksi tersinkron dari Santara AI — lihat [Go live](/id/channels/going-live/).

## Perlu diketahui

- Balas tamu Agoda di kotak masuk Agoda sendiri — pesan tamu dari Agoda tidak masuk ke Santara AI.

Perbaikan lain: [Pemecahan masalah channel](/id/channels/troubleshooting/).
