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

![Tab Masalah sebagai papan: kolom Akan dikerjakan, Sedang dikerjakan, dan Selesai, tiap kartu menampilkan kategori, properti dan kamar, serta penanggung jawabnya.](/screens/tickets.id.png)

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
untuk Anda periksa), atau tanda **+** di bagian atas kolom **Akan dikerjakan**.

## Papan

Tiket melewati empat status:

| Status | Artinya |
| --- | --- |
| **Akan dikerjakan** | Terbuka, belum ada yang mulai |
| **Sedang dikerjakan** | Ada yang sedang menanganinya |
| **Selesai** | Sudah diperbaiki |
| **Dibatalkan** | Tidak jadi dikerjakan |

Beralih antara **Papan** dan **Daftar**. Papan punya tiga kolom — **Akan dikerjakan**, **Sedang
dikerjakan**, dan **Selesai** — dan Anda menyeret kartu untuk mengubah statusnya. **Selesai**
menampilkan yang terbaru lebih dulu, dikelompokkan per tanggal, dan memuat yang lebih lama saat Anda
menggulir; tiket yang dibatalkan ada di balik **Tampilkan dibatalkan** di bawah papan. Daftar adalah
tabel berisi **Tiket**, **Kategori**, **Status**, **Prioritas**, **Penanggung jawab**, dan
**Tenggat**.

Di atasnya: **Cari tiket**, filter prioritas (**Semua prioritas**), dan tombol **Terlambat** yang
hanya menampilkan tiket yang sudah lewat tenggatnya.

Tiap kartu menampilkan kategori, properti (dan kamar), tenggatnya — ditandai **Terlambat** setelah
lewat — dan penanggung jawabnya. Kartu yang belum dipegang siapa pun menampilkan **Tugaskan** — atau
**Belum ditugaskan** bila Anda tidak bisa menugaskan tiket.

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

### Menjadwalkan pekerjaan

**Dijadwalkan dari / Dijadwalkan sampai** mencatat hari-hari pekerjaan berlangsung — misalnya
perbaikan dua hari. Ini terpisah dari **Tenggat waktu**, yang menentukan apakah tiket ditandai
**Terlambat**.

Ini tidak memblokir malamnya. Jika kamar benar-benar tidak bisa dijual, tutup juga tanggalnya di
[kalender](/id/daily/calendar/#memblokir-atau-membuka-tanggal).

### Rencana penyelesaian AI

Tekan **Buat detail dengan AI** dan Anda mendapat ringkasan, kemungkinan penyebab, rencana tindakan,
saran balasan untuk tamu, suku cadang atau vendor, dan perkiraan waktu penyelesaian — dihasilkan
dari tiket, properti, dan riwayatnya. Ini titik awal bagi siapa pun yang mengerjakan — terutama
berguna saat menyerahkan pekerjaan kepada orang yang belum pernah melihat bangunan itu.

Ia membuat draf. Ia tidak memesan suku cadang, tidak mengirim pesan ke tamu, dan tidak menutup tiket.

## Berapa lama tiket tertutup tetap di papan

Tiket terbuka selalu tampil. Tiket **Selesai** dimuat saat Anda menggulir kolom Selesai. Tiket
**Dibatalkan** tetap di papan selama **30 hari setelah pembaruan terakhirnya**, lalu hilang dari
papan agar papan tetap berisi pekerjaan saat ini. Di daftar, tiket yang sudah selesai ada di balik
**Tampilkan yang selesai & dibatalkan**. Tidak ada yang dihapus: tiket dan riwayatnya tetap ada.

## Siapa yang bisa melihatnya

Tiket mengikuti [aturan kapabilitas](/id/setup/team/) yang sama dengan bagian lain. Anggota tim yang
hanya menangani perbaikan hanya melihat tab Masalah. Anggota tanpa akses tiket diberi tahu dengan
jelas alih-alih melihat daftar kosong yang akan mereka laporkan sebagai kerusakan. Jika Anda merasa
seharusnya punya akses tetapi tidak, mintalah kepada pemilik atau manajer di workspace.
