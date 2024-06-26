const data = [
    {
        id: 1,
        name: "BỘ NỒI CHỐNG DÍNH ULTRA TITANIUM SUNHOUSE ST2210B-18",
        desc: ["Chống dính Ultra Titanium (ILAG Thụy Sĩ): độ bền 15 năm, chấp 99.999 lần chà (*) Trong điều kiện sử dụng và vệ sinh thông thường",
                "An toàn tuyệt đối cho sức khỏe, không chứa PFOA hay bất cứ chất gây hại nào khác", 
                "Thành dày gấp đôi sản phẩm nhôm thông thường, chống phồng đáy"],
        img: "../assets/products/img1_1.png",
        category: "Đồ dùng gia dụng",
        price: 120000,
        rate: 4,
        quantity: 34,
        isFeature: true
    },
    {
        id: 2,
        name: "BỘ NỒI ANOD SUNHOUSE SH6634N",
        desc: ["Thân nồi được sản xuất công nghệ Anod tiên tiến, siêu bền cứng",
                "An toàn cho sức khỏe", 
                "Vung kính cường lực viền inox bền bỉ, dễ quan sát", 
                "Tay cầm chống bỏng, chắc chắn, an toàn sử dụng"],
        img: "../assets/products/img1_2.png",
        category: "Đồ dùng gia dụng",
        price: 140000,
        rate: 5,
        quantity: 56,
        isFeature: false
    },
    {
        id: 3,
        name: "BỘ DỤNG CỤ NẤU ĂN SUN HOUSE DSF14212",
        desc: [ "An toàn cho sức khỏe", 
                "Tay cầm chống bỏng, chắc chắn, an toàn sử dụng"],
        img: "../assets/products/img1_3.png",
        category: "Đồ dùng gia dụng",
        price: 90000,
        rate: 3,
        quantity: 39,
        isFeature: false
    },
    {
        id: 4,
        name: "CHẢO INOX ĐA LỚP SUNHOUSE IN26M6",
        desc: [ "Kết cấu inox liền khối siêu bền bỉ, chống phòng đáy", 
                "Chất liệu Inox cao cấp an toàn sức khỏe, không han gỉ",
                "Dễ dàng tạo lớp chống dính tự nhiên, chiên xào thuận tiện"],
        img: "../assets/products/img1_4.png",
        category: "Đồ dùng gia dụng",
        price: 100000,
        rate: 5,
        quantity: 21,
        isFeature: true
    },
    {
        id: 5,
        name: "CẶP CHẢO CHỐNG DÍNH ĐÁY TỪ SUNHOUSE SHG112026MGC",
        desc: [ "Chất liệu nhôm nguyên chất, truyền nhiệt nhanh, tỏa nhiệt đều", 
                "Miệng chảo dày tới 6mm, chịu va đập tốt, hạn chế móp méo",
                "Tay cầm bằng nhựa Bakelite phủ silicone, cách nhiệt tốt, đinh tán chắc chắn",
                "Đa dạng kích thước (20-26cm), phù hợp với các nhu cầu sử dụng tại gia đình"],
        img: "../assets/products/img1_5.png",
        category: "Đồ dùng gia dụng",
        price: 200000,
        rate: 4,
        quantity: 59,
        isFeature: false
    },
    {
        id: 6,
        name: "BỘ NỒI INOX 304 ĐA LỚP SUNHOUSE MAMA SHG2020",
        desc: [ "3 lớp nguyên khối liền đáy truyền nhiệt nhanh, tỏa nhiệt đều", 
                "Inox 304 an toàn tuyệt đối, không thôi nhiễm thức ăn",
                "Vung kính cường lực bo viền inox giúp hạn chế nứt vỡ",
                "Đa dạng kích thước, đáp ứng mọi nhu cầu nấu nướng"],
        img: "../assets/products/img1_6.png",
        category: "Đồ dùng gia dụng",
        price: 300000,
        rate: 5,
        quantity: 34,
        isFeature: false
    },
    {
        id: 8,
        name: "BỘ NỒI QUÁNH VÂN ĐÁ ĐÁY TỪ SUNHOUSE SHG2003MMA",
        desc: [ "Gồm 2 nồi và 1 quánh vân đá đáy từ, đa dạng kích cỡ", 
                "Chống dính đá hoa cương SIÊU BỀN  KHÁNG KHUẨN",
                "Nhôm đúc nguyên khối  CHỐNG VA ĐẬP TỐT"],
        img: "../assets/products/img1_8.png",
        category: "Đồ dùng gia dụng",
        price: 320000,
        rate: 3,
        quantity: 85,
        isFeature: false
    },
    {
        id: 9,
        name: "NỒI INOX 1 LỚP ĐÁY SUNHOUSE SHG115-30",
        desc: [ "Cấu tạo đáy truyền nhiệt nhanh, giữ nhiệt tốt", 
                "Dung lích lớn: luộc gà nguyên con…",
                "Chất liệu inox an toàn cho sức khỏe, chống oxy hóa, chống móp méo"],
        img: "../assets/products/img1_9.png",
        category: "Đồ dùng gia dụng",
        price: 100000,
        rate: 5,
        quantity: 234,
        isFeature: false
    },
    {
        id: 10,
        name: "Quánh vân đá đáy từ SUNHOUSE MAMA SHG3116MMA",
        desc: [ "CChống dính đá hoa cương SIÊU BỀN - KHÁNG KHUẨN", 
                "Đáy từ lớn, bắt từ TỐT và MẠNH MẼ",
                "Vung kính CƯỜNG LỰC, CHỊU NHIỆT TỐT - Viền inox hạn chế rơi vỡ"],
        img: "../assets/products/img1_10.png",
        category: "Đồ dùng gia dụng",
        price: 110000,
        rate: 5,
        quantity: 48,
        isFeature: false
    },
    {
        id: 11,
        name: "Điều hòa không khí một chiều INVERTER 12000BTU SUNHOUSE SHR-AW12IC610",
        desc: [ "Màng lọc kép, tinh lọc không khí, khử sạch bụi mịn PM 2.5", 
                "Chế độ DRY hút ẩm, khử nồm, ngăn nấm mốc hiệu quả",
                "Công suất 12000BTU (1.5HP), phù hợp với diện tích phòng 16- 22m2"],
        img: "../assets/products/img2_1.png",
        category: "Điện tử điện lạnh",
        price: 1200000,
        rate: 5,
        quantity: 18,
        isFeature: true
    },
    {
        id: 12,
        name: "Máy lọc nước RO UltraPURE SUNHOUSE 10 LÕI SHA8891KL",
        desc: [ "Thiết kế mặt kính tràn viền hiện đại, kiểu dáng slim gọn gàng", 
                "Nước sau lọc đạt tiêu chuẩn nước uống trực tiếp theo QCVN 6-1: 2010/BYT",
                "Công nghệ UltraPURE Nano Silver chống tái nhiễm khuẩn"],
        img: "../assets/products/img2_2.png",
        category: "Điện tử điện lạnh",
        price: 3000000,
        rate: 4,
        quantity: 8,
        isFeature: true
    },
    {
        id: 13,
        name: "MÁY LÀM MÁT KHÔNG KHÍ SUNHOUSE SHD7726",
        desc: [ "Giải pháp làm mát tối ưu cho không gian mở (lên đến 30m2)", 
                "Gió mát tự nhiên, thân thiện với sức khỏe",
                "Tích hợp nhiều tính năng an toàn (tạo ion âm, hẹn giờ, tự động ngắt…)"],
        img: "../assets/products/img2_3.png",
        category: "Điện tử điện lạnh",
        price: 1100000,
        rate: 5,
        quantity: 14,
        isFeature: false
    },
    {
        id: 14,
        name: "MÁY LỌC KHÔNG KHÍ SUNHOUSE SHD-15AP9715",
        desc: [ "Tốc độ phân phối không khí sạch CADR=150m3/h", 
                "Đèn báo hiển thị chất lượng không khí theo chuẩn AQI",
                "2 chế độ vận hành kết hợp 3 tốc độ quạt cho đa dạng nhu cầu sinh hoạt",
                "Cảnh báo thay màng lọc thông minh"],
        img: "../assets/products/img2_4.png",
        category: "Điện tử điện lạnh",
        price: 4120000,
        rate: 4,
        quantity: 12,
        isFeature: false
    },
    {
        id: 15,
        name: "Tủ đông 2 ngăn 2 cánh SUNHOUSE SHR-F2572W2",
        desc: [ "2 ngăn bảo quản ngăn đông – ngăn mát tiện lợi", 
                "Công nghệ lạnh sâu đa chiều 360 độ giúp hơi lạnh sâu <= -18 độ C tỏa đều khắp bên trong tủ",
                "Dàn lạnh đồng nguyên chất, làm lạnh nhanh, giảm thất thoát nhiệt",
                "Mặt trong sơn tĩnh điện, giảm bám tuyết, dễ vệ sinh"],
        img: "../assets/products/img2_5.png",
        category: "Điện tử điện lạnh",
        price: 12900000,
        rate: 5,
        quantity: 13,
        isFeature: true
    },
    {
        id: 16,
        name: "CÂY NƯỚC NÓNG LẠNH SUNHOUSE SHD9634",
        desc: [ "Công nghệ hút bình hiện đại, dễ dàng tháo lắp", 
                "Hệ thống làm lạnh bằng Block, môi chất R134A, làm lạnh sâu nhanh hơn",
                "Chức năng khóa trẻ em an toàn"],
        img: "../assets/products/img2_6.png",
        category: "Điện tử điện lạnh",
        price: 2300000,
        rate: 5,
        quantity: 18,
        isFeature: false
    },
    {
        id: 17,
        name: "BÌNH NƯỚC NÓNG 22L SUNHOUSE SHA9266L",
        desc: [ "Ruột bình tráng men chống cặn, gia tăng tuổi thọ", 
                "Thanh Magie chống cặn gắn độc lập tại đường xả cặn riêng biệt",
                "Hệ thống an toàn đồng bộ tích hợp ELCB và rơ le kép chống quá nhiệt. CHỐNG GIẬT - CHỐNG BỎNG"],
        img: "../assets/products/img2_7.png",
        category: "Điện tử điện lạnh",
        price: 980000,
        rate: 5,
        quantity: 20,
        isFeature: false
    },
    {
        id: 18,
        name: "MÁY HÚT MÙI CAO CẤP KÍNH VÁT SUNHOUSE MAMA MMB6818-70",
        desc: [ "Động cơ mạnh mẽ hút êm", 
                "Sản xuất theo công nghệ Hàn Quốc",
                "Vỏ chất liệu kính cao cấp, không han gỉ, độ bền cao"],
        img: "../assets/products/img3_1.png",
        category: "Thiếp bị nhà bếp",
        price: 1500000,
        rate: 5,
        quantity: 135,
        isFeature: true
    },
    {
        id: 19,
        name: "MÁY RỬA BÁT SUNHOUSE SHB8615SEB",
        desc: [ "Máy rửa bát thiết kế độc lập, tiện lợi", 
                "Dung tích lớn, công suất rửa mạnh mẽ lên tới 15 bộ bát đĩa",
                "9 chương trình rửa linh hoạt, gồm chương trình rửa tiết kiệm ECO"],
        img: "../assets/products/img3_2.png",
        category: "Thiếp bị nhà bếp",
        price: 6340000,
        rate: 4,
        quantity: 15,
        isFeature: true
    },
    {
        id: 20,
        name: "BẾP ĐÔI ĐIỆN TỪ SUNHOUSE MAMA MMB9208DIH",
        desc: [ "Làm nóng nhanh gấp 2 lần bếp thường", 
                "Bảng điều khiển cảm ứng thông minh",
                "Chức năng khóa an toàn trẻ em"],
        img: "../assets/products/img3_3.png",
        category: "Thiếp bị nhà bếp",
        price: 2999000,
        rate: 4,
        quantity: 48,
        isFeature: false
    },
    {
        id: 21,
        name: "BẾP ĐÔI ĐIỆN TỪ HỒNG NGOẠI APEX APB9982",
        desc: [ "Mặt kính Schott Ceran (Đức) siêu bền, chống sốc nhiệt tới 800oC", 
                "Làm nóng nhanh gấp 2 lần bếp thường",
                "Tự động ngắt khi quá tải"],
        img: "../assets/products/img3_4.png",
        category: "Thiếp bị nhà bếp",
        price: 1230000,
        rate: 5,
        quantity: 45,
        isFeature: true
    },
    {
        id: 22,
        name: "BẾP ĐÔI ĐIỆN TỪ HỒNG NGOẠI SUNHOUSE SHB8668MT",
        desc: [ "Mặt kính gốm hạn chế nứt, vỡ khi va đập", 
                "Cảnh báo và ngắt chống tràn an toàn",
                "Khoá trẻ em tiện lợi"],
        img: "../assets/products/img3_5.png",
        category: "Thiếp bị nhà bếp",
        price: 1400000,
        rate: 5,
        quantity: 54,
        isFeature: false
    },
    {
        id: 23,
        name: "BẾP GAS ÂM KÍNH APEX APB8818",
        desc: [ "Cụm đánh lửa bằng đồng an toàn, nhập khẩu Tây Ban Nha", 
                "Cảm ứng ngắt gas tự động, an toàn cho người sử dụng",
                "Kiềng bếp độc lập, tráng men siêu bền"],
        img: "../assets/products/img3_6.png",
        category: "Thiếp bị nhà bếp",
        price: 2100000,
        rate: 4,
        quantity: 23,
        isFeature: true
    },
    {
        id: 24,
        name: "BẾP GAS DƯƠNG KÍNH SHB883AC",
        desc: [ "Đầu đốt từ đồng thau sơn đen cho ngọn lửa xanh", 
                "Điếu họng làm từ inox không gỉ",
                "Hệ thống đánh lửa magneto bền bỉ"],
        img: "../assets/products/img3_7.png",
        category: "Thiếp bị nhà bếp",
        price: 900000,
        rate: 5,
        quantity: 14,
        isFeature: false
    },
    {
        id: 25,
        name: "BẾP GAS DƯƠNG HỒNG NGOẠI SUNHOUSE SHB004MT",
        desc: [ "Đầu đốt hồng ngoại công nghệ mới tiết kiệm gas", 
                "Hệ thống đánh lửa Magneto tuổi thọ cao",
                "Kiềng bếp tráng men siêu bền, chịu lực chịu nhiệt tốt"],
        img: "../assets/products/img3_8.png",
        category: "Thiếp bị nhà bếp",
        price: 800000,
        rate: 5,
        quantity: 78,
        isFeature: false
    },
    {
        id: 26,
        name: "NỒI CƠM ĐIỆN 1.8L SUNHOUSE SHD8611R",
        desc: [ "Lòng nồi dạng niêu dày 1mm, cơm dẻo ngon", 
                "Chống dính kép 2 lớp Whitford (USA), an toàn sức khỏe",
                "Mâm nhiệt lớn, cơm chín nhanh, tiết kiệm thời gian"],
        img: "../assets/products/img4_1.png",
        category: "Điện gia dụng",
        price: 450000,
        rate: 3,
        quantity: 8,
        isFeature: false
    },
    {
        id: 27,
        name: "NỒI CHIÊN KHÔNG DẦU 9L SUNHOUSE SHD4082",
        desc: [ "Nồi chiên ĐẦU TIÊN & DUY NHẤT 100% Made in Việt Nam", 
                "Bảng điều khiển cảm ứng hiển thị đèn LED gồm 8 chế độ cài đặt sẵn",
                "Tích hợp thêm chức năng sấy hoa quả",
                "Chống dính Whitford (USA) siêu bền, an toàn tuyệt đối"],
        img: "../assets/products/img4_2.png",
        category: "Điện gia dụng",
        price: 3200000,
        rate: 5,
        quantity: 38,
        isFeature: true
    },
    {
        id: 28,
        name: "LẨU ĐIỆN 3.5L SUNHOUSE SHD4528",
        desc: [ "Đa chức năng: Lẩu, Xào, Chiên, Rán…", 
                "Lòng nồi INOX chống dính cao cấp, dễ dàng vệ sinh",
                "Điều chỉnh nhiệt độ bằng núm xoay tiện lợi và nhanh chóng",
                "Công suất lớn - Nấu chín nhanh, không cần chờ đợi"],
        img: "../assets/products/img4_3.png",
        category: "Điện gia dụng",
        price: 200000,
        rate: 5,
        quantity: 31,
        isFeature: false
    },
    {
        id: 29,
        name: "SƯỞI ĐIỆN HỒNG NGOẠI 2 BÓNG SUNHOUSE SHD7023",
        desc: [ "Công nghệ sưởi hiện đại, an toàn cho hệ hô hấp, không gây khô da", 
                "Tỏa nhiệt đều, làm ấm nhanh, sử dụng linh hoạt trong nhiều không gian",
                "2 chế độ nhiệt tùy chỉnh, đáp ứng mọi nhu cầu"],
        img: "../assets/products/img4_4.png",
        category: "Điện gia dụng",
        price: 500000,
        rate: 5,
        quantity: 37,
        isFeature: false
    },
    {
        id: 30,
        name: "ĐÈN SƯỞI PHÒNG TẮM SUNHOUSE SHD3813",
        desc: [ "Công nghệ sưởi không đốt cháy Oxi, giữ ấm cho da", 
                "Sử dụng an toàn chống nước IPX4, chống chập điện",
                "Công tắc độc lập dễ dàng điều chỉnh nhiệt độ, tiết kiệm điện năng"],
        img: "../assets/products/img4_5.png",
        category: "Điện gia dụng",
        price: 512000,
        rate: 4,
        quantity: 32,
        isFeature: false
    },
    {
        id: 31,
        name: "NỒI ÁP SUẤT ĐIỆN TỬ ĐA NĂNG 5L SUNHOUSE MAMA SHD1580",
        desc: [ "Ninh kĩ hầm nhừ, giữ trọn vị ngon", 
                "Lòng nồi 5 lớp phủ chống dính siêu bền, an toàn sức khỏe",
                "12 chế độ nấu tiện lợi: Nấu cơm/cháo/soup, hầm xương…"],
        img: "../assets/products/img4_6.png",
        category: "Điện gia dụng",
        price: 1900000,
        rate: 5,
        quantity: 78,
        isFeature: false
    },
    {
        id: 32,
        name: "BẾP HỒNG NGOẠI HAI VÒNG NHIỆT SUNHOUSE SHD6022",
        desc: [ "Hai vòng nhiệt nấu tiện ích, tối ưu hiệu suất nấu nướng,tiết kiệm điện năng", 
                "Mặt kính crystallite (tinh thể pha lê) siêu bền, chịu nhiệt lên đến 800°C",
                "Điều khiển cảm ứng kết hợp núm xoay, dễ dàng điều chỉnh nhiệt độ và thời gian"],
        img: "../assets/products/img4_7.png",
        category: "Điện gia dụng",
        price: 700000,
        rate: 5,
        quantity: 45,
        isFeature: false
    },
    {
        id: 33,
        name: "BẾP TỪ ĐƠN SUNHOUSE SHD6161",
        desc: [ "8 chế độ nấu cài đặt sẵn, phù hợp cho mọi nhu cầu nấu nướng", 
                "Mặt kính chịu lực, chịu nhiệt lên đến 600 độ C",
                "Cảnh báo quá nhiệt, khóa trẻ em an toàn tuyệt đối"],
        img: "../assets/products/img4_8.png",
        category: "Điện gia dụng",
        price: 210000,
        rate: 5,
        quantity: 35,
        isFeature: false
    },
    {
        id: 34,
        name: "LÒ NƯỚNG 10L SUNHOUSE SHD4207LB",
        desc: [ " Công nghệ nướng Halogen tiết kiệm điện năng", 
                "Thanh nướng kép – Truyền nhiệt nhanh, nướng chín đều",
                "Giá để thực phẩm bằng thép không gỉ, an toàn cho sức khỏe"],
        img: "../assets/products/img4_9.png",
        category: "Điện gia dụng",
        price: 2910000,
        rate: 5,
        quantity: 100,
        isFeature: false
    },
    {
        id: 35,
        name: "MÁY XAY SINH TỐ ĐA NĂNG SUNHOUSE SHD5316",
        desc: [ " Đa chức năng: xay hoa quả, thịt cá, rau củ quả khô", 
                "Bộ 3 cối nhựa siêu bền, chống mài mòi, an toàn cho sức khỏe",
                "Bộ lưỡi dao inox cao cấp sắc bén, xay nhuyễn mọi loại nguyên liệu"],
        img: "../assets/products/img4_10.png",
        category: "Điện gia dụng",
        price: 5620000,
        rate: 5,
        quantity: 99,
        isFeature: true
    },
    {
        id: 36,
        name: "BỘ LAU NHÀ XOAY 360 ĐỘ SUNHOUSE KS-CL350PO",
        desc: [ "Chất liệu nhựa PP nguyên sinh an toàn cho sức khỏe", 
                "Bộ phận tạo chuyển động 360 độ siêu bền",
                "Bông lau bằng sợi Microfiber thấm hút nước cực tốt"],
        img: "../assets/products/img5_1.jpg",
        category: "Đồ dùng nhà bếp",
        price: 120000,
        rate: 5,
        quantity: 80,
        isFeature: false
    },
    {
        id: 37,
        name: "BỘ 5 RỔ ĐỰNG THỰC PHẨM BIOZONE 16CM KB-BA5B01W",
        desc: [ "Không chứa chất gây ung thư BPA - 100% An toàn cho sức khỏe", 
                "Thiết kế hình vuông, nhỏ gọn, tiết kiệm diện tích",
                "Chịu lực tốt, bề mặt trơn nhẵn, hạn chế trầy xước giúp rổ luôn bền đẹp"],
        img: "../assets/products/img5_2.jpg",
        category: "Đồ dùng nhà bếp",
        price: 100000,
        rate: 5,
        quantity: 61,
        isFeature: false
    },
    {
        id: 38,
        name: "BỘ 2 HỘP BẢO QUẢN THỰC PHẨM THÔNG MINH BIOZONE SMART SAVING KB-SM2P01",
        desc: [ "Làm bằng nhựa SAN nguyên sinh cao cấp nhập khẩu từ Hàn Quốc", 
                "Van chân không thông minh, xả bớt không khí chỉ với một lần ấn nhẹ tay",
                "Tối ưu không gian và tăng diện tích sử dụng tủ lạnh"],
        img: "../assets/products/img5_3.png",
        category: "Đồ dùng nhà bếp",
        price: 99000,
        rate: 4,
        quantity: 35,
        isFeature: false
    },
    {
        id: 39,
        name: "TỦ NHỰA TRẺ EM 2 CÁNH HAPPY KIDS SUNHOUSE KS-CA1400B4",
        desc: [ "Ngăn treo, gấp tích hợp: áo quần phẳng phiu, gọn gàng.", 
                "Chất liệu nhựa PP nguyên sinh: an toàn cho sức khỏe.",
                "Gắn bánh xe tiện di chuyển, chống nghiêng đổ."],
        img: "../assets/products/img5_4.png",
        category: "Đồ dùng nhà bếp",
        price: 340000,
        rate: 5,
        quantity: 30,
        isFeature: true
    },
    {
        id: 40,
        name: "TỦ NHỰA 2 CÁNH 4 NGĂN HAPPY FAMILY SUNHOUSE KS-CA1400F4",
        desc: [ "Khớp nối thông minh, dễ dàng tháo lắp tủ", 
                "Ngăn treo, gấp tích hợp: áo quần phẳng phiu, gọn gàng.",
                "Gắn bánh xe tiện di chuyển, chống nghiêng đổ."],
        img: "../assets/products/img5_5.png",
        category: "Đồ dùng nhà bếp",
        price: 350000,
        rate: 5,
        quantity: 101,
        isFeature: false
    },
]

export default data