import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Container,
  Card,
  Button,
  List,
  ListItem
} from '@material-ui/core';

import hero2 from '../../../assets/images/hero-bg/hero-2.jpg';

import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

import particles3 from '../../../assets/images/hero-bg/particles-2.svg';

import logo1 from '../../../assets/images/stock-logos/netflix.svg';
import logo2 from '../../../assets/images/stock-logos/airbnb.svg';
import logo3 from '../../../assets/images/stock-logos/instagram.svg';
import logo4 from '../../../assets/images/stock-logos/slack.svg';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';
import stock4 from '../../../assets/images/stock-photos/stock-4.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Container>
        <Grid container spacing={6} className="py-5 my-5 no-gutters">
          <Grid
            item
            xl={6}
            className="hero-wrapper rounded bg-composed-wrapper bg-serious-blue">
            <div className="hero-wrapper--content rounded">
              <div
                className="bg-composed-wrapper--image rounded bg-composed-filter-rm"
                style={{ backgroundImage: 'url(' + hero2 + ')' }}
              />
              <div className="bg-composed-wrapper--bg rounded bg-second opacity-4" />
              <div className="bg-composed-wrapper--content p-4 p-xl-0">
                <Grid item lg={10} xl={9} className="p-0 mx-auto">
                  <Card className="overflow-visible">
                    <List component="div" className="list-group-flush">
                      <ListItem
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="d-flex bg-white hover-scale-rounded justify-content-between align-items-center py-3">
                        <div className="d-flex align-items-center">
                          <div className="avatar-icon-wrapper d-50 mr-3">
                            <div className="avatar-icon rounded-circle d-50">
                              <img alt="..." src={avatar6} />
                            </div>
                          </div>
                          <div>
                            <div className="font-weight-bold font-size-sm text-black">
                              Karla Byrne
                            </div>
                            <div className="d-flex align-items-center font-size-xs">
                              <div className="badge badge-success badge-circle border-white border-1 mr-2">
                                Completed
                              </div>
                              <div className="text-success">Online</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Button
                            size="small"
                            className="btn-neutral-dark px-3">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fas', 'plus']} />
                            </span>
                            <span className="btn-wrapper--label">Add</span>
                          </Button>
                        </div>
                      </ListItem>
                      <ListItem
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="d-flex bg-white hover-scale-rounded justify-content-between align-items-center py-3">
                        <div className="d-flex align-items-center">
                          <div className="avatar-icon-wrapper d-50 mr-3">
                            <div className="avatar-icon rounded-circle d-50">
                              <img alt="..." src={avatar5} />
                            </div>
                          </div>
                          <div>
                            <div className="font-weight-bold font-size-sm text-black">
                              Eden Hays
                            </div>
                            <div className="d-flex align-items-center font-size-xs">
                              <div className="badge badge-danger badge-circle border-white border-1 mr-2">
                                Completed
                              </div>
                              <div className="text-danger">Offline</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Button
                            size="small"
                            className="btn-neutral-dark px-3 disabled">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fas', 'plus']} />
                            </span>
                            <span className="btn-wrapper--label">Add</span>
                          </Button>
                        </div>
                      </ListItem>
                      <ListItem
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="d-flex bg-white hover-scale-rounded justify-content-between align-items-center py-3">
                        <div className="d-flex align-items-center">
                          <div className="avatar-icon-wrapper d-50 mr-3">
                            <div className="avatar-icon rounded-circle d-50">
                              <img alt="..." src={avatar4} />
                            </div>
                          </div>
                          <div>
                            <div className="font-weight-bold font-size-sm text-black">
                              Janine Benton
                            </div>
                            <div className="d-flex align-items-center font-size-xs">
                              <div className="badge badge-warning badge-circle border-white border-1 mr-2">
                                Completed
                              </div>
                              <div className="text-warning">In a meeting</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Button
                            size="small"
                            className="btn-neutral-dark px-3">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fas', 'plus']} />
                            </span>
                            <span className="btn-wrapper--label">Add</span>
                          </Button>
                        </div>
                      </ListItem>
                    </List>
                  </Card>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item xl={6} className="bg-white">
            <div className="p-3">
              <div className="p-0 p-lg-3">
                <h1 className="display-4 font-weight-bold mb-3">
                  Bamburgh React Messenger Application with Material-UI PRO
                </h1>
                <p className="font-size-lg text-black-50">
                  Regardless of the product type you&#39;re building, use this
                  template to build your product if it is the closest to your
                  needs. Together with the General interchangeable components
                  you will be able to create any layout you need.
                </p>
                <Grid container spacing={6} className="text-first mt-4">
                  <Grid item sm={6}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                        <FontAwesomeIcon icon={['fas', 'check']} />
                      </div>
                      <span className="pt-1">300+ components available</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                        <FontAwesomeIcon icon={['fas', 'check']} />
                      </div>
                      <span className="pt-1">UI Kit included</span>
                    </div>
                  </Grid>
                  <Grid item sm={6}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                        <FontAwesomeIcon icon={['fas', 'check']} />
                      </div>
                      <span className="pt-1">Unlimited custom options</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="d-30 rounded-pill btn-icon bg-neutral-first mr-2">
                        <FontAwesomeIcon icon={['fas', 'check']} />
                      </div>
                      <span className="pt-1">Multiple applications</span>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <div className="hero-wrapper bg-deep-sky pt-4 pt-xl-5 bg-composed-wrapper">
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-6"
            style={{ backgroundImage: 'url(' + particles3 + ')' }}
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
                    className="d-flex align-items-center">
                    <div className="text-center px-4 px-lg-0 text-lg-left">
                      <h2 className="display-3 font-weight-bold">
                        Bamburgh React Messenger Application with Material-UI
                        PRO
                      </h2>
                      <p className="font-size-xl py-3 text-white-50">
                        Regardless of the product type you&#39;re building, use
                        this template to build your product if it is the closest
                        to your needs. Together with the General interchangeable
                        components you will be able to create any layout you
                        need.
                      </p>
                      <div className="pt-3">
                        <Button
                          component="a"
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          size="large"
                          className="btn-pill shadow-second-sm btn-success">
                          <span className="btn-wrapper--label">
                            View all partners
                          </span>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                          </span>
                        </Button>
                        <Button
                          component="a"
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          size="large"
                          className="bg-white-10 text-white btn-pill ml-3">
                          <span>View details</span>
                        </Button>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    xl={7}
                    className="d-flex mt-5 mt-lg-0 align-items-center">
                    <Grid container spacing={6} className="justify-content-end">
                      <Grid item md={6} lg={5}>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card mt-4 shadow-sm-dark card-box-hover-rise mb-5">
                          <img
                            src={stock1}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="p-3 bg-secondary rounded text-center p-xl-4 d-flex align-items-center justify-content-center">
                            <img src={logo1} alt="..." style={{ height: 25 }} />
                          </div>
                        </a>
                      </Grid>
                      <Grid item md={6} lg={4}>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="card shadow-sm-dark card-box-hover-rise mb-5">
                          <img
                            src={stock2}
                            className="card-img-top"
                            alt="..."
                          />
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
                            className="card shadow-sm-dark card-box-hover-rise mb-5">
                            <img
                              src={stock3}
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
                          className="card shadow-sm-dark card-box-hover-rise mb-5">
                          <img
                            src={stock4}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="p-3 bg-secondary rounded text-center p-xl-4 d-flex align-items-center justify-content-center">
                            <img src={logo4} alt="..." style={{ height: 25 }} />
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
                  d="M0,256L26.7,213.3C53.3,171,107,85,160,85.3C213.3,85,267,171,320,176C373.3,181,427,107,480,85.3C533.3,64,587,96,640,106.7C693.3,117,747,107,800,96C853.3,85,907,75,960,58.7C1013.3,43,1067,21,1120,42.7C1173.3,64,1227,128,1280,144C1333.3,160,1387,128,1413,112L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
