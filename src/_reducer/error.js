import {CLEAR_ERROR, GET_ERROR} from '../_actions/type.js';

const initialState = {
	message: {},
	status: null,
	id: null
}

function error(state = initialState, action) {
	switch (action.type) {
		case GET_ERROR:
		return {
			message: action.payload.message,
			status: action.payload.status,
			id: action.payload.id
		}
		case CLEAR_ERROR:
			return {
				message: {},
				status: null,
				id: null
			}
		default:
			return state
	}
}

export default error