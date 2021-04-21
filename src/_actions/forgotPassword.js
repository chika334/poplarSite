import axios from "axios";
import { returnErrors } from "./errorAction";
import { FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD } from "./type";
import { hideLoader, showLoader } from "./loading";

export const forgotPassword = async (details) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await axios
    .post(
      `${process.env.REACT_APP_API}/fastpayr/api/v1/account/reset/password`,
      details,
      config
    )
    .then((res) => res.data);
  // .then((res) =>
  //   dispatch({
  //     type: FORGOT_PASSWORD,
  //     payload: res.data
  //   })
  // )
  // .catch((err) => {
  //   dispatch(returnErrors(err.response.data, err.response.status, "FORGOT_PASSWORD_FAIL"))
  //   dispatch({
  //     type: FORGOT_PASSWORD_FAIL
  //   })
  // })
};
