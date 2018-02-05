import * as actionType from '../actions';

const initialState = {
	users: [
		{
			username: '1',
			password: '1',
		},
	],
	usersCurrentlyLoggedIn: [],
	isLoggedIn: false,
	notes: [],
	error: '',
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.CHECK_LOGIN:
			let error = '';
			let isLoggedIn = false;
			let addUserToLoggedIn = null;
			const userExists = state.users.filter(
				user => user.username === action.payload.username,
			);

			if (userExists.length > 0) {
				if (userExists[0].password !== action.payload.password) {
					error = 'Wrong password. Please try again';
				} else {
					isLoggedIn = true;
					addUserToLoggedIn = userExists[0].username;
				}
			} else error = 'Username not found. Please try again';

			return {
				...state,
				usersCurrentlyLoggedIn: [
					...state.usersCurrentlyLoggedIn,
					addUserToLoggedIn,
				],
				isLoggedIn: isLoggedIn,
				error: error,
			};

		case actionType.RESET_ERROR:
			return {
				...state,
				error: '',
			};

		case actionType.SIGN_OUT:
			return {
				...state,
				usersCurrentlyLoggedIn: state.usersCurrentlyLoggedIn.filter(
					username => username === action.payload,
				),
				isLoggedIn: false,
			};

		default:
			return state;
	}
};

export default rootReducer;
