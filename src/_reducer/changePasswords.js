import {
  CHANGEPASSWORD_FAIL,
  CHANGEPASSWORD,
} from "../_actions/type";

const initialState = {
  success: false,
  message: null
}

function changePassword(state = initialState, action) {
  switch (action.type) {
    case CHANGEPASSWORD:
      return {
        ...state,
        ...action.payload,
        message: action.payload,
        success: true
      }
    case CHANGEPASSWORD_FAIL:
      return {
        ...state,
        success: false
      }
    default:
      return state;
  }
}

export default changePassword