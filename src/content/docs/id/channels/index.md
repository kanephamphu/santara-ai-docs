---
title: Cara kerja koneksi channel
description: Apa itu koneksi, apa yang tersinkronisasi di tiap arah, dan empat status yang dilewati sebuah listing.
sidebar:
  order: 1
---

Santara AI terhubung ke channel tempat Anda berjualan melalui channel manager tersertifikasi. Begitu
sebuah listing live, empat hal mengalir:

| Arah | Yang berpindah |
| --- | --- |
| **Keluar ke channel** | Ketersediaan, tarif per malam, minimum menginap, restriksi |
| **Masuk dari channel** | Reservasi, pembatalan, tamu, pesan, ulasan |
| **Masuk sekali, saat impor** | Detail listing — judul, foto, fasilitas, kapasitas, tarif yang ada |
| **Keluar bila diminta** | Balasan Anda ke pesan tamu; balasan Anda atas ulasan |

Selain itu tidak ada. Santara AI tidak mengubah deskripsi listing Anda, dan tidak pernah mengubah harga
di channel yang tidak Anda ketik atau tidak dihitung oleh aturan pricing Anda.

![Ketersediaan dan tarif keluar ke channel; booking, tamu, pesan, dan ulasan masuk kembali. Detail listing datang sekali, saat impor.](/diagrams/sync-directions.id.svg)

## Channel yang didukung

| Channel | Cara menghubungkan | Status |
| --- | --- | --- |
| **Airbnb** | Anda mengotorisasi Santara AI di Airbnb, lalu memilih listing | Tersedia |
| **Booking.com** | Anda menambahkan connectivity provider di extranet, lalu memasukkan Hotel ID | Tersedia |
| **Situs booking Anda** | Bawaan Santara AI, tanpa koneksi | Tersedia |
| **VRBO** | Lewat channel manager yang sama | Dalam roadmap — tampil sebagai kartu abu-abu di Pengaturan → Channel sampai rilis |
| **PriceLabs** | Deteksi baca-saja: jika Anda memakai PriceLabs, mesin pricing Santara AI mengalah | Tersedia |

![Pengaturan → Channel sebelum ada yang terhubung. Tiap channel ditautkan sendiri-sendiri dengan status dan waktu sinkron terakhirnya.](/screens/channels.id.png)

## Koneksi dan akun

**Koneksi** adalah satu akun channel. Anda bisa menghubungkan:

- beberapa **akun Airbnb** ke satu workspace — umum bagi manajer yang memegang listing di beberapa
  login host;
- beberapa **properti Booking.com**, satu per Hotel ID.

Setiap koneksi punya halaman sendiri di **Pengaturan → Channel** yang menampilkan listing-nya, waktu
sinkron terakhir, dan seluruh tindakan yang tersedia. Tidak ada bagian Santara AI yang mengasumsikan
hanya ada satu dari apa pun.

## Empat status listing

Kosakata ini dipakai identik di setiap layar:

![Empat status yang dilewati sebuah listing, dengan Go live sebagai gerbang sebelum status terakhir.](/diagrams/listing-states.id.svg)

1. **Belum terhubung** — tidak ada akun channel yang tertaut.
2. **Tertaut — belum dipetakan** — Santara AI melihat listing di channel, tetapi belum menunjuk kamar
   di sini. Tidak ada yang tersinkronisasi.
3. **Dipetakan — menunggu aktivasi** — sudah menunjuk kamar. Tetap belum ada yang tersinkronisasi.
4. **Live** — ketersediaan dan tarif keluar, booking dan pesan masuk.

Jarak antara 3 dan 4 disengaja dan Andalah yang menutupnya. Lihat
[Go live](/id/channels/going-live/).

## Waktu sinkronisasi

- **Booking baru, pembatalan, dan pesan** tiba dalam hitungan detik hingga satu menit.
- **Perubahan ketersediaan dan tarif** dikirim saat Anda menyimpannya, biasanya tampak di channel
  dalam satu menit.
- **Pembacaan ulang penuh** terjadi saat Anda menekan **Segarkan**, dan secara terjadwal.

Jika channel mengalami gangguan, perubahan mengantre dan mengalir saat pulih. Anda tidak perlu
mengulang.

## Apa arti memutus koneksi

Memutus koneksi menghentikan sinkronisasi dan menghapus reservasi, tamu, pesan, dan ulasan yang
berasal darinya. **Tidak ada yang berubah di channel** — listing, kalender, dan booking di sana
tetap utuh. Anda bisa menghubungkan akun yang sama lagi nanti.

Menghapus satu listing (**Hapus dari Santara AI**) melakukan hal yang sama untuk satu kamar itu.

:::caution
Memutus koneksi bukan cara untuk menjeda. Jika ingin channel berhenti menerima booking sementara,
tutup tanggalnya di [kalender](/id/daily/calendar/) — data dan riwayat Anda tetap aman.
:::
