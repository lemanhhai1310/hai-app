import React, {Component} from 'react';

class Content extends Component {
	render() {
		return (
			<div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="">
				<div className="uk-flex-last@s uk-card-media-left uk-cover-container">
					<img src="https://znews-photo.zadn.vn/w480/Uploaded/xpcwvovp/2019_04_02/thumb.jpg" alt="" uk-cover=""/>
					<canvas width="600" height="400"></canvas>
				</div>
				<div>
					<div className="uk-card-body">
						<h3 className="uk-card-title">Khi con trẻ đánh nhau dã man còn người lớn thờ ơ đến tàn nhẫn</h3>
						<p>Một sự thật đáng buồn nhưng ít người nói đến là nguyên nhân khiến trẻ đánh bạn có nguồn gốc từ gia đình. Trẻ bắt nạt thường bị cha mẹ hắt hủi, lạnh nhạt và đánh giá tiêu cực.</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Content;