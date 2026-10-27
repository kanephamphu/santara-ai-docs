import json
"""Generate one Indonesian docs page per channel under src/content/docs/id/channel-guides/."""
import os, sys

OUT = sys.argv[1]

MULTI = ("**Multi-okupansi** — satu harga per jumlah tamu. Jika Anda hanya punya satu harga untuk "
         "kamar itu, petakan tarif yang sama ke setiap jumlah tamu.")
MULTI_USUALLY = "Biasanya " + MULTI.replace("**Multi-okupansi**", "**multi-okupansi**", 1)
PER_ROOM = "**Per kamar** — satu harga untuk kamar, siapa pun yang menginap. Petakan tarif okupansi penuh Anda."
PLAIN = "Petakan setiap kamar channel ke kamar Anda, dan setiap tarifnya ke salah satu rate plan Anda."
CONTRACT = ("Anda memerlukan **kontrak sendiri** dengan {n}, dengan detail dan foto properti sudah ada "
            "di extranet-nya. Santara AI menghubungkan properti yang sudah terdaftar; Santara AI tidak "
            "bisa membuatkannya di {n} untuk Anda.")


def support(n, extra=""):
    return [f"Minta tim support {n} menghubungkan properti Anda ke **Channex**{extra}.",
            f"Catat **Hotel ID** yang diberikan {n}."]


# name, slug, description, dict
C = []

def ch(name, slug, desc, **kw):
    C.append(dict(name=name, slug=slug, desc=desc, **kw))


ch("Agoda", "agoda", "Aktifkan mode channel manager di Agoda YCS, masukkan Hotel ID Anda, dan petakan kamar per jumlah tamu.",
   before=[CONTRACT],
   extranet=["Di Agoda **YCS**, buka **Settings → Property Settings → Optional Settings**.",
             "Centang **Enable channel manager mode**.",
             "Pilih **Channex** dari daftar, lalu **Save**."],
   extranet_alt="Atau minta tim support Agoda, lewat fitur pesan di extranet, untuk menghubungkan Channex bagi Anda.",
   fields=[("Hotel ID", "Hotel ID Agoda Anda."),
           ("Booking amount", "**Inclusive** — termasuk pajak, sudah dipotong komisi (payout Anda). "
            "**Inclusive with commissions** — termasuk pajak dan komisi (total yang dibayar tamu). "
            "**Exclusive** — tanpa pajak maupun komisi (model AS).")],
   mapping=[MULTI])

ch("Expedia", "expedia", "Pilih Channex untuk konektivitas dan booking di extranet Expedia, masukkan property ID, petakan, dan booking mendatang ikut masuk.",
   extranet=["Di extranet Expedia, buka **Rooms and rates → Connectivity settings**. Expedia biasanya meminta login dua langkah di sini.",
             "Pilih **Channex** untuk **kedua** opsi: konektivitas **dan** booking."],
   fields=[("Property ID", "Property ID Expedia Anda."),
           ("Min stay type", "Jenis minimum menginap yang Anda kirim. Biasanya **Arrival**."),
           ("Booking amount", "**Payout amount** — yang Anda tagihkan ke tamu atau kartu virtual; cocok dengan VCC. "
            "**Total amount** — yang dibayar tamu, termasuk pajak dan biaya. "
            "**Total amount excluding taxes** — untuk properti di AS.")],
   mapping=["Kamar dan tarif Expedia ada di kiri; pilih kamar dan tarif Anda yang cocok di kanan."],
   after=["Go live mengirim semua tarif, ketersediaan, dan restriksi dalam satu sinkronisasi penuh.",
          "**Booking Expedia yang akan datang ikut diimpor.**",
          "**Pesan tamu** di Expedia bisa dibalas dari Santara AI."])

ch("Trip.com (Ctrip)", "trip-com", "Hubungkan Channex di Trip.com eBooking, masukkan Hotel ID Anda, dan petakan kamar — biasanya per jumlah tamu.",
   extranet=["Masuk ke **Trip.com eBooking**.",
             "Buka **Rates & Availability → Connectivity Settings**.",
             "Cari **Channex**, pilih, tekan **Continue**, lalu **Connect**."],
   extranet_alt="Jika opsi itu tidak ada di akun Anda, kirim email ke Trip.com di lodgingsupport@trip.com.",
   fields=[("Hotel ID", "Hotel ID Trip.com Anda."),
           ("Tax setting", "Apakah total booking sudah termasuk pajak.")],
   mapping=[MULTI_USUALLY],
   after=["Booking yang akan datang ikut diimpor — tetapi hanya yang sudah diserahkan Trip.com ke "
          "channel manager. Sebagian bisa masuk tanpa detail tamu lengkap, dan Trip.com tidak "
          "menyediakan cara untuk mengetahui mana yang kurang. Periksa extranet untuk menginap yang "
          "dipesan sebelum Anda terhubung."])

ch("Traveloka", "traveloka", "Hubungkan Channex di extranet Traveloka, gunakan property ID berupa kode huruf yang diberikannya, dan petakan tarif RETAIL per jumlah tamu.",
   extranet=["Di extranet Traveloka, buka bagian **channel manager** dan pilih **Channex**.",
             "Catat **property ID** yang diberikan Traveloka untuk koneksi ini. ID ini terdiri dari huruf, seperti `LsBxFfgUQcuf` — bukan angka yang Anda lihat di bagian lain extranet."],
   extranet_alt="Atau minta tim support Traveloka menghubungkannya untuk Anda.",
   fields=[("Hotel ID", "Property ID berupa kode huruf yang diberikan Traveloka untuk koneksi ini.")],
   mapping=[MULTI,
            "Setiap kamar punya **satu tarif untuk dipetakan: RETAIL**. Semua tarif Traveloka lainnya diturunkan darinya."],
   notes=[("note", "Paket makan di Traveloka",
           "Traveloka menetapkan paket makan pada **kamar**, bukan pada tarif, sehingga kamar yang sama "
           "bisa muncul lebih dari sekali — sekali per paket makan. Petakan masing-masing.")],
   after=["Jumlah booking bisa masuk dengan atau tanpa pajak dan komisi. Agar cocok dengan voucher "
          "hotel Traveloka, minta perwakilan Traveloka Anda mengubah pengaturan itu di extranet mereka."])

