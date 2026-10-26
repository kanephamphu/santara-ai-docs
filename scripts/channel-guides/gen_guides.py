import json
"""Generate one English docs page per channel under src/content/docs/channel-guides/."""
import os, sys

OUT = sys.argv[1]

MULTI = ("**Multi-occupancy** — one price per guest count. If you only have one price for the "
         "room, map that same rate to every guest count.")
MULTI_USUALLY = "Usually " + MULTI
PER_ROOM = "**Per room** — one price for the room, whoever stays. Map your full-occupancy rate."
PLAIN = "Map each of the channel's rooms to your room, and each of its rates to one of your rate plans."
CONTRACT = ("You need **your own contract** with {n}, with the property's details and photos already "
            "in its extranet. Santara AI connects a property that is signed up; it cannot create one "
            "on {n} for you.")


def support(n, extra=""):
    return [f"Ask {n} support to connect your property to **Channex**{extra}.",
            f"Note the **Hotel ID** {n} gives you."]


# name, slug, description, dict
C = []

def ch(name, slug, desc, **kw):
    C.append(dict(name=name, slug=slug, desc=desc, **kw))


ch("Agoda", "agoda", "Switch on channel manager mode in Agoda YCS, enter your Hotel ID, and map rooms per guest count.",
   before=[CONTRACT],
   extranet=["In Agoda **YCS**, open **Settings → Property Settings → Optional Settings**.",
             "Tick **Enable channel manager mode**.",
             "Choose **Channex** from the list and **Save**."],
   extranet_alt="Or ask Agoda support, in the extranet's messaging, to connect Channex for you.",
   fields=[("Hotel ID", "Your Agoda Hotel ID."),
           ("Booking amount", "**Inclusive** — taxes included, commission taken off (your payout). "
            "**Inclusive with commissions** — taxes and commission included (the guest's total). "
            "**Exclusive** — no taxes or commission (the US model).")],
   mapping=[MULTI])

ch("Expedia", "expedia", "Choose Channex for connectivity and bookings in Expedia's extranet, enter your property ID, map, and upcoming bookings come across.",
   extranet=["In the Expedia extranet, open **Rooms and rates → Connectivity settings**. Expedia usually asks for a two-factor sign-in here.",
             "Choose **Channex** for **both** options: connectivity **and** bookings."],
   fields=[("Property ID", "Your Expedia property ID."),
           ("Min stay type", "Which minimum stay you send. Usually **Arrival**."),
           ("Booking amount", "**Payout amount** — what you charge the guest or the virtual card; it matches the VCC. "
            "**Total amount** — what the guest paid, taxes and fees included. "
            "**Total amount excluding taxes** — for US properties.")],
   mapping=["Expedia's rooms and rates are on the left; pick your matching room and rate on the right."],
   after=["Going live sends all rates, availability and restrictions in one full sync.",
          "**Upcoming Expedia bookings are imported.**",
          "**Guest messages** on Expedia can be answered from Santara AI."])

ch("Trip.com (Ctrip)", "trip-com", "Connect Channex in Trip.com eBooking, enter your Hotel ID, and map rooms — usually per guest count.",
   extranet=["Sign in to **Trip.com eBooking**.",
             "Open **Rates & Availability → Connectivity Settings**.",
             "Search **Channex**, choose it, press **Continue**, then **Connect**."],
   extranet_alt="If those options are missing from your account, email Trip.com at lodgingsupport@trip.com.",
   fields=[("Hotel ID", "Your Trip.com Hotel ID."),
           ("Tax setting", "Whether booking totals include taxes.")],
   mapping=[MULTI_USUALLY],
   after=["Upcoming bookings are imported — but only the ones Trip.com already handed to a channel "
          "manager. Some may arrive without full guest details, and Trip.com gives no way to tell "
          "which are missing. Check the extranet for stays made before you connected."])

