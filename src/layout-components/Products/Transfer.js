import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import rccg from "../../assets/images/product-logos/rccg.jpg";
import Ikeja from "../../assets/images/product-logos/ikeja.png";
import eko from "../../assets/images/product-logos/eko.jpg";
// import dstv from "../../assets/images/product-logos/dstv.jpg";
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
import { hideModal } from "../../_actions/modal";
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
    name: `${process.env.REACT_APP_RCCG}`,
    src: `${rccg}`,
    figure: `${process.env.REACT_APP_RCCG}`,
    more: "Giving power to RCCG",
  },
  {
    name: `${process.env.REACT_APP_IKEJA}`,
    src: `${Ikeja}`,
    figure: `${process.env.REACT_APP_IKEJA}`,
    more: "Giving power to IKEJA",
  },
  {
    name: `${process.env.REACT_APP_EKO}`,
    src: `${eko}`,
    figure: `${process.env.REACT_APP_EKO}`,
    more: "Giving power to EKO",
  },
  {
    name: `${process.env.REACT_APP_ABUJA}`,
    src: `${rccg}`,
    figure: `${process.env.REACT_APP_ABUJA}`,
    more: "Giving power to ABUJA",
  },
  {
    name: "KADUNA ELECTRIC",
    src: `${Ikeja}`,
    figure: "KADUNA ELECTRIC",
    more: "Giving power to KADUNA",
  },
];

class Electric extends Component {
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
        this.props.showLoader();
        this.props.token(buyToken);
        this.setState({ wantToPay: false });
      }
      if (success.success) {
        this.props.hideLoader();
        // console.log("success", success.success);
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

  FillForm = (props) => {
    this.props.history.push(`${process.env.REACT_APP_URL}/buyProducts`);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="hero-wrapper bg-composed-wrapper bg-light">
        {/* <div className="header-top-section">
          <MessengerHeader />
        </div> */}
        <div className="mt-5 h-auto">
          <Container>
            <h3>Transfer</h3>
            <div className="row">
              <Grid container item xs={12} spacing={3}>
                {sidebarItem.map((allDetails, index) => (
                  <div key={index} className="column p-3">
                    <Card className="card p-2 bg-white w-80 h-100 mt-2">
                      <div className="h-30">
                        <div className="d-flex align-items-center justify-content-center w-100">
                          <img
                            width="68"
                            height="60"
                            src={allDetails.src}
                            alt="src"
                          />
                        </div>
                        <h5 className="m-auto d-flex align-items-center justify-content-center p-50 color-grey">
                          {allDetails.name}
                        </h5>
                        <br />
                      </div>
                      <hr />
                      <small className={classes.titles}>
                        {allDetails.figure}
                      </small>
                      <small className="m-auto d-flex align-items-center justify-content-center p-50 color-grey">
                        {allDetails.more}
                      </small>
                      <div className="d-flex align-items-center justify-content-center mt-3">
                        <Button
                          style={{ backgroundColor: "#048cfc", color: "#fff" }}
                          className="w-50"
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
          </Container>
        </div>
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
    hideModal,
    token,
    clearErrors,
  })(withStyles(styles)(Electric))
);
