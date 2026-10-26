import json
"""Generate one Vietnamese docs page per channel under src/content/docs/vi/channel-guides/."""
import os, sys

OUT = sys.argv[1]

MULTI = ("**Theo số khách** — mỗi số khách một giá. Nếu phòng chỉ có một giá, hãy ánh xạ cùng gói giá "
         "đó cho mọi số khách.")
MULTI_USUALLY = "Thường là " + MULTI
PER_ROOM = "**Theo phòng** — một giá cho cả phòng, bất kể ai ở. Ánh xạ gói giá cho số khách tối đa của bạn."
PLAIN = "Ánh xạ từng phòng của kênh với phòng của bạn, và từng mức giá của kênh với một gói giá của bạn."
CONTRACT = ("Bạn cần **hợp đồng riêng** với {n}, với thông tin và hình ảnh của chỗ nghỉ đã có sẵn "
            "trong extranet của kênh. Santara AI kết nối chỗ nghỉ đã đăng ký; Santara AI không thể "
            "tạo chỗ nghỉ trên {n} thay bạn.")


def support(n, extra=""):
    return [f"Đề nghị bộ phận hỗ trợ của {n} kết nối chỗ nghỉ của bạn với **Channex**{extra}.",
            f"Ghi lại **Hotel ID** mà {n} cấp cho bạn."]


# name, slug, description, dict
C = []

def ch(name, slug, desc, **kw):
    C.append(dict(name=name, slug=slug, desc=desc, **kw))


ch("Agoda", "agoda", "Bật chế độ channel manager trong Agoda YCS, nhập Hotel ID, rồi ánh xạ phòng theo số khách.",
   before=[CONTRACT],
   extranet=["Trong Agoda **YCS**, mở **Settings → Property Settings → Optional Settings**.",
             "Đánh dấu **Enable channel manager mode**.",
             "Chọn **Channex** trong danh sách rồi bấm **Save**."],
   extranet_alt="Hoặc nhắn bộ phận hỗ trợ của Agoda, qua mục tin nhắn trong extranet, để họ kết nối Channex giúp bạn.",
   fields=[("Hotel ID", "Hotel ID Agoda của bạn."),
           ("Booking amount", "**Inclusive** — đã gồm thuế, đã trừ hoa hồng (số bạn thực nhận). "
            "**Inclusive with commissions** — đã gồm thuế và hoa hồng (tổng khách trả). "
            "**Exclusive** — không gồm thuế hay hoa hồng (kiểu Mỹ).")],
   mapping=[MULTI])

ch("Expedia", "expedia", "Chọn Channex cho kết nối và đặt phòng trong extranet Expedia, nhập property ID, ánh xạ, và các đặt phòng sắp tới sẽ chuyển về.",
   extranet=["Trong extranet Expedia, mở **Rooms and rates → Connectivity settings**. Expedia thường yêu cầu đăng nhập hai lớp ở bước này.",
             "Chọn **Channex** cho **cả hai** mục: kết nối (connectivity) **và** đặt phòng (bookings)."],
   fields=[("Property ID", "Property ID Expedia của bạn."),
           ("Min stay type", "Loại số đêm tối thiểu bạn gửi đi. Thường là **Arrival**."),
           ("Booking amount", "**Payout amount** — số bạn thu của khách hoặc của thẻ ảo; khớp với VCC. "
            "**Total amount** — số khách đã trả, gồm thuế và phí. "
            "**Total amount excluding taxes** — dành cho chỗ nghỉ tại Mỹ.")],
   mapping=["Phòng và mức giá của Expedia ở bên trái; chọn phòng và gói giá tương ứng của bạn ở bên phải."],
   after=["Khi go live, toàn bộ giá, tình trạng trống và ràng buộc được gửi đi trong một lần đồng bộ đầy đủ.",
          "**Các đặt phòng Expedia sắp tới được nhập về.**",
          "**Tin nhắn khách** trên Expedia có thể trả lời ngay từ Santara AI."])

ch("Trip.com (Ctrip)", "trip-com", "Kết nối Channex trong Trip.com eBooking, nhập Hotel ID, rồi ánh xạ phòng — thường theo số khách.",
   extranet=["Đăng nhập **Trip.com eBooking**.",
             "Mở **Rates & Availability → Connectivity Settings**.",
             "Tìm **Channex**, chọn, bấm **Continue**, rồi **Connect**."],
   extranet_alt="Nếu tài khoản của bạn không có các mục này, hãy email Trip.com tại lodgingsupport@trip.com.",
   fields=[("Hotel ID", "Hotel ID Trip.com của bạn."),
           ("Tax setting", "Tổng tiền đặt phòng có gồm thuế hay không.")],
   mapping=[MULTI_USUALLY],
   after=["Các đặt phòng sắp tới được nhập về — nhưng chỉ những lượt Trip.com đã giao cho một channel "
          "manager. Một số lượt có thể về thiếu thông tin khách, và Trip.com không cho cách nào biết "
          "lượt nào bị thiếu. Hãy kiểm tra extranet cho những lượt đặt trước khi bạn kết nối."])

