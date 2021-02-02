import { FORGOT_SHOW_MODAL, FORGOT_HIDE_MODAL } from "./type";

export const showForgotModal = () => (dispatch) => {
  dispatch({
    type: FORGOT_SHOW_MODAL
  });
}

export const hideForgotModal = () => (dispatch) => {
  dispatch({
    type: FORGOT_HIDE_MODAL
  })
}