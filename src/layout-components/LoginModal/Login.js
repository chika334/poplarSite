import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { signin } from "../../_actions/userAction";
import { withStyles } from "@material-ui/core/styles";
import { clearErrors } from "../../_actions/errorAction";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { showRegisterModal } from "../../_actions/registerModal";
import { showLoader, hideLoader } from "../../_actions/loading";
import { InputAdornment, Button, TextField } from "@material-ui/core";
import { withRouter, Redirect } from "react-router-dom";
import { hideModal, showModal } from "../../_actions/modal";
import { showForgotModal } from "../../_actions/forgotModal";
// import Grid from "@material-ui/core/Grid";
import Form from "../../data/forms/Form";

const FORM_NAME = "loginForm";

const styles = (theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  error: {
    verticalAlign: "middle",
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle,
  },
  textField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    width: 300,
  },
  buttonField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    width: 300,
    backgroundColor: "red",
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false,
      error: "",
      inError: null,
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    authUser: PropTypes.object.isRequired,
    signin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ error: error.message.message });
      }
    } else {
      this.check();
    }
  }

  check = () => {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      this.setState({ redirect: true });
      this.sendRedirect();
      setTimeout(() => {
        this.props.hideModal();
        this.props.hideLoader();
        console.log("daniel");
        const redirect = localStorage.getItem("redirectPage");
        this.props.history.push(`${process.env.REACT_APP_URL}${redirect}`);
      }, 300);
    }
  };

  sendRedirect = () => {
    this.props.clearErrors();
  };

  clickSubmit = (e) => {
    e.preventDefault();
    if (this.state.email === "" || this.state.password === "") {
      this.setState({ inError: "Input required" });
    } else {
      this.props.showLoader();
      this.props.hideModal();
      const { email, password } = this.state;
      const user = {
        email,
        password,
      };

      this.props.signin(user);
    }
  };

  // forgotPassword = (e) => {
  //   this.props.history.push(`/poplarpower/forgotPasword`);
  // };

  forgotPassword = (e) => {
    e.preventDefault();
    this.props.showForgotModal();
  };

  register = (e) => {
    this.props.showRegisterModal();
  };
 
  render() {
    if(this.props.isAuthenticated){
    return <Redirect to="/buyProducts"/>
    }
  
    const { classes } = this.props;
    return (
      <div className="app-wrapper bg-white">
        <div className="hero-wrapper w-100">
          <div className="flex-grow-1 w-100 align-items-center">
            <div>
              <div style={{ position: "relative", left: "270px" }}>
                <Button
                  onClick={this.props.hideModal}
                  className="px-4 text-dark-50 mt-3"
                >
                  <FontAwesomeIcon icon={["fas", "times"]} />
                </Button>
              </div>
              <div className="divider-v divider-v-lg d-none d-lg-block" />
              <div className="text-center mt-4">
                <div className="mb-0 text-black-50">
                  <h1 className="font-size-xxl mb-1 font-weight-bold">Login</h1>
                  <p className="mb-0 text-black-50 mt-5">
                    Fill in the fields below to login to your account
                  </p>
                </div>
              </div>
              <div className="py-4">
                <div>
                  {this.state.error && (
                    <Typography
                      className="pb-3 text-center"
                      component="p"
                      color="error"
                    >
                      {this.state.error}
                    </Typography>
                  )}
                </div>
                {/* <Form formName={FORM_NAME} key={FORM_NAME} /> */}
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                  helperText={this.state.inError}
                  error={this.state.inError !== null}
                  placeholder="Email"
                  className={classes.textField}
                  value={this.state.email || ""}
                  onChange={this.handleChange("email")}
                  margin="normal"
                />{" "}
                <br />
                <TextField
                  variant="outlined"
                  id="password"
                  label="Password"
                  helperText={this.state.inError}
                  error={this.state.inError !== null}
                  placeholder="Password"
                  type="password"
                  className={classes.textField}
                  value={this.state.password || ""}
                  onChange={this.handleChange("password")}
                  margin="normal"
                />{" "}
                <br />
              </div>
              <div>
                <div className="text-center d-flex justify-content-center">
                  <p>
                    Don't have an account???
                    <Button
                      onClick={(e) => this.register(e)}
                      className="btn p-3 my-2"
                    >
                      Register
                    </Button>
                  </p>
                </div>
              </div>
              <div className="d-inline-flex">
                <div className="text-center py-2">
                  <Button
                    onClick={(e) => this.clickSubmit(e)}
                    className="btn-second font-weight-bold p-3 my-2"
                  >
                    Submit
                  </Button>
                </div>
                <div style={{ marginLeft: "80px" }}>
                  <Button
                    onClick={(e) => this.forgotPassword(e)}
                    className="btn bg-white text-uppercase p-3 my-2"
                  >
                    forgot Password
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* // </div> */}
      </div>
    );
  }
}

Login.propTypes = {
  authUser: PropTypes.object.isRequired,
  signin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authUser.isAuthenticated,
  authUser: state.authUser,
  error: state.error,
});

export default withRouter(
  connect(mapStateToProps, {
    signin,
    clearErrors,
    showLoader,
    showForgotModal,
    showRegisterModal,
    hideLoader,
    showModal,
    hideModal,
  })(withStyles(styles)(Login))
);
