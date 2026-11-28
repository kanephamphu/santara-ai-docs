---
title: Pemecahan masalah channel
description: Selusin hal yang benar-benar sering salah pada koneksi, dan apa yang memperbaikinya.
sidebar:
  order: 7
---

Mulai dari dua langkah yang menyelesaikan sebagian besar masalah: periksa status dan sinkron terakhir
koneksi di **Pengaturan → Saluran**, lalu tekan **Segarkan**.

## Di mana masalah terlihat

Anda tidak perlu mencarinya sendiri. Dua hal memberi tahu Anda saat sebuah channel berhenti bekerja.

**Strip kesehatan.** Bila ada yang salah, sebuah strip muncul di bagian atas setiap halaman, di
bawah banner penagihan bila ada. Satu masalah tampil sebagai satu baris; beberapa masalah diringkas
menjadi **3 hal perlu dicek**, dengan **Lihat** untuk membuka daftarnya. Setiap baris punya
**Perbaiki**, yang membuka halaman tempat masalah itu diperbaiki. Tombol **×** (*Sembunyikan sampai
ada perubahan*) menyembunyikan masalah tersebut — masalah baru akan tampil lagi. Bila semuanya
berjalan, strip ini tidak muncul sama sekali.

| Isi strip | Artinya |
| --- | --- |
| *… tidak terhubung. Hubungkan lagi agar booking dan harga tetap tersinkron.* | Koneksi berhenti — akses dicabut, kedaluwarsa, dihapus di sisi channel manager, atau aktivasi gagal. Hubungkan ulang |
| *… menunggu satu langkah dari Anda.* | Ada yang belum selesai: listing menunggu go live, kapasitas yang perlu dikonfirmasi, atau belum ada kamar yang dipetakan |
| *Login … berakhir pada …. Hubungkan lagi sebelum tanggal itu.* | Login channel habis dalam 7 hari. Hubungkan ulang sebelum tanggalnya |
| *…: sinkronisasi terakhir gagal.* | Sinkron terakhir gagal dan belum ada yang berhasil sesudahnya. Tekan **Segarkan** pada koneksi |
| *3 pembaruan harga atau ketersediaan terus gagal terkirim ke saluran Anda.* | Pembaruan sudah gagal tiga kali atau lebih. Periksa koneksi, lalu [hubungi dukungan](/id/help/support/) bila tetap muncul |
| *3 listing ditolak oleh channel manager.* | Sebuah kamar atau rate plan ditolak. **Perbaiki** membuka kamarnya, tempat alasannya tampil di samping pengaturan penyebabnya |

**Peringatan di lonceng.** Bila sebuah channel menolak pembaruan harga atau ketersediaan, lonceng
menampilkan **… menolak pembaruan** — *harga atau ketersediaan di sana mungkin belum terbaru*.
**Peringatan sinkronisasi dari …** yang lebih ringan berarti pembaruan tetap masuk, tetapi channel
punya keberatan yang sebaiknya dicek. Paling banyak satu peringatan per hari untuk channel, properti,
dan masalah yang sama. Peringatan dikirim ke pemilik, admin, dan co-host, dan membuka **Pengaturan →
Saluran**.

## Saat menghubungkan

**Popup Airbnb tidak pernah terbuka.**
Browser Anda memblokirnya. Izinkan popup untuk situs ini lalu tekan *Hubungkan Airbnb* lagi.

**"Otorisasi belum selesai."**
Jendela tertutup sebelum Anda menyetujui di Airbnb. Tidak ada yang terhubung — tekan *Coba lagi*.

**"Akun Airbnb ini sudah terhubung."**
Akun yang sama ada di koneksi lain pada workspace ini. Putuskan yang itu dulu.

**Tidak ada listing Airbnb setelah otorisasi.**
Airbnb butuh waktu sejenak untuk membagikannya. Tekan *Periksa lagi* setelah beberapa detik. Jika
tetap kosong, pastikan Anda mengotorisasi dengan akun pemilik listing — login co-host tidak
menampilkan apa pun.

**Kamar Booking.com tidak ditemukan.**
Hampir selalu langkah connectivity provider. Di extranet: **Account → Connectivity provider**, cari
provider yang disebutkan di dialog koneksi, pilih, setujui perjanjiannya. Lalu segarkan di sini. Jika masih kosong, periksa ulang
Hotel ID.

## Setelah impor

**Sebuah kamar tidak punya harga.**
Pengimpor menolak menebak harga yang ambigu. Buka kamar itu, tetapkan harga per malam, dan kamar bisa
terjual. Di Airbnb tautan channel pulih sendiri setelah ada harga sungguhan.

**"Tetap di Airbnb."**
Pengaturan tanpa padanan persis di sini. Tetap berlaku di Airbnb. Tidak perlu tindakan.

**Sebuah listing tetap *tertaut — belum dipetakan*.**
Belum menunjuk kamar. Petakan dari halaman koneksi. Di Booking.com, penyebab lazimnya rate plan yang
tidak memberi harga untuk jumlah tamu yang diterima Booking.com.

**Muncul kamar yang tidak saya buat.**
Booking.com menemukan kamar seiring booking masuk dan menambahkannya ke properti tertaut. Ganti
namanya, atau tautkan ke kamar yang sudah ada.

## Setelah live

**Channel dan Santara AI berbeda soal sebuah tanggal.**
Tekan **Segarkan** pada koneksi. Jika tetap berbeda, catat tanggal dan kamarnya lalu
[hubungi dukungan](/id/help/support/) — jangan memperbaiki di kedua sisi sekaligus.

**Ketersediaan lebih sedikit dari yang saya kira.**
Ketersediaan dibatasi jumlah unit kamar. Satu apartemen adalah satu unit.

**"Akses Santara AI telah dicabut dari akun Airbnb Anda, sehingga sinkronisasi berhenti."**
Seseorang menghapus Santara AI dari aplikasi terhubung di akun Airbnb, atau Airbnb mencabut aksesnya.
Koneksi menampilkan **Perlu dihubungkan ulang**. Tekan **Hubungkan ulang** dan masuk dengan akun
Airbnb yang **sama** — listing dan riwayat Anda tetap tersimpan. Lihat
[Hubungkan ulang](/id/channels/airbnb/#hubungkan-ulang).

**"Channel ini dihapus dari sisi channel manager."**
Koneksi dibatalkan di hulu — biasanya connectivity provider dihapus di extranet. Setujui ulang di
channel, lalu putuskan dan hubungkan kembali di sini.

**Harga yang saya ketik manual tertimpa.**
Periksa pengaturan pricing listing: *Ganti harga yang saya ketik sendiri* mati secara bawaan, dan bila
menyala ia menimpa tanpa bisa dibatalkan. Lihat
[Smart pricing](/id/money/pricing/#melindungi-harga-manual).

**Pesan berhenti masuk.**
Periksa status koneksi dulu. Jika terhubung dan baru saja sinkron, utasnya mungkin berpindah — sebagian
channel menutup utas setelah check-out. Hubungi dukungan dengan kode reservasi.

**Ada booking yang tidak terlihat di kalender.**
Periksa kamar tempatnya mendarat: listing yang dipetakan ke kamar salah menempatkan booking nyata di
tempat salah. Perbaiki pemetaannya ([Mengelola listing](/id/channels/listings/)) dan beri tahu
dukungan agar reservasinya dipindahkan.

## Masih buntu

Tanya [asisten](/id/help/assistant/) — ia bisa membaca workspace Anda. Lalu
[hubungi dukungan](/id/help/support/) dari dalam produk, agar workspace dan koneksi ikut terlampir.
