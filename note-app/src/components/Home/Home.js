import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = _ => {
	const deleteLocalStorageUser = _ => {
		localStorage.removeItem('notes-app-id-1941293123912');
	};

	return (
		<div className="Home">
			<div className="Home__message">Welcome!</div>

			{Object.keys(localStorage).includes('notes-app-id-1941293123912') ? (
				<div className="HomeLocalStorageUserExists">
					<NavLink to="/login" className="Home__redirectButton">
						{`Log in as ${
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

export default Home;
