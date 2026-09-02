---
title: Arti pesan itu
description: Kata-kata persis yang ditampilkan Santara, apa maksudnya, dan apa perbaikannya. Cari kalimat yang sedang Anda lihat di halaman ini.
sidebar:
  order: 7
---

Pesan di sini dikutip sebagaimana produk menuliskannya, jadi Anda bisa mencari kalimat yang ada di
depan Anda. Kalau tidak ketemu, telusuri
[Kalau ada yang janggal](/id/help/troubleshooting/) atau
[Pemecahan masalah channel](/id/channels/troubleshooting/).

## Masuk

| Pesan | Artinya | Yang dilakukan |
| --- | --- | --- |
| *Email atau kata sandi salah.* | Persis itu. Tidak pernah disebutkan mana yang salah, dan itu disengaja | Coba lagi, atau pakai *Lupa kata sandi?* |
| *Too many failed attempts. Please try again later.* | Sepuluh percobaan gagal mengunci akun selama **15 menit** | Tunggu, atau atur ulang kata sandi — pengaturan ulang langsung menghapus kuncinya. Lihat [Kalau Anda terkunci](/id/setup/account/#kalau-anda-terkunci) |
| *Silakan verifikasi email sebelum masuk.* | Akunnya ada, tapi kode enam digit belum pernah dimasukkan | Periksa kotak masuk, termasuk spam. Minta kode baru kalau sudah kedaluwarsa |
| *Akun dengan email ini sudah ada.* | Anda pernah mendaftar, mungkin untuk workspace lain | Masuk saja — satu login bisa tergabung di banyak workspace |
| *Kode tidak sesuai.* | Kode atur ulang atau verifikasi salah | Baca ulang. Lima percobaan salah menghanguskan kodenya |
| *Kode ini sudah kedaluwarsa.* | Kode berlaku **15 menit** | Minta yang baru — bisa sekali semenit |
| *Terlalu banyak kode yang salah.* | Lima percobaan salah pada satu kode | Minta kode baru |
| *Kata sandi baru minimal 12 karakter.* | Panjang adalah satu-satunya aturan | Pakai yang lebih panjang |
| *Silakan masuk lagi.* | Sesi Anda berakhir — biasanya perubahan kata sandi di tempat lain, atau browser membersihkan cookie | Masuk lagi. Kalau berulang, lihat [Sesi saya terus berakhir](/id/help/troubleshooting/#sesi-saya-terus-berakhir) |

:::note
Pesan penguncian saat ini ditampilkan dalam bahasa Inggris meskipun sisa halaman masuk berbahasa
Indonesia.
:::

## Menghubungkan channel

| Pesan | Artinya | Yang dilakukan |
| --- | --- | --- |
| *Browser Anda memblokir popup. Izinkan popup lalu coba lagi.* | Airbnb meminta izin lewat jendela popup | Izinkan popup untuk situs ini, lalu tekan *Hubungkan Airbnb* lagi |
| *Otorisasi tidak selesai* | Anda menutup jendela Airbnb sebelum menyetujui. **Tidak ada yang terhubung** | Tekan *Coba lagi* |
| *Akun Airbnb ini sudah terhubung.* | Login Airbnb yang sama sudah ada di koneksi lain di workspace ini | Putuskan koneksi yang ada dulu, lalu hubungkan lagi. Lihat [Tambah akun lain](/id/channels/listings/#tambah-akun-lain) |
| *Akun ini sudah terhubung — mengarahkan Anda ke sana.* | Situasi yang sama, diselesaikan untuk Anda | Tidak perlu apa-apa. Anda mendarat di halaman koneksi yang ada |
| *sudah terhubung* (pada baris listing) | Listing itu sudah dipetakan ke sebuah kamar | Pilih listing lain, atau lepaskan yang sudah ada |
| *Tidak dapat memuat listing Airbnb Anda.* | Airbnb terjangkau tapi tidak mengembalikan apa pun | Tekan **Segarkan** pada koneksi. Kalau berulang, hubungkan ulang akunnya |
| *Tidak dapat memulai koneksi Airbnb.* | Handshake gagal sebelum Airbnb terjangkau | Coba lagi; kalau menetap, [hubungi dukungan](/id/help/support/) |
| *Tidak dapat memulai impor.* | Listing terbaca tapi pekerjaan impor tidak dimulai | Coba lagi. Tidak ada yang setengah jadi |
| *Tidak dapat menghubungkan properti Booking.com.* | Hotel ID ditolak, atau langkah extranet belum lengkap | Periksa ulang Hotel ID dan bahwa penyedia kami aktif di extranet — [Hubungkan Booking.com](/id/channels/booking-com/) |

## Impor dan pembacaan tarif

| Pesan | Artinya | Yang dilakukan |
| --- | --- | --- |
| *Sudah disiapkan — belum aktif* | Akhir impor yang normal dan benar. Terpetakan dan terbaca; **channel masih menjalankan kalendernya** | Periksa harga dan detail, lalu [Go live](/id/channels/going-live/) |
| *Kami tidak dapat membaca harga listing ini dengan aman, jadi kamar tetap memakai harganya sendiri.* | Harga di channel ambigu. Importer menolak alih-alih mengarang angka | Tetapkan harga pada kamar sebelum go live |
| *Airbnb belum membagikan harga listing ini.* | Airbnb belum menyerahkan harganya. Bukan error | Tidak perlu apa-apa — akan masuk pada sinkronisasi berikutnya |
| *Kami melepas tautan kanal untuk sementara… Tautan dibuat lagi otomatis begitu harga terbaca.* | Harga nol atau tak terbaca akan tayang ke listing aktif, jadi tautannya ditahan | Beri kamar itu harga sungguhan. Tautannya pulih sendiri |
| *Perlu diperiksa di Airbnb — ini terlihat tidak biasa* | Nilai yang terimpor tapi terlihat ganjil | Buka di Airbnb dan konfirmasi. Nilainya tetap berlaku di sana |
| *Tetap di Airbnb* | Pengaturan yang tidak punya padanan persis di sini | Tidak perlu apa-apa. Semuanya tetap bekerja di Airbnb |

## Go live

| Pesan | Artinya | Yang dilakukan |
| --- | --- | --- |
| *Airbnb belum selesai menautkan listing ini. Coba lagi sebentar.* | Penyiapan di sisi channel masih berjalan | Tunggu semenit, tekan **Go live** lagi |
| *Mata uang listing belum tersinkron. Coba lagi sebentar.* | Mata uang datang terpisah dan belum sampai | Tunggu beberapa menit, coba lagi |
| *Kamar ini belum punya penyiapan kanal. Impor ulang listing-nya.* | Pemetaan di sisi kami tidak lengkap | Hapus listing itu lalu impor lagi |
| *Airbnb tidak mengonfirmasi bahwa listing sudah aktif.* | Kami meminta; Airbnb tidak menjawab ya | Coba sekali lagi. Kalau berulang, [hubungi dukungan](/id/help/support/) |
| *Beberapa listing belum aktif. Semuanya tetap tersiapkan dan Anda bisa mencoba lagi.* | Hasil sebagian. Sisanya **sudah** aktif | Ulangi yang gagal; tidak ada yang hilang |
| *Kamar sudah dipetakan, tetapi channel belum aktif.* | Booking.com belum mengaktifkan koneksinya | Booking, ulasan, dan pesan tersinkron setelah aktivasi berhasil |

## Kamar dan rate plan Booking.com

| Pesan | Artinya | Yang dilakukan |
| --- | --- | --- |
| *…tetap tertaut tetapi tidak terpetakan — rate plan-nya tidak memasang harga untuk jumlah tamu yang diterima Booking.com* | Jumlah tamu di rate plan tidak cocok dengan okupansi yang diterima Booking.com. Kami tidak menebak pada listing aktif | Buka rate plan kamar itu, sesuaikan jumlah tamunya, petakan lagi |
| *…memakai satu mata uang tetapi hotel ini menagih dalam mata uang lain.* | Mata uang rate plan dan hotel tidak cocok | Perbaiki mata uang rate plan sebelum berharap harga terkirim |
| *Tersimpan di sini, tetapi Booking.com belum menerima pemetaan rate-nya.* | Sisi kami benar; sisi mereka tidak menerimanya | Simpan lagi. Kalau terus gagal, hubungkan ulang propertinya |
| *Tersimpan di sini, tetapi belum dikirim ke channel — konfirmasi kapasitas kamar ini dulu.* | Penahanan demi keamanan sebelum menulis ke listing aktif | Konfirmasi kapasitasnya, dan pastikan jumlah unitnya benar |
| *Kalender Anda ditulis ke listing aktif seketika…* | Bukan error — peringatan bahwa mengonfirmasi akan menutup malam-malam mendatang pada jumlah unit yang ditampilkan | Periksa jumlah unit sebelum mengonfirmasi. Satu apartemen adalah satu unit |
| *Tidak dapat mengubah properti tertaut.* | Penautan ulang tidak selesai | Coba lagi. Data yang sudah terimpor tetap di tempatnya |

## Kata status koneksi

Ini status, bukan error. Kosakata yang sama dipakai di semua channel.

| Status | Artinya |
| --- | --- |
| **Belum terhubung** | Belum ada akun channel yang tertaut |
| **Belum tertaut** | Kami melihat listing-nya; ia belum menunjuk kamar mana pun |
| **Terhubung — belum dipetakan** | Sama, dalam kata-kata layar Booking.com |
| **Tertaut — tarif belum dipetakan** | Terpetakan untuk ketersediaan, tapi rate plan-nya belum dicocokkan |
| **Siap — belum tayang** | Terpetakan dan berharga; menunggu Anda menekan **Go live** |
| **Terpetakan — menunggu aktivasi** | Menunjuk sebuah kamar; channel belum menyerahkan kendali |
| **Live** | Tarif dan ketersediaan keluar, booking dan pesan masuk |
| **Gangguan** | Ada yang gagal — barisnya menyebutkan apa: *Impor tarif terblokir*, *Aktivasi gagal* |
| **Belum pernah sinkron** | Terhubung, tapi belum ada sinkronisasi yang selesai |

Tidak ada yang berpindah dari *Siap* ke *Live* dengan sendirinya. Lihat
[Go live](/id/channels/going-live/).

## Penagihan

| Pesan | Artinya | Yang dilakukan |
| --- | --- | --- |
| *Pembayaran terakhir Anda gagal.* | Stripe tidak bisa menagih kartu | Perbarui kartu. Stripe juga mencoba lagi sendiri |
| *Langganan Anda belum aktif, jadi workspace ini hanya-baca.* | Tidak ada yang dihapus; Anda hanya tidak bisa mengubah | Bereskan penagihan dan semuanya pulih — [Jika pembayaran gagal](/id/setup/billing/#jika-pembayaran-gagal) |
| *Kartu Anda ditolak, jadi tidak ada yang ditagih dan tidak ada listing yang ditambahkan.* | Pembelian listing tambahan gagal dengan bersih | Perbarui kartu, lalu tambahkan listing-nya lagi |
| *Ini akan menambah listing melebihi cakupan paket Anda.* | Anda sudah di batas listing berbayar | Gunakan **Tambah kamar**, yang menampilkan harganya, atau kosongkan satu listing — [Menambah listing di tengah bulan](/id/setup/billing/#menambah-listing-di-tengah-bulan) |
| *Mulai uji coba gratis dulu: tambahkan kartu di halaman Tagihan.* | Impor akan membuat listing dan belum ada kartu | Tambahkan kartu. Tidak ada tagihan hari itu |
| *Harga berubah saat ini terbuka* | Kutipan harga basi karena dialognya terbuka terlalu lama | Konfirmasi lagi untuk melanjutkan |
| *Hanya pemilik ruang kerja yang bisa mengubah paket.* | Co-host bisa membaca penagihan, bukan mengubahnya | Minta pemilik |
| *Paket Anda memakai harga yang disepakati.* | Anda memakai kesepakatan, bukan paket terbitan | [Hubungi dukungan](/id/help/support/) |
| *Kode itu tidak dikenali.* / *…sudah kedaluwarsa.* / *…sudah habis dipakai.* | Masalah kode promo, persis seperti tertulis | Lanjutkan tanpa kode, atau tanyakan asal kodenya |
| *Paket Anda sudah punya diskon* | Kode tidak bisa ditumpuk dengan diskon yang sudah ada | Tidak perlu apa-apa — harga Anda sudah termasuk diskon itu |

## Akses dan izin

| Pesan | Artinya | Yang dilakukan |
| --- | --- | --- |
| Sebuah layar bilang Anda tidak punya akses | Peran Anda tidak memegang kapabilitas yang diminta layar itu | Pastikan Anda di workspace yang benar (menu akun), lalu minta pemilik — [Tim dan peran](/id/setup/team/) |
| *Setup workspace hanya bisa dilihat untuk peran Anda.* | Co-host dan petugas kebersihan bisa melihat pengaturan workspace, bukan mengubahnya | Pemilik yang mengubahnya — [Diundang sebagai co-host atau manajer](/id/start/invited-manager/) |
| *Setup workspace dikelola oleh pemilik workspace.* | Ditampilkan kepada petugas kebersihan di halaman pengaturan | Wajar. Pengaturan akun Anda sendiri tetap bisa |
| *Peran tim tidak didukung.* | Undangan menyebut peran yang tidak bisa diundang | Hari ini hanya **host admin**, **co-host**, dan **petugas kebersihan** yang bisa diundang |

## Yang terlihat seperti error padahal bukan

| Di layar | Kenapa itu wajar |
| --- | --- |
| Layar kosong tepat setelah menghubungkan | Impor riwayat berjalan di latar dan butuh beberapa menit pada akun besar. Tunggu lima menit lalu segarkan |
| Tidak ada tugas kebersihan untuk besok | Turnover dibuat semalam sebelum check-out, hanya untuk tanggal itu |
| Tidak ada notifikasi untuk setahun booking | Sinkronisasi pertama sengaja senyap — riwayat impor bukan booking baru |
| Ketersediaan lebih rendah dari yang Anda atur | Ketersediaan dibatasi **jumlah unit** kamar. Satu apartemen adalah satu unit |
| Pendapatan lebih kecil dari extranet | Milik kami adalah **payout bersih**; extranet biasanya menampilkan bruto. Keduanya disimpan — [Definisi uang](/id/daily/bookings/#definisi-uang) |
