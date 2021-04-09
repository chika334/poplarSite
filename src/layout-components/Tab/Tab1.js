import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { PaystackConsumer } from "react-paystack";
import {
  TextField,
  InputAdornment,
  Button,
  Typography,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";
import DialpadOutlinedIcon from "@material-ui/icons/DialpadOutlined";
import { showModal, hideModal } from "../../_actions/modal";
import PropTypes from "prop-types";
import { clearErrors } from "../../_actions/errorAction";
import { token, paystackToken } from "../../_actions/tokenAction";
import { verifyNumber } from "../../_actions/verify";
import { showLoader, hideLoader } from "../../_actions/loading";
import { withRouter, Link } from "react-router-dom";
import { signin } from "../../_actions/userAction";
import Form from "../../data/Payment/Electric/Form";
import axios from "axios";
import { ClimbingBoxLoader } from "react-spinners";
import { motion } from "framer-motion";
import Pay from "../../Components/paystack/pay";

const FORM_NAME = "rccgPaymentForm";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function Tab1(props) {
  const [values, setValues] = useState({
    checked: false,
    email: `${
      props.authUser.user === null ? "" : props.authUser.user.user.email
    }`,
    redirect: false,
    fullname: "",
    publicKey: "",
    meterNumber: "",
    phoneNo: "",
    userDetails: null,
    productCode: "rccg-power-12",
    paymentMethod: "fastrwallet",
    customerId: "",
    error: null,
    inError: null,
    loading: false,
    open: false,
    change: false,
    wantToPay: false,
    modalStyle: getModalStyle,
    Details: false,
    msg: "",
    inital: false,
    showAmount: false,
    initialDetails: null,
    verify: false,
    input: false,
    amounts: "",
    amount: "",
    method: "",
  });

  const handleValueChange = (field, value) => {
    setValues((state) => ({ [field]: value }));
  };

  const {
    amount,
    amounts,
    checked,
    email,
    redirect,
    fullname,
    publicKey,
    meterNumber,
    phoneNo,
    userDetails,
    productCode,
    paymentMethod,
    customerId,
    error,
    inError,
    loading,
    open,
    change,
    wantToPay,
    modalStyle,
    Details,
    msg,
    inital,
    showAmount,
    initialDetails,
    verify,
    input,
    method,
  } = values;

  const sendRedirect = () => {
    props.clearErrors();
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleOpen = () => {
    setValues({ ...values, open: true });
  };

  const initializePayment = (e) => {
    e.preventDefault();
    const { token } = props.authUser;

    if (amount === "") {
      setValues({ ...values, inError: "Input Required" });
    } else {
      if (localStorage.token && userDetails === null) {
        return "";
      } else if (localStorage.token && userDetails.responsedesc === "Success") {
        setValues({ ...values, loading: true });
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        // if token, add to header
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }

        const fullname = userDetails.customerName;

        const buyToken = {
          productCode,
          paymentMethod,
          fullname,
          amount,
          accountNumber: meterNumber,
          customerId,
        };

        axios
          .post(
            `${process.env.REACT_APP_API_INITIALIZE_PAYMENT}`,
            buyToken,
            config
          )
          .then((res) =>
            setTimeout(() => {
              setValues({
                ...values,
                loading: false,
                initialDetails: res.data,
                Details: true,
                inital: true,
                verify: true,
                input: false,
                showAmount: false,
              });
            }, 300)
          )
          .catch((err) => console.log(err));
      }
    }
  };

  const Pay = (e) => {
    e.preventDefault();
    const { token } = props.authUser;

    if (localStorage.token && userDetails === null) {
      return "";
    } else if (localStorage.token && userDetails.responsedesc === "Success") {
      setValues({ ...values, loading: true, method: "wallet" });
      const fastrId = initialDetails.fastrId;
      const reference = null;

      const buyToken = {
        fastrId,
        reference,
      };

      props.token(buyToken);
      // console.log(buyToken);
    }
  };

  const verifyMeterNumber = async () => {
    const token = props.authUser.token;

    return await verifyNumber(meterNumber, token);
  };

  const submit = async (e) => {
    e.preventDefault();
    // const { authUser } = props;
    const { token } = props.authUser;
    if (meterNumber === "") {
      // handleValueChange("inError", "Input Required");
      setValues({ ...values, inError: "Input Required" });
    } else {
      if (meterNumber.length > 11 || meterNumber.length < 11) {
        setValues({ ...values, inError: "Input must be 11 digits" });
      } else {
        if (localStorage.ProductTitle === "RCCG ELECTRIC") {
          if (localStorage.token) {
            setValues({ ...values, loading: true });
            try {
              const result = await verifyMeterNumber();
              if (result.responsedesc === "SERVICE_UNAVAILABLE") {
                setValues({
                  ...values,
                  loading: false,
                  error: "Meter Number Invalid",
                });
              } else {
                setTimeout(() => {
                  setValues({
                    ...values,
                    verify: true,
                    input: true,
                    userDetails: result,
                    showAmount: true,
                    inital: true,
                    loading: false,
                    Details: false,
                  });
                }, 300);
              }

              // console.log(result);
            } catch (err) {
              console.log(err);
              // setValues({ error: err.response.data.msg });
            }
          }
        } else if (localStorage.ProductTitle === "IKEJA ELECTRIC") {
          console.log(localStorage.ProductTitle);
        } else if (localStorage.ProductTitle === "EKO ELECTRIC") {
          console.log(localStorage.ProductTitle);
        } else if (localStorage.ProductTitle === "DSTV Subscription") {
          console.log(localStorage.ProductTitle);
        } else {
          handleValueChange("wantToPay", true);
          handleOpen();
        }
      }
    }
  };

  const payBills = () => {
    const { authUser, success } = props;
    const pages = localStorage.getItem("LoggedPage");
    const fullname = userDetails.customerName;

    const buyToken = {
      productCode,
      fullname,
      paymentMethod,
      amount,
      meterNumber,
      customerId,
    };

    // if user is authenticated
    if (authUser === true && pages) {
      if (authUser && wantToPay) {
        props.showLoader();
        props.token(buyToken);
        // handleValueChange("wantToPay", true);
        setValues({ ...values, wantToPay: false });
      }
      if (authUser && success.success) {
        props.hideLoader();
        props.history.push(`${process.env.REACT_APP_URL}/buytoken`);
      }
    }
  };

  // you can call this function anything
  const handleSuccess = (reference) => {
    if (reference.message === "Approved") {
      setValues({ ...values, loading: true, method: "card" });
      if (userDetails === null) {
        return "";
      } else if (userDetails.responsedesc === "Success") {
        // setValues({ loading: true });
        const fastrId = initialDetails.fastrId;

        const buyToken = {
          fastrId,
          reference: reference.reference,
        };

        props.paystackToken(buyToken);
      }
    } else {
      console.log("bad");
    }
  };

  // you can call this function anything
  const handleClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  useEffect(() => {
    if (initialDetails) {
      const amounts = `${
        initialDetails === null ? "" : initialDetails.paymentDetails.amount
      }`;

      setValues({ ...values, amount: amounts });

      console.log(amount);
    }
  }, [initialDetails]);

  useEffect(() => {
    if (userDetails) {
      const fullname = userDetails === null ? "" : userDetails.customerName;
      setValues({ ...values, fullname: fullname });
    }
  }, [userDetails]);

  const componentProps = {
    email: email,
    amount: amount ? amount * 100 : 0,
    metadata: {
      fullname: fullname,
    },
    // publicKey: "pk_test_07df38cc2381f42f40a3bcb363a5b6e0b7882dbe",
    publicKey: "pk_live_76004bcc59f334f109b8a3bc68735ee620c10485",
    text: "Pay Now",
    onSuccess: (reference) => reference && handleSuccess(reference),
    onClose: handleClose,
  };

  if (props.buyToken.success) {
    if (method === "wallet") {
      console.log("wallet");
      props.history.push({
        pathname: `${process.env.REACT_APP_URL}/invoice`,
        state: {
          detail: { amount, initialDetails, method },
        },
      });
    }
    if (method === "card") {
      console.log("card");
      // props.hideLoader();
      props.history.push({
        pathname: `${process.env.REACT_APP_URL}/cardInvoice`,
        state: {
          detail: { amount, initialDetails, method },
        },
      });
    }
  }

  return (
    <>
      {loading === true ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3 }}
        >
          <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
            <div className="d-flex align-items-center flex-column px-4">
              <ClimbingBoxLoader color={"#3c44b1"} loading={true} />
            </div>
            <div className="text-muted font-size-xl text-dark text-center pt-3">
              <span className="font-size-lg d-block text-dark">
                Your request is loading
              </span>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="app-wrapper">
          <div className="hero-wrapper w-100">
            <div className="flex-grow-1 w-100 align-items-center">
              <div>
                <div className="divider-v divider-v-lg d-none d-lg-block" />
                <div className="text-center mt-4">
                  <img
                    width="100"
                    src={localStorage.getItem("ProductImage")}
                    alt="rccg"
                  />
                  <h1 className="font-size-xxl mb-1 font-weight-bold">
                    {localStorage.getItem("ProductTitle")}
                  </h1>
                  <p className="mb-0 text-black-50">
                    Fill in the fields below to pay your{" "}
                    <span className="text-lowercase">
                      {process.env.REACT_APP_RCCG}
                    </span>
                  </p>
                </div>
                <div className="py-4">
                  {/* <Form formName={FORM_NAME} key={FORM_NAME} /> */}
                  <div>
                    {!inital && (
                      <div className="mb-4">
                        <TextField
                          fullWidth
                          type="number"
                          variant="outlined"
                          id="number"
                          onChange={handleChange("meterNumber")}
                          helperText={inError}
                          value={meterNumber}
                          name="meterNumber"
                          label="Meter Number"
                          error={inError}
                          placeholder="Meter Number"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <DialpadOutlinedIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {error && (
                          <Typography
                            className="text-center"
                            component="p"
                            style={{
                              fontSize: "15px",
                              marginBottom: 0,
                              marginTop: 5,
                            }}
                            color="error"
                          >
                            {error}
                          </Typography>
                        )}
                      </div>
                    )}
                    {inital && (
                      <>
                        <div className="allnew">
                          <p>Full Name: </p>
                          <p style={{ paddingLeft: "63px" }}>
                            {userDetails.customerName}
                          </p>
                        </div>
                        <div className="allnew">
                          <p>Address: </p>
                          <p style={{ paddingLeft: "74px" }}>
                            {userDetails.address}
                          </p>
                        </div>
                        <div className="allnew">
                          <p>Meter Number: </p>
                          <p style={{ paddingLeft: "30px" }}>
                            {userDetails.meterNumber}
                          </p>
                        </div>
                        <div className="allnew">
                          <p>undertaking: </p>
                          <p style={{ paddingLeft: "50px" }}>
                            {userDetails.undertaking}
                          </p>
                        </div>
                      </>
                    )}
                    {!input ? (
                      initialDetails ? (
                        <>
                          <div className="allnew">
                            <p>Amount: </p>
                            <p style={{ paddingLeft: "75px" }}>
                              {initialDetails.paymentDetails
                                ? initialDetails.paymentDetails.amount
                                : 0}
                            </p>
                          </div>
                        </>
                      ) : (
                        ""
                      )
                    ) : (
                      <div className="mb-3">
                        <TextField
                          fullWidth
                          type="number"
                          variant="outlined"
                          id="number"
                          onChange={handleChange("amount")}
                          helperText={inError}
                          value={amount}
                          name="amount"
                          label="Amount"
                          error={inError}
                          placeholder="Amount"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <DialpadOutlinedIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {error && (
                          <Typography
                            className="text-center"
                            component="p"
                            style={{
                              fontSize: "15px",
                              marginBottom: 0,
                              marginTop: 5,
                            }}
                            color="error"
                          >
                            {error}
                          </Typography>
                        )}
                      </div>
                    )}

                    {showAmount && (
                      <div className="text-center">
                        <Button
                          onClick={(e) => {
                            if (props.authUser) {
                              initializePayment(e);
                            } else {
                              initializePayment(e);
                            }
                            // console.log("Initialize");
                          }}
                          style={{
                            backgroundColor: "#048cfc",
                          }}
                        >
                          Proceed
                        </Button>
                      </div>
                    )}
                    <div className="">
                      {!verify ? (
                        <>
                          <div className="text-center">
                            <Button
                              onClick={(e) => {
                                if (props.authUser) {
                                  submit(e);
                                } else {
                                  submit(e);
                                }
                              }}
                              style={{
                                backgroundColor: "#048cfc",
                                color: "#fff",
                                // position: "absolute",
                                // right: 0,
                              }}
                            >
                              Verify Number
                            </Button>
                          </div>
                        </>
                      ) : (
                        ""
                      )}

                      {Details && (
                        <div>
                          <div style={{ float: "left" }}>
                            <div className="text-center">
                              <PaystackConsumer {...componentProps}>
                                {({ initializePayment }) => (
                                  <Button
                                    style={{
                                      backgroundColor: "grey",
                                      // width: "100px",
                                    }}
                                    onClick={() =>
                                      initializePayment(
                                        handleSuccess,
                                        handleClose
                                      )
                                    }
                                  >
                                    Card Payment
                                  </Button>
                                )}
                              </PaystackConsumer>
                            </div>
                            {/* <Pay
                                data={userDetails}
                                amount={amount}
                              /> */}
                          </div>
                          <div className="text-center">
                            <Button
                              onClick={(e) => {
                                if (props.authUser) {
                                  Pay(e);
                                } else {
                                  Pay(e);
                                }
                                // console.log("wallet");
                              }}
                              style={{
                                backgroundColor: "#048cfc",
                                // position: "absolute",
                                // right: 0,
                              }}
                            >
                              Wallet Payment
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
  // }
}

Tab1.propTypes = {
  token: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // authUser: state.authUser.isAuthenticated,
  authUser: state.authUser,
  buyToken: state.buyToken,
  verify: state.verify,
});

export default withRouter(
  connect(mapStateToProps, {
    paystackToken,
    verifyNumber,
    signin,
    showLoader,
    hideLoader,
    showModal,
    hideModal,
    token,
    clearErrors,
  })(Tab1)
);
