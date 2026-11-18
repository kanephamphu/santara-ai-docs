---
title: Hari ini dan ringkasan harian
description: Layar yang Anda buka tiap pagi — siapa datang, apa yang butuh keputusan, dan ringkasan yang ditulis untuk Anda dan tim.
sidebar:
  order: 1
---

**Hari ini** adalah layar bawaan. Ada dua tab: **Ringkasan**, yang terbuka lebih dulu dan berisi hari
itu ditulis dalam kalimat, dan **Ikhtisar**, yang berisi angka dan jadwal hari ini.

![Hari ini, di tab Ringkasan: hari itu dituliskan, dengan yang butuh keputusan di urutan pertama.](/screens/today.id.png)

## Ringkasan

Tab **Ringkasan**. Ringkasan dibuat untuk workspace Anda setiap hari dan dikirim ke email Anda — pukul **06.00** di
zona waktu workspace secara bawaan, atau jam mana pun yang Anda pilih — dalam **bahasa** yang Anda
atur di [pengaturan workspace](/id/setup/workspace/#preferensi-operasional). Ringkasan yang sama ada
di layar ini, dan diperbarui seiring hari berjalan. Satu lembar padat, dengan urutan:

1. **Strip kepala** — tanggal, jumlah kedatangan, keberangkatan, dan pergantian tamu hari ini, serta
   seberapa penuh hari petugas kebersihan Anda.
2. **Kartu skor** — pendapatan hari ini, okupansi, dan tarif rata-rata per malam, masing-masing
   dibanding bulan berjalan.
3. **Insight AI** — satu kartu per tamu atau masalah yang membutuhkan sesuatu, berisi apa yang
   terjadi dan apa yang perlu dilakukan: check-out berisiko, pertanyaan belum dijawab, keluhan yang
   menumpuk selama tiga pesan, pembersihan tanpa petugas, tiket yang masih terbuka. Tiap kartu
   menautkan ke utas atau reservasinya.
4. **Peluang upsell** — late check-out, check-in awal, dan malam tambahan yang benar-benar muat di
   kalender, masing-masing dengan harga dan pesan yang siap dikirim.
5. **Kebersihan, tiga hari ke depan** — dikelompokkan per
   [klaster kebersihan](/id/daily/tasks/#klaster-kebersihan). Tiap klaster punya menu **Bagikan**
   dengan rencana hari itu yang sudah dituliskan — kirim ke Zalo, WhatsApp, Messenger, Telegram, SMS,
   atau email, atau salin. Petugas yang punya alamat email juga menerima email Ringkasan
   Petugas Kebersihan sendiri secara otomatis, tanpa angka pendapatan.
6. **Besok** — satu baris berisi kedatangan, keberangkatan, dan pergantian tamu besok.

Tidak ada isi ringkasan yang terkirim sendiri ke tamu atau petugas: setiap pesan menunggu Anda
mengirimnya.

### Menandai sudah ditinjau

Tekan **Tandai semua ditinjau** setelah Anda membacanya. Itu sinyal untuk tim bahwa sudah ada yang melihat, bukan
skor penyelesaian — tidak ada yang disembunyikan setelahnya.

### Membagikannya

**Bagikan** menulis pesan untuk channel yang Anda pilih — email, WhatsApp, atau SMS —
berisi sorotan hari ini dan tautan ke ringkasan lengkap. Tiap channel mendapat teks yang ditulis
untuknya, bukan satu paragraf yang ditempel tiga kali.

Tautannya membuka ringkasan penuh di Santara AI, jadi penerima butuh akun dengan akses ke workspace ini.
Untuk petugas kebersihan yang tidak boleh melihat portofolio, bagikan **pesan klaster** saja: isinya
hanya pekerjaan mereka.

### Bahasa dan waktu

Ringkasan ditulis dalam bahasa workspace dan dikirim pada jam yang Anda pilih (06.00 kecuali Anda
mengubahnya), keduanya diatur di [Pengaturan workspace](/id/setup/workspace/). Pengertian "hari ini" mengikuti zona waktu workspace —
yang lebih penting daripada kedengarannya, karena ringkasan dengan zona waktu salah melaporkan
check-out kemarin.

**Pendapatan berarti payout bersih** — yang benar-benar dibayarkan channel. Selalu diberi label.
Lihat [Laporan](/id/money/reports/).

## Ikhtisar

Tab **Ikhtisar** berisi hal yang ditindaklanjuti manajer sebelum makan siang. Tiga kartu:

| Kartu | Yang dihitung |
| --- | --- |
| **Terisi malam ini** | Porsi unit Anda yang ada tamunya malam ini |
| **Check-in hari ini** | Check-in hari ini, dengan jumlah check-out hari ini di bawahnya |
| **Menunggu balasan** | Percakapan tamu yang belum dijawab |

Di bawahnya: linimasa hari ini (check-out, pembersihan, check-in), pembersihan hari ini, dan — bila
ada yang menunggu — satu baris seperti *"3 tamu menunggu balasan"* yang membuka
[Pesan](/id/daily/messages/).

Tidak ada kartu pendapatan di sini. Urusan uang ada di [Laporan](/id/money/reports/).

## Notifikasi

Apa pun yang membutuhkan Anda saat tidak melihat layar ini memunculkan notifikasi di menu lonceng.
Ada enam belas jenis, dan itulah hal-hal yang benar-benar mengubah hari Anda:

| | |
| --- | --- |
| **Booking** | Booking baru, booking berubah, pembatalan, dan **Kelebihan pesanan** — kamar terjual melebihi unit yang tersedia, sehingga satu menginap harus dipindah |
| **Kebersihan** | Pembersihan ditugaskan kepada Anda, pembersihan selesai |
| **Tiket** | Tiket dibuka, ditugaskan kepada Anda, sedang dikerjakan, atau selesai |
| **Saluran** | Saluran terhubung; saluran menolak pembaruan; peringatan sinkronisasi dari saluran |
| **Permintaan tamu** | Tamu meminta layanan tambahan dari [buku panduan tamu](/id/setup/guidebook/) |
| **Asisten AI** | Asisten luar yang perlu persetujuan Anda, atau yang membuat perubahan |

Notifikasi dialamatkan berdasarkan **siapa yang bisa menindaklanjuti**, bukan berdasarkan nama, jadi
manajer yang ditambahkan bulan depan langsung menerima yang memang ditujukan bagi perannya. Selengkapnya
di [Pengaturan workspace](/id/setup/workspace/#notifikasi).
