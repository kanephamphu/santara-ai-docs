---
title: Santi di Zalo
description: Mengobrol dengan Santi di Zalo — pribadi atau di grup tim. Tautkan sekali dengan akun Santara AI; pilihan muncul sebagai angka yang Anda balas.
sidebar:
  order: 2
---

Santi di Zalo bekerja seperti [di Telegram](/id/help/santi-telegram/): bertanya, menyetujui
perubahan, memulai dan menyelesaikan tugas kebersihan, dan mengirim foto — setiap orang dengan **akun
Santara AI miliknya sendiri**, jadi Santi hanya melihat dan melakukan apa yang diizinkan perannya.

Satu-satunya perbedaan: **bot Zalo tidak punya tombol.** Di mana Telegram menampilkan tombol, Santi di
Zalo mengirim **pilihan bernomor**, dan Anda membalas dengan angkanya:

> Ini perubahannya: blokir Villa A untuk 1 malam. Periksa, lalu ketuk Ya.
>
> **[1] Ya   [2] Tidak**

Balas **1**. Selesai — angka itu berlaku persis seperti mengetuk tombol, dan pemeriksaannya sama
(hanya orang yang meminta yang bisa mengonfirmasi perubahannya sendiri).

## Terhubung

![Menghubungkan Santi di Zalo: sapa, buka tautan masuk dan tekan Link Zalo, lalu tanya apa saja.](/diagrams/santi-zalo-connect.id.svg)

1. Buka **Bot SantiAI** di Zalo — host Anda atau tim Santara AI membagikan tautan atau kode QR-nya —
   lalu kirim apa saja, misalnya *"Ada apa hari ini?"*.
2. Santi membalas dengan **tautan masuk**. Buka, masuk ke Santara AI, dan periksa halaman menyebutkan
   akun Zalo **Anda** dan akun Santara AI **Anda**. Tekan **Link Zalo**.
3. Kembali ke Zalo, Santi memberi tahu bahwa akun sudah tertaut dan menjawab pertanyaan pertama Anda.

Tautan hanya bisa dipakai sekali dan berlaku 10 menit. Untuk memutuskan nanti, kirim **/unlink**.

:::caution[Hanya tautkan Zalo Anda sendiri]
Kalau seseorang mengirimi Anda tautan untuk masuk, tutup saja. Halaman itu menyebutkan akun Zalo mana
yang akan ditautkan — kalau itu bukan Anda, jangan tekan tombolnya.
:::

## Bertanya, menyetujui, membersihkan

Semua yang ada di [Santi di Telegram](/id/help/santi-telegram/) berlaku di sini, dengan angka sebagai
pengganti tombol:

- **Pertanyaan** — tulis seperti biasa; Santi menjawab dalam bahasa Anda.
- **Perubahan** — balas **1** untuk Ya, lalu **1** lagi untuk Konfirmasi.
- **/jobs** — tugas kebersihan hari ini sebagai daftar bernomor: *[1] ▶ Mulai · Villa A*, *[2] ✅
  Selesai · Villa A*… Balas dengan angkanya untuk memulai atau menyelesaikan tugas.
- **Foto** — kirim ke Santi (di grup, tulis **@Santi** di keterangan). Santi menampilkan tugas hari
  ini dengan nomor; balas dengan nomor tugasnya dan foto dilampirkan di Santara AI.

Nomor berlaku 15 menit dan selalu mengacu ke daftar **terbaru** Santi di chat itu. Kalau Anda
membalas daftar lama, kirim **/jobs** lagi untuk daftar baru.

## Grup tim Anda

![Menambahkan Santi ke grup Zalo: buka tautan undangan dan pilih grup, host mengirim /use, lalu sebut @Santi dan balas dengan angka.](/diagrams/santi-zalo-group.id.svg)

**Tambahkan Santi ke grup** (sekali, oleh siapa pun di grup — biasanya host):

1. Di ponsel, buka tautan undangan: **[https://bot.zaloplatforms.com/groups/invite/bot.VmIvWNvh](https://bot.zaloplatforms.com/groups/invite/bot.VmIvWNvh)**.
2. Zalo membuka **Undang Bot SantiAI ke grup**. Pilih grup tim Anda dan konfirmasi.
3. Di grup, **host, admin, atau co-host** mengirim **/use**. Santi membalas bahwa grup sekarang
   terhubung ke workspace Anda.

**Setelah itu semua orang bisa memakainya:**

4. Tulis **@Santi** di awal pesan, atau kirim **/perintah** seperti **/jobs**.
5. Saat Santi mengirim pilihan bernomor, balas dengan angkanya saja — **2** berarti "Selesai".
6. Pertama kali, setiap orang menautkan Zalo-nya sendiri: Santi meminta mereka mengirim pesan
   pribadi dan masuk (lihat *Terhubung* di atas).

Seperti di Telegram, grup tim biasa hanya mendapat urusan tim — kebersihan, tiket, dan tanggal.
Tanyakan pendapatan, pembayaran, atau pesan tamu di chat pribadi dengan Santi. Fitur grup untuk bot
di Zalo masih Beta, jadi kalau Santi melewatkan pesan di grup, mulai dengan **@Santi** atau pakai
**/perintah**.

## Notifikasi

Orang yang sudah tertaut menerima pemberitahuan Santi — ringkasan pagi, pemesanan baru dan pembatalan,
tamu yang menunggu lebih dari dua jam — di chat Zalo **pribadi** dengan Santi, tidak pernah di grup.

## Perintah

| Perintah | Fungsinya |
|---|---|
| **/jobs** | Tugas kebersihan hari ini, bernomor: balas untuk memulai atau menyelesaikan |
| **/use** | Hubungkan grup ini ke workspace Anda (host, admin, co-host) |
| **/help** | Apa yang bisa Santi lakukan di sini |
| **/unlink** | Putuskan akun Zalo Anda |