ch("Tiket.com", "tiket-com", "Minta Tiket.com menghubungkan Channex (atau lakukan sendiri), masukkan Hotel ID Anda, dan petakan setiap kamar dan tarif.",
   extranet=["Kirim email ke tim support Tiket.com untuk meminta koneksi **Channex**.",
             "Catat **Hotel ID Tiket.com** Anda."],
   extranet_alt="Jika belum ada channel manager yang terhubung, Anda bisa memilih Channex sendiri di extranet.",
   fields=[("Hotel ID", "Hotel ID Tiket.com Anda.")],
   mapping=[PLAIN])

ch("Klook", "klook", "Kirim email ke Klook untuk menghubungkan Channex, masukkan Hotel ID yang mereka kirim, dan petakan setiap kamar dan tarif.",
   extranet=["Kirim email ke tim support Klook untuk meminta koneksi **Channex**.",
             "Klook membalas dengan **Hotel ID** Anda."],
   fields=[("Hotel ID", "Hotel ID Klook dari balasan mereka.")],
   mapping=[PLAIN])

ch("MakeMyTrip and Goibibo", "makemytrip", "Minta MakeMyTrip menghubungkan Channex, masukkan Hotel ID dan access token Anda, dan petakan kamar per jumlah tamu.",
   before=[CONTRACT.format(n="MakeMyTrip")],
   extranet=["Minta tim support MakeMyTrip, lewat fitur pesan di extranet, untuk menghubungkan **Channex**.",
             "Mereka memberi Anda sebuah **access token**. Simpan bersama **Hotel ID** Anda."],
   fields=[("Hotel ID", "Hotel ID MakeMyTrip Anda."),
           ("Access token", "Token yang diberikan MakeMyTrip saat Channex dihubungkan.")],
   mapping=[MULTI_USUALLY])

ch("Vrbo", "vrbo", "Hubungkan Vrbo dengan login Vrbo Anda (dan kode SMS), setelah melepas channel manager lama dan link iCal, lalu petakan listing demi listing.",
   before=["**Akun Vrbo tidak boleh terhubung lewat API ke software lain.** Jika sebelumnya ada PMS "
           "atau channel manager yang terhubung, minta ke tim support Vrbo: *\"Please disconnect my "
           "account from my current channel manager, I will control the extranet manually.\"* "
           "Hubungkan hanya setelah mereka mengonfirmasi.",
           "**Hapus setiap link iCal** di listing Vrbo Anda (dari Airbnb atau sistem lain). iCal "
           "terus menimpa apa yang dikirim Santara AI.",
           "Siapkan **ponsel pemilik akun** — Vrbo mungkin mengirim kode SMS."],
   extranet=None,
   fields=[("Username", "Username Vrbo Anda."),
           ("Password", "Password Vrbo Anda.")],
   connect_steps=["Masukkan **username** dan **password** Vrbo Anda.",
                  "Tekan **Authenticate** — bukan Uji koneksi.",
                  "Jika Vrbo mengirim **kode SMS** ke pemilik akun, masukkan kodenya.",
                  "Tekan **Uji koneksi**. Listing Vrbo Anda muncul di layar pemetaan."],
   mapping=["Vrbo memetakan **listing demi listing**: pilih kamar dan tarif untuk setiap listing yang ingin Anda hubungkan."],
   after=["Tarif, ketersediaan, restriksi, dan booking (baru, berubah, dibatalkan) tersinkron.",
          "Mata uang: **USD, CAD, EUR, AUD, NZD, JPY, SGD, BRL, MXN, GBP**.",
          "**Pesan tamu dan ulasan tidak didukung** di Vrbo."],
   notes=[("caution", "Mengganti password Vrbo memutus koneksi",
           "Jika password akun Vrbo berubah, koneksinya terputus. Hubungkan lagi dengan password baru.")])

ch("Hostelworld", "hostelworld", "Kirim email ke Hostelworld untuk menghubungkan Channex, masukkan property ID, dan petakan setiap kamar pada okupansi maksimumnya.",
   extranet=["Kirim email ke tim support Hostelworld untuk menghubungkan **Channex**.",
             "Mereka membalas saat koneksi sudah aktif, beserta **property ID** Anda."],
   fields=[("Property ID", "ID dari balasan Hostelworld.")],
   mapping=["Hostelworld memberi harga setiap kamar pada **okupansi maksimumnya**: kamar double mengirim "
            "harga 2 orang, kamar 4 tempat tidur harga 4 orang. Kamar double tidak bisa dijual sebagai single.",
            "**Tempat tidur dorm** mengirim harga 1 orang."],
   after=["Hostelworld tidak mendukung **closed to arrival** maupun **closed to departure** — restriksi "
          "itu tidak dikirim."])

ch("Hotelbeds", "hotelbeds", "Pilih Channex di Maxiroom, hubungkan dengan username dan password Hotelbeds, pilih kontrak, dan petakan — satu koneksi per kontrak.",
   extranet=["Masuk ke extranet **Maxiroom** dan pilih **Channex** dari daftar channel manager."],
   extranet_alt="Jika tidak ada, buka tiket support Hotelbeds untuk menghubungkan Channex. Channex harus menjadi satu-satunya channel manager yang terhubung.",
   fields=[("Username and password", "Yang diberikan Hotelbeds kepada Anda. Keduanya sering sama — itu wajar."),
           ("Contract", "Muncul setelah Uji koneksi. Pilih kontrak untuk koneksi ini."),
           ("Update availability / rates / restrictions", "Apa yang dikirim. Biarkan ketiganya aktif kecuali kontrak Anda menetapkan harga atau alokasi secara tetap.")],
   mapping=["Kamar Hotelbeds ditampilkan; petakan masing-masing ke kamar dan tarif Anda.",
            "**Jangan** kirim harga ke tarif bertanda **FIT** atau tarif kontrak serupa — tarif itu menolaknya."],
   notes=[("note", "Satu koneksi per kontrak",
           "Dengan empat kontrak Hotelbeds, hubungkan Hotelbeds empat kali — sekali per kontrak.")],
   errors=[("This request is out of the contract period", "Minta Hotelbeds memperpanjang kontrak hingga lebih dari dua tahun."),
           ("day … has no inventory loaded", "Minta Hotelbeds memuat harga di setiap tanggal hingga dua tahun ke depan."),
           ("This change is not permitted as it does not agree with the signed contract", "Matikan **Update rates** untuk koneksi ini."),
           ("Minimum allotment activated …", "Kontraknya punya alokasi yang tidak bisa Anda tutup. Minta kontrak tanpa alokasi ke Hotelbeds — alokasi bisa menyebabkan overbooking.")])