ch("Traveloka", "traveloka", "Kết nối Channex trong extranet Traveloka, dùng property ID dạng chữ cái mà Traveloka cấp, và ánh xạ mức giá RETAIL theo số khách.",
   extranet=["Trong extranet Traveloka, mở mục **channel manager** và chọn **Channex**.",
             "Ghi lại **property ID** mà Traveloka cấp cho kết nối. Mã này gồm các chữ cái, ví dụ `LsBxFfgUQcuf` — không phải con số bạn thấy ở chỗ khác trong extranet."],
   extranet_alt="Hoặc nhờ đội hỗ trợ của Traveloka kết nối giúp bạn.",
   fields=[("Hotel ID", "Property ID dạng chữ cái mà Traveloka cấp cho kết nối.")],
   mapping=[MULTI,
            "Mỗi phòng có **một mức giá cần ánh xạ: RETAIL**. Mọi mức giá Traveloka khác đều suy ra từ mức giá này."],
   notes=[("note", "Gói bữa ăn trên Traveloka",
           "Traveloka đặt gói bữa ăn trên **phòng**, không phải trên mức giá, nên cùng một phòng có thể "
           "hiện nhiều lần — mỗi gói bữa ăn một lần. Hãy ánh xạ từng dòng.")],
   after=["Số tiền đặt phòng có thể về kèm hoặc không kèm thuế và hoa hồng. Để khớp với voucher khách "
          "sạn của Traveloka, hãy nhờ người phụ trách Traveloka của bạn đổi thiết lập đó trong extranet của họ."])

ch("Tiket.com", "tiket-com", "Đề nghị Tiket.com kết nối Channex (hoặc tự làm), nhập Hotel ID, rồi ánh xạ mọi phòng và mức giá.",
   extranet=["Email bộ phận hỗ trợ của Tiket.com để đề nghị kết nối **Channex**.",
             "Ghi lại **Hotel ID Tiket.com** của bạn."],
   extranet_alt="Nếu chưa có channel manager nào được kết nối, bạn có thể tự chọn Channex trong extranet.",
   fields=[("Hotel ID", "Hotel ID Tiket.com của bạn.")],
   mapping=[PLAIN])

ch("Klook", "klook", "Email Klook để kết nối Channex, nhập Hotel ID họ gửi, rồi ánh xạ mọi phòng và mức giá.",
   extranet=["Email bộ phận hỗ trợ của Klook để đề nghị kết nối **Channex**.",
             "Klook trả lời kèm **Hotel ID** của bạn."],
   fields=[("Hotel ID", "Hotel ID Klook trong thư trả lời của họ.")],
   mapping=[PLAIN])

ch("MakeMyTrip and Goibibo", "makemytrip", "Đề nghị MakeMyTrip kết nối Channex, nhập Hotel ID và access token, rồi ánh xạ phòng theo số khách.",
   before=[CONTRACT.format(n="MakeMyTrip")],
   extranet=["Nhắn bộ phận hỗ trợ của MakeMyTrip, qua mục tin nhắn trong extranet, để kết nối **Channex**.",
             "Họ cấp cho bạn một **access token**. Giữ nó cùng với **Hotel ID**."],
   fields=[("Hotel ID", "Hotel ID MakeMyTrip của bạn."),
           ("Access token", "Token MakeMyTrip cấp cho bạn khi Channex được kết nối.")],
   mapping=[MULTI_USUALLY])

ch("Vrbo", "vrbo", "Kết nối Vrbo bằng thông tin đăng nhập Vrbo (và mã SMS), sau khi gỡ channel manager cũ và các liên kết iCal, rồi ánh xạ từng listing.",
   before=["**Tài khoản Vrbo không được kết nối API với phần mềm khác.** Nếu trước đây có PMS hoặc "
           "channel manager kết nối, hãy gửi bộ phận hỗ trợ của Vrbo: *\"Please disconnect my account from my "
           "current channel manager, I will control the extranet manually.\"* Chỉ kết nối sau khi "
           "họ xác nhận.",
           "**Gỡ mọi liên kết iCal** trên các listing Vrbo của bạn (từ Airbnb hoặc hệ thống khác). iCal "
           "sẽ liên tục ghi đè những gì Santara AI gửi.",
           "Để sẵn **điện thoại của chủ tài khoản** — Vrbo có thể gửi mã SMS."],
   extranet=None,
   fields=[("Username", "Tên đăng nhập Vrbo của bạn."),
           ("Password", "Mật khẩu Vrbo của bạn.")],
   connect_steps=["Nhập **username** và **password** Vrbo của bạn.",
                  "Bấm **Authenticate** — không phải Kiểm tra kết nối.",
                  "Nếu Vrbo gửi **mã SMS** tới chủ tài khoản, hãy nhập mã đó.",
                  "Bấm **Kiểm tra kết nối**. Các listing Vrbo của bạn hiện trên màn hình ánh xạ."],
   mapping=["Vrbo ánh xạ **từng listing một**: chọn phòng và gói giá cho mỗi listing bạn muốn kết nối."],
   after=["Giá, tình trạng trống, ràng buộc và đặt phòng (mới, thay đổi, hủy) đều đồng bộ.",
          "Tiền tệ: **USD, CAD, EUR, AUD, NZD, JPY, SGD, BRL, MXN, GBP**.",
          "**Tin nhắn khách và đánh giá chưa được hỗ trợ** trên Vrbo."],
   notes=[("caution", "Đổi mật khẩu Vrbo sẽ ngắt kết nối",
           "Nếu mật khẩu tài khoản Vrbo thay đổi, kết nối sẽ bị ngắt. Hãy kết nối lại bằng mật khẩu mới.")])

