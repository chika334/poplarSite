import { QUERY_TRANX_FAIL, QUERY_TRANX } from '../_actions/type'

const initialState = {
  success: false,
  query: null
}

function QueryTranx(state = initialState, action) {
  switch (action.type) {
    case QUERY_TRANX:
      return {
        ...state,
        success: true,
        query: [action.payload]
      }
    case QUERY_TRANX_FAIL:
      return {
        ...state,
        success: false,
        query: null
      }
    default:
      return state;
  }
}

export default QueryTranx