ch("Despegar", "despegar", "Tambahkan Channex di extranet Despegar, salin API password sekali-tampil, dan petakan setiap kamar dan tarif.",
   extranet=["Di extranet Despegar, buka **General Settings → Channel Manager Connection**.",
             "**Nonaktifkan atau hapus** koneksi channel manager lama.",
             "Tekan **Add channel manager / PMS**, pilih **Channex**, dan setujui ketentuannya.",
             "Salin **property ID**, **username**, dan **API password** yang ditampilkan Despegar."],
   notes_before=[("danger", "Salin API password sekarang",
                  "Despegar menampilkan API password hanya sekali. Jika hilang, reset koneksinya di "
                  "Despegar untuk mendapatkan yang baru. Password extranet biasa Anda tidak berlaku di sini.")],
   fields=[("Hotel ID", "Property ID Despegar."),
           ("Username", "Username yang ditampilkan Despegar."),
           ("Password", "**API password** — bukan password extranet Anda."),
           ("Min stay type", "Despegar hanya menerima satu jenis; pilih yang akan dikirim.")],
   mapping=[PLAIN,
            "Tarif 1 orang pada kamar double tidak masalah — Despegar bisa menetapkan harga tamu tambahan di extranet-nya."])

ch("HRS", "hrs", "Minta HRS menghubungkan Channex, masukkan Hotel ID Anda, dan pertahankan satu rate plan per tipe kamar.",
   before=[CONTRACT.format(n="HRS")],
   extranet=support("HRS"),
   fields=[("Hotel ID", "Hotel ID HRS Anda.")],
   mapping=["Petakan kamar single ke kamar single HRS.",
            "Pertahankan **satu rate plan per tipe kamar**. HRS menyimpan ketersediaan per rate plan, "
            "sehingga beberapa rate plan pada satu kamar bisa membuatnya overbooking."])

ch("Check24", "check24", "Minta Check24 menghubungkan Channex, masukkan Hotel ID Anda, dan petakan kamar per jumlah tamu.",
   before=[CONTRACT.format(n="Check24")],
   extranet=["Kirim permintaan support ke Check24 untuk menghubungkan properti Anda ke **Channex**.",
             "Catat **Hotel ID Check24** Anda."],
   fields=[("Hotel ID", "Hotel ID Check24 Anda.")],
   mapping=[MULTI])

ch("Crewdogs", "crewdogs", "Minta Crewdogs menghubungkan Channex, masukkan Hotel ID Anda, dan petakan setiap kamar dan tarif.",
   before=[CONTRACT.format(n="Crewdogs")],
   extranet=support("Crewdogs"),
   fields=[("Hotel ID", "Hotel ID Crewdogs Anda.")],
   mapping=[PLAIN])

ch("Dida Travel", "dida-travel", "Minta Dida Travel menghubungkan Channex, masukkan Hotel ID Anda, dan petakan setiap kamar dan tarif.",
   before=[CONTRACT.format(n="Dida Travel")],
   extranet=["Minta tim support Dida Travel, lewat fitur pesan di extranet, untuk menghubungkan **Channex**.",
             "Catat **Hotel ID Dida Travel** Anda."],
   fields=[("Hotel ID", "Hotel ID Dida Travel Anda.")],
   mapping=[PLAIN])

ch("Emerging Travel Group", "emerging-travel", "Kirim email ke Emerging Travel untuk menghubungkan Channex, masukkan Hotel ID Anda, pilih pengaturan pajak, dan petakan kamar.",
   extranet=["Kirim email ke tim support Emerging Travel untuk meminta koneksi **Channex**.",
             "Catat **Hotel ID Emerging Travel** Anda."],
   fields=[("Hotel ID", "Hotel ID Emerging Travel Anda."),
           ("Tax setting", "Apakah total booking sudah termasuk pajak.")],
   mapping=[MULTI_USUALLY])

ch("Feratel", "feratel", "Minta Feratel menghubungkan Channex, masukkan Hotel ID Anda, dan petakan kamar per jumlah tamu atau per kamar.",
   before=[CONTRACT.format(n="Feratel")],
   extranet=support("Feratel"),
   extranet_alt="Atau hubungkan sendiri di antarmuka Feratel.",
   fields=[("Hotel ID", "Hotel ID Feratel Anda.")],
   mapping=["Feratel bisa **multi-okupansi** atau **per kamar**. Jika Feratel meminta harga untuk setiap "
            "jumlah tamu dan Anda hanya punya satu harga, petakan tarif yang sama ke setiap jumlah tamu."])

ch("Glamping Hub", "glamping-hub", "Kirim email ke Glamping Hub untuk menghubungkan Channex, masukkan Hotel ID yang mereka berikan, dan petakan per kamar.",
   before=[CONTRACT.format(n="Glamping Hub")],
   extranet=["Kirim email ke tim support Glamping Hub untuk meminta koneksi **Channex**.",
             "Mereka menghubungkannya dan memberi Anda sebuah **Hotel ID**."],
   fields=[("Hotel ID", "Hotel ID dari Glamping Hub.")],
   mapping=[PER_ROOM])

