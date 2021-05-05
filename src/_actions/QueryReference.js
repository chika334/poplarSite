import axios from "axios";
import { returnErrors } from "./errorAction";
import { tokenConfig } from "./userAction";
import { QUERY_TRANX_FAIL, QUERY_TRANX } from "./type";

export const Query = (transId) => (dispatch, getState) => {
  axios
    .post(`${process.env.REACT_APP_API_QUERY}`, transId, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: QUERY_TRANX,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "QUERY_TRANX_FAIL")
      );
      dispatch({
        type: QUERY_TRANX_FAIL,
      });
    });
};
