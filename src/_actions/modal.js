import {
  SHOW_MODAL,
  HIDE_MODAL,
  SHOW_SERVICE_MODAL,
  HIDE_SERVICE_MODAL,
} from "./type";

export const showModal = () => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
  });
};

export const hideModal = () => (dispatch) => {
  dispatch({
    type: HIDE_MODAL,
  });
};

export const showServiceModal = () => (dispatch) => {
  dispatch({
    type: SHOW_SERVICE_MODAL,
  });
};

export const hideServiceModal = () => (dispatch) => {
  dispatch({
    type: HIDE_SERVICE_MODAL,
  });
};
