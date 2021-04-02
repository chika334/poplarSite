import React, { useState } from "react";
import { Grid, Container } from "@material-ui/core";
// import rccg from "../../../assets/images/product-logos/rccg.jpg";
// import Ikeja from "../../../assets/images/product-logos/ikeja.png";
// import eko from "../../../assets/images/product-logos/eko.jpg";
// import dstv from "../../../assets/images/product-logos/dstv.jpg";
// import { Tab } from "../../../layout-components";
// import Card from "@material-ui/core/Card";
import particles1 from "../../../assets/images/hero-bg/particles-2.svg";
// import MessengerHeader from "./MessengerHeader.js";
// import { InputAdornment, Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { showModal, hideModal } from "../../../_actions/modal";
import Modal from "../../../layout-components/LoginModal";
import ProductDisplay from "./ProductDisplay";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LivePreviewExample(props) {
  const authUser = useSelector((state) => state.authUser.isAuthenticeated);
  const [values, setValues] = useState({
    image: "",
    title: "",
    show: false,
    open: false,
    accountNumber: "",
    phoneNo: "",
    amount: "",
    productCode: "rccg-power-12",
    customerId: "",
    fullname: "",
    error: "",
  });

  const {
    image,
    title,
    show,
    accountNumber,
    phoneNo,
    amount,
    productCode,
    customerId,
    fullname,
    error,
  } = values;

  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-light">
        {/* <div className="header-top-section pb-2">
          <MessengerHeader />
        </div> */}
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image opacity-5"
            style={{ backgroundImage: "url(" + particles1 + ")" }}
          />
          <Modal />
          <div className="bg-composed-wrapper--bg bg-white opacity-5" />
          <div className="bg-composed-wrapper--content">
            <div className="py-3">
              <Container className="text-black text-center py-2">
                <Grid item md={10} lg={8} className="mx-auto pb-2">
                  {/* <h2 className="display-3 px-4 font-weight-bold">
                    {process.env.REACT_APP_NAME}
                  </h2> */}
                  <p className="font-size-xl mt-3 mb-0 text-black-50">
                    {process.env.REACT_APP_HERO_TEXT}
                  </p>
                </Grid>
                <div className="divider mx-5 mt-4" />
                <div className="d-flex flex-row flex-wrap justify-content-center">
                  <div className="position-relative py-3 py-xl-4 px-4 px-xl-5">
                    <div className="divider-v divider-v-lg" />
                    <ProductDisplay />
                  </div>
                </div>
                <div className="divider mx-5 mb-4" />
              </Container>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center pt-3">
        Check out our other products
        <Link to={`${process.env.REACT_APP_URL}/products`}>
          <FontAwesomeIcon
            className="ml-3"
            style={{ color: "#048cfc" }}
            icon={["fas", "arrow-right"]}
          />
        </Link>
      </p>
    </>
  );
}

export default connect(null, { showModal, hideModal })(LivePreviewExample);
