import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Component/Home";
import Contact from "../Component/Contact";

class DieuhuongURL extends Component {
	render() {
		return (
			<div>
				<Route path="/" exact component={Home} />
				<Route path="/about/" component={Home} />
				<Route path="/contact/" component={Contact} />
			</div>
		);
	}
}

export default DieuhuongURL;