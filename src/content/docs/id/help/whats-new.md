---
title: Apa yang baru
description: Perubahan produk yang layak diketahui, terbaru di atas, masing-masing menunjuk halaman yang menjelaskannya.
sidebar:
  order: 10
---

Perubahan yang benar-benar terasa, dikelompokkan per bulan saat perubahannya masuk. Pekerjaan
internal, performa, dan perbaikan bug tidak dicantumkan kecuali mengubah apa yang Anda lihat.

Halaman ini dimulai Juli 2026, saat manual ini pertama diterbitkan. Setiap halaman juga memuat
tanggal **Terakhir diperbarui** di bagian bawah, yang merupakan jawaban lebih rinci untuk
"apakah ini berubah?".

## September 2026

Belum ada bulan ini.

## Agustus 2026

### Penagihan dihitung per listing

Satuan penagihan sekarang adalah **listing — satu kamar yang bisa dijual**, bukan baris properti.
Vila empat kamar adalah empat listing, baik kamarnya Anda buat manual maupun ditautkan dari
Booking.com; sebelumnya kedua jalur itu berbeda hasil dan bisa terpaut berkali-kali lipat untuk
bangunan yang sama.

Kalau Anda menambah listing melebihi cakupan paket, Santara AI sekarang **bertanya dulu, menampilkan
harganya, dan menagih untuk sisa periode penagihan** alih-alih diam-diam mengubah tagihan Anda.
Kode promo diterima saat pembayaran. Lihat [Paket dan penagihan](/id/setup/billing/).

### Dua tingkat: Host dan Operator

