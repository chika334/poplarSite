import React, { Component } from "react";
// import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import {
  TextField,
  InputAdornment,
  Button,
  Typography,
} from "@material-ui/core";
// import PersonIcon from "@material-ui/icons/Person";
import DialpadOutlinedIcon from "@material-ui/icons/DialpadOutlined";
import { showModal, hideModal } from "../../_actions/modal";
import PropTypes from "prop-types";
import { clearErrors } from "../../_actions/errorAction";
import { token, verifyNumber } from "../../_actions/tokenAction";
import { showLoader, hideLoader } from "../../_actions/loading";
import { withRouter } from "react-router-dom";
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

class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      meterNumber: "",
      phoneNo: "",
      amount: "",
      userDetails: null,
      productCode: "rccg-power-12",
      paymentMethod: "fastrwallet",
      customerId: "",
      fullname: "",
      error: "",
      inError: null,
      loading: false,
      open: false,
      change: false,
      wantToPay: false,
      modalStyle: getModalStyle,
      msg: "",
    };
  }

  static propTypes = {
    token: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, success, authUser } = this.props;
    // console.log(verify);
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "BUYTOKEN_FAIL") {
        this.setState({ error: error.message.message });
        // console.log(this.state.error);
      }
    } else {
      if (authUser && success.success) {
        this.sendRedirect();
        this.props.history.push(`${process.env.REACT_APP_URL}/invoice`);
        // this.props.history.push(`${process.env.REACT_APP_URL}/buytoken`);
        // window.location.href = `${process.env.REACT_APP_URL}/buytoken`;
      }
    }
  }

  sendRedirect = () => {
    this.props.clearErrors();
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  verifyNumber = async () => {
    const { meterNumber } = this.state;

    return await this.props.verifyNumber(meterNumber);
  };

  handlePay = (e) => {
    e.preventDefault();
    const { authUser } = this.props;
    if (authUser && this.state.userDetails === null) {
      return "";
    } else if (authUser && this.state.userDetails.responsedesc === "Success") {
      const fullname = this.state.userDetails.customerName;
      const {
        meterNumber,
        amount,
        paymentMethod,
        // fullname,
        productCode,
        customerId,
      } = this.state;

      const buyToken = {
        productCode,
        paymentMethod,
        fullname,
        amount,
        accountNumber: meterNumber,
        customerId,
      };
      console.log(buyToken);
      // console.log("payment");
      this.props.token(buyToken);
      // this.payBills();
    }
  };

  submit = async (e) => {
    e.preventDefault();
    const { authUser } = this.props;
    if (this.state.meterNumber === "") {
      this.setState({ inError: "Input Required" });
    } else {
      if (localStorage.ProductTitle === "RCCG ELECTRIC") {
        const { meterNumber } = this.state;

        if (authUser) {
          this.setState({ loading: true });
          try {
            axios
              .get(
                `http://www.blacksillicon.com/fastpayr/api/v1/provider/redeem/customer/${meterNumber}`
              )
              .then((res) =>
                setTimeout(() => {
                  this.setState({ loading: false, userDetails: res.data });
                }, 300)
              )
              .catch((err) => console.log(err));
          } catch (err) {
            console.log(err);
          }
        } else {
          this.setState({ wantToPay: true });
          this.handleOpen();
        }
      } else if (localStorage.ProductTitle === "IKEJA ELECTRIC") {
        console.log(localStorage.ProductTitle);
      } else if (localStorage.ProductTitle === "EKO ELECTRIC") {
        console.log(localStorage.ProductTitle);
      } else if (localStorage.ProductTitle === "DSTV Subscription") {
        console.log(localStorage.ProductTitle);
      }
    }
  };

  payBills = () => {
    const { authUser, success } = this.props;
    const pages = localStorage.getItem("LoggedPage");
    const fullname = this.state.userDetails.customerName;
    const {
      meterNumber,
      amount,
      paymentMethod,
      // fullname,
      productCode,
      customerId,
    } = this.state;

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
      if (authUser && this.state.wantToPay) {
        this.props.showLoader();
        this.props.token(buyToken);
        this.setState({ wantToPay: false });
      }
      if (authUser && success.success) {
        //if success.success === true
        this.props.hideLoader();
        // console.log("success", success.success);
        this.props.history.push(`${process.env.REACT_APP_URL}/buytoken`);
      }
    }
  };

  handleClick = (e) => {
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };

    this.props.showLoader();
    this.props.signin(user);
  };

  render() {
    console.log(this.state.userDetails);
    console.log(this.state.loading);
    return (
      <>
        {this.state.loading === true ? (
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
                      {this.state.userDetails === null ? (
                        <div className="mb-4">
                          <TextField
                            fullWidth
                            type="number"
                            variant="outlined"
                            helperText={this.state.inError}
                            id="number"
                            onChange={this.handleChange("meterNumber")}
                            value={this.state.meterNumber}
                            name="meterNumber"
                            label="Meter Number"
                            error={this.state.inError !== null}
                            // error={this.state.inError && null}
                            placeholder="Meter Number"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <DialpadOutlinedIcon />
                                </InputAdornment>
                              ),
                            }}
                            // InputProps={iconGenerate("DialpadOutlinedIcon")}
                          />
                          {this.state.error && (
                            <Typography
                              className="text-center"
                              component="p"
                              style={{ fontSize: "2px" }}
                              color="error"
                            >
                              {this.state.error}
                            </Typography>
                          )}
                        </div>
                      ) : this.state.userDetails.responsedesc === "Success" ? (
                        ""
                      ) : (
                        ""
                      )}
                      {this.state.userDetails === null ? (
                        ""
                      ) : this.state.userDetails.responsedesc === "Success" ? (
                        <>
                          <div className="allnew">
                            <p>Full Name: </p>
                            <p style={{ paddingLeft: "63px" }}>
                              {this.state.userDetails.customerName}
                            </p>
                          </div>
                          <div className="allnew">
                            <p>Address: </p>
                            <p style={{ paddingLeft: "74px" }}>
                              {this.state.userDetails.address}
                            </p>
                          </div>
                          <div className="allnew">
                            <p>Meter Number: </p>
                            <p style={{ paddingLeft: "30px" }}>
                              {this.state.userDetails.meterNumber}
                            </p>
                          </div>
                          <div className="allnew">
                            <p>undertaking: </p>
                            <p style={{ paddingLeft: "30px" }}>
                              {this.state.userDetails.undertaking}
                            </p>
                          </div>

                          <div className="mb-3">
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="amount"
                              label="Amount"
                              value={this.state.amount}
                              onChange={this.handleChange("amount")}
                              type="number"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <span className="pr-3 align-items-center">
                                      ₦
                                    </span>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      <div className="d-inline-flex">
                        <div className="" style={{ float: "left" }}>
                          <Pay />
                        </div>
                        {this.state.userDetails === null ? (
                          <>
                            <div className="text-center">
                              <Button
                                onClick={(e) => {
                                  if (this.props.authUser) {
                                    this.submit(e);
                                  } else {
                                    this.submit(e);
                                  }
                                }}
                                style={{
                                  backgroundColor: "#048cfc",
                                  position: "absolute",
                                  right: 0,
                                }}
                              >
                                verify Number
                              </Button>
                            </div>
                          </>
                        ) : (
                          <div className="text-center">
                            <Button
                              onClick={(e) => {
                                if (this.props.authUser) {
                                  this.handlePay(e);
                                } else {
                                  this.handlePay(e);
                                }
                              }}
                              style={{
                                backgroundColor: "#048cfc",
                                position: "absolute",
                                right: 0,
                              }}
                            >
                              Pay with wallet
                            </Button>
                          </div>
                        )}
                      </div>
                      {/* //{" "} */}
                      {/* { : (
                    //   ""
                    // )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser.isAuthenticated,
  success: state.buyToken,
  verify: state.verify,
});

export default withRouter(
  connect(mapStateToProps, {
    verifyNumber,
    signin,
    showModal,
    hideModal,
    showLoader,
    hideLoader,
    token,
    clearErrors,
  })(Tab1)
);
