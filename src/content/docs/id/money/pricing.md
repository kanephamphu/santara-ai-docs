---
title: Smart pricing
description: Pilih siapa yang menetapkan harga tiap kamar — aturan siap pakai Santara AI untuk area Anda, PriceLabs, atau Anda sendiri — dengan batas keras, dan harga manual Anda tetap aman.
sidebar:
  order: 1
---

Mesin pricing Santara AI menghitung tarif untuk setiap malam mendatang dan menerbitkannya ke channel
Anda. Mesin ini berjalan dengan **aturan siap pakai Santara AI untuk tiap area** — musim, akhir pekan,
dan hari libur di pasar tempat properti Anda berada — dan Anda bisa melihat persis apa yang akan
dilakukannya sebelum ada yang keluar.

Tidak ada yang diberi harga otomatis sampai sebuah kamar diatur ke **Otomatis (Santara AI)** dan
propertinya sudah punya area. Kamar dengan **Manual — saya atur harga** mempertahankan harga yang ada.

Layar **Harga** punya tiga tab — **Kalender**, **Harga saluran**, dan **Siapa yang menetapkan harga**
— dan merupakan bagian dari paket **Operator** (dan dari paket tunggal di
[pasar dengan harga sendiri](/id/setup/billing/#pasar-dengan-harga-sendiri)). Lihat
[Paket dan penagihan](/id/setup/billing/).

Untuk menetapkan satu malam secara manual — atau minimum menginap, atau berapa unit yang bisa dijual —
lihat **[Tarif dan ketersediaan](/id/money/rates/)**.

![Tab Siapa yang menetapkan harga: setiap kamar dikelompokkan per properti, masing-masing dengan pilihan Otomatis (Santara AI), PriceLabs, atau Manual — saya atur harga, area yang dipakai tiap properti untuk Otomatis, dan jam pembaruan setiap malam.](/screens/pricing.id.png)

## Siapa yang menetapkan harga tiap kamar

Tab **Siapa yang menetapkan harga** mendaftar setiap kamar di bawah propertinya, dengan satu pilihan
per kamar:

| Pilihan | Artinya |
| --- | --- |
| **Otomatis (Santara AI)** | Berubah setiap hari sesuai permintaan, dengan aturan siap pakai untuk area properti. Harga mulai berubah malam ini |
| **PriceLabs** | Harga datang dari listing PriceLabs yang Anda pilih untuk kamar itu — lihat [di bawah](#jika-anda-sudah-memakai-pricelabs) |
| **Manual — saya atur harga** | Tidak ada yang mengubah harganya. Harga tetap seperti sekarang, dan Anda mengubahnya di [kalender tarif](/id/money/rates/) |

Satu kamar hanya punya satu pilihan; memilih satu menghapus yang lain. Titik di tiap baris berwarna
hijau saat berjalan dan kuning saat perlu Anda — klik untuk melihat alasannya, misalnya *Terbitkan
harga otomatis* mati sehingga harga hanya saran, atau kamar belum ada di saluran mana pun.

**Ubah beberapa** memungkinkan Anda mencentang beberapa kamar, atau semua kamar di satu properti, lalu
mengaturnya sekaligus. Bagian atas tab menghitung kamar di tiap pilihan dan menyebutkan jam pembaruan
setiap malam.

## Memilih area

Otomatis memakai satu **area** per properti — pasar yang musim, hari libur, dan akhir pekannya mirip
dengan milik Anda. Semua kamar Otomatis di properti itu memakainya bersama. Properti tanpa area
menampilkan *Belum ada area untuk Otomatis* dan kamarnya tetap manual; di tab Kalender tertulis *Belum
ada aturan — properti ini tidak pernah dihargai*.

Anda memilih area saat memindahkan kamar ke Otomatis, atau lewat **Ubah** di samping nama properti.
Pemilihnya mencari berdasarkan kota, pulau, atau negara, dan menaruh area **Disarankan untuk properti
ini** paling atas, berdasarkan lokasi properti. Tidak ada yang diterbitkan sampai Anda memilih.

Tidak ada yang perlu disusun atau diedit: aturannya milik Santara AI, dan kami memperbarui tanggal
liburnya setiap tahun — termasuk yang bergeser mengikuti bulan, seperti Nyepi dan Idul Fitri. Rule set
yang dulu Anda salin dan edit masih tercantum di **Aturan Anda** dan tetap berjalan seperti biasa,
tetapi **kami tidak memelihara tanggalnya**.

## Dua bagiannya

**Aturan area menentukan bentuk tahun. Angka kamar menentukan bentuk itu bentuk dari apa.**

- **Aturan** adalah pengali: musim ini ×1,85, Jumat +20%, Natal menggantikan musim. Satu area bisa
  memberi harga lima puluh properti.
- **Pengaturan pricing kamar** adalah harga dasar, lantai dan plafon, serta biayanya. Itu milik Anda,
  di [Ubah harga](#angka-milik-listing).

![Harga per malam dimulai dari harga dasar, dikalikan musim dan hari, bisa digantikan acara, lalu dibatasi oleh limit Anda dan limit channel sebelum diterbitkan. Harga yang Anda ketik manual melewati semuanya.](/diagrams/pricing-pipeline.id.svg)

Tampilan **Tahun** di tab Kalender mendaftar **Acara yang memengaruhi harga Anda** dalam 12 bulan ke
depan beserta efeknya — seberapa jauh harga bergeser, dan apakah acara itu memblokir diskon, check-in,
atau check-out.

## Angka milik listing

Tekan **Ubah harga** di tab **Kalender**. Ia terbuka pada kamar yang sedang digambar grafiknya:

| Pengaturan | Artinya |
| --- | --- |
| **Harga dasar** | Acuan semua pengali. Dipakai hanya bila rate plan tidak punya harga sendiri — harga plan didahulukan |
| **Rate plan** | Harga dinamis menetapkan plan utama. Plan yang *Mengikuti plan utama* bergerak bersamanya sesuai selisihnya; plan yang *Berdiri sendiri* tetap di tempatnya |
| **Minimum / Maksimum** | Batas keras. Pricing otomatis tidak pernah melewatinya. Minimum menggantikan lantai hasil hitungan; bukan menaikkannya |
| **Biaya per malam** | Biaya melayani satu malam. Isi keenam kolom atau tidak sama sekali — satu kolom kosong membuat lantai kembali ke porsi harga dasar |
| **Hargai properti ini otomatis** | Mati berarti aturan tidak berjalan di sini sama sekali |
| **Terbitkan harga otomatis** | Mati berarti harga dihitung dan ditampilkan, tetapi tidak diterbitkan |
| **Ganti harga yang saya ketik sendiri** | Mati secara bawaan. Lihat di bawah |
| **Yang diterima saluran** | Jendela terpisah milik Booking.com dan Airbnb. Ia mempersempit rentang di atas, bukan menggantikannya |

## Melindungi harga manual

**Harga yang Anda ketik manual tidak pernah ditimpa**, kecuali Anda menyalakan *Ganti harga yang saya
ketik sendiri* untuk listing itu. Bila menyala, tarif yang Anda ketik ditimpa dan **nilainya hilang —
tidak ada undo**.

Karena itulah Anda bisa dengan aman memberi harga manual untuk sepekan pernikahan pada kamar yang
selebihnya otomatis. Grid menandai malam yang Anda hargai sendiri; kosongkan selnya untuk
mengembalikannya ke harga dinamis. Untuk kamar yang harganya sama sekali tidak boleh bergerak, pilih
**Manual — saya atur harga**.

## Melihat sebelum menerbitkan

Tab **Kalender** punya dua tampilan. **Grid** menggambar harga Anda untuk 90 malam ke depan di atas
[grid tarif](/id/money/rates/), dengan porsi terpesan di bagian bawah — klik satu malam untuk melihat
mengapa harganya begitu — dan sebaris angka untuk 14 malam ke depan: harga rata-rata, terpesan, malam
penuh, dan apakah harga pintar aktif. **Tahun** menampilkan setahun harga: grafik tren berisi saran
mesin terhadap tarif dasar serta lantai dan plafon yang tidak boleh dilewati, acara-acaranya, dan peta
panas.

Atur kamar ke Otomatis, biarkan *Terbitkan harga otomatis* mati, dan amati seminggu sebelum
melepasnya.

### Sinkronkan sekarang

**Sinkronkan sekarang** di tab **Kalender** menjalankan aturan untuk listing yang sedang digambar
grafiknya dan membuka **Pratinjau harga dinamis**. Belum ada yang diterbitkan. Setiap malam
ditampilkan sebagai **Akan berubah**, **Harga Anda, tidak disentuh** (harga yang Anda ketik manual),
atau **Sudah tepat**, dan **Mengapa harga ini** menguraikan satu malam menjadi harga dasar, musim,
hari dalam seminggu, acara, laju booking, malam celah, dan menit terakhir. Malam yang tertahan di
lantai atau plafon Anda menyebutkannya.

**Terapkan harga ini** menerbitkannya ke channel Anda. Kalau *Terbitkan harga otomatis* mati untuk
listing itu, daftarnya hanya saran dan tombolnya menjadi **Terapkan N harga saran**: malam-malam itu
disimpan sebagai harga Anda sendiri, sama seperti mengetiknya di grid, sehingga harga dinamis tidak
menyentuhnya sampai Anda menghapusnya. Selama PriceLabs memegang tarif, atau harga dinamis dimatikan,
tombol Terapkan tidak ada — daftarnya adalah apa yang akan ditulis, bukan yang sudah. Menyimpan harga
dasar baru di **Ubah harga** menawarkan pratinjau yang sama, jadi Anda tidak perlu menunggu proses
malam hari untuk melihat dampaknya. Hanya pemilik workspace yang bisa menjalankannya.

### Cek pasar

Bila Santara Revenue sudah disiapkan, **Cek pasar** (Beta) di tab Kalender menampilkan harga pesaing
Anda, dicek setiap hari, dan menyarankan malam yang layak diubah. Tidak ada yang berubah sampai Anda
menerapkan satu malam. Pilih dulu pesaing untuk sebuah listing di Santara Revenue — **Atur pesaing**
membawa Anda ke sana. Untuk kamar Otomatis, *Biarkan Harga pintar mengikuti pesaing* menarik tiap malam
setengah jalan ke harga saran, maksimal 15%, dalam batas Anda.

## Harga saluran

Tab **Harga saluran** menyimpan **satu penyesuaian per saluran**. Setiap plan yang dipetakan ke sebuah
saluran dijual di sana dengan harga Anda ditambah penyesuaiannya, jadi Anda cukup mengubah harga sekali
dan semua saluran mengikuti.

Di samping tiap saluran ada komisi yang diambilnya dari booking terakhir Anda dan penyesuaian **titik
impas**. Saluran memotong bagiannya dari harga yang sudah disesuaikan, jadi untuk menutup komisi 18%
dibutuhkan lebih dari +18%; **Pakai +N%** menerapkan angka titik impas itu. Penyesuaian berlaku untuk
semua properti pada koneksi saluran tersebut, sedangkan penyesuaian Airbnb diatur di Airbnb. Chip
saluran di bawah tiap plan di grid membuka penyesuaian yang sama.

## Kapan mesin berjalan

Begitu sebuah kamar diatur ke Otomatis dan *Terbitkan harga otomatis* menyala, mesin **berjalan setiap
malam** dan menerbitkan yang berubah. Dua batas menjaganya tetap stabil, supaya peringkat Anda di
channel tidak terganggu:

- **Malam yang sudah pernah diberi harga hanya bergeser sedikit per proses** — secara default paling
  banyak 8% naik atau turun. Lonjakan musiman yang besar dicapai lewat beberapa malam, bukan sekali
  lompat. Saat sebuah malam diberi harga untuk pertama kalinya, ia langsung ke targetnya.
- **Tetap dekat dengan kalender musiman** — secara default dalam 30% dari harga yang dihasilkan
  musim, hari dalam seminggu, dan acara — sehingga sinyal permintaan tidak membuatnya lepas kendali.

Harga minimum dan maksimum Anda selalu mengalahkan keduanya. Workspace yang penagihannya sudah
hanya-baca selama 30 hari dilewati sampai membayar — lihat
[Jika pembayaran gagal](/id/setup/billing/#jika-pembayaran-gagal).

## Apakah berhasil?

Pendapatan, okupansi, rata-rata harga harian, dan RevPAR ada di **Laporan → Kinerja**, dihitung per
malam saat tamu benar-benar menginap — lihat [Laporan](/id/money/reports/). RevPAR — pendapatan ÷
seluruh malam yang harus dijual — adalah angka yang penting: rata-rata harga harian dan okupansi
bergerak sendiri-sendiri, dan tidak satu pun sendirian memberi tahu apakah pricing menghasilkan.

Di bawah grid di layar Harga, **Sinyal okupansi · 30 malam ke depan** mengelompokkan kamar menjadi
**Sehat**, **Cek harga**, **Butuh demand**, dan **Pantau** berdasarkan 30 malam ke depannya, dan tiap
kamar bisa dibuka di tabel harga.

## Jika Anda sudah memakai PriceLabs

PriceLabs adalah salah satu dari tiga pilihan di **Siapa yang menetapkan harga**. Kalau belum
terhubung, memilihnya akan menawarkan untuk menghubungkannya dulu. Lalu pilih listing PriceLabs yang
memberi harga kamar itu — satu listing PriceLabs hanya bisa memberi harga satu kamar. Harganya diambil
setiap malam dan dikirim ke semua saluran, dan **Perbarui sekarang** mengambilnya saat itu juga. Mesin
Santara AI mengalah untuk kamar-kamar itu, alih-alih keduanya berebut kalender yang sama.

Titik kuning menandai listing yang sinkronisasinya mati di PriceLabs, atau yang juga diubah PriceLabs
langsung di Airbnb — sehingga Airbnb menerima harga dari dua tempat. Lihat
[PriceLabs](/id/channels/listings/#pricelabs).
