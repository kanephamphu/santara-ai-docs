---
title: "Hubungkan Google Hotels dan Vacation Rentals"
description: "Listing gratis di Google: lengkapi data properti, hubungkan Google, pilih tujuan pemesanan, lalu tunggu 1–4 minggu sampai Google menampilkan properti."
sidebar:
  order: 36
  label: "Google Hotels dan Vacation Rentals"
---

Cara menghubungkan Google Hotels dan Vacation Rentals ke Santara AI. Penyiapan di dalam Santara AI sama untuk setiap channel ([Hubungkan channel lain](/id/channels/other-channels/)); halaman ini membahas yang khusus untuk Google Hotels dan Vacation Rentals.

## Sebelum mulai

- Google **tidak punya extranet**: Google hanya menampilkan apa yang dikirim properti Anda. Sebelum menghubungkan, isi **alamat, telepon, lokasi peta, zona waktu, aturan rumah, kebijakan pembatalan, minimal satu fasilitas, foto, dan deskripsi** properti.
- **Vacation rental butuh lebih banyak**: alamat situs yang diawali `https://`, **minimal 8 foto**, serta jumlah tempat tidur, kamar tidur, dan kamar mandi (diminta di formulir di bawah).
- Google mencocokkan properti lewat **nama, alamat, dan nomor telepon** — pastikan sama dengan yang tampil di Google Maps.
- Sebuah **properti dengan minimal satu kamar** di Santara AI.

## 1. Hubungkan di Santara AI

1. Buka **Pengaturan → Channel → Tambah channel**, cari **Google Hotel ARI**, lalu tekan **Hubungkan**.
2. Pilih properti yang dituju.
3. Isi kolom di bawah, lalu tekan **Uji koneksi**.
4. Setelah uji berhasil, tekan **Hubungkan dan lanjut**.

| Kolom | Yang diisi |
| --- | --- |
| Partner Account | Biarkan apa adanya kecuali kami memberi tahu lain. |
| Use built-in IBE | Dicentang: tamu yang mengklik di Google masuk ke halaman pemesanan siap pakai. Tidak dicentang: isi **Booking Link**. |
| Booking Link | Halaman pemesanan Anda sendiri, dengan placeholder yang diisi Google — misalnya `https://example.com/book?checkin=(CHECKIN_DATE)&nights=(LENGTH)`. Lainnya: `(CHECKOUT_DATE)`, `(ADULTS)`, `(CURRENCY)`. |
| Beds count / Bedrooms count / Bathrooms count | Wajib untuk vacation rental. |
| Send Property Notification | Opsional. Centang, lalu kolom **Property Email** muncul — alamat itu menerima email untuk setiap pemesanan baru. |

## 2. Petakan kamar dan tarif

- Centang kamar dan tarif yang ditampilkan Google. Bisa diubah kapan saja.
- **Vacation rental: satu tipe kamar per koneksi.** Beberapa apartemen dalam satu gedung masing-masing perlu koneksi Google sendiri, dan properti di alamat berbeda harus menjadi properti terpisah di Santara AI.

Petakan **setiap** kamar dan tarif yang ditampilkan Google Hotels dan Vacation Rentals. Yang dibiarkan tidak dipetakan tidak menerima pembaruan, dan Google Hotels dan Vacation Rentals terus menjualnya dengan ketersediaan lamanya.

## 3. Impor dan go live

Santara AI memeriksa apa yang sudah dipetakan, mengaktifkan channel, lalu membawa masuk menginap yang sudah ada di Google Hotels dan Vacation Rentals. Sejak itu, tarif, ketersediaan, dan restriksi tersinkron dari Santara AI — lihat [Go live](/id/channels/going-live/).

## Perlu diketahui

- Google memeriksa properti baru setiap minggu: tunggu **sekitar 1 minggu** untuk hotel dan **hingga 4 minggu** untuk vacation rental sebelum properti muncul.
- Ini adalah **tautan pemesanan gratis** Google; vacation rental tampil sebagai pin di peta saat orang mencari di area itu.

Perbaikan lain: [Pemecahan masalah channel](/id/channels/troubleshooting/).
