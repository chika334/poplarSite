import React from "react";
import { forgotPassword } from "../../_actions/forgotPassword";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import { clearErrors } from "../../_actions/errorAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showForgotModal, hideForgotModal } from "../../_actions/forgotModal";
import Loader from "../../Components/Loader/Loader";
import { showLoader, hideLoader } from "../../_actions/loading";
import { showResetModal } from "../../_actions/ResetPassword";
import { ClimbingBoxLoader } from "react-spinners";
import { motion } from "framer-motion";
import axios from "axios";

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

class forgotpassword extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      redirect: false,
      error: "",
      msg: "",
      open: false,
      loading: false,
      set: false,
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    authUser: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    forgotPassword: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  submit = async (e) => {
    e.preventDefault();
    const { email } = this.state;

    const details = {
      email,
    };

    return await forgotPassword(details);
  };

  forgot = async (e) => {
    // this.props.showLoader();
    e.preventDefault();
    this.setState({ loading: true });
    try {
      const result = await this.submit();
      const { message } = result;
      this.setState({ loading: false, msg: message, set: true });
    } catch (err) {
      // console.log(error);
      this.setState({ error: err.response.data.msg });
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { classes } = this.props;
    console.log(this.state.msg);
    return (
      <div>
        {this.state.loading ? (
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
        ) : this.state.set ? (
          this.state.msg ? (
            <Card className={classes.card}>
              <div style={{ position: "absolute", right: "0" }}>
                <Button
                  onClick={this.props.hideForgotModal}
                  className="px-4 text-dark-50 mt-3"
                >
                  <FontAwesomeIcon icon={["fas", "times"]} />
                </Button>
              </div>
              <div className="p-5">
                <Alert severity="success">{this.state.msg}</Alert>
              </div>
            </Card>
          ) : null
        ) : (
          <Card className={classes.card}>
            <div style={{ position: "absolute", right: "0" }}>
              <Button
                onClick={this.props.hideForgotModal}
                className="px-4 text-dark-50 mt-3"
              >
                <FontAwesomeIcon icon={["fas", "times"]} />
              </Button>
            </div>
            <Loader />
            {this.state.msg ? (
              <Alert severity="success">{this.state.msg}</Alert>
            ) : null}
            {this.state.error && (
              <Typography component="p" color="error">
                {this.state.error}
              </Typography>
            )}
            <CardContent className="pt-5">
              <Typography type="" className={classes.title}>
                forgot REQUEST PASSWORD RESET
              </Typography>
              <TextField
                id="email"
                label="Email"
                type="email"
                className={classes.textField}
                value={this.state.email || ""}
                onChange={this.handleChange("email")}
                margin="normal"
              />{" "}
              <br />
            </CardContent>
            <CardActions>
              <Button
                color="primary"
                type="button"
                variant="contained"
                onClick={(e) => {
                  this.forgot(e);
                }}
                className={classes.submit}
              >
                Submit
              </Button>
            </CardActions>
          </Card>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authUser.isAuthenticated,
  authUser: state.authUser,
  error: state.error,
  forgot: state.forgot,
});

export default connect(mapStateToProps, {
  showLoader,
  forgotPassword,
  clearErrors,
  showForgotModal,
  hideForgotModal,
  showResetModal,
  hideLoader,
})(withStyles(styles)(forgotpassword));
