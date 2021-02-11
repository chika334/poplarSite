import { SHOW_PRODUCT_MODAL, HIDE_PRODUCT_MODAL } from "../_actions/type";

const initialState = {
  autoProductModal: false,
  title: null,
  image: null,
};

const productModal = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRODUCT_MODAL:
      return {
        ...state,
        autoProductModal: true,
      };
    case HIDE_PRODUCT_MODAL:
      return {
        ...state,
        autoProductModal: false,
      };
    default:
      return state;
  }
};

export default productModal;
