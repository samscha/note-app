import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signUpUser } from '../../actions';

import '../../styles/css/index.css';

class Signup extends Component {
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

	checkIfEnter = e => {
		if (e.keyCode === 13) {
			this.checkLoginHandler();
		}
	};

	signUpHandler = _ => {
		this.props.signUpUser(this.state);
	};

	render() {
		return (
			<div className="Signup">
				<div className="Signup__title">Notes&reg;</div>

				<div className="Signup__form">
					<div className="SignupDescription">Sign up your account</div>

					<form className="SignupForm">
						<div className="InputFields">
							<input
								className="InputFields__username"
								onChange={this.inputHandler}
								onKeyUp={this.checkIfEnter}
								type="text"
								name="username"
								value={this.state.username}
								placeholder="username"
								disabled={this.props.isSigningUp}
							/>

							<input
								className="InputFields__password"
								onChange={this.inputHandler}
								onKeyUp={this.checkIfEnter}
								type="password"
								name="password"
								value={this.state.password}
								placeholder="password"
								disabled={this.props.isSigningUp}
							/>
						</div>

						<div
							className="SignupForm__button"
							onClick={this.props.isSigningUp ? null : this.signUpHandler}
							style={
								this.props.isSigningUp
									? {
											background: 'white',
											color: 'black',
											opacity: '0.2',
											fontSize: '0.7rem',
										}
									: null
							}
						>
							{this.props.isSigningUp ? 'Signing up..' : 'Sign up'}
						</div>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isSigningUp: state.isSigningUp,
	};
};

export default connect(mapStateToProps, { signUpUser })(Signup);
