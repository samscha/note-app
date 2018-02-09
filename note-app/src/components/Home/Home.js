import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Home = props => {
	const deleteLocalStorageUser = _ => {
		localStorage.removeItem('notes-app-id-1941293123912');
	};

	return (
		<div className="Home">
			<div className="Home__message">Welcome!</div>

			{Object.keys(localStorage).includes('notes-app-id-1941293123912') ? (
				<div className="HomeLocalStorageUserExists">
					<NavLink to="/login" className="Home__redirectButton">
						{props.isLoggedIn
							? `Go to ${
									JSON.parse(localStorage.getItem('notes-app-id-1941293123912'))
										.username
								}'s notes`
							: `Log in as ${
									JSON.parse(localStorage.getItem('notes-app-id-1941293123912'))
										.username
								}`}
					</NavLink>

					<NavLink
						to="/login"
						className="Home__notUserButton"
						onClick={deleteLocalStorageUser}
					>
						{`Not ${
							JSON.parse(localStorage.getItem('notes-app-id-1941293123912'))
								.username
						}?`}
					</NavLink>
				</div>
			) : (
				<NavLink to="/login" className="HomeToLogin">
					Go to login page
				</NavLink>
			)}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		isLoggedIn: state.isLoggedIn,
	};
};

export default connect(mapStateToProps, {})(Home);
