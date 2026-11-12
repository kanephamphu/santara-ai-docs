---
title: Tim dan peran
description: Undang co-host, manajer, dan petugas kebersihan, lalu berikan masing-masing bagian workspace yang mereka butuhkan.
sidebar:
  order: 6
---

**Pengaturan → Tim**. Tab ini hanya tampil untuk **host admin**, karena hanya mereka yang bisa
mengundang orang atau mengubah peran.

## Mengundang seseorang

Tekan **Undang anggota tim**. Isi **Nama** (wajib), **Peran**, dan **Akses**-nya. Kolom **Email
(opsional)** menentukan cara undangan sampai:

- **Dengan email**, undangan masuk ke kotak suratnya. *Mereka membuka tautan, membuat kata sandi,
  dan langsung masuk. Tanpa pendaftaran terpisah.*
- **Tanpa email** — *Tidak ada email? Kosongkan dan kirim tautan lewat WhatsApp sendiri.* Undangannya
  tampil sebagai **Hanya tautan**. Orang itu mengetik email dan kata sandinya di halaman yang dibuka
  tautan, lalu menerima **Kode 6 digit** untuk membuktikan alamatnya sebelum akun dibuat.

Setelah **Kirim undangan**, tautannya ditampilkan dengan tombol **Bagikan**, **Salin link**, dan
**WhatsApp**. Bagaimanapun caranya, tautan membuka satu halaman di `santara.ai/join/…`. Orang yang
**sudah punya akun Santara AI** cukup memasukkan kata sandinya di sana lalu bergabung — login yang
sama berlaku di setiap workspace yang ia ikuti.

Undangan yang belum dipakai tetap ada di bawah **Undangan**, masing-masing dengan **Berakhir
{date}** — tautan berlaku seminggu. Setiap undangan punya tiga tombol:

- **Salin link** — salin lagi untuk dikirim.
- **Tautan baru** — membuat tautan baru. **Tautan lama tidak berlaku lagi**, jadi pakai ini kalau
  tautan terkirim ke obrolan yang salah.
- **Batalkan undangan** — tautannya berhenti berfungsi.

Tautan yang kedaluwarsa meminta orang itu meminta tautan baru kepada Anda.

Satu orang bisa memegang peran berbeda di workspace berbeda. Login-nya miliknya; aksesnya per
workspace.

![Layar tim: siapa yang ada di workspace, perannya, dan apa yang bisa mereka akses.](/screens/team.id.png)

## Enam peran

| Peran | Melihat | Contoh penggunaan |
| --- | --- | --- |
| **Host admin** | Semuanya: visibilitas portofolio penuh dan penagihan | Anda, dan orang yang Anda percayai soal uang |
| **Co-host** | Akses alur kerja harian yang dibatasi cakupannya | Partner, manajer, kepala perawatan |
| **Petugas kebersihan** | Pembersihan yang ditugaskan kepadanya, dan cukup info untuk menemukan bangunannya | Staf kebersihan Anda |
| **Teknisi** | Tiket yang ditugaskan kepadanya, dan obrolan tim | Staf perawatan Anda |
| **Akuntan** | Laporan, payout, pengeluaran, dan pemilik — hanya soal uang, tidak pernah nama tamu | Akuntan Anda |
| **Sopir** | Penjemputan bandara miliknya, dan obrolan tim. Nama depan dan nomor telepon tamu hanya muncul sekitar waktu penjemputan | Sopir Anda |

Tidak ada peran "manajer properti" terpisah, dan Anda memang tidak membutuhkannya: **co-host yang
dibatasi ke dua bangunan** adalah manajer properti. Pembatasan cakupan adalah separuh kedua dari
setiap undangan — lihat di bawah.

**Host utama tidak bisa dihapus** dari workspace; itulah yang mencegah sebuah workspace berakhir
tanpa seorang pun yang bisa membayarnya.

## Cara kerja akses sebenarnya

Akses bukan daftar layar per jabatan. Setiap layar **dan setiap rute API** meminta **kapabilitas**
bernama — `stay.read`, `pricing.write`, `guest.message.send` — dan sebuah peran adalah kumpulan
kapabilitas, yang bisa dipersempit ke bangunan dan kamar tertentu.

Dua konsekuensi yang perlu diketahui:

- **Menyembunyikan menu bukan pengamanannya.** Rute menegakkan kapabilitas yang sama dengan yang
  dibaca navigasi, jadi tautan yang diketik manual ditolak, bukan sekadar disembunyikan.
- **Kelas data terpisah dari layar.** Kode pintu, kontak tamu, dan angka keuangan masing-masing kelas
  tersendiri. Petugas kebersihan bisa diberi tahu bangunan mana tanpa diberi kode pintunya, dan
  manajer bisa menjalankan operasi tanpa melihat payout pemilik.

## Membatasi ke bangunan tertentu

Setiap anggota punya pengaturan **Akses**: bangunan mana, dan kamar mana di dalamnya, yang boleh
mereka kerjakan. Pilihannya:

- **Semua bangunan, termasuk yang ditambahkan nanti** — pilihan tepat untuk partner, dan tidak perlu
  ditinjau ulang setiap kali Anda menambah properti.
- **Pilihan tertentu** — tentukan bangunan dan kamarnya. Ringkasannya berbunyi *"3 bangunan · 7
  kamar"*, dan anggota tanpa akses sama sekali diberi tahu dengan jelas alih-alih melihat dasbor
  kosong yang akan mereka laporkan sebagai kerusakan.

Anggota dengan batasan melihat pekerjaan bangunannya dan tidak melihat apa pun tentang sisa
portofolio Anda — bukan kalender, bukan pendapatan, bukan tamu.

**Host admin selalu punya akses ke setiap bangunan**, termasuk yang ditambahkan nanti. Itu bukan
pengaturan, dan karena itulah peran ini yang paling hati-hati Anda berikan.

## Pengalaman petugas kebersihan

Mereka masuk dan melihat pembersihan yang ditugaskan kepadanya, pada hari pelaksanaannya, lengkap
dengan alamat dan catatan akses untuk bangunan itu. Mereka menandai selesai, dengan foto bila perlu.
Itulah seluruh produknya bagi mereka, dan itu disengaja. Di [aplikasi Android](/id/mobile/getting-started/)
mereka hanya mendapat tab **Hari ini**, **Tugas**, dan **Lainnya**.

Jika Anda tidak ingin memberi akun sama sekali, bagikan
[pesan klaster kebersihan](/id/daily/tasks/#klaster-kebersihan) dari ringkasan harian — isinya
pekerjaan mereka dan tidak ada yang lain.

## Mengeluarkan seseorang

Hapus dari tim dan aksesnya berakhir seketika di semua perangkat. Pekerjaan yang sudah mereka lakukan
— pembersihan selesai, pesan terkirim, tiket diselesaikan — tetap tercatat atas nama mereka.

## Akun Anda sendiri

Nama, bahasa, zona waktu, dan kata sandi Anda adalah **milik Anda**, bukan milik workspace, dan
mengikuti Anda di setiap workspace yang Anda ikuti. Semuanya ada di balik menu akun di bagian bawah
bilah samping, bukan di tab Pengaturan — lihat [Akun dan keamanan Anda](/id/setup/account/). Untuk
yang dibagi bersama workspace, lihat [Pengaturan workspace](/id/setup/workspace/).
