---
title: Properti dan kamar
description: Bangunan, kamar yang benar-benar dipesan tamu, dan fakta yang membuat pesan tamu serta situs booking Anda spesifik, bukan kabur.
sidebar:
  order: 1
---

**Properti** adalah bangunan atau alamat. **Kamar** adalah unit yang bisa dipesan di dalamnya. Kamar
adalah yang dipesan tamu, yang dipetakan channel, dan yang ditagihkan. Lihat
[Bagaimana Santara AI disusun](/id/start/concepts/#properti-lalu-kamar) bila pembagian ini baru bagi
Anda.

![Properti: bangunan Anda, dan kamar-kamar di dalamnya yang benar-benar dipesan tamu.](/screens/properties.id.png)

## Membuatnya manual

Anda tidak memerlukan channel. **Properti → Tambah properti**, isi dasarnya, lalu tambahkan kamar
pertamanya — kamar itulah yang dipesan tamu, jadi properti tanpa kamar tidak bisa menjual.

Ini jalur yang tepat bila Anda hanya menerima booking langsung, atau ingin menyiapkan semuanya
sebelum menghubungkan channel.

## Properti hasil impor

Properti yang dibuat dari [listing hasil impor](/id/channels/airbnb/) datang terisi dari channel:
judul, deskripsi, foto, fasilitas, kapasitas, dan tarif. Channel tidak menyimpan semuanya, jadi
periksa dua hal ini setelah impor:

1. **Harga per malam** — kamar tanpa harga tidak bisa terjual.
2. **Kapasitas tamu** — ini menentukan harga tamu tambahan dan apa yang diterima Booking.com.

## Yang tinggal di properti

Alamat, deskripsi, aturan rumah, foto bangunan, **klaster kebersihan**, dan listing yang terhubung.

## Yang tinggal di kamar

- **Harga dan rate plan** — lihat [Smart pricing](/id/money/pricing/).
- **Kapasitas** — jumlah tamu, dan harga tamu tambahan.
- **Jumlah unit** — berapa unit identik yang diwakili kamar ini. Satu apartemen adalah 1. Ini batas
  keras ketersediaan, di mana pun.
- **Foto** kamar itu sendiri.
- **Fasilitas** dan deskripsi kamar.
- **Pemetaan channel**.

## Informasi menginap: wifi, kode pintu, akses

Semuanya ada di **dua** level. Atur di properti dan semua kamar mewarisi; atur di kamar dan kamar itu
yang menang. Kosongkan nilai kamar untuk mewarisi.

| Kolom | Dipakai di |
| --- | --- |
| Nama dan kata sandi wifi | Pesan kedatangan, situs booking, balasan tamu |
| Kode pintu / lockbox | Hanya pesan kedatangan |
| Catatan akses | Pesan kedatangan |
| Jam check-in dan check-out | Di mana-mana, termasuk penjadwalan kebersihan |

:::caution[Kode pintu dikendalikan aksesnya]
Kode pintu dan catatan akses hanya terlihat oleh peran yang membutuhkannya. Petugas kebersihan
melihat bangunan tempat mereka bekerja; mereka tidak melihat kode bangunan lain. Lihat
[Tim dan peran](/id/setup/team/).
:::

## Kenapa mengisinya penting

Bagian AI produk ini hanya sespesifik properti di baliknya. Properti tanpa jam check-in, tanpa wifi,
dan tanpa alamat menghasilkan draf tamu yang kabur dan waktu upsell yang lemah. Layar properti
menandai **celah konteks** justru karena itu.

## Menyinkronkan dari channel

**Sinkronkan data** pada sebuah properti menarik reservasi, kalender, pesan, dan detail listing
terbaru. Di mana channel punya nilainya, **nilai itu menggantikan milik properti**. Gunakan setelah
menyunting listing di channel; jangan gunakan tepat setelah menyunting sesuatu di sini yang juga
diketahui channel.

## Memindahkan, menggandakan, menghapus

- **Memindahkan kamar ke properti lain** — hanya mungkin selama kamar itu belum dipetakan ke channel.
- **Menggandakan kamar** — menyalin dasar, okupansi, detail, dan rate plan manualnya sebagai
  *"(salinan)"*. Salinan tidak tertaut ke channel mana pun sampai Anda memetakannya.
- **Menghapus kamar** — rate plan, kalender ketersediaan, dan fotonya hilang. Reservasi dan ulasan
  lama disimpan tetapi tidak lagi melekat pada kamar.
- **Menghapus properti** — ditolak selama listing channel masih terhubung. Putuskan dulu.
