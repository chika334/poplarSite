import axios from "axios";
import { returnErrors } from "./errorAction";
import {
  BUYTOKEN_FAIL,
  BUY_TOKEN,
  CLEAR_BUY_TOKEN,
  PAYSTACK_BUY_TOKEN,
  PAYSTACK_BUYTOKEN_FAIL,
  INITIAL_PAYMENT,
  INITIAL_PAYMENT_FAIL,
  VERIFY_METER,
  METER_ERROR,
  METER_LOADING,
} from "./type";
import { tokenConfig } from "./userAction";

// export const verifyMeterNo = (meterNumber) => (dispatch, getState) => {
//   dispatch({ type: METER_LOADING });
//   axios
//     .get(
//       `${process.env.REACT_APP_API_VERIFYMETERNO}${meterNumber}`,
//       tokenConfig(getState)
//     )
//     .then((res) =>
//       dispatch({
//         type: VERIFY_METER,
//         payload: res.data,
//       })
//     )
//     .catch((err) => {
//       dispatch(
//         returnErrors(err.response, err.response.status, "METER_ERROR")
//       );
//       dispatch({
//         type: METER_ERROR,
//         payload: err.response,
//       });
//     });
// };

export const initializePayment = (buyToken) => (dispatch, getState) => {
  // console.log(buyToken);
  axios
    .post(
      `${process.env.REACT_APP_API_INITIALIZE_PAYMENT}`,
      buyToken,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: INITIAL_PAYMENT,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "BUYTOKEN_FAIL")
      );
      dispatch({
        type: INITIAL_PAYMENT_FAIL,
        payload: err.response,
      });
    });
};

export const token = (buyToken) => (dispatch, getState) => {
  // console.log(buyToken);
  axios
    .post(
      `${process.env.REACT_APP_API_SINGLE_PAYMENT}`,
      buyToken,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: BUY_TOKEN,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "BUYTOKEN_FAIL")
      );
      dispatch({
        type: BUYTOKEN_FAIL,
        payload: err.response,
      });
    });
};

export const paystackToken = (payStackToken) => (dispatch, getState) => {
  console.log(payStackToken);
  axios
    .post(
      `${process.env.REACT_APP_API_SINGLE_PAYMENT_PAYSTACK}`,
      payStackToken,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: PAYSTACK_BUY_TOKEN,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "BUYTOKEN_FAIL")
      );
      dispatch({
        type: PAYSTACK_BUYTOKEN_FAIL,
        payload: err.response,
      });
    });
};

export const clearToken = () => (dispatch) => {
  dispatch({
    type: CLEAR_BUY_TOKEN,
  });
};
