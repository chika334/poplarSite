import { REGISTER_SHOW_MODAL, REGISTER_HIDE_MODAL } from '../_actions/type'

const initialState = {
  autoShowModal: false
}

const registerModal = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SHOW_MODAL:
      return {
        ...state,
        autoShowModal: true
      }
    case REGISTER_HIDE_MODAL:
      return {
        ...state,
        autoShowModal: false
      }
    default:
      return state;
  }
}

export default registerModal