ch("Traveloka", "traveloka", "Connect Channex in the Traveloka extranet, use the letter-code property ID it gives you, and map the RETAIL rate per guest count.",
   extranet=["In the Traveloka extranet, open the **channel manager** section and choose **Channex**.",
             "Note the **property ID** Traveloka gives for the connection. It is made of letters, like `LsBxFfgUQcuf` — not the number you see elsewhere in the extranet."],
   extranet_alt="Or ask Traveloka's support team to connect it for you.",
   fields=[("Hotel ID", "The letter-code property ID Traveloka gave you for the connection.")],
   mapping=[MULTI,
            "Each room has **one rate to map: RETAIL**. Every other Traveloka rate is derived from it."],
   notes=[("note", "Meal plans on Traveloka",
           "Traveloka sets meal plans on the **room**, not the rate, so the same room can appear more "
           "than once — once per meal plan. Map each one.")],
   after=["Booking amounts can arrive with or without tax and commission. To match Traveloka's hotel "
          "voucher, ask your Traveloka representative to change that setting in their extranet."])

ch("Tiket.com", "tiket-com", "Ask Tiket.com to connect Channex (or do it yourself), enter your Hotel ID, and map every room and rate.",
   extranet=["Email Tiket.com support to ask for the **Channex** connection.",
             "Note your **Tiket.com Hotel ID**."],
   extranet_alt="If no channel manager is connected yet, you can choose Channex yourself in the extranet.",
   fields=[("Hotel ID", "Your Tiket.com Hotel ID.")],
   mapping=[PLAIN])

ch("Klook", "klook", "Email Klook to connect Channex, enter the Hotel ID they send, and map every room and rate.",
   extranet=["Email Klook support to request the **Channex** connection.",
             "Klook replies with your **Hotel ID**."],
   fields=[("Hotel ID", "The Klook Hotel ID from their reply.")],
   mapping=[PLAIN])

ch("MakeMyTrip and Goibibo", "makemytrip", "Ask MakeMyTrip to connect Channex, enter your Hotel ID and access token, and map rooms per guest count.",
   before=[CONTRACT.format(n="MakeMyTrip")],
   extranet=["Ask MakeMyTrip support, in the extranet's messaging, to connect **Channex**.",
             "They give you an **access token**. Keep it with your **Hotel ID**."],
   fields=[("Hotel ID", "Your MakeMyTrip Hotel ID."),
           ("Access token", "The token MakeMyTrip gave you when Channex was connected.")],
   mapping=[MULTI_USUALLY])

ch("Vrbo", "vrbo", "Connect Vrbo with your Vrbo login (and SMS code), after removing any old channel manager and iCal links, then map listing by listing.",
   before=["**The Vrbo account must not be API-connected to other software.** If a previous PMS or "
           "channel manager was connected, ask Vrbo support: *\"Please disconnect my account from my "
           "current channel manager, I will control the extranet manually.\"* Connect only after "
           "they confirm.",
           "**Remove every iCal link** on your Vrbo listings (from Airbnb or another system). iCal "
           "keeps overwriting what Santara AI sends.",
           "Have the **account owner's phone** nearby — Vrbo may send an SMS code."],
   extranet=None,
   fields=[("Username", "Your Vrbo username."),
           ("Password", "Your Vrbo password.")],
   connect_steps=["Enter your Vrbo **username** and **password**.",
                  "Press **Authenticate** — not Test connection.",
                  "If Vrbo sends an **SMS code** to the account owner, enter it.",
                  "Press **Test connection**. Your Vrbo listings appear on the mapping screen."],
   mapping=["Vrbo maps **listing by listing**: pick a room and rate for each listing you want connected."],
   after=["Rates, availability, restrictions and bookings (new, changed, cancelled) sync.",
          "Currencies: **USD, CAD, EUR, AUD, NZD, JPY, SGD, BRL, MXN, GBP**.",
          "**Guest messages and reviews are not supported** on Vrbo."],
   notes=[("caution", "Changing your Vrbo password disconnects it",
           "If the Vrbo account's password changes, the connection drops. Reconnect with the new password.")])

ch("Hostelworld", "hostelworld", "Email Hostelworld to connect Channex, enter the property ID, and map each room at its maximum occupancy.",
   extranet=["Email Hostelworld support to connect **Channex**.",
             "They reply when it is enabled, with your **property ID**."],
   fields=[("Property ID", "The ID from Hostelworld's reply.")],
   mapping=["Hostelworld prices each room at its **maximum occupancy**: a double sends the 2-person "
            "price, a 4-bed room the 4-person price. It cannot sell a double as a single.",
            "**Dorm beds** send the 1-person price."],
   after=["Hostelworld does not support **closed to arrival** or **closed to departure** — those "
          "restrictions are not sent."])

