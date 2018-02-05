import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { checkLogin } from '../actions';

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
		this.props.checkLogin({ ...this.state });

		if (this.props.error !== '') this.setState({ username: '', password: '' });
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
									type="text"
									name="password"
									value={this.state.password}
									placeholder="password"
								/>
							</div>

							<input
								className="HomeLoginButton__button"
								type="button"
								value="Login"
								onClick={this.checkLoginHandler}
							/>
						</form>
					</div>
				) : (
					<NavLink to="/app" className="HomeToApp">
						<p>Enter</p>
					</NavLink>
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

export default connect(mapStateToProps, { checkLogin })(Home);
