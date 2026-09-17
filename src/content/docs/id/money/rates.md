---
title: Tarif dan ketersediaan
description: Harga per tanggal, berapa unit yang bisa dijual, dan aturan menginap yang ikut dikirim ke channel Anda.
sidebar:
  order: 2
---

[Smart pricing](/id/money/pricing/) menentukan bentuk tahun. Di sinilah Anda menetapkan satu malam
tertentu secara manual, dan di sini pula aturan yang bukan harga — minimum menginap, berapa unit yang
bisa dijual — berada.

Buka dari sebuah properti: **Properti → properti tersebut → Tarif**.

![Grid tarif: ketersediaan di atas, harga di bawah, dan legenda yang menjelaskan cara mengedit satu rentang.](/screens/rates.id.png)

## Grid

Kamar dan rate plan-nya di kiri, tanggal di atas. **Klik satu sel untuk mengeditnya, atau shift-klik
sel lain di baris yang sama untuk mengedit seluruh rentang** di antaranya — begitulah Anda memberi
harga satu minggu tanpa menyentuh tujuh sel.

| Kolom | Artinya |
| --- | --- |
| **Harga** | Tarif per malam untuk tanggal itu pada rate plan tersebut. Ini diterbitkan ke channel terhubung |
| **Unit** | Berapa unit kamar itu yang bisa dijual malam itu. Dibatasi jumlah unit kamar — angka lebih tinggi ditolak, dan booking mengurangi sisanya |
| **Minimum menginap** | Berlaku untuk aturan kedatangan maupun menginap-melewati |
| **Ditutup** | Tidak ada yang bisa memesan malam itu, di channel mana pun |

**Menyimpan akan mengirim pembaruan terkumpul ke channel Anda.** Tidak ada langkah terbit terpisah,
dan tidak ada status draf — apa yang Anda simpan itulah yang diberitahukan ke channel.

## Rate plan

**Rate plan** adalah harga sebuah kamar beserta aturannya: berapa tamu yang termasuk, biaya tamu
tambahan, ketentuan pembatalan, dan restriksi di atas. Satu kamar bisa punya lebih dari satu —
tarif fleksibel dan tarif non-refundable yang lebih murah.

Plan **dicerminkan dengan channel terhubung Anda**. Perubahan di sini tersinkron keluar; plan yang
dibuat di sisi channel muncul di sini setelah disegarkan, tanpa perlu diketik ulang.

Kolom restriksi pada sebuah plan berlaku untuk **setiap hari**. Kosongkan satu kolom untuk
mempertahankan nilai yang kini dipegang channel manager — kosong berarti "jangan kelola ini", bukan
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
3. **Lantai dan plafon Anda** di [pengaturan pricing](/id/money/pricing/) — pricing otomatis tidak
   pernah melewatinya.
4. **Harga yang Anda ketik di sini** — dilindungi dari mesin pricing kecuali Anda mengizinkannya
   menimpa harga manual.
5. **Aturan pricing** — selebihnya.

## Grid yang kosong

*"Belum ada kamar dengan rate plan yang bisa diedit"* berarti properti punya kamar tetapi tidak satu
pun memiliki rate plan untuk diberi harga. Tambahkan satu dari kamarnya, lalu kembali ke sini.