ch("Hipcamp", "hipcamp", "Kirim email ke Hipcamp untuk menghubungkan Channex, masukkan property ID Hipcamp Anda, dan petakan setiap kamar dan tarif.",
   before=["Anda memerlukan **akun Hipcamp** dengan properti Anda sudah ada di sana."],
   extranet=["Kirim email ke campgrounds@hipcamp.com untuk meminta koneksi dengan **Channex**.",
             "Temukan **property ID** Anda di editor properti Hipcamp. Perwakilan Hipcamp bisa membantu jika Anda tidak menemukannya."],
   fields=[("Hotel ID", "Property ID Hipcamp Anda.")],
   mapping=[PLAIN])

ch("Hotel Trader", "hotel-trader", "Minta Hotel Trader menghubungkan Channex, masukkan Hotel ID Anda, dan petakan setiap kamar dan tarif.",
   before=[CONTRACT.format(n="Hotel Trader")],
   extranet=support("Hotel Trader"),
   fields=[("Hotel ID", "Hotel ID Hotel Trader Anda.")],
   mapping=[PLAIN])

ch("HotelTonight", "hoteltonight", "Kirim email ke HotelTonight untuk menghubungkan Channex, masukkan Hotel ID Anda, pilih harga dengan atau tanpa pajak, dan petakan.",
   extranet=["Kirim email ke mapping-ht@airbnb.com untuk meminta koneksi **Channex**.",
             "Catat **Hotel ID** yang diberikan HotelTonight."],
   extranet_alt="Belum ada di HotelTonight? Daftar lewat htmarketmanagement@airbnb.com.",
   fields=[("Hotel ID", "Hotel ID HotelTonight Anda."),
           ("Taxes", "Apakah harga yang Anda kirim sudah termasuk pajak. Biasanya **tidak termasuk** di AS, **termasuk** di Eropa.")],
   mapping=[PLAIN])

ch("HyperGuest", "hyperguest", "Minta HyperGuest mengaktifkan Channex, masukkan property ID Anda, dan petakan — per jumlah tamu jika begitu cara Anda menetapkan harga.",
   extranet=["Minta HyperGuest mengaktifkan antarmuka **Channex**.",
             "Mereka membalas dengan **property ID** Anda."],
   fields=[("Hotel ID", "Property ID HyperGuest Anda.")],
   mapping=["HyperGuest mendukung **multi-okupansi**. Menetapkan harga per jumlah tamu? Petakan masing-masing. "
            "Hanya punya harga untuk kamar penuh? Petakan jumlah tamu itu saja, atau semuanya — keduanya bisa.",
            "Kode kamar dan tarif di HyperGuest boleh berupa apa pun yang mudah dibaca (misalnya `DBL-Room`, `BAR`)."],
   notes=[("caution", "Jangan ganti kode setelah pemetaan",
           "Jika Anda mengubah kode kamar atau tarif di HyperGuest setelah pemetaan, petakan lagi di Santara AI.")])

ch("Inntopia", "inntopia", "Tambahkan cross-reference code Channex ke setiap produk Inntopia, masukkan Hotel ID Anda, dan petakan tarif RACK per kamar.",
   before=[CONTRACT.format(n="Inntopia")],
   extranet=["Masuk ke Inntopia dan buka tab **Products**.",
             "Untuk setiap produk, tekan tombol pengaturan di sebelah kanan dan pilih **Cross-reference codes**.",
             "Atur **Remote system** ke **Channex**.",
             "Atur **Cross-reference code** ke ID produk Inntopia — angka dalam kurung pada nama produk.",
             "Simpan dengan kotak centang biru, tutup, lalu ulangi untuk produk berikutnya."],
   fields=[("Hotel ID", "Hotel ID Inntopia Anda.")],
   mapping=[PER_ROOM, "Petakan tarif **RACK** saja."])

ch("Kliknbook", "kliknbook", "Minta Kliknbook menghubungkan Channex, masukkan Hotel Code dan max stay type Anda, dan petakan setiap jumlah tamu.",
   before=[CONTRACT.format(n="Kliknbook")],
   extranet=["Minta tim support Kliknbook menghubungkan **Channex** (atau lakukan di antarmuka mereka).",
             "Catat **Hotel Code Kliknbook** Anda."],
   fields=[("Hotel Code", "Hotel Code Kliknbook Anda."),
           ("Max stay type", "**Arrival** atau **Through** — sesuai cara Kliknbook menerapkan maksimum menginap.")],
   mapping=["Di bawah setiap kamar Kliknbook, petakan tarif untuk **setiap jumlah tamu** ke rate plan Anda.",
            "**Bintang** menandai tarif dan jumlah tamu default untuk kamar itu."])

ch("MG Bedbank", "mg-bedbank", "Pilih Channex di bagian channel manager MG, masukkan Hotel ID dan pengaturan pajak Anda, dan petakan kamar per jumlah tamu.",
   extranet=["Buka bagian **channel manager** di MG dan pilih **Channex**."],
   extranet_alt="Tidak menemukannya? Kirim email ke tim support MG untuk meminta koneksi.",
   fields=[("Hotel ID", "Hotel ID MG Bedbank Anda."),
           ("Tax setting", "Apakah total booking sudah termasuk pajak.")],
   mapping=[MULTI_USUALLY])

ch("Mr & Mrs Smith", "mr-and-mrs-smith", "Minta Mr & Mrs Smith menghubungkan Channex, masukkan Hotel ID Anda, dan petakan per kamar.",
   before=[CONTRACT.format(n="Mr & Mrs Smith")],
   extranet=support("Mr & Mrs Smith"),
   fields=[("Hotel ID", "Hotel ID Mr & Mrs Smith Anda. Jika mereka belum memberikannya, tanyakan.")],
   mapping=[PER_ROOM])

