---
title: Santi di Discord
description: Pakai Santi di Discord dengan perintah garis miring — secara pribadi atau di server tim Anda. Tautkan sekali dengan akun Santara AI, lalu bertanya, menyetujui perubahan, memulai dan menyelesaikan kebersihan, dan mengirim foto kebersihan.
sidebar:
  order: 3
---

Santi juga ada di Discord. Ini Santi yang sama seperti di [aplikasi Santi](/id/help/santi-app/) dan
[di Telegram](/id/help/santi-telegram/), dengan akun Santara AI yang sama di belakangnya.

Di Discord Anda berbicara dengan Santi lewat **perintah garis miring**: ketik **/** lalu pilih salah
satu perintah Santi. Santi tidak membaca pesan obrolan biasa, jadi untuk bertanya gunakan **/santi**.

Setiap orang memakai **akun Santara AI miliknya sendiri**, jadi Santi hanya melihat dan melakukan apa
yang diizinkan perannya di workspace. Petugas kebersihan bisa memulai dan menyelesaikan tugasnya
sendiri; mereka tidak bisa memblokir tanggal atau melihat pendapatan.

## Terhubung dalam dua menit

![Menghubungkan Santi di Discord: tambahkan Santi, tanya dengan /santi dan buka tautan masuk pribadi, lalu Santi menjawab.](/diagrams/santi-discord-connect.id.svg)

1. Buka **[tautan tambah Santi](https://discord.com/oauth2/authorize?client_id=1572558251818487960)**.
   Pilih **Tambahkan ke Aplikasi Saya** untuk memakai Santi di mana saja di Discord, atau **Tambahkan
   ke Server** untuk menaruhnya di server tim. Tekan **Otorisasi**.
2. Di obrolan dengan Santi (atau kanal mana pun), ketik **/santi**, pilih, lalu tulis pertanyaan —
   *"Ada apa hari ini?"*.
3. Santi membalas dengan **Sign in with Santara**, bertanda *Hanya Anda yang dapat melihat ini*.
   Buka, masuk ke Santara AI, dan periksa halamannya: tertulis akun Discord **Anda** dan akun
   Santara AI **Anda**. Tekan **Link Discord**.
4. Santi mengirim pesan bahwa Anda sudah tertaut — dan menjawab pertanyaan pertama Anda.

:::caution[Hanya tautkan Discord milik Anda]
Jika seseorang mengirimi Anda tautan masuk, tutup saja. Halaman itu menyebut akun Discord mana yang
akan ditautkan — jika itu bukan Anda, jangan tekan tombolnya.
:::

Tautan hanya berlaku sekali dan selama 10 menit; jika kedaluwarsa, kirim **/santi** lagi untuk tautan
baru. Untuk memutus sambungan nanti, kirim **/unlink**.

## Tanya apa saja

**/santi** menerima satu pertanyaan, ditulis seperti kepada rekan kerja — *"Siapa yang tiba
besok?"*, *"Buat draf balasan untuk Anna"*, *"Apakah villa 2 kosong akhir pekan depan?"*. Santi
membaca data Santara AI secara langsung, menjawab dalam bahasa Anda, dan singkat.

### Perubahan selalu bertanya dulu

Saat Anda meminta perubahan — memblokir tanggal, mengirim balasan ke tamu, menugaskan kebersihan —
Santi menampilkan **semua detailnya** di bawah jawaban (apa yang berubah, dari apa menjadi apa), dengan
tombol **✅ Konfirmasi** dan **Batal**. Ketuk **✅ Konfirmasi** sekali — atau cukup balas **OK** — dan
selesai. Balas **Tidak** atau ketuk **Batal** untuk membatalkan. Tidak ada yang berubah sebelum itu, dan
hanya orang yang meminta yang bisa mengonfirmasi. Perubahan besar, seperti membatalkan pemesanan,
dikonfirmasi di aplikasi Santi.

## Kebersihan: Mulai, Selesai, dan foto

Kirim **/jobs** untuk melihat tugas kebersihan hari ini, masing-masing dengan tombol:

- **▶ Mulai** saat Anda mulai membersihkan.
- **✅ Selesai** saat sudah beres. Host langsung melihatnya di Santara AI.

Petugas kebersihan hanya melihat tugasnya sendiri. Host atau co-host melihat semua tugas (jika ada
lebih dari 8 tugas terbuka, daftar tampil tanpa tombol — buka tugasnya di Santara AI).

**Foto:** kirim **/photo** dan lampirkan gambarnya. Santi bertanya **foto ini untuk tugas yang
mana**; ketuk tugasnya dan foto terlampir di Santara AI, lalu Santi menawarkan **✅ Selesai**. Satu
**/photo** untuk setiap gambar, hingga 10 per tugas.

## Server tim Anda

![Santi di server Discord: host mengirim /use, siapa pun mengirim /jobs, dan ketuk Selesai memperbarui Santara AI.](/diagrams/santi-discord-server.id.svg)

1. Tambahkan Santi ke server dengan **[tautan tambah Santi](https://discord.com/oauth2/authorize?client_id=1572558251818487960)**
   → **Tambahkan ke Server** (Anda perlu izin mengelola server).
2. Di kanal tim, **host, admin, atau co-host** mengirim **/use**. Kanal ini sekarang terhubung ke
   workspace tersebut.
3. Siapa pun di kanal memakai **/santi**, **/jobs**, atau **/photo**.

Semua orang di kanal membaca jawaban Santi, jadi kanal tim biasa hanya mendapat **urusan tim** —
kebersihan, tiket, dan tanggal. Pendapatan, pembayaran, dan pesan tamu dijawab di **obrolan
pribadi** dengan Santi. Kanal khusus manajer bisa diatur dengan **/use managers**.

Setiap orang tetap menautkan Discord-nya sendiri sekali: saat pertama memakai Santi, tautan masuk
hanya muncul untuk mereka.

## Notifikasi

Orang yang sudah tertaut juga menerima pemberitahuan Santi sebagai **pesan langsung** dari Santi
(tidak pernah di server): ringkasan pagi, pemesanan baru dan pembatalan, serta tamu yang menunggu
balasan lebih dari dua jam.

## Perintah

| Perintah | Fungsinya |
|---|---|
| **/santi** | Tanya Santi apa saja |
| **/jobs** | Kebersihan hari ini dengan ▶ Mulai / ✅ Selesai |
| **/photo** | Kirim foto kebersihan dan pilih tugasnya |
| **/use** | Hubungkan kanal ini ke workspace Anda (host, admin, co-host) |
| **/help** | Apa yang bisa dilakukan Santi di sini |
| **/workspace** | Lihat workspace Anda, atau ganti dengan tombol atau **/workspace** *nama* (chat pribadi) |
| **/unlink** | Putuskan akun Discord Anda |

## Jika ada yang tidak berjalan

- **Santi tidak menjawab pesan biasa.** Di Discord, Santi hanya menjawab perintah garis miring —
  gunakan **/santi** dengan pertanyaan Anda.
- **Perintah Santi tidak muncul saat mengetik /.** Tambahkan Santi dulu dengan tautan di atas.
- **Santi bilang kanal belum terhubung.** Host atau co-host mengirim **/use** di kanal itu.
- **"Anda tidak punya akses ke workspace ini."** Minta host menambahkan Anda ke workspace di
  Santara AI ([Tim](/id/setup/team/)).
- **Tombol bilang Anda tidak bisa mengubah tugas itu.** Tugas itu milik orang lain — minta host
  menugaskannya kepada Anda.
- **Tautan masuk kedaluwarsa.** Kirim **/santi** lagi untuk tautan baru.
