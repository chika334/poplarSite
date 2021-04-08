import axios from "axios";
import { returnErrors } from "./errorAction";
import { tokenConfig } from "./userAction";
import {
  TRANSACTION_LOADING,
  TRANSACTION_LOADED,
  TRANSACTION_ERROR,
  FILTER_BYDATE,
} from "./type";

export const getTransactions = () => async (dispatch, getState) => {
  dispatch({ type: TRANSACTION_LOADING });
  await axios
    .get(`${process.env.REACT_APP_API_ALL_TRANSACTIONS}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: TRANSACTION_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: TRANSACTION_ERROR,
      });
    });
};

export const filterByDate = (value) => async (dispatch, getState) => {
  // dispatch({ type: FILTER_LOADING });
  await axios
    .post(
      `${process.env.REACT_APP_API}/fastpayr/api/v1/paymentrequest/datefilter`,
      value,
      // config,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: FILTER_BYDATE,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
