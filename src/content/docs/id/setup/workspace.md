---
title: Pengaturan workspace
description: Bahasa, zona waktu, mata uang, notifikasi, template pesan — hal-hal yang diatur sekali.
sidebar:
  order: 7
---

**Pengaturan** adalah satu halaman dengan tab. Dua di antaranya tentang **Anda** dan mengikuti Anda
antar workspace; sisanya milik workspace yang dipakai bersama.

| Tab | Cakupan |
| --- | --- |
| **Personal** | Anda — nama, bahasa, zona waktu |
| **Keamanan** | Anda — kata sandi dan perlindungan akun |
| **Workspace** | Bersama — nama, bahasa, zona waktu, mata uang |
| **Situs Booking** | Bersama — [situs booking langsung Anda](/id/setup/booking-site/) |
| **Channel** | Bersama — [koneksi channel](/id/channels/) |
| **Template Pesan** | Bersama — balasan tamu tersimpan |
| **Tim** | Bersama — [orang dan peran](/id/setup/team/) |
| **Penagihan** | Bersama — [paket dan faktur](/id/setup/billing/) |

![Pengaturan workspace: waktu dan bahasa ringkasan, zona waktu, mata uang, dan selebihnya.](/screens/workspace-settings.id.png)

## Bahasa

Antarmuka Santara tersedia dalam **English, Bahasa Indonesia, dan Tiếng Việt**.

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
| **Channel notifikasi** | Dasbor untuk saat ini; email dan SMS belum tersambung |

Ada juga **nama dan avatar** workspace — logo yang tampil di sidebar dan pemilih workspace, yang
mencegah dua workspace terlihat identik sekilas.

## Notifikasi

Lonceng di header. Notifikasi dialamatkan berdasarkan **siapa yang bisa menindaklanjuti**, bukan
berdasarkan nama — karena itulah manajer yang ditambahkan bulan depan langsung menerima yang memang
ditujukan bagi perannya.

Ada delapan jenis: booking **dibuat**, **berubah**, atau **dibatalkan**; pembersihan **ditugaskan**
kepada Anda atau **selesai**; tiket **dibuka**, **ditugaskan** kepada Anda, atau **selesai**. Hal
lain yang diketahui produk tinggal di layarnya masing-masing, dan itu disengaja — daftar notifikasi
yang melaporkan hal yang tidak bisa Anda tindaklanjuti akan berhenti dibaca.

:::note[Sinkronisasi pertama sengaja senyap]
Menghubungkan channel mengimpor riwayat booking Anda, kadang setahun penuh. Itu bukan booking baru
dan Anda tidak dinotifikasi soal itu — hanya soal yang terjadi setelah Anda terhubung.
:::

## Template pesan

Balasan tersimpan dengan placeholder yang terisi sendiri dari data menginap — nama tamu, jam
check-in, kata sandi wifi, kode pintu, jumlah tagihan. Dipakai bersama oleh workspace, jadi jawaban
yang disepakati tim adalah jawaban yang dikirim semua orang.

Cara menulisnya, pratinjau terhadap reservasi nyata, dan lima template bawaannya:
**[Template pesan](/id/setup/message-templates/)**.

## Berpindah workspace

Menu akun menampilkan setiap workspace tempat Anda bergabung. Masing-masing punya properti, tim,
penagihan, dan situs booking sendiri; tidak ada yang dibagi di antara mereka.
