import React, {Component} from 'react';

class TopMenu extends Component {
	render() {
		return (
			<nav className="uk-navbar-container" uk-navbar="" uk-sticky="">
				<div className="uk-navbar-left">
					<a className="uk-navbar-item uk-logo" href="#">Logo</a>
				</div>
				<div className="uk-navbar-right">
					<ul className="uk-navbar-nav">
						<li><a href="#">sign up</a></li>
						<li><a href="#">login</a></li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default TopMenu;