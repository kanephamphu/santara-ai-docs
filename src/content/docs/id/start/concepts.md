---
title: Bagaimana Santara AI disusun
description: Workspace, properti, kamar, rate plan, listing, koneksi. Enam kata yang menjelaskan setiap layar dalam produk.
sidebar:
  order: 3
---

Hampir semua pertanyaan "ini letaknya di mana?" terjawab oleh enam kata ini. Layak lima menit.

## Workspace

Semua yang Anda lihat milik satu **workspace** — properti, tim, penagihan, situs booking Anda. Jika
Anda mengelola dua portofolio yang tidak boleh bercampur, itu dua workspace, dan Anda berpindah dari
menu akun.

Login Anda terpisah dari workspace. Satu orang bisa menjadi pemilik di workspace-nya sendiri dan
petugas kebersihan di workspace orang lain.

## Properti, lalu kamar

**Properti** adalah bangunan atau alamat. **Kamar** adalah unit yang bisa dipesan di dalamnya.

| Yang Anda jual | Properti | Kamar |
| --- | --- | --- |
| Satu vila utuh, satu listing | Vila itu | Satu kamar — seluruh vila |
| Vila 3 kamar disewakan per kamar | Vila itu | Tiga kamar |
| Guesthouse kecil, 8 unit | Guesthouse itu | Delapan kamar |
| Lima apartemen dalam satu blok, dijual terpisah | Biasanya lima properti | Satu kamar masing-masing |

![Workspace memuat properti; properti memuat kamar; tiap kamar punya rate plan sendiri dan dipetakan satu-ke-satu ke listing channel.](/diagrams/object-model.id.svg)

**Kamar adalah yang dipesan tamu, dan kamar adalah yang ditagihkan.** Harga, ketersediaan, foto,
kapasitas, dan pemetaan channel semuanya melekat pada kamar. Properti menyimpan yang dibagi
bersama: alamat, wifi, aturan rumah, grup kebersihan.

Beberapa fakta ada di dua level — wifi, kode pintu, catatan akses. Atur di properti dan semua kamar
mewarisi; atur di kamar dan kamar itu yang menang. Lihat
[Properti dan kamar](/id/setup/properties/).

## Rate plan

**Rate plan** adalah harga jual sebuah kamar, beserta aturannya: minimum menginap, jumlah tamu yang
termasuk, biaya tamu tambahan, ketentuan pembatalan.

Satu kamar bisa punya lebih dari satu rate plan (misalnya tarif fleksibel dan tarif non-refundable
yang lebih murah). Kamar hasil impor datang dengan rate plan yang dibangun dari data channel.

Harga per malam di kalender adalah harga rate plan untuk malam itu. Aturan pricing mengubah angka
tersebut; bukan membuat plan baru.

## Listing dan koneksi

**Koneksi** adalah satu akun channel yang Anda tautkan — satu login Airbnb, atau satu properti
Booking.com. Anda bisa punya beberapa, termasuk beberapa akun Airbnb.

**Listing** adalah satu objek di channel yang dipetakan ke satu kamar Santara AI. Pemetaannya
satu-ke-satu. Ketika listing terpetakan dan channel aktif, ketersediaan dan harga kamar itu mengalir
keluar, sementara booking dan pesannya mengalir masuk.

Sebuah listing melewati status berikut, dan teks di layar sama persis:

| Status | Artinya |
| --- | --- |
| **Belum terhubung** | Akun channel belum ditautkan |
| **Tertaut — belum dipetakan** | Listing terlihat; belum menunjuk kamar mana pun |
| **Dipetakan — menunggu aktivasi** | Sudah menunjuk kamar, tetapi channel belum menyerahkan kendali |
| **Live** | Ketersediaan dan tarif keluar, booking dan pesan masuk |

Tidak ada yang berpindah dari *dipetakan* ke *live* dengan sendirinya. Lihat
[Go live](/id/channels/going-live/).

## Reservasi, tamu, utas

**Reservasi** (juga disebut menginap atau booking) milik satu kamar dan rentang tanggal. **Tamu**
adalah orang, dan orang yang sama pada dua kali menginap adalah satu tamu dengan riwayat. **Utas**
adalah percakapan dengan tamu itu.

## Kapabilitas, bukan jabatan

Akses bukan "petugas kebersihan melihat tiga layar". Setiap layar dan setiap rute API meminta
**kapabilitas** bernama — `stay.read`, `pricing.write`, `guest.message.send` — dan peran Anda adalah
kumpulan kapabilitas, yang bisa dipersempit ke bangunan tertentu. Karena itulah petugas kebersihan
bisa tahu bangunan mana tanpa bisa membuka seluruh portofolio Anda. Lihat
[Tim dan peran](/id/setup/team/).

## Istilah uang

- **Pendapatan** di Santara AI berarti **payout bersih** — yang benar-benar dibayarkan channel kepada
  Anda setelah komisinya. Selalu diberi label di layar, karena gross dan payout berbeda sekitar 15%
  dan mencampurnya merusak laporan setahun.
- **RevPAN** adalah pendapatan per malam tersedia: pendapatan dibagi seluruh malam yang harus Anda
  jual. Itulah angka penilai mesin pricing, karena ADR dan okupansi bergerak sendiri-sendiri dan
  tidak satu pun sendirian memberi tahu apakah Anda menang.
