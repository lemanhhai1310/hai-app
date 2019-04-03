import React, {Component} from 'react';

class Slider extends Component {
	render() {
		return (
			<div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="min-height: 450; max-height: 450">

				<ul className="uk-slideshow-items">
					<li>
						<img src="https://getuikit.com/docs/images/photo.jpg" alt="" uk-cover=""/>
					</li>
					<li>
						<img src="https://getuikit.com/docs/images/photo.jpg" alt="" uk-cover=""/>
					</li>
				</ul>

				<a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="" uk-slideshow-item="previous"></a>
				<a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="" uk-slideshow-item="next"></a>

			</div>
		);
	}
}

export default Slider;