ch("Hostelworld", "hostelworld", "Email Hostelworld để kết nối Channex, nhập property ID, rồi ánh xạ mỗi phòng theo số khách tối đa.",
   extranet=["Email bộ phận hỗ trợ của Hostelworld để kết nối **Channex**.",
             "Họ trả lời khi kết nối đã bật, kèm **property ID** của bạn."],
   fields=[("Property ID", "ID trong thư trả lời của Hostelworld.")],
   mapping=["Hostelworld định giá mỗi phòng theo **số khách tối đa**: phòng đôi gửi giá 2 người, "
            "phòng 4 giường gửi giá 4 người. Hostelworld không bán được phòng đôi như phòng đơn.",
            "**Giường dorm** gửi giá 1 người."],
   after=["Hostelworld không hỗ trợ **đóng nhận phòng** hay **đóng trả phòng** — các ràng buộc này "
          "không được gửi đi."])

ch("Hotelbeds", "hotelbeds", "Chọn Channex trong Maxiroom, kết nối bằng username và password Hotelbeds, chọn hợp đồng, rồi ánh xạ — mỗi hợp đồng một kết nối.",
   extranet=["Đăng nhập extranet **Maxiroom** và chọn **Channex** trong danh sách channel manager."],
   extranet_alt="Nếu không thấy, hãy mở một yêu cầu hỗ trợ với Hotelbeds để kết nối Channex. Channex phải là channel manager duy nhất được kết nối.",
   fields=[("Username and password", "Thông tin Hotelbeds cấp cho bạn. Hai giá trị thường giống nhau — điều đó bình thường."),
           ("Contract", "Hiện ra sau khi Kiểm tra kết nối. Chọn hợp đồng dành cho kết nối này."),
           ("Update availability / rates / restrictions", "Những gì được gửi đi. Để bật cả ba, trừ khi hợp đồng của bạn cố định giá hoặc allotment.")],
   mapping=["Các phòng của Hotelbeds được liệt kê; ánh xạ từng phòng với phòng và gói giá của bạn.",
            "**Không** gửi giá tới các mức giá đánh dấu **FIT** hoặc các mức giá hợp đồng tương tự — chúng sẽ từ chối."],
   notes=[("note", "Mỗi hợp đồng một kết nối",
           "Có bốn hợp đồng Hotelbeds thì kết nối Hotelbeds bốn lần — mỗi hợp đồng một lần.")],
   errors=[("This request is out of the contract period", "Đề nghị Hotelbeds gia hạn hợp đồng quá hai năm."),
           ("day … has no inventory loaded", "Đề nghị Hotelbeds nạp giá cho mọi ngày trong hai năm tới."),
           ("This change is not permitted as it does not agree with the signed contract", "Tắt **Update rates** cho kết nối này."),
           ("Minimum allotment activated …", "Hợp đồng có allotment mà bạn không đóng được. Đề nghị Hotelbeds một hợp đồng không có allotment — allotment có thể gây đặt trùng.")])

ch("Despegar", "despegar", "Thêm Channex trong extranet Despegar, sao chép API password chỉ hiện một lần, rồi ánh xạ mọi phòng và mức giá.",
   extranet=["Trong extranet Despegar, mở **General Settings → Channel Manager Connection**.",
             "**Tắt hoặc gỡ** mọi kết nối channel manager cũ.",
             "Bấm **Add channel manager / PMS**, chọn **Channex**, rồi chấp nhận điều khoản.",
             "Sao chép **property ID**, **username** và **API password** mà Despegar hiển thị."],
   notes_before=[("danger", "Sao chép API password ngay",
                  "Despegar chỉ hiển thị API password một lần. Nếu làm mất, hãy đặt lại kết nối trong "
                  "Despegar để nhận mật khẩu mới. Mật khẩu extranet thông thường của bạn không dùng được ở đây.")],
   fields=[("Hotel ID", "Property ID Despegar."),
           ("Username", "Username mà Despegar hiển thị."),
           ("Password", "**API password** — không phải mật khẩu extranet của bạn."),
           ("Min stay type", "Despegar chỉ nhận một loại; chọn loại sẽ gửi đi.")],
   mapping=[PLAIN,
            "Gói giá 1 người trên phòng đôi vẫn ổn — Despegar có thể đặt giá khách phụ trội trong extranet của họ."])

