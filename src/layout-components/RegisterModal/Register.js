import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { signup } from "../../_actions/userAction";
import { clearErrors } from "../../_actions/errorAction";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { showLoader, hideLoader } from "../../_actions/loading";
import { InputAdornment, Button, TextField } from "@material-ui/core";
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Loader from "../../Components/Loader/Loader";
import { withRouter } from "react-router-dom";
import { hideRegisterModal } from "../../_actions/registerModal";
import Form from "../../data/Register/Form";

const FORM_NAME = "registerForm";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      countryId: "1",
      error: "",
    };
  }

  static propTypes = {
    authUser: PropTypes.object.isRequired,
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "REGISTER_FAIL") {
        this.props.hideLoader();
        this.setState({ error: error.message.message });
      }
    } else {
      this.check();
    }
  }

  check = () => {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      console.log("REGISTER");
      this.sendRedirect();
      this.props.hideLoader();
      this.props.hideRegisterModal();
      let redirect = localStorage.getItem("redirectPage");
      // this.props.history.push(`${process.env.REACT_APP_URL}${redirect}`);
      window.location.href = `${process.env.REACT_APP_URL}/profilepage`;
      // this.setState({ redirect: true });
      // setTimeout(() => {
      //   let redirect = localStorage.getItem("redirectPage");
      //   this.props.hideLoader();
      //   this.props.history.push(`${process.env.REACT_APP_URL}${redirect}`);
      //   // window.location.href = `${process.env.REACT_APP_URL}${redirect}`;
      //   this.props.hideRegisterModal();
      // }, 500);
    }
  };

  sendRedirect = () => {
    this.props.clearErrors();
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      countryId,
    } = this.state;
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      password === ""
    ) {
      this.setState({
        error: "All fields should be filled",
      });
    } else {
      this.setState({ loading: true });
      const user = {
        firstName,
        lastName,
        email,
        phone,
        password,
        countryId,
      };

      this.props.signup(user);
      this.props.showLoader();
    }
  };

  render() {
    return (
      <div className="app-wrapper bg-white">
        <Loader />
        <div className="hero-wrapper w-100">
          <div className="flex-grow-1 w-100 align-items-center">
            {/* modal close */}
            <div style={{ position: "relative", left: "270px" }}>
              <Button
                onClick={this.props.hideRegisterModal}
                className="px-4 text-dark-50 mt-2"
              >
                <FontAwesomeIcon icon={["fas", "times"]} />
              </Button>
            </div>
            <div>
              <div className="divider-v divider-v-lg d-none d-lg-block" />
              <div className="text-center mt-4">
                <div className="mb-0 text-black-50">
                  <h1 className="font-size-xxl mb-3 font-weight-bold">
                    Register
                  </h1>
                  <p className="mb-0 text-black-50">
                    Fill in the fields below to login to your account
                  </p>
                </div>
              </div>
              <div className="py-4">
                <Form formName={FORM_NAME} key={FORM_NAME} />
                {/* <div>
                  <div className="mb-4">
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="textfield-firstname"
                      label="First Name"
                      onChange={this.handleChange("firstname")}
                      value={this.state.firstname || ""}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircleIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="textfield-lastname"
                      label="Last Name"
                      onChange={this.handleChange("lastname")}
                      value={this.state.lastname || ""}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircleIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
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
                  </div> */}
                {this.state.error && (
                  <Typography
                    className="text-center"
                    component="p"
                    color="error"
                  >
                    {this.state.error}
                  </Typography>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authUser.isAuthenticated,
  authUser: state.authUser,
  error: state.error,
  // loading: state.loading,
});

export default withRouter(
  connect(mapStateToProps, {
    signup,
    clearErrors,
    showLoader,
    hideLoader,
    hideRegisterModal,
  })(Register)
);
