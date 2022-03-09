const $=document.querySelector.bind(document);
function header_add(){
	const root  = $('header');
	const nav = document.createElement('nav');
	nav.classList.add('navbar','navbar-expand-lg','navbar-dark');
	nav.innerHTML=
	`
	<a class="navbar-brand" href="#"><img src="../view/images/logo/logo.png" alt="" style="width: 80px;"></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="../index.html">Trang chủ <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="../view/gioithieu.html">Giới thiệu</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="../view/dichvu.html" id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dịch vụ
                                        </a>
                                        <div class="dropdown-menu" id="list-set" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="../view/tintuc.html">Tin tức</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="../view/tuvan.html">Tư vấn hỏi đáp</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="../view/lienhe.html">Liên hệ</a>
                                    </li>
                                </ul>
                                <form class="form-inline my-2 my-lg-0">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                                    <button class="btn btn-light my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
	`
	root.appendChild(nav);
}
function footer_add(){
	const root =$('footer');
	const footer = document.createElement('div')
    footer.classList.add('footer');
    footer.innerHTML=
    `
    <!-- start -->
                            <div class="footer-ship">
                                <div class="footer-ship-list row">
                                    <div class="footer__item  col-sm-6 col-xl-4 justify-content-center" data-aos="slide-up">
                                        <i class="fa-solid fa-square-pen"></i>
                                        <div>
                                            <strong>Chiết khấu ưu đãi</strong>
                                            <p>Chưa biết viết gì</p>
                                        </div>
                                    </div>
                                    <div class="footer__item col-sm-6 col-xl-4 justify-content-center" data-aos="slide-up">
                                        <i class="fa-solid fa-circle-check"></i>
                                        <div>
                                            <strong>Chất lượng dịch vụ</strong>
                                            <p>Chưa biết viết gì</p>
                                        </div>
                                    </div>
                                    <div class="footer__item col-sm-6 col-xl-4 justify-content-center" data-aos="slide-up">
                                        <i class="fa-solid fa-clock"></i>
                                        <div>
                                            <strong>Thời gian giao hàng</strong>
                                            <p>Chưa biết viết gì</p>
                                        </div>
                                    </div>
                                    <div class="footer__item col-sm-6 col-xl-4 justify-content-center" data-aos="slide-up">
                                        <i class="fa-solid fa-money-bill-1"></i>
                                        <div>
                                            <strong> Giá cả phải chăng</strong>
                                            <p>Chưa biết viết gì</p>
                                        </div>
                                    </div>
                                    <div class="footer__item col-sm-6 col-xl-4 justify-content-center" data-aos="slide-up">
                                        <i class="fa-solid fa-cubes"></i>
                                        <div>
                                            <strong>Dịch vụ khách hàng</strong>
                                            <p>Chưa biết viết gì</p>
                                        </div>
                                    </div>
                                    <div class="footer__item col-sm-6 col-xl-4 justify-content-center" data-aos="slide-up">
                                        <i class="fa-brands fa-paypal"></i>
                                        <div>
                                            <strong>Thanh toán an toàn</strong>
                                            <p>Chưa biết viết gì</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end -->
                            <!-- start dich vu -->
                            <div class="dichvu__container row p-5 bg-dark">
                                <div class="dichvu__item col-sm-6 col-xl-3">
                                    <h2> DỊCH VỤ VẬN TẢI HÀNG KHÔNG</h2>
                                    <ul>
                                        <li><a href="">Dịch vụ vận chuyển hàng không giá rẻ</a></li>
                                        <li><a href="">Dịch vụ vận chuyển hàng không Campuchia uy tín,chuyên nghiệp</a></li>
                                        <li><a href="">Báo giá hàng không xuất nhập khẩu</a></li>
                                    </ul>
                                </div>
                                <div class="dichvu__item col-sm-6 col-md-3">
                                    <h2>DỊCH VỤ VẬN TẢI</h2>
                                    <ul>
                                        <li><a href="">Dịch vụ vận tải từ Hải Phòng đi các tỉnh</a></li>
                                        <li><a href="">Dịch vụ vận tải từ Hải Phòng đi Hồ Chí Minh</a></li>
                                        <li><a href="">Dịch vụ vận tải từ Hải Phòng Lào</a></li>
                                    </ul>
                                </div>
                                <div class="dichvu__item col-sm-6 col-xl-3">
                                    <h2>DỊCH VỤ HẢI QUAN</h2>
                                    <ul>
                                        <li><a href="">Dịch vụ cod tại Hải Phòng</a></li>
                                        <li><a href="">Dịch vụ cod tại Hà Nội</a></li>
                                    </ul>
                                </div>
                                <div class="dichvu__item col-sm-6 col-xl-3">
                                    <h2>DỊCH VỤ COD</h2>
                                    <ul>
                                        <li><a href="">Dịch vụ cod tại Hải Phòng</a></li>
                                        <li><a href="">Dịch vụ cod tại Hà Nội</a></li>
                                        <li><a href="">Dịch vụ cod tại Hồ Chí Minh</a></li>
                                        <li><a href="">Dịch vụ cod tại Đà Nẵng</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="contact__container bg-dark row py-5">
                                <!-- noidung -->
                                <div class="noidung col-md-3 col-sm-12 ml-3">
                                    <div>
                                        <img src="../view/images/logo/logo.png" alt="">
                                    </div>
                                    <!-- noidung-contact -->
                                    <div class="noidung-contact">
                                        <ul class="infor">
                                            <li>
                                                <span>
                                                    <i class="fa fa-map-maker"></i>
                                                    <p>Địa chỉ: 21/103 Lê Lai
                                                    Quận Ngô Quyền,Thành phố Hải Phòng</p>
                                                    Việt Nam
                                                </span>
                                            </li>
                                            <li>
                                                <span><i class="fa fa-phone"></i> 0903.455.227</span>
                                            </li>
                                            <li>
                                                <span><i class="fa fa-envelope"></i> lexuanhung.hoangminh@gmail.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- end noidung-contact -->
                                    <!-- start social-media -->
                                    <div class="social-media">
                                        <ul class="social-icon">
                                            <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                                            <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                                            <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                                            <li><a href=""><i class="fa-brands fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                    <!-- end social-media -->
                                </div>
                                <!-- end noidung -->
                                <!-- menu-list -->
                                <div class="noidung-link col-8">
                                    <div class="noidung-menu row">
                                        <div class="menu-mini col-md-4 col-sm-12"><a href="#">Dịch vụ</a>
                                        <ul class="list-mini">
                                        </ul>
                                    </div>
                                    <div class="col-md-4 col-sm-12"><a href="#">Tư vấn hỏi đáp</a></div>
                                    <div class="col-md-4 col-sm-12"><a href="#">Liên hệ</a></div>
                                </div>
                            </div>
                            <!-- end menu-list -->`
                            root.appendChild(footer)
}

header_add();
footer_add();