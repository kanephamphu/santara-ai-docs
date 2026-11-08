---
title: Go live
description: Kapan sebuah listing tayang di tiap channel, apa yang berubah saat itu, dan apa yang harus diperiksa sebelum mengimpor atau memetakan apa pun.
sidebar:
  order: 5
---

Baca ini sebelum mengimpor listing atau memetakan kamar. Inilah satu-satunya halaman dalam
dokumentasi ini yang menjelaskan tindakan yang tidak bisa dibatalkan diam-diam.

## Kapan sebuah listing tayang

Tayang adalah saat channel menyerahkan kendali kalender ke Santara AI. Kapan itu terjadi tergantung
channel-nya:

- **Airbnb** — impor menayangkan tiap listing sebagai langkah terakhirnya, setelah listing punya
  harga sungguhan dan kapasitasnya dikonfirmasi. Listing yang belum dikonfirmasi Airbnb tetap
  **Sudah disiapkan — belum aktif**, dan tayang saat Anda menekan **Aktifkan di Airbnb** di langkah
  impor, atau **Tayangkan** di halaman koneksi. Lihat [Hubungkan Airbnb](/id/channels/airbnb/#tayang).
- **Booking.com dan setiap channel lain** — tidak ada langkah Go live terpisah. **Memetakan kamar
  akan menyiapkannya dan membuatnya aktif** — ketersediaan langsung mulai disinkronkan.

Jadi pemeriksaan di bawah ini dilakukan **sebelum** Anda mengimpor di Airbnb, dan **sebelum** Anda
memetakan kamar di channel lain.

## Apa yang berubah saat tayang

Sejak saat itu, untuk listing yang tayang:

- **Channel menyerahkan kendali kalender ke Santara AI.** Ketersediaan kini dikemudikan dari sini.
  Booking di channel mana pun menutup malam itu di semua channel.
- **Tarif dikirim dari sini.** Di Airbnb, harga tetap persis seperti semula sampai Anda mengubahnya
  di Santara AI atau [aturan pricing](/id/money/pricing/) menerbitkannya. Di Booking.com dan channel
  lain, rate plan yang Anda petakan itulah yang diterima channel.
- **Restriksi dikirim** — minimum menginap, closed-to-arrival, dan seterusnya.
- Booking, tamu, pesan, dan ulasan tersinkron masuk.

## Periksa hal-hal ini dulu

1. **Setiap kamar punya harga per malam.** Kamar tanpa harga tidak bisa terjual, dan tayang dengan
   harga nol adalah satu-satunya kesalahan yang biayanya langsung terasa hari itu juga. Santara AI
   memblokir tautan channel berharga nol karena alasan ini, tetapi tetap periksa.
2. **Okupansi benar.** Kapasitas tamu menentukan harga tamu tambahan dan apa yang diterima
   Booking.com.
3. **Kalender menyerupai kalender channel.** Buka [Kalender](/id/daily/calendar/) dan bandingkan satu
   bulan dengan channel. Booking yang ada seharusnya sudah tampak.
4. **Kamar yang benar dipetakan ke listing yang benar.** Pemetaan yang tertukar mengirim ketersediaan
   salah ke listing salah — lebih buruk daripada tidak dipetakan.
5. **Kapasitas dikonfirmasi.** Sebelum channel pertama kali menyentuh kalender sebuah properti,
   Santara AI meminta Anda mengonfirmasinya — **Konfirmasi kapasitas sebelum kita tayang**, atau
   *Konfirmasi kapasitas untuk melanjutkan* di sebelah listing. Tekan **Konfirmasi** dan isi **Berapa
   unit identik?**, **Mata uang**, dan **Tarif per malam**. Ketersediaan dibatasi jumlah unit itu:
   jika satu kamar adalah satu apartemen tetapi Anda mengisi 3, Anda baru saja menawarkan tiga.
   Sebelum Anda mengonfirmasi, dialog menunjukkan berapa malam mendatang yang akan kosong dan berapa
   yang ditutup sebagai penuh.

## Tayang satu per satu

Anda tidak harus menayangkan semuanya sekaligus. Di Airbnb, impor satu listing, amati sehari, lalu
impor sisanya. Di channel lain, petakan satu kamar dulu. Listing yang belum tayang tetap siap dan
mempertahankan pemetaannya.

## Jika gagal

Kegagalan ditampilkan sebagaimana dilaporkan channel. Yang umum di Airbnb beserta perbaikannya ada di
[Hubungkan Airbnb](/id/channels/airbnb/#tayang). Hasil sebagian adalah normal: listing yang berhasil
tayang sudah tayang, sisanya tetap siap, dan Anda bisa mencoba lagi.

## Menjeda atau mundur

- **Untuk berhenti menjual malam**, tutup tanggalnya di [kalender](/id/daily/calendar/). Ini cara yang
  benar untuk menjeda. Data dan riwayat Anda tetap.
- **Untuk mengembalikan kendali**, hapus listing dari Santara AI atau putuskan koneksinya. Listing dan
  kalender channel Anda tidak terpengaruh, tetapi reservasi, pesan, dan ulasan yang diimpor di sini
  ikut terhapus.

:::note[Masa inap yang akan datang tetap disimpan]
Menghapus atau memutus koneksi hanya menghentikan sinkronisasi — tidak membatalkan apa pun di
channel. Masa inap yang belum selesai tetap ada di Santara AI, jadi malam-malamnya tetap terblokir
di channel lain dan tidak terjadi pemesanan ganda. Masa inap lampau beserta pesan dan ulasannya
dihapus.
:::

:::caution[Booking yang masuk saat tayang itu nyata]
Apa pun yang dipesan tamu selama periode tayang ada di channel dan harus dipenuhi, apa pun yang Anda
lakukan di Santara AI setelahnya. Memutus koneksi menghapus catatan di sini, bukan kewajibannya.
:::
