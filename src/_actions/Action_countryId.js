import axios from "axios";
import {
  AUTH_ERROR,
  COUNTRYID_LOADING,
  COUNTRYID_LOADED,
} from "./type.js";
import { returnErrors } from "./errorAction.js";
import { tokenConfig } from './userAction'

export const getCountryId = () => (dispatch, getState) => {
  dispatch({ type: COUNTRYID_LOADING });
  axios
    .get(`${process.env.REACT_APP_API}/fastpayr/api/v1/serviceprovider/1/3`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: COUNTRYID_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};