import React from "react";
import { signup } from "../../_actions/userAction";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { showLoader, hideLoader } from "../../_actions/loading";
import { hideRegisterModal } from "../../_actions/registerModal";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { clearErrors } from "../../_actions/errorAction";

const styles = (theme) => ({
  card: {
    maxWidth: 400,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(0),
    paddingBottom: theme.spacing(2),
  },
  error: {
    verticalAlign: "middle",
  },
  title: {
    marginTop: theme.spacing(3),
    paddingBottom: theme.spacing(4),
    color: theme.palette.openTitle,
  },
  textField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    width: 300,
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
});

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      countryId: "1",
      open: false,
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
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ error: error.message.message });
      }
    } else {
      this.check();
    }
  }

  check = () => {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      this.setState({ open: true });
      this.props.hideRegisterModal();
      this.props.hideLoader();
      this.sendRedirect();
      // window.location.href = `${process.env.REACT_APP_URL}/profilepage`
      return (
        <Redirect
          to={{
            pathname: `${process.env.REACT_APP_URL}/profilepage`,
          }}
        />
      );
    }
  };

  sendRedirect = () => {
    this.props.clearErrors();
  };

  clickSubmit = (e) => {
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
        inError: "Input required",
      });
    } else {
      this.props.showLoader();
      this.props.hideRegisterModal();
      const user = {
        firstName,
        lastName,
        email,
        phone,
        password,
        countryId,
      };

      this.props.signup(user);
    }
  };

  render() {
    const { classes } = this.props;
    // if(this.state.open) {
    //   this.props.history.push('/powerweb/signin')
    // }
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography type="" className={classes.title}>
              Register
            </Typography>
            <TextField
              helperText={this.state.inError}
              error={this.state.inError !== null}
              variant="outlined"
              id="firstname"
              label="First Name"
              className={classes.textField}
              value={this.state.firstName || ""}
              onChange={this.handleChange("firstName")}
              margin="normal"
            />{" "}
            <TextField
              helperText={this.state.inError}
              error={this.state.inError !== null}
              variant="outlined"
              id="lastname"
              label="Last Name"
              className={classes.textField}
              value={this.state.lastName || ""}
              onChange={this.handleChange("lastName")}
              margin="normal"
            />{" "}
            <br />
            <TextField
              helperText={this.state.inError}
              error={this.state.inError !== null}
              variant="outlined"
              id="email"
              label="Email"
              type="email"
              className={classes.textField}
              value={this.state.email || ""}
              onChange={this.handleChange("email")}
              margin="normal"
            />{" "}
            <br />
            <TextField
              helperText={this.state.inError}
              error={this.state.inError !== null}
              variant="outlined"
              id="mobile"
              label="Mobile"
              className={classes.textField}
              value={this.state.phone || ""}
              type="number"
              onChange={this.handleChange("phone")}
              margin="normal"
            />{" "}
            <br />
            <TextField
              helperText={this.state.inError}
              error={this.state.inError !== null}
              variant="outlined"
              id="password"
              label="Password"
              type="password"
              className={classes.textField}
              value={this.state.password || ""}
              onChange={this.handleChange("password")}
              margin="normal"
            />{" "}
            <br />
            {this.state.error && (
              <Typography component="p" color="error">
                {this.state.error}
              </Typography>
            )}
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              type="button"
              variant="contained"
              onClick={this.clickSubmit}
              className={classes.submit}
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authUser.isAuthenticated,
  authUser: state.authUser,
  error: state.error,
});

export default withRouter(
  connect(mapStateToProps, {
    signup,
    clearErrors,
    showLoader,
    hideLoader,
    hideRegisterModal,
  })(withStyles(styles)(Signup))
);