ch("OpenGDS", "opengds", "Minta OpenGDS menghubungkan Channex, masukkan Hotel ID Anda, dan petakan per kamar.",
   before=[CONTRACT.format(n="OpenGDS")],
   extranet=support("OpenGDS"),
   extranet_alt="Atau hubungkan sendiri di antarmuka OpenGDS.",
   fields=[("Hotel ID", "Hotel ID OpenGDS Anda.")],
   mapping=[PER_ROOM])

ch("PriceTravel", "pricetravel", "Minta PriceTravel menghubungkan Channex, masukkan Hotel ID Anda, dan petakan kamar per jumlah tamu.",
   before=[CONTRACT.format(n="PriceTravel")],
   extranet=support("PriceTravel"),
   fields=[("Hotel ID", "Hotel ID PriceTravel Anda.")],
   mapping=[MULTI])

ch("Roibos", "roibos", "Kirim email ke Roibos untuk menghubungkan Channex, masuk dengan username dan password yang mereka berikan, pilih kontrak, dan petakan.",
   extranet=["Kirim email ke tim support Roibos untuk meminta koneksi **Channex**.",
             "Mereka memberi Anda **username** dan **password**."],
   fields=[("Username and password", "Yang diberikan Roibos kepada Anda."),
           ("Booking amount", "Apakah total booking sudah termasuk pajak."),
           ("Contract", "Tekan Uji koneksi **terlebih dahulu**, lalu pilih kontrak dari daftar.")],
   mapping=[PLAIN],
   notes=[("note", "Satu koneksi per kontrak",
           "Dengan lebih dari satu kontrak Roibos, hubungkan Roibos lagi untuk setiap kontrak.")])

ch("WebBeds", "webbeds", "Minta WebBeds menghubungkan Channex, masukkan Hotel Code dan max stay type Anda, dan petakan setiap kamar dan tarif.",
   before=[CONTRACT.format(n="WebBeds")],
   extranet=["Minta tim support WebBeds menghubungkan **Channex** (atau lakukan di antarmuka mereka).",
             "Catat **Hotel Code WebBeds** Anda."],
   fields=[("Hotel Code", "Hotel Code WebBeds Anda."),
           ("Max stay type", "**Arrival** atau **Through** — sesuai cara WebBeds menerapkan maksimum menginap.")],
   mapping=[PLAIN])

ch("Yatra", "yatra", "Minta Yatra menghubungkan Channex, masukkan Hotel ID Anda, dan petakan per kamar.",
   before=[CONTRACT.format(n="Yatra")],
   extranet=support("Yatra"),
   fields=[("Hotel ID", "Hotel ID Yatra Anda.")],
   mapping=[PER_ROOM])

ch("Getaroom", "getaroom", "Kirim email ke Getaroom untuk mengaktifkan koneksi Channex; mereka mengonfirmasi dengan booking uji sebelum Anda go live.",
   extranet=["Kirim email ke propertyactivation@getaroom.com untuk meminta koneksi dengan **Channex**, sertakan Hotel ID Anda.",
             "Getaroom membalas dengan Hotel ID yang harus dipakai."],
   fields=[("Hotel ID", "Hotel ID yang dikonfirmasi Getaroom.")],
   mapping=[PLAIN, "Lalu beri tahu Getaroom bahwa pemetaan sudah selesai."],
   after=["Getaroom mengirim **booking uji dan pembatalannya** untuk memeriksa koneksi. Setelah itu, "
          "properti go live."])

HOTELS_ONLY = ("**Khusus hotel dan resor.** {n} tidak menjual apartemen, vila, atau sewa liburan "
               "lainnya — properti seperti itu tidak bisa memakai koneksi ini.")
ch("Hopper", "hopper", "Khusus hotel: tanda tangani perjanjian dengan Hopper, hubungkan, petakan tarif terbaik yang tersedia, dan pilih harga net atau gross.",
   before=[HOTELS_ONLY.format(n="Hopper"),
           "**Tanda tangani perjanjian dengan Hopper terlebih dahulu** — hotelpartners@hopper.com atau hotelpartners.hopper.com. "
           "Tidak ada yang terjual sampai mereka menghubungi Anda dan perjanjian ditandatangani.",
           "Hopper membayar setiap booking dengan **kartu virtual**; komisi ditetapkan dalam kontrak Anda."],
   extranet=None,
   fields=[],
   mapping=["Petakan **tarif terbaik yang tersedia** (best available rate) Anda. Kebijakan pembatalan ditetapkan dalam kontrak Hopper Anda, bukan oleh Santara AI."],
   notes=[("note", "Harga net atau gross",
           "Kontrak Anda menyebutkan yang mana. **Gross**: kirim harga normal Anda, seperti ke Booking.com dan "
           "Expedia. **Net**: kirim harga tanpa komisi — turunkan harga channel sebesar persentase "
           "komisi (misalnya 15%), atau harganya terlalu tinggi untuk terjual.")])

ch("Nuitee", "nuitee", "Khusus hotel: tanda tangani perjanjian dengan Nuitee, hubungkan, dan petakan tarif terbaik yang tersedia.",
   before=[HOTELS_ONLY.format(n="Nuitee"),
           "**Tanda tangani perjanjian dengan Nuitee terlebih dahulu** (nuitee.com). Tidak ada yang terjual sampai perjanjian ditandatangani.",
           "Nuitee membayar setiap booking dengan **kartu virtual**; komisi ditetapkan dalam kontrak Anda."],
   extranet=None,
   fields=[],
   mapping=["Petakan **tarif terbaik yang tersedia** (best available rate) Anda. Kebijakan pembatalan ditetapkan dalam kontrak Nuitee Anda, bukan oleh Santara AI."])


