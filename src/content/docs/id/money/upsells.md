---
title: Upsell
description: Late check-out, kedatangan awal, dan malam tambahan yang ditemukan dari kalender dan ditawarkan sebelum tamu memikirkannya.
sidebar:
  order: 3
---

![Layar Upsell: nilai yang tercatat bulan ini, potensi aktif, jumlah yang siap pesan dan segera kedaluwarsa, penawaran per kamar dengan peluang teratasnya, dan Antrean manajer dengan tombol Kirim semua.](/screens/upsells.id.png)

Upsell adalah malam atau jam yang sudah Anda miliki, dijual kepada tamu yang sudah menginap. Santara AI
menemukannya dengan membaca kalender, bukan dengan menebak keinginan tamu.

## Yang dicarinya

Tiga tawaran, masing-masing aturan yang bisa Anda nyalakan, matikan, dan beri harga di
[Pengaturan](#pengaturan):

| Tawaran | Kapan ditawarkan | Harganya |
| --- | --- | --- |
| **Check-in lebih awal** | Pada hari kedatangan, jika malam sebelumnya kosong | Persentase dari satu malam |
| **Check-out terlambat** | Pada pagi hari check-out, jika tidak ada tamu yang datang hari itu | Persentase dari satu malam |
| **Perpanjangan masa inap** | Sebelum check-out, jika malam berikutnya kosong | Harga per malam dikurangi diskon |

Semuanya digerakkan kalender dan deterministik: bila malamnya benar-benar kosong dan waktunya cocok,
peluangnya ada. Bila tidak, tidak ada tawaran yang dibuat.

## Menggarap pipeline

Layar **Upsell** dibuka dengan empat angka — **Tercatat bulan ini**, **Potensi aktif**, **Siap pesan**,
dan **Segera kedaluwarsa** — lalu **Penawaran per kamar**: kamar dengan nilai terbesar lebih dulu,
masing-masing dengan **Peluang Teratas**-nya, yang paling cepat kedaluwarsa lebih dulu. Buka sebuah
peluang untuk melihat:

- **Fakta di baliknya** — reservasinya, malam kosongnya, tarif yang menjadi dasarnya.
- **Alasan direkomendasikan** — sinyal dan keyakinan di balik skornya.
- **Kendala waktu** — jendela operasional, konflik, dan apa pun yang menekannya (pembersihan yang
  dijadwalkan pagi itu, booking yang baru masuk).
- **Tinjau penawaran**, yang membuka draf pesan untuk tamu di [Pesan](/id/daily/messages/), siap
  dikirim.

Angka pendapatan dan okupansi tidak ada di layar ini; semuanya ada di **Laporan → Kinerja**.

### Mengirim beberapa sekaligus

**Antrean manajer** menampilkan tawaran yang pesannya sudah siap. **Kirim semua** membuka **Kirim pesan
upsell** dengan tawaran bernilai tertinggi tiap tamu sudah terpilih — satu tawaran per tamu. Ganti
pilihannya atau hapus centang, lalu tekan **Kirim semua**: pesan dikirim satu per satu, progres tiap
tamu terlihat, dan **Berhenti** menghentikan sisanya.

## Apa yang terjadi kalau tamu setuju

Anda memperpanjang atau menyesuaikan masa menginap di [Reservasi](/id/daily/bookings/) atau
[kalender](/id/daily/calendar/). Malamnya tertutup di semua channel seperti biasa, dan pendapatan
tambahannya muncul di [Laporan](/id/money/reports/).

Santara AI tidak mengubah reservasi diam-diam atas nama Anda.

## Di mana lagi tawaran muncul

- Di [ringkasan harian](/id/daily/) — peluang bernilai tertinggi untuk tamu hari ini.
- Di [Pesan](/id/daily/messages/) — sebagai prompt pada utas yang relevan.

## Saat tamu meminta lebih dulu

Tamu yang sudah mengonfirmasi pemesanannya di [buku panduan tamu](/id/setup/guidebook/) bisa meminta
check-in lebih awal, check-out lebih lambat, atau tambah satu malam sendiri, dari stiker QR di
kamarnya. Permintaan masuk ke sini dengan status **Diterima**, pada harga yang ditampilkan buku panduan,
dan tim mendapat notifikasi. Permintaan itu sudah lolos pemeriksaan kalender yang sama dengan tawaran
yang terdeteksi, tetapi pemesanan tidak berubah sampai Anda menyesuaikan masa inapnya.

## Pengaturan

Tab **Pengaturan** di Upsell mengatur tiap tawaran sekali untuk seluruh ruang kerja:

- **Aktif / Mati** untuk masing-masing dari tiga tawaran.
- **Harga (% dari satu malam)** untuk check-in lebih awal dan check-out terlambat, dihitung dari tarif
  kalender malam itu; **Diskon (% dari harga per malam)** untuk perpanjangan masa inap.
- **Waktu yang ditawarkan** — check-in paling awal atau check-out paling lambat yang Anda tawarkan.
- **Pesan untuk tamu** — teks yang dibaca tamu, terisi pesan bawaan Santara AI dalam bahasa ruang
  kerja Anda. Sisipkan kolom seperti nama tamu, harga, atau jam; harga wajib ada. **Kembalikan ke
  bawaan** memulihkan pesan bawaan.

Setiap kamar mengikuti pengaturan ini kecuali Anda memberi kamar pengaturannya sendiri: buka kamar dari
[Properti](/id/setup/properties/) dan ubah aturan upsell-nya di sana. **Simpan pengaturan** berlaku
untuk tawaran baru mulai deteksi berikutnya.

## Tidak ada yang dikirim otomatis

Setiap tawaran adalah draf. Anda yang mengirim — satu per satu, atau beberapa sekaligus dengan
**Kirim semua**. Tamu yang menerima tawaran otomatis untuk malam yang
lima menit lalu baru dipesan orang lain akan menulis ulasan tentang itu — karena itulah bagian ini
tetap manual.
