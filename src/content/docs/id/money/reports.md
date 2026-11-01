---
title: Laporan
description: Satu laporan pemilik per bulan — hasil menginap, potongan setiap channel, biaya, dan sisa untuk pemilik.
sidebar:
  order: 4
---

Laporan adalah satu layar: **Laporan pemilik**. Layar ini menjawab satu pertanyaan untuk satu
bulan — berapa hasil menginap, berapa yang diambil channel, berapa biayanya, dan berapa sisa untuk
pemilik.

Layar ini menggantikan pustaka laporan lama dan bagian Akuntansi yang terpisah. Dua layar yang
menjawab pertanyaan yang sama adalah cara Anda berakhir dengan dua angka bersih pemilik tanpa tahu
mana yang benar, jadi sekarang hanya ada satu, dan semua angkanya saling cocok.

## Laporan pemilik

Baca dari atas ke bawah:

| Baris | Artinya |
| --- | --- |
| **Pendapatan bruto pemesanan** | Yang dibayar tamu untuk menginap dalam periode itu, beserta jumlah menginapnya |
| **Biaya channel — {channel}** | Satu baris per channel: yang diambil Airbnb, Booking.com, dan lainnya |
| **Biaya** | Setiap biaya yang dicatat pada periode itu, beserta jumlah entrinya |
| **Bersih untuk pemilik** | Bruto − biaya channel − biaya |

Dua aturan menentukan apa yang masuk ke sebuah bulan, dan keduanya tercetak di bawah judul:

- **Menginap dihitung pada bulan check-out.** Menginap 28 Maret sampai 3 April masuk ke April.
  Menginap yang dibatalkan tidak dihitung.
- **Setiap mata uang ditampilkan terpisah dan tidak pernah dikonversi.** Vila berharga IDR yang
  menerima booking USD mendapat dua laporan, bukan satu angka campuran.

Jika tidak ada menginap yang check-out pada bulan itu, Anda melihat *Tidak ada menginap yang
check-out pada bulan ini.*

## Bruto, biaya channel, dan payout

Setiap menginap bisa membawa tiga angka berbeda — bruto (yang dibayar tamu), pendapatan kamar
(bagian akomodasi), dan payout (yang sampai ke Anda). Laporan dimulai dari **bruto** dan menampilkan
potongan setiap channel sebagai barisnya sendiri, supaya pemilik bisa melihat ke mana uangnya pergi.

Tidak semua channel melaporkan biayanya, dan laporan tidak pernah menebaknya. Di bawah baris biaya
channel Anda mungkin melihat:

- **"… dihitung dari payout"** — channel tidak melaporkan biaya, jadi dihitung sebagai
  bruto − payout.
- **"… biaya tidak dilaporkan"** — tidak ada biaya dan tidak ada cara menghitungnya. Menginap itu
  tetap dihitung, bukan diam-diam dianggap tanpa biaya: menganggap channel tidak mengambil apa pun
  membuat jumlah untuk pemilik terlihat lebih besar dari seharusnya.
- **"… tanpa angka bruto"**, di bawah baris bruto — menginap yang hanya pernah mencatat payout.
  Payout dipakai sebagai gantinya; angka teratas jadi terlihat lebih kecil, bukan berpura-pura.

Jika Anda merekonsiliasi dengan rekening koran, payout-lah yang cocok.

## Biaya

Di bawah laporan ada daftar **Biaya** — baris yang sama yang dikurangkan di atas, jadi Anda bisa
memeriksa satu per satu. Pindah ke **Hanya biaya** untuk melihat biayanya saja.

### Menambah biaya

Tekan **Tambah biaya**. Formulirnya punya lima kolom:

- **Tanggal** — kapan biaya terjadi, bukan hari Anda mengetiknya.
- **Properti** — properti pemilik biaya itu.
- **Kategori** — **Listrik**, **Air**, **Kebersihan**, atau **Lainnya**.
- **Jumlah** — dalam mata uang properti.
- **Catatan** — untuk apa biaya itu.

Entri lama mungkin memakai kategori lain (Linen, Perawatan, Perbaikan, Utilitas, dan seterusnya).
Entri itu tetap tampil di laporan dan tetap bisa difilter; kategorinya hanya tidak ditawarkan di
formulir.

### Ditanggung pemilik dan ditanggung pengelola

Setiap biaya **Ditanggung pemilik** atau **Ditanggung pengelola**. Biaya yang Anda tambahkan lewat
**Tambah biaya** ditanggung pemilik. Laporan mengurangkan keduanya; pakai filter untuk melihat salah
satu saja.

### Tagihan bersama

Satu meteran listrik untuk seluruh bangunan adalah satu tagihan untuk beberapa listing. Centang
listing lainnya di **Juga mencakup** — jumlahnya dicatat sekali dan tidak pernah dibagi.

Tagihan bersama hanya dikurangkan jika laporan mencakup **seluruh** listing yang disebutnya. Jika
tampilan Anda persempit ke sebagian listing itu, tagihannya pindah ke daftar terpisah, **Biaya
bersama — tidak dialokasikan**, dan tidak dikurangkan — kalau tidak, laporan setiap listing akan
menanggung seluruh tagihan.

## Filter dan periode

Buka **Filter** untuk memilih:

- **Periode** — **Bulan ini**, **Bulan lalu**, **3 bulan terakhir**, **Tahun ini**, atau
  **Rentang khusus**. Periode yang dipakai tercetak di laporan dan ditulis ke CSV, jadi sebuah
  rentang tidak pernah bisa terlihat seperti satu bulan.
- **Listing** — satu properti, beberapa, atau semua.
- **Kategori** dan **Ditanggung pemilik** / **Ditanggung pengelola** — untuk melihat sebagian biaya.

Memfilter biaya mengubah nama angka terakhir dari **Bersih untuk pemilik** menjadi **Neto dari
biaya yang ditampilkan**, dengan catatan filter mana yang aktif. Sebagian biaya tidak disertakan,
jadi angkanya bukan lagi neto pemilik — dan layar mengatakannya, bukan membiarkannya terlihat
seperti neto pemilik.

### Tampilan tersimpan

Di **Tersimpan**, tekan **Simpan saat ini** dan beri nama tampilannya — misalnya "Villa Anyar,
utilitas tahun ini". Tampilan itu kembali dengan satu klik, dan bisa dihapus dari daftar yang sama.

## Unduh CSV

**Unduh CSV**, di samping judul halaman, mengekspor persis yang ada di layar: periode yang sama,
filter yang sama, baris yang sama. Kirim ke pemilik atau ke akuntan Anda. Santara AI bukan sistem
pembukuan — ia catatan operasional yang mengisi sistem pembukuan.

## Paket yang menyertakannya

Laporan termasuk dalam paket **Operator** dan setiap paket di atasnya. Di **Host**, halaman ini
terbuka sebagai panel terkunci yang menjelaskan apa yang ditambahkan oleh upgrade. Lihat
[Paket dan penagihan](/id/setup/billing/).

## Okupansi, ADR, dan RevPAR

Angka-angka itu — okupansi, rata-rata harga harian dari reservasi, RevPAR, dan perbandingan per
kamar — sekarang ada di [Upsell](/id/money/upsells/).
