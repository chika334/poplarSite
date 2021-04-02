import {
  METER_LOADING,
  VERIFY_METER,
  METER_ERROR,
  REMOVE_METER,
} from "../_actions/type";

const initialState = {
  success: false,
  token: null,
};

function buyToken(state = initialState, action) {
  switch (action.type) {
    case REMOVE_METER:
      return {
        success: false,
        token: null,
      };
    case METER_LOADING:
      return {
        ...state,
      };
    case VERIFY_METER:
      return {
        ...state,
        token: action.payload,
        ...action.payload,
        success: true,
      };
    case METER_ERROR:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
}

export default buyToken;
