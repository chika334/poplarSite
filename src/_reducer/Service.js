import { SHOW_SERVICE_MODAL, HIDE_SERVICE_MODAL } from "../_actions/type";

const initialState = {
  autoModal: false,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SERVICE_MODAL:
      return {
        ...state,
        autoModal: true,
      };
    case HIDE_SERVICE_MODAL:
      return {
        ...state,
        autoModal: false,
      };
    default:
      return state;
  }
};

export default modal;
