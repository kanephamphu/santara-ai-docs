---
title: Smart pricing
description: Aturan yang menggerakkan tarif per malam berdasarkan musim, hari, acara, dan permintaan — dengan batas keras, dan harga manual Anda tetap aman.
sidebar:
  order: 1
---

Mesin pricing Santara menghitung tarif untuk setiap malam mendatang dan menerbitkannya ke channel
Anda. Anda mengendalikannya dengan **rule set**, dan Anda bisa melihat persis apa yang akan
dilakukannya sebelum ada yang keluar.

Tidak ada yang diberi harga otomatis sampai Anda menetapkan rule set pada sebuah listing. Listing
tanpa aturan mempertahankan harga yang ada.

## Dua bagiannya

**Aturan menentukan bentuk tahun. Angka listing menentukan bentuk itu bentuk dari apa.**

- **Rule set** adalah pengali: musim ini ×1,85, Jumat +20%, Natal menggantikan musim. Ia dipakai
  bersama — satu rule set bisa memberi harga lima puluh listing.
- **Pengaturan pricing listing** adalah harga dasar, lantai dan plafon, serta biayanya. Itu per
  listing.

![Harga per malam dimulai dari harga dasar, dikalikan musim dan hari, bisa digantikan acara, lalu dibatasi oleh limit Anda dan limit channel sebelum diterbitkan. Harga yang Anda ketik manual melewati semuanya.](/diagrams/pricing-pipeline.id.svg)

## Menyusun rule set

**Musim.** Rentang tanggal dengan pengali. `1,85` berarti 85% di atas harga dasar. Tiap musim juga
punya **kekuatan akhir pekan** yang menskalakan premi harian — di bawah 1 meratakannya di musim
ramai, di atas 1 mempertajamnya di musim sepi.

**Hari dalam seminggu.** Premi per hari, diterapkan pada **malamnya, bukan pada booking-nya**. Tiap
musim menskalakannya dengan kekuatan akhir pekan.

**Acara.** Rentang tanggal bernama yang **menggantikan musim** pada tanggal tersebut, mengambil yang
lebih tinggi. Gunakan untuk hari libur yang tidak kami sertakan, dan untuk tanggal yang tidak dipakai
orang bepergian.

| Opsi acara | Fungsinya |
| --- | --- |
| **Berulang tiap tahun** | Untuk tanggal tetap seperti Natal. Matikan untuk yang bergeser — Paskah, Tết, Nyepi |
| **Menggantikan musim** | Menyala secara bawaan; yang lebih tinggi berlaku. Matikan untuk yang melemahkan permintaan selama berminggu-minggu, seperti Ramadan |
| **Blackout** | Memblokir diskon menit terakhir dan diskon berbasis permintaan pada malam itu |
| **Blokir check-in** | Aturan ketersediaan, bukan aturan harga — untuk hari yang tidak mungkin bepergian |

**Mulai dari milik kami.** Santara menyediakan rule set dengan tanggal libur regional yang kami
perbarui tiap tahun. Anda bisa melihat persis apa yang akan dilakukannya. Buat salinan Anda sendiri
untuk mengubahnya — dan perhatikan, begitu menjadi milik Anda, **kami berhenti memelihara
tanggalnya**, termasuk yang bergeser mengikuti bulan: Nyepi dan Idul Fitri berubah setiap tahun.

Perubahan di editor aturan bersifat **staged**. Tidak ada yang berlaku sampai Anda menekan Simpan.

## Angka milik listing

Buka pengaturan pricing sebuah listing:

| Pengaturan | Artinya |
| --- | --- |
| **Harga dasar** | Acuan semua pengali. Dipakai hanya bila rate plan tidak punya harga sendiri — harga plan didahulukan |
| **Minimum / maksimum** | Batas keras. Pricing otomatis tidak pernah melewatinya. Minimum menggantikan lantai hasil hitungan; bukan menaikkannya |
| **Biaya** | Biaya melayani satu malam. Isi keenam kolom atau tidak sama sekali — satu kolom kosong membuat lantai kembali ke porsi harga dasar |
| **Beri harga otomatis untuk listing ini** | Mati berarti aturan tidak berjalan di sini sama sekali |
| **Terbitkan harga otomatis** | Mati berarti harga dihitung dan ditampilkan, tetapi tidak diterbitkan |
| **Ganti harga yang saya ketik manual** | Mati secara bawaan. Lihat di bawah |
| **Yang diterima channel** | Jendela terpisah milik Booking.com dan Airbnb. Ia mempersempit rentang di atas, bukan menggantikannya |

## Melindungi harga manual

**Harga yang Anda ketik manual tidak pernah ditimpa**, kecuali Anda menyalakan *Ganti harga yang saya
ketik manual* untuk listing itu. Bila menyala, tarif yang Anda ketik ditimpa dan **nilainya hilang —
tidak ada undo**.

Karena itulah Anda bisa dengan aman memberi harga manual untuk sepekan pernikahan pada listing yang
selebihnya otomatis.

## Melihat sebelum menerbitkan

Layar pricing menampilkan setahun harga sebagai grid, dan grafik tren berisi saran mesin terhadap
tarif dasar serta lantai dan plafon yang tidak boleh dilewati. Tetapkan rule set, biarkan *Terbitkan
harga otomatis* mati, dan amati seminggu sebelum melepasnya.

## Apakah berhasil?

Panel performa menjawabnya:

- **RevPAN** — pendapatan ÷ seluruh malam yang harus dijual. **Inilah angka yang penting.**
- **ADR** — pendapatan ÷ malam yang terjual.
- **Okupansi** — malam terjual ÷ malam tersedia.

ADR dan okupansi bergerak sendiri-sendiri dan tidak satu pun sendirian memberi tahu apakah mesinnya
menghasilkan; RevPAN memberi tahu.

Ada juga grafik **aktivitas mesin**: seberapa jauh ia menggeser harga, dan apakah ia menabrak batas
Anda. *Hutan batang tinggi berarti ia gelisah — lebarkan dead band. Garis datar di nol berarti ia
sudah tenang, dan itulah tujuannya.*

Tiap malam yang diberi harga menyimpan satu baris yang ditulis ulang tiap kali dijalankan — jadi
kolom aktivitas adalah hasil jalannya yang terbaru, bukan total periode.

## Saran pasar

Berdasarkan lokasi tiap listing, Santara dapat menyarankan dasar harganya. Saran tetap saran: tidak
ada yang diterbitkan sampai Anda memilih.

## Jika Anda sudah memakai PriceLabs

Hubungkan di [Pengaturan → Channel](/id/channels/listings/#pricelabs) dan mesin Santara akan mengalah
untuk listing yang dikelola PriceLabs, alih-alih keduanya berebut kalender yang sama.
