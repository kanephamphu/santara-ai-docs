---
title: Situs booking langsung Anda
description: Situs pemesanan di subdomain atau domain Anda sendiri, dibayarkan ke akun Stripe Anda sendiri.
sidebar:
  order: 2
---

Setiap workspace dapat menerbitkan situs booking langsung. Uangnya masuk ke akun Stripe Anda, bukan kami.

**Situs Booking** di bilah samping. Sisi kiri untuk pengaturan; sisi kanan pratinjau langsung. Di
bagian atas ada tab-tabnya: **Pengaturan**, **Desain**, **Halaman & blog**, **SEO**, **Harga**,
**Prospek**, **Permintaan** dan **Analitik**.

![Pembangun situs booking yang belum disiapkan: Detail situs di kiri, dan pratinjau langsung di kanan, yang muncul setelah subdomain disimpan.](/screens/booking-site.id.png)

## 1. Pilih subdomain

Huruf kecil, angka, dan tanda hubung. Inilah yang akan diketik tamu, jadi gunakan nama bisnis Anda.
Simpan detail situs, dan pratinjau mulai bekerja.

## 2. Pilih tampilan

**Template** menentukan tampilan tiap bagian; Anda menentukan bagian mana yang muncul dan urutannya.
Pilih template dan warna aksen, unggah logo (PNG, JPG, WEBP, atau GIF maksimal 5 MB, atau URL gambar
publik), dan atur mata uang tampilan harga.

Untuk pengaturan yang lebih rinci, **Desain → Buka editor visual** menampilkan situs Anda di depan
mata selagi Anda mengubahnya: templat, warna, tipografi, media hero (gambar, atau video MP4 atau WEBM
hingga 25 MB), identitas merek, urutan bagian, navigasi, tautan media sosial, dan latar belakang
bagian. Klik sebuah bagian di pratinjau untuk membuka pengaturannya.

**Semua yang Anda ubah di editor visual adalah draf sampai Anda menekan Terbitkan.** Perubahan
tersimpan otomatis, dengan Urungkan dan Ulangi. **Buang** menghapus draf tanpa menyentuh situs yang
sudah tayang, dan **Bahasa pratinjau** menampilkan draf dalam setiap bahasa yang Anda tawarkan.

## 3. Susun halaman depan

Seret bagian ke urutan yang Anda inginkan, atau sembunyikan satu tanpa menghapus isinya:

| Bagian | Isinya |
| --- | --- |
| **Hero** | Judul, tagline, gambar spanduk |
| **Trust** | Tiga poin tanpa biaya / harga terbaik / kontak langsung |
| **Listing** | Kartu properti dan kamar Anda. Selalu ada |
| **Tentang** | Teks bebas dan foto opsional |
| **Ulasan** | Peringkat bintang dari channel tersinkronisasi |
| **Galeri** | Kisi gambar milik Anda |
| **FAQ** | Pertanyaan tamu sebelum memesan |
| **Blog** | Kartu teaser yang menautkan ke tulisan Anda |
| **Kontak** | Detail Anda dan formulir pertanyaan |
| **CTA** | Spanduk penutup dengan tombol |
| **Teks kaya** | Apa pun selebihnya, di mana pun pada halaman |

## 4. Pilih properti yang tampil

Pilih properti yang muncul di situs dan bagaimana tamu bisa memesan masing-masing — langsung, atau
lewat pertanyaan.

## 5. Hubungkan Stripe

**Pembayaran** menghubungkan akun Stripe Anda sendiri. Anda masuk (atau membuat akun) di situs
Stripe. Santara AI tidak pernah menyentuh uangnya dan tidak pernah melihat nomor kartu.

Santara AI tidak mengambil komisi dari pembayaran Anda. Di bagian Pembayaran ada **Biaya pemesanan
tamu** yang opsional: nyalakan, dan tamu membayar 3% di atas harga menginap, tampil sebagai baris
*Biaya pemesanan* tersendiri sebelum mereka sampai ke formulir kartu. Pembayaran yang Anda terima
tidak berubah. Biaya ini **mati secara default** — *"Nonaktif. Tamu membayar persis biaya
menginap."* — dan menyalakan atau mematikannya hanya berlaku untuk booking baru. Biaya ini berlaku
untuk booking yang dibayar online saat checkout, bukan untuk permintaan booking. Lihat
[Komisi](/id/setup/billing/#komisi).

## 6. Terbitkan

Sebelum Anda menerbitkan, situs sepenuhnya ditolak untuk crawler — tidak ada yang bocor sebelum Anda
siap. Menerbitkan menghasilkan sitemap dan aturan robots, dan menjaganya tetap sejalan.

## Biarkan AI menyusun teksnya

Di tab Pengaturan, **Saran AI** menyusun judul, slogan, bagian Tentang, FAQ, judul bagian, dan teks
pencarian dari properti Anda. Tambahkan catatan tentang apa yang ingin ditonjolkan kalau perlu —
*ramah keluarga, 5 menit ke pantai*.

Tidak ada yang berubah sampai Anda memilih. Setiap saran tampil di samping teks Anda saat ini, dengan
tanda apakah ia mengisi kolom kosong atau mengganti teks Anda. **Hanya kolom kosong yang dicentang
untuk Anda** — teks yang Anda tulis tidak pernah dipilih kecuali Anda sendiri mencentangnya.
Pertanyaan FAQ baru ditambahkan; pertanyaan yang sudah ada tidak pernah diubah. Setelah
**Terapkan**, **Urungkan** mengembalikan teks Anda sebelumnya.

Setiap halaman dan tulisan punya tombol **Saran AI** sendiri di editor konten.

## Harga, biaya, dan pembatalan

Tab **Harga** mengatur apa yang dibayar tamu di situs Anda, di atas tarif per malam dari kalender:

| Kelompok | Fungsinya |
| --- | --- |
| **Markup harga** | Persentase yang ditambahkan ke setiap tarif per malam. Tamu melihat tarif yang sudah dinaikkan, bukan baris terpisah |
| **Biaya tambahan** | Masing-masing satu baris: per menginap, per malam, per tamu, per tamu per malam, atau % dari akomodasi |
| **Pajak** | Pajak eksklusif ditambahkan di atasnya; pajak inklusif sudah termasuk dalam tarif dan hanya ditampilkan sebagai informasi |
| **Jaminan kerusakan** | Biaya yang tidak dapat dikembalikan, sebagai pengganti uang jaminan |
| **Kebijakan pembatalan** | Fleksibel, Moderat, Ketat, atau tingkat refund Kustom, plus masa tenggang pembatalan gratis setelah booking |

Tamu menyetujui kebijakan pembatalan saat checkout, dan kebijakan itulah yang dipakai **Refund
sesuai kebijakan** nantinya — lihat [Pertanyaan dan permintaan booking](/id/setup/booking-site-requests/).
**Contoh penawaran** menampilkan hasilnya seperti yang dilihat tamu.

**Pengaturan khusus per properti** mengubah satu atau beberapa kelompok di atas untuk satu listing
saja; yang dibiarkan *Ikuti pengaturan situs* mengikuti pengaturan situs.

## Bahasa

Di editor visual, **Pengaturan lain → Bahasa & terjemahan** memilih bahasa yang bisa dipakai tamu
untuk membaca situs Anda. Pengalih bahasa hanya muncul kalau lebih dari satu bahasa aktif, dan bagian
pemesanan — tombol, kalender, checkout — sudah diterjemahkan untuk Anda.

Di bawahnya, **Terjemahan** menempatkan tulisan Anda dalam bahasa default di samping setiap
terjemahan. **Sarankan** menyusun satu kolom; **Sarankan untuk kolom kosong** menyusun satu kelompok
sekaligus. Terjemahan yang kosong kembali ke bahasa default, jadi situs yang baru setengah
diterjemahkan tetap berfungsi.

## Pencarian dan berbagi

Tab **SEO** mengatur judul, deskripsi, dan gambar berbagi (paling baik 1200×630) yang dipakai Google
dan pratinjau tautan, lengkap dengan **Pratinjau Google**. Biarkan kosong dan judul serta slogan Anda
yang dipakai. Sitemap dan aturan robots dibuat untuk Anda.

## Analitik dan pelacakan

Tab **Analitik** menampilkan tampilan halaman, pengunjung, tampilan properti, cek harga, pemesanan,
pendapatan, dan konversi situs Anda untuk 7, 30, atau 90 hari terakhir, dengan corong dari halaman
pertama sampai booking yang dibayar, serta halaman, perujuk, dan properti teratas. Hari dihitung
dalam UTC.

Untuk memakai alat Anda sendiri juga, **Pelacakan pihak ketiga** di tab Pengaturan menerima **ID
Pengukuran Google Analytics** (diawali `G-`) dan **ID Meta Pixel**. Tempelkan ID-nya saja, jangan
seluruh skrip pelacakan; tampilan halaman di situs publik Anda lalu dikirim ke akun-akun tersebut.

## Domain Anda sendiri

Situs selalu tersedia di subdomainnya. Untuk memasangnya di domain milik Anda — misalnya
`www.villaanda.com` — tambahkan dua catatan DNS dari kartu **Domain kustom** lalu tekan
**Verifikasi**; HTTPS disiapkan untuk Anda secara otomatis. Langkah demi langkah:
[Hubungkan domain Anda sendiri](/id/setup/custom-domain/).

## Halaman dan tulisan blog

Tulis artikel dan halaman mandiri di editor konten, dari blok: teks, gambar, tabel (satu baris per
baris, kolom dipisah `|`), pemisah. `<strong>`, `<em>`, dan tautan inline diizinkan.

**Draf tetap privat sampai Anda menerbitkannya.** Tiap halaman punya ringkasan SEO sendiri — isilah,
atau mesin pencari akan memakai apa pun yang bisa diambilnya.

## Detail kontak

Ditampilkan di bagian kontak dan footer. Alamat menautkan ke Maps; Santara AI tidak pernah menyematkan
iframe peta yang Anda berikan. Pilih bahasa yang pertama dilihat tamu — mereka tetap bisa berganti.

## Yang didapat tamu

Situs yang menampilkan kamar Anda dengan ketersediaan dan harga langsung dari kalender yang sama
dengan channel. Booking langsung menutup malam itu di mana-mana, persis seperti booking channel.

Apa yang dikirim balik oleh tamu — pertanyaan dari formulir kontak, dan permintaan booking pada
properti mode permintaan — ada di
**[Pertanyaan dan permintaan booking](/id/setup/booking-site-requests/)**.
