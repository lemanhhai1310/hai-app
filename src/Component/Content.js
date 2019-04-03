import React, {Component} from 'react';

class Content extends Component {
	constructor(props){
		super(props);
		this.state = {
			status: true
		}
	}

	renderButton = () => {
		return(
			<div>
				<button className="uk-button uk-button-default">Edit</button>
				<button className="uk-button uk-button-secondary">Remove</button>
			</div>
		);
	}

	renderForm = () => {
		return(
			<form className="uk-grid-small uk-grid-collapse box_register uk-grid" uk-grid="">
				<div className="uk-width-expand uk-first-column">
					<input className="uk-input" type="text" placeholder=""/>
				</div>
				<div className="uk-width-auto">
					<button type="submit" className="uk-button uk-button-danger">Save</button>
				</div>
			</form>
		);
	}

	iCheck = () => {
		if (this.state.status){
			return this.renderButton();
		}else {
			return this.renderForm();
		}
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
						{this.iCheck()}
					</div>
				</div>
			</div>
		);
	}
}

export default Content;