import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Footer extends Component {
	render() {
		return (
			<div>
				<div className="uk-section-small">
					<div className="uk-container uk-container-large uk-margin-medium">
						<h3 className="title_partner uk-text-uppercase uk-text-center">OUR partners</h3>
						<div id="slider_brand" uk-slider="autoplay: true; autoplay-interval: 3000;">
							<div className="uk-position-relative">
								<div className="uk-slider-container uk-light">
									<ul className="uk-slider-items uk-text-center uk-flex-middle uk-child-width-1-2 uk-child-width-1-3@m uk-child-width-1-5@l" uk-grid="">
										<li>
											<a href=""><img src="imgs/brand/CFE.png" alt="" /></a>
										</li>
										<li>
											<a href=""><img src="imgs/brand/Kepco.png" alt="" /></a>
										</li>
										<li>
											<a href=""><img src="imgs/brand/aes%20dot%20com.png" alt="" /></a>
										</li>
										<li>
											<a href=""><img src="imgs/brand/nepal.png" alt="" /></a>
										</li>
										<li>
											<a href=""><img src="imgs/brand/tenaga.png" alt="" /></a>
										</li>
										<li>
											<a href=""><img src="imgs/brand/CFE.png" alt="" /></a>
										</li>
										<li>
											<a href=""><img src="imgs/brand/Kepco.png" alt="" /></a>
										</li>
										<li>
											<a href=""><img src="imgs/brand/aes%20dot%20com.png" alt="" /></a>
										</li>
										<li>
											<a href=""><img src="imgs/brand/nepal.png" alt="" /></a>
										</li>
										<li>
											<a href=""><img src="imgs/brand/tenaga.png" alt="" /></a>
										</li>
									</ul>
								</div>
								<div className="uk-hidden@s uk-light">
									<a className="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous="" uk-slider-item="previous" />
									<a className="uk-position-center-right uk-position-small" href="#" uk-slidenav-next="" uk-slider-item="next" />
								</div>
								<div className="uk-visible@s">
									<a className="uk-position-center-left uk-position-small uk-margin-remove-left uk-margin-remove-right uk-padding-remove-left uk-padding-remove-right" href="#" uk-slidenav-previous="" uk-slider-item="previous" />
									<a className="uk-position-center-right uk-position-small uk-margin-remove-left uk-margin-remove-right uk-padding-remove-left uk-padding-remove-right" href="#" uk-slidenav-next="" uk-slider-item="next" />
								</div>
							</div>
						</div>
					</div>
					<div className="uk-container uk-container-large">
						<div className="uk-flex-middle" uk-grid="">
							<div className="uk-width-auto@l">
								<figure className="logo_f uk-invisible uk-visible@l">
									<a href="#"><img src="imgs/logo.svg" alt="" /></a>
								</figure>
							</div>
							<div className="uk-width-expand@l">
								<form className="uk-grid-small uk-grid-collapse box_register uk-grid" uk-grid="">
									<div className="uk-width-expand uk-first-column">
										<input className="uk-input" type="email" placeholder="Đăng kí email ở đây" />
									</div>
									<div className="uk-width-auto">
										<button type="submit" className="uk-button uk-button-primary">Gửi</button>
									</div>
								</form>
							</div>
							<div className="uk-width-auto@l">
								<figure className="logo_f uk-invisible uk-visible@l">
									<a href="#"><img src="imgs/logo.svg" alt="" /></a>
								</figure>
							</div>
						</div>
					</div>
				</div>
				<footer id="footer" className="uk-section-small">
					<div className="uk-container uk-container-large">
						<div uk-grid="">
							<div className="uk-width-auto@l">
								<figure className="logo_f">
									<Link to="/"><img src="imgs/logo.svg" alt="" /></Link>
								</figure>
							</div>
							<div className="uk-width-expand@l">
								<h3 className="title_f uk-text-uppercase">TỔNG CÔNG TY ĐIỆN LỰC MIỀN NAM</h3>
								<div className="info_cty uk-margin-small-bottom">
									Cơ quan chủ quản: Tập đoàn Điện lực Việt Nam <br />
									Giấy phép số: 49/GP-TTĐT do Sở Thông tin và Truyền thông TP.HCM, cấp ngày 22/5/2015 <br />
									Trưởng ban biên tập: Ông Nguyễn Văn Hợp - Chủ tịch HĐTV Tổng công ty Điện lực miền Nam <br />
									Website: http://evnspc.vn
								</div>
								<div className="uk-margin-small author">© EVNSPC 2018. All right reserved</div>
							</div>
							<div className="uk-width-auto@l hotline">
								<h3 className="title_f">Hỗ trợ trực tuyến 24/7: <span>19001006 - 19009000</span></h3>
								<div className="info_cty uk-margin-small-bottom">
									Địa chỉ: 72 Hai Bà Trưng, P.Bến Nghé, Q. 1, Tp. Hồ Chí Minh <br />
									Điện thoại: (84 028) 3822 1605 - Fax: (84 028) 3822 1751 - 3939 0138 <br />
									Email:   info@evnspc.vn
								</div>
								<ul className="uk-grid-small uk-child-width-auto social_f" uk-grid="">
									<li><a href="#"><span uk-icon="facebook" /></a></li>
									<li><a href="#"><span uk-icon="twitter" /></a></li>
									<li><a href="#"><span uk-icon="instagram" /></a></li>
									<li><a href="#"><span uk-icon="youtube" /></a></li>
								</ul>
								<div className="uk-margin-small author">Design by <a target="_blank" href="https://boconganh.net.vn/">boconganh.net.vn</a></div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;