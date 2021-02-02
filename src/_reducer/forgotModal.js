import { FORGOT_SHOW_MODAL, FORGOT_HIDE_MODAL } from '../_actions/type'

const initialState = {
  autoForgotModal: false
}

const modalForgot = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_SHOW_MODAL:
      return {
        ...state,
        autoForgotModal: true
      }
    case FORGOT_HIDE_MODAL:
      return {
        ...state,
        autoForgotModal: false
      }
    default:
      return state;
  }
}

export default modalForgot