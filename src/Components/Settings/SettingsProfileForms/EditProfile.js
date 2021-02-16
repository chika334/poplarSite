import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
// import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import { EditProfile } from "../../../_actions/userAction";
// import { clearErrors } from "../../../_actions/errorAction";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
// import Icon from "@material-ui/core/Icon";
import Alert from "@material-ui/lab/Alert";
import { showLoader, hideLoader } from "../../../_actions/loading";
import Loader from "../../../Components/Loader/Loader";
// import loading from "../../../_reducer/loading";

const styles = (theme) => ({
  // root: {
  //   width: "100%",
  //   [theme.breakpoints.down("sm")]: {
  //     width: "100%",
  //   },
  // },
  root: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      // width: "100%",
    },
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  card: {
    width: "100%",
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
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
    [theme.breakpoints.down("sm")]: {
      width: 200,
    },
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

class VerticalLinearStepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      firstName: "",
      lastName: "",
      phone: "",
      bizType: 2,
      position: 1,
      companyName: "",
      contactEmail: "",
      contactPhone: "",
      success: "Successfully Editted Profile Details",
      // error: "",
      open: true,
    };
  }

  componentDidUpdate(prevProps) {
    const { error, authUser } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "EDITPROFILE_FAIL") {
        this.props.hideLoader();
        this.setState({ error: error.message.message });
      }
    } else {
      if (authUser.editSuccess === true) {
        this.props.hideLoader();
        // alert(this.state.success)
        localStorage.setItem("Success", true);
        // setTimeout(() => {
        //   localStorage.removeItem("Success", true);
        // }, 3000);
        // console.log("DANIEL");
      }
      // this.check();
    }
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    authUser: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    EditProfile: PropTypes.func.isRequired,
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleNumberChange = (name) => (event) => {
    this.setState({ [name]: event.target.value.replace(/\D/, "") });
  };

  clickSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      phone,
      bizType,
      position,
      companyName,
      contactEmail,
      contactPhone,
    } = this.state;

    const user = {
      firstName,
      lastName,
      phone,
      bizType,
      position,
      companyName,
      contactEmail,
      contactPhone,
    };

    this.props.showLoader();
    this.props.EditProfile(user);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          {this.props.authUser.editSuccess === true && localStorage.Success ? (
            <Alert severity="success">{this.state.success}</Alert>
          ) : (
            ""
          )}
          <Loader />
          <CardContent>
            {/* <Typography type="h1" className={classes.title}>
              Edit Profile
            </Typography> */}
            <h3>Edit Profile</h3>
            <TextField
              id="firstName"
              label="First Name"
              type="text"
              className={classes.textField}
              value={this.state.firstName}
              onChange={this.handleChange("firstName")}
              margin="normal"
            />{" "}
            <br />
            <TextField
              id="lastName"
              label="Last Name"
              type="text"
              className={classes.textField}
              value={this.state.lastName}
              onChange={this.handleChange("lastName")}
              margin="normal"
            />{" "}
            <br />
            <TextField
              id="phone"
              label="Phone"
              type="number"
              className={classes.textField}
              value={this.state.phone}
              onChange={this.handleChange("phone")}
              margin="normal"
            />{" "}
            <br />
            <TextField
              id="companyName"
              label="Company Name"
              type="text"
              className={classes.textField}
              value={this.state.companyName}
              onChange={this.handleChange("companyName")}
              margin="normal"
            />{" "}
            <br />
            <TextField
              id="contactEmail"
              label="Contact Email"
              type="email"
              className={classes.textField}
              value={this.state.contactEmail}
              onChange={this.handleChange("contactEmail")}
              margin="normal"
            />{" "}
            <br />
            <TextField
              id="contactPhone"
              label="Contact Phone"
              type="number"
              className={classes.textField}
              value={this.state.contactPhone}
              onChange={this.handleChange("contactPhone")}
              margin="normal"
            />{" "}
            <br />
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              // color="primary"
              style={{ backgroundColor: "#048cfc", color: "#fff" }}
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
  loading: state.loading,
});

export default connect(mapStateToProps, {
  EditProfile,
  showLoader,
  hideLoader,
})(withStyles(styles)(VerticalLinearStepper));
