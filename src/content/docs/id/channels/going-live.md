---
title: Go live
description: Mengimpor listing tidak menyerahkan kalender Anda. Halaman ini menjelaskan apa yang berubah saat Anda menekan Go live, dan apa yang harus diperiksa dulu.
sidebar:
  order: 4
---

Baca ini sebelum menekan tombolnya. Inilah satu-satunya halaman dalam dokumentasi ini yang
menjelaskan tindakan yang tidak bisa dibatalkan diam-diam.

## Janjinya

**Mengimpor listing tidak pernah mengambil kendali kalendernya.** Setelah impor, listing Anda dibuat,
dipetakan, dan diberi harga dari data channel sendiri, dan channel tetap berjalan persis seperti
sebelumnya. Anda boleh memeriksa semuanya, memperbaiki yang salah, dan membiarkannya seminggu.

Kendali berpindah pada satu momen, lewat satu tindakan sengaja: **Go live**.

![Empat status yang dilewati sebuah listing, dengan Go live sebagai gerbang sebelum status terakhir.](/diagrams/listing-states.id.svg)

## Apa yang berubah saat Go live

Sejak saat itu, untuk listing yang Anda live-kan:

- **Channel menyerahkan kendali kalender ke Santara.** Ketersediaan kini dikemudikan dari sini.
  Booking di channel mana pun menutup malam itu di semua channel.
- **Tarif dikirim dari sini.** Harga tetap persis seperti di channel sampai Anda mengubahnya di
  Santara atau [aturan pricing](/id/money/pricing/) menerbitkannya.
- **Restriksi dikirim** — minimum menginap, closed-to-arrival, dan seterusnya.
- Booking, tamu, pesan, dan ulasan sudah tersinkronisasi sejak impor; itu tidak berubah.

## Periksa lima hal ini dulu

1. **Setiap kamar punya harga per malam.** Kamar tanpa harga tidak bisa terjual, dan go live dengan
   harga nol adalah satu-satunya kesalahan yang biayanya langsung terasa hari itu juga.
2. **Okupansi benar.** Kapasitas tamu menentukan harga tamu tambahan dan apa yang diterima
   Booking.com.
3. **Kalender menyerupai kalender channel.** Buka [Kalender](/id/daily/calendar/) dan bandingkan satu
   bulan dengan channel. Booking yang ada seharusnya sudah tampak.
4. **Kamar yang benar dipetakan ke listing yang benar.** Pemetaan yang tertukar mengirim ketersediaan
   salah ke listing salah — lebih buruk daripada tidak dipetakan.
5. **Jumlah unit Anda.** Ketersediaan dibatasi jumlah unit kamar. Jika satu kamar adalah satu
   apartemen tetapi jumlah unitnya tertulis 3, Anda baru saja menawarkan tiga.

## Go live satu per satu

Anda tidak harus me-live-kan semuanya sekaligus. Live-kan satu listing, amati sehari, lalu sisanya.
Listing yang belum live tetap siap dan mempertahankan pemetaannya.

## Jika gagal

Kegagalan ditampilkan sebagaimana dilaporkan channel. Yang umum beserta perbaikannya ada di
[Hubungkan Airbnb](/id/channels/airbnb/#4-go-live). Hasil sebagian adalah normal.

## Menjeda atau mundur

- **Untuk berhenti menjual malam**, tutup tanggalnya di [kalender](/id/daily/calendar/). Ini cara yang
  benar untuk menjeda. Data dan riwayat Anda tetap.
- **Untuk mengembalikan kendali**, hapus listing dari Santara atau putuskan koneksinya. Listing dan
  kalender channel Anda tidak terpengaruh, tetapi reservasi, pesan, dan ulasan yang diimpor di sini
  ikut terhapus.

:::caution[Booking yang masuk saat live itu nyata]
Apa pun yang dipesan tamu selama periode live ada di channel dan harus dipenuhi, apa pun yang Anda
lakukan di Santara setelahnya. Memutus koneksi menghapus catatan di sini, bukan kewajibannya.
:::