ch("Hotelbeds", "hotelbeds", "Choose Channex in Maxiroom, connect with your Hotelbeds username and password, pick a contract, and map — one connection per contract.",
   extranet=["Sign in to the **Maxiroom** extranet and choose **Channex** from the list of channel managers."],
   extranet_alt="If it is not there, open a Hotelbeds support ticket to connect Channex. Channex must be the only channel manager connected.",
   fields=[("Username and password", "The ones Hotelbeds gave you. They are often the same — that is normal."),
           ("Contract", "Appears after Test connection. Pick the contract this connection is for."),
           ("Update availability / rates / restrictions", "What is sent. Leave all three on unless your contract fixes prices or allotments.")],
   mapping=["Hotelbeds' rooms are listed; map each to your room and rate.",
            "Do **not** send prices to rates marked **FIT** or similar contract rates — they reject them."],
   notes=[("note", "One connection per contract",
           "With four Hotelbeds contracts, connect Hotelbeds four times — once per contract.")],
   errors=[("This request is out of the contract period", "Ask Hotelbeds to extend the contract past two years."),
           ("day … has no inventory loaded", "Ask Hotelbeds to load prices on every date two years ahead."),
           ("This change is not permitted as it does not agree with the signed contract", "Turn off **Update rates** for this connection."),
           ("Minimum allotment activated …", "The contract has allotments you cannot close. Ask Hotelbeds for a contract without them — allotments can cause overbookings.")])

ch("Despegar", "despegar", "Add Channex in Despegar's extranet, copy the one-time API password, and map every room and rate.",
   extranet=["In the Despegar extranet, open **General Settings → Channel Manager Connection**.",
             "**Disable or remove** any old channel manager connection.",
             "Press **Add channel manager / PMS**, choose **Channex**, and accept the terms.",
             "Copy the **property ID**, **username** and **API password** Despegar shows."],
   notes_before=[("danger", "Copy the API password now",
                  "Despegar shows the API password only once. If you lose it, reset the connection in "
                  "Despegar to get a new one. Your normal extranet password does not work here.")],
   fields=[("Hotel ID", "The Despegar property ID."),
           ("Username", "The username Despegar showed."),
           ("Password", "The **API password** — not your extranet password."),
           ("Min stay type", "Despegar accepts only one kind; choose which to send.")],
   mapping=[PLAIN,
            "A 1-person rate on a double room is fine — Despegar can set extra-guest prices in its extranet."])

ch("HRS", "hrs", "Ask HRS to connect Channex, enter your Hotel ID, and keep one rate plan per room type.",
   before=[CONTRACT.format(n="HRS")],
   extranet=support("HRS"),
   fields=[("Hotel ID", "Your HRS Hotel ID.")],
   mapping=["Map a single room to HRS's single room.",
            "Keep **one rate plan per room type**. HRS holds availability per rate plan, so several "
            "rate plans on one room can oversell it."])

ch("Check24", "check24", "Ask Check24 to connect Channex, enter your Hotel ID, and map rooms per guest count.",
   before=[CONTRACT.format(n="Check24")],
   extranet=["Send Check24 a support request to connect your property to **Channex**.",
             "Note your **Check24 Hotel ID**."],
   fields=[("Hotel ID", "Your Check24 Hotel ID.")],
   mapping=[MULTI])

ch("Crewdogs", "crewdogs", "Ask Crewdogs to connect Channex, enter your Hotel ID, and map every room and rate.",
   before=[CONTRACT.format(n="Crewdogs")],
   extranet=support("Crewdogs"),
   fields=[("Hotel ID", "Your Crewdogs Hotel ID.")],
   mapping=[PLAIN])

ch("Dida Travel", "dida-travel", "Ask Dida Travel to connect Channex, enter your Hotel ID, and map every room and rate.",
   before=[CONTRACT.format(n="Dida Travel")],
   extranet=["Ask Dida Travel support, in the extranet's messaging, to connect **Channex**.",
             "Note your **Dida Travel Hotel ID**."],
   fields=[("Hotel ID", "Your Dida Travel Hotel ID.")],
   mapping=[PLAIN])

