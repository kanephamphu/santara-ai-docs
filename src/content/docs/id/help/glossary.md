---
title: Glosarium
description: Setiap istilah yang dipakai Santara AI di layar, dalam satu tempat.
sidebar:
  order: 10
---

**ADR** — tarif harian rata-rata. Pendapatan dibagi malam yang terjual.

**AI Agents** — kru enam agen yang dipimpin Santi — Sunny, Lulu, Penny, Loop, Kiko, dan Bubbles —
masing-masing mengawasi satu bagian bisnis. **AI Agents** di sidebar membuka halaman kru, dengan
**Perlu Anda** di bagian atas. Agen hanya membaca. Lihat [Kru AI Agents](/id/help/assistant/#kru-ai-agents).

**Asisten AI (ChatGPT, Claude)** — aplikasi AI luar yang terhubung ke workspace Anda, sehingga Anda bisa
bertanya soal kalender, booking, dan pembersihan dari aplikasi chat yang sudah Anda pakai. Pesan ke
tamu dan booking menunggu persetujuan Anda; penagihan, pengaturan, tim, dan channel tidak pernah
terbuka baginya. Lihat [Hubungkan ChatGPT, Claude, atau Grok](/id/help/ai-assistants/).

**Balas otomatis** — tab di Pesan tempat Santi boleh menjawab sendiri pertanyaan tamu yang sederhana:
**Nonaktif**, **Uji coba**, atau **Aktif**. Nonaktif sampai pemilik atau admin menyalakannya; urusan
uang, perubahan tanggal, keluhan, dan keadaan darurat selalu diserahkan kepada Anda. Lihat
[Balas otomatis](/id/daily/messages/#balas-otomatis).

**Kapabilitas** — izin bernama seperti `stay.read` atau `pricing.write`. Peran adalah kumpulan
kapabilitas; layar dan rute API meminta yang sama. Lihat [Tim dan peran](/id/setup/team/).

**Channel** — tempat Anda berjualan: Airbnb, Booking.com, Agoda, Expedia, dan channel lain di katalog, situs booking Anda sendiri. Di aplikasi, channel disebut **Saluran**, dan semuanya dikelola di **Pengaturan → Saluran**.

**Klaster kebersihan** — kelompok kamar yang ditangani satu petugas, sering kali tersebar di beberapa
bangunan. Kamar dengan nama **Grup pembersihan** yang sama membentuk satu klaster. Ringkasan harian
membagi bagian kebersihannya per klaster, masing-masing dengan menu **Bagikan** (Zalo, WhatsApp,
Messenger, Telegram, SMS, email) yang hanya berisi rencana klaster itu. Lihat
[Klaster kebersihan](/id/daily/tasks/#klaster-kebersihan).

**Grup pembersihan** — pengaturan di halaman kamar yang memasukkannya ke sebuah klaster kebersihan.
Diatur per kamar, bukan per bangunan.

**Koneksi** — satu akun channel yang tertaut. Satu workspace bisa punya banyak.

**Ringkasan harian** — hari itu ditulis: risiko, kedatangan, kebersihan, pendapatan. Dibuat untuk
workspace dalam bahasa workspace, dikirim lewat email pukul 06.00 secara default, dan tampil di tab
**Ringkasan** pada **Hari ini**. Lihat [Hari ini dan ringkasan harian](/id/daily/).

**Petugas default** — petugas kebersihan yang otomatis menerima pembersihan baru sebuah kamar. Diatur
per kamar di tab **Petugas default** pada Tugas; tidak ada default per bangunan. Lihat
[Petugas bawaan per kamar](/id/daily/tasks/#petugas-bawaan-per-kamar).

**Booking langsung** — booking lewat situs Anda sendiri.

**Go live** — tindakan sengaja yang menyerahkan kendali kalender sebuah listing ke Santara AI. Lihat
[Go live](/id/channels/going-live/).

**Biaya pemesanan tamu** — biaya opsional di [situs booking langsung](/id/setup/booking-site/#5-hubungkan-stripe)
Anda, **dibayar oleh tamu** di atas harga menginap dan ditampilkan sebagai baris tersendiri. Mati
secara default, dan hanya untuk booking langsung yang dibayar online saat checkout — tidak pernah untuk
permintaan booking. Santara AI tidak mengambil komisi atas booking dari channel maupun upsell. Lihat
[Komisi](/id/setup/billing/#komisi).

**Buku panduan** — halaman yang dibuka tamu dari stiker QR di kamarnya: info properti, tempat sekitar,
dan layanan tambahan untuk siapa saja; kode pintu hanya untuk tamu yang sudah mengonfirmasi pemesanan.
Lihat [Buku panduan tamu dan stiker QR](/id/setup/guidebook/).

**Gross** — yang dibayar tamu, termasuk komisi channel.

**Selesai** — utas tamu yang tidak punya urusan tertunda. Salah satu dari tiga status utas, bersama
**Perlu dibalas** dan **Menunggu tamu**; **Tandai selesai** mengaturnya, dan utas kembali terbuka saat
tamu menulis lagi. Lihat [Satu status per utas](/id/daily/messages/#satu-status-per-utas).

**Strip kesehatan** — strip di bagian atas setiap halaman saat koneksi channel atau sinkronisasi butuh
perhatian Anda: satu baris per masalah, masing-masing dengan **Perbaiki**. Tidak muncul bila semuanya
berjalan. Lihat [Di mana masalah terlihat](/id/channels/troubleshooting/#di-mana-masalah-terlihat).

**Impor data saluran** — tombol di sebuah properti yang menarik reservasi, kalender, pesan, dan detail
listing terbaru dari channel. Bila channel menyimpan sebuah nilai, nilai itu menggantikan milik
properti. Lihat [Menyinkronkan dari channel](/id/setup/properties/#menyinkronkan-dari-channel).

**Masalah** — tab di **Tugas** tempat tiket berada: keluhan dan perawatan, dari **Akan dikerjakan**
sampai **Selesai**. Tidak ada lagi menu Tiket tersendiri di sidebar. Lihat
[Masalah (tiket)](/id/daily/tickets/).

**Terlambat** — lihat **Menunggu / Terlambat**.

**Listing** — satu objek di channel, dipetakan satu-ke-satu ke kamar Santara AI.

**Harga manual** — tarif per malam yang Anda ketik. Dilindungi dari mesin pricing kecuali Anda
mengizinkan penimpaan.

**Pemetaan** — tautan antara listing channel dan kamar Santara AI.

**Perlu Anda** — filter tempat kotak masuk dibuka: utas tamu yang menunggu sesuatu dari Anda. Halaman
AI Agents juga punya daftar **Perlu Anda**. Di kotak masuk, **Tandai semua selesai** membersihkannya
sekaligus. Lihat [Apa yang ditampilkan daftar](/id/daily/messages/#apa-yang-ditampilkan-daftar).

**Belum ada kamar** — baris abu-abu di kalender, di bawah sebuah properti, berisi masa menginap yang
tidak berada di kamar mana pun milik properti itu. Hanya muncul bila memang ada; booking dari channel
di sana biasanya berarti listing salah dipetakan. Lihat [Cara membacanya](/id/daily/calendar/#cara-membacanya).

**Notifikasi** — lonceng. Ada enam belas jenis, mencakup booking (termasuk **Kelebihan pesanan**),
kebersihan, tiket, channel, permintaan tamu, dan asisten AI, masing-masing dikirim ke siapa pun yang
bisa menindaklanjutinya. Lihat [Notifikasi](/id/setup/workspace/#notifikasi).

**Okupansi** — malam terjual dibagi malam tersedia.

**Kelebihan pesanan** — sebuah kamar menampung lebih banyak masa menginap daripada unitnya pada
beberapa malam, sehingga satu masa menginap harus dipindah. Tampil sebagai banner merah di Reservasi,
lencana di setiap masa menginap, batang merah di kalender, dan notifikasi di lonceng. Lihat
[Kelebihan pesanan](/id/daily/bookings/#kelebihan-pesanan).

**Laporan pemilik** — satu-satunya layar di Laporan: untuk satu bulan, pendapatan bruto pemesanan,
biaya tiap channel, biaya, dan **Bersih untuk pemilik** yang tersisa. Lihat
[Laporan pemilik](/id/money/reports/#laporan-pemilik).

**Payout / bersih** — yang benar-benar dibayarkan channel kepada Anda. Inilah arti **pendapatan** di
Santara AI.

**Properti** — bangunan atau alamat. Memuat kamar.

**Rate plan** — harga sebuah kamar beserta aturannya: minimum menginap, tamu termasuk, harga tamu
tambahan, ketentuan pembatalan.

**Target balasan** — seberapa cepat tamu sebaiknya dibalas pada momen menginap itu: 10 menit di hari
check-in, 30 menit saat menginap, 60 menit untuk pertanyaan, dan seterusnya. Melewatinya mengubah
**Menunggu** menjadi **Terlambat**. Lihat
[Berapa lama tamu sudah menunggu](/id/daily/messages/#berapa-lama-tamu-sudah-menunggu).

**RevPAN** — pendapatan per malam tersedia: pendapatan dibagi seluruh malam yang harus dijual. Angka
penilai pricing.

**Kamar** — unit yang bisa dipesan. Yang dipesan tamu, yang dipetakan channel, yang ditagihkan.

**Rule set** — kumpulan aturan pricing: musim, premi harian, acara. Dipakai bersama lintas listing.

**Santi** — asisten AI di dalam Santara AI, di samping lonceng di setiap layar. Santi membaca workspace
Anda, memimpin kru AI Agents, dan hanya mengubah sesuatu setelah Anda menekan **Konfirmasi**. Lihat
[Tanya Santi](/id/help/assistant/).

**Masa menginap** — sebuah reservasi. Disebut juga booking. Daftarnya ada di **Reservasi**.

**Tiket** — masalah yang dilacak: keluhan, perbaikan, pekerjaan. Ada di **Tugas → Masalah**. Internal;
tamu tidak pernah melihatnya. Lihat [Masalah (tiket)](/id/daily/tickets/).

**Turnover** — pembersihan antara check-out dan kedatangan berikutnya. Dibuat otomatis semalam
sebelumnya.

**Jumlah unit** — berapa unit identik yang diwakili sebuah kamar. Batas keras ketersediaan.

**Upsell** — malam tambahan, late check-out, atau kedatangan awal yang dijual ke tamu yang sedang
menginap.

**Menunggu / Terlambat** — label pada utas yang menunggu balasan Anda: **Menunggu 12 mnt**, lalu
**Terlambat · 40 mnt** begitu melewati [target balasan](/id/daily/messages/#berapa-lama-tamu-sudah-menunggu)
untuk momen menginap itu.

**Workspace** — satu portofolio: propertinya, timnya, penagihannya, situs booking-nya. Tidak ada yang
dibagi antar workspace.
