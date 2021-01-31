import React from "react";

import { Grid, Container } from "@material-ui/core";

import { Tab } from "../../../layout-components";

import particles1 from "../../../assets/images/hero-bg/particles-2.svg";
import MessengerHeader from "./MessengerHeader.js";

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-light">
        <div className="header-top-section pb-2">
          <MessengerHeader />
        </div>
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image opacity-5"
            style={{ backgroundImage: "url(" + particles1 + ")" }}
          />
          <div className="bg-composed-wrapper--bg bg-white opacity-5" />
          <div className="bg-composed-wrapper--content">
            <div className="py-5">
              <Container className="text-black text-center py-5">
                <Grid item md={10} lg={8} className="mx-auto pb-4">
                  <h2 className="display-3 px-4 font-weight-bold">
                    {process.env.REACT_APP_NAME}
                  </h2>
                  <p className="font-size-xl mt-3 mb-0 text-black-50">
                    {process.env.REACT_APP_HERO_TEXT}
                  </p>
                </Grid>
                <div className="divider mx-5 mt-4" />
                <div className="d-flex flex-row flex-wrap justify-content-center">
                  <div className="position-relative py-3 py-xl-4 px-4 px-xl-5">
                    <div className="divider-v divider-v-lg" />
                    {/* all tabs */}
                    <Tab />
                  </div>
                </div>
                <div className="divider mx-5 mb-4" />
              </Container>
            </div>
          </div>
        </div>
        {/* <div className="hero-footer pb-5">
          <Container>
            <Grid container spacing={6}>
              <Grid item md={6} xl={4}>
                <Card className="card-box-hover card-box-alt card-border-top border-success mb-5 pb-4 bg-white shadow-xxl">
                  <h3 className="font-size-xl font-weight-bold mt-5 mb-4">
                    Real-time Messages
                  </h3>
                  <p className="text-dark px-4 mb-4">
                    Fully coded, perfectly responsive on all screen sizes. Start
                    working on your project today!
                  </p>
                  <Button
                    component="a"
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="btn-link btn-link-success mb-2 p-0"
                    title="Find out more"
                  >
                    <span>Find out more</span>
                  </Button>
                </Card>
              </Grid>
              <Grid item md={6} xl={4}>
                <Card className="card-box-hover card-box-alt card-border-top border-first mb-5 pb-4 bg-white shadow-xxl">
                  <h3 className="font-size-xl font-weight-bold mt-5 mb-4">
                    Upload Libraries
                  </h3>
                  <p className="text-dark px-4 mb-4">
                    Fully coded, perfectly responsive on all screen sizes. Start
                    working on your project today!
                  </p>
                  <Button
                    component="a"
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="btn-link btn-link-first mb-2 p-0"
                    title="Find out more"
                  >
                    <span>Find out more</span>
                  </Button>
                </Card>
              </Grid>
              <Grid item md={6} xl={4} className="d-none d-xl-block">
                <Card className="card-box-hover card-box-alt card-border-top border-warning mb-5 pb-4 bg-white shadow-xxl">
                  <h3 className="font-size-xl font-weight-bold mt-5 mb-4">
                    Custom Profiles
                  </h3>
                  <p className="text-dark px-4 mb-4">
                    Fully coded, perfectly responsive on all screen sizes. Start
                    working on your project today!
                  </p>
                  <Button
                    component="a"
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="btn-link btn-link-warning mb-2 p-0"
                    title="Find out more"
                  >
                    <span>Find out more</span>
                  </Button>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div> */}
      </div>
    </>
  );
}
