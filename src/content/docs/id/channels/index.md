---
title: Cara kerja koneksi channel
description: Apa itu koneksi, apa yang tersinkronisasi di tiap arah, tempat setiap channel dihubungkan, dan status yang dilewati sebuah listing.
sidebar:
  order: 1
---

Santara AI adalah channel manager Anda: ia menghubungkan channel tempat Anda berjualan. Begitu
sebuah listing live, empat hal mengalir:

| Arah | Yang berpindah |
| --- | --- |
| **Keluar ke channel** | Ketersediaan, tarif per malam, minimum menginap, restriksi |
| **Masuk dari channel** | Reservasi, pembatalan, tamu, pesan, ulasan |
| **Masuk sekali, saat impor** | Detail listing — judul, foto, fasilitas, kapasitas, tarif yang ada |
| **Keluar bila diminta** | Balasan Anda ke pesan tamu; balasan Anda atas ulasan |

Santara AI tidak pernah menulis ke konten listing **Airbnb** Anda — judul, deskripsi, dan fotonya
tetap seperti di Airbnb. Santara AI juga tidak pernah mengubah harga di channel yang tidak Anda
ketik atau tidak dihitung oleh aturan pricing Anda.

Di **Booking.com dan channel lain**, konten properti Anda ikut dikirim. Saat Anda menyimpan properti
atau kamar, Santara AI mengirim fotonya (hingga 30), deskripsi, kebijakan rumah, kebijakan pembatalan,
dan fasilitasnya ke channel manager, yang meneruskannya ke channel yang menerimanya.

![Ketersediaan dan tarif keluar ke channel; booking, tamu, pesan, dan ulasan masuk kembali. Detail listing datang sekali, saat impor.](/diagrams/sync-directions.id.svg)

## Channel yang didukung

Santara AI terhubung ke **54 channel penjualan**, ditambah situs booking Anda sendiri. Setiap
channel, termasuk Airbnb dan Booking.com, adalah satu kotak di **Pengaturan → Channel → Tambah
channel**. Tekan **Hubungkan** pada sebuah kotak dan penyiapan tiga langkah terbuka.

| Channel | Cara menghubungkan |
| --- | --- |
| **Airbnb** | Hubungkan, pilih listing, impor. Santara AI membuat properti dan kamar dari listing Anda — [Hubungkan Airbnb](/id/channels/airbnb/) |
| **Booking.com** | Pilih properti, hubungkan dan petakan (Hotel ID Anda), impor — [Hubungkan Booking.com](/id/channels/booking-com/) |
| **Setiap channel lain** — Agoda, Expedia, Trip.com, Traveloka, Tiket.com, Hostelworld, dan lainnya | Pilih properti, hubungkan dan petakan, impor — [Hubungkan channel lain](/id/channels/other-channels/) |
| **Situs booking Anda** | Bawaan Santara AI, tanpa koneksi — [Situs booking langsung Anda](/id/setup/booking-site/) |

**Setiap channel selain Airbnb membutuhkan properti dengan kamar terlebih dahulu.** Sebelum ada,
kotaknya menampilkan **Tambah properti dulu** — menghubungkan channel memetakan kamar yang sudah Anda
punya, bukan membuatnya. Tambahkan di [Properti](/id/setup/properties/), atau hubungkan Airbnb dulu
dan biarkan ia membuatnya.

:::note[PriceLabs sedang dijeda]
Koneksi PriceLabs baru sedang dijeda, jadi PriceLabs tidak punya kotak. Koneksi PriceLabs yang sudah
ada tetap berjalan dan masih bisa diputus.
:::

Setiap channel mendapat kalender, tarif, dan restriksi yang sama, serta membawa masuk booking,
pembatalan, dan tamu. Dua hal berbeda per channel:

- **Pesan tamu.** Balasan hanya bisa dikirim di **Airbnb, Booking.com, dan Expedia** — channel yang
  meneruskan pesan tamu lewat koneksinya. Di channel lain, balas tamu di kotak masuk channel itu
  sendiri.
- **Ulasan** masuk, dan bisa dibalas, bila channel meneruskannya.

![Pengaturan → Channel sebelum ada yang terhubung. Tiap channel ditautkan sendiri-sendiri dengan status dan waktu sinkron terakhirnya.](/screens/channels.id.png)

## Tiga tab

**Pengaturan → Channel** punya tiga tab:

- **Tambah channel** — katalognya. Cari berdasarkan nama, atau saring menurut jenis, lalu tekan
  **Hubungkan**. Channel yang sudah Anda pakai menampilkan **Tambah akun lain**.
- **Terhubung** — semua koneksi Anda. Buka salah satunya untuk melihat listing, status sinkron, dan
  status tayangnya.
- **Aplikasi** — aplikasi yang Anda izinkan masuk ke akun Anda, seperti Santi, ChatGPT, atau Claude.
  Lihat [Hubungkan asisten AI](/id/help/ai-assistants/).

## Koneksi dan akun

**Koneksi** adalah satu akun channel. Anda bisa menghubungkan:

- beberapa **akun Airbnb** ke satu workspace — umum bagi manajer yang memegang listing di beberapa
  login host;
- beberapa **properti Booking.com**, satu per Hotel ID;
- channel lain dari daftar, **satu properti setiap kali** — hubungkan channel yang sama lagi untuk
  properti lain.

Setiap koneksi punya halaman sendiri di **Pengaturan → Channel** yang menampilkan listing-nya, waktu
sinkron terakhir, dan seluruh tindakan yang tersedia. Tidak ada bagian Santara AI yang mengasumsikan
hanya ada satu dari apa pun.

## Status listing

Setiap listing di halaman koneksi membawa salah satu label ini:

| Label | Artinya |
| --- | --- |
| **Belum tertaut** | Santara AI melihat listing di channel; belum menunjuk kamar di sini. Tidak ada yang tersinkronisasi |
| **Tertaut — tarif belum dipetakan** | Sudah menunjuk kamar, tetapi tarifnya belum punya tujuan |
| **Perlu tindakan** | Ada yang perlu Anda lakukan — alasannya tampil di sebelahnya, misalnya *Konfirmasi kapasitas untuk melanjutkan* |
| **Siap — belum tayang** | Sudah disiapkan dan dipetakan, tetapi channel belum menyerahkan kendali |
| **Menerbitkan…** | Sedang ditayangkan |
| **Tayang** | Ketersediaan dan tarif keluar, booking dan pesan masuk |
| **Gangguan** | Channel menolak sesuatu; alasannya tampil di sebelahnya |

Di Airbnb, mengimpor listing menayangkannya sebagai langkah terakhir. Di Booking.com dan setiap
channel lain, memetakan kamar langsung menayangkannya. Lihat [Go live](/id/channels/going-live/).

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
