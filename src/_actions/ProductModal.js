import { SHOW_PRODUCT_DETAILS_MODAL, HIDE_PRODUCT_DETAILS_MODAL } from "./type";

export const showProductDetailsModal = () => (dispatch) => {
  dispatch({
    type: SHOW_PRODUCT_DETAILS_MODAL,
  });
};

export const hideProductDetailsModal = () => (dispatch) => {
  dispatch({
    type: HIDE_PRODUCT_DETAILS_MODAL,
  });
};
