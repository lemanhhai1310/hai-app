import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import Backtop from "./Component/Backtop";
import DieuhuongURL from "./Router/DieuhuongURL";

class App extends Component {
	render() {
		return (
			<Router>
				<Nav/>
				<DieuhuongURL/>
				<Footer/>
				<Backtop/>
			</Router>
		);
	}
}

export default App;