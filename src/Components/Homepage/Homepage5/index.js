import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rccg from "../../../assets/images/product-logos/rccg.jpg";
import eko from "../../../assets/images/product-logos/eko.jpg";
import ikeja from "../../../assets/images/product-logos/ikeja.png";
import dstv from "../../../assets/images/product-logos/dstv.jpg";
import {
  Grid,
  Container,
  Card,
  Button,
  List,
  ListItem,
} from "@material-ui/core";
import hero2 from "../../../assets/images/hero-bg/hero-2.jpg";
import avatar4 from "../../../assets/images/avatars/avatar4.jpg";
import avatar5 from "../../../assets/images/avatars/avatar5.jpg";
import avatar6 from "../../../assets/images/avatars/avatar6.jpg";
import particles3 from "../../../assets/images/hero-bg/particles-2.svg";
import logo1 from "../../../assets/images/stock-logos/netflix.svg";
import logo2 from "../../../assets/images/stock-logos/airbnb.svg";
import logo3 from "../../../assets/images/stock-logos/instagram.svg";
import logo4 from "../../../assets/images/stock-logos/slack.svg";
import stock1 from "../../../assets/images/stock-photos/stock-1.jpg";
import stock2 from "../../../assets/images/stock-photos/stock-2.jpg";
import stock3 from "../../../assets/images/stock-photos/stock-3.jpg";
import stock4 from "../../../assets/images/stock-photos/stock-4.jpg";

export default function LivePreviewExample() {
  return (
    <>
      <div
        className="hero-wrapper pt-4 pt-xl-5 bg-composed-wrapper"
        style={{ backgroundColor: "#048cfc", color: "#fff" }}
      >
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-6"
            style={{ backgroundImage: "url(" + particles3 + ")" }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-4" />
          <div className="bg-composed-wrapper--content">
            <Container className="text-white py-5">
              <Container className="py-4">
                <Grid container spacing={6} className="pb-5">
                  <Grid
                    item
                    lg={6}
                    xl={5}
                    className="d-flex align-items-center"
                  >
                    <div className="text-center px-4 px-lg-0 text-lg-left">
                      <h2 className="display-3 font-weight-bold">
                        {`${process.env.REACT_APP_NAME}`} <br />
                      </h2>
                      <p className="font-size-xl py-3 text-white-50">
                        Payment made fast and reliable.
                        <br />
                        All Electric payments, Cable payments, Water payments
                      </p>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    xl={7}
                    className="d-flex mt-5 mt-lg-0 align-items-center"
                  >
                    <Grid container spacing={6} className="justify-content-end">
                      <Grid item md={6} lg={5}>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card mt-4 shadow-sm-dark card-box-hover-rise mb-5"
                        >
                          <img src={rccg} className="card-img-top" alt="..." />
                          <div className="p-3 bg-secondary rounded text-center p-xl-4 d-flex align-items-center justify-content-center">
                            <img src={logo1} alt="..." style={{ height: 25 }} />
                          </div>
                        </a>
                      </Grid>
                      <Grid item md={6} lg={4}>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card shadow-sm-dark card-box-hover-rise mb-5"
                        >
                          <img src={eko} className="card-img-top" alt="..." />
                          <div className="p-3 bg-secondary rounded text-center p-xl-4 d-flex align-items-center justify-content-center">
                            <img src={logo2} alt="..." style={{ height: 25 }} />
                          </div>
                        </a>
                      </Grid>
                      <Grid item md={6} lg={6}>
                        <div className="mb-3">
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="card shadow-sm-dark card-box-hover-rise mb-5"
                          >
                            <img
                              src={ikeja}
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="p-3 bg-secondary rounded text-center p-xl-4 d-flex align-items-center justify-content-center">
                              <img
                                src={logo3}
                                alt="..."
                                style={{ height: 25 }}
                              />
                            </div>
                          </a>
                        </div>
                      </Grid>
                      <Grid item md={6} lg={4}>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card shadow-sm-dark card-box-hover-rise mb-5"
                        >
                          <img src={dstv} className="card-img-top" alt="..." />
                          <div className="p-2 bg-secondary rounded text-center p-xl-4 d-flex align-items-center justify-content-center">
                            {/* <img src={logo4} alt="..." style={{ height: 25 }} /> */}
                            {`${process.env.REACT_APP_DSTV}`}
                          </div>
                        </a>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </Container>
            <div className="shape-container-top-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="var(--white)"
                  fillOpacity="1"
                  d="M0,256L26.7,213.3C53.3,171,107,85,160,85.3C213.3,85,267,171,320,176C373.3,181,427,107,480,85.3C533.3,64,587,96,640,106.7C693.3,117,747,107,800,96C853.3,85,907,75,960,58.7C1013.3,43,1067,21,1120,42.7C1173.3,64,1227,128,1280,144C1333.3,160,1387,128,1413,112L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