**Host** seharga $9,99 per listing di ukuran berapa pun — jadwal, sinkronisasi channel, kebersihan,
dan perawatan. **Operator** menambahkan wawasan, pratinjau besok, kotak masuk terpadu, profil tamu,
wawasan harga, dan upsell, dan harganya turun per pintu seiring pertumbuhan. Anda memilih
tingkatnya; hanya band di dalam Operator yang mengikuti jumlah listing. Lihat
[Memilih antara Host dan Operator](/id/setup/billing/#memilih-antara-host-dan-operator).

### Tanya Santara AI

Asisten di setiap layar yang membaca workspace Anda dengan izin Anda sendiri. Hanya-baca, dengan
satu pengecualian: ia bisa membuat draf balasan untuk tamu. Lihat
[Tanya Santara AI](/id/help/assistant/).

### Smart pricing menjadi dewasa

- **Pratinjau rule set terhadap mesin sungguhan** sebelum diterbitkan, bukan perkiraan berbasis
  kalender saja — [Melihat sebelum menerbitkan](/id/money/pricing/#melihat-sebelum-menerbitkan).
- **Setiap harga terbit bisa dijelaskan** — musim mana, premi hari apa, event apa, batas mana yang
  memangkasnya.
- **Event pasar** punya tingkat global dan negara, dengan kalender Indonesia dan Vietnam terisi.
- Rule set ditetapkan per listing, dan pasar hanya pernah *menyarankan*.

Lihat [Smart pricing](/id/money/pricing/).

### Notifikasi di dalam produk

Lonceng di header dengan delapan jenis kejadian — booking dibuat, diubah, atau dibatalkan;
pembersihan ditugaskan atau selesai; tiket dibuka, ditugaskan, atau selesai. Notifikasi dialamatkan
berdasarkan **siapa yang bisa menindaklanjutinya**, jadi orang yang ditambahkan bulan depan
langsung menerima yang menjadi tanggung jawab perannya tanpa apa pun diarahkan ulang. Mengimpor
riwayat setahun tetap senyap dengan sengaja. Lihat
[Notifikasi](/id/setup/workspace/#notifikasi).

### Impor channel yang lebih aman

- **Penjaga tarif nol**: listing yang harga aslinya tidak terbaca ditahan dari channel alih-alih
  tayang dengan harga nol, dan menaut kembali sendiri begitu ada harga.
- **Ketersediaan dibatasi jumlah unit kamar** saat ditulis, saat dikirim, dan di antarmuka, jadi
  yang Anda lihat sama dengan yang diterima channel.
- **Ganti nama koneksi**, supaya tiga akun Airbnb tidak menjadi tiga baris yang identik.
- **Membatalkan impor** dengan bersih.

Lihat [Mengelola listing setelah setup](/id/channels/listings/).

### Lainnya

- **Lampiran di pesan tamu** — [Pesan](/id/daily/messages/).
- **Menginap bisa diedit** dari daftar reservasi — [Booking](/id/daily/bookings/).
- **Tiket bisa dijadwalkan**, yang menaruh perbaikan di kalender dan menahan kamarnya —
  [Tiket](/id/daily/tickets/#menjadwalkan-berarti-menaruhnya-di-kalender).
- **Mode tampilan kalender** dan tombol sembunyikan listing — [Kalender](/id/daily/calendar/).
- **Pemetaan level kamar Booking.com** dengan pemeriksaan okupansi dan mata uang di awal, jadi
  pemetaan yang akan gagal diam-diam ditolak dengan alasannya —
  [Hubungkan Booking.com](/id/channels/booking-com/).
- **PriceLabs** menggantikan Wheelhouse sebagai mesin pricing eksternal yang didukung —
  [Jika Anda sudah memakai PriceLabs](/id/money/pricing/#jika-anda-sudah-memakai-pricelabs).
- **Tautan ke dokumentasi ini** dari navigasi produk.

## Juli 2026

### Kamar menjadi satuan kerja

Serangkaian perubahan yang semuanya mengarah ke satu hal: **kamar**, bukan properti, adalah objek
yang dioperasikan produk ini.

- **Klaster kebersihan pindah ke kamar**, jadi bangunan yang kamarnya dibersihkan orang berbeda
  bekerja dengan benar — [Klaster kebersihan](/id/daily/tasks/#klaster-kebersihan).
- **Akses tim bisa dibatasi ke kamar tertentu**, bukan hanya bangunan —
  [Membatasi ke bangunan tertentu](/id/setup/team/#membatasi-ke-bangunan-tertentu).
- **Ulasan disimpan per kamar**, dengan skor agregat di kamarnya — [Ulasan](/id/daily/reviews/).
- **Properti Airbnb multi-kamar** terpetakan dengan benar: beberapa listing yang merupakan kamar
  dari satu vila mendarat sebagai satu properti dengan beberapa kamar —
  [Properti, lalu kamar](/id/start/concepts/#properti-lalu-kamar).

### Status pengiriman pesan

Balasan kini menunjukkan apakah benar-benar sampai ke channel, bukan tampak terkirim lalu gagal
diam-diam. Pesan yang channel-nya berhenti sinkron tetap ada di utas dan bisa dikirim ulang. Lihat
[Pesan](/id/daily/messages/).

### Harga tersinkron keluar secara bawaan

Sinkronisasi harga aktif untuk listing yang terhubung, bukan lagi opsi per listing. Pemeriksaan
keamanan harga nol berdiri sendiri dan tetap dipertahankan. Lihat
[Tarif dan ketersediaan](/id/money/rates/).

### Onboarding Booking.com disederhanakan

Alur koneksinya sinkron — masukkan Hotel ID, tautkan ke properti, petakan kamar — dengan progres
yang jelas alih-alih layar yang tampak diam. Lihat
[Hubungkan Booking.com](/id/channels/booking-com/).

## Memberi tahu kami apa yang harus dibangun

Permintaan fitur yang akhirnya dibangun adalah yang datang lengkap dengan situasinya: apa yang
sedang Anda coba lakukan, dan apa yang akhirnya Anda lakukan. Kirim lewat
[dukungan](/id/help/support/) dari dalam produk.
