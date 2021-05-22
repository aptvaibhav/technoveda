import React, { Component } from 'react'
import logo from '../../../assets/home.jpeg';

import './loading.css';

class Loading extends Component {
	render() {
		return (
			<div className="loaderContainer">
				<img src={logo} className="imgLogo" alt="loader" />
			</div>
		);
	}
}

export default Loading;