ch('Google Hotels dan Vacation Rentals', "google", 'Listing gratis di Google: lengkapi data properti, hubungkan Google, pilih tujuan pemesanan, lalu tunggu 1–4 minggu sampai Google menampilkan properti.',
   before=['Google **tidak punya extranet**: Google hanya menampilkan apa yang dikirim properti Anda. Sebelum menghubungkan, isi **alamat, telepon, lokasi peta, zona waktu, aturan rumah, kebijakan pembatalan, minimal satu fasilitas, foto, dan deskripsi** properti.', '**Vacation rental butuh lebih banyak**: alamat situs yang diawali `https://`, **minimal 8 foto**, serta jumlah tempat tidur, kamar tidur, dan kamar mandi (diminta di formulir di bawah).', 'Google mencocokkan properti lewat **nama, alamat, dan nomor telepon** — pastikan sama dengan yang tampil di Google Maps.'], extranet=None, fields=[('Partner Account', 'Biarkan apa adanya kecuali kami memberi tahu lain.'), ('Use built-in IBE', 'Dicentang: tamu yang mengklik di Google masuk ke halaman pemesanan siap pakai. Tidak dicentang: isi **Booking Link**.'), ('Booking Link', 'Halaman pemesanan Anda sendiri, dengan placeholder yang diisi Google — misalnya `https://example.com/book?checkin=(CHECKIN_DATE)&nights=(LENGTH)`. Lainnya: `(CHECKOUT_DATE)`, `(ADULTS)`, `(CURRENCY)`.'), ('Beds count / Bedrooms count / Bathrooms count', 'Wajib untuk vacation rental.'), ('Send Property Notification', 'Opsional. Centang, lalu kolom **Property Email** muncul — alamat itu menerima email untuk setiap pemesanan baru.')],
   mapping=['Centang kamar dan tarif yang ditampilkan Google. Bisa diubah kapan saja.', '**Vacation rental: satu tipe kamar per koneksi.** Beberapa apartemen dalam satu gedung masing-masing perlu koneksi Google sendiri, dan properti di alamat berbeda harus menjadi properti terpisah di Santara AI.'], after=['Google memeriksa properti baru setiap minggu: tunggu **sekitar 1 minggu** untuk hotel dan **hingga 4 minggu** untuk vacation rental sebelum properti muncul.', 'Ini adalah **tautan pemesanan gratis** Google; vacation rental tampil sebagai pin di peta saat orang mencari di area itu.'])

ch('Hopper Homes', "hopper-homes", 'Daftar Hopper Hosting dengan Channex sebagai PMS, hubungkan dengan email yang sama, buat listing, lalu petakan. Harga dan pemesanan dalam USD.',
   before=['Harga dan pemesanan di Hopper Homes dalam **USD** — harga Anda dikonversi otomatis.', 'Gunakan **alamat email yang sama** untuk Hopper dan koneksi ini.'], extranet=['Daftar akun Hopper Hosting di **hosts.hopper.com/signup/channex**.', 'Buka email dari Hopper Homes dan tekan **Join Hopper Hosting** untuk membuat kata sandi.', 'Saat ditanya apakah memakai PMS, pilih **Yes** lalu pilih **Channex**.'], fields=[('Verified Host Email', 'Email yang Anda pakai mendaftar di Hopper.'), ('Display Host Name', 'Nama host yang dilihat tamu.'), ('Min Stay Type', '**Arrival** atau **Through**. Biasanya Arrival.'), ('Send Property Notification', 'Opsional. Centang, lalu kolom **Property Email** muncul — alamat itu menerima email untuk setiap pemesanan baru.')],
   mapping=['Listing Hopper Homes **dibuat dari layar penyiapan**: buat listing untuk setiap kamar, pilih properti dan kamarnya, isi detailnya, lalu simpan.', '**Aktifkan** listing, lalu petakan ke kamar dan tarif Anda di layar pemetaan.'], notes=[('caution', 'Jangan hapus koneksinya', 'Hopper Homes tidak mengizinkan akun terhubung ulang. Jika koneksi ini dihapus, Anda perlu akun Hopper baru dengan alamat email lain.')])


# The step-2 form's REAL labels, read from the adapter schema the form renders
# (GET /api/connected-accounts/channels/adapter?code=…). Field names stay English in every
# locale because the form shows them that way.
FIELDS_OVERRIDE = True
# slug -> list of (label, {en,id,vi})
NOTIFY = ("Send Property Notification", {
  "en": "Optional. Tick it and a **Property Email** field appears — that address gets an email for every new booking.",
  "id": "Opsional. Centang, lalu kolom **Property Email** muncul — alamat itu menerima email untuk setiap pemesanan baru.",
  "vi": "Không bắt buộc. Tích chọn thì ô **Property Email** hiện ra — địa chỉ đó nhận email cho mỗi đặt phòng mới."})
def hid(label, en, id_, vi): return (label, {"en": en, "id": id_, "vi": vi})
def code(n): return hid("Hotel Code", f"Your {n} hotel code.", f"Kode hotel {n} Anda.", f"Mã khách sạn {n} của bạn.")
def hotelid(n, extra_en="", extra_id="", extra_vi=""):
    return hid("Hotel ID", f"Your {n} Hotel ID.{extra_en}", f"Hotel ID {n} Anda.{extra_id}", f"Hotel ID {n} của bạn.{extra_vi}")
MINSTAY = hid("Min Stay Type", "Which minimum stay you send: **Arrival** or **Through**. Usually Arrival.",
              "Minimum menginap yang dikirim: **Arrival** atau **Through**. Biasanya Arrival.",
              "Loại số đêm tối thiểu gửi đi: **Arrival** hoặc **Through**. Thường là Arrival.")
COMMISSION = hid("Booking Amount", "**With Commission** or **Without Commission** — how booking totals arrive.",
                 "**With Commission** atau **Without Commission** — cara total pemesanan diterima.",
                 "**With Commission** hoặc **Without Commission** — tổng tiền đặt phòng được nhận thế nào.")
