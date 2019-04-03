import React, {Component} from 'react';

class Content extends Component {
	constructor(props){
		super(props);
		this.state = {
			status: true,
			trangthai: 'khoitao',
		}
	}

	componentWillMount() {
		console.log('ComponentWilmount đang chạy');
	}

	componentDidMount() {
		console.log('ComponentDidmount đã chạy rồi');
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('shouldComponentUpdate đã chạy rồi');
		return true;
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		console.log('componentWillUpdate đã chạy rồi');
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate đã chạy rồi');
	}


	renderButton = () => {
		return(
			<div>
				<button className="uk-button uk-button-default" onClick={() => this.editClick()}>Edit</button>
				<button className="uk-button uk-button-secondary">Remove</button>
			</div>
		);
	}

	renderForm = () => {
		return(
			<form className="uk-grid-small uk-grid-collapse box_register uk-grid" uk-grid="">
				<div className="uk-width-expand uk-first-column">
					<input ref={(data) => {this.tmp = data}} defaultValue={this.props.title} className="uk-input" type="text" placeholder=""/>
				</div>
				<div className="uk-width-auto">
					<button type="button" className="uk-button uk-button-danger" onClick={() => this.saveClick()}>Save</button>
				</div>
			</form>
		);
	}

	saveClick = () => {
		console.log(this.tmp.value);
	}

	editClick = () => {
		this.setState({status: false})
	}

	iCheck = () => {
		if (this.state.status){
			return this.renderButton();
		}else {
			return this.renderForm();
		}
	}

	capNhatState = () => {
		this.setState({
			trangthai: "trạng thái được update"
		})
	}

	render() {
		console.log('Đây là hàm render đã chạy');
		console.log(this.state.trangthai);
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
						<button type="button" className="uk-button uk-button-primary" onClick={() => this.capNhatState()}>Update State</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Content;