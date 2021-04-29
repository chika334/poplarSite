import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { PaystackConsumer } from "react-paystack";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
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
// import { token, paystackToken } from "../../_actions/tokenAction";
import { ClimbingBoxLoader, PropagateLoader } from "react-spinners";
import { motion } from "framer-motion";
import Pay from "../../Components/paystack/pay";

// const FORM_NAME = "rccgPaymentForm";

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
  const user = useSelector((state) =>
    state.authUser.user === null ? "" : state.authUser.user.user
  );
  const [parsedData, setParseData] = useState({});
  const [values, setValues] = useState({
    checked: false,
    email: `${
      props.authUser.user === null ? "" : props.authUser.user.user.email.trim()
    }`,
    redirect: false,
    fullname: "",
    publicKey: "",
    meterNumber: "",
    phoneNo: `${user.phone}`,
    name: `${user.firstName}`,
    userDetails: null,
    productCode: `${process.env.REACT_APP_PRODUCTCODE}`,
    paymentMethod: "fastrwallet",
    customerId: "",
    error: null,
    inError: null,
    loading: false,
    // open: false,
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
    card: false,
    wallet: false,
    walletDetails: false,
    amounts: "",
    amount: "",
    method: "",
  });

  const paymentMethods = "fastrflutterwave";

  const handleValueChange = (field, value) => {
    setValues((state) => ({ [field]: value }));
  };

  const {
    amount,
    // amounts,
    // checked,
    card,
    wallet,
    walletDetails,
    name,
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
    // open,
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

  const amountValue = parseFloat(amount, 10);
  const totalAmount = amountValue + 100;

  const sendRedirect = () => {
    props.clearErrors();
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  // const handleOpen = () => {
  //   setValues({ ...values, open: true });
  // };

  const initializePayment = (e) => {
    e.preventDefault();
    const { token } = props.authUser;

    if (amount === "") {
      setValues({ ...values, inError: "Input Required" });
    } else {
      if (localStorage.token && userDetails === null) {
        return "";
      } else if (localStorage.token && userDetails.accountName !== "") {
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

        const fullname = userDetails.accountName;
        const buyToken = {
          productCode,
          paymentMethod,
          fullname,
          amount: amount,
          accountNumber: meterNumber,
          customerId,
        };

        axios
          .post(
            `${process.env.REACT_APP_API_INITIALIZE_PAYMENT}`,
            buyToken,
            config
          )
          .then(
            (res) =>
              // setTimeout(() => {
              setValues({
                ...values,
                loading: false,
                initialDetails: res.data,
                Details: false,
                walletDetails: true,
                wallet: false,
                card: false,
                inital: true,
                verify: true,
                input: false,
                showAmount: false,
              })
            // }, 300)
          )
          .catch((err) => console.log(err));
      }
    }
  };

  const initializePaymentWithCard = (e) => {
    e.preventDefault();
    const { token } = props.authUser;

    if (amount === "") {
      setValues({ ...values, inError: "Input Required" });
    } else {
      if (localStorage.token && userDetails === null) {
        return "";
      } else if (localStorage.token && userDetails.accountName !== "") {
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

        const fullname = userDetails.accountName;
        const buyToken = {
          productCode,
          paymentMethod: paymentMethods,
          fullname,
          amount: amount,
          accountNumber: meterNumber,
          customerId,
        };

        axios
          .post(
            `${process.env.REACT_APP_API_INITIALIZE_PAYMENT}`,
            buyToken,
            config
          )
          .then(
            (res) =>
              // setTimeout(() => {
              setValues({
                ...values,
                loading: false,
                initialDetails: res.data,
                Details: true,
                inital: true,
                card: false,
                wallet: false,
                verify: true,
                input: false,
                showAmount: false,
              })
            // }, 300)
          )
          .catch((err) => console.log(err));
      }
    }
  };

  // wallet payment
  const Pay = (e) => {
    e.preventDefault();
    const { token } = props.authUser;

    if (localStorage.token && userDetails === null) {
      return "";
    } else if (localStorage.token && userDetails.accountName !== "") {
      setValues({ ...values, loading: true, method: "wallet" });
      const fastrId = initialDetails.fastrId;
      const reference = null;

      const buyToken = {
        fastrId,
        reference,
      };

      props.token(buyToken);
    }
  };

  // card payment
  const PayWithFlutterwave = (response) => {
    if (localStorage.token && userDetails === null) {
      return "";
    } else if (localStorage.token && userDetails.accountName !== "") {
      setValues({ ...values, loading: true, method: "card" });
      const fastrId = initialDetails.fastrId;
      const reference = response.transaction_id;

      const buyToken = {
        fastrId,
        reference,
      };

      props.paystackToken(buyToken);
      // console.log(buyToken);
    }
  };

  const verifyMeterNumber = async () => {
    const token = props.authUser.token;

    const details = {
      accountNumber: meterNumber,
      productCode: productCode,
    };

    console.log(details);

    return await verifyNumber(details, token);
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
                // setTimeout(() => {
                setValues({
                  ...values,
                  verify: true,
                  input: true,
                  userDetails: result,
                  wallet: true,
                  card: true,
                  showAmount: true,
                  inital: true,
                  loading: false,
                  Details: false,
                });
                // }, 300);
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
          // handleOpen();
        }
      }
    }
  };

  useEffect(() => {
    if (initialDetails) {
      const amounts = `${
        initialDetails === null ? "" : initialDetails.paymentDetails.amount
      }`;

      setValues({ ...values, amount: amounts });

      // console.log(amount);
    }
  }, [initialDetails]);

  useEffect(() => {
    if (userDetails) {
      const fullname = userDetails === null ? "" : userDetails.accountName;
      setValues({ ...values, fullname: fullname });
    }
  }, [userDetails]);

  var formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  // Flutterwave
  const config = {
    public_key: `${process.env.REACT_APP_TEST_FLUTTERWAVE}`,
    tx_ref: Date.now(),
    amount: amountValue,
    currency: "NGN",
    payment_options: "card",
    customer: {
      email: email,
      phonenumber: phoneNo,
      name: name,
    },
    customizations: {
      title: "Poplar power",
      description: "Bill payment made easy",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  if (props.buyToken.success) {
    if (method === "wallet") {
      console.log("wallet");
      if (props.buyToken.success === true) {
        console.log(props.buyToken);
        props.history.push({
          pathname: `${process.env.REACT_APP_URL}/invoice`,
          state: {
            detail: { amount, initialDetails, method, userDetails },
          },
        });
      }
    }

    if (method === "card") {
      // console.log("card");
      closePaymentModal();
      console.log(props.buyToken);
      if (props.buyToken.success === true) {
        props.history.push({
          pathname: `${process.env.REACT_APP_URL}/cardInvoice`,
          state: {
            detail: { amount, initialDetails, method, userDetails },
          },
        });
        // return (
        //   <Redirect
        //     to={{
        //       pathname: `${process.env.REACT_APP_URL}/cardInvoice`,
        //       state: {
        //         detail: { amount, initialDetails, method },
        //       },
        //     }}
        //   />
        // );
      }
    }
  }

  useEffect(() => {
    let userOtherData = userDetails === null ? "{}" : userDetails.otherDetails;

    let detail = JSON.parse(userOtherData);
    console.log(detail, "1.5");

    // console.log(typeof detail);

    setParseData(detail);
  }, [userDetails]);

  console.log(parsedData);

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
                            {userDetails.accountName}
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
                            {userDetails.accountNumber}
                          </p>
                        </div>
                        <div className="allnew">
                          <p>Undertaking: </p>
                          <p style={{ paddingLeft: "50px" }}>{parsedData.undertaking}</p>
                        </div>
                      </>
                    )}
                    {!input ? (
                      initialDetails ? (
                        <>
                          <div className="allnew">
                            <p>Amount: </p>
                            <p style={{ paddingLeft: "75px" }}>
                              {initialDetails.productAmount
                                ? formatter.format(initialDetails.productAmount)
                                : 0}
                            </p>
                          </div>
                          <div className="allnew">
                            <p>Convenience fee: </p>
                            <p style={{ paddingLeft: "50px" }}>
                              {initialDetails.fee
                                ? formatter.format(initialDetails.fee)
                                : ""}
                            </p>
                          </div>
                          <div className="allnew">
                            <p>Total Amount: </p>
                            <p style={{ paddingLeft: "50px" }}>
                              {initialDetails.fee
                                ? formatter.format(
                                    initialDetails.paymentDetails.amount
                                  )
                                : ""}
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

                    {card && (
                      <div style={{ display: "inline" }}>
                        <div style={{ float: "left", width: "45%" }}>
                          <Button
                            onClick={(e) => {
                              if (props.authUser) {
                                initializePaymentWithCard(e);
                              } else {
                                initializePaymentWithCard(e);
                              }
                            }}
                            style={{
                              backgroundColor: "#048cfc",
                            }}
                          >
                            Proceed with card
                          </Button>
                        </div>
                      </div>
                    )}
                    {wallet && (
                      <div style={{ float: "right", width: "45%" }}>
                        <Button
                          onClick={(e) => initializePayment(e)}
                          style={{
                            backgroundColor: "#048cfc",
                          }}
                        >
                          Proceed with wallet
                        </Button>
                      </div>
                      // </div>
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
                        <div className="text-center">
                          <Button
                            onClick={() => {
                              handleFlutterPayment({
                                callback: (response) => {
                                  // const reference = response.transaction_id;
                                  // const ref = {
                                  //   reference: reference,
                                  // };
                                  // props.paystackToken(ref);
                                  PayWithFlutterwave(response);
                                },
                                onClose: () => {
                                  alert("Please don't go :(");
                                },
                              });
                            }}
                            fullWidth
                            className="btn-primary"
                          >
                            Pay with Card{" "}
                          </Button>
                        </div>
                      )}
                      {walletDetails && (
                        <>
                          <div className="text-center">
                            <Button
                              fullWidth
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
                        </>
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