FIELDS = {
 "agoda": [hotelid("Agoda"), NOTIFY, hid("Tax Setting For Bookings",
   "**Inclusive** — taxes included, commission taken off (your payout). **Inclusive With Commissions** — taxes and commission included (the guest's total). **Exclusive** — no taxes or commission (the US model).",
   "**Inclusive** — termasuk pajak, dikurangi komisi (payout Anda). **Inclusive With Commissions** — termasuk pajak dan komisi (total tamu). **Exclusive** — tanpa pajak atau komisi (model AS).",
   "**Inclusive** — đã gồm thuế, đã trừ hoa hồng (khoản bạn nhận). **Inclusive With Commissions** — gồm cả thuế và hoa hồng (tổng khách trả). **Exclusive** — không gồm thuế hay hoa hồng (mô hình Mỹ).")],
 "expedia": [hotelid("Expedia", " Expedia calls it your property ID.", " Expedia menyebutnya property ID.", " Expedia gọi là property ID."), MINSTAY, NOTIFY, hid("Booking Amount",
   "**Collect Amount** — what you charge the guest or the virtual card; it matches the VCC. **Total Amount** — what the guest paid, taxes and fees included. **Total Amount Excluding Tax** — for US properties.",
   "**Collect Amount** — yang Anda tagih ke tamu atau kartu virtual; sama dengan VCC. **Total Amount** — yang dibayar tamu, termasuk pajak dan biaya. **Total Amount Excluding Tax** — untuk properti di AS.",
   "**Collect Amount** — số tiền bạn thu của khách hoặc thẻ ảo; khớp với VCC. **Total Amount** — số khách đã trả, gồm thuế và phí. **Total Amount Excluding Tax** — cho chỗ nghỉ ở Mỹ.")],
 "trip-com": [code("Trip.com"), NOTIFY, hid("Tax Setting For Bookings", "**Inclusive** or **Exclusive** — whether booking totals include taxes.",
   "**Inclusive** atau **Exclusive** — apakah total pemesanan termasuk pajak.", "**Inclusive** hoặc **Exclusive** — tổng tiền đặt phòng có gồm thuế hay không.")],
 "tiket-com": [hotelid("Tiket.com"), NOTIFY, MINSTAY],
 "makemytrip": [hotelid("MakeMyTrip"), hid("Access Token", "The token MakeMyTrip gave you when Channex was connected.",
   "Token yang diberikan MakeMyTrip saat Channex dihubungkan.", "Mã token MakeMyTrip cấp khi kết nối Channex."), NOTIFY,
   hid("Sync B2B Rate Type / Sync MyBiz Rate Type", "Optional. Also send prices to MakeMyTrip's B2B or MyBiz rates; a **Modifier (%)** field appears to adjust them.",
   "Opsional. Kirim harga juga ke tarif B2B atau MyBiz MakeMyTrip; kolom **Modifier (%)** muncul untuk menyesuaikannya.",
   "Không bắt buộc. Gửi giá cả sang mức giá B2B hoặc MyBiz của MakeMyTrip; ô **Modifier (%)** hiện ra để điều chỉnh."),
   hid("Booking Amount", "**Payout Amount** or **Total Amount**.", "**Payout Amount** atau **Total Amount**.", "**Payout Amount** hoặc **Total Amount**.")],
 "hostelworld": [hotelid("Hostelworld", " Hostelworld sends it as your property ID.", " Hostelworld mengirimnya sebagai property ID.", " Hostelworld gửi dưới tên property ID."), MINSTAY, NOTIFY, COMMISSION],
 "crewdogs": [code("Crewdogs"), NOTIFY],
 "emerging-travel": [hotelid("Emerging Travel"), NOTIFY, COMMISSION],
 "glamping-hub": [code("Glamping Hub"), NOTIFY],
 "hipcamp": [hid("Hotel Code", "Your Hipcamp property ID.", "Property ID Hipcamp Anda.", "Property ID Hipcamp của bạn."), NOTIFY],
 "hotel-trader": [code("Hotel Trader"), NOTIFY],
 "webbeds": [code("WebBeds"), NOTIFY, MINSTAY],
 "hopper": [NOTIFY, hid("Max Stay Type", "**Arrival** or **Through** — how maximum stays apply.",
   "**Arrival** atau **Through** — cara maksimum menginap diterapkan.", "**Arrival** hoặc **Through** — cách áp dụng số đêm tối đa.")],
}

for _c in C:
    if _c['slug'] in FIELDS:
        _c['fields'] = [(label, d['id']) for label, d in FIELDS[_c['slug']]]


def bullets(items):
    return "\n".join(f"- {i}" for i in items)


def numbered(items):
    return "\n".join(f"{k}. {i}" for k, i in enumerate(items, 1))


def aside(kind, title, body):
    return f":::{kind}[{title}]\n{body}\n:::"


# Images. Extranet screenshots come from the channels' own extranets (public/channel-guides/
# extranet/, English UI, one copy for every locale); step-2 shots are our own app, captured per
# locale by scripts/capture-channel-guides.mjs. Only channels the catalogue offers have one.
LOCALE = 'id'
CONNECT_ALT = 'Langkah 2 di Santara AI: kolom penyiapan {n}, lalu Uji koneksi.'
CONNECT_SHOTS = set(['agoda', 'expedia', 'trip-com', 'tiket-com', 'makemytrip', 'hostelworld', 'crewdogs', 'emerging-travel', 'glamping-hub', 'hipcamp', 'hotel-trader', 'webbeds', 'hopper'])
EXTRANET_IMAGES = {'agoda': [('agoda-ycs', 'Agoda YCS: Settings → Property Settings → Optional settings, dengan Enable channel manager mode dicentang dan penyedia dipilih.')], 'expedia': [('expedia-menu', 'Expedia Partner Central: Rooms and rates → Connectivity settings.'), ('expedia-verify', 'Expedia meminta verifikasi tambahan sebelum menampilkan Connectivity settings.')], 'tiket-com': [('tiket-com-connectivity', 'Extranet Tiket.com: Connectivity menampilkan channel manager yang terhubung dan Hotel ID Anda.')], 'despegar': [('despegar-menu', 'Extranet Despegar: General Settings → Channel Manager Connection.'), ('despegar-connections', 'Koneksi channel manager di Despegar — nonaktifkan atau hapus yang lama.'), ('despegar-add', 'Memilih channel manager di Despegar dan menyetujui syaratnya.')], 'inntopia': [('inntopia-products', 'Tab Products di Inntopia, dengan tombol pengaturan di setiap produk.'), ('inntopia-cross-reference', 'Cross-reference code Inntopia: Remote System Channex, kode = ID produk di dalam kurung.')]}
BEFORE_IMAGES = {'vrbo': [('vrbo-api-connected', 'Akun Vrbo yang masih terhubung ke software lain — minta Vrbo mengubahnya sebelum Anda menghubungkan.')]}


