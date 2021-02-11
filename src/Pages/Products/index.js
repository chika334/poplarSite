import React, { Component } from "react";
import Airtime from "./Airtime";
import Data from "./Data";
import Cable from "./Cable";
import Deposits from "./Deposit";
import Electric from "./Electric";
import Transfer from "./Transfer";
import Water from "./Water";
import Container from "@material-ui/core/Container";
import MessengerHeader from "../../Components/Homepage/Homepage1/MessengerHeader";
import Typography from "@material-ui/core/Typography";

class Products extends Component {
  render() {
    return (
      <div className="hero-wrapper bg-composed-wrapper bg-light">
        <div className="header-top-section pb-5">
          <MessengerHeader />
        </div>
        <h3 className="">Our Products</h3>
        <Container>
          {/* <hr className="mb-5 pb-5" /> */}
          <Electric />
          <hr className="mb-5 pb-5" />
          <Airtime />
          <hr className="mb-5 pb-5" />
          <Data />
          <hr className="mb-5 pb-5" />
          <Cable />
          <hr className="mb-5 pb-5" />
          <Deposits />
          <hr className="mb-5 pb-5" />
          <Transfer />
          <hr className="mb-5 pb-5" />
          <Water />
        </Container>
      </div>
    );
  }
}

export default Products;
