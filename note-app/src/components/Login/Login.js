import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { checkLogin, resetError } from '../../actions';

import '../../styles/css/index.css';

class Login extends Component {
	state = {
		username: '',
		password: '',
	};

	componentWillReceiveProps(nextProps) {
		console.log('props rec', nextProps);
		if (nextProps.isAuthenticating !== this.props.isAuthenticating)
			console.log('authc hanged');
	}

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
			this.props.checkLogin({ ...this.state });
		}
	};

	render() {
		console.log('checkauth', this.props.isAuthenticating);
		return (
			<div className="Login">
				<div className="LoginTitle">Notes&reg;</div>

				{!this.props.isLoggedIn ? (
					<div className="LoginNotLoggedIn">
						<div className="LoginDescription">
							{this.props.isAuthenticating
								? 'Authenticating..'
								: this.props.error === '' ? 'Please log in' : this.props.error}
						</div>

						<form className="LoginLogin">
							<div className="InputFields">
								<input
									className="InputFields__username"
									onChange={this.inputHandler}
									onKeyUp={this.checkIfEnter}
									type="text"
									name="username"
									value={this.state.username}
									placeholder="username"
								/>

								<input
									className="InputFields__password"
									onChange={this.inputHandler}
									onKeyUp={this.checkIfEnter}
									type="password"
									name="password"
									value={this.state.password}
									placeholder="password"
								/>
							</div>

							<div
								className="LoginLoginButton__button"
								onClick={this.checkLoginHandler}
							>
								Login
							</div>
						</form>
					</div>
				) : (
					<Redirect to={`/notes/${this.state.username}`} />
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticating: state.isAuthenticating,
		isLoggedIn: state.isLoggedIn,
		error: state.error,
	};
};

export default connect(mapStateToProps, {
	checkLogin,
	resetError,
})(Login);