def img(src, alt):
    return f"![{alt}](/channel-guides/extranet/{src}.webp)\n"


CATALOGUE_NAMES = {"makemytrip": "Make My Trip", "glamping-hub": "GlampingHub", "hotel-trader": "HotelTrader", "vrbo": "VRBO", "google": "Google Hotel ARI"}

def page(c, order):
    n = c["name"]
    out = [f"---\ntitle: {json.dumps('Hubungkan ' + n, ensure_ascii=False)}\ndescription: {json.dumps(c['desc'], ensure_ascii=False)}\nsidebar:\n  order: {order}\n  label: {json.dumps(n, ensure_ascii=False)}\n---\n"]
    out.append(f"Cara menghubungkan {n} ke Santara AI. Penyiapan di dalam Santara AI sama untuk setiap "
               f"channel ([Hubungkan channel lain](/id/channels/other-channels/)); halaman ini membahas "
               f"yang khusus untuk {n}.\n")
    before = [b.format(n=n) for b in c.get("before", [])]
    before.append("Sebuah **properti dengan minimal satu kamar** di Santara AI.")
    if c.get("extranet") is not None:
        before.append(f"**Tidak ada channel manager lain atau link iCal** pada properti itu di {n} — dua "
                      "sistem yang memperbarui satu kalender saling menimpa.")
    out.append("## Sebelum mulai\n\n" + bullets(before) + "\n")
    for src, alt in BEFORE_IMAGES.get(c["slug"], []):
        out.append(img(src, alt))
    step = 1
    if c.get("extranet"):
        out.append(f"## {step}. Aktifkan koneksi di {n}\n\n"
                   f"{n} harus mengizinkan koneksinya terlebih dahulu. Channex adalah mitra konektivitas "
                   f"Santara AI — dengan nama itulah {n} mengenal kami.\n\n" + numbered(c["extranet"]) + "\n")
        if c.get("extranet_alt"):
            out.append(c["extranet_alt"] + "\n")
        for src, alt in EXTRANET_IMAGES.get(c["slug"], []):
            out.append(img(src, alt))
        for a in c.get("notes_before", []):
            out.append(aside(*a) + "\n")
        step += 1
    out.append(f"## {step}. Hubungkan di Santara AI\n")
    steps = [f"Buka **Pengaturan → Channel → Tambah channel**, cari **{n}**, lalu tekan **Hubungkan**.",
             "Pilih properti yang dituju."]
    # Name the channel the way the catalogue tile does, so a search for it finds it.
    steps[0] = steps[0].replace(f"**{n}**", f"**{CATALOGUE_NAMES.get(c['slug'], n)}**")
    if c.get("connect_steps"):
        steps += c["connect_steps"]
    elif c["fields"]:
        steps += ["Isi kolom di bawah, lalu tekan **Uji koneksi**.",
                  "Setelah uji berhasil, tekan **Hubungkan dan lanjut**."]
    else:
        steps += ["Tekan **Hubungkan dan lanjut**."]
    out.append(numbered(steps) + "\n")
    if c["slug"] in CONNECT_SHOTS:
        out.append(f"![{CONNECT_ALT.format(n=n)}](/screens/channel-guides/{c['slug']}.{LOCALE}.png)\n")
    if c["fields"]:
        out.append("| Kolom | Yang diisi |\n| --- | --- |\n" +
                   "\n".join(f"| {f} | {w} |" for f, w in c["fields"]) + "\n")
    if c.get("extranet"):
        out.append(f"Jika **Uji koneksi** gagal, periksa ID-nya, lalu minta tim support {n} memastikan "
                   "properti sudah terhubung ke Channex.\n")
    step += 1
    out.append(f"## {step}. Petakan kamar dan tarif\n\n" + bullets(c["mapping"]) + "\n\n"
               f"Petakan **setiap** kamar dan tarif yang ditampilkan {n}. Yang dibiarkan tidak dipetakan "
               f"tidak menerima pembaruan, dan {n} terus menjualnya dengan ketersediaan lamanya.\n")
    step += 1
    out.append(f"## {step}. Impor dan go live\n\n"
               "Santara AI memeriksa apa yang sudah dipetakan, mengaktifkan channel, lalu membawa masuk "
               f"menginap yang sudah ada di {n}. Sejak itu, tarif, ketersediaan, dan restriksi tersinkron "
               "dari Santara AI — lihat [Go live](/id/channels/going-live/).\n")
    for a in c.get("notes", []):
        out.append(aside(*a) + "\n")
    after = list(c.get("after", []))
    if c["slug"] != "google" and not any("pesan tamu" in x.lower() for x in after):
        after.append(f"Balas tamu {n} di kotak masuk {n} sendiri — pesan tamu dari {n} tidak masuk ke Santara AI.")
    out.append(f"## Perlu diketahui\n\n" + bullets(after) + "\n")
    if c.get("errors"):
        out.append(f"## Error {n}\n\n| Error | Yang harus dilakukan |\n| --- | --- |\n" +
                   "\n".join(f"| *{e}* | {w} |" for e, w in c["errors"]) + "\n")
    out.append("Perbaikan lain: [Pemecahan masalah channel](/id/channels/troubleshooting/).\n")
    return "\n".join(out)


os.makedirs(OUT, exist_ok=True)
for i, c in enumerate(C, start=2):
    with open(os.path.join(OUT, c["slug"] + ".md"), "w") as f:
        f.write(page(c, i))
print(len(C), "pages")
print("\n".join(f"{c['slug']}|{c['name']}" for c in C))
