// import axios from "axios";

// export const verifyNumber = async (value, token) => {
//   // set Header
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": 
//     },
//   };

//   // console.log(value, token);

//   // if token, add to header
//   if (token) {
//     config.headers["x-auth-token"] = token;
//   }

//   return await axios
//     .get(
//       `${process.env.REACT_APP_API_VERIFYMETER}/RedeemToken/api/token/customer/${value}`,
//       // value,
//       config
//     )
//     .then((res) => res.data);
// };
