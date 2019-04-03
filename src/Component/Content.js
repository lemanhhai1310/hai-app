import React, {Component} from 'react';

class Content extends Component {
	constructor(props){
		super(props);
	}

	thongbao = () => {
		alert('Cách xử lý tương tác trong ReactJS');
	}

	thongbao1 = (x) => {
		alert(x);
	}

	render() {
		return (
			<div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="">
				<div className={"uk-card-media-left uk-cover-container " + this.props.location}>
					<img src={this.props.src} alt="" uk-cover=""/>
					<canvas width="600" height="400"></canvas>
				</div>
				<div>
					<div className="uk-card-body">
						<h3 className="uk-card-title"><a className="uk-link-reset" href="#">{this.props.title}</a></h3>
						<p>{this.props.desc}</p>
						<button className="uk-button uk-button-default" onClick={this.thongbao}>Edit</button>
						<button className="uk-button uk-button-secondary" onClick={() => this.thongbao1("haha")}>Remove</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Content;