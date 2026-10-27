"""The 'More channels' page: catalogue channels with no guide of their own, and the fields each
one's setup asks for. Fields come from more-channels-schemas.json — the adapter schemas our
step-2 form renders (GET /api/connected-accounts/channels/adapter?code=…), so labels match the UI.

    python3 -I gen_more_channels.py <docs root: src/content/docs>
"""
import json, os, sys

ROOT = sys.argv[1]
HERE = os.path.dirname(os.path.abspath(__file__))
SCHEMAS = json.load(open(os.path.join(HERE, "more-channels-schemas.json")))
# Covered by their own guides.
SKIP = {"GoogleHotelARI", "HopperHomes"}
# Catalogue display names (lib/channel-names.ts / the tile text).
NAMES = {"OneHotelRez": "1HotelRez", "AscendTravel": "Ascend Travel", "CakrahubBookingEngine": "Cakrahub Booking Engine",
         "GrevonAI": "Grevon AI", "GuruHotel": "GuruHotel", "HLCPlus": "HLC+", "HotelPoint": "HotelPoint", "HotelRez": "HotelREZ",
         "JulianAlpsBooking": "Julian Alps Booking", "MoreCom": "More.com", "OpenChannel": "Open Channel",
         "OpenShopping": "Open Shopping", "RevChill": "RevChill", "RoomPanda": "RoomPanda", "RukiyeZara": "Rukiye Zara",
         "SelahComfort": "Selah Comfort", "WeSpeak": "WeSpeak", "WeSpeakOpen": "WeSpeakOpen",
         "WigwamHolidays": "Wigwam Holidays", "ZenithBookingEngine": "Zenith Booking Engine", "JoodBooking": "JoodBooking",
         "BookDirectOpen": "BookDirectOpen"}
# Optional fields every adapter shares — listed once in the intro instead of on every row.
COMMON = {"Send Property Notification", "Property Email", "Min Stay Type",
          "Request Credit Card", "Hide logo", "Hide title", "Billing Info is required", "Use Exact Match"}

