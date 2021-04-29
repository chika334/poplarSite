import axios from "axios";
import { tokenConfig } from "./userAction";

export const verifyNumber = async (details, token) => {
  // set Header
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // if token, add to header
  if (token) {
    config.headers["authorization"] = `Bearer ${token}`;
  }

  console.log(config);

  return await axios
    //   // .get(`${process.env.REACT_APP_API_VERIFYMETERNO}${details}`, config)
    .post(
      "https://www.poplarconnect.com/fastpayr/api/v1/serviceprovider/product/customer/verify",
      details,
      config
    )
    .then((res) => res.data);
};
