import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function One() {
	return <div>Cach so 1</div>;
}

var Two = function () {
	return(
		<div>
			Cách số 2
		</div>
	);
}

var Three = () => (
	<div>
		Cách số 3
	</div>
);

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<One/>
					<Two/>
					<Three/>
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