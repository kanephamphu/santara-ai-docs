---
title: Hubungkan ChatGPT, Claude, atau Grok
description: Pakai Santara AI dari ChatGPT, Claude, Grok, dan asisten AI lain — cara menghubungkan masing-masing, apa yang boleh dilakukan asisten sendiri, bagaimana ia bertanya dulu, dan cara memutus koneksi.
sidebar:
  order: 2
---

Anda bisa berbicara dengan workspace Santara AI dari asisten AI yang sudah Anda pakai. Tanyakan
*“Siapa yang tiba hari ini?”* atau *“Blokir Garden Room akhir pekan ini”* di ChatGPT, Claude, atau
Grok, dan ia menjawab dari — serta bekerja di — kalender, pemesanan, tamu, dan papan kebersihan Anda
yang sebenarnya.

Pengguna Claude: hubungkan dari halaman Santara AI di
**[direktori connector Claude](https://claude.ai/directory/santara-ai)** — tanpa alamat. Semua asisten lain terhubung lewat alamat yang
sama:

```
https://mcp.santara.ai/mcp
```

![Empat langkah menghubungkan asisten AI: tambahkan URL di aplikasi AI, lalu masuk dan izinkan di Santara AI, lalu bertanya.](/diagrams/ai-connect.id.svg)

:::note
Kata sandi Anda tidak pernah dikirim ke aplikasi AI. Santara AI sendiri yang memasukkan Anda dan
memberi aplikasi sebuah kunci yang hanya berlaku untuk workspace yang Anda pilih — dan bisa Anda
cabut kapan saja.
:::

## Claude

Santara AI sudah terdaftar di direktori connector resmi Claude:
**[claude.ai/directory/santara-ai](https://claude.ai/directory/santara-ai)**. Berfungsi di claude.ai, Claude Desktop, dan aplikasi
Claude di ponsel.

1. Buka **[Santara AI di direktori Claude](https://claude.ai/directory/santara-ai)** — atau di Claude buka
   **Settings → Connectors → Browse connectors** dan cari **Santara AI**.
2. Klik **Connect**. Santara AI terbuka: masuk, pilih workspace, lalu klik **Izinkan**.
3. Di chat, aktifkan lewat **+ → Connectors** dan mulai bertanya.

:::note
Gunakan connector resmi, bukan custom connector — tidak ada alamat untuk ditempel dan tidak ada yang
perlu diatur. Jika sebelumnya Anda menambahkan Santara AI sebagai **custom connector**, hapus di
**Settings → Connectors** lalu hubungkan lagi dari direktori. Pada paket Team dan Enterprise, pemilik
mungkin perlu mengaktifkan connector-nya lebih dulu.
:::

## ChatGPT

1. Buka **Plugins** di sidebar, klik **Add**, lalu pilih **Add custom MCP server**.

   ![Halaman Plugins di ChatGPT dengan menu Add terbuka pada “Add custom MCP server”.](/screens/ai/chatgpt-1-add.webp)

2. Beri nama **Santara AI**, tempel `https://mcp.santara.ai/mcp` di **Connection → Server URL**, dan
   biarkan **Authentication: OAuth**.

   ![Formulir “Add custom MCP server” di ChatGPT dengan nama dan URL server Santara AI.](/screens/ai/chatgpt-2-form.webp)

3. Tidak ada yang perlu diatur di **Advanced OAuth settings** — ChatGPT menemukan cara masuk Santara AI
   dan memilih **Client Identifier Metadata Document (CIMD)** sendiri.

   ![Pengaturan OAuth lanjutan ChatGPT yang menunjukkan metode CIMD yang dipilihnya sendiri.](/screens/ai/chatgpt-3-cimd.webp)

4. Klik **Create as a plugin**. Santara AI terbuka: masuk, pilih workspace, lalu klik **Izinkan**.
5. Di chat, tambahkan **Santara AI** lewat **+ → Plugins** dan mulai bertanya.

:::note
Custom MCP server memerlukan paket ChatGPT berbayar. Pada Business dan Enterprise, admin mungkin perlu
mengizinkannya lebih dulu.
:::

## Grok

1. Buka **grok.com/connectors** dan masuk ke Grok.

   ![Halaman Connectors di Grok.](/screens/ai/grok-1-connectors.webp)

2. Pilih **New Connector → Custom** dan tempel `https://mcp.santara.ai/mcp`.
3. Santara AI terbuka: masuk, pilih workspace, lalu klik **Izinkan**.

Grok mendaftarkan dirinya sendiri, jadi untuk saat ini aksesnya **hanya baca**: ia bisa menjawab
pertanyaan, tetapi tidak bisa mengubah apa pun.

## Aplikasi AI lain

Aplikasi apa pun yang mendukung MCP bisa dipakai — Claude Code, Cursor, VS Code, dan lainnya. Aplikasi
ini mendaftarkan dirinya sendiri, jadi aksesnya juga **hanya baca**.

```
claude mcp add --transport http santara https://mcp.santara.ai/mcp
```

Saat aplikasi pertama kali memakai Santara AI, browser Anda terbuka untuk masuk dan klik **Izinkan**.

## Apa yang boleh dilakukan asisten

ChatGPT dan Claude diverifikasi lewat alamat web mereka sendiri, jadi keduanya bisa bekerja untuk Anda.
Apa yang berjalan sendiri dan apa yang menunggu persetujuan Anda, Anda yang menentukan:

| Jenis perubahan | Bawaan | Contoh |
| --- | --- | --- |
| Kalender, tiket, dan kebersihan | Langsung berjalan | Blokir atau buka tanggal, buka tiket, tugaskan kebersihan |
| Harga | Langsung berjalan | Tarif per malam, minimal menginap |
| Pesan ke tamu | Bertanya dulu | Balasan, penawaran upsell, balasan ulasan |
| Pemesanan dan pengeluaran | Bertanya dulu | Buat, ubah, atau batalkan reservasi, tambah pengeluaran |
| Tagihan, pengaturan, tim, kanal | Tidak pernah | Tidak ada asisten yang bisa mengubahnya |

Asisten juga tidak pernah bisa melakukan lebih dari yang diizinkan **peran Anda sendiri**.

### Saat asisten bertanya dulu

Pada percobaan pertama, tidak ada yang berubah. Asisten menunjukkan perubahan persisnya — pesan untuk
tamu kata demi kata — lalu bertanya. Baru setelah Anda setuju di chat, Santara AI menjalankannya.
Claude dan ChatGPT juga menampilkan konfirmasi **Allow** mereka sendiri sebelum setiap tindakan
Santara AI.

![Konfirmasi bawaan Claude sebelum memakai Santara AI.](/screens/ai/claude-4-allow.webp)

![Claude menunjukkan perubahan persisnya dan bertanya sebelum membatalkan pemesanan.](/screens/ai/claude-5-asks.webp)

:::caution
Pesan dari tamu tidak pernah menjadi perintah. Asisten diminta mengabaikan perintah yang muncul di
dalam pesan, ulasan, atau listing, dan konfirmasi sekali pakai tidak bisa dipalsukan dari sana.
:::

## Ubah apa yang boleh dilakukan asisten

Buka **[Asisten AI](https://www.santara.ai/dashboard/assistant-actions/)** di Santara AI. Untuk setiap
jenis perubahan, pilih **Jalankan sendiri**, **Tanya saya di chat**, atau **Tidak diizinkan**. Hanya
pemilik atau admin yang bisa mengubahnya. Halaman yang sama mencatat semua yang dilakukan dan
ditanyakan setiap asisten.

## Putuskan koneksi

Di Santara AI buka **Pengaturan → Channel → Aplikasi** lalu klik **Putuskan** di samping asisten.
Perubahan berhenti dalam hitungan detik; akses baca berhenti dalam sepuluh menit. Menghapus connector
di ChatGPT atau Claude juga bisa, tetapi hanya daftar di Santara AI yang menunjukkan aksesnya sudah
dicabut.

## Untuk developer

Referensi lengkap semua tool — parameter dan fungsinya — dibuat langsung dari server di
[mcp.santara.ai/docs](https://mcp.santara.ai/docs), dan versi untuk mesin di
[mcp.santara.ai/tools.json](https://mcp.santara.ai/tools.json).
