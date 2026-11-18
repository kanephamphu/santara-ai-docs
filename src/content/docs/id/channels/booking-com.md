---
title: Hubungkan Booking.com
description: Tambahkan connectivity provider di extranet, pilih properti, masukkan Hotel ID, dan petakan kamar — memetakan kamar langsung menayangkannya.
sidebar:
  order: 3
---

Booking.com bekerja berbeda dari Airbnb: tidak ada popup login. Anda memberi izin di extranet Anda
sendiri, lalu menghubungkannya ke properti yang sudah ada di Santara AI.

## Yang Anda butuhkan

- **Properti dengan minimal satu kamar** di Santara AI. Menghubungkan Booking.com memetakan kamar
  yang sudah Anda punya — tidak membuat properti. Sebelum ada, kotak Booking.com menampilkan
  **Tambah properti dulu**. Tambahkan di [Properti](/id/setup/properties/).
- Akses ke **extranet Booking.com** sebagai pemilik properti.
- **Hotel ID** Anda — angka di bagian atas extranet, di sebelah nama properti.

Penyiapannya tiga langkah: **Pilih properti**, **Hubungkan dan petakan**, **Impor**.

![Langkah koneksi Booking.com — kotak centang extranet dan Hotel ID.](/screens/connect-booking-com.id.png)

## 1. Aktifkan koneksi di extranet

Booking.com harus mengizinkan koneksi terlebih dulu. Santara AI terhubung lewat **Channex**, mitra
konektivitasnya — itulah nama yang Anda cari di Booking.com. Sebaiknya langkah ini dilakukan pemilik
properti: Booking.com mengirim kode masuk dua langkah ke ponsel pemilik.

1. Masuk di **account.booking.com**. Catat **ID properti** di bagian atas, di sebelah nama properti —
   itulah Hotel ID yang Anda masukkan di langkah 3. Lalu buka **Account → Connectivity provider**.

   ![Extranet Booking.com: ID properti di sebelah nama, dan Account → Connectivity provider.](/channel-guides/extranet/booking-com-account-menu.webp)

2. Tekan **Search**.

   ![Halaman Connectivity provider — tekan Search.](/channel-guides/extranet/booking-com-connectivity-provider.webp)

3. Ketik kata lengkap **Channex** — pencarian yang lebih pendek tidak menemukan apa pun — lalu pilih
   **Channex.io**.

   ![Search for a provider: ketik Channex dan pilih Channex.io.](/channel-guides/extranet/booking-com-search-channex.webp)

4. Biarkan **Reservations, Rates & Availability** tercentang dan tekan **Next**.

   ![Channex.io terpilih, dengan Reservations, Rates & Availability tercentang — tekan Next.](/channel-guides/extranet/booking-com-next.webp)

5. Centang kotak persetujuan XML Service Agreement dan tekan **Yes, I accept**. Tidak ada kolom lain
   yang perlu diisi.

   ![XML Service Agreement: centang kotaknya, lalu Yes, I accept.](/channel-guides/extranet/booking-com-agreement.webp)

6. Permintaan kini menunggu konfirmasi — itu normal. Biarkan **Connect me to the provider
   automatically** terpilih. Anda bisa langsung lanjut di Santara AI; channel aktif setelah koneksi
   dikonfirmasi.

   ![Menunggu konfirmasi provider — lanjutkan di Santara AI.](/channel-guides/extranet/booking-com-waiting.webp)

Tidak ada yang terjadi di Santara AI sebelum ini selesai. Langkah koneksi punya kotak centang konfirmasi
karena melewatkan langkah ini adalah penyebab kegagalan paling umum.

:::caution[Periksa tarif turunan setelah terhubung]
Saat channel manager terhubung, Booking.com bisa mengubah pengaturan **tarif turunan** (derived
rates) — misalnya minimum menginap. Periksa setiap tarif turunan di extranet setelah terhubung.
:::

## 2. Pilih properti

**Pengaturan → Channel → Tambah channel**, lalu tekan **Hubungkan** pada kotak **Booking.com**.
Langkah pertama menanyakan **Hotel ini properti yang mana?** Pilih properti Santara AI-nya, lalu
tekan **Lanjut**. Kamar Booking.com Anda dipetakan ke kamar properti itu — tidak ada properti baru
yang dibuat. Jika properti itu sudah ada di Airbnb, itu wajar; satu properti dijual di dua tempat.

## 3. Hubungkan dan petakan

**Hubungkan.** Centang kotak yang menyatakan Anda sudah menambahkan connectivity provider dan
menyetujui perjanjian di extranet. Masukkan **Hotel ID** Anda (misalnya `1234567`) dan, bila perlu,
**Nama tampilan (opsional)**. Tekan **Uji koneksi** untuk memeriksanya dulu:

- *Booking.com menerima Hotel ID ini.* — lanjutkan.
- *Booking.com tidak menerima Hotel ID ini.* — periksa angkanya, dan pastikan permintaan provider di
  langkah 1 sudah diterima.

Lalu tekan **Hubungkan Booking.com**. Berbeda dari Airbnb, ini langsung terjadi tanpa jendela tunggu.

**Petakan.** Santara AI menanyakan kamar hotel itu ke Booking.com dan menampilkannya di **Kamar
Anda**. Untuk tiap kamar Booking.com:

