import React, { Component } from "react";
import rccg from "../../../assets/images/product-logos/rccg.jpg";
import Ikeja from "../../../assets/images/product-logos/ikeja.png";
import eko from "../../../assets/images/product-logos/eko.jpg";
import dstv from "../../../assets/images/product-logos/dstv.jpg";
import { Card, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import Modal from "@material-ui/core/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "@material-ui/core/Typography";
import { signin } from "../../../_actions/userAction";
import { showLoader } from "../../../_actions/loading";
import { withRouter, Redirect } from "react-router-dom";
import { showServiceModal, showModal } from "../../../_actions/modal";
import {
  hideProductModal,
  showProductModal,
} from "../../../_actions/ProductLoginDisplay";
import { showProductDetailsModal } from "../../../_actions/ProductModal";
import Form from "../../../data/forms/Form";

const FORM_NAME = "loginForm";

const FourDetails = [
  {
    name: `${process.env.REACT_APP_RCCG}`,
    src: `${rccg}`,
    description: "(RCCG)",
  },
  {
    name: `${process.env.REACT_APP_IKEJA}`,
    src: `${Ikeja}`,
    description: "(IKEDC)",
  },
  {
    name: `${process.env.REACT_APP_EKO}`,
    src: `${eko}`,
    description: "(EKEDC)",
  },
  {
    name: `${process.env.REACT_APP_DSTV}`,
    src: `${dstv}`,
    description: "(DSTV)",
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

  componentDidUpdate(prevProps) {
    const { error, authUser, success } = this.props;
    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "LOGIN_FAIL") {
        // this.props.hideLoader();
        this.setState({ error: error.message.message });
      }
    }
  }

  // check = () => {
  //   const { authUser } = this.props;
  //   if (authUser) {
  //     // this.props.hideLoader();
  //     // this.props.hideModal();
  //     const redirect = localStorage.getItem("redirectPage");
  //     this.props.history.push(`${process.env.REACT_APP_URL}${redirect}`);
  //     // window.location.href = `${process.env.REACT_APP_URL}/profilepage`;
  //     // <Redirect to={`/profilepage`} />
  //   }
  // };

  FillForm = (props) => {
    const { authUser } = this.props;
    if (
      localStorage.getItem("ProductTitle") === "IKEJA ELECTRIC" ||
      localStorage.getItem("ProductTitle") === "EKO ELECTRIC" ||
      localStorage.getItem("ProductTitle") === "DSTV Subscription"
    ) {
      this.props.showServiceModal();
    } else {
      if (this.props.authUser || localStorage.token) {
        // this.props.hideModal();
        const redirect = localStorage.getItem("redirectPage");
        this.props.history.push(`${process.env.REACT_APP_URL}${redirect}`);
      } else {
        this.props.showModal();
      }
    }
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

  componentDidMount() {
    if (this.props.authUser) {
      const redirect = localStorage.getItem("redirectPage");
      this.props.history.push(`${process.env.REACT_APP_URL}${redirect}`);
    }
  }

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
                    <p className="m-auto d-flex align-items-center justify-content-center p-50 color-grey">
                      {allDetails.description}
                    </p>
                    <div className="d-flex align-items-center justify-content-center m-2">
                      <Button
                        id="buttonClicked"
                        style={{ backgroundColor: "#048cfc", color: "#fff" }}
                        className="rounded-sm mr-3 text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm"
                        onClick={(e) => {
                          localStorage.setItem("redirectPage", `/buyProducts`);
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
                  </div>
                </Card>
              </div>
            ))}
          </Grid>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser.isAuthenticated,
  error: state.error,
  success: state.buyToken,
});

export default withRouter(
  connect(mapStateToProps, {
    signin,
    showLoader,
    showModal,
    showServiceModal,
    hideProductModal,
    showProductModal,
    showProductDetailsModal,
  })(ProductDisplay)
);
