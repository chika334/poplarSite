import React, { Component } from "react";
import rccg from "../../../assets/images/product-logos/rccg.jpg";
import Ikeja from "../../../assets/images/product-logos/ikeja.png";
import eko from "../../../assets/images/product-logos/eko.jpg";
import dstv from "../../../assets/images/product-logos/dstv.jpg";
import {
  Card,
  Grid,
  InputAdornment,
  Button,
  TextField,
} from "@material-ui/core";
import { connect } from "react-redux";
import Modal from "@material-ui/core/Modal";
import SuspenseLoading from "../../../Components/Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
import Typography from "@material-ui/core/Typography";
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import { signin } from "../../../_actions/userAction";
import { showLoader } from "../../../_actions/loading";
import { Redirect, withRouter } from "react-router-dom";
import { showModal, hideLoader } from "../../../_actions/modal";
import {
  hideProductModal,
  showProductModal,
} from "../../../_actions/ProductLoginDisplay";
import { showProductDetailsModal } from "../../../_actions/ProductModal";

const FourDetails = [
  {
    name: `${process.env.REACT_APP_RCCG}`,
    src: `${rccg}`,
    description: "Redeem electric powering",
  },
  {
    name: `${process.env.REACT_APP_IKEJA}`,
    src: `${Ikeja}`,
    description: "Redeem electric powering",
  },
  {
    name: `${process.env.REACT_APP_EKO}`,
    src: `${eko}`,
    description: "Redeem electric powering",
  },
  {
    name: `${process.env.REACT_APP_DSTV}`,
    src: `${dstv}`,
    description: "Redeem electric powering",
  },
];

class ProductDisplay extends Component {
  state = {
    image: "",
    title: "",
    show: false,
    open: false,
    email: "",
    password: "",
    error: "",
  };

  componentDidUpdate(prevProps, props) {
    const { error, authUser, success } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "BUYTOKEN_FAIL") {
        this.setState({ error: error.message.message });
        this.props.hideLoader();
      }
    } else {
      console.log(authUser);
      console.log(localStorage.token);
      this.check();
    }
  }

  check = (props) => {
    const { authUser } = this.props;
    if (localStorage.token) {
      console.log("GOOD");
      // this.sendRedirect();
      // this.props.hideLoader();
      // this.props.hideModal();
      // <Redirect
      //   to={{
      //     pathname: `${process.env.REACT_APP_URL}/fourProducts`,
      //     state: { props },
      //   }}
      // />;
      this.props.history.push(`${process.env.REACT_APP_URL}/buyProducts`);
      // window.location.href = `${process.env.REACT_APP_URL}/profilepage`;
      // <Redirect to={`${process.env.REACT_APP_URL}/profilepage`} />
    }
  };

  FillForm = (props) => {
    const { authUser } = this.props;
    if (authUser === false) {
      this.setState({ open: true });
    } else {
      // console.log("BAD ERROR");
      this.props.history.push(`${process.env.REACT_APP_URL}/buyProducts`);
    }
  };

  submit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email === "" || password === "") {
      this.setState({ error: "Please fill all inputs" });
      return;
    }

    const user = {
      email,
      password,
    };

    this.props.signin(user);
    this.props.showLoader();
  };

  forgotPassword = (e) => {
    this.props.showForgotModal();
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <>
        <div className="row">
          <Grid container item xs={12} spacing={3}>
            {FourDetails.map((allDetails, index) => (
              <div key={index} className="column p-3">
                <Card className="card p-2 h-100 mt-2">
                  <div className="mt-2 h-100">
                    <div className="h-50">
                      <div className="d-flex align-items-center justify-content-center w-100">
                        <img
                          width="68"
                          height="60"
                          src={allDetails.src}
                          alt="src..."
                        />
                      </div>
                      <h5 className="m-auto d-flex align-items-center justify-content-center p-50 color-grey">
                        {allDetails.name}
                      </h5>
                    </div>
                    <hr />
                    <small className="m-auto d-flex align-items-center justify-content-center p-50 color-grey">
                      {allDetails.description}
                    </small>
                    <Button
                      style={{
                        backgroundColor: `rgb(0, 68, 116)`,
                        color: "#fff",
                      }}
                      onClick={(e) => {
                        localStorage.setItem(
                          "ProductImage",
                          `${allDetails.src}`
                        );
                        localStorage.setItem(
                          "ProductTitle",
                          `${allDetails.name}`
                        );
                        this.FillForm({
                          image: allDetails.src,
                          title: allDetails.name,
                        });
                      }}
                    >
                      Buy
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </Grid>
        </div>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className="pt-4 pb-4 d-flex align-item-center justify-content-center"
        >
          <>
            <div className="card pl-3 pr-3 align-items-center">
              <div className="app-wrapper">
                <div className="app-wrapper bg-white">
                  <div className="hero-wrapper w-100">
                    <div className="flex-grow-1 w-100 align-items-center">
                      <div>
                        <div style={{ position: "relative", left: "270px" }}>
                          <Button
                            onClick={this.handleClose}
                            className="px-4 text-dark-50 mt-3"
                          >
                            <FontAwesomeIcon icon={["fas", "times"]} />
                          </Button>
                        </div>
                        <div className="divider-v divider-v-lg d-none d-lg-block" />
                        <div className="text-center mt-4">
                          <div className="mb-0 text-black-50">
                            <h1 className="font-size-xxl mb-1 font-weight-bold">
                              Login
                            </h1>
                            <p className="mb-0 text-black-50 mt-5">
                              Fill in the fields below to login to your account
                            </p>
                          </div>
                        </div>
                        <div className="py-4">
                          <div>
                            <div className="mb-4">
                              <TextField
                                fullWidth
                                variant="outlined"
                                id="textfield-email"
                                label="Email address"
                                onChange={this.handleChange("email")}
                                value={this.state.email || ""}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <MailOutlineTwoToneIcon />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </div>
                            <div className="mb-3">
                              <TextField
                                fullWidth
                                variant="outlined"
                                id="textfield-password"
                                label="Password"
                                onChange={this.handleChange("password")}
                                type="password"
                                value={this.state.password || ""}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <LockTwoToneIcon />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </div>
                            {this.state.error && (
                              <Typography
                                className="text-center"
                                component="p"
                                color="error"
                              >
                                {this.state.error}
                              </Typography>
                            )}
                            <div className="d-inline-flex">
                              <div className="text-center py-2">
                                <Button
                                  onClick={(e) => this.submit(e)}
                                  className="btn-second font-weight-bold p-3 my-2"
                                >
                                  Submit
                                </Button>
                              </div>
                              <div className="text-center">
                                <Button
                                  onClick={this.forgotPassword}
                                  className="btn bg-white font-weight-bold my-2"
                                >
                                  forgot Password
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser.isAuthenticated,
  error: state.error,
  success: state.buyToken,
  // productModal: state.productModal.autoProductModal,
  // ProductDisplays: state.ProductDisplayModal.autoProductDisplayModal,
});

export default withRouter(
  connect(mapStateToProps, {
    signin,
    showLoader,
    showModal,
    hideProductModal,
    showProductModal,
    showProductDetailsModal,
  })(ProductDisplay)
);
