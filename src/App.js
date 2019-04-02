import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const a1 = "Hải";

function One() {
	return <div>Cach so 1</div>;
}

var Two = function () {
	return (
		<div>
			Cách số 2
		</div>
	);
};

var Three = () => (
	<div>
		Cách số 3
	</div>
);

 class Four extends Component {
	 render() {
	 	return(
	 		<div>
			   Cách số 4
		   </div>
	   );
	 }
 }

// Sử dụng Props cách 1
function NumberOne(props) {
 	return(
 		<div>
		   <h3>{props.tieude}</h3>
		   <img src={props.src} alt=""/>
	   </div>
   );
}

// Cách 2 sử dụng Class để định nghĩa và thao tác với props
class NumberTwo extends Component {
	render() {
		return (
			<div>
				<img src={this.props.src} alt=""/>
				<h3>{this.props.tieude}</h3>
			</div>
		);
	}
}

class App1 extends Component {
	render() {
		return (
			<div>
				<h3>Tên tôi là: {a1}</h3>
			</div>
		);
	}
}


class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<App1/>
					<One/>
					<Two/>
					<Three/>
					<Four/>
					<NumberOne tieude="Sản phẩm 1" src="https://znews-photo.zadn.vn/w480/Uploaded/iutmtn/2019_04_02/dung121549295709width2000height1506_thumb.jpg"/>
					<NumberTwo tieude="Yêu cầu YouTube hạ kênh của Khá Bảnh" src="https://znews-photo.zadn.vn/w660/Uploaded/jopltui/2019_04_02/Kha_banh.jpg"/>
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;