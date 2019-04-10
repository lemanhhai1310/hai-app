import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Component/Home";

class DieuhuongURL extends Component {
	render() {
		return (
			<div>
				<Route path="/" exact component={Home} />
				<Route path="/about/" component={Home} />
				<Route path="/users/" component={Home} />
			</div>
		);
	}
}

export default DieuhuongURL;