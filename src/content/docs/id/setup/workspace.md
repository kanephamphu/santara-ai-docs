---
title: Pengaturan workspace
description: Bahasa, zona waktu, mata uang, notifikasi, template pesan — hal-hal yang diatur sekali.
sidebar:
  order: 8
---

**Pengaturan** adalah satu halaman dengan tab, dan setiap tab di sana milik **workspace** yang
dipakai bersama. Akun Anda sendiri sengaja bukan salah satunya — akun ada di balik menu akun di
bagian bawah bilah samping, karena di situlah orang mencari kata sandinya sendiri. Lihat
[Akun dan keamanan Anda](/id/setup/account/).

| Tab | Cakupan |
| --- | --- |
| **Ruang kerja** | Bersama — nama, bahasa, zona waktu, mata uang |
| **Saluran** | Bersama — [koneksi channel](/id/channels/), ditambah tab **Aplikasi** (di bawah) |
| **Template Pesan** | Bersama — balasan tamu tersimpan |
| **Tim** | Bersama — [orang dan peran](/id/setup/team/) |
| **Tagihan** | Bersama — [paket dan faktur](/id/setup/billing/) |

[Situs booking langsung](/id/setup/booking-site/) Anda bukan tab Pengaturan: ia punya menu sendiri,
**Situs Pemesanan**, di bilah samping, karena lead dan permintaan booking-nya dikerjakan tiap minggu.

### Aplikasi terhubung

**Pengaturan → Saluran → Aplikasi** menampilkan aplikasi yang Anda izinkan memakai akun Santara AI
Anda — misalnya [Santi](/id/help/santi-app/) — beserta apa yang bisa dilakukannya dan tombol
**Putuskan**. Menu **Aplikasi terhubung** di menu akun membuka tab yang sama. Daftar ini pribadi:
hanya Anda yang melihatnya, dan rekan tim mengelola aplikasi mereka sendiri.

![Pengaturan workspace: waktu dan bahasa ringkasan, zona waktu, mata uang, dan selebihnya.](/screens/workspace-settings.id.png)

## Bahasa

Antarmuka Santara AI tersedia dalam **English, Bahasa Indonesia, dan Tiếng Việt**.

- Pengaturan bahasa **Anda** mengubah antarmuka untuk Anda.
- Bahasa **workspace** menentukan bahasa penulisan [ringkasan harian](/id/daily/), dan bahasa bawaan
  untuk apa pun yang dihasilkan workspace bagi kelompok.

Keduanya terpisah dengan sengaja: manajer berbahasa Vietnam bisa bekerja dalam bahasa Vietnam di
workspace yang ringkasannya dikirim dalam bahasa Indonesia ke tim kebersihan.

## Zona waktu

Zona waktu workspace menentukan arti "hari ini" — untuk kedatangan, kebersihan, ringkasan, dan setiap
tanggal di setiap laporan. Atur ke lokasi properti, bukan lokasi Anda.

## Mata uang

Mata uang workspace adalah tampilan angka. [Situs booking](/id/setup/booking-site/) Anda punya
pengaturan mata uang sendiri untuk yang dilihat tamu.

## Preferensi operasional

Tab workspace memuat pengaturan yang mengubah perilaku produk bagi semua orang di dalamnya:

| Pengaturan | Fungsinya |
| --- | --- |
| **Waktu ringkasan harian** | Kapan [ringkasan](/id/daily/) dibuat setiap hari |
| **Bahasa ringkasan harian** | Bahasa penulisannya — terpisah dari bahasa antarmuka |
| **Zona waktu workspace** | Arti "hari ini", di mana pun |
| **Mata uang tampilan** | Mata uang untuk menampilkan angka |
| **Nada pesan bawaan** | Nada awal draf balasan untuk tamu |
| **Nilai upsell minimum** | Peluang di bawah nilai ini tidak ditampilkan, agar pipeline tetap layak dibaca |
| **Buka Ringkasan Harian dulu** | Mulai aplikasi dari ringkasan, bukan dari dasbor |
| **Peringatan kedatangan hari ini** | Kirim email ke tim saat ada pemesanan untuk tamu yang check-in hari ini — aktif secara bawaan |
| **Channel notifikasi** | Dasbor untuk saat ini; email dan SMS belum tersambung |

### Peringatan kedatangan hari ini

