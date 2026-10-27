---
title: Hubungkan Booking.com
description: Tambahkan connectivity provider di extranet, masukkan Hotel ID, petakan kamar, dan Santara AI mengaktifkan channel untuk Anda.
sidebar:
  order: 3
---

Booking.com bekerja berbeda dari Airbnb: tidak ada popup login. Anda memberi izin di extranet Anda
sendiri, lalu memberi tahu Santara AI properti mana yang dituju.

![Dialog koneksi Booking.com — langkah extranet, Hotel ID, dan properti yang ditautkan.](/screens/connect-booking-com.id.png)

## 1. Aktifkan koneksi di extranet

Booking.com harus mengizinkan koneksi terlebih dulu. Santara AI terhubung lewat **Channex**, mitra
konektivitasnya — itulah nama yang Anda cari di Booking.com. Sebaiknya langkah ini dilakukan pemilik
properti: Booking.com mengirim kode masuk dua langkah ke ponsel pemilik.

1. Masuk di **account.booking.com**. Catat **ID properti** di bagian atas, di sebelah nama properti —
   itulah Hotel ID yang Anda masukkan di langkah 2. Lalu buka **Account → Connectivity provider**.

   ![Extranet Booking.com: ID properti di sebelah nama, dan Account → Connectivity provider.](/channel-guides/extranet/booking-com-account-menu.webp)

2. Tekan **Search**.

   ![Halaman Connectivity provider — tekan Search.](/channel-guides/extranet/booking-com-connectivity-provider.webp)

3. Ketik kata lengkap **Channex** — pencarian yang lebih pendek tidak menemukan apa pun — lalu pilih
   **Channex.io**.

   ![Search for a provider: ketik Channex dan pilih Channex.io.](/channel-guides/extranet/booking-com-search-channex.webp)

4. Biarkan **Reservations, Rates & Availability** tercentang dan tekan **Next**.

   ![Channex.io terpilih, dengan Reservations, Rates & Availability tercentang — tekan Next.](/channel-guides/extranet/booking-com-next.webp)

5. Centang kotak persetujuan XML Service Agreement dan tekan **Yes, I accept**. Tidak ada kolom lain
   yang perlu diisi.

   ![XML Service Agreement: centang kotaknya, lalu Yes, I accept.](/channel-guides/extranet/booking-com-agreement.webp)

6. Permintaan kini menunggu konfirmasi — itu normal. Biarkan **Connect me to the provider
   automatically** terpilih. Anda bisa langsung lanjut di Santara AI; channel aktif setelah koneksi
   dikonfirmasi.

   ![Menunggu konfirmasi provider — lanjutkan di Santara AI.](/channel-guides/extranet/booking-com-waiting.webp)

Tidak ada yang terjadi di Santara AI sebelum ini selesai. Dialog koneksi punya kotak centang konfirmasi
karena melewatkan langkah ini adalah penyebab kegagalan paling umum.

:::caution[Periksa tarif turunan setelah terhubung]
Saat channel manager terhubung, Booking.com bisa mengubah pengaturan **tarif turunan** (derived
rates) — misalnya minimum menginap. Periksa setiap tarif turunan di extranet setelah terhubung.
:::

## 2. Masukkan Hotel ID

**Pengaturan → Channel → Hubungkan Booking.com**.

**Hotel ID** adalah angka yang tampil di bagian atas extranet, di sebelah nama properti — misalnya
`1234567`. Beri nama tampilan bila perlu.

## 3. Tautkan ke properti

Pilih properti Santara AI yang menjadi milik hotel ini. Hotel terhubung **langsung ke properti
tersebut** — tidak ada properti baru dibuat — dan kamar lain yang ditemukan di extranet ditambahkan
ke sana saat terdeteksi.

Belum punya properti? Pilih **Properti baru — dibuat dari hotel ini**. Jika properti itu sudah ada
di Airbnb, ia ditandai *sudah ada di Airbnb* — itu wajar; satu properti dijual di dua tempat.

Tekan **Hubungkan properti**. Berbeda dari Airbnb, ini langsung terjadi tanpa jendela tunggu.

