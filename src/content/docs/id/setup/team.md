---
title: Tim dan peran
description: Undang co-host, manajer, dan petugas kebersihan, lalu berikan masing-masing bagian workspace yang mereka butuhkan.
sidebar:
  order: 5
---

**Pengaturan → Tim**. Undangan dikirim lewat email berupa tautan. Jika orangnya belum punya akun, ia
mendaftar dulu, lalu menerima undangan untuk bergabung ke workspace ini.

Satu orang bisa memegang peran berbeda di workspace berbeda. Login-nya miliknya; aksesnya per
workspace.

![Layar tim: siapa yang ada di workspace, perannya, dan apa yang bisa mereka akses.](/screens/team.id.png)

## Tiga peran

| Peran | Melihat | Contoh penggunaan |
| --- | --- | --- |
| **Host admin** | Semuanya: visibilitas portofolio penuh dan penagihan | Anda, dan orang yang Anda percayai soal uang |
| **Co-host** | Akses alur kerja harian yang dibatasi cakupannya | Partner, manajer, kepala perawatan |
| **Petugas kebersihan** | Pembersihan yang ditugaskan kepadanya, dan cukup info untuk menemukan bangunannya | Staf kebersihan Anda |

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
Itulah seluruh produknya bagi mereka, dan itu disengaja.

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