ch("Emerging Travel Group", "emerging-travel", "Email Emerging Travel to connect Channex, enter your Hotel ID, choose the tax setting, and map rooms.",
   extranet=["Email Emerging Travel support to request the **Channex** connection.",
             "Note your **Emerging Travel Hotel ID**."],
   fields=[("Hotel ID", "Your Emerging Travel Hotel ID."),
           ("Tax setting", "Whether booking totals include taxes.")],
   mapping=[MULTI_USUALLY])

ch("Feratel", "feratel", "Ask Feratel to connect Channex, enter your Hotel ID, and map rooms per guest count or per room.",
   before=[CONTRACT.format(n="Feratel")],
   extranet=support("Feratel"),
   extranet_alt="Or connect it yourself in Feratel's interface.",
   fields=[("Hotel ID", "Your Feratel Hotel ID.")],
   mapping=["Feratel can be **multi-occupancy** or **per room**. If it asks for each guest count and you "
            "only have one price, map that same rate to every guest count."])

ch("Glamping Hub", "glamping-hub", "Email Glamping Hub to connect Channex, enter the Hotel ID they give you, and map per room.",
   before=[CONTRACT.format(n="Glamping Hub")],
   extranet=["Email Glamping Hub support to request a **Channex** connection.",
             "They connect it and give you a **Hotel ID**."],
   fields=[("Hotel ID", "The Hotel ID from Glamping Hub.")],
   mapping=[PER_ROOM])

ch("Hipcamp", "hipcamp", "Email Hipcamp to connect Channex, enter your Hipcamp property ID, and map every room and rate.",
   before=["You need a **Hipcamp account** with your property already on it."],
   extranet=["Email campgrounds@hipcamp.com to request a connection with **Channex**.",
             "Find your **property ID** in Hipcamp's property editor. A Hipcamp rep can help if you cannot find it."],
   fields=[("Hotel ID", "Your Hipcamp property ID.")],
   mapping=[PLAIN])

ch("Hotel Trader", "hotel-trader", "Ask Hotel Trader to connect Channex, enter your Hotel ID, and map every room and rate.",
   before=[CONTRACT.format(n="Hotel Trader")],
   extranet=support("Hotel Trader"),
   fields=[("Hotel ID", "Your Hotel Trader Hotel ID.")],
   mapping=[PLAIN])

ch("HotelTonight", "hoteltonight", "Email HotelTonight to connect Channex, enter your Hotel ID, choose prices with or without taxes, and map.",
   extranet=["Email mapping-ht@airbnb.com to request the **Channex** connection.",
             "Note the **Hotel ID** HotelTonight gives you."],
   extranet_alt="Not on HotelTonight yet? Sign up through htmarketmanagement@airbnb.com.",
   fields=[("Hotel ID", "Your HotelTonight Hotel ID."),
           ("Taxes", "Whether the prices you send include taxes. Usually **excluding** in the US, **including** in Europe.")],
   mapping=[PLAIN])

ch("HyperGuest", "hyperguest", "Ask HyperGuest to enable Channex, enter your property ID, and map — per guest count if you price that way.",
   extranet=["Ask HyperGuest to enable the **Channex** interface.",
             "They reply with your **property ID**."],
   fields=[("Hotel ID", "Your HyperGuest property ID.")],
   mapping=["HyperGuest supports **multi-occupancy**. Price per guest count? Map each one. Only a price "
            "for the full room? Map just that guest count, or all of them — either works.",
            "Room and rate codes in HyperGuest can be anything readable (for example `DBL-Room`, `BAR`)."],
   notes=[("caution", "Don't rename codes after mapping",
           "If you change a room or rate code in HyperGuest after mapping, map it again in Santara AI.")])

ch("Inntopia", "inntopia", "Add a Channex cross-reference code to each Inntopia product, enter your Hotel ID, and map the RACK rate per room.",
   before=[CONTRACT.format(n="Inntopia")],
   extranet=["Sign in to Inntopia and open the **Products** tab.",
             "For each product, press the settings button on the right and choose **Cross-reference codes**.",
             "Set **Remote system** to **Channex**.",
             "Set **Cross-reference code** to the Inntopia product ID — the number in brackets in the product's name.",
             "Save with the blue check box, close, and repeat for the next product."],
   fields=[("Hotel ID", "Your Inntopia Hotel ID.")],
   mapping=[PER_ROOM, "Map the **RACK** rate only."])

