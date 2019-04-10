import React, {Component} from 'react';
import ContentSlider from "./ContentSlider";

class Home extends Component {
	render() {
		return (
			<div id="slider_home" className="uk-position-relative uk-visible-toggle" tabIndex="-1" uk-slideshow="animation: scale; autoplay: true; pause-on-hover: true;">

				<ul className="uk-slideshow-items" uk-height-viewport="">
					<li>
						<div
							className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
							<img src="imgs/slider/slider1.jpg" alt="" uk-cover=""/>
						</div>
						<div className="uk-position-center uk-light" style={{width: '100%'}}>
							<ContentSlider/>
						</div>
					</li>
					<li>
						<div
							className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
							<img src="imgs/slider/slider2.jpg" alt="" uk-cover=""/>
						</div>
						<div className="uk-position-center uk-blue" style={{width: '100%'}}>
							<ContentSlider/>
						</div>
					</li>
					<li>
						<div
							className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
							<img src="imgs/slider/slider4.jpg" alt="" uk-cover=""/>
						</div>
						<div className="uk-position-center uk-light" style={{width: '100%'}}>
							<ContentSlider/>
						</div>
					</li>
					<li>
						<div
							className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
							<img src="imgs/slider/slider3.jpg" alt="" uk-cover=""/>
						</div>
						<div className="uk-position-center uk-light" style={{width: '100%'}}>
							<ContentSlider/>
						</div>
					</li>
					<li>
						<div
							className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
							<img src="imgs/slider/slider5.jpg" alt="" uk-cover=""/>
						</div>
						<div className="uk-position-center uk-light" style={{width: '100%'}}>
							<ContentSlider/>
						</div>
					</li>
				</ul>

				<div className="uk-light">
					<a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="" uk-slideshow-item="previous"></a>
					<a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="" uk-slideshow-item="next"></a>
				</div>

				<ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin uk-position-bottom-center uk-position-z-index"></ul>

				<div id="menu_link_slide" className="uk-position-bottom uk-visible@m">
					<div className="uk-container uk-container-large">
						<nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="">
							<div className="uk-navbar-left">

								<ul className="uk-navbar-nav">
									<li className="uk-active"><a href="#">thông tin dự án</a></li>
									<li><a href="#">quan hệ quốc tế</a></li>
									<li><a href="#">dịch vụ trực tuyến</a></li>
								</ul>

							</div>
						</nav>
					</div>
				</div>
				<a href="#footer" className="icon-scroll uk-position-bottom-center" uk-scroll=""></a>
			</div>
		);
	}
}

export default Home;