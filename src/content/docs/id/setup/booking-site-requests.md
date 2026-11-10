---
title: Pertanyaan dan permintaan booking
description: Dua hal yang dikirim tamu dari situs Anda sendiri — sebuah pertanyaan, dan permintaan tanggal yang harus Anda setujui.
sidebar:
  order: 3
---

[Situs booking](/id/setup/booking-site/) Anda menghasilkan dua kotak masuk, dan keduanya bukan hal
yang sama.

## Pertanyaan

Tab **Prospek** di **Situs Booking**. Semua orang yang memakai formulir kontak di situs Anda:
nama, pesan, dan cara menghubungi mereka.

Jika kosong padahal Anda mengharapkan sebaliknya, penyebab biasanya tidak ada formulir di situs —
tambahkan bagian **Kontak** di tab Desain, atau sebuah halaman kontak. Tanpa formulir, tanpa
pertanyaan masuk.

Ini prospek, bukan booking. Tidak ada yang ditahan dan tidak ada tanggal yang dipesan.

## Permintaan booking

Tab **Permintaan** di **Situs Booking**. Permintaan hanya ada untuk properti yang Anda setel ke **mode
permintaan**, bukan booking instan — tamu meminta tanggal, dan tidak ada yang dipesan sampai Anda
menyetujuinya.

Daftar yang sama juga menampilkan masa menginap yang **dipesan dan dibayar tamu secara online**,
bertanda **Dibayar**, sehingga setiap pembayaran langsung selalu punya layar tempat Anda bisa
melihat dan mengembalikan dananya.

Layar ini memberi tahu berapa orang sedang menunggu Anda, karena itulah angka yang penting:
permintaan yang dibiarkan tanpa jawaban adalah tamu yang sedang memutuskan memesan di tempat lain.

### Menyetujui satu permintaan

Setujui, dan masa menginap dibuat serta malamnya tertutup di semua channel terhubung seperti booking
lainnya. Tolak, dan tanggalnya tetap terbuka.

Pilih mode permintaan per properti di bagian **Properti** situs booking. Ini pilihan tepat untuk vila
yang tamunya ingin Anda saring, dan pilihan salah untuk apa pun yang bersaing pada kepraktisan.

### Uang

Permintaan booking **tidak dibayar online** — tidak ada yang ditagih saat tamu meminta, dan
[Biaya pemesanan tamu](/id/setup/booking-site/#5-hubungkan-stripe) yang opsional tidak pernah berlaku
untuknya.

Masa menginap yang dibayar online saat checkout masuk ke akun Stripe Anda sendiri. Jika Biaya
pemesanan tamu menyala, barisnya menyebutkan biaya pemesanan yang termasuk di dalamnya, dan sisanya
adalah pembayaran untuk Anda. Untuk mengembalikan dana:

- **Refund sesuai kebijakan** mengembalikan jumlah yang diizinkan
  [kebijakan pembatalan](/id/setup/booking-site/#harga-biaya-dan-pembatalan) Anda hari ini — barisnya
  menampilkan pratinjau jumlah dan persentasenya.
- **Refund penuh** mengembalikan semua yang belum dikembalikan.

Refund sebagian dijumlahkan, dan barisnya menampilkan berapa yang sudah dikembalikan sejauh ini.
Refund juga mengembalikan bagian biaya pemesanan yang sepadan — Santara AI tidak menyimpan biaya
untuk masa menginap yang tidak terjadi.

:::caution[Mengembalikan dana bukan membatalkan]
**Pengembalian dana hanya mengembalikan uang. Masa menginap tetap ada di kalender Anda sampai Anda
membatalkannya** — dan selama masih ada, malam-malam itu tetap tertutup di semua channel. Dua langkah,
sengaja dipisah, karena mengembalikan sebagian dana pada masa menginap yang tetap berjalan memang hal
yang orang lakukan. Jika tamunya tidak jadi datang, lakukan keduanya.
:::

## Bedanya dengan booking dari channel

Booking langsung adalah milik Anda: alamat email tamu yang sebenarnya, bukan alias
penerusan. Yang Anda lepaskan adalah proses sengketa milik channel — itulah sebabnya mode permintaan
ada, dan sebabnya [detail kontak](/id/setup/booking-site/) di situs Anda layak diisi dengan benar.
