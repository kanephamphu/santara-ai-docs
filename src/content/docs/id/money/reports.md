---
title: Laporan
description: Pendapatan, okupansi, capaian upsell, dan keandalan operasional — sebagai ringkasan siap kirim ke pemilik dan sebagai CSV.
sidebar:
  order: 4
---

Laporan menjawab "bagaimana hasil kita", untuk Anda dan untuk orang yang Anda laporkan.

![Laporan: snapshot siap kirim ke pemilik, dan CSV yang dihasilkan dari data terkini.](/screens/reports.id.png)

## Arti pendapatan di sini

**Pendapatan adalah payout bersih** — yang benar-benar dibayarkan channel setelah komisi. Selalu
diberi label di layar.

Tiga angka disimpan terpisah untuk tiap masa menginap, karena memang berbeda:

- **Gross** — yang dibayar tamu.
- **Pendapatan kamar** — bagian akomodasi, tanpa biaya lain.
- **Payout** — yang sampai ke Anda.

Sebuah laporan menyebut angka mana yang dipakainya. Jika Anda merekonsiliasi dengan rekening bank,
payout-lah yang cocok.

## Snapshot

Bacaan ringkas tentang apa yang berubah dalam periode itu, apa yang masih bisa diselamatkan, dan di
mana operasi butuh perhatian. Ditulis agar bisa diteruskan ke pemilik tanpa disunting.

## Pustaka laporan

CSV yang dihasilkan dari data terkini:

| Laporan | Yang dijawabnya |
| --- | --- |
| **Rekap portofolio** | Sepekan dalam sekali baca, untuk pemilik dan operator |
| **Performa upsell** | Tawaran terbuka, terlewat, dan diterima; jenis tawaran terkuat per properti |
| **Keandalan operasional** | Risiko turnover, celah konfirmasi, tindak lanjut petugas, penghambat |
| **Pengalaman tamu** | Peringatan, utas prioritas, sinyal keluhan, tindak lanjut yang disarankan |

CSV dihasilkan dari data reservasi, kebersihan, tamu, dan upsell terbaru pada saat Anda mengunduhnya
— bukan dari snapshot semalam.

## Laporan terjadwal

Laporan berulang dapat disiapkan untuk pemilik, petugas kebersihan, dan tinjauan pendapatan, sehingga
email mingguan ke pemilik tidak perlu dibangun ulang setiap Senin.

## Rincian

Dalam jendela mana pun Anda bisa merinci pendapatan, nilai upsell, dan risiko **per kamar**, serta
membandingkan okupansi kamar dengan penghasilannya per malam — begitulah kamar yang kemurahan dan
kamar yang kekosongan memisahkan diri. Kamar yang selalu penuh tetapi murah dan kamar yang kosong
tetapi mahal terlihat identik dalam total pendapatan dan sama sekali berbeda di sini.

## Okupansi, ADR, RevPAN

- **Okupansi** — malam terjual dibagi malam tersedia.
- **ADR** — pendapatan dibagi malam terjual.
- **RevPAN** — pendapatan dibagi seluruh malam yang harus dijual.

Nilai [pricing](/id/money/pricing/) dengan RevPAN. Hanya angka itu yang tidak bisa diperbaiki dengan
memperburuk angka lainnya.

## Sisi lain pembukuan

Laporan adalah yang **masuk**. Yang **keluar** — kebersihan, perawatan, utilitas, laporan pemilik —
ada di [Akuntansi](/id/money/accounting/). Keduanya memang dimaksudkan dibaca dalam satu duduk.