ch("HRS", "hrs", "Đề nghị HRS kết nối Channex, nhập Hotel ID, và giữ một gói giá cho mỗi loại phòng.",
   before=[CONTRACT.format(n="HRS")],
   extranet=support("HRS"),
   fields=[("Hotel ID", "Hotel ID HRS của bạn.")],
   mapping=["Ánh xạ phòng đơn với phòng đơn của HRS.",
            "Giữ **một gói giá cho mỗi loại phòng**. HRS giữ tình trạng trống theo từng gói giá, nên nhiều "
            "gói giá trên một phòng có thể khiến phòng bị bán quá số."])

ch("Check24", "check24", "Đề nghị Check24 kết nối Channex, nhập Hotel ID, rồi ánh xạ phòng theo số khách.",
   before=[CONTRACT.format(n="Check24")],
   extranet=["Gửi Check24 một yêu cầu hỗ trợ để kết nối chỗ nghỉ của bạn với **Channex**.",
             "Ghi lại **Hotel ID Check24** của bạn."],
   fields=[("Hotel ID", "Hotel ID Check24 của bạn.")],
   mapping=[MULTI])

ch("Crewdogs", "crewdogs", "Đề nghị Crewdogs kết nối Channex, nhập Hotel ID, rồi ánh xạ mọi phòng và mức giá.",
   before=[CONTRACT.format(n="Crewdogs")],
   extranet=support("Crewdogs"),
   fields=[("Hotel ID", "Hotel ID Crewdogs của bạn.")],
   mapping=[PLAIN])

ch("Dida Travel", "dida-travel", "Đề nghị Dida Travel kết nối Channex, nhập Hotel ID, rồi ánh xạ mọi phòng và mức giá.",
   before=[CONTRACT.format(n="Dida Travel")],
   extranet=["Nhắn bộ phận hỗ trợ của Dida Travel, qua mục tin nhắn trong extranet, để kết nối **Channex**.",
             "Ghi lại **Hotel ID Dida Travel** của bạn."],
   fields=[("Hotel ID", "Hotel ID Dida Travel của bạn.")],
   mapping=[PLAIN])

ch("Emerging Travel Group", "emerging-travel", "Email Emerging Travel để kết nối Channex, nhập Hotel ID, chọn thiết lập thuế, rồi ánh xạ phòng.",
   extranet=["Email bộ phận hỗ trợ của Emerging Travel để đề nghị kết nối **Channex**.",
             "Ghi lại **Hotel ID Emerging Travel** của bạn."],
   fields=[("Hotel ID", "Hotel ID Emerging Travel của bạn."),
           ("Tax setting", "Tổng tiền đặt phòng có gồm thuế hay không.")],
   mapping=[MULTI_USUALLY])

ch("Feratel", "feratel", "Đề nghị Feratel kết nối Channex, nhập Hotel ID, rồi ánh xạ phòng theo số khách hoặc theo phòng.",
   before=[CONTRACT.format(n="Feratel")],
   extranet=support("Feratel"),
   extranet_alt="Hoặc tự kết nối trong giao diện của Feratel.",
   fields=[("Hotel ID", "Hotel ID Feratel của bạn.")],
   mapping=["Feratel có thể là **theo số khách** hoặc **theo phòng**. Nếu kênh hỏi giá cho từng số khách mà bạn "
            "chỉ có một giá, hãy ánh xạ cùng gói giá đó cho mọi số khách."])

ch("Glamping Hub", "glamping-hub", "Email Glamping Hub để kết nối Channex, nhập Hotel ID họ cấp, rồi ánh xạ theo phòng.",
   before=[CONTRACT.format(n="Glamping Hub")],
   extranet=["Email bộ phận hỗ trợ của Glamping Hub để đề nghị kết nối **Channex**.",
             "Họ kết nối và cấp cho bạn một **Hotel ID**."],
   fields=[("Hotel ID", "Hotel ID từ Glamping Hub.")],
   mapping=[PER_ROOM])

ch("Hipcamp", "hipcamp", "Email Hipcamp để kết nối Channex, nhập property ID Hipcamp, rồi ánh xạ mọi phòng và mức giá.",
   before=["Bạn cần một **tài khoản Hipcamp** đã có chỗ nghỉ của bạn trên đó."],
   extranet=["Email campgrounds@hipcamp.com để đề nghị kết nối với **Channex**.",
             "Tìm **property ID** trong trình chỉnh sửa chỗ nghỉ của Hipcamp. Nhân viên Hipcamp có thể giúp nếu bạn không tìm thấy."],
   fields=[("Hotel ID", "Property ID Hipcamp của bạn.")],
   mapping=[PLAIN])

