import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MenuMobile from "./MenuMobile";
import '.././Css/Nav.css';

class Nav extends Component {
	render() {
		return (
			<header id="header" className="uk-position-z-index uk-width-1-1" uk-sticky="">
				<div className="uk-container uk-container-large">
					<nav className="uk-navbar-container uk-navbar-transparent uk-navbar uk-flex-between" uk-navbar="">
						<div className="uk-navbar-left">
							<Link className="uk-navbar-item uk-logo logo_f uk-padding-remove-left" to="/"><img src="imgs/logo.svg" alt=""/></Link>
						</div>
						<div className="uk-navbar-right">
							<ul className="uk-navbar-nav uk-visible@m">
								<li>
									<a href="#">về chúng tôi</a>
									<div className="uk-navbar-dropdown uk-margin-remove uk-padding-remove" uk-dropdown="animation: uk-animation-slide-bottom-small; duration: 300">
										<ul className="uk-nav uk-navbar-dropdown-nav">
											<li><a href="#">Tổng quan</a></li>
											<li><a href="#">Chính sách chất lượng</a></li>
											<li><a href="#">Quá trình hình thành phát triển</a></li>
											<li><a href="#">Ban điều hành</a></li>
											<li><a href="#">Sơ đồ tổ chức</a></li>
											<li><a href="#">Đơn vị thành viên</a></li>
											<li>
												<a href="#">Công bố thông tin</a>
												<ul className="uk-nav uk-navbar-dropdown-nav" uk-dropdown="pos: right-top; animation: uk-animation-slide-bottom-small; duration: 300">
													<li><a href="#">Thông cáo báo chí</a></li>
													<li><a href="#">Công bố thông tin EVN SPC</a></li>
													<li><a href="#">Đề án tái cơ cấu doanh nghiệp</a></li>
												</ul>
											</li>
											<li>
												<a href="#">Văn hóa doanh nghiệp</a>
												<ul className="uk-nav uk-navbar-dropdown-nav" uk-dropdown="pos: right-top; animation: uk-animation-slide-bottom-small; duration: 300">
													<li><a href="#">Tin mới</a></li>
													<li><a href="#">Câu chuyện văn hóa</a></li>
													<li><a href="#">Văn hóa EVNSPC với Khách hàng</a></li>
													<li><a href="#">Gương điển hình</a></li>
													<li><a href="#">Sự kiện văn hóa</a></li>
												</ul>
											</li>
										</ul>
									</div>
								</li>
								<li>
									<a href="#">lĩnh vực hoạt động</a>
									<div className="uk-navbar-dropdown uk-margin-remove uk-padding-remove" uk-dropdown="animation: uk-animation-slide-bottom-small; duration: 300">
										<ul className="uk-nav uk-navbar-dropdown-nav">
											<li><a href="#">Sản xuất phân phối, xuất nhập khẩu điện năng</a></li>
											<li><a href="#">Đầu tư &amp; Phát triển lưới điện</a></li>
											<li><a href="#">Tư vấn &amp; Thiết kế quy hoạch điện</a></li>
											<li><a href="#">Ứng dụng công nghệ</a></li>
											<li><a href="#">Đào tạo &amp; Phát triển nguồn nhân lực</a></li>
											<li><a href="#">Thị trường điện</a></li>
										</ul>
									</div>
								</li>
								<li>
									<a href="#">đầu tư &amp; dự án</a>
									<div className="uk-navbar-dropdown uk-margin-remove uk-padding-remove" uk-dropdown="animation: uk-animation-slide-bottom-small; duration: 300">
										<ul className="uk-nav uk-navbar-dropdown-nav">
											<li><a href="#">Thông tin dự án</a></li>
											<li><a href="#">Kêu gọi đầu tư</a></li>
											<li><a href="#">Quan hệ quốc tế</a></li>
											<li><a href="#">Tin đầu tư dự án</a></li>
											<li>
												<a href="#">Đấu thầu</a>
												<ul className="uk-nav uk-navbar-dropdown-nav" uk-dropdown="pos: right-top; animation: uk-animation-slide-bottom-small; duration: 300">
													<li><a href="#">Kế hoạch đấu thầu</a></li>
													<li><a href="#">Thông báo mời thầu</a></li>
													<li><a href="#">Kết quả lựa chọn nhà thầu</a></li>
												</ul>
											</li>
										</ul>
									</div>
								</li>
								<li>
									<a href="#">an toàn &amp; tiết kiệm điện</a>
									<div className="uk-navbar-dropdown uk-margin-remove uk-padding-remove" uk-dropdown="animation: uk-animation-slide-bottom-small; duration: 300">
										<ul className="uk-nav uk-navbar-dropdown-nav">
											<li><a href="#">An toàn điện</a></li>
											<li><a href="#">Tiết kiệm điện</a></li>
											<li>
												<a href="#">Năng lượng xanh</a>
												<ul className="uk-nav uk-navbar-dropdown-nav" uk-dropdown="pos: right-top; animation: uk-animation-slide-bottom-small; duration: 300">
													<li><a href="#">Điện áp mái</a></li>
													<li><a href="#">Mô hình ESCO</a></li>
												</ul>
											</li>
										</ul>
									</div>
								</li>
								<li>
									<a href="#">dịch vụ</a>
									<div className="uk-navbar-dropdown uk-margin-remove uk-padding-remove" uk-dropdown="animation: uk-animation-slide-bottom-small; duration: 300">
										<ul className="uk-nav uk-navbar-dropdown-nav">
											<li><a href="#">Chương trình tri ân Khách hàng</a></li>
											<li><a href="#">Dịch vụ điện trực tuyến</a></li>
											<li><a href="#">Thanh toán trực tuyến</a></li>
											<li><a href="#">Hỏi đáp dịch vụ điện</a></li>
											<li>
												<a href="#">Giá điện</a>
												<ul className="uk-nav uk-navbar-dropdown-nav" uk-dropdown="pos: right-top; animation: uk-animation-slide-bottom-small; duration: 300">
													<li><a href="#">Biểu Giá điện</a></li>
													<li><a href="#">Thông tin giá điện</a></li>
												</ul>
											</li>
											<li><a href="#">Tư vấn sử dụng điện</a></li>
										</ul>
									</div>
								</li>
								<li>
									<a href="#">tin tức &amp; truyền thông</a>
									<div className="uk-navbar-dropdown uk-margin-remove uk-padding-remove" uk-dropdown="animation: uk-animation-slide-bottom-small; duration: 300">
										<ul className="uk-nav uk-navbar-dropdown-nav">
											<li><a href="#">Tin hoạt động trong EVN SPC</a></li>
											<li><a href="#">Đảng - Đoàn thể</a></li>
											<li><a href="#">Hoạt động cộng đồng</a></li>
											<li><a href="#">Tin ngành điện</a></li>
											<li><a href="#">PCTT&amp;TKCN</a></li>
											<li><a href="#">Thư viện ảnh</a></li>
											<li><a href="#">Thư viện Video</a></li>
										</ul>
									</div>
								</li>
								<li>
									<Link to="/contact/">liên hệ</Link>
									<div className="uk-navbar-dropdown uk-margin-remove uk-padding-remove" uk-dropdown="animation: uk-animation-slide-bottom-small; duration: 300">
										<ul className="uk-nav uk-navbar-dropdown-nav">
											<li><a href="#">Liên hệ EVNSPC</a></li>
											<li><a href="#">Liên kết nội bộ</a></li>
										</ul>
									</div>
								</li>
							</ul>
							<ul className="uk-navbar-nav uk-hidden@m">
								<li>
									<a href="#" className="uk-padding-remove-right">
										<div id="mobile_menu_toggler">
											<div id="m_nav_menu" className="m_nav">
												<div className="m_nav_ham button_closed" id="m_ham_1" />
												<div className="m_nav_ham button_closed" id="m_ham_2" />
												<div className="m_nav_ham button_closed" id="m_ham_3" />
											</div>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<MenuMobile/>
			</header>
		);
	}
}

export default Nav;