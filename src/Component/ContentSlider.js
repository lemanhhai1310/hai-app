import React, {Component} from 'react';

class ContentSlider extends Component {
	render() {
		return (
			<div className="uk-container uk-container-large">
				<div className="uk-grid-stack" uk-grid="">
					<div className="uk-width-1-2@m">
						<h1 className="title_slide_h uk-margin-medium-bottom" uk-scrollspy="cls: uk-animation-scale-down; target: > div; delay: 150; repeat: true;">
							<div>Năng lượng xanh</div>
							<div>cho phát triển</div>
							<div>kinh tế bền vững</div>
						</h1>
						<a href="#" className="uk-button uk-button-secondary btn_slide_h" uk-scrollspy="cls: uk-animation-slide-bottom; delay: 500; repeat: true;">Xem thêm</a>
					</div>
				</div>
			</div>
		);
	}
}

export default ContentSlider;