- pilih kamar Santara AI yang sesuai (**Pilih kamar…**);
- arahkan tiap tarif Booking.com ke salah satu rate plan Anda, lalu **Simpan pemetaan tarif**. Di
  **Paket tarif di kamar ini** Anda bisa menambah paket langsung (**+ Tambah paket tarif**) atau
  mengganti paket utama (**Jadikan utama**).

Tiap kamar dipetakan dari barisnya sendiri; bila ada beberapa kamar, **Petakan, aktifkan &
sinkronkan N kamar** memetakan semuanya sekaligus. Setelah selesai, tekan **Lanjut**.

:::caution[Memetakan kamar langsung menayangkannya]
Tidak ada langkah Go live terpisah di Booking.com. Memetakan kamar akan menyiapkannya dan membuatnya
aktif — ketersediaan langsung mulai disinkronkan. Baca [Go live](/id/channels/going-live/) sebelum
memetakan.
:::

:::note[Membedakan kamar]
Booking.com menampilkan nama kamar **bawaan**, bukan nama yang Anda ubah di extranet, sehingga dua
apartemen bisa tampak sama. Cocokkan lewat **Room ID**. Petakan **semua** kamar dan tarif: tarif yang
tidak dipetakan — termasuk **tarif turunan** lama yang tampil bisa dipetakan — membuat pemesanannya
gagal. Jika tidak diperlukan, hapus di extranet (tarif turunan yang dibuat ulang di sana tidak perlu
dipetakan).
:::

## 4. Impor

Santara AI membawa masuk menginap, pesan, dan ulasan yang sudah dimiliki hotel itu (*Memindahkan
pemesanan Anda*). Anda boleh meninggalkan halaman — prosesnya tetap berjalan. Saat muncul *Sudah
terhubung*, **Buka channel ini** membuka halaman koneksinya.

## Yang bisa menahan sebuah kamar

| Di layar | Artinya |
| --- | --- |
| *Terhubung — belum dipetakan* | Booking.com mengenal kamarnya; belum menunjuk kamar Santara AI |
| *Dipetakan — menunggu aktivasi* | Sudah dipetakan, channel belum aktif. Booking tersinkron setelah aktivasi berhasil |
| *Konfirmasi kapasitas untuk melanjutkan* | Konfirmasi berapa unit identik yang dimiliki properti, dan tarif per malamnya — lihat [Go live](/id/channels/going-live/#periksa-hal-hal-ini-dulu) |
| *tetap tertaut tetapi tidak dipetakan — rate plan-nya tidak memberi harga untuk jumlah tamu yang diterima Booking.com* | Buka rate plan kamar itu, beri harga untuk okupansi tersebut, lalu petakan lagi |
| *Belum ada kamar ditemukan* | Periksa Hotel ID dan connectivity provider, lalu segarkan |

Santara AI tidak akan menebak harga okupansi pada listing aktif. Penolakan itu disengaja: harga tebakan
di Booking.com menjual malam nyata dengan tarif yang salah.

## Menginap yang diimpor saat terhubung

Menginap yang sudah ada di Booking.com dibawa saat channel aktif, tetapi Booking.com mengirimnya dengan
**detail lebih sedikit** dibanding pemesanan baru: tanpa pajak atau biaya, tanpa email, alamat atau
telepon tamu, tanpa komisi dan tanpa detail kartu. Lihat extranet untuk data itu. Pemesanan yang dibuat
setelah terhubung masuk lengkap.

## Tarif di Booking.com

Booking.com tidak membuka tarif Anda kepada penyedia konektivitas dengan cara yang bisa dibaca
kembali. Harga yang Anda tetapkan di Santara AI dikirim **keluar** ke Booking.com; tidak ada yang
diimpor **masuk**. Tetapkan harga Anda di sini (atau dengan [aturan pricing](/id/money/pricing/)) dan
perlakukan Santara AI sebagai sumber kebenaran.

## Mengubah atau menghapus

- **Ganti properti** — reservasi dan pesan mendatang mendarat di properti yang Anda pilih. Yang sudah
  diimpor tetap di tempatnya dan pemetaan kamar dipertahankan. Tombol ini hanya muncul jika hotel
  tidak terikat ke kamar milik salah satu properti Anda; jika terikat, putuskan koneksi lalu hubungkan
  Hotel ID lagi di properti lain.
- **Hapus dari Santara AI** pada satu kamar — menghapus data impornya di sini saja.
- **Putuskan koneksi** — menghentikan sinkronisasi dan menghapus data impor properti ini. Extranet Anda tidak
  tersentuh. Hotel ID yang sama bisa dihubungkan lagi nanti.

:::note[Masa inap yang akan datang tetap disimpan]
Menghapus atau memutus koneksi hanya menghentikan sinkronisasi — tidak membatalkan apa pun di
channel. Masa inap yang belum selesai tetap ada di Santara AI, jadi malam-malamnya tetap terblokir
di channel lain dan tidak terjadi pemesanan ganda. Masa inap lampau beserta pesan dan ulasannya
dihapus.
:::

:::caution[Jika channel menghilang]
*"Channel ini dihapus dari sisi channel manager"* berarti koneksi dibatalkan di hulu — biasanya
connectivity provider dihapus di extranet. Sinkronisasi berhenti. Setujui ulang provider di
Booking.com, lalu putuskan dan hubungkan kembali di sini.
:::
