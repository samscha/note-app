// import axios from 'axios';

export const CHECK_LOGIN = 'CHECK_LOGIN';
export const RESET_ERROR = 'RESET_ERROR';
export const NOTES_FETCHING = 'NOTES_FETCHING';

export const checkLogin = credentials => {
	return {
		type: CHECK_LOGIN,
		payload: credentials,
	};
};

export const resetError = _ => {
	return {
		type: RESET_ERROR,
	};
};
