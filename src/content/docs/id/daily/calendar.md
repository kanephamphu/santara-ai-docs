---
title: Kalender
description: Setiap malam di setiap kamar, dengan harga, minimum menginap, dan ketersediaan yang bisa diubah langsung di grid.
sidebar:
  order: 5
---

Kamar di kiri, tanggal di atas, masa menginap digambar sebagai batang. Gulir ke samping untuk memuat
tanggal berikutnya; malam kosong menampilkan harganya.

![Kalender: semua kamar di kiri, semua malam di atas. Malam kosong menampilkan harga jualnya.](/screens/calendar.id.png)

## Cara membacanya

- **Batang** adalah reservasi. Warnanya menunjukkan channel; labelnya menampilkan tamu dan
  pendapatan.
- **Malam kosong** menampilkan tarif per malam yang akan dikenakan.
- **Blok bergaris** adalah tiket yang dijadwalkan pada tanggal itu — perbaikan, pembersihan besar,
  atau tamu pemilik.
- **Klik satu hari** untuk daftar harian: semua yang bergerak pada tanggal itu.

## Memblokir atau membuka tanggal

Memblokir malam sama dengan menutupnya: tidak ada yang bisa memesannya di channel mana pun. Anda
melakukannya langsung di grid — klik satu malam, atau seret melintasi beberapa malam.

1. **Pilih malamnya.**
   - *Satu malam:* klik malam kosong pada baris kamar tersebut.
   - *Beberapa malam:* tekan malam pertama lalu **seret** di baris yang sama sampai malam terakhir,
     lalu lepaskan. Malam-malam itu berdenyut selama Anda menyeret. Seret melewati tepi kanan dan
     kalender ikut bergulir.
   - *Memperlebar rentang:* tahan **Shift** dan klik malam yang lebih jauh di baris yang sama.
2. Panel **Tanggal dipilih** terbuka di bawah rentang, menampilkan jumlah malam yang dipilih. Pilih
   **Tarif & ketersediaan**.
3. Atur **Hentikan penjualan** ke **Ditutup** untuk memblokir, atau ke **Buka** untuk membuka
   kembali. Biarkan kolom lain kosong agar tidak berubah.
4. Klik **Tambahkan 3 malam ke tertunda** (angkanya sesuai pilihan Anda). Malam-malam itu menjadi kuning dengan garis putus —
   belum ada yang dikirim, jadi Anda bisa terus memilih dan menumpuk perubahan lain.
5. Klik **Simpan semua** di bagian atas kalender. Perubahan dikirim ke semua channel terhubung.
   **Buang semua** membatalkan perubahan yang tertunda.

Malam yang ditutup lalu bertuliskan **Ditutup** di grid. Untuk membukanya lagi, pilih malam yang
sama dan atur **Hentikan penjualan** ke **Buka**.

:::note
- Satu rentang hanya di **satu baris kamar** — untuk memblokir dua kamar, kerjakan tiap baris
  bergantian (keduanya bisa menunggu di tertunda dan disimpan bersama).
- **Tanggal lampau** hanya bisa dibaca dan tidak bisa dipilih.
- **Di ponsel atau tablet** menyeret akan menggulir kalender, jadi ketuk satu malam lalu perlebar
  rentangnya dengan tanggal di panel.
- Tekan **Esc** atau **×** pada panel untuk membatalkan pilihan.
:::

## Mengedit rentang

Pilih rentang malam pada satu kamar dan Anda mendapat tiga tindakan:

**Pesankan malam ini untuk tamu** — membuat reservasi manual. Gunakan untuk booking langsung lewat
telepon, tamu pemilik, atau teman. Reservasi manual memblokir malam di semua channel terhubung
seperti reservasi asli.

**Jadwalkan perawatan atau pekerjaan** — membuka [tiket](/id/daily/tasks/#tiket) pada tanggal itu dan
menggambarnya di sini.

**Harga, minimum menginap, atau tutup tanggal** — editor ketersediaan:

| Kolom | Fungsinya |
| --- | --- |
| **Harga** | Tarif per malam untuk malam-malam itu, pada rate plan terpilih |
| **Minimum menginap** | Booking terpendek yang boleh dimulai pada malam itu |
| **Ditutup** | Tidak ada yang bisa memesan malam itu di channel mana pun |

Perubahan menunggu di **tertunda** sampai Anda mengklik **Simpan semua**; satu simpan itu mengirimnya ke semua channel terhubung. Tidak ada langkah "terbitkan" lain.

## Harga dan mesin pricing

Harga yang Anda ketik di sini adalah **harga manual**, dan
[mesin pricing](/id/money/pricing/) tidak menyentuhnya — kecuali Anda menyalakan *Ganti harga yang
saya ketik manual* untuk listing tersebut, yang menimpanya tanpa bisa dibatalkan.

Itulah seluruh hubungannya: aturan menentukan bentuk tahun, tangan Anda menang pada malam yang Anda
sentuh.

## Ketersediaan dan jumlah unit

Sebuah kamar tidak pernah bisa menawarkan lebih banyak malam daripada **jumlah unit**-nya. Jika kamar
adalah satu apartemen, jumlah unitnya 1, dan ketersediaan dibatasi di sana — di kalender, dalam
pengiriman ke channel, dan dalam apa yang bisa Anda ketik.

Jika kalender menampilkan ketersediaan lebih sedikit dari perkiraan, periksa jumlah unit kamar dulu.

## Menutup tanggal adalah cara menjeda

Untuk berhenti menjual — renovasi, tamu pemilik, musim libur — **tutup tanggalnya** di sini. Jangan
memutus channel: itu menghapus riwayat impor Anda dan tidak menghentikan listing yang ada di channel.

## Blok yang berasal dari channel

Blok yang dibuat di Airbnb atau extranet Booking.com sebelum Anda go live ikut diimpor dan
ditampilkan. Setelah live, buat blok di sini — kalender channel kini berada di hilir kalender ini.