## 4. Petakan kamar

Santara AI menanyakan kamar hotel itu ke Booking.com dan menampilkannya di **Kamar Anda**. Untuk tiap
kamar, pilih kamar Santara AI yang sesuai.

Jika tidak ada yang muncul, tekan **Cari kamar saya** lagi, atau gunakan **Hubungkan kamar ke
properti sendiri** dan masukkan manual dari halaman **Property → Rooms & rates** di extranet:

- **Nama kamar** — misalnya *Standard Double Room*
- **Room ID** — misalnya `437213702`
- **Rate ID** — misalnya `25014098, 25014104`
- **Tamu** — kapasitas kamar

Lalu tekan **Petakan, aktifkan & sinkronkan**. Santara AI memetakan kamar, mengaktifkan channel, dan
menyinkronkan booking, ulasan, dan pesan, sambil menampilkan tiap tahap.

:::note[Membedakan kamar]
Booking.com menampilkan nama kamar **bawaan**, bukan nama yang Anda ubah di extranet, sehingga dua
apartemen bisa tampak sama. Cocokkan lewat **Room ID**. Petakan **semua** kamar dan tarif: tarif yang
tidak dipetakan — termasuk **tarif turunan** lama yang tampil bisa dipetakan — membuat pemesanannya
gagal. Jika tidak diperlukan, hapus di extranet (tarif turunan yang dibuat ulang di sana tidak perlu
dipetakan).
:::

## Yang bisa menahan sebuah kamar

| Di layar | Artinya |
| --- | --- |
| *Tertaut — belum dipetakan* | Booking.com mengenal kamarnya; belum menunjuk kamar Santara AI |
| *Dipetakan — menunggu aktivasi* | Sudah dipetakan, channel belum aktif. Booking tersinkron setelah aktivasi berhasil |
| *tetap tertaut tetapi tidak dipetakan — rate plan-nya tidak memberi harga untuk jumlah tamu yang diterima Booking.com* | Buka rate plan kamar itu, beri harga untuk okupansi tersebut, lalu petakan lagi |
| *Belum ada kamar ditemukan* | Periksa Hotel ID dan connectivity provider, lalu segarkan |

Santara AI tidak akan menebak harga okupansi pada listing aktif. Penolakan itu disengaja: harga tebakan
di Booking.com menjual malam nyata dengan tarif yang salah.

## Menginap yang diimpor saat terhubung

Menginap yang sudah ada di Booking.com dibawa saat channel aktif, tetapi Booking.com mengirimnya dengan
**detail lebih sedikit** dibanding pemesanan baru: tanpa pajak atau biaya, tanpa email, alamat atau
telepon tamu, tanpa komisi dan tanpa detail kartu. Lihat extranet untuk data itu. Pemesanan yang dibuat
setelah terhubung masuk lengkap.

## Tarif di Booking.com

Booking.com tidak membuka tarif Anda kepada penyedia konektivitas dengan cara yang bisa dibaca
kembali. Harga yang Anda tetapkan di Santara AI dikirim **keluar** ke Booking.com; tidak ada yang
diimpor **masuk**. Tetapkan harga Anda di sini (atau dengan [aturan pricing](/id/money/pricing/)) dan
perlakukan Santara AI sebagai sumber kebenaran.

## Mengubah atau menghapus

- **Ganti properti** — reservasi dan pesan mendatang mendarat di properti yang Anda pilih. Yang sudah
  diimpor tetap di tempatnya dan pemetaan kamar dipertahankan.
- **Hapus dari Santara AI** pada satu kamar — menghapus data impornya di sini saja.
- **Putuskan** — menghentikan sinkronisasi dan menghapus data impor properti ini. Extranet Anda tidak
  tersentuh. Hotel ID yang sama bisa dihubungkan lagi nanti.

:::caution[Jika channel menghilang]
*"Channel ini dihapus dari sisi channel manager"* berarti koneksi dibatalkan di hulu — biasanya
connectivity provider dihapus di extranet. Sinkronisasi berhenti. Setujui ulang provider di
Booking.com, lalu putuskan dan hubungkan kembali di sini.
:::