ch("Kliknbook", "kliknbook", "Ask Kliknbook to connect Channex, enter your Hotel Code and max stay type, and map each guest count.",
   before=[CONTRACT.format(n="Kliknbook")],
   extranet=["Ask Kliknbook support to connect **Channex** (or do it in their interface).",
             "Note your **Kliknbook Hotel Code**."],
   fields=[("Hotel Code", "Your Kliknbook Hotel Code."),
           ("Max stay type", "**Arrival** or **Through** — however Kliknbook expects maximum stays to apply.")],
   mapping=["Under each Kliknbook room, map the rate for **each guest count** to your rate plan.",
            "The **star** marks the default rate and guest count for that room."])

ch("MG Bedbank", "mg-bedbank", "Choose Channex in MG's channel manager section, enter your Hotel ID and tax setting, and map rooms per guest count.",
   extranet=["Open the **channel manager** section in MG and choose **Channex**."],
   extranet_alt="Can't find it? Email MG support to request the connection.",
   fields=[("Hotel ID", "Your MG Bedbank Hotel ID."),
           ("Tax setting", "Whether booking totals include taxes.")],
   mapping=[MULTI_USUALLY])

ch("Mr & Mrs Smith", "mr-and-mrs-smith", "Ask Mr & Mrs Smith to connect Channex, enter your Hotel ID, and map per room.",
   before=[CONTRACT.format(n="Mr & Mrs Smith")],
   extranet=support("Mr & Mrs Smith"),
   fields=[("Hotel ID", "Your Mr & Mrs Smith Hotel ID. If they did not give you one, ask them.")],
   mapping=[PER_ROOM])

ch("OpenGDS", "opengds", "Ask OpenGDS to connect Channex, enter your Hotel ID, and map per room.",
   before=[CONTRACT.format(n="OpenGDS")],
   extranet=support("OpenGDS"),
   extranet_alt="Or connect it yourself in OpenGDS's interface.",
   fields=[("Hotel ID", "Your OpenGDS Hotel ID.")],
   mapping=[PER_ROOM])

ch("PriceTravel", "pricetravel", "Ask PriceTravel to connect Channex, enter your Hotel ID, and map rooms per guest count.",
   before=[CONTRACT.format(n="PriceTravel")],
   extranet=support("PriceTravel"),
   fields=[("Hotel ID", "Your PriceTravel Hotel ID.")],
   mapping=[MULTI])

ch("Roibos", "roibos", "Email Roibos to connect Channex, sign in with the username and password they give, pick a contract, and map.",
   extranet=["Email Roibos support to request a **Channex** connection.",
             "They give you a **username** and **password**."],
   fields=[("Username and password", "The ones Roibos gave you."),
           ("Booking amount", "Whether booking totals include taxes."),
           ("Contract", "Press Test connection **first**, then pick the contract from the list.")],
   mapping=[PLAIN],
   notes=[("note", "One connection per contract",
           "With more than one Roibos contract, connect Roibos again for each contract.")])

ch("WebBeds", "webbeds", "Ask WebBeds to connect Channex, enter your Hotel Code and max stay type, and map every room and rate.",
   before=[CONTRACT.format(n="WebBeds")],
   extranet=["Ask WebBeds support to connect **Channex** (or do it in their interface).",
             "Note your **WebBeds Hotel Code**."],
   fields=[("Hotel Code", "Your WebBeds Hotel Code."),
           ("Max stay type", "**Arrival** or **Through** — however WebBeds expects maximum stays to apply.")],
   mapping=[PLAIN])

ch("Yatra", "yatra", "Ask Yatra to connect Channex, enter your Hotel ID, and map per room.",
   before=[CONTRACT.format(n="Yatra")],
   extranet=support("Yatra"),
   fields=[("Hotel ID", "Your Yatra Hotel ID.")],
   mapping=[PER_ROOM])

ch("Getaroom", "getaroom", "Email Getaroom to activate the Channex connection; they confirm with a test booking before you go live.",
   extranet=["Email propertyactivation@getaroom.com asking for a connection with **Channex**, with your Hotel ID.",
             "Getaroom replies with the Hotel ID to use."],
   fields=[("Hotel ID", "The Hotel ID Getaroom confirmed.")],
   mapping=[PLAIN, "Then tell Getaroom the mapping is done."],
   after=["Getaroom sends a **test booking and cancellation** to check the connection. After that, "
          "the property goes live."])

