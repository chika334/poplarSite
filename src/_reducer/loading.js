import { HIDE_LOADER, SHOW_LOADER } from '../_actions/type'

const initialState = {
  loading: false
}

const loading = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true
      }
    case HIDE_LOADER:
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
}

export default loading