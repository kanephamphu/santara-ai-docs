---
title: Hubungkan Booking.com
description: Tambahkan connectivity provider di extranet, masukkan Hotel ID, petakan kamar, dan Santara mengaktifkan channel untuk Anda.
sidebar:
  order: 3
---

Booking.com bekerja berbeda dari Airbnb: tidak ada popup login. Anda memberi izin di extranet Anda
sendiri, lalu memberi tahu Santara properti mana yang dituju.

![Dialog koneksi Booking.com — langkah extranet, Hotel ID, dan properti yang ditautkan.](/screens/connect-booking-com.id.png)

## 1. Aktifkan koneksi di extranet

Di **extranet Booking.com**:

1. Buka **Account → Connectivity provider**.
2. Cari **Channex** — mitra konektivitas kami.
3. Pilih dan **setujui perjanjian koneksi**.

Tidak ada yang terjadi di Santara sebelum ini selesai. Dialog koneksi punya kotak centang konfirmasi
karena melewatkan langkah ini adalah penyebab kegagalan paling umum.

## 2. Masukkan Hotel ID

**Pengaturan → Channel → Hubungkan Booking.com**.

**Hotel ID** adalah angka yang tampil di bagian atas extranet, di sebelah nama properti — misalnya
`1234567`. Beri nama tampilan bila perlu.

## 3. Tautkan ke properti

Pilih properti Santara yang menjadi milik hotel ini. Hotel terhubung **langsung ke properti
tersebut** — tidak ada properti baru dibuat — dan kamar lain yang ditemukan di extranet ditambahkan
ke sana saat terdeteksi.

Belum punya properti? Pilih **Properti baru — dibuat dari hotel ini**. Jika properti itu sudah ada
di Airbnb, ia ditandai *sudah ada di Airbnb* — itu wajar; satu properti dijual di dua tempat.

Tekan **Hubungkan properti**. Berbeda dari Airbnb, ini langsung terjadi tanpa jendela tunggu.

## 4. Petakan kamar

Santara menanyakan kamar hotel itu ke Booking.com dan menampilkannya di **Kamar Anda**. Untuk tiap
kamar, pilih kamar Santara yang sesuai.

Jika tidak ada yang muncul, tekan **Cari kamar saya** lagi, atau gunakan **Hubungkan kamar ke
properti sendiri** dan masukkan manual dari halaman **Property → Rooms & rates** di extranet:

- **Nama kamar** — misalnya *Standard Double Room*
- **Room ID** — misalnya `437213702`
- **Rate ID** — misalnya `25014098, 25014104`
- **Tamu** — kapasitas kamar

Lalu tekan **Petakan, aktifkan & sinkronkan**. Santara memetakan kamar, mengaktifkan channel, dan
menyinkronkan booking, ulasan, dan pesan, sambil menampilkan tiap tahap.

## Yang bisa menahan sebuah kamar

| Di layar | Artinya |
| --- | --- |
| *Tertaut — belum dipetakan* | Booking.com mengenal kamarnya; belum menunjuk kamar Santara |
| *Dipetakan — menunggu aktivasi* | Sudah dipetakan, channel belum aktif. Booking tersinkron setelah aktivasi berhasil |
| *tetap tertaut tetapi tidak dipetakan — rate plan-nya tidak memberi harga untuk jumlah tamu yang diterima Booking.com* | Buka rate plan kamar itu, beri harga untuk okupansi tersebut, lalu petakan lagi |
| *Belum ada kamar ditemukan* | Periksa Hotel ID dan connectivity provider, lalu segarkan |

Santara tidak akan menebak harga okupansi pada listing aktif. Penolakan itu disengaja: harga tebakan
di Booking.com menjual malam nyata dengan tarif yang salah.

## Tarif di Booking.com

Booking.com tidak membuka tarif Anda kepada penyedia konektivitas dengan cara yang bisa dibaca
kembali. Harga yang Anda tetapkan di Santara dikirim **keluar** ke Booking.com; tidak ada yang
diimpor **masuk**. Tetapkan harga Anda di sini (atau dengan [aturan pricing](/id/money/pricing/)) dan
perlakukan Santara sebagai sumber kebenaran.

## Mengubah atau menghapus

- **Ganti properti** — reservasi dan pesan mendatang mendarat di properti yang Anda pilih. Yang sudah
  diimpor tetap di tempatnya dan pemetaan kamar dipertahankan.
- **Hapus dari Santara** pada satu kamar — menghapus data impornya di sini saja.
- **Putuskan** — menghentikan sinkronisasi dan menghapus data impor properti ini. Extranet Anda tidak
  tersentuh. Hotel ID yang sama bisa dihubungkan lagi nanti.

:::caution[Jika channel menghilang]
*"Channel ini dihapus dari sisi channel manager"* berarti koneksi dibatalkan di hulu — biasanya
connectivity provider dihapus di extranet. Sinkronisasi berhenti. Setujui ulang provider di
Booking.com, lalu putuskan dan hubungkan kembali di sini.
:::
