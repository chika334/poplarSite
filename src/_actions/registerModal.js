import { REGISTER_SHOW_MODAL, REGISTER_HIDE_MODAL } from "./type";

export const showRegisterModal = () => (dispatch) => {
  dispatch({
    type: REGISTER_SHOW_MODAL
  })
}

export const hideRegisterModal = () => (dispatch) => {
  dispatch({
    type: REGISTER_HIDE_MODAL
  })
}