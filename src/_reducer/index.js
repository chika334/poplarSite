import { combineReducers } from "redux";
import content from "./Content";
import authUser from "./userReducer.js";
import error from "./error.js";
import countryId from "./countryId";
import buyToken from "./buyToken_Reducer";
import transactions from "./transaction_Reducer";
import forgot from "./forgotPassword_Reducer";
import changepassword from "./changePasswords";
import wallet from "./walletReducer";
import query from "./QueryTranx";
import loading from "./loading";
import modal from "./modal";
import modalRegister from "./registerModal";
import modalForgot from "./forgotModal";
import resetModal from "./ResetPassword";
import productModal from "./ProductLoginDisplay";
import ProductDisplayModal from "./ProductModal";
import verify from "./verifyToken";

export default combineReducers({
  verify,
  content,
  productModal,
  ProductDisplayModal,
  modalRegister,
  resetModal,
  modal,
  modalForgot,
  authUser,
  error,
  countryId,
  buyToken,
  query,
  transactions,
  forgot,
  changepassword,
  wallet,
  loading,
});
