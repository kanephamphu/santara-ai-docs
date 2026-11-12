---
title: Data dan privasi Anda
description: Apa yang disimpan Santara AI, siapa di dalam workspace Anda yang bisa melihatnya, apa yang keluar, cara mengeluarkannya, dan apa yang terjadi saat Anda menghapus sesuatu.
sidebar:
  order: 10
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
Tidak ada orang di Santara AI yang bisa membaca kata sandi Anda, dan kami pun tidak bisa
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
- **Setiap perubahan yang ia buat diusulkan dulu dan menunggu persetujuan Anda.** Ia bebas membaca,
  tetapi apa pun yang mengubah sesuatu — mengirim balasan ke tamu, membuat tiket, menugaskan
  pembersihan atau tiket, mengubah status tiket, atau membuat, mengubah, atau membatalkan reservasi
  — muncul sebagai kartu yang Anda konfirmasi. Tidak ada yang terjadi sampai Anda menekan
  **Konfirmasi**. Ia tidak bisa mengubah harga, menayangkan listing, atau memindahkan uang.

Pesan tamu, ringkasan, dan draf diproses oleh **penyedia model AI pihak ketiga** berdasarkan
kontrak, seperti dijelaskan [kebijakan privasi](https://www.santara.ai/id/privasi/). Keluaran AI
bisa salah — ringkasan, draf, dan sinyal harga semuanya hal yang Anda tinjau sebelum ditindaklanjuti.
Tidak ada yang terkirim ke tamu kecuali Anda menekan kirim atau mengonfirmasinya — atau Anda
sendiri yang menyalakan balas otomatis.

Jika Anda [menghubungkan ChatGPT atau Claude](/id/help/ai-assistants/), asisten itu menjangkau
workspace Anda lewat `mcp.santara.ai` dengan izin Anda, dan apa yang dibacanya diproses oleh
penyedia asisten itu di bawah akun Anda sendiri di sana.

## Saat staf Santara AI membuka workspace Anda

Untuk memperbaiki masalah yang Anda laporkan, staf Santara AI bisa membuka workspace Anda dengan
**akses admin**. Akses itu:

- **Berlaku paling lama 2 jam**, lalu berakhir sendiri. Staf bisa keluar lebih awal.
- **Dicatat setiap kali** — siapa membuka workspace mana, kapan, dan mengapa — di log audit.
- **Ditampilkan kepada mereka sebagai banner merah** di bagian atas setiap layar selama akses
  berlangsung, yang mengingatkan bahwa perubahan yang mereka buat itu nyata.

Staf tidak pernah ditambahkan ke daftar tim Anda, dan tidak menerima notifikasi atau ringkasan Anda.

## Apa yang keluar dari workspace Anda

| Tujuan | Apa, dan kenapa |
| --- | --- |
| **Channel booking Anda** — Airbnb, Booking.com, Google Hotel, dan channel lain yang Anda hubungkan | Ketersediaan, tarif, dan restriksi keluar, ditambah konten properti: foto, deskripsi, kebijakan rumah dan pembatalan, fasilitas. Booking, tamu, pesan, dan ulasan masuk. Semuanya lewat penyedia konektivitas channel kami |
| **Penyedia model AI** | Teks yang dibutuhkan untuk menulis ringkasan, draf balasan, atau menilai peluang |
| **Asisten AI yang Anda hubungkan** — ChatGPT, Claude | Apa yang Anda atau tim Anda tanyakan kepadanya, lewat `mcp.santara.ai` — lihat [Hubungkan ChatGPT, Claude, atau Grok](/id/help/ai-assistants/) |
| **Stripe** | Kartu Anda, untuk langganan. Santara AI tidak pernah melihat nomornya |
| **Stripe, akun Anda sendiri** | Pembayaran booking langsung — lihat di bawah |
| **Email** | Undangan, kode verifikasi dan atur ulang, serta apa pun yang Anda kirim sendiri |

Tidak ada yang lain. Tidak ada jaringan iklan dan tidak ada pialang data dalam daftar ini.

## Uang di situs booking Anda

Pembayaran dari [situs booking langsung](/id/setup/booking-site/) masuk **ke akun Stripe Anda
sendiri**, bukan ke akun kami. Santara AI tidak pernah memegang uang tamu.

Santara AI mengambil **3% komisi** atas booking langsung.

## Mengeluarkan data Anda

- **Laporan** — laporan pemilik beserta biayanya diekspor sebagai CSV lewat
  [Unduh CSV](/id/money/reports/#unduh-csv), untuk periode dan kumpulan listing apa pun.
- **Tagihan** — dari portal Stripe sendiri, lewat
  [Mengelola pembayaran](/id/setup/billing/#mengelola-pembayaran).
- **Dokumentasi ini** — setiap halaman juga tersedia sebagai markdown, kalau Anda mau manualnya
  sendiri ([Menggunakan dokumentasi ini dengan alat AI](/id/help/for-ai-tools/)).

Untuk ekspor penuh di luar laporan — atau untuk menghapus seluruh workspace — kirim email ke
**hello@santara.ai**. Sebutkan workspace-nya.

## Apa yang sebenarnya terhapus

Layak dibaca sebelum menekan apa pun, karena dampaknya berbeda-beda:

| Tindakan | Yang hilang | Yang tidak tersentuh |
| --- | --- | --- |
| **Hapus satu listing** | Reservasi, pesan, tamu, dan ulasan hasil impor untuk kamar itu | Listing di Airbnb atau Booking.com |
| **Putuskan sebuah akun** | Hal yang sama, untuk setiap listing di koneksi itu; sinkronisasi berhenti | Semua yang ada di sisi channel |
| **Hapus sebuah properti** | Properti, kamarnya, reservasi, kalender, dan pesannya, serta listing terhubungnya di Santara AI | Tidak ada pengembalian dana untuk bulan berjalan |
| **Keluarkan anggota tim** | Aksesnya, seketika, di setiap perangkat | Pekerjaannya tetap tercatat atas namanya |
| **Batalkan langganan** | Tidak ada, sampai periode berbayar berakhir | Listing channel Anda tetap jalan di channel |

Dua di antaranya sering mengejutkan:

- **Menghapus lalu mengimpor ulang sebuah listing mengembalikan riwayatnya** pada sinkronisasi
  berikutnya. Tindakan ini tidak sedestruktif kedengarannya — channel masih memegang datanya.
- **Menghapus anggota tim tidak menghapus pekerjaannya.** Pembersihan yang ia tandai selesai dan
  pesan yang ia kirim tetap tercatat atas namanya. Itu disengaja; riwayat operasional yang menulis
  ulang dirinya saat seseorang pergi bukanlah riwayat.

Menghapus properti yang masih terhubung ke channel akan **ditolak** — putuskan channel-nya dulu,
supaya sisi channel ikut dibereskan alih-alih ditinggal menunjuk kamar yang sudah tidak ada.

## Menghapus akun Anda

Anda bisa menghapus akun Anda sendiri lewat web: masuk di
[santara.ai/delete-account](https://www.santara.ai/delete-account/?lang=id) lalu ketik email Anda untuk konfirmasi.
Aplikasi seluler tidak menghapus akun.

Yang terjadi:

1. Anda **langsung keluar dari semua perangkat**, dan akun tidak dapat masuk lagi.
2. Tim kami meninjau permintaan dan **menyelesaikannya dalam 30 hari**.
3. Nama, email, nomor telepon, foto, dan kata sandi Anda dihapus. Booking, faktur, dan catatan lain
   dari workspace tempat Anda bekerja **disimpan untuk akuntansi, dianonimkan** — tanpa data pribadi
   Anda.

Jika Anda **satu-satunya pemilik** workspace yang dipakai orang lain, jadikan orang lain pemilik
terlebih dahulu; permintaan ditolak sampai Anda melakukannya. Tidak bisa masuk? Kirim email ke
**support@santara.ai** dari alamat akun Anda dan tim kami akan menghapusnya.

## Kalau penagihan tertunggak

Data Anda tidak hilang, dan tidak ada yang dihapus.

- **Masa uji coba gratis yang berakhir tanpa kartu** tetap mendapat akses penuh selama **7 hari
  lagi**. Setelah itu workspace menjadi **hanya-baca** — semuanya masih ada, Anda hanya tidak bisa
  mengubahnya sampai memilih paket.
- **Perpanjangan yang gagal** mendapat masa tenggang singkat untuk memperbaiki kartu, lalu workspace
  menjadi hanya-baca dengan cara yang sama.
- **Setelah 30 hari hanya-baca**, pekerjaan latar belakang juga dijeda: ringkasan harian,
  sinkronisasi harga malam hari, serta booking dan pesan baru yang masuk dari channel Anda. Listing
  Anda tetap berjalan di channel itu sendiri.

Bayar, dan semuanya berjalan lagi — termasuk booking dan pesan yang masuk selama jeda. Lihat
[Jika pembayaran gagal](/id/setup/billing/#jika-pembayaran-gagal).

## Data tamu juga tanggung jawab Anda

Santara AI menyimpannya; Anda yang memutuskan siapa di tim Anda yang bisa menjangkaunya. Dua kebiasaan
yang layak dibangun:

- **Undang orang dengan benar, jangan berbagi login.** Login bersama membuat semua keputusan kontrol
  akses di atas tidak bermakna, dan menghancurkan catatan siapa mengerjakan apa.
- **Batasi orang ke bangunan yang mereka kerjakan.** Tidak ada biayanya, dan itulah bedanya antara
  petugas kebersihan yang melihat satu alamat dan yang melihat seluruh portofolio Anda.