HOTELS_ONLY = ("**Hotels and resorts only.** {n} does not sell apartments, villas or other vacation "
               "rentals — those cannot use this connection.")
ch("Hopper", "hopper", "Hotels only: sign an agreement with Hopper, connect it, map your best available rate, and pick net or gross pricing.",
   before=[HOTELS_ONLY.format(n="Hopper"),
           "**Sign an agreement with Hopper first** — hotelpartners@hopper.com or hotelpartners.hopper.com. "
           "Nothing sells until they have contacted you and the agreement is signed.",
           "Hopper pays every booking by **virtual card**; commission is set in your contract."],
   extranet=None,
   fields=[],
   mapping=["Map your **best available rate**. Cancellation policy is set in your Hopper contract, not by Santara AI."],
   notes=[("note", "Net or gross pricing",
           "Your contract says which. **Gross**: send your normal prices, as you do to Booking.com and "
           "Expedia. **Net**: send prices without commission — lower the channel's prices by the "
           "commission percentage (for example 15%), or they will be too high to sell.")])

ch("Nuitee", "nuitee", "Hotels only: sign an agreement with Nuitee, connect it, and map your best available rate.",
   before=[HOTELS_ONLY.format(n="Nuitee"),
           "**Sign an agreement with Nuitee first** (nuitee.com). Nothing sells until it is signed.",
           "Nuitee pays every booking by **virtual card**; commission is set in your contract."],
   extranet=None,
   fields=[],
   mapping=["Map your **best available rate**. Cancellation policy is set in your Nuitee contract, not by Santara AI."])


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
        _c['fields'] = [(label, d['en']) for label, d in FIELDS[_c['slug']]]


def bullets(items):
    return "\n".join(f"- {i}" for i in items)


def numbered(items):
    return "\n".join(f"{k}. {i}" for k, i in enumerate(items, 1))


def aside(kind, title, body):
    return f":::{kind}[{title}]\n{body}\n:::"


# Images. Extranet screenshots come from the channels' own extranets (public/channel-guides/
# extranet/, English UI, one copy for every locale); step-2 shots are our own app, captured per
# locale by scripts/capture-channel-guides.mjs. Only channels the catalogue offers have one.
LOCALE = 'en'
CONNECT_ALT = 'Step 2 in Santara AI: the {n} setup fields, then Test connection.'
CONNECT_SHOTS = set(['agoda', 'expedia', 'trip-com', 'tiket-com', 'makemytrip', 'hostelworld', 'crewdogs', 'emerging-travel', 'glamping-hub', 'hipcamp', 'hotel-trader', 'webbeds', 'hopper'])
EXTRANET_IMAGES = {'agoda': [('agoda-ycs', 'Agoda YCS: Settings → Property Settings → Optional settings, with Enable channel manager mode ticked and the provider chosen.')], 'expedia': [('expedia-menu', 'Expedia Partner Central: Rooms and rates → Connectivity settings.'), ('expedia-verify', 'Expedia asks for an extra verification before it shows Connectivity settings.')], 'tiket-com': [('tiket-com-connectivity', 'Tiket.com extranet: Connectivity shows the connected channel manager and your Hotel ID.')], 'despegar': [('despegar-menu', 'Despegar extranet: General Settings → Channel Manager Connection.'), ('despegar-connections', "Despegar's channel manager connections — switch off or remove the old ones."), ('despegar-add', 'Choosing the channel manager in Despegar and accepting its terms.')], 'inntopia': [('inntopia-products', 'Inntopia Products tab, with the settings button on each product.'), ('inntopia-cross-reference', 'Inntopia cross-reference code: Remote System Channex, code = the product ID in brackets.')]}
BEFORE_IMAGES = {'vrbo': [('vrbo-api-connected', 'A Vrbo account still connected to other software — ask Vrbo to convert it before you connect.')]}


def img(src, alt):
    return f"![{alt}](/channel-guides/extranet/{src}.webp)\n"


CATALOGUE_NAMES = {"makemytrip": "Make My Trip", "glamping-hub": "GlampingHub", "hotel-trader": "HotelTrader", "vrbo": "VRBO"}

