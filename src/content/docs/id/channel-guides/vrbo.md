---
title: "Hubungkan Vrbo"
description: "Hubungkan Vrbo dengan login Vrbo Anda (dan kode SMS), setelah melepas channel manager lama dan link iCal, lalu petakan listing demi listing."
sidebar:
  order: 9
  label: "Vrbo"
---

Cara menghubungkan Vrbo ke Santara AI. Penyiapan di dalam Santara AI sama untuk setiap channel ([Hubungkan channel lain](/id/channels/other-channels/)); halaman ini membahas yang khusus untuk Vrbo.

## Sebelum mulai

- **Akun Vrbo tidak boleh terhubung lewat API ke software lain.** Jika sebelumnya ada PMS atau channel manager yang terhubung, minta ke tim support Vrbo: *"Please disconnect my account from my current channel manager, I will control the extranet manually."* Hubungkan hanya setelah mereka mengonfirmasi.
- **Hapus setiap link iCal** di listing Vrbo Anda (dari Airbnb atau sistem lain). iCal terus menimpa apa yang dikirim Santara AI.
- Siapkan **ponsel pemilik akun** — Vrbo mungkin mengirim kode SMS.
- Sebuah **properti dengan minimal satu kamar** di Santara AI.

![Akun Vrbo yang masih terhubung ke software lain — minta Vrbo mengubahnya sebelum Anda menghubungkan.](/channel-guides/extranet/vrbo-api-connected.webp)

## 1. Hubungkan di Santara AI

1. Buka **Pengaturan → Channel → Tambah channel**, cari **VRBO**, lalu tekan **Hubungkan**.
2. Pilih properti yang dituju.
3. Masukkan **username** dan **password** Vrbo Anda.
4. Tekan **Authenticate** — bukan Uji koneksi.
5. Jika Vrbo mengirim **kode SMS** ke pemilik akun, masukkan kodenya.
6. Tekan **Uji koneksi**. Listing Vrbo Anda muncul di layar pemetaan.

| Kolom | Yang diisi |
| --- | --- |
| Username | Username Vrbo Anda. |
| Password | Password Vrbo Anda. |

## 2. Petakan kamar dan tarif

- Vrbo memetakan **listing demi listing**: pilih kamar dan tarif untuk setiap listing yang ingin Anda hubungkan.

Petakan **setiap** kamar dan tarif yang ditampilkan Vrbo. Yang dibiarkan tidak dipetakan tidak menerima pembaruan, dan Vrbo terus menjualnya dengan ketersediaan lamanya.

## 3. Impor dan go live

Santara AI memeriksa apa yang sudah dipetakan, mengaktifkan channel, lalu membawa masuk menginap yang sudah ada di Vrbo. Sejak itu, tarif, ketersediaan, dan restriksi tersinkron dari Santara AI — lihat [Go live](/id/channels/going-live/).

:::caution[Mengganti password Vrbo memutus koneksi]
Jika password akun Vrbo berubah, koneksinya terputus. Hubungkan lagi dengan password baru.
:::

## Perlu diketahui

- Tarif, ketersediaan, restriksi, dan booking (baru, berubah, dibatalkan) tersinkron.
- Mata uang: **USD, CAD, EUR, AUD, NZD, JPY, SGD, BRL, MXN, GBP**.
- **Pesan tamu dan ulasan tidak didukung** di Vrbo.

Perbaikan lain: [Pemecahan masalah channel](/id/channels/troubleshooting/).
