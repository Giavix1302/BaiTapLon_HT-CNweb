const displayFooter = () => {
    const footerDOM = $(".footer").get(0);
    footerDOM.innerHTML = `
        <div class="footer-col col-xl-3 col-lg-3 col-md-6 col-md-6">
            <h3 class="foote-col_heading">SẢN PHẨM</h3>
            <ul class="footer-list">
                <li class="footer-item"><a href="">Đồ gia dụng</a></li>
                <li class="footer-item"><a href="">Điện gia dụng</a></li>
                <li class="footer-item"><a href="">Thiết bị nhà bếp</a></li>
                <li class="footer-item"><a href="">Điện tử Điện lạnh</a></li>
                <li class="footer-item"><a href="">Điện dân dụng</a></li>
            </ul>
        </div>
        <div class="footer-col col-xl-3 col-lg-3 col-md-6 col-md-6">
            <h3 class="foote-col_heading">HỖ TRỢ KHÁCH HÀNG</h3>
            <ul class="footer-list">
                <li class="footer-item"><a href="">Chính sách bảo hành</a></li>
                <li class="footer-item"><a href="">Xác thực sản phẩm chính hãng</a></li>
                <li class="footer-item"><a href="">Địa điểm bán hàng</a></li>
                <li class="footer-item"><a href="">Liên hệ</a></li>
                <li class="footer-item"><a href="">Điện dân dụng</a></li>
            </ul>
        </div>
        <div class="footer-col col-xl-3 col-lg-3 col-md-6 col-md-6">
            <h3 class="foote-col_heading">TIN TỨC & SỰ KIỆN</h3>
            <ul class="footer-list">
                <li class="footer-item"><a href="">Tin hoạt động</a></li>
                <li class="footer-item"><a href="">Bí quyết - Mẹo vặt</a></li>
                <li class="footer-item"><a href="">Thiết bị nhà bếp</a></li>
                <li class="footer-item"><a href="">Tin thưởng thức</a></li>
                <li class="footer-item"><a href="">Khuyến mại HOT</a></li>
            </ul>
        </div>
        <div class="footer-col col-xl-3 col-lg-3 col-md-6 col-md-6">
            <h3 class="foote-col_heading">VỀ #KITCHEN</h3>
            <ul class="footer-list">
                <li class="footer-item">Địa chỉ: <span>Xã Thạnh Phú, huyện Vĩnh Cửu, tỉnh Đồng Nai</span></li>
                <li class="footer-item">Điện thoại: <span>+84 987654321</span></li>
                <li class="footer-item">Email: <span>kitchen@gmail.com</span></li>
                <li class="footer-item">Website: <span>www.kitchenn.com.vn</span></li>
            </ul>
        </div>
    `;
}
displayFooter()
