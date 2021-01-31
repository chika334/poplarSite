import React from "react";

import { Grid, Container } from "@material-ui/core";

import Slider from "react-slick";

import illustration1 from "../../../assets/images/illustrations/pack1/time.svg";

export default function LivePreviewExample() {
  return (
    <>
      <Container className="text-black py-5">
        <Grid container spacing={6} className="py-5">
          <Grid
            item
            xl={6}
            className="px-0 d-none d-xl-flex align-items-center"
          >
            <img
              src={illustration1}
              className="w-100 mx-auto d-block img-fluid"
              alt="..."
            />
          </Grid>
          <Grid item xl={6}>
            <div className="d-block">
              <div className="text-black mt-3">
                <h1 className="display-2 mb-3 font-weight-bold">
                  {process.env.REACT_APP_NAME}
                </h1>
                <p className="font-size-lg text-black-50">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p className="text-black-50">
                  Fully coded, perfectly responsive on all screen sizes. Start
                  working on your project today!
                </p>
                <div className="d-block mt-4">
                  <Slider
                    slidesToShow={2}
                    slidesToScroll={2}
                    dots={true}
                    className="slick-slider slider-dots-outside slick-slider-left"
                  >
                    <div>
                      <div className="feature-box pr-4">
                        <h3 className="font-size-lg font-weight-bold my-3">
                          <a
                            className="text-first"
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                          >
                            Elements
                          </a>
                        </h3>
                        <p className="text-black-50 mb-3">
                          It takes a trivial example, which of us ever
                          undertakes.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="feature-box pr-4">
                        <h3 className="font-size-lg font-weight-bold my-3">
                          <a
                            className="text-first"
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                          >
                            Widgets
                          </a>
                        </h3>
                        <p className="text-black-50 mb-3">
                          Occur in which toil and pain can procure him some
                          great pleasure.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="feature-box pr-4">
                        <h3 className="font-size-lg font-weight-bold my-3">
                          <a
                            className="text-first"
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                          >
                            Components
                          </a>
                        </h3>
                        <p className="text-black-50 mb-3">
                          Nor again is there anyone who loves or pursues or
                          desires.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="feature-box pr-4">
                        <h3 className="font-size-lg font-weight-bold my-3">
                          <a
                            className="text-first"
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                          >
                            Pages
                          </a>
                        </h3>
                        <p className="text-black-50 mb-3">
                          On the other hand, we denounce with righteous
                          indignation.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
