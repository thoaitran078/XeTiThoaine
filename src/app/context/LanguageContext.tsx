import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type Lang = "vi" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  vi: {
    // Navbar
    "nav.home": "Trang chủ",
    "nav.products": "Sản phẩm",
    "nav.categories": "Danh mục",
    "nav.about": "Về chúng tôi",
    "nav.contact": "Liên hệ",
    "nav.get_quote": "Yêu cầu báo giá",
    "nav.tagline": "PHỤ TÙNG XE TẢI CHÍNH HÃNG",
    "nav.free_shipping":
      "Miễn phí vận chuyển cho đơn hàng trên 200.000 vnđ",
    "nav.phone_label": "+84 394 250 578",

    // Footer
    "footer.desc":
      "THOAI là nguồn cung cấp phụ tùng xe tải chính hãng và Thoại là uy tín nhất. Chúng tôi cung cấp mọi thứ từ động cơ đến thân xe cho xe tải thương mại trên toàn thế giới.",
    "footer.quick_links": "Liên kết nhanh",
    "footer.categories": "Danh mục phụ tùng",
    "footer.contact_us": "Liên hệ",
    "footer.hours_title": "Giờ làm việc",
    "footer.hours_weekdays": "Thứ 2 – Thứ 6: 8:00 – 18:00",
    "footer.hours_saturday": "Thứ 7: 9:00 – 15:00",
    "footer.hours_sunday": "Chủ nhật: Nghĩ đi Bỉ",
    "footer.rights":
      "© {year} THOAINE Phụ tùng xe tải. Đã đăng ký bản quyền.",
    "footer.privacy": "Chính sách bảo mật",
    "footer.terms": "Điều khoản dịch vụ",
    "footer.sitemap": "Sơ đồ trang",
    "footer.cat1": "Động cơ & Làm mát",
    "footer.cat2": "Phanh & Giảm xóc",
    "footer.cat3": "Hộp số & Truyền động",
    "footer.cat4": "Điện & Đèn chiếu sáng",
    "footer.cat5": "Thân xe & Cabin",
    "footer.cat6": "Hệ thống xả",
    "footer.cat7": "Lọc & Dầu nhớt",
    "footer.cat8": "Phụ tùng tăng áp",

    // HomePage
    "home.badge": "PHỤ TÙNG XE TẢI CHÍNH HÃNG",
    "home.hero_title1": "Phụ tùng chính hãng cho",
    "home.hero_title2": "xe tải THOAINE",
    "home.hero_desc":
      "Nguồn cung cấp phụ tùng xe tải THOAINE thương mại được tin cậy nhất thế giới. Linh kiện chất lượng tốt cho mọi dòng xe — giao hàng nhanh, được hỗ trợ bởi chuyên gia.",
    "home.shop_all": "Mua tất cả phụ tùng",
    "home.request_quote": "Yêu cầu báo giá",
    "home.oem_cert": "Chứng nhận Thế giới",
    "home.warranty": "Bảo hành 2 năm",
    "home.worldwide": "Vận chuyển toàn cầu",
    "home.stat_parts": "Phụ tùng trong kho",
    "home.stat_years": "Năm kinh nghiệm",
    "home.stat_countries": "Quốc gia phục vụ",
    "home.stat_satisfaction": "Mức độ hài lòng",
    "home.browse_title": "Duyệt theo danh mục",
    "home.browse_heading": "Tìm đúng phụ tùng",
    "home.browse_desc":
      "Khám phá danh mục phụ tùng xe tải THOAINE được phân loại theo hệ thống và chức năng.",
    "home.view_all_cat": "Xem tất cả danh mục",
    "home.parts_count": "phụ tùng",
    "home.top_selling": "Bán chạy nhất",
    "home.featured_heading": "Phụ tùng nổi bật",
    "home.view_all": "Xem tất cả",
    "home.add_cart": "Thêm vào giỏ",
    "home.why_title": "Tại sao chọn THOAINE?",
    "home.why_heading":
      "Được tạo ra để hoạt động. Được tạo ra để bền vững.",
    "home.why1_title": "Chất lượng chính hãng",
    "home.why1_desc":
      "Mọi phụ tùng THOAINE đều đáp ứng thông số kỹ thuật của nhà sản xuất gốc để đảm bảo độ tin cậy và tuổi thọ.",
    "home.why2_title": "Giao hàng toàn cầu nhanh chóng",
    "home.why2_desc":
      "Xuất kho trong ngày cho các mặt hàng có sẵn. Logistics đáng tin cậy đến hơn 120 quốc gia.",
    "home.why3_title": "Hỗ trợ kỹ thuật chuyên nghiệp",
    "home.why3_desc":
      "Đội ngũ thợ máy xe tải được chứng nhận sẵn sàng giúp bạn tìm đúng phụ tùng.",
    "home.why4_title": "Theo dõi đơn hàng 24/7",
    "home.why4_desc":
      "Theo dõi lô hàng của bạn theo thời gian thực từ kho đến tận nơi.",
    "home.cant_find": "Không tìm thấy phụ tùng?",
    "home.cant_find_desc":
      "Các chuyên gia phụ tùng của chúng tôi có thể tìm nguồn bất kỳ linh kiện THOAINE nào trên toàn thế giới. Liên hệ với chúng tôi cùng số khung xe và dòng xe để nhận báo giá cá nhân.",
    "home.talk_specialist": "Nói chuyện với chuyên gia",

    // ProductsPage
    "products.breadcrumb": "Trang chủ / Sản phẩm",
    "products.heading": "Tất cả phụ tùng THOAINE ",
    "products.subheading":
      "Duyệt danh mục đầy đủ các phụ tùng chính hãng và chất lượng tốt của THOAINE.",
    "products.search_placeholder":
      "Tìm kiếm theo tên hoặc mã phụ tùng...",
    "products.sort_default": "Sắp xếp: Mặc định",
    "products.sort_price_asc": "Giá: Thấp đến Cao",
    "products.sort_price_desc": "Giá: Cao đến Thấp",
    "products.sort_rating": "Đánh giá cao nhất",
    "products.in_stock_only": "Chỉ còn hàng",
    "products.showing": "Đang hiển thị",
    "products.of": "trong số",
    "products.parts": "phụ tùng",
    "products.no_results": "Không tìm thấy phụ tùng phù hợp.",
    "products.out_of_stock": "Hết hàng",
    "products.add": "Thêm",
    "products.unavailable": "Không có sẵn",
    "products.cat_all": "Tất cả",
    "products.badge_bestseller": "Bán chạy",
    "products.badge_new": "Mới",
    "products.badge_popular": "Phổ biến",
    "products.badge_oem": "OEM",

    // CategoriesPage
    "categories.breadcrumb": "Trang chủ / Danh mục",
    "categories.heading": "Danh mục phụ tùng",
    "categories.subheading":
      "Mua theo hệ thống — tìm đúng phụ tùng xe tải THOAINE bạn cần.",
    "categories.parts_count": "phụ tùng",
    "categories.browse": "Xem phụ tùng",
    "categories.cat1_name": "Động cơ & Làm mát",
    "categories.cat1_desc":
      "Bộ động cơ hoàn chỉnh, nắp máy, gioăng, bơm nước, két nước và tất cả các bộ phận hệ thống làm mát.",
    "categories.cat2_name": "Phanh & Bánh xe",
    "categories.cat2_desc":
      "Phanh đĩa, phanh trống, má phanh, đĩa phanh, kẹp phanh, xy-lanh tổng phanh, cảm biến ABS và phần cứng bánh xe.",
    "categories.cat3_name": "Giảm xóc & Lái",
    "categories.cat3_desc":
      "Bộ giảm xóc, nhíp lá, thanh liên kết ổn định, khớp bi, thanh nối lái, hộp lái và bộ phận trợ lực lái.",
    "categories.cat4_name": "Hộp số & Truyền động",
    "categories.cat4_desc":
      "Hộp số sàn và tự động, bộ ly hợp, trục các-đăng, vi sai và hộp số phụ.",
    "categories.cat5_name": "Hệ thống xả",
    "categories.cat5_desc":
      "Ống góp xả, bộ giảm thanh, bộ chuyển đổi xúc tác, lọc DPF, van EGR và tất cả phần cứng xả.",
    "categories.cat6_name": "Điện & Đèn chiếu sáng",
    "categories.cat6_desc":
      "Máy phát điện, máy khởi động, mô-đun ECU, dây điện, đèn pha, đèn hậu và cảm biến.",
    "categories.cat7_name": "Phụ tùng tăng áp",
    "categories.cat7_desc":
      "Bộ tăng áp hoàn chỉnh, bộ truyền động, van xả, bộ làm mát khí nạp, ống nạp và bộ đại tu.",
    "categories.cat8_name": "Lọc & Dầu nhớt",
    "categories.cat8_desc":
      "Lọc dầu, lọc gió, lọc nhiên liệu, lọc cabin, dầu làm mát, dầu động cơ và dầu thủy lực.",

    // AboutPage
    "about.badge": "VỀ THOAINE",
    "about.hero_title1": "20 Năm Phục vụ",
    "about.hero_title2": "Xe tải thương mại toàn cầu",
    "about.hero_desc":
      "THOAINE là thương hiệu uy tín nhất về phụ tùng xe tải thương mại chính hãng và chất lượng OEM. Từ năm 2018, chúng tôi đã cung cấp phụ tùng cho các đội xe, đại lý và thợ máy độc lập trên toàn cầu.",
    "about.mission_badge": "Sứ mệnh của chúng tôi",
    "about.mission_heading":
      "Giữ cho đội xe thương mại luôn lăn bánh",
    "about.mission_p1":
      "Mỗi chiếc xe tải THOAINE được thiết kế cho công việc khắc nghiệt. Sứ mệnh của chúng tôi là đảm bảo những chiếc xe đó không bao giờ dừng lại — bằng cách cung cấp cho đại lý, nhà khai thác đội xe và thợ máy đúng phụ tùng họ cần, khi và ở đâu họ cần.",
    "about.mission_p2":
      "Chúng tôi có kho lưu trữ toàn diện các phụ tùng OEM chính hãng và thay thế cho tất cả các dòng xe tải thương mại THOAINE, từ xe tải hạng nhẹ đến xe đầu kéo hạng nặng và xe chuyên dụng.",
    "about.check1": "Phụ tùng OEM chính hãng được đảm bảo",
    "about.check2": "Hỗ trợ kỹ thuật chuyên nghiệp",
    "about.check3": "Mạng lưới phân phối toàn cầu",
    "about.check4": "Giá cạnh tranh cho đội xe",
    "about.check5": "Xuất kho trong ngày",
    "about.check6": "Bảo hành phụ tùng 2 năm",
    "about.stat_parts": "Mã phụ tùng",
    "about.stat_countries": "Quốc gia",
    "about.stat_years": "Kinh nghiệm",
    "about.values_badge": "Giá trị cốt lõi",
    "about.values_heading": "Điều thúc đẩy chúng tôi",
    "about.val1_title": "Chính xác",
    "about.val1_desc":
      "Mọi phụ tùng đều được xác minh đáp ứng đúng thông số OEM trước khi đến tay bạn.",
    "about.val2_title": "Đáng tin cậy",
    "about.val2_desc":
      "Chất lượng nhất quán và độ tin cậy của chuỗi cung ứng, để bạn có thể tin tưởng vào mỗi đơn hàng.",
    "about.val3_title": "Tầm với toàn cầu",
    "about.val3_desc":
      "Phục vụ khách hàng tại hơn 120 quốc gia với logistics hiệu quả, nhanh chóng.",
    "about.timeline_badge": "Lịch sử của chúng tôi",
    "about.timeline_heading":
      "Những cột mốc định hình chúng tôi",
    "about.timeline_1":
      "Thoại mới trào đời",
    "about.timeline_2":
      "Thành lập THOAINE  tại SÓC TRĂNG, NGÃ NĂM",
    "about.timeline_3":
      "Khai trương trung tâm phân phối  đầu tiên tại TPHCM",
    "about.timeline_4":
      "Ra mắt nền tảng đặt hàng trực tuyến — hơn 50.000 KH",
    "about.timeline_5":
      "Đạt mạng lưới phân phối nhiều quốc gia",
    "about.timeline_6":
      "Triển khai giao hàng trong ngày hôm sau tại 40+ quốc gia",
    "about.team_badge": "Lãnh đạo",
    "about.team_heading": "Gặp gỡ đội ngũ",
    "about.team_ceo": "Giám đốc điều hành",
    "about.team_procurement": "Trưởng bộ phận mua sắm phụ tùng",
    "about.team_logistics": "Giám đốc hậu cần",
    "about.team_support": "Trưởng bộ phận hỗ trợ kỹ thuật",
    "about.cert_badge": "Chứng chỉ",
    "about.cert_heading": "Được chứng nhận & Đáng tin cậy",
    "about.cert1": "Chứng nhận chất lượng ISO 9001:2015",
    "about.cert2": "Nhà phân phối phụ tùng OEM được ủy quyền",
    "about.cert3": "Nhà cung cấp phụ tùng tuân thủ EPA",
    "about.cert4": "Nhà cung cấp được chứng nhận CAPA",
    "about.cert5":
      "Thành viên: Liên minh phụ tùng xe tải hạng nặng",
    "about.cert6": "Mạng lưới đại lý THOAINE được ủy quyền",

    // ContactPage
    "contact.breadcrumb": "Trang chủ / Liên hệ",
    "contact.heading": "Liên hệ với chúng tôi",
    "contact.subheading":
      "Liên hệ với các chuyên gia phụ tùng của chúng tôi. Chúng tôi luôn sẵn sàng hỗ trợ.",
    "contact.get_in_touch": "Liên hệ",
    "contact.phone_label": "Điện thoại",
    "contact.phone_sub": "Thứ 2–6 8g–18g",
    "contact.email_label": "Email",
    "contact.email_sub": "Phản hồi trong vòng 2 giờ",
    "contact.address_label": "Địa chỉ",
    "contact.address_value": "434 pham văn đồng",
    "contact.address_sub": "P11,Quận Bình Thạnh ",
    "contact.hours_label": "Giờ làm việc",
    "contact.hours_value": "Thứ 2–6: 8g–18g",
    "contact.hours_sub": "Thứ 7 : 9g–15g | CN: Nghỉ",
    "contact.faq_title": "Câu hỏi thường gặp",
    "contact.faq1_q": "Bạn có giao hàng quốc tế không?",
    "contact.faq1_a":
      "Có — chúng tôi giao hàng đến hơn 120 quốc gia trên toàn thế giới.",
    "contact.faq2_q": "Chính sách đổi trả như thế nào?",
    "contact.faq2_a":
      "Phụ tùng chưa dùng trong bao bì gốc có thể trả trong vòng 30 ngày.",
    "contact.faq3_q": "Phụ tùng có được bảo hành không?",
    "contact.faq3_a":
      "Tất cả phụ tùng đều có bảo hành OEM 2 năm kể từ ngày mua.",
    "contact.form_heading": "Yêu cầu báo giá / Hỏi thông tin",
    "contact.field_name": "Họ và tên",
    "contact.field_name_req": "Họ và tên",
    "contact.field_email": "Địa chỉ email",
    "contact.field_phone": "Số điện thoại",
    "contact.field_partno": "Mã phụ tùng (nếu biết)",
    "contact.field_subject": "Chủ đề",
    "contact.subject_placeholder": "Chọn chủ đề...",
    "contact.subject_quote": "Yêu cầu báo giá",
    "contact.subject_order": "Hỏi về đơn hàng",
    "contact.subject_technical": "Hỗ trợ kỹ thuật",
    "contact.subject_shipping": "Vận chuyển & Giao hàng",
    "contact.subject_returns": "Đổi trả & Bảo hành",
    "contact.subject_other": "Khác",
    "contact.field_message": "Nội dung",
    "contact.message_placeholder":
      "Vui lòng mô tả yêu cầu của bạn, bao gồm dòng xe, năm sản xuất và thông tin phụ tùng cụ thể...",
    "contact.send": "Gửi tin nhắn",
    "contact.disclaimer":
      "Bằng cách gửi, bạn đồng ý với Điều khoản dịch vụ của chúng tôi. Chúng tôi phản hồi trong vòng 2 giờ làm việc.",
    "contact.success_title": "Đã gửi thành công!",
    "contact.success_desc":
      "Cảm ơn bạn đã liên hệ. Chuyên gia phụ tùng THOAINE sẽ phản hồi bạn trong vòng 2 giờ làm việc.",
    "contact.send_another": "Gửi tin nhắn khác",
  },

  en: {
    // Navbar
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.categories": "Categories",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.get_quote": "Get a Quote",
    "nav.tagline": "GENUINE TRUCK PARTS",
    "nav.free_shipping": "Free Shipping on Orders Over $200",
    "nav.phone_label": "+84 394 250 578",

    // Footer
    "footer.desc":
      "THOAINE is your trusted source for genuine and OEM-quality truck parts. We supply everything from engines to body panels for commercial trucks worldwide.",
    "footer.quick_links": "Quick Links",
    "footer.categories": "Part Categories",
    "footer.contact_us": "Contact Us",
    "footer.hours_title": "Business Hours",
    "footer.hours_weekdays": "Mon – Fri: 8:00 AM – 6:00 PM",
    "footer.hours_saturday": "Saturday: 9:00 AM – 3:00 PM",
    "footer.hours_sunday": "Sunday: Closed",
    "footer.rights":
      "© {year} THOAINE Truck Parts. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.sitemap": "Sitemap",
    "footer.cat1": "Engine & Cooling",
    "footer.cat2": "Brakes & Suspension",
    "footer.cat3": "Transmission & Drivetrain",
    "footer.cat4": "Electrical & Lighting",
    "footer.cat5": "Body & Cab Parts",
    "footer.cat6": "Exhaust System",
    "footer.cat7": "Filters & Fluids",
    "footer.cat8": "Turbocharger Parts",

    // HomePage
    "home.badge": "GENUINE TRUCK PARTS",
    "home.hero_title1": "Genuine Parts for",
    "home.hero_title2": "THOAINE Trucks",
    "home.hero_desc":
      "The world's most trusted source for THOAINE commercial truck parts. OEM-quality components for every model — delivered fast, backed by expertise.",
    "home.shop_all": "Shop All Parts",
    "home.request_quote": "Request a Quote",
    "home.oem_cert": "OEM Certified",
    "home.warranty": "2-Year Warranty",
    "home.worldwide": "Worldwide Shipping",
    "home.stat_parts": "Parts in Stock",
    "home.stat_years": "Years Experience",
    "home.stat_countries": "Countries Served",
    "home.stat_satisfaction": "Customer Satisfaction",
    "home.browse_title": "Browse by Category",
    "home.browse_heading": "Find the Right Part",
    "home.browse_desc":
      "Explore our wide range of THOAINE truck parts organized by system and function.",
    "home.view_all_cat": "View All Categories",
    "home.parts_count": "Parts",
    "home.top_selling": "Top Selling",
    "home.featured_heading": "Featured Parts",
    "home.view_all": "View All",
    "home.add_cart": "Add to Cart",
    "home.why_title": "Why THOAINE?",
    "home.why_heading": "Built for Performance. Built to Last.",
    "home.why1_title": "Genuine OEM Quality",
    "home.why1_desc":
      "Every THOAINE part meets original manufacturer specifications for reliability and longevity.",
    "home.why2_title": "Fast Worldwide Shipping",
    "home.why2_desc":
      "Same-day dispatch on in-stock items. Reliable logistics to 120+ countries.",
    "home.why3_title": "Expert Technical Support",
    "home.why3_desc":
      "Our team of certified truck mechanics is available to help you find the right part.",
    "home.why4_title": "24/7 Order Tracking",
    "home.why4_desc":
      "Monitor your shipment in real time from our warehouse to your door.",
    "home.cant_find": "Can't Find Your Part?",
    "home.cant_find_desc":
      "Our parts specialists can source any THOAINE component worldwide. Contact us with your chassis number and model for a personalized quote.",
    "home.talk_specialist": "Talk to a Specialist",

    // ProductsPage
    "products.breadcrumb": "Home / Products",
    "products.heading": "All THOAINE Parts",
    "products.subheading":
      "Browse our complete catalog of genuine and OEM-quality THOAINE truck parts.",
    "products.search_placeholder":
      "Search by part name or part number...",
    "products.sort_default": "Sort: Default",
    "products.sort_price_asc": "Price: Low to High",
    "products.sort_price_desc": "Price: High to Low",
    "products.sort_rating": "Top Rated",
    "products.in_stock_only": "In Stock Only",
    "products.showing": "Showing",
    "products.of": "of",
    "products.parts": "parts",
    "products.no_results":
      "No parts found matching your search.",
    "products.out_of_stock": "Out of Stock",
    "products.add": "Add",
    "products.unavailable": "Unavailable",
    "products.cat_all": "All",
    "products.badge_bestseller": "Best Seller",
    "products.badge_new": "New",
    "products.badge_popular": "Popular",
    "products.badge_oem": "OEM Grade",

    // CategoriesPage
    "categories.breadcrumb": "Home / Categories",
    "categories.heading": "Part Categories",
    "categories.subheading":
      "Shop by system — find exactly the THOAINE truck part you need.",
    "categories.parts_count": "parts",
    "categories.browse": "Browse Parts",
    "categories.cat1_name": "Engine & Cooling",
    "categories.cat1_desc":
      "Complete engine assemblies, cylinder heads, gaskets, water pumps, radiators, and all cooling system components.",
    "categories.cat2_name": "Brakes & Wheel",
    "categories.cat2_desc":
      "Disc brakes, drum brakes, brake pads, rotors, calipers, master cylinders, ABS sensors, and wheel hardware.",
    "categories.cat3_name": "Suspension & Steering",
    "categories.cat3_desc":
      "Shock absorbers, leaf springs, stabilizer links, ball joints, tie rods, steering racks, and power steering components.",
    "categories.cat4_name": "Transmission & Drivetrain",
    "categories.cat4_desc":
      "Manual and automatic gearboxes, clutch kits, propeller shafts, differentials, and transfer cases.",
    "categories.cat5_name": "Exhaust System",
    "categories.cat5_desc":
      "Exhaust manifolds, mufflers, catalytic converters, DPF filters, EGR valves, and all exhaust hardware.",
    "categories.cat6_name": "Electrical & Lighting",
    "categories.cat6_desc":
      "Alternators, starters, ECU modules, wiring harnesses, headlights, taillights, and sensors.",
    "categories.cat7_name": "Turbocharger Parts",
    "categories.cat7_desc":
      "Complete turbo assemblies, actuators, wastegate valves, intercoolers, charge pipes, and rebuild kits.",
    "categories.cat8_name": "Filters & Fluids",
    "categories.cat8_desc":
      "Oil filters, air filters, fuel filters, cabin air filters, coolants, motor oils, and hydraulic fluids.",

    // AboutPage
    "about.badge": "ABOUT THOAINE",
    "about.hero_title1": "25 Years Powering",
    "about.hero_title2": "Commercial Trucks Worldwide",
    "about.hero_desc":
      "THOAINE is the most trusted name in genuine and OEM-quality commercial truck parts. Since 1999, we've supplied fleets, dealers, and independent mechanics across the globe with parts that perform.",
    "about.mission_badge": "Our Mission",
    "about.mission_heading":
      "Keeping Commercial Fleets on the Road",
    "about.mission_p1":
      "Every THOAINE truck is engineered for tough work. Our mission is to ensure those trucks never stop — by providing dealers, fleet operators, and mechanics with the exact parts they need, when and where they need them.",
    "about.mission_p2":
      "We carry a comprehensive inventory of genuine OEM and aftermarket parts for all THOAINE commercial truck models, from light-duty pickups to heavy-duty semi-trucks and specialized vocational vehicles.",
    "about.check1": "Genuine OEM Parts Guaranteed",
    "about.check2": "Expert Technical Support",
    "about.check3": "Global Distribution Network",
    "about.check4": "Competitive Fleet Pricing",
    "about.check5": "Same-Day Dispatch Available",
    "about.check6": "2-Year Parts Warranty",
    "about.stat_parts": "Part Numbers",
    "about.stat_countries": "Countries",
    "about.stat_years": "Experience",
    "about.values_badge": "Core Values",
    "about.values_heading": "What Drives Us",
    "about.val1_title": "Precision",
    "about.val1_desc":
      "Every part is verified to meet exact OEM specifications before it reaches you.",
    "about.val2_title": "Reliability",
    "about.val2_desc":
      "Consistent quality and supply chain reliability, so you can trust every order.",
    "about.val3_title": "Global Reach",
    "about.val3_desc":
      "Serving customers across 120+ countries with efficient, fast logistics.",
    "about.timeline_badge": "Our History",
    "about.timeline_heading": "Milestones That Define Us",
    "about.timeline_1":
      "THOAINE Parts Co. founded in Houston, TX",
    "about.timeline_2":
      "Expanded to serve North American dealers and fleets",
    "about.timeline_3":
      "Opened first international distribution hub in Rotterdam",
    "about.timeline_4":
      "Launched online ordering platform — 50,000+ SKUs",
    "about.timeline_5":
      "Reached 100+ country distribution network",
    "about.timeline_6":
      "Introduced next-day delivery in 40+ countries",
    "about.team_badge": "Leadership",
    "about.team_heading": "Meet the Team",
    "about.team_ceo": "Chief Executive Officer",
    "about.team_procurement": "Head of Parts Procurement",
    "about.team_logistics": "Director of Logistics",
    "about.team_support": "Technical Support Lead",
    "about.cert_badge": "Credentials",
    "about.cert_heading": "Certified & Trusted",
    "about.cert1": "ISO 9001:2015 Quality Certified",
    "about.cert2": "OEM-Authorized Parts Distributor",
    "about.cert3": "EPA Compliant Parts Supplier",
    "about.cert4": "CAPA Certified Supplier",
    "about.cert5": "Member: Heavy Truck Parts Alliance",
    "about.cert6": "Authorized THOAINE Dealer Network",

    // ContactPage
    "contact.breadcrumb": "Home / Contact",
    "contact.heading": "Contact Us",
    "contact.subheading":
      "Get in touch with our parts specialists. We're here to help.",
    "contact.get_in_touch": "Get in Touch",
    "contact.phone_label": "Phone",
    "contact.phone_sub": "Mon–Fri 8am–6pm EST",
    "contact.email_label": "Email",
    "contact.email_sub": "Response within 2 hours",
    "contact.address_label": "Address",
    "contact.address_value": "1200 Industrial Blvd",
    "contact.address_sub": "Houston, TX 77001, USA",
    "contact.hours_label": "Hours",
    "contact.hours_value": "Mon–Fri: 8am–6pm",
    "contact.hours_sub": "Sat: 9am–3pm | Sun: Closed",
    "contact.faq_title": "Frequently Asked",
    "contact.faq1_q": "Do you ship internationally?",
    "contact.faq1_a":
      "Yes — we ship to 120+ countries worldwide with reliable freight partners.",
    "contact.faq2_q": "What's your return policy?",
    "contact.faq2_a":
      "Unused parts in original packaging can be returned within 30 days.",
    "contact.faq3_q": "Are parts covered by warranty?",
    "contact.faq3_a":
      "All parts carry a 2-year OEM warranty from date of purchase.",
    "contact.form_heading": "Request a Quote / Inquiry",
    "contact.field_name": "Full Name",
    "contact.field_name_req": "Full Name",
    "contact.field_email": "Email Address",
    "contact.field_phone": "Phone Number",
    "contact.field_partno": "Part Number (if known)",
    "contact.field_subject": "Subject",
    "contact.subject_placeholder": "Select a subject...",
    "contact.subject_quote": "Request a Quote",
    "contact.subject_order": "Order Inquiry",
    "contact.subject_technical": "Technical Support",
    "contact.subject_shipping": "Shipping & Delivery",
    "contact.subject_returns": "Returns & Warranty",
    "contact.subject_other": "Other",
    "contact.field_message": "Message",
    "contact.message_placeholder":
      "Please describe your request, include your truck model, year, and any specific part details...",
    "contact.send": "Send Message",
    "contact.disclaimer":
      "By submitting, you agree to our Terms of Service. We respond within 2 business hours.",
    "contact.success_title": "Message Sent!",
    "contact.success_desc":
      "Thank you for reaching out. A THOAINE parts specialist will get back to you within 2 business hours.",
    "contact.send_another": "Send Another Message",
  },
};

const LanguageContext =
  createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [lang, setLang] = useState<Lang>("vi");

  const t = (key: string): string => {
    return (
      translations[lang][key] ?? translations["en"][key] ?? key
    );
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error(
      "useLanguage must be used inside LanguageProvider",
    );
  return ctx;
}