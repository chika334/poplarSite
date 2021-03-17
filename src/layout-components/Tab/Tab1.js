import React, { Component } from "react";
// import rccg from "../../assets/images/product-logos/rccg.jpg";
import { connect } from "react-redux";
import { showModal, hideModal } from "../../_actions/modal";
import PropTypes from "prop-types";
import { clearErrors } from "../../_actions/errorAction";
import { token } from "../../_actions/tokenAction";
import { showLoader, hideLoader } from "../../_actions/loading";
import { withRouter } from "react-router-dom";
import { signin } from "../../_actions/userAction";
import Form from "../../data/Payment/Electric/Form";

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
      accountNumber: "",
      phoneNo: "",
      amount: "",
      productCode: "rccg-power-12",
      customerId: "",
      fullname: "",
      error: "",
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
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "BUYTOKEN_FAIL") {
        this.setState({ error: error.message.message });
      }
    } else {
      if (authUser && success.success) {
        this.props.history.push(`${process.env.REACT_APP_URL}/buytoken`);
        console.log("Logged");
      }
      this.sendRedirect();
    }
  }

  // goods = () => {
  //   const { authUser } = this.props;
  //   const pages = localStorage.getItem("LoggedPage");
  //   if (authUser && pages) {
  //     this.payBills();
  //   }
  // };

  sendRedirect = () => {
    this.props.clearErrors();
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  // handleOpen = () => {
  //   this.setState({ open: true });
  // };

  // handleClose = () => {
  //   this.setState({ open: false });
  // };

  // submit = (e) => {
  //   e.preventDefault();
  //   const { authUser } = this.props;
  //   if (localStorage.ProductTitle === "RCCG ELECTRIC") {
  //     const {
  //       accountNumber,
  //       amount,
  //       fullname,
  //       productCode,
  //       customerId,
  //     } = this.state;

  //     const buyToken = {
  //       productCode,
  //       fullname,
  //       amount,
  //       accountNumber,
  //       customerId,
  //     };

  //     if (authUser) {
  //       this.props.showLoader();
  //       this.props.token(buyToken);
  //     } else {
  //       this.setState({ wantToPay: true });
  //       this.handleOpen();
  //     }
  //   } else if (localStorage.ProductTitle === "IKEJA ELECTRIC") {
  //     console.log(localStorage.ProductTitle);
  //   } else if (localStorage.ProductTitle === "EKO ELECTRIC") {
  //     console.log(localStorage.ProductTitle);
  //   } else if (localStorage.ProductTitle === "DSTV Subscription") {
  //     console.log(localStorage.ProductTitle);
  //   }
  // };

  // payBills = () => {
  //   const { authUser, success } = this.props;
  //   const pages = localStorage.getItem("LoggedPage");
  //   const {
  //     accountNumber,
  //     amount,
  //     fullname,
  //     productCode,
  //     customerId,
  //   } = this.state;

  //   const buyToken = {
  //     productCode,
  //     fullname,
  //     amount,
  //     accountNumber,
  //     customerId,
  //   };
  //   // if user is authenticated
  //   if (authUser === true && pages) {
  //     if (authUser && this.state.wantToPay) {
  //       this.props.showLoader();
  //       this.props.token(buyToken);
  //       this.setState({ wantToPay: false });
  //     }
  //     if (authUser && success.success) {
  //       //if success.success === true
  //       this.props.hideLoader();
  //       // console.log("success", success.success);
  //       this.props.history.push(`${process.env.REACT_APP_URL}/buytoken`);
  //     }
  //   }
  // };

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
    return (
      <>
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
                    {/* {process.env.REACT_APP_RCCG} */}
                    {localStorage.getItem("ProductTitle")}
                  </h1>
                  <p className="mb-0 text-black-50">
                    Fill in the fields below to pay your{" "}
                    <span className="text-lowercase">
                      {process.env.REACT_APP_RCCG}
                      {localStorage.getItem("ProductTitle")}
                    </span>
                  </p>
                </div>
                <div className="py-4">
                  <Form formName={FORM_NAME} key={FORM_NAME} />
                  {/* <div>
                    <div className="mb-4">
                      <TextField
                        fullWidth
                        variant="outlined"
                        id="fullname"
                        type="text"
                        label="Full Name"
                        value={this.state.fullname}
                        onChange={this.handleChange("fullname")}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div className="mb-4">
                      <TextField
                        fullWidth
                        variant="outlined"
                        id="number"
                        type="number"
                        value={this.state.accountNumber}
                        onChange={this.handleChange("accountNumber")}
                        label="Meter Number"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <DialpadOutlinedIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
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
                              <span className="pr-3 align-items-center">₦</span>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div className="text-center py-4">
                      <Button
                        onClick={(e) => {
                          if (this.props.authUser) {
                            this.submit(e);
                          } else {
                            this.submit(e);
                          }
                        }}
                        className="btn-second font-weight-bold w-50 my-2"
                      >
                        Submit
                      </Button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser.isAuthenticated,
  success: state.buyToken,
});

export default withRouter(
  connect(mapStateToProps, {
    signin,
    showModal,
    hideModal,
    showLoader,
    hideLoader,
    token,
    clearErrors,
  })(Tab1)
);
