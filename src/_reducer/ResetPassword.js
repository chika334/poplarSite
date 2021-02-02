import { RESET_SHOW_MODAL, RESET_HIDE_MODAL } from "../_actions/type";

const initialState = {
  autoResetModal: false
}

const modalForgot = (state = initialState, action) => {
  switch (action.type) {
    case RESET_SHOW_MODAL:
      return {
        ...state,
        autoResetModal: true
      }
    case RESET_HIDE_MODAL:
      return {
        ...state,
        autoResetModal: false
      }
    default:
      return state;
  }
}

export default modalForgot