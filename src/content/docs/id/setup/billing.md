---
title: Paket dan penagihan
description: Uji coba 7 hari, harga per properti yang makin murah saat unit bertambah, dan tanpa komisi atas booking apa pun.
sidebar:
  order: 6
---

**Pengaturan → Penagihan**. Angka di sana adalah yang berlaku untuk workspace Anda — halaman ini
menjelaskan bentuknya.

## Uji coba

Tujuh hari gratis. **Kartu diperlukan** dan **tidak ada tagihan hari ini** — batalkan kapan saja
sebelum hari ke-8 dan Anda tidak ditagih. Formulir kartunya milik Stripe; Santara tidak pernah
melihat nomornya.

## Cara harganya bekerja

Anda ditagih **per properti aktif, per bulan**. Tidak ada biaya dasar yang harus dibeli sebelum
mulai dan tidak ada paket untuk dipilih — tarif per properti menurun seiring bertambahnya properti.

| Tingkat | Termasuk | Tiap properti tambahan |
| --- | --- | --- |
| **Operator** | 1 properti dalam basis | ~$25 |
| **Portfolio** | 10 properti dalam basis | ~$18 |
| **Enterprise** | 40 properti dalam basis | ~$12 |

Tingkatannya **kontinu**: basis tiap tingkat persis sama dengan harga tingkat sebelumnya pada jumlah
properti itu, jadi tidak ada lonjakan saat melewati batas — properti kesebelas hanya lebih murah
daripada yang kesepuluh.

**Tanpa komisi atas booking apa pun, di channel mana pun** — termasuk booking dari
[situs booking langsung](/id/setup/booking-site/) Anda.

Di atas tingkat Enterprise, harga disepakati langsung. Jika Anda memakai ketentuan yang kami sepakati
secara khusus, layar Penagihan menyatakannya dan faktur Anda adalah angka yang persis.

## Apa yang dihitung sebagai properti aktif

Properti yang sudah disiapkan dan bisa menjual. Menambahkan properti di tengah bulan diprorata oleh
Stripe sebagaimana biasa.

**Menghapus properti tidak mengembalikan uang bulan itu.** Tagihan yang sudah dibayar untuk bulan
berjalan tetap ada di riwayat penagihan Anda — itu dinyatakan pada konfirmasi penghapusan.

## Mengelola pembayaran

**Kelola pembayaran** membuka portal Stripe, tempat Anda memperbarui kartu dan mengunduh faktur.
Fakturnya milik Stripe, dan itulah dokumen yang diinginkan akuntan Anda.

## Jika pembayaran gagal

Stripe mencoba lagi sesuai jadwalnya dan Anda mendapat notifikasi. Jika terus gagal, fitur dibatasi
bertahap alih-alih workspace menghilang — data Anda tetap, dan sinkronisasilah yang berhenti lebih
dulu. Perbaiki kartunya dan semuanya berjalan lagi.

## Paket lama

Jika Anda mendaftar di bawah daftar harga sebelumnya, harga itu tetap berlaku. Perpindahan paket
adalah sesuatu yang Anda lakukan sengaja, bukan sesuatu yang dilakukan perubahan harga kepada Anda.

## Membatalkan

Batalkan dari layar Penagihan. Akses berlanjut sampai akhir periode berbayar. Listing channel Anda
tidak terpengaruh — membatalkan Santara tidak menyentuh akun Airbnb atau Booking.com Anda, tetapi ia
mengakhiri sinkronisasi yang menyelaraskan kalendernya, jadi tutup atau rekonsiliasi kalender Anda
sebelum pergi.