def page(c, order):
    n = c["name"]
    out = [f"---\ntitle: {json.dumps('Connect ' + n, ensure_ascii=False)}\ndescription: {json.dumps(c['desc'], ensure_ascii=False)}\nsidebar:\n  order: {order}\n  label: {json.dumps(n, ensure_ascii=False)}\n---\n"]
    out.append(f"How to connect {n} to Santara AI. The setup inside Santara AI is the same for every "
               f"channel ([Connect another channel](/channels/other-channels/)); this page covers what "
               f"is specific to {n}.\n")
    before = [b.format(n=n) for b in c.get("before", [])]
    before.append("A **property with at least one room** in Santara AI.")
    if c.get("extranet") is not None:
        before.append(f"**No other channel manager or iCal link** on the property in {n} — two systems "
                      "updating one calendar overwrite each other.")
    out.append("## Before you start\n\n" + bullets(before) + "\n")
    for src, alt in BEFORE_IMAGES.get(c["slug"], []):
        out.append(img(src, alt))
    step = 1
    if c.get("extranet"):
        out.append(f"## {step}. Switch the connection on in {n}\n\n"
                   f"{n} has to allow the connection first. Channex is Santara AI's connectivity "
                   f"partner — it is the name {n} knows us by.\n\n" + numbered(c["extranet"]) + "\n")
        if c.get("extranet_alt"):
            out.append(c["extranet_alt"] + "\n")
        for src, alt in EXTRANET_IMAGES.get(c["slug"], []):
            out.append(img(src, alt))
        for a in c.get("notes_before", []):
            out.append(aside(*a) + "\n")
        step += 1
    out.append(f"## {step}. Connect in Santara AI\n")
    steps = [f"Open **Settings → Channels → Add a channel**, find **{n}**, and press **Connect**.",
             "Pick the property it is for."]
    # Name the channel the way the catalogue tile does, so a search for it finds it.
    steps[0] = steps[0].replace(f"**{n}**", f"**{CATALOGUE_NAMES.get(c['slug'], n)}**")
    if c.get("connect_steps"):
        steps += c["connect_steps"]
    elif c["fields"]:
        steps += ["Fill in the fields below, then press **Test connection**.",
                  "When the test passes, press **Connect and continue**."]
    else:
        steps += ["Press **Connect and continue**."]
    out.append(numbered(steps) + "\n")
    if c["slug"] in CONNECT_SHOTS:
        out.append(f"![{CONNECT_ALT.format(n=n)}](/screens/channel-guides/{c['slug']}.{LOCALE}.png)\n")
    if c["fields"]:
        out.append("| Field | What to enter |\n| --- | --- |\n" +
                   "\n".join(f"| {f} | {w} |" for f, w in c["fields"]) + "\n")
    if c.get("extranet"):
        out.append(f"If **Test connection** fails, check the ID, then ask {n} support to confirm the "
                   "property is connected to Channex.\n")
    step += 1
    out.append(f"## {step}. Map rooms and rates\n\n" + bullets(c["mapping"]) + "\n\n"
               f"Map **every** room and rate {n} shows. One left unmapped gets no updates, and {n} "
               "keeps selling it on its old availability.\n")
    step += 1
    out.append(f"## {step}. Import and go live\n\n"
               "Santara AI checks what is mapped, turns the channel on and brings across the stays "
               f"{n} already has. From then on, rates, availability and restrictions sync from "
               "Santara AI — see [Going live](/channels/going-live/).\n")
    for a in c.get("notes", []):
        out.append(aside(*a) + "\n")
    after = list(c.get("after", []))
    if not any("message" in x.lower() for x in after):
        after.append(f"Answer {n} guests in {n}'s own inbox — guest messages from {n} do not come into Santara AI.")
    out.append(f"## Good to know\n\n" + bullets(after) + "\n")
    if c.get("errors"):
        out.append(f"## {n} errors\n\n| Error | What to do |\n| --- | --- |\n" +
                   "\n".join(f"| *{e}* | {w} |" for e, w in c["errors"]) + "\n")
    out.append("More fixes: [Channel troubleshooting](/channels/troubleshooting/).\n")
    return "\n".join(out)


os.makedirs(OUT, exist_ok=True)
for i, c in enumerate(C, start=2):
    with open(os.path.join(OUT, c["slug"] + ".md"), "w") as f:
        f.write(page(c, i))
print(len(C), "pages")
print("\n".join(f"{c['slug']}|{c['name']}" for c in C))