ch("Hotel Trader", "hotel-trader", "Đề nghị Hotel Trader kết nối Channex, nhập Hotel ID, rồi ánh xạ mọi phòng và mức giá.",
   before=[CONTRACT.format(n="Hotel Trader")],
   extranet=support("Hotel Trader"),
   fields=[("Hotel ID", "Hotel ID Hotel Trader của bạn.")],
   mapping=[PLAIN])

ch("HotelTonight", "hoteltonight", "Email HotelTonight để kết nối Channex, nhập Hotel ID, chọn giá gồm hoặc không gồm thuế, rồi ánh xạ.",
   extranet=["Email mapping-ht@airbnb.com để đề nghị kết nối **Channex**.",
             "Ghi lại **Hotel ID** mà HotelTonight cấp cho bạn."],
   extranet_alt="Chưa có trên HotelTonight? Đăng ký qua htmarketmanagement@airbnb.com.",
   fields=[("Hotel ID", "Hotel ID HotelTonight của bạn."),
           ("Taxes", "Giá bạn gửi có gồm thuế hay không. Thường là **không gồm** ở Mỹ, **gồm** ở châu Âu.")],
   mapping=[PLAIN])

ch("HyperGuest", "hyperguest", "Đề nghị HyperGuest bật Channex, nhập property ID, rồi ánh xạ — theo số khách nếu bạn định giá như vậy.",
   extranet=["Đề nghị HyperGuest bật giao diện **Channex**.",
             "Họ trả lời kèm **property ID** của bạn."],
   fields=[("Hotel ID", "Property ID HyperGuest của bạn.")],
   mapping=["HyperGuest hỗ trợ **theo số khách**. Định giá theo từng số khách? Ánh xạ từng số khách. Chỉ có "
            "một giá cho cả phòng? Chỉ ánh xạ số khách đó, hoặc tất cả — cách nào cũng được.",
            "Mã phòng và mã giá trong HyperGuest có thể là bất cứ gì dễ đọc (ví dụ `DBL-Room`, `BAR`)."],
   notes=[("caution", "Đừng đổi mã sau khi ánh xạ",
           "Nếu bạn đổi mã phòng hoặc mã giá trong HyperGuest sau khi ánh xạ, hãy ánh xạ lại trong Santara AI.")])

ch("Inntopia", "inntopia", "Thêm mã tham chiếu chéo Channex cho từng sản phẩm Inntopia, nhập Hotel ID, rồi ánh xạ mức giá RACK theo phòng.",
   before=[CONTRACT.format(n="Inntopia")],
   extranet=["Đăng nhập Inntopia và mở tab **Products**.",
             "Với mỗi sản phẩm, bấm nút cài đặt bên phải và chọn **Cross-reference codes**.",
             "Đặt **Remote system** là **Channex**.",
             "Đặt **Cross-reference code** là product ID Inntopia — con số trong ngoặc ở tên sản phẩm.",
             "Lưu bằng ô đánh dấu màu xanh, đóng lại, rồi làm tiếp với sản phẩm kế tiếp."],
   fields=[("Hotel ID", "Hotel ID Inntopia của bạn.")],
   mapping=[PER_ROOM, "Chỉ ánh xạ mức giá **RACK**."])

ch("Kliknbook", "kliknbook", "Đề nghị Kliknbook kết nối Channex, nhập Hotel Code và loại số đêm tối đa, rồi ánh xạ từng số khách.",
   before=[CONTRACT.format(n="Kliknbook")],
   extranet=["Đề nghị bộ phận hỗ trợ của Kliknbook kết nối **Channex** (hoặc tự làm trong giao diện của họ).",
             "Ghi lại **Hotel Code Kliknbook** của bạn."],
   fields=[("Hotel Code", "Hotel Code Kliknbook của bạn."),
           ("Max stay type", "**Arrival** hoặc **Through** — tùy cách Kliknbook áp dụng số đêm tối đa.")],
   mapping=["Dưới mỗi phòng Kliknbook, ánh xạ mức giá cho **từng số khách** với gói giá của bạn.",
            "**Dấu sao** đánh dấu mức giá và số khách mặc định của phòng đó."])

ch("MG Bedbank", "mg-bedbank", "Chọn Channex trong mục channel manager của MG, nhập Hotel ID và thiết lập thuế, rồi ánh xạ phòng theo số khách.",
   extranet=["Mở mục **channel manager** trong MG và chọn **Channex**."],
   extranet_alt="Không tìm thấy? Email bộ phận hỗ trợ của MG để đề nghị kết nối.",
   fields=[("Hotel ID", "Hotel ID MG Bedbank của bạn."),
           ("Tax setting", "Tổng tiền đặt phòng có gồm thuế hay không.")],
   mapping=[MULTI_USUALLY])

