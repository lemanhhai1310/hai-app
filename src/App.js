import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<One/>
					<Two/>
					<Three/>
					<Four/>
					<NumberOne tieude="Sản phẩm 1" src="https://znews-photo.zadn.vn/w480/Uploaded/iutmtn/2019_04_02/dung121549295709width2000height1506_thumb.jpg"/>
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