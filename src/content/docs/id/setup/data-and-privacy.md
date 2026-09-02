---
title: Data dan privasi Anda
description: Apa yang disimpan Santara, siapa di dalam workspace Anda yang bisa melihatnya, apa yang keluar, cara mengeluarkannya, dan apa yang terjadi saat Anda menghapus sesuatu.
sidebar:
  order: 9
---

Anda memasukkan data tamu ke perangkat lunak milik orang lain. Halaman ini adalah jawaban
operasional atas apa artinya itu — apa yang disimpan, siapa yang bisa menjangkaunya, dan cara
mengambilnya kembali.

Dokumen hukumnya adalah [kebijakan privasi](https://www.santara.ai/id/privasi/). Halaman ini adalah
cara kerjanya dalam praktik.

## Siapa yang mengendalikannya

Santara AI adalah produk **AirCierge AI LLC**, terdaftar di Wyoming, Amerika Serikat, dengan tim
operasional di Da Nang, Vietnam. Pertanyaan dan permintaan data ditujukan ke **hello@santara.ai**,
atau lewat [dukungan](/id/help/support/) dari dalam produk, yang datang lengkap dengan konteks
workspace Anda.

**Data host dan tamu Anda tidak dijual.** Tidak kepada siapa pun, dalam bentuk apa pun.

## Apa yang disimpan

Kira-kira, semua yang dibutuhkan produk ini untuk menjalankan hari Anda:

| Jenis | Contoh |
| --- | --- |
| **Properti** | Bangunan, kamar, foto, aturan rumah, wifi, kode pintu, catatan akses |
| **Komersial** | Tarif, rate plan, ketersediaan, aturan pricing, biaya, laporan pemilik |
| **Reservasi** | Menginap, tanggal, status, bruto, pendapatan kamar, payout bersih |
| **Tamu** | Nama, kontak jika dibagikan channel, riwayat menginap, pesan |
| **Operasional** | Pembersihan, tiket, catatan, siapa mengerjakan apa dan kapan |
| **Akun** | Nama, email, bahasa, zona waktu, dan hash kata sandi Anda |

Kata sandi disimpan sebagai **hash PBKDF2 dengan 310.000 iterasi**, tidak pernah sebagai teks.
Tidak ada orang di Santara yang bisa membaca kata sandi Anda, dan kami pun tidak bisa
memulihkannya — itulah sebabnya pengaturan ulang menerbitkan kata sandi baru alih-alih memberi tahu
yang lama.

## Siapa di dalam workspace yang bisa melihatnya

Bukan "semua orang yang punya login". Akses ditentukan di tiga sumbu terpisah, dan ketiganya harus
setuju:

1. **Kapabilitas** — setiap layar *dan setiap rute API* meminta izin bernama (`stay.read`,
   `pricing.write`, `guest.message.send`). Menyembunyikan menu bukanlah keamanannya; rutenya
   menolak tautan yang diketik manual.
2. **Cakupan** — bangunan dan kamar mana yang menjadi bagian seseorang. Anggota yang dibatasi tidak
   melihat sisa portofolio Anda sama sekali.
3. **Kelas data** — kode pintu, kontak tamu, dan angka keuangan masing-masing kelas tersendiri,
   terlepas dari layar tempatnya muncul.

Sumbu ketiga itulah yang sering terlewat. Itulah sebabnya petugas kebersihan bisa diberi tahu
bangunan mana tanpa diberi kode pintunya, dan seorang manajer bisa menjalankan operasional tanpa
melihat payout pemilik. Lihat
[Cara kerja akses sebenarnya](/id/setup/team/#cara-kerja-akses-sebenarnya).

**Tidak ada yang dibagi antar workspace, selamanya.** Kalau Anda menjalankan dua portofolio sebagai
dua workspace, keduanya dua dunia terpisah meskipun Anda masuk ke keduanya.

## Apa yang bisa dilihat AI

[Asisten](/id/help/assistant/) menjawab memakai workspace Anda — memang itu gunanya — tetapi dengan
batasan nyata:

- **Ia memakai izin Anda, bukan izinnya sendiri.** Petugas kebersihan yang bertanya soal pendapatan
  diberi tahu bahwa ia tidak punya akses, bukan diberi angka.
- **Workspace-nya berasal dari sesi Anda**, tidak pernah dari apa pun yang Anda atau ia ketik. Ia
  tidak bisa dibujuk pindah ke workspace lain.
- **Ia hanya-baca, dengan tepat satu pengecualian**: ia bisa *membuat draf* balasan untuk tamu. Ia
  tidak bisa mengirim pesan, mengubah harga, mengubah booking, menayangkan listing, atau memindahkan
  uang.

Pesan tamu, ringkasan, dan draf diproses oleh **penyedia model AI pihak ketiga** berdasarkan
kontrak, seperti dijelaskan [kebijakan privasi](https://www.santara.ai/id/privasi/). Keluaran AI
bisa salah — ringkasan, draf, dan sinyal harga semuanya hal yang Anda tinjau sebelum ditindaklanjuti.
Tidak ada yang terkirim ke tamu tanpa Anda menekan kirim.

## Apa yang keluar dari workspace Anda

| Tujuan | Apa, dan kenapa |
| --- | --- |
| **Airbnb / Booking.com** | Ketersediaan, tarif, dan restriksi keluar; booking, tamu, pesan, ulasan masuk — lewat penyedia konektivitas channel kami |
| **Penyedia model AI** | Teks yang dibutuhkan untuk menulis ringkasan, draf balasan, atau menilai peluang |
| **Stripe** | Kartu Anda, untuk langganan. Santara tidak pernah melihat nomornya |
| **Stripe, akun Anda sendiri** | Pembayaran booking langsung — lihat di bawah |
| **Email** | Undangan, kode verifikasi dan atur ulang, serta apa pun yang Anda kirim sendiri |

Tidak ada yang lain. Tidak ada jaringan iklan dan tidak ada pialang data dalam daftar ini.

## Uang di situs booking Anda

Pembayaran dari [situs booking langsung](/id/setup/booking-site/) masuk **ke akun Stripe Anda
sendiri**, bukan ke akun kami. Santara tidak pernah memegang uang tamu dan tidak pernah mengambil
komisi atas booking, di channel mana pun.

Satu-satunya tambahan pada booking langsung adalah **biaya layanan 3% yang dibayar tamu** di atas
tarif, dan itu opsional. Biaya itu tidak dipotong dari payout Anda.

## Mengeluarkan data Anda

- **Laporan** — setiap CSV di [pustaka laporan](/id/money/reports/#pustaka-laporan) dihasilkan dari
  data langsung saat Anda memintanya. Reservasi, pendapatan, okupansi, upsell, biaya, laporan
  pemilik.
- **Akuntansi** — laporan pemilik diekspor per periode dan per properti.
- **Tagihan** — dari portal Stripe sendiri, lewat
  [Mengelola pembayaran](/id/setup/billing/#mengelola-pembayaran).
- **Dokumentasi ini** — setiap halaman juga tersedia sebagai markdown, kalau Anda mau manualnya
  sendiri ([Menggunakan dokumentasi ini dengan alat AI](/id/help/for-ai-tools/)).

Untuk ekspor penuh di luar laporan — atau permintaan penghapusan — kirim email ke
**hello@santara.ai**. Sebutkan workspace-nya.

## Apa yang sebenarnya terhapus

Layak dibaca sebelum menekan apa pun, karena dampaknya berbeda-beda:

| Tindakan | Yang hilang | Yang tidak tersentuh |
| --- | --- | --- |
| **Hapus satu listing** | Reservasi, pesan, tamu, dan ulasan hasil impor untuk kamar itu | Listing di Airbnb atau Booking.com |
| **Putuskan sebuah akun** | Hal yang sama, untuk setiap listing di koneksi itu; sinkronisasi berhenti | Semua yang ada di sisi channel |
| **Hapus sebuah properti** | Properti dan kamarnya | Tidak ada pengembalian dana untuk bulan berjalan |
| **Keluarkan anggota tim** | Aksesnya, seketika, di setiap perangkat | Pekerjaannya tetap tercatat atas namanya |
| **Batalkan langganan** | Tidak ada, sampai periode berbayar berakhir | Listing channel Anda tetap jalan di channel |

Dua di antaranya sering mengejutkan:

- **Menghapus lalu mengimpor ulang sebuah listing mengembalikan riwayatnya** pada sinkronisasi
  berikutnya. Tindakan ini tidak sedestruktif kedengarannya — channel masih memegang datanya.
- **Menghapus anggota tim tidak menghapus pekerjaannya.** Pembersihan yang ia tandai selesai dan
  pesan yang ia kirim tetap tercatat atas namanya. Itu disengaja; riwayat operasional yang menulis
  ulang dirinya saat seseorang pergi bukanlah riwayat.

Menghapus properti yang masih punya listing terhubung akan **ditolak** — putuskan listing-nya dulu,
supaya sisi channel ikut dibereskan alih-alih ditinggal menunjuk kamar yang sudah tidak ada.

## Kalau penagihan tertunggak

Data Anda tidak hilang. Langganan yang tidak aktif membuat workspace menjadi **hanya-baca** —
semuanya masih ada, Anda hanya tidak bisa mengubahnya sampai penagihan beres. Sinkronisasilah yang
berhenti lebih dulu. Lihat [Jika pembayaran gagal](/id/setup/billing/#jika-pembayaran-gagal).

## Data tamu juga tanggung jawab Anda

Santara menyimpannya; Anda yang memutuskan siapa di tim Anda yang bisa menjangkaunya. Dua kebiasaan
yang layak dibangun:

- **Undang orang dengan benar, jangan berbagi login.** Login bersama membuat semua keputusan kontrol
  akses di atas tidak bermakna, dan menghancurkan catatan siapa mengerjakan apa.
- **Batasi orang ke bangunan yang mereka kerjakan.** Tidak ada biayanya, dan itulah bedanya antara
  petugas kebersihan yang melihat satu alamat dan yang melihat seluruh portofolio Anda.