ch("Mr & Mrs Smith", "mr-and-mrs-smith", "Đề nghị Mr & Mrs Smith kết nối Channex, nhập Hotel ID, rồi ánh xạ theo phòng.",
   before=[CONTRACT.format(n="Mr & Mrs Smith")],
   extranet=support("Mr & Mrs Smith"),
   fields=[("Hotel ID", "Hotel ID Mr & Mrs Smith của bạn. Nếu họ chưa cấp, hãy hỏi họ.")],
   mapping=[PER_ROOM])

ch("OpenGDS", "opengds", "Đề nghị OpenGDS kết nối Channex, nhập Hotel ID, rồi ánh xạ theo phòng.",
   before=[CONTRACT.format(n="OpenGDS")],
   extranet=support("OpenGDS"),
   extranet_alt="Hoặc tự kết nối trong giao diện của OpenGDS.",
   fields=[("Hotel ID", "Hotel ID OpenGDS của bạn.")],
   mapping=[PER_ROOM])

ch("PriceTravel", "pricetravel", "Đề nghị PriceTravel kết nối Channex, nhập Hotel ID, rồi ánh xạ phòng theo số khách.",
   before=[CONTRACT.format(n="PriceTravel")],
   extranet=support("PriceTravel"),
   fields=[("Hotel ID", "Hotel ID PriceTravel của bạn.")],
   mapping=[MULTI])

ch("Roibos", "roibos", "Email Roibos để kết nối Channex, đăng nhập bằng username và password họ cấp, chọn hợp đồng, rồi ánh xạ.",
   extranet=["Email bộ phận hỗ trợ của Roibos để đề nghị kết nối **Channex**.",
             "Họ cấp cho bạn **username** và **password**."],
   fields=[("Username and password", "Thông tin Roibos cấp cho bạn."),
           ("Booking amount", "Tổng tiền đặt phòng có gồm thuế hay không."),
           ("Contract", "Bấm **Kiểm tra kết nối** **trước**, rồi chọn hợp đồng trong danh sách.")],
   mapping=[PLAIN],
   notes=[("note", "Mỗi hợp đồng một kết nối",
           "Có nhiều hợp đồng Roibos thì kết nối Roibos lại cho từng hợp đồng.")])

ch("WebBeds", "webbeds", "Đề nghị WebBeds kết nối Channex, nhập Hotel Code và loại số đêm tối đa, rồi ánh xạ mọi phòng và mức giá.",
   before=[CONTRACT.format(n="WebBeds")],
   extranet=["Đề nghị bộ phận hỗ trợ của WebBeds kết nối **Channex** (hoặc tự làm trong giao diện của họ).",
             "Ghi lại **Hotel Code WebBeds** của bạn."],
   fields=[("Hotel Code", "Hotel Code WebBeds của bạn."),
           ("Max stay type", "**Arrival** hoặc **Through** — tùy cách WebBeds áp dụng số đêm tối đa.")],
   mapping=[PLAIN])

ch("Yatra", "yatra", "Đề nghị Yatra kết nối Channex, nhập Hotel ID, rồi ánh xạ theo phòng.",
   before=[CONTRACT.format(n="Yatra")],
   extranet=support("Yatra"),
   fields=[("Hotel ID", "Hotel ID Yatra của bạn.")],
   mapping=[PER_ROOM])

ch("Getaroom", "getaroom", "Email Getaroom để kích hoạt kết nối Channex; họ xác nhận bằng một đặt phòng thử trước khi bạn go live.",
   extranet=["Email propertyactivation@getaroom.com để đề nghị kết nối với **Channex**, kèm Hotel ID của bạn.",
             "Getaroom trả lời kèm Hotel ID cần dùng."],
   fields=[("Hotel ID", "Hotel ID mà Getaroom đã xác nhận.")],
   mapping=[PLAIN, "Sau đó báo Getaroom rằng việc ánh xạ đã xong."],
   after=["Getaroom gửi một **đặt phòng và lượt hủy thử** để kiểm tra kết nối. Sau đó, "
          "chỗ nghỉ được đưa vào hoạt động."])

HOTELS_ONLY = ("**Chỉ dành cho khách sạn và resort.** {n} không bán căn hộ, villa hay các loại nhà cho "
               "thuê nghỉ dưỡng khác — những chỗ nghỉ đó không dùng được kết nối này.")
