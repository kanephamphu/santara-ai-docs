---
title: Mengelola listing setelah setup
description: Impor satu lagi, lepas satu, pindahkan listing ke kamar lain, dan baca apa yang sedang dilakukan tiap koneksi.
sidebar:
  order: 5
---

Semua di bawah ini ada di **Pengaturan → Channel**, atau di halaman koneksi masing-masing — buka
sebuah koneksi untuk melihat daftar lengkap listing-nya, yang dikelola satu per satu.

## Halaman koneksi

Tiap akun terhubung punya halaman sendiri yang menampilkan:

- **Status** dan waktu **sinkron terakhir**.
- **Listing pada koneksi ini**, masing-masing dengan statusnya — *tertaut*, *dipetakan*, *live* — dan
  kamar Santara AI yang ditunjuknya.
- **Segarkan**, yang membaca ulang semuanya dari channel sekarang juga.

Gunakan **Segarkan** lebih dulu setiap kali ada yang tampak usang. Aman, idempoten, dan menyelesaikan
sebagian besar laporan "channel dan Santara AI tidak cocok".

## Impor listing yang terlewat

Buka koneksinya, tekan **Cari listing di akun ini**, dan listing yang belum diimpor akan muncul.
Pilih tujuan masing-masing seperti saat impor pertama. Listing baru yang Anda buat di channel juga
muncul di sini.

## Tambah akun lain

**Hubungkan akun lain** pada channel yang sama. Umum bagi manajer yang memegang listing di beberapa
login Airbnb. Tiap koneksi berdiri sendiri.

## Pindahkan listing ke kamar lain

Hapus listing dari Santara AI, lalu impor lagi ke kamar yang diinginkan. Tidak ada pemindahan
langsung, dan itu disengaja: reservasi dan pesan yang sudah tiba milik kamar tempat mereka tiba, dan
memindahkannya diam-diam berarti menulis ulang riwayat.

Untuk **Booking.com**, properti tempat sebuah hotel tertaut *bisa* diganti langsung — **Ganti
properti**. Reservasi dan pesan mendatang mendarat di properti baru; yang sudah diimpor tetap.

## Hapus satu listing

**Hapus dari Santara AI** menghapus reservasi, pesan, tamu, dan ulasan kamar itu. Listing Anda di
channel tidak terpengaruh. Anda bisa mengimpornya lagi nanti; riwayatnya ikut kembali.

## Putuskan sebuah akun

**Putuskan** menghentikan sinkronisasi dan menghapus semua yang diimpor dari akun itu. Sisi channel
tetap utuh. Menghubungkan kembali akun yang sama nanti itu wajar.

Mencoba menghubungkan akun yang sudah terhubung menghasilkan *"Akun Airbnb ini sudah terhubung"* —
putuskan koneksi lama dulu.

## Menghapus properti yang masih terhubung

Santara AI menolaknya. Putuskan listing-nya dulu agar sisi channel ikut dibersihkan — jika tidak,
channel akan tetap memetakan ke kamar yang sudah tidak ada di sini.

## PriceLabs

Jika Anda sudah memakai PriceLabs, hubungkan di **Pengaturan → Channel → Hubungkan PriceLabs** dan
mesin pricing Santara AI akan mengalah untuk listing yang dikelola PriceLabs.

Anda memberikan **email akun** PriceLabs dan **API key** (PriceLabs → account settings → API). Key
diverifikasi ke PriceLabs, disimpan terenkripsi, dan hanya dipakai untuk memastikan akun — Santara AI
tidak membaca harga dari PriceLabs.

:::caution
Jangan pernah menempelkan kata sandi PriceLabs di mana pun dalam Santara AI. Masuklah di situs resmi
PriceLabs, lalu berikan hanya API key yang memang untuk integrasi.
:::
