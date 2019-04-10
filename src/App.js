import React, {Component} from 'react';
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Backtop from "./Component/Backtop";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav/>
				<Home/>
				<Footer/>
				<Backtop/>
			</div>
		);
	}
}

export default App;