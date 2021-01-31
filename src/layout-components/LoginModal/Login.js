import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { signin } from "../../_actions/userAction";
import { clearErrors } from "../../_actions/errorAction";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { showLoader, hideLoader } from "../../_actions/loading";
import { InputAdornment, Button, TextField } from "@material-ui/core";
import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
import Loader from "../../Components/Loader/Loader";
import { withRouter } from "react-router-dom";
import { hideModal } from "../../_actions/modal";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  static propTypes = {
    authUser: PropTypes.object.isRequired,
    signin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "LOGIN_FAIL") {
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
      this.sendRedirect();
      setTimeout(() => {
        let redirect = localStorage.getItem("redirectPage");
        this.props.hideLoader();
        // this.props.history.push(`${process.env.REACT_APP_URL}${redirect}`);
        window.location.href=`${process.env.REACT_APP_URL}${redirect}`
        this.props.hideModal();
      }, 500); 
    }
  };

  sendRedirect = () => {
    this.props.clearErrors();
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleClick = (e) => {
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };

    this.props.signin(user);
    this.props.showLoader();
  };

  render() {
    return (
      <div className="app-wrapper bg-white">
        <Loader />
        <div className="hero-wrapper w-100">
          <div className="flex-grow-1 w-100 align-items-center">
            <div>
              <div className="divider-v divider-v-lg d-none d-lg-block" />
              <div className="text-center mt-4">
                <div className="mb-0 text-black-50">
                  <h1 className="font-size-xxl mb-1 font-weight-bold">Login</h1>
                  <p className="mb-0 text-black-50">
                    Fill in the fields below to login to your account
                  </p>
                </div>
              </div>
              <div className="py-4">
                <div className="text-center mb-3">
                  <Button
                    className="m-2 btn-pill px-4 font-weight-bold btn-google"
                    size="small"
                  >
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={["fab", "google"]} />
                    </span>
                    <span className="btn-wrapper--label">
                      Login with Google
                    </span>
                  </Button>
                  <Button
                    className="m-2 btn-pill px-4 font-weight-bold btn-facebook"
                    size="small"
                  >
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </span>
                    <span className="btn-wrapper--label">
                      Login with Facebook
                    </span>
                  </Button>
                </div>
                <div className="text-center text-black-50 py-2 mb-4">
                  or sign in with credentials
                </div>
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
                  <div className="text-center py-4">
                    <Button
                      onClick={this.handleClick}
                      className="btn-second font-weight-bold p-3 my-2"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    signin,
    clearErrors,
    showLoader,
    hideLoader,
    hideModal,
  })(Login)
);
