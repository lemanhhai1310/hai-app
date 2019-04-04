import React, {Component} from 'react';

class Noidung extends Component {

	componentWillReceiveProps(nextProps, nextContext) {
		console.log('componentWillReceiveProps của Noidung.js');
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('shouldComponentUpdate của Noidung.js');
		return true;
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		console.log('componentWillUpdate của Noidung.js');
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate của Noidung.js');
	}

	render() {
		return (
			<div>
				<h2>{this.props.ten}</h2>
			</div>
		);
	}
}

export default Noidung;