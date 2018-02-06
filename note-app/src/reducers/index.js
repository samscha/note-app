import * as actionType from '../actions';

// const initialState = {
// 	users: [
// 		{
// 			username: '',
// 			password: '',
// 		},
// 	],
// 	usersCurrentlyLoggedIn: [],
// 	isLoggedIn: false,
// 	notes: [],
// 	error: '',
// };

const initialState = {
	id: 5,
	users: [
		{
			username: '',
			password: '',
		},
	],
	usersCurrentlyLoggedIn: [],
	isLoggedIn: false,
	notes: [
		{
			id: 0,
			title: 'title1',
			text: 'test notes',
		},
		{
			id: 1,
			title: 'title2',
			text: 'make an actual notes here,}',
		},
		{
			id: 2,
			title: 'title3',
			text: '33333333332,}',
		},
		{
			id: 3,
			title: 'title4',
			text: 'test asdaofadsji adsjfj2,}',
		},
		{
			id: 4,
			title: 'title5',
			text: 'test asdaofadsjiadsfsajkfjasjfiasjifadsjfj2,}',
		},
	],
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

		case actionType.ADD_NOTE:
			return {
				...state,
				notes: [...state.notes, { ...action.payload, id: state.id++ }],
			};

		default:
			return state;
	}
};

export default rootReducer;
