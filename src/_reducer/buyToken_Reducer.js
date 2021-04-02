import { BUY_TOKEN, BUYTOKEN_FAIL, CLEAR_BUY_TOKEN } from "../_actions/type";

const initialState = {
  success: false,
  token: null,
};

function buyToken(state = initialState, action) {
  switch (action.type) {
    case BUY_TOKEN:
      return {
        ...state,
        token: action.payload,
        success: true,
      };
    case CLEAR_BUY_TOKEN:
      return {
        ...state,
        token: null,
        success: false,
      };
    case BUYTOKEN_FAIL:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
}

export default buyToken;
