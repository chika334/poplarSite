import { SHOW_PRODUCT_MODAL, HIDE_PRODUCT_MODAL } from "./type";

export const showProductModal = () => {
  return {
    type: SHOW_PRODUCT_MODAL,
  }
};

export const hideProductModal = () => {
  return {
    type: HIDE_PRODUCT_MODAL,
  };
};
