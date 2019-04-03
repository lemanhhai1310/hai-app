import React, {Component} from 'react';
import TopMenu from "./Component/TopMenu";
import Slider from "./Component/Slider";
import Content from "./Component/Content";

class App extends Component {
	render() {
		return (
			<div className="App">
				<TopMenu/>
				<Slider/>
				<div className="uk-section-small">
					<div className="uk-container">
						<Content/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;