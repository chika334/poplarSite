import { RESET_SHOW_MODAL, RESET_HIDE_MODAL } from "./type";

export const showResetModal = () => (dispatch) => {
  dispatch({
    type: RESET_SHOW_MODAL
  })
}

export const hideResetModal = () => (dispatch) => {
  dispatch({
    type: RESET_HIDE_MODAL
  })
}