L = {
 "en": dict(prefix="", title="More channels", label="More channels",
  desc="The other channels in the catalogue, and what each one's setup asks you to enter.",
  intro=("These channels are in **Settings → Channels → Add a channel** but have no guide of their own. "
         "They all connect the same way: ask the channel to connect your property to **Channex** "
         "(Santara AI's connectivity partner), then enter what it gives you — see "
         "[Connect another channel](/channels/other-channels/) for the steps."),
  common=("Most also show **Send Property Notification** (tick it and a **Property Email** field appears) "
          "and some a **Min Stay Type** (usually Arrival). Both are optional and left out of the table."),
  h_form="Channels with our setup form", h_embedded="Channels that open the embedded setup screens",
  embedded=("On these, step 2 opens the channel manager's own setup screens inside Santara AI. "
            "Fill them in there and press **I'm done**."),
  h_none="Channels with nothing to enter", none="Nothing to sign in with — pick the rate plans the channel should receive.",
  col_ch="Channel", col_f="What you enter", nothing="Nothing — choose the rate plans to send",
  help="Not sure what a field means? Ask the channel's support for the value they issued when they connected Channex."),
 "id": dict(prefix="/id", title="Channel lainnya", label="Channel lainnya",
  desc="Channel lain di katalog, dan apa yang diminta penyiapan masing-masing.",
  intro=("Channel ini ada di **Pengaturan → Channel → Tambah channel** tetapi belum punya panduan sendiri. "
         "Semuanya terhubung dengan cara yang sama: minta channel menghubungkan properti Anda ke **Channex** "
         "(mitra konektivitas Santara AI), lalu masukkan apa yang mereka berikan — lihat "
         "[Hubungkan channel lain](/id/channels/other-channels/) untuk langkah-langkahnya."),
  common=("Sebagian besar juga menampilkan **Send Property Notification** (centang, lalu kolom **Property Email** muncul) "
          "dan sebagian **Min Stay Type** (biasanya Arrival). Keduanya opsional dan tidak dicantumkan di tabel."),
  h_form="Channel dengan formulir penyiapan kami", h_embedded="Channel yang membuka layar penyiapan tertanam",
  embedded=("Pada channel ini, langkah 2 membuka layar penyiapan milik channel manager di dalam Santara AI. "
            "Isi di sana lalu tekan **Saya sudah selesai**."),
  h_none="Channel tanpa isian", none="Tidak ada login — pilih rate plan yang dikirim ke channel.",
  col_ch="Channel", col_f="Yang Anda masukkan", nothing="Tidak ada — pilih rate plan yang dikirim",
  help="Tidak yakin arti sebuah kolom? Tanyakan nilainya ke dukungan channel — mereka memberikannya saat menghubungkan Channex."),
 "vi": dict(prefix="/vi", title="Các kênh khác", label="Các kênh khác",
  desc="Các kênh còn lại trong danh mục, và mỗi kênh yêu cầu nhập gì khi thiết lập.",
  intro=("Các kênh này có trong **Cài đặt → Kênh → Thêm kênh** nhưng chưa có hướng dẫn riêng. "
         "Tất cả kết nối giống nhau: nhờ kênh kết nối chỗ nghỉ của bạn với **Channex** "
         "(đối tác kết nối của Santara AI), rồi nhập thông tin họ cung cấp — xem "
         "[Kết nối kênh khác](/vi/channels/other-channels/) để biết các bước."),
  common=("Hầu hết còn có **Send Property Notification** (tích chọn thì ô **Property Email** hiện ra) "
          "và một số có **Min Stay Type** (thường là Arrival). Cả hai không bắt buộc nên không ghi trong bảng."),
  h_form="Kênh dùng biểu mẫu thiết lập của chúng tôi", h_embedded="Kênh mở màn hình thiết lập nhúng",
  embedded=("Với các kênh này, bước 2 mở màn hình thiết lập riêng của channel manager ngay trong Santara AI. "
            "Điền ở đó rồi bấm **Tôi đã xong**."),
  h_none="Kênh không cần nhập gì", none="Không cần đăng nhập — chọn các gói giá gửi sang kênh.",
  col_ch="Kênh", col_f="Bạn nhập gì", nothing="Không có — chọn các gói giá cần gửi",
  help="Không chắc một trường nghĩa là gì? Hãy hỏi bộ phận hỗ trợ của kênh — họ cấp giá trị đó khi kết nối Channex."),
}

def rows(codes, d):
    out = []
    for code in sorted(codes, key=lambda c: NAMES.get(c, c).lower()):
        fields = [p["title"] for p in SCHEMAS[code].get("params", []) if p["title"] not in COMMON]
        out.append(f"| {NAMES.get(code, code)} | {', '.join(f'**{f}**' for f in fields) or d['nothing']} |")
    return "\n".join(out)

groups = {"native": [], "iframe": [], "direct": []}
for code, s in SCHEMAS.items():
    if code not in SKIP and "error" not in s:
        groups[s.get("mapping", "iframe")].append(code)

for loc, d in L.items():
    head = f"| {d['col_ch']} | {d['col_f']} |\n| --- | --- |\n"
    body = f"""---
title: "{d['title']}"
description: "{d['desc']}"
sidebar:
  order: 99
  label: "{d['label']}"
---

{d['intro']}

{d['common']}

## {d['h_form']}

{head}{rows(groups['native'], d)}

## {d['h_embedded']}

{d['embedded']}

{head}{rows(groups['iframe'], d)}

## {d['h_none']}

{d['none']}

{head}{rows(groups['direct'], d)}

{d['help']}
"""
    path = os.path.join(ROOT, "" if loc == "en" else loc, "channel-guides", "more-channels.md")
    open(path, "w").write(body)
    print("wrote", path, {k: len(v) for k, v in groups.items()})
