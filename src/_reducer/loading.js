// import React from "react";
import {
  HIDE_LOADER,
  SHOW_LOADER,
  REMOVE_LOADER,
  REGISTER_USER,
  LOGIN_USER,
} from "../_actions/type";
// import { useSelector } from "react-redux";
import { returnErrors } from "../_actions/errorAction";

const initialState = {
  loading: false,
};

const loading = (state = initialState, action, props) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER:
    case REGISTER_USER:
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default loading;
