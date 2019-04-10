import React, {Component} from 'react';

class MenuMobile extends Component {
	render() {
		return (
			<div id="mobile_menu" className="uk-hidden@m" style={{display: 'none'}}>
				<ul>
					<li className="menu-item-has-children">
						<a href="#">Về chúng tôi</a>
						<ul className="sub_menu" style={{display: 'none'}}>
							<li><a href="#">Tổng quan</a></li>
							<li><a href="#">Chính sách chất lượng</a></li>
							<li><a href="#">Quá trình hình thành phát triển</a></li>
							<li><a href="#">Ban điều hành</a></li>
							<li><a href="#">Sơ đồ tổ chức</a></li>
							<li><a href="#">Đơn vị thành viên</a></li>
							<li className="menu-item-has-children">
								<a href="#">Công bố thông tin</a>
								<ul>
									<li><a href="#">Thông cáo báo chí</a></li>
									<li><a href="#">Công bố thông tin EVN SPC</a></li>
									<li><a href="#">Đề án tái cơ cấu doanh nghiệp</a></li>
								</ul>
							</li>
							<li className="menu-item-has-children">
								<a href="#">Văn hóa doanh nghiệp</a>
								<ul>
									<li><a href="#">Tin mới</a></li>
									<li><a href="#">Câu chuyện văn hóa</a></li>
									<li><a href="#">Văn hóa EVNSPC với Khách hàng</a></li>
									<li><a href="#">Gương điển hình</a></li>
									<li><a href="#">Sự kiện văn hóa</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li className="menu-item-has-children">
						<a href="#">lĩnh vực hoạt động</a>
						<ul className="sub_menu" style={{display: 'none'}}>
							<li><a href="#">Sản xuất phân phối, xuất nhập khẩu điện năng</a></li>
							<li><a href="#">Đầu tư & Phát triển lưới điện</a></li>
							<li><a href="#">Tư vấn & Thiết kế quy hoạch điện</a></li>
							<li><a href="#">Ứng dụng công nghệ</a></li>
							<li><a href="#">Đào tạo & Phát triển nguồn nhân lực</a></li>
							<li><a href="#">Thị trường điện</a></li>
						</ul>
					</li>
					<li className="menu-item-has-children">
						<a href="#">đầu tư & dự án</a>
						<ul className="sub_menu" style={{display: 'none'}}>
							<li><a href="#">Thông tin dự án</a></li>
							<li><a href="#">Kêu gọi đầu tư</a></li>
							<li><a href="#">Quan hệ quốc tế</a></li>
							<li><a href="#">Tin đầu tư dự án</a></li>
							<li className="menu-item-has-children">
								<a href="#">Đấu thầu</a>
								<ul>
									<li><a href="#">Kế hoạch đấu thầu</a></li>
									<li><a href="#">Thông báo mời thầu</a></li>
									<li><a href="#">Kết quả lựa chọn nhà thầu</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li className="menu-item-has-children">
						<a href="#">an toàn & tiết kiệm điện</a>
						<ul className="sub_menu" style={{display: 'none'}}>
							<li><a href="#">An toàn điện</a></li>
							<li><a href="#">Tiết kiệm điện</a></li>
							<li className="menu-item-has-children">
								<a href="#">Năng lượng xanh</a>
								<ul>
									<li><a href="#">Điện áp mái</a></li>
									<li><a href="#">Mô hình ESCO</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li className="menu-item-has-children">
						<a href="#">dịch vụ</a>
						<ul className="sub_menu" style={{display: 'none'}}>
							<li><a href="#">Chương trình tri ân Khách hàng</a></li>
							<li><a href="#">Dịch vụ điện trực tuyến</a></li>
							<li><a href="#">Thanh toán trực tuyến</a></li>
							<li><a href="#">Hỏi đáp dịch vụ điện</a></li>
							<li className="menu-item-has-children">
								<a href="#">Giá điện</a>
								<ul>
									<li><a href="#">Biểu Giá điện</a></li>
									<li><a href="#">Thông tin giá điện</a></li>
								</ul>
							</li>
							<li><a href="#">Tư vấn sử dụng điện</a></li>
						</ul>
					</li>
					<li className="menu-item-has-children">
						<a href="#">tin tức & truyền thông</a>
						<ul className="sub_menu" style={{display: 'none'}}>
							<li><a href="#">Tin hoạt động trong EVN SPC</a></li>
							<li><a href="#">Đảng - Đoàn thể</a></li>
							<li><a href="#">Hoạt động cộng đồng</a></li>
							<li><a href="#">Tin ngành điện</a></li>
							<li><a href="#">PCTT&TKCN</a></li>
							<li><a href="#">Thư viện ảnh</a></li>
							<li><a href="#">Thư viện Video</a></li>
						</ul>
					</li>
					<li className="menu-item-has-children">
						<a href="#">liên hệ</a>
						<ul className="sub_menu" style={{display: 'none'}}>
							<li><a href="#">Liên hệ EVNSPC</a></li>
							<li><a href="#">Liên kết nội bộ</a></li>
						</ul>
					</li>
				</ul>
				<div className="uk-padding-small" style={{padding: '20px'}}>
					<div className="uk-grid-small uk-child-width-auto uk-flex-middle uk-flex-center social_h" uk-grid="">
						<div><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></div>
						<div><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></div>
						<div><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></div>
						<div><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a></div>
						<div><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></div>
					</div>
				</div>
			</div>
		);
	}
}

export default MenuMobile;