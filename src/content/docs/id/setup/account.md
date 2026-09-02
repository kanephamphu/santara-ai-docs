---
title: Akun dan keamanan Anda
description: Pengaturan yang milik Anda, bukan milik workspace — nama, bahasa, zona waktu, kata sandi — dan apa yang dilakukan kalau tidak bisa masuk.
sidebar:
  order: 8
---

Hampir semua hal di Santara AI milik sebuah **workspace**. Dua hal tidak: akun dan keamanan Anda.
Keduanya mengikuti Anda di setiap workspace yang Anda ikuti, dan tidak ada orang lain yang bisa
mengubahnya — termasuk pemilik workspace tempat Anda bekerja.

## Di mana letaknya

Buka **menu akun di bagian bawah bilah samping**, lalu **Akun personal**. Ini sengaja bukan salah
satu tab Pengaturan: tab di bagian atas Pengaturan adalah setup *workspace*, dan kata sandi Anda
bukan urusan workspace.

Kedua blok berada di halaman yang sama:

| Blok | Isinya |
| --- | --- |
| **Pengaturan Personal** | Nama, email, foto profil, bahasa, zona waktu |
| **Pengaturan Keamanan** | Kata sandi Anda |

## Bahasa dan zona waktu

- **Bahasa** mengubah antarmuka **untuk Anda**. English, Bahasa Indonesia, dan Tiếng Việt.
- **Zona waktu** adalah preferensi tampilan Anda sendiri.

Keduanya tidak mengubah apa pun bagi orang lain — dan keduanya bukan yang menggerakkan ringkasan
harian. Ringkasan mengikuti bahasa **workspace** dan zona waktu **workspace**, supaya satu tim
mendapat satu ringkasan, satu bahasa, satu jam. Kalau tanggal terlihat salah di seluruh produk,
yang Anda cari adalah zona waktu workspace, bukan yang ini. Lihat
[Pengaturan workspace](/id/setup/workspace/#zona-waktu).

Seorang manajer berbahasa Vietnam yang bekerja di workspace yang ringkasannya berbahasa Indonesia
adalah pengaturan yang didukung dan biasa.

## Foto profil Anda

PNG, JPG, WEBP, atau GIF, maksimal 5 MB. Muncul di daftar tim, menu akun, dan di samping pekerjaan
yang Anda lakukan. Layak diisi kalau lebih dari dua orang memakai workspace — papan kebersihan yang
semua avatarnya lingkaran abu-abu lebih sulit dibaca daripada kedengarannya.

Jangan tertukar dengan **avatar workspace**, yaitu logo yang tampil di bilah samping dan pemilih
workspace. Yang itu milik pemilik, ada di tab Workspace.

## Mengubah kata sandi

**Pengaturan Keamanan** → kata sandi saat ini, kata sandi baru, konfirmasi.

- **Minimal 12 karakter.** Tidak ada aturan jenis karakter; panjanglah yang penting.
- **Sesi Anda saat ini tetap masuk.** Yang lain tidak — setiap sesi lain di setiap perangkat lain
  dicabut begitu kata sandi berubah. Itulah gunanya: kalau ada orang lain memegang sesi Anda,
  mengganti kata sandi mengakhirinya.

Kata sandi tidak "kedaluwarsa" dan tidak ada rotasi paksa. Ganti kalau Anda punya alasan.

:::note[Autentikasi dua faktor]
Belum tersedia. Masuk saat ini memakai email dan kata sandi, dengan verifikasi email saat
pendaftaran dan penguncian di bawah ini. Kalau 2FA adalah kebutuhan Anda, sampaikan lewat
[dukungan](/id/help/support/) — begitulah caranya diprioritaskan.
:::

## Kalau Anda lupa kata sandi

Gunakan **Lupa kata sandi?** di layar masuk.

1. Masukkan email Anda. Kalau akunnya ada, Anda menerima **kode enam digit** — layarnya berkata
   sama dalam kedua kasus, jadi tidak bisa dipakai untuk mengetahui siapa yang punya akun.
2. Kode **berlaku 15 menit**, dan lima percobaan salah menghanguskannya. Minta yang baru.
3. Anda bisa meminta kode baru **sekali semenit**.
4. Menyetel kata sandi baru **mengeluarkan semua perangkat, termasuk yang sedang Anda pakai**, dan
   menghapus penguncian. Masuk lagi dengan kata sandi baru.

## Kalau Anda terkunci

Setelah **sepuluh percobaan masuk gagal**, akun terkunci selama **lima belas menit**, dan layar
menampilkan *"Too many failed attempts. Please try again later."*

Tiga hal yang perlu diketahui:

- **Menunggu berhasil.** Kuncinya terbuka sendiri; tidak perlu ada yang membukanya untuk Anda.
- **Mengatur ulang kata sandi langsung menghapusnya** — itu jalan cepat kalau Anda terkunci karena
  memang lupa kata sandinya.
- **Pemilik workspace tidak bisa membuka kunci Anda**, karena ini akun Anda dan bukan workspace
  mereka. Dukungan bisa membantu kalau ada yang benar-benar tersangkut.

:::caution[Pesan ini mungkin muncul dalam bahasa Inggris]
Pesan penguncian saat ini ditampilkan dalam bahasa Inggris meskipun sisa halaman masuk berbahasa
Indonesia atau Vietnam. Artinya seperti yang dijelaskan di atas.
:::

## Tetap masuk

Sebuah sesi berlaku **30 hari** dan diperbarui selagi Anda memakai produk, jadi sehari-hari Anda
tidak diminta masuk lagi. Anda dikeluarkan ketika:

- Anda keluar sendiri,
- Anda mengubah kata sandi (semua perangkat kecuali yang Anda pakai untuk mengubahnya),
- Anda mengatur ulang kata sandi (semua perangkat, termasuk yang itu),
- pemilik mengeluarkan Anda dari workspace — yang mengakhiri akses ke *workspace itu* seketika, di
  mana pun, tetapi tidak menyentuh akun Anda.

Kalau Anda terus-menerus dikeluarkan, hampir selalu penyebabnya browser memblokir cookie situs,
atau dua akun masuk di dua tab. Lihat
[Kalau ada yang janggal](/id/help/troubleshooting/#sesi-saya-terus-berakhir).

## Verifikasi email

Akun baru mengonfirmasi emailnya dengan kode enam digit sebelum masuk pertama kali — aturan 15
menit dan lima percobaan yang sama seperti kode atur ulang. Sampai dikonfirmasi, masuk akan
menghasilkan *"Silakan verifikasi email sebelum masuk."*

## Satu login, banyak workspace

Anda punya **satu akun** dan ia bisa tergabung di berapa pun workspace, dengan peran berbeda di
masing-masing. Seseorang bisa menjadi pemilik workspace-nya sendiri sekaligus petugas kebersihan di
workspace orang lain, dengan login yang sama. Berpindah lewat menu akun.

Jangan pernah berbagi login sebagai pengganti mengundang orang dengan benar. Setiap pembersihan
yang ditandai selesai, pesan yang terkirim, dan tiket yang ditutup tercatat atas sebuah akun, dan
catatan itulah yang menyelesaikan perdebatan di kemudian hari. Lihat
[Tim dan peran](/id/setup/team/).
