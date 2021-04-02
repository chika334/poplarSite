import axios from "axios";
import { returnErrors } from "./errorAction";
import {
  BUYTOKEN_FAIL,
  BUY_TOKEN,
  CLEAR_BUY_TOKEN,
  METER_ERROR,
  METER_LOADING,
  VERIFY_METER,
  REMOVE_METER,
} from "./type";
import { tokenConfig } from "./userAction";

export const verifyNumber = async (meterNumber) => {
  // export const verifyNumber = async (meterNumber) => (dispatch) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // };

  // if (user) {
  //   config.headers["Authorization"] = `Bearer ${user}`;
  // }
  // dispatch({ type: METER_LOADING });
  // axios
  return await axios
    .get(
      `http://www.blacksillicon.com/fastpayr/api/v1/provider/redeem/customer/${meterNumber}`
    )
    .then((res) => res.data);
  // .then((res) =>
  //   dispatch({
  //     type: VERIFY_METER,
  //     payload: res,
  //   })
  // )
  // .catch((err) => {
  //   dispatch(
  //     returnErrors(err.response.data, err.response.status, "BUYTOKEN_FAIL")
  //   );
  //   dispatch({
  //     type: METER_ERROR,
  //     payload: err.response,
  //   });
  // });
};

export const hideMeter = () => (dispatch) => {
  dispatch({
    type: REMOVE_METER,
  });
};

export const token = (buyToken) => (dispatch, getState) => {
  axios
    .post(
      `${process.env.REACT_APP_API}/fastpayr/api/v1/payment/singlepayment`,
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

export const clearToken = () => (dispatch) => {
  dispatch({
    type: CLEAR_BUY_TOKEN,
  });
};
