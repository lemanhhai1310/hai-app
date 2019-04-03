import React, {Component} from 'react';
import TopMenu from "./Component/TopMenu";
import Slider from "./Component/Slider";
import Content from "./Component/Content";
import Footer from "./Component/Footer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<TopMenu/>
				<Slider/>
				<div className="uk-section-small">
					<div className="uk-container">
						<Content
							src="https://znews-photo.zadn.vn/w480/Uploaded/xpcwvovp/2019_04_02/thumb.jpg"
							title="Khi con trẻ đánh nhau dã man còn người lớn thờ ơ đến tàn nhẫn"
							desc="Một sự thật đáng buồn nhưng ít người nói đến là nguyên nhân khiến trẻ đánh bạn có nguồn gốc từ gia đình. Trẻ bắt nạt thường bị cha mẹ hắt hủi, lạnh nhạt và đánh giá tiêu cực."
						/>
						<Content
							src="https://znews-photo.zadn.vn/w480/Uploaded/zxgorz/2019_04_03/samso.jpg"
							title="Lộ danh tính người đàn ông sàm sỡ bé gái trong thang máy ở Sài Gòn"
							desc="Sau khi sàm sỡ bé gái trong thang máy ở TP.HCM, ông Nguyễn Hữu Linh (61 tuổi) nhanh chóng về Đà Nẵng."
							location="uk-flex-last@s"
						/>
					</div>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default App;