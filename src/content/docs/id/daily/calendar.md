---
title: Kalender
description: Setiap malam di setiap kamar, dengan harga, minimum menginap, dan ketersediaan yang bisa diubah langsung di grid.
sidebar:
  order: 5
---

Kamar di kiri, tanggal di atas, masa menginap digambar sebagai batang. Gulir ke samping untuk memuat
tanggal berikutnya; malam kosong menampilkan harganya.

![Kalender: semua kamar di kiri, semua malam di atas. Malam kosong menampilkan harga jualnya.](/screens/calendar.id.png)

## Cara membacanya

- **Batang** adalah reservasi. Warnanya menunjukkan channel; labelnya menampilkan tamu dan
  pendapatan.
- **Malam kosong** menampilkan tarif per malam yang akan dikenakan.
- **Okupansi**, baris pertama, menunjukkan berapa bagian kamar yang terisi tiap malam di semua yang
  sedang tampil (*89%*, *17/19*). Baris judul tiap properti menunjukkan hitungan yang sama untuk
  kamarnya sendiri (*2/3*).
- **Klik satu hari** untuk daftar harian: semua yang bergerak pada tanggal itu.
- **Batang merah dengan tanda peringatan** adalah masa menginap yang kelebihan pesanan: kamar itu
  menampung lebih banyak masa menginap daripada jumlah unitnya pada malam tersebut. Kartunya
  bertuliskan **Kelebihan pesanan: kamar ini punya lebih banyak pemesanan daripada unit pada malam
  ini**. Lihat [Kelebihan pesanan](/id/daily/bookings/#kelebihan-pesanan).
- **Belum ada kamar** adalah baris abu-abu di bawah sebuah properti, berisi masa menginap yang tidak
  berada di kamar mana pun. Baris ini hanya muncul bila memang ada masa menginap seperti itu. Jika
  booking dari channel masuk ke sana, periksa pemetaan listing-nya — lihat
  [Pemecahan masalah channel](/id/channels/troubleshooting/#setelah-live).
- **Arahkan kursor ke sebuah batang** untuk melihat kartu masa menginapnya. **Tanya Santi** di kartu
  itu membuka Santi dengan reservasi tersebut sudah dijelaskan, jadi Anda bisa langsung bertanya.

## Tampilan dan filter

Tombol di bagian atas halaman memilih tampilannya:

- **Linimasa** — semua properti di sisi kiri, tanggal di atas, seperti gambar di atas. Di ponsel
  tampilan ini menjadi **Harian**: satu hari sekaligus, berisi siapa yang **Masuk**, **Keluar**,
  **Menginap**, dan kamar mana yang **Kosong**.
- **Properti** — satu properti, satu bulan. Pilih propertinya, pindah bulan dengan **Bulan
  sebelumnya** dan **Bulan berikutnya**; setiap bulan menampilkan berapa malam yang terisi (*12 dari
  30 malam terisi*) dan pendapatannya. Klik malam kosong untuk menambah booking atau mengubah
  tarifnya.

Kedua tampilan membaca tanggal yang sama, jadi berpindah tampilan tidak membuat Anda kehilangan
posisi, dan browser mengingat tampilan yang terakhir Anda pakai.

**Properti yang ditampilkan** (dengan hitungan seperti *4/6*) menyalakan atau mematikan properti
satu per satu, lengkap dengan **Tampilkan semua** dan **Sembunyikan semua**. Pilihan ini tersimpan
di browser ini — berguna bila Anda hanya mengurus sebagian gedung.

**Filter** membuka dua pilihan lagi:

- **Saluran** — hanya tampilkan masa menginap dari satu channel. Daftarnya berisi channel dari
  masa menginap yang sedang terlihat, masing-masing dengan jumlahnya.
- **Filter masa inap** — **Semua masa inap**, atau hanya yang **Dengan sinyal upsell**.

**Reset filter** mengembalikan keduanya.

Di atas grid, tanda panah, **Hari ini** dan tanggal menggeser waktu, sedangkan **2 minggu**, **3
minggu** atau **4 minggu** mengatur berapa hari yang muat di layar. **Tampilkan** menyalakan atau
mematikan **Harga**, **Pendapatan** dan **Upsell** di grid. Di bawahnya, deretan chip merangkum yang
sedang tampil: **Malam ini 13/19 terisi**, **7 malam ke depan 60%**, **8 tamu tiba hari ini**,
**Pendapatan mendatang** dan **Upsell terbuka**.

## Memblokir atau membuka tanggal

Memblokir malam sama dengan menutupnya: tidak ada yang bisa memesannya di channel mana pun. Anda
melakukannya langsung di grid — klik satu malam, atau seret melintasi beberapa malam.

1. **Pilih malamnya.**
   - *Satu malam:* klik malam kosong pada baris kamar tersebut.
   - *Beberapa malam:* tekan malam pertama lalu **seret** di baris yang sama sampai malam terakhir,
     lalu lepaskan. Malam-malam itu berdenyut selama Anda menyeret. Seret melewati tepi kanan dan
     kalender ikut bergulir.
   - *Memperlebar rentang:* tahan **Shift** dan klik malam yang lebih jauh di baris yang sama.

2. Panel **Tanggal dipilih** terbuka di bawah rentang, menampilkan jumlah malam yang dipilih. Pilih
   **Tarif & ketersediaan**.

   ![Tiga malam diseret pada Garden Room: malamnya ditandai dan panel Tanggal dipilih terbuka di sampingnya.](/screens/calendar-block-select.id.png)

3. Di editor tarif, atur **Dijual** ke **Ditutup** untuk memblokir, atau ke **Buka** untuk membuka
   kembali. Pilihan pertamanya, **Biarkan**, membiarkan malam itu seperti sekarang (*Biarkan
   (Buka)*). Jangan ubah kolom lain agar tetap seperti semula.

   ![Editor tarif untuk tiga malam di Garden Room, dengan Dijual diatur ke Ditutup dan Tambahkan 3 malam ke tertunda di bawahnya.](/screens/calendar-block-close.id.png)

4. Klik **Tambahkan 3 malam ke tertunda** (angkanya sesuai pilihan Anda). Malam-malam itu menjadi kuning dengan garis putus —
   belum ada yang dikirim, jadi Anda bisa terus memilih dan menumpuk perubahan lain.
5. Klik **Simpan semua** di bagian atas kalender. Perubahan dikirim ke semua channel terhubung.
   **Buang semua** membatalkan perubahan yang tertunda.

   ![Tiga malam kini kuning bergaris putus, menunggu di tertunda; Simpan semua mengirimnya ke semua channel.](/screens/calendar-block-save.id.png)

Malam yang ditutup lalu bertuliskan **Ditutup** di grid. Untuk membukanya lagi, pilih malam yang
sama dan atur **Dijual** ke **Buka**.

:::note
- Satu rentang hanya di **satu baris kamar** — untuk memblokir dua kamar, kerjakan tiap baris
  bergantian (keduanya bisa menunggu di tertunda dan disimpan bersama).
- **Tanggal lampau** hanya bisa dibaca dan tidak bisa dipilih.
- **Di ponsel atau tablet** menyeret akan menggulir kalender, jadi ketuk satu malam lalu perlebar
  rentangnya dengan tanggal di panel.
- Tekan **Esc** atau **×** pada panel untuk membatalkan pilihan.
:::

## Mengedit rentang

Pilih rentang malam pada satu kamar dan panel **Tanggal dipilih** menawarkan dua tindakan:

**Reservasi baru** — pesankan malam ini untuk tamu secara manual. Gunakan untuk booking langsung
lewat telepon, tamu pemilik, atau teman. Reservasi manual memblokir malam di semua channel terhubung
seperti reservasi asli.

**Tarif & ketersediaan** — editor tarif:

| Kolom | Fungsinya |
| --- | --- |
| **Harga per malam** | Tarif per malam untuk malam-malam itu. Harga ini dipublikasikan ke saluran yang terhubung |
| **Kamar yang dijual** | Berapa unit kamar yang tetap dijual, hingga jumlah unitnya; pemesanan mengurangi angka ini |
| **Dijual** | **Ditutup** memblokir malam itu di semua channel; **Buka** menjualnya lagi; **Biarkan** tidak mengubahnya |
| **Aturan menginap** | Terlipat secara bawaan: **Menginap minimum (malam)**, **Menginap maksimum**, **Tidak ada check-in** dan **Tidak ada check-out** |

**Hapus penimpaan** menghapus yang Anda atur sendiri pada malam itu. **Buka kalender tarif lengkap**
membuka grid Harga di tab baru, untuk pekerjaan massal di banyak kamar.

Perubahan menunggu di **tertunda** sampai Anda mengklik **Simpan semua**; satu simpan itu mengirimnya ke semua channel terhubung. Tidak ada langkah "terbitkan" lain.

## Harga dan mesin pricing

Harga yang Anda ketik di sini adalah **harga manual**, dan
[mesin pricing](/id/money/pricing/) tidak menyentuhnya — kecuali Anda menyalakan *Ganti harga yang
saya ketik sendiri* untuk listing tersebut, yang menimpanya tanpa bisa dibatalkan.

Itulah seluruh hubungannya: aturan menentukan bentuk tahun, tangan Anda menang pada malam yang Anda
sentuh.

## Ketersediaan dan jumlah unit

Sebuah kamar tidak pernah bisa menawarkan lebih banyak malam daripada **jumlah unit**-nya. Jika kamar
adalah satu apartemen, jumlah unitnya 1, dan ketersediaan dibatasi di sana — di kalender, dalam
pengiriman ke channel, dan dalam apa yang bisa Anda ketik.

Jika kalender menampilkan ketersediaan lebih sedikit dari perkiraan, periksa jumlah unit kamar dulu.

## Menutup tanggal adalah cara menjeda

Untuk berhenti menjual — renovasi, tamu pemilik, musim libur — **tutup tanggalnya** di sini. Jangan
memutus channel: itu menghapus riwayat impor Anda dan tidak menghentikan listing yang ada di channel.

## Blok yang berasal dari channel

Blok yang dibuat di Airbnb atau extranet Booking.com sebelum Anda go live ikut diimpor dan
ditampilkan. Setelah live, buat blok di sini — kalender channel kini berada di hilir kalender ini.
