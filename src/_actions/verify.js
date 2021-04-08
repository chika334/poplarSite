import axios from "axios";

export const verifyNumber = async (meterNumber, token) => {
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

  return await axios
    .get(`${process.env.REACT_APP_API_VERIFYMETERNO}${meterNumber}`, config)
    .then((res) => res.data);
};
