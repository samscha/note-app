import * as actionType from '../actions';

const initialState = {
	users: [
		{
			username: '',
			password: '',
		},
	],
	isLoggedIn: false,
	notes: [],
	error: '',
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.CHECK_LOGIN:
			let error = '';
			let isLoggedIn = false;
			const userExists = state.users.filter(
				user => user.username === action.payload.username,
			);
			if (userExists.length > 0)
				if (userExists[0].password !== action.payload.password)
					error = 'Wrong password. Please try again';
				else isLoggedIn = true;
			else error = 'Username not found. Please try again';

			return {
				...state,
				isLoggedIn,
				error,
			};

		case actionType.RESET_ERROR:
			return {
				...state,
				error: '',
			};

		default:
			return state;
	}
};

export default rootReducer;
