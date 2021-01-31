import { BUY_TOKEN, BUYTOKEN_FAIL } from "../_actions/type";

const initialState = {
  success: false,
  token: null
};

function buyToken (state = initialState, action) {
  switch (action.type) {
    case BUY_TOKEN:
      return {
        ...state,
        token: action.payload,
        success: true,
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

export default buyToken