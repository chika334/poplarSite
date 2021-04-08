import {
  BUY_TOKEN,
  BUYTOKEN_FAIL,
  CLEAR_BUY_TOKEN,
  PAYSTACK_BUYTOKEN_FAIL,
  PAYSTACK_BUY_TOKEN,
  INITIAL_PAYMENT_FAIL,
  INITIAL_PAYMENT,
  VERIFY_METER,
  METER_ERROR,
  METER_LOADING,
} from "../_actions/type";

const initialState = {
  success: false,
  token: null,
  change: false,
};

function buyToken(state = initialState, action) {
  switch (action.type) {
    case METER_LOADING:
      return {
        ...state,
      };
    case INITIAL_PAYMENT:
    case PAYSTACK_BUY_TOKEN:
    case BUY_TOKEN:
      return {
        ...state,
        token: action.payload,
        success: true,
        change: true,
      };
    case CLEAR_BUY_TOKEN:
      return {
        ...state,
        token: null,
        success: false,
      };
    case METER_ERROR:
      return {
        ...state,
        success: false,
      };
    case PAYSTACK_BUYTOKEN_FAIL:
      return {
        ...state,
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