ch("Hopper", "hopper", "Chỉ cho khách sạn: ký thỏa thuận với Hopper, kết nối, ánh xạ mức giá tốt nhất hiện có, và chọn giá net hoặc gross.",
   before=[HOTELS_ONLY.format(n="Hopper"),
           "**Ký thỏa thuận với Hopper trước** — hotelpartners@hopper.com hoặc hotelpartners.hopper.com. "
           "Chưa bán được gì cho tới khi họ liên hệ với bạn và thỏa thuận được ký.",
           "Hopper thanh toán mọi đặt phòng bằng **thẻ ảo**; hoa hồng được quy định trong hợp đồng của bạn."],
   extranet=None,
   fields=[],
   mapping=["Ánh xạ **mức giá tốt nhất hiện có** (best available rate) của bạn. Chính sách hủy được quy định trong hợp đồng Hopper, không do Santara AI đặt."],
   notes=[("note", "Giá net hay gross",
           "Hợp đồng của bạn ghi rõ loại nào. **Gross**: gửi giá bình thường, như bạn gửi cho Booking.com và "
           "Expedia. **Net**: gửi giá chưa gồm hoa hồng — giảm giá của kênh theo phần trăm "
           "hoa hồng (ví dụ 15%), nếu không giá sẽ quá cao để bán được.")])

ch("Nuitee", "nuitee", "Chỉ cho khách sạn: ký thỏa thuận với Nuitee, kết nối, rồi ánh xạ mức giá tốt nhất hiện có.",
   before=[HOTELS_ONLY.format(n="Nuitee"),
           "**Ký thỏa thuận với Nuitee trước** (nuitee.com). Chưa bán được gì cho tới khi thỏa thuận được ký.",
           "Nuitee thanh toán mọi đặt phòng bằng **thẻ ảo**; hoa hồng được quy định trong hợp đồng của bạn."],
   extranet=None,
   fields=[],
   mapping=["Ánh xạ **mức giá tốt nhất hiện có** (best available rate) của bạn. Chính sách hủy được quy định trong hợp đồng Nuitee, không do Santara AI đặt."])


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
        _c['fields'] = [(label, d['vi']) for label, d in FIELDS[_c['slug']]]


def bullets(items):
    return "\n".join(f"- {i}" for i in items)


def numbered(items):
    return "\n".join(f"{k}. {i}" for k, i in enumerate(items, 1))


def aside(kind, title, body):
    return f":::{kind}[{title}]\n{body}\n:::"


# Images. Extranet screenshots come from the channels' own extranets (public/channel-guides/
# extranet/, English UI, one copy for every locale); step-2 shots are our own app, captured per
# locale by scripts/capture-channel-guides.mjs. Only channels the catalogue offers have one.
LOCALE = 'vi'
CONNECT_ALT = 'Bước 2 trong Santara AI: các trường thiết lập của {n}, rồi Kiểm tra kết nối.'
CONNECT_SHOTS = set(['agoda', 'expedia', 'trip-com', 'tiket-com', 'makemytrip', 'hostelworld', 'crewdogs', 'emerging-travel', 'glamping-hub', 'hipcamp', 'hotel-trader', 'webbeds', 'hopper'])
EXTRANET_IMAGES = {'agoda': [('agoda-ycs', 'Agoda YCS: Settings → Property Settings → Optional settings, đã tích Enable channel manager mode và chọn nhà cung cấp.')], 'expedia': [('expedia-menu', 'Expedia Partner Central: Rooms and rates → Connectivity settings.'), ('expedia-verify', 'Expedia yêu cầu xác minh thêm trước khi hiện Connectivity settings.')], 'tiket-com': [('tiket-com-connectivity', 'Extranet Tiket.com: Connectivity hiển thị channel manager đã kết nối và Hotel ID của bạn.')], 'despegar': [('despegar-menu', 'Extranet Despegar: General Settings → Channel Manager Connection.'), ('despegar-connections', 'Các kết nối channel manager trong Despegar — tắt hoặc xoá kết nối cũ.'), ('despegar-add', 'Chọn channel manager trong Despegar và đồng ý điều khoản.')], 'inntopia': [('inntopia-products', 'Tab Products trong Inntopia, với nút cài đặt ở mỗi sản phẩm.'), ('inntopia-cross-reference', 'Cross-reference code của Inntopia: Remote System là Channex, mã = ID sản phẩm trong ngoặc.')]}
BEFORE_IMAGES = {'vrbo': [('vrbo-api-connected', 'Tài khoản Vrbo vẫn đang kết nối với phần mềm khác — hãy nhờ Vrbo chuyển đổi trước khi kết nối.')]}


def img(src, alt):
    return f"![{alt}](/channel-guides/extranet/{src}.webp)\n"


CATALOGUE_NAMES = {"makemytrip": "Make My Trip", "glamping-hub": "GlampingHub", "hotel-trader": "HotelTrader", "vrbo": "VRBO"}

def page(c, order):
    n = c["name"]
    out = [f"---\ntitle: {json.dumps('Kết nối ' + n, ensure_ascii=False)}\ndescription: {json.dumps(c['desc'], ensure_ascii=False)}\nsidebar:\n  order: {order}\n  label: {json.dumps(n, ensure_ascii=False)}\n---\n"]
    out.append(f"Cách kết nối {n} với Santara AI. Phần thiết lập trong Santara AI giống nhau ở mọi "
               f"kênh ([Kết nối kênh khác](/vi/channels/other-channels/)); trang này nói những gì "
               f"riêng cho {n}.\n")
    before = [b.format(n=n) for b in c.get("before", [])]
    before.append("Một **chỗ nghỉ có ít nhất một phòng** trong Santara AI.")
    if c.get("extranet") is not None:
        before.append(f"**Không có channel manager hay liên kết iCal nào khác** trên chỗ nghỉ trong {n} — hai hệ "
                      "thống cùng cập nhật một lịch sẽ ghi đè lẫn nhau.")
    out.append("## Trước khi bắt đầu\n\n" + bullets(before) + "\n")
    for src, alt in BEFORE_IMAGES.get(c["slug"], []):
        out.append(img(src, alt))
    step = 1
    if c.get("extranet"):
        out.append(f"## {step}. Bật kết nối trong {n}\n\n"
                   f"{n} phải cho phép kết nối trước. Channex là đối tác kết nối của Santara AI — "
                   f"đó là tên mà {n} biết đến chúng tôi.\n\n" + numbered(c["extranet"]) + "\n")
        if c.get("extranet_alt"):
            out.append(c["extranet_alt"] + "\n")
        for src, alt in EXTRANET_IMAGES.get(c["slug"], []):
            out.append(img(src, alt))
        for a in c.get("notes_before", []):
            out.append(aside(*a) + "\n")
        step += 1
    out.append(f"## {step}. Kết nối trong Santara AI\n")
    steps = [f"Mở **Cài đặt → Kênh → Thêm kênh**, tìm **{n}**, rồi bấm **Kết nối**.",
             "Chọn chỗ nghỉ cần kết nối."]
    # Name the channel the way the catalogue tile does, so a search for it finds it.
    steps[0] = steps[0].replace(f"**{n}**", f"**{CATALOGUE_NAMES.get(c['slug'], n)}**")
    if c.get("connect_steps"):
        steps += c["connect_steps"]
    elif c["fields"]:
        steps += ["Điền các trường bên dưới, rồi bấm **Kiểm tra kết nối**.",
                  "Khi kiểm tra thành công, bấm **Kết nối và tiếp tục**."]
    else:
        steps += ["Bấm **Kết nối và tiếp tục**."]
    out.append(numbered(steps) + "\n")
    if c["slug"] in CONNECT_SHOTS:
        out.append(f"![{CONNECT_ALT.format(n=n)}](/screens/channel-guides/{c['slug']}.{LOCALE}.png)\n")
    if c["fields"]:
        out.append("| Trường | Nhập gì |\n| --- | --- |\n" +
                   "\n".join(f"| {f} | {w} |" for f, w in c["fields"]) + "\n")
    if c.get("extranet"):
        out.append(f"Nếu **Kiểm tra kết nối** thất bại, hãy kiểm tra lại ID, rồi nhờ bộ phận hỗ trợ của {n} "
                   "xác nhận chỗ nghỉ đã được kết nối với Channex.\n")
    step += 1
    out.append(f"## {step}. Ánh xạ phòng và mức giá\n\n" + bullets(c["mapping"]) + "\n\n"
               f"Ánh xạ **mọi** phòng và mức giá mà {n} hiển thị. Phòng nào bị bỏ sót sẽ không nhận cập nhật, "
               f"và {n} tiếp tục bán nó theo tình trạng trống cũ.\n")
    step += 1
    out.append(f"## {step}. Nhập dữ liệu và go live\n\n"
               "Santara AI kiểm tra những gì đã ánh xạ, bật kênh, rồi đưa về các lượt lưu trú "
               f"{n} đang có. Từ đó, giá, tình trạng trống và các ràng buộc đồng bộ từ "
               "Santara AI — xem [Go live](/vi/channels/going-live/).\n")
    for a in c.get("notes", []):
        out.append(aside(*a) + "\n")
    after = list(c.get("after", []))
    if not any("tin nhắn" in x.lower() for x in after):
        after.append(f"Trả lời khách {n} trong hộp thư của chính {n} — tin nhắn khách từ {n} không về Santara AI.")
    out.append(f"## Nên biết\n\n" + bullets(after) + "\n")
    if c.get("errors"):
        out.append(f"## Lỗi {n}\n\n| Lỗi | Cần làm gì |\n| --- | --- |\n" +
                   "\n".join(f"| *{e}* | {w} |" for e, w in c["errors"]) + "\n")
    out.append("Cách khắc phục khác: [Khắc phục sự cố kênh](/vi/channels/troubleshooting/).\n")
    return "\n".join(out)


os.makedirs(OUT, exist_ok=True)
for i, c in enumerate(C, start=2):
    with open(os.path.join(OUT, c["slug"] + ".md"), "w") as f:
        f.write(page(c, i))
print(len(C), "pages")
print("\n".join(f"{c['slug']}|{c['name']}" for c in C))
