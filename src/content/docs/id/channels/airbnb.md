---
title: Hubungkan Airbnb
description: Hubungkan akun, pilih listing, lalu impor satu per satu — tiap listing dibuat, diberi harga, dan ditayangkan.
sidebar:
  order: 2
---

## Yang Anda butuhkan

- **Akun Airbnb pemilik listing.** Co-host yang tidak bisa membuka pengaturan akun tidak dapat
  mengotorisasi koneksi.
- Popup diizinkan di browser — otorisasi terbuka di jendela baru. Jika diblokir Anda melihat
  *"Browser Anda memblokir popup"*; izinkan lalu tekan **Hubungkan Airbnb** lagi.
- **Tidak ada channel manager atau PMS lain yang terhubung** ke akun Airbnb itu — Airbnb menolak yang
  kedua dan koneksi tidak selesai. Putuskan yang lama di Airbnb dulu (**Account → Privacy**, di bagian
  layanan yang terhubung).
- **Data host lengkap** — verifikasi email yang belum selesai atau sejenisnya memblokir otorisasi;
  Airbnb menyebutkan apa yang kurang di layarnya.
- **Masuk ke akun Airbnb yang benar** di browser ini sebelum mulai. Mengganti kata sandi Airbnb setelahnya
  tidak memutus koneksi.
- **Ketersediaan kalender listing tidak diset "Unavailable by default"** — pilih semua tanggal atau
  sejumlah hari ke depan, kalau tidak ketersediaan dari Santara AI tidak bisa membuka kalender.

## Tempat memulai

**Pengaturan → Channel → Tambah channel**, lalu tekan **Hubungkan** pada kotak **Airbnb**. Airbnb
adalah satu-satunya channel yang tidak butuh properti lebih dulu — Santara AI membuat properti dan
kamar dari listing Anda.

Penyiapannya tiga langkah: **Hubungkan**, **Pilih listing**, **Impor**.

## 1. Hubungkan

Tekan **Hubungkan Airbnb**. Halaman Airbnb terbuka di jendela baru: masuk di sana dan setujui
koneksinya. Sampai Anda menyetujui, Santara AI menampilkan *Menunggu Anda menyelesaikan otorisasi di
Airbnb*. Jika jendelanya hilang, tekan **Buka lagi jendela Airbnb**.

Jika jendela ditutup sebelum menyetujui, Anda melihat *Otorisasi belum selesai*. Tidak ada yang
terhubung; tekan **Coba lagi**.

## 2. Pilih listing

Setelah Airbnb membagikan listing akun tersebut, Anda mendapat daftar beserta foto tiap listing.
Untuk tiap listing:

- **Hapus centang** yang tidak diinginkan. **Pilih semua** dan **Kosongkan** berlaku untuk seluruh
  daftar.
- Pilih tujuannya di **Impor ke**:
  - **Properti baru — dibuat dari listing ini** — pilihan biasa untuk listing satu rumah utuh.
  - **Properti yang sudah ada** — lalu pilih **Kamar yang mana?**, jika properti itu punya lebih
    dari satu kamar. Gunakan ini bila beberapa listing Airbnb adalah kamar-kamar dari vila yang
    sama. Bila sebuah listing tampak seperti properti yang sudah Anda punya, Santara AI
    menyarankannya — tekan **Pakai** untuk menerimanya.
- Listing yang sudah terhubung di tempat lain ditandai *sudah terhubung* dan tidak bisa dipilih dua
  kali.

Tekan **Impor N listing** — tombolnya menghitung listing yang Anda centang.

## 3. Impor

Listing diimpor **satu per satu**, dengan bilah progres (*2 dari 5 selesai*). Untuk tiap listing,
Santara AI membacanya dari Airbnb, membuat properti dan kamar, memetakan listing, membaca harganya,
lalu menayangkannya. Tiap baris menunjukkan apa yang terjadi pada **Properti**, **Kamar**, **Tarif**,
dan **Airbnb** — *Aktif* atau *Belum aktif*.

- Biarkan halaman terbuka selama proses berjalan. Meninggalkannya menghentikan listing yang belum
  dimulai.
- **Berhenti setelah yang ini** menyelesaikan listing yang sedang berjalan lalu berhenti. Listing
  yang sudah masuk tetap siap; sisanya tidak tersentuh.
- Kembali ke penyiapan nanti dan Anda akan melihat **Lanjutkan dari tempat Anda berhenti**, dengan
  sisa listing yang masih menunggu.
- Listing yang gagal menampilkan alasannya dan tombol **Coba lagi**. Yang lain tetap berjalan.

Setelah selesai, Santara AI membawa masuk booking, ulasan, dan pesan untuk semua yang Anda impor.
Proses itu terus berjalan di latar belakang — Anda tidak perlu menunggu. **Lihat listing Anda**
membuka halaman koneksi; **Impor lagi** kembali ke langkah 2.

### Harga yang dibaca dari Airbnb

- **Harga per malam**, harga akhir pekan, tamu termasuk, harga tamu tambahan, dan biaya kebersihan
  listing dibaca dan dipasang di kamar.
