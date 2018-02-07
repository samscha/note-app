import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import '../../styles/css/index.css';

class Auth extends Component {
	state = {
		logInSuccess: false,
	};

	componentDidMount() {
		// this.setState({ logInSuccess: false });
	}

	render() {
		return (
			<div className="Auth">
				{this.props.isLoggingIn ? (
					<div className="Auth__message">Authenticating...</div>
				) : this.props.isLoggedIn ? (
					<Redirect to="/notes/sam" />
				) : (
					<Redirect to="/login" />
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoggingIn: state.isLoggingIn,
		isLoggedIn: state.isLoggedIn,
	};
};

export default connect(mapStateToProps, {})(Auth);
