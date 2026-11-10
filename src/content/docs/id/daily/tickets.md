---
title: Masalah (tiket)
description: Tab Masalah di Tugas — keluhan dan perawatan dilacak dari Akan dikerjakan sampai Selesai, sebagian besar dibuka oleh produk, bukan oleh Anda.
sidebar:
  order: 4
---

**Tiket** adalah apa pun yang perlu diperbaiki atau dikejar: AC rusak, keluhan tamu, penjemputan
bandara yang harus diatur. Tiket ada di tab **Masalah** pada [Tugas](/id/daily/tasks/) —
**Tugas → Masalah**. Menu Tiket tersendiri di bilah samping sudah tidak ada; tautan Tiket yang lama
membuka tab ini.

Tiket bersifat internal. **Tamu tidak pernah melihatnya**, bahkan tiket yang dibuka dari pesan
mereka sendiri.

![Tab Masalah: tiket per status, dengan penanggung jawab dan properti asalnya.](/screens/tickets.id.png)

## Tiket membuka dirinya sendiri

Sebagian besar tiket tidak dibuat oleh orang. Pesan tamu yang terbaca sebagai keluhan atau masalah
perawatan membuka tiket secara otomatis, tertaut kembali ke utas dan propertinya — sehingga
perbaikannya terlacak di luar percakapan yang akan tergulung hilang.

Tiga aturan mencegahnya menjadi kebisingan:

- **Satu utas, satu tiket, selamanya.** Berapa kali pun klasifikasi berjalan, percakapan yang sudah
  menghasilkan tiket tidak akan menghasilkan yang kedua.
- **Hanya dua minggu terakhir.** Utas yang tidak disentuh siapa pun selama dua minggu adalah
  riwayat, bukan pekerjaan.
- **Tidak membanjir di hari pertama.** Menghubungkan riwayat pesan setahun tidak membuka tiga ratus
  tiket — hanya yang terbaru dan masih bisa ditindaklanjuti.

Anda juga bisa membukanya manual: **Tiket baru** di tab Masalah, **Tiket baru** dari percakapan tamu
di [Pesan](/id/daily/messages/) (di sana **Isi dengan AI** membaca percakapan dan mengisi kolomnya
untuk Anda periksa), atau dengan memilih tanggal di [kalender](/id/daily/calendar/).

## Papan

Tiket melewati empat status:

| Status | Artinya |
| --- | --- |
| **Akan dikerjakan** | Terbuka, belum ada yang mulai |
| **Sedang dikerjakan** | Ada yang sedang menanganinya |
| **Selesai** | Sudah diperbaiki |
| **Dibatalkan** | Tidak jadi dikerjakan |

Beralih antara **Papan** — satu kolom per status, seret kartu untuk mengubah statusnya — dan
**Daftar**, tabel berisi **Tiket**, **Kategori**, **Status**, **Prioritas**, **Penanggung jawab**,
dan **Tenggat**.

Di atasnya: **Cari tiket**, filter prioritas (**Semua prioritas**), dan tombol **Terlambat** yang
hanya menampilkan tiket yang sudah lewat tenggatnya.

Tiap kartu menampilkan tenggatnya, ditandai **Terlambat** setelah lewat, dan penanggung jawabnya —
atau **Belum ditugaskan**.

## Mengerjakan sebuah tiket

Buka tiket untuk melihat catatan lengkapnya:

| | |
| --- | --- |
| **Status** | Akan dikerjakan, Sedang dikerjakan, Selesai, atau Dibatalkan |
| **Prioritas** | Rendah, Sedang, Tinggi, atau Mendesak |
| **Kategori** | Keluhan, Perawatan, Antar-jemput bandara, atau Lainnya |
| **Penanggung jawab** | Anggota tim atau petugas kebersihan. Mereka mendapat notifikasi saat tiket masuk |
| **Tenggat waktu** | Kapan harus selesai. Setelah lewat, tiket tampil sebagai **Terlambat** |
| **Properti dan unit** | Dibawa dari pesan asalnya |
| **Utas tamu** | **Dibuat di** menautkan kembali ke percakapan, agar Anda bisa membalas tanpa kehilangan konteks |
| **Foto** | Bukti **Sebelum** dan **Sesudah**, masing-masing maks. 5 MB |
| **Dijadwalkan dari / sampai** | Rentang tanggal — lihat di bawah |
| **Riwayat** | Setiap perubahan: dibuat, status, penugasan, tenggat diatur atau dihapus, rencana AI dibuat |

Saat penanggung jawab memindahkan tiket ke **Sedang dikerjakan** atau **Selesai**, orang yang
menugaskannya mendapat notifikasi.

Tiket **Antar-jemput bandara** juga memuat **Waktu penjemputan**. Nama dan telepon tamu muncul di
sana sehari sebelum penjemputan.

### Menjadwalkan berarti menaruhnya di kalender

Beri tiket rentang **Dijadwalkan dari / Dijadwalkan sampai** dan **ia digambar di
[kalender](/id/daily/calendar/)** pada malam-malam itu. Perbaikan dua hari kemudian terlihat jelas
berdampingan dengan booking di sekitarnya — dan itulah intinya: Anda bisa melihat apakah ia
bertabrakan dengan kedatangan sebelum menyanggupinya.

Ini tidak memblokir malamnya dengan sendirinya. Jika kamar benar-benar tidak bisa dijual, tutup
juga tanggalnya di kalender.

### Rencana penyelesaian AI

Tekan **Buat detail dengan AI** dan Anda mendapat ringkasan, kemungkinan penyebab, rencana tindakan,
saran balasan untuk tamu, suku cadang atau vendor, dan perkiraan waktu penyelesaian — dihasilkan
dari tiket, properti, dan riwayatnya. Ini titik awal bagi siapa pun yang mengerjakan — terutama
berguna saat menyerahkan pekerjaan kepada orang yang belum pernah melihat bangunan itu.

Ia membuat draf. Ia tidak memesan suku cadang, tidak mengirim pesan ke tamu, dan tidak menutup tiket.

## Berapa lama tiket tertutup tetap di papan

Tiket terbuka selalu tampil. Tiket **Selesai** dan **Dibatalkan** tetap di papan selama **30 hari
setelah pembaruan terakhirnya**, lalu hilang dari papan agar papan tetap berisi pekerjaan saat ini.
Gunakan **Tampilkan yang selesai & dibatalkan** untuk melihatnya. Tidak ada yang dihapus: tiket dan
riwayatnya tetap ada.

## Siapa yang bisa melihatnya

Tiket mengikuti [aturan kapabilitas](/id/setup/team/) yang sama dengan bagian lain. Anggota tim yang
hanya menangani perbaikan hanya melihat tab Masalah. Anggota tanpa akses tiket diberi tahu dengan
jelas alih-alih melihat daftar kosong yang akan mereka laporkan sebagai kerusakan. Jika Anda merasa
seharusnya punya akses tetapi tidak, mintalah kepada pemilik atau manajer di workspace.
