import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import rccg from "../../assets/images/product-logos/rccg.jpg";
import Grid from "@material-ui/core/Grid";
import { Container, Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputAdornment, TextField } from "@material-ui/core";
import Loader from "../../Components/Loader/Loader";
import PersonIcon from "@material-ui/icons/Person";
import DialpadOutlinedIcon from "@material-ui/icons/DialpadOutlined";
import { clearErrors } from "../../_actions/errorAction";
import { token } from "../../_actions/tokenAction";
import { showLoader, hideLoader } from "../../_actions/loading";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import MessengerHeader from "../../Components/Homepage/Homepage1/MessengerHeader";

const styles = (theme) => ({
  card: {
    width: "50px",
  },
  title: {
    margin: "auto",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "70px",
    color: theme.palette.text.secondary,
  },
  titles: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
  },
  paddedAll: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  centerImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

const sidebarItem = [
  {
    name: "RCCG Electric",
    src: `${rccg}`,
  },
  {
    name: "ABUJA Electric",
    src: `${rccg}`,
  },
  {
    name: "KANO Electric",
    src: `${rccg}`,
  },
  {
    name: "EKO Electric",
    src: `${rccg}`,
  },
  {
    name: "KADUNA ELectric",
    src: `${rccg}`,
  },
];

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      title: "",
      show: false,
      accountNumber: "",
      phoneNo: "",
      amount: "",
      productCode: "rccg-power-12",
      customerId: "",
      fullname: "",
      error: "",
    };
  }

  static propTypes = {
    token: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, authUser } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "BUYTOKEN_FAIL") {
        this.props.hideLoader();
        this.setState({ error: error.message.message });
      }
    } else {
      if (authUser === true) {
        localStorage.setItem("LoggedPage", "LoggedPage");
        this.goods();
      }
      this.sendRedirect();
    }
  }

  goods = () => {
    const { authUser } = this.props;
    const pages = localStorage.getItem("LoggedPage");
    if (authUser && pages) {
      this.payBills();
    }
  };

  payBills = () => {
    const { authUser, success } = this.props;
    const pages = localStorage.getItem("LoggedPage");
    const {
      accountNumber,
      amount,
      fullname,
      productCode,
      customerId,
    } = this.state;

    const buyToken = {
      productCode,
      fullname,
      amount,
      accountNumber,
      customerId,
    };
    // if user is authenticated
    if (authUser === true && pages) {
      if (authUser && this.state.wantToPay) {
        // console.log("authUser @ payBills", authUser);
        this.props.showLoader();
        this.props.token(buyToken);
        this.setState({ wantToPay: false });
      }
      if (success.success) {
        //if success.success === true
        // console.log("Success", success);
        this.props.hideLoader();
        console.log("success", success.success);
        this.props.history.push(`${process.env.REACT_APP_URL}/buytoken`);
      }
      if (success.success === false && this.state.wantToPay === false) {
        const { error } = this.props;
        this.setState({ error: error.message.message });
      }
    }
  };

  sendRedirect = () => {
    setTimeout(() => {
      this.props.clearErrors();
    }, 5000);
  };

  Product = (props) => {
    this.setState({ show: true, image: props.image, title: props.title });
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  submit = (e) => {
    e.preventDefault();
    const { authUser } = this.props;
    const {
      accountNumber,
      amount,
      fullname,
      productCode,
      customerId,
    } = this.state;

    const buyToken = {
      productCode,
      fullname,
      amount,
      accountNumber,
      customerId,
    };

    if (authUser) {
      // this.payBills()
      this.props.showLoader();
      this.props.token(buyToken);
    } else {
      this.setState({ wantToPay: true });
      // this.handleOpen();
    }
  };

  hideModal = () => {
    // console.log("MODAL");
    this.setState({ show: false });
  };

  render() {
    const { classes } = this.props;
    const body = (
      <div className="card pl-3 pr-3 align-items-center">
        <div style={{ position: "relative", left: "150px" }}>
          <Button onClick={this.hideModal} className="px-4 text-dark-50 mt-3">
            <FontAwesomeIcon icon={["fas", "times"]} />
          </Button>
        </div>
        <div className="app-wrapper bg-white">
          <Loader />
          <div className="hero-wrapper w-100">
            <div className="flex-grow-1 w-100 align-items-center">
              <div>
                <div className="divider-v divider-v-lg d-none d-lg-block" />
                <div className="text-center mt-3">
                  <img width="100" src={rccg} alt="rccg" />
                  <h1 className="font-size-xxl mb-1 font-weight-bold">
                    {process.env.REACT_APP_RCCG}
                  </h1>
                  <p className="mb-0 text-black-50">
                    Fill in the fields below to pay your{" "}
                    <span className="text-lowercase">
                      {process.env.REACT_APP_RCCG}
                    </span>
                  </p>
                </div>
                <div className="py-4">
                  <div>
                    <div className="mb-3">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div className="mt-3">
        <Container>
          <h3>Data</h3>
          <div className="row">
            <Grid>
              {sidebarItem.map((allDetails, index) => (
                // <Grid container justify="center" spacing={3}>
                <div key={index} className="column p-3">
                  <Button
                    onClick={(e) => {
                      this.Product({
                        image: allDetails.src,
                        title: allDetails.name,
                      });
                    }}
                  >
                    <Card className="card p-4 mt-5">
                      <h3 className={classes.titles}>{allDetails.name}</h3>
                      <div className={classes.centerImage}>
                        <img width="65" src={allDetails.src} alt="src" />
                      </div>
                      <h3 className={classes.titles}>{allDetails.figure}</h3>
                    </Card>
                  </Button>
                </div>
                // </Grid>
              ))}
            </Grid>
          </div>
        </Container>
        <Modal
          open={this.state.show}
          onClose={this.hideModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className="pt-4 pb-4 d-flex align-item-center justify-content-center"
        >
          <>{body}</>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser.isAuthenticated,
  success: state.buyToken,
  error: state.error,
});

export default withRouter(
  connect(mapStateToProps, {
    showLoader,
    hideLoader,
    token,
    clearErrors,
  })(withStyles(styles)(Data))
);