Booking untuk **hari ini** adalah yang paling mungkin bermasalah: kamarnya bisa belum sempat
dibersihkan. Saat booking dibuat — atau dibatalkan — untuk tamu yang check-in hari ini (menurut zona
waktu workspace), email langsung terkirim, baik booking itu datang dari channel, situs booking Anda,
atau dimasukkan manual.

- **Manajer dan co-host** menerima email kedatangan (atau pembatalan) hari ini berisi detail
  menginap, kontak tamu, nilai uangnya, dan jendela pembersihan. Jika pembersihan akan selesai
  terlambat, email menyebutkannya dan meminta keputusan.
- **Petugas kebersihan kamar itu** menerima email pembersihan hari ini (atau pembatalannya) beserta
  perintah kerjanya.
- Orang yang memasukkan booking tidak menerima email tentang booking-nya sendiri.

Perubahan tanggal tidak mengirim email; itu muncul di [lonceng](#notifikasi). Hanya pemilik workspace
atau admin yang bisa mematikan peringatan ini.

Ada juga **nama dan avatar** workspace — logo yang tampil di sidebar dan pemilih workspace, yang
mencegah dua workspace terlihat identik sekilas.

## Notifikasi

Lonceng di header. Notifikasi dialamatkan berdasarkan **siapa yang bisa menindaklanjuti**, bukan
berdasarkan nama — karena itulah manajer yang ditambahkan bulan depan langsung menerima yang memang
ditujukan bagi perannya.

Ada enam belas jenis:

- **Booking** — booking **dibuat**, **berubah**, atau **dibatalkan**, dan **Kelebihan pesanan**:
  kamar terjual melebihi unit yang tersedia pada malam mendatang, sehingga satu menginap harus
  dipindah.
- **Kebersihan** — pembersihan **ditugaskan** kepada Anda, atau **selesai**.
- **Tiket** — tiket **dibuka**, **ditugaskan** kepada Anda, **sedang dikerjakan**, atau **selesai**.
  Dua yang terakhir dikirim ke orang yang menugaskannya.
- **Saluran** — **saluran terhubung**, yang menyebut channel, properti, dan berapa kamar yang
  dipetakan; saluran yang **menolak pembaruan**, sehingga harga atau ketersediaan di sana mungkin
  sudah usang; dan **peringatan sinkronisasi**, ketika pembaruan masuk tetapi perlu dicek.
- **Permintaan tamu** — layanan tambahan yang diminta dari
  [buku panduan tamu](/id/setup/guidebook/#saat-tamu-meminta-layanan-tambahan), menyebut tamu,
  layanan, harga, dan kamarnya.
- **Asisten AI** — asisten luar seperti ChatGPT atau Claude yang **perlu persetujuan Anda**, atau
  yang **membuat perubahan**. Hanya pemilik koneksi yang dipakainya yang diberi tahu.

Hal
lain yang diketahui produk tinggal di layarnya masing-masing, dan itu disengaja — daftar notifikasi
yang melaporkan hal yang tidak bisa Anda tindaklanjuti akan berhenti dibaca.

**Bunyi pesan baru diatur per perangkat**, bukan di sini: menu akun → **Pengaturan personal** →
**Notifikasi di perangkat ini** → **Suara pesan**. Pengaturannya hanya tersimpan di browser itu.

:::note[Sinkronisasi pertama sengaja senyap]
Menghubungkan channel mengimpor riwayat booking Anda, kadang setahun penuh. Itu bukan booking baru
dan Anda tidak dinotifikasi soal itu — hanya soal yang terjadi setelah Anda terhubung.
:::

## Template pesan

Balasan tersimpan dengan placeholder yang terisi sendiri dari data menginap — nama tamu, jam
check-in, kata sandi wifi, kode pintu, jumlah tagihan. Dipakai bersama oleh workspace, jadi jawaban
yang disepakati tim adalah jawaban yang dikirim semua orang.

Cara menulisnya, pratinjau terhadap reservasi nyata, dan lima template bawaan yang bisa Anda impor:
**[Template pesan](/id/setup/message-templates/)**.

## Berpindah workspace

Menu akun menampilkan setiap workspace tempat Anda bergabung. Masing-masing punya properti, tim,
penagihan, dan situs booking sendiri; tidak ada yang dibagi di antara mereka.
