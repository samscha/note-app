import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { checkLogin, resetError } from '../actions';

import '../styles/css/index.css';

class Home extends Component {
	state = {
		username: '',
		password: '',
	};

	inputHandler = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	checkLoginHandler = _ => {
		if (this.props.error !== '') this.props.resetError();

		this.props.checkLogin({ ...this.state });

		if (this.props.loginPassed) this.setState({ username: '', password: '' });
	};

	render() {
		return (
			<div className="Home">
				<div className="HomeTitle">Notes&reg;</div>

				{!this.props.isLoggedIn ? (
					<div className="HomeNotLoggedIn">
						<div className="HomeDescription">
							{this.props.error === '' ? 'Please log in' : this.props.error}
						</div>

						<form className="HomeLogin">
							<div className="InputFields">
								<input
									className="InputFields__username"
									onChange={this.inputHandler}
									type="text"
									name="username"
									value={this.state.username}
									placeholder="username"
								/>

								<input
									className="InputFields__password"
									onChange={this.inputHandler}
									type="password"
									name="password"
									value={this.state.password}
									placeholder="password"
								/>
							</div>

							<div
								className="HomeLoginButton__button"
								onClick={this.checkLoginHandler}
							>
								Login
							</div>
						</form>
					</div>
				) : (
					<Redirect to="/app" />
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn: state.isLoggedIn,
		error: state.error,
	};
};

export default connect(mapStateToProps, { checkLogin, resetError })(Home);
