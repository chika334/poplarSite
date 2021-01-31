import {
	AUTH_ERROR,
	COUNTRYID_LOADING,
	COUNTRYID_LOADED
} from '../_actions/type.js'

const initialState = {
	// token: localStorage.getItem('token'),
	isAuthenticated: false,
	isLoading: false,
	countryId: null,
	msg: null
}

function countryId(state = initialState, action) {
	switch (action.type) {
		case COUNTRYID_LOADING:
			return {
				...state,
				isLoading: true
			}
		case COUNTRYID_LOADED:
			return {
				...state,
				isLoading: false,
				isAuthenticated: true,
				countryId: action.payload,
				// msg: action.payload
			}
		case AUTH_ERROR:
		// localStorage.removeItem('token')
			return {
				...state,
				// token: null,
				isAuthenticated: false,
				isLoading: false,
				countryId: null
			}
		default:
			return state;
	}
}

export default countryId