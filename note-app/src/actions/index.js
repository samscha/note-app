// import axios from 'axios';

export const CHECK_LOGIN = 'CHECK_LOGIN';
export const RESET_ERROR = 'RESET_ERROR';
export const SIGN_OUT = 'SIGN_OUT';
export const NOTES_FETCHING = 'NOTES_FETCHING';
export const ADD_NOTE = 'ADD_NOTE';

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

export const signOut = username => {
	return {
		type: SIGN_OUT,
		payload: username,
	};
};

export const addNote = note => {
	return {
		type: ADD_NOTE,
		payload: note,
	};
};
