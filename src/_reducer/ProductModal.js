import { SHOW_PRODUCT_DETAILS_MODAL, HIDE_PRODUCT_DETAILS_MODAL } from '../_actions/type'

const initialState = {
  autoProductDisplayModal: false
}

const ProductDisplayModal = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRODUCT_DETAILS_MODAL:
      return {
        ...state,
        autoProductDisplayModal: true
      }
    case HIDE_PRODUCT_DETAILS_MODAL:
      return {
        ...state,
        autoProductDisplayModal: false
      }
    default:
      return state;
  }
}

export default ProductDisplayModal