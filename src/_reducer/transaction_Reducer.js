import {
  TRANSACTION_LOADING,
  TRANSACTION_LOADED,
  TRANSACTION_ERROR,
} from "../_actions/type";

const initialState = {
  transaction: null,
  isLoading: false,
};

function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case TRANSACTION_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case TRANSACTION_LOADED:
      return {
        ...state,
        isLoading: false,
        transaction: action.payload,
      };
    case TRANSACTION_ERROR:
      return {
        ...state,
        isLoading: false,
        transaction: null,
      };
    default:
      return state;
  }
}

export default transactionReducer;