- **Tetap di Airbnb** — pengaturan yang tidak punya padanan persis di sini. Tetap berlaku di Airbnb;
  ditampilkan agar Anda tahu keberadaannya.
- **Perlu diperiksa di Airbnb** — nilai yang tampak tidak lazim. Santara AI menandai, bukan menebak.
- **Tetap memakai harga kamar sendiri** — Santara AI tidak dapat membaca harga listing dengan aman,
  jadi kamar mempertahankan harga yang sudah dimilikinya, dan tidak ada yang dikarang.

:::tip[Kenapa menolak menebak]
Harga yang salah baca pada listing aktif adalah kerugian nyata, jadi pengimpor menolak data ambigu
ketimbang menebaknya. Jika harga sebuah listing sama sekali tidak terbaca, tautan channel-nya
ditahan sampai ada harga sungguhan — dan tautan itu pulih sendiri begitu ada.
:::

## Konfirmasi kapasitas

Sebelum Santara AI pertama kali menulis ke kalender sebuah listing, **kapasitas** propertinya harus
dikonfirmasi. Properti baru mendapatkannya saat impor. Listing yang diimpor ke kamar yang sudah ada
bisa menampilkan **Konfirmasi kapasitas sebelum kita tayang** (di halaman koneksi: *Konfirmasi
kapasitas untuk melanjutkan*). Tekan **Konfirmasi** dan isi dialognya:

- **Berapa unit identik?** — satu apartemen berarti 1. Angka ini membatasi ketersediaan yang dikirim
  ke Airbnb, jadi angka yang salah bisa menjual malam yang tidak Anda punya, atau menutup malam yang
  Anda punya.
- **Mata uang** dan **Tarif per malam** — tarif yang disarankan dari Airbnb sudah terisi; ubah bila
  salah.

Dialog menunjukkan berapa malam mendatang yang akan kosong dan berapa yang ditutup sebagai penuh,
lalu tekan **Konfirmasi**. **Nanti saja** membiarkan listing menunggu.

## Tayang

Menayangkan listing berarti Airbnb **menyerahkan kendali kalender ke Santara AI**. Ketersediaan
mulai tersinkronisasi; **harga tetap seperti di Airbnb** sampai Anda mengubahnya di sini atau aturan
pricing menerbitkannya. Baca [Go live](/id/channels/going-live/) untuk apa yang berubah.

Impor menayangkan tiap listing sebagai langkah terakhirnya. Listing yang belum dikonfirmasi Airbnb
tetap **Sudah disiapkan — belum aktif**, dengan tombol **Aktifkan di Airbnb**, di langkah impor dan
di halaman koneksi (tempat listing itu bertuliskan *Siap — belum tayang* dan punya tombol
**Tayangkan** sendiri).

Jika sebuah listing gagal tayang, alasannya ditampilkan sebagaimana disampaikan Airbnb:

| Pesan | Yang harus dilakukan |
| --- | --- |
| *Airbnb belum selesai menautkan listing ini* | Tunggu satu menit, tekan lagi |
| *Mata uang listing belum tersinkron* | Tunggu beberapa menit lalu coba lagi |
| *Kamar ini belum punya penyiapan kanal* | Hapus listing lalu impor ulang |
| *Airbnb tidak mengonfirmasi bahwa listing sudah aktif* | Coba sekali lagi; bila berulang, [hubungi dukungan](/id/help/support/) |

Listing lain tetap tayang. Hasil sebagian membuat sisanya tetap siap dan bisa dicoba lagi.

## Beberapa akun Airbnb

Tekan **Tambah akun lain** pada kotak Airbnb di **Tambah channel** dan ulangi. Tiap akun mendapat
halaman koneksi sendiri dengan listing-nya sendiri. Menghubungkan akun yang sudah terhubung akan
ditolak — putuskan yang lama dulu.

## Hubungkan ulang

Jika akses Santara AI dicabut dari akun Airbnb — misalnya di aplikasi terhubung Airbnb —
sinkronisasi berhenti. Koneksi menampilkan **Perlu dihubungkan ulang** dan sebuah banner: *Akses
Santara AI telah dicabut dari akun Airbnb Anda*. Tekan **Hubungkan ulang** dan masuk dengan akun
Airbnb yang **sama**. Listing dan riwayat Anda tetap tersimpan.

## Menghapus

- **Hapus dari Santara AI** pada satu listing — menghapus reservasi, pesan, tamu, dan ulasan kamar itu
  di sini. Listing Airbnb Anda tidak tersentuh dan bisa diimpor kembali.
- **Putuskan** akun — sama, untuk seluruh listing di akun itu, dan sinkronisasi berhenti.

## Pesan tamu dan ulasan

Setelah tayang, percakapan Airbnb muncul di [Pesan](/id/daily/messages/) dan balasan Anda kembali ke
Airbnb. Ulasan tamu muncul di [Ulasan](/id/daily/reviews/), dan Anda dapat menerbitkan ulasan Anda
tentang tamu dari sana — baca peringatannya, tindakan itu tidak bisa dibatalkan.
