---
title: Tarif dan ketersediaan
description: Harga per tanggal, berapa unit yang bisa dijual, dan aturan menginap yang ikut dikirim ke channel Anda.
sidebar:
  order: 2
---

[Smart pricing](/id/money/pricing/) menentukan bentuk tahun. Di sinilah Anda menetapkan satu malam
tertentu secara manual, dan di sini pula aturan yang bukan harga — minimum menginap, berapa unit yang
bisa dijual — berada.

Buka dari **Harga → Kalender**, di tampilan **Grid**, lalu pilih properti dan kamarnya di bagian atas.

![Tab Kalender di layar Harga dalam tampilan Grid: pemilih properti dan kamar, sakelar Grid / Tahun, Ubah harga dan Sinkronkan sekarang, angka 14 malam ke depan, Cek pasar, dan grid dengan baris Sisa dijual di atas harga per malam rate plan.](/screens/rates.id.png)

## Grid

Kamar dan rate plan-nya di kiri, tanggal di atas, dengan baris **Sisa dijual** di atas plan tiap
kamar. **Klik satu malam, lalu malam lain di baris yang sama — atau seret — untuk memilih rentang**;
shift-klik juga memperluasnya. Begitulah Anda memberi harga satu minggu tanpa menyentuh tujuh sel.

Kotak kecil **Malam terpilih** lalu menanyakan untuk apa rentang itu: **Ubah harga & aturan** atau
**Lihat harga** — di baris Sisa dijual, **Ubah unit yang dijual** atau **Lihat ketersediaan**.
Editornya berisi:

| Kolom | Artinya |
| --- | --- |
| **Harga per malam** | Tarif per malam untuk tanggal-tanggal itu pada rate plan tersebut. Ini diterbitkan ke channel terhubung |
| **Kamar yang dijual** | Berapa unit kamar itu yang bisa dijual tiap malam. Dibatasi jumlah unit kamar, dan booking mengambil dari sini |
| **Dijual** | **Biarkan** mempertahankan kondisi sekarang; **Buka**, atau **Ditutup** — tidak ada yang bisa memesan malam itu, di channel mana pun |
| **Aturan menginap** | Menginap minimum (berlaku untuk aturan kedatangan maupun menginap-melewati), menginap maksimum, **Tidak ada check-in**, dan **Tidak ada check-out**, masing-masing dengan pilihan Biarkan yang sama |

Pada satu malam, **Mengapa harga ini & riwayat** menampilkan harganya, siapa yang menetapkannya — Anda,
harga dinamis, PriceLabs, atau impor — alasannya, harga di tiap saluran dan apakah sudah sampai ke
sana, serta **Lihat riwayat perubahan** untuk malam itu.

**Tambahkan ke tertunda** hanya menampung perubahan; **tidak ada yang dikirim sampai Anda menekan
Simpan semua** di bilah yang menghitung perubahan belum tersimpan, tempat **Tinjau** menampilkannya dan
**Buang semua** membuangnya. Menyimpan mengirim pembaruan terkumpul ke channel Anda — tidak ada langkah
terbit terpisah. Malam yang masih menunggu dikirim menampilkan ikon jam.

Di atas grid, **Harga untuk** beralih antara harga Anda dan harga yang dijual sebuah saluran; chip
saluran di bawah tiap plan membuka penyesuaian saluran itu (lihat
[Harga saluran](/id/money/pricing/#harga-saluran)); dan **Riwayat** mendaftar 50 perubahan terakhir
pada harga, aturan menginap, dan jumlah unit di properti itu.

## Rate plan

**Rate plan** adalah harga sebuah kamar beserta aturannya: berapa tamu yang termasuk, biaya tamu
tambahan, ketentuan pembatalan, dan restriksi di atas. Satu kamar bisa punya lebih dari satu —
tarif fleksibel dan tarif non-refundable yang lebih murah.

Plan **dicerminkan dengan channel terhubung Anda**. Perubahan di sini tersinkron keluar; plan yang
dibuat di sisi channel muncul di sini setelah disegarkan, tanpa perlu diketik ulang.

Kolom restriksi pada sebuah plan berlaku untuk **setiap hari**. Kosongkan satu kolom untuk
mempertahankan nilai yang kini dipegang channel — kosong berarti "jangan kelola ini", bukan
"setel ke nol".

:::caution[Booking.com butuh okupansinya diberi harga]
Jika sebuah rate plan tidak punya harga untuk jumlah tamu yang diterima Booking.com, kamar itu tetap
*tertaut tetapi belum dipetakan* — Santara AI tidak akan menebak harga pada listing aktif. Beri harga
untuk okupansi tersebut pada plan-nya, lalu petakan lagi. Lihat
[Hubungkan Booking.com](/id/channels/booking-com/).
:::

## Sinkronisasi penuh

**Mengirim 500 hari ketersediaan dan tarif untuk setiap kamar** di properti itu, sebagai dua
pembaruan channel. Gunakan saat Anda menduga sebuah channel telah melenceng — setelah gangguan, atau
setelah menyunting di sisi channel.

Aman dijalankan, dan ini bukan perbaikan untuk masalah pemetaan: jika sebuah listing menunjuk kamar
yang salah, sinkronisasi penuh hanya mengirim data salah lebih cepat. Periksa
[pemetaannya](/id/channels/listings/) dulu.

## Apa mengalahkan apa

Dari yang terkuat:

1. **Ditutup** — tidak ada yang terjual, apa pun harganya.
2. **Rentang yang diterima channel** — mempersempit harga Anda; tidak pernah melebarkan.
3. **Lantai dan plafon Anda** di [Ubah harga](/id/money/pricing/#angka-milik-listing) — pricing
   otomatis tidak pernah melewatinya.
4. **Harga yang Anda ketik di sini** — dilindungi dari mesin pricing kecuali Anda mengizinkannya
   menimpa harga manual.
5. **Aturan pricing** — selebihnya.

## Grid yang kosong

*"Belum ada kamar dengan paket tarif yang bisa diedit"* berarti properti punya kamar tetapi tidak satu
pun memiliki rate plan untuk diberi harga. Tambahkan satu dari kamarnya, lalu kembali ke sini.
