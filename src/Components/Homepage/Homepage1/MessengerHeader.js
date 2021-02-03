import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { Collapse, Container, Button, List, ListItem } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { showModal, hideModal } from "../../../_actions/modal";
import { showRegisterModal } from "../../../_actions/registerModal";
import Logout from "../../Logout/Logout";

class MessengerHeader extends Component {
  state = {
    collapse: false,
    to: "",
    from: "",
  };

  toggle = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  good = (e) => {
    e.preventDefault();
    if (this.props.authUser || localStorage.token) {
      this.props.hideModal();
      this.props.history.push(`${process.env.REACT_APP_URL}/profilepage`);
    } else if (localStorage.token) {
      this.props.hideModal();
      this.props.history.push(`${process.env.REACT_APP_URL}/settings`);
    } else {
      this.props.showModal();
    }
  };

  login = (e) => {
    e.preventDefault();
    this.props.showModal();
  };

  register = (e) => {
    e.preventDefault();
    this.props.showRegisterModal();
  };

  product = (e) => {
    e.preventDefault();
    if (this.props.authUser || localStorage.token) {
      const redirect = localStorage.getItem("products");
      this.props.history.push(`${process.env.REACT_APP_URL}${redirect}`);
      // this.props.showModal();
      // this.props.hideModal();
      // this.props.history.push(`${process.env.REACT_APP_URL}/PageProfile`);
    } else {
    }
  };

  render() {
    return (
      <>
        <Container>
          <div className="bg-white p-2 shadow-xxl header-nav-wrapper header-nav-wrapper-xl rounded-bottom px-4 navbar-light">
            <div className="app-nav-logo">
              <NavLink
                to={`${process.env.REACT_APP_URL}`}
                title="Bamburgh React Messenger Application with Material-UI PRO"
                className="app-nav-logo app-nav-logo--dark"
              >
                <div className="app-nav-logo--text">
                  <span style={{ color: `rgb(0, 68, 116)` }}>Poplar</span>
                  <span style={{ color: `rgb(242, 106, 6)` }}>power</span>
                </div>
              </NavLink>
            </div>
            <div className="header-nav-menu d-none d-lg-block">
              <ul className="d-flex nav nav-neutral-first justify-content-center">
                <li>
                  <NavLink
                    to={`${process.env.REACT_APP_URL}`}
                    className="font-weight-bold rounded-sm px-3"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <Button
                    onClick={(e) => {
                      if (this.props.authUser) {
                        this.props.history.push(
                          `${process.env.REACT_APP_URL}/profilepage`
                        );
                      } else {
                        this.good(e);
                        localStorage.setItem("redirectPage", "/profilepage");
                      }
                    }}
                    className="font-weight-bold rounded-sm px-3"
                  >
                    Profile
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={(e) => {
                      if (this.props.authUser) {
                        this.props.history.push(
                          `${process.env.REACT_APP_URL}/settings`
                        );
                      } else {
                        this.good(e);
                        localStorage.setItem("redirectPage", "/settings");
                      }
                    }}
                    className="font-weight-bold rounded-sm px-3"
                  >
                    Settings
                  </Button>
                </li>
                <li>
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="font-weight-bold rounded-sm px-3"
                  >
                    Products
                    <span className="opacity-5 dropdown-arrow">
                      <FontAwesomeIcon icon={["fas", "angle-down"]} />
                    </span>
                  </a>
                  <div className="submenu-dropdown submenu-dropdown--md">
                    <div className="shadow-lg w-100 bg-deep-sky p-4 rounded">
                      <div className="px-4 text-uppercase pb-2 text-white font-weight-bold font-size-sm">
                        Our Products
                      </div>
                      <List
                        component="div"
                        className="nav-pills nav-transparent nav-pills-rounded flex-column"
                      >
                        <ListItem
                          component="a"
                          button
                          onClick={(e) => {
                            if (this.props.authUser) {
                              this.props.history.push(
                                `${process.env.REACT_APP_URL}/electric`
                              );
                            } else {
                              this.product(e);
                              localStorage.setItem("products", "electric");
                            }
                          }}
                          target="_blank"
                          className="px-4 text-white-50 d-flex align-items-center"
                        >
                          <span>Electric</span>
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          onClick={(e) => {
                            if (this.props.authUser) {
                              this.props.history.push(
                                `${process.env.REACT_APP_URL}/water`
                              );
                            } else {
                              this.product(e);
                              localStorage.setItem("products", "/water");
                            }
                          }}
                          target="_blank"
                          className="px-4 d-flex text-white-50 align-items-center"
                        >
                          <span>Water</span>
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          button
                          onClick={(e) => {
                            if (this.props.authUser) {
                              this.props.history.push(
                                `${process.env.REACT_APP_URL}/cable`
                              );
                            } else {
                              this.product(e);
                              localStorage.setItem("products", "/cable");
                            }
                          }}
                          // selected
                          className="px-4 d-flex text-white-50 align-items-center"
                        >
                          <span>Cable</span>
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          onClick={(e) => {
                            if (this.props.authUser) {
                              this.props.history.push(
                                `${process.env.REACT_APP_URL}/airtime`
                              );
                            } else {
                              this.product(e);
                              localStorage.setItem("products", "/airtime");
                            }
                          }}
                          className="px-4 d-flex text-white-50 align-items-center"
                        >
                          <span>Airtime</span>
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          onClick={(e) => {
                            if (this.props.authUser) {
                              this.props.history.push(
                                `${process.env.REACT_APP_URL}/data`
                              );
                            } else {
                              this.product(e);
                              localStorage.setItem("products", "data");
                            }
                          }}
                          className="px-4 d-flex text-white-50 align-items-center"
                        >
                          <span>Data</span>
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          onClick={(e) => {
                            if (this.props.authUser) {
                              this.props.history.push(
                                `${process.env.REACT_APP_URL}/transfer`
                              );
                            } else {
                              this.product(e);
                              localStorage.setItem("products", "/transfer");
                            }
                          }}
                          className="px-4 d-flex text-white-50 align-items-center"
                        >
                          <span>Bank Transfer</span>
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          onClick={(e) => {
                            if (this.props.authUser) {
                              this.props.history.push(
                                `${process.env.REACT_APP_URL}/deposits`
                              );
                            } else {
                              this.product(e);
                              localStorage.setItem("products", "/deposits");
                            }
                          }}
                          // onClick={(e) => e.preventDefault()}
                          className="px-4 d-flex text-white-50 align-items-center"
                        >
                          <span>Deposits</span>
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                      </List>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
              <span className="d-none d-lg-block">
                {this.props.authUser ? (
                  <Logout />
                ) : (
                  <>
                    <Button
                      onClick={(e) => {
                        this.login(e);
                      }}
                      className="rounded-sm mr-3 text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-first"
                    >
                      Login
                    </Button>
                    <Button
                      onClick={(e) => {
                        this.register(e);
                      }}
                      className="rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-first"
                    >
                      Register
                    </Button>
                  </>
                )}
              </span>
              <span className="d-block d-lg-none">
                <button
                  onClick={this.toggle}
                  className={clsx(
                    "navbar-toggler hamburger hamburger--elastic",
                    {
                      "is-active": this.state.collapse,
                    }
                  )}
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </span>
            </div>
            <div className="d-flex d-lg-none">
              <Collapse
                in={this.state.collapse}
                className="nav-collapsed-wrapper navbar-collapse"
              >
                <div className="nav-inner-wrapper">
                  <Button
                    onClick={this.toggle}
                    className="btn-danger btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0"
                  >
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={["fas", "times"]} />
                    </span>
                  </Button>

                  <div className="p-3">
                    <div className="px-4 text-uppercase py-2 text-second font-weight-bold font-size-sm">
                      {process.env.REACT_APP_NAME}
                    </div>
                    <List
                      component="div"
                      className="nav-pills nav-neutral-primary nav-pills-rounded flex-column"
                    >
                      <ListItem
                        button
                        component={NavLink}
                        to={`${process.env.REACT_APP_URL}`}
                        className="px-4 d-flex align-items-center"
                      >
                        <span>Home</span>
                        <FontAwesomeIcon
                          icon={["fas", "angle-right"]}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        button
                        component={Button}
                        onClick={(e) => {
                          if (this.props.authUser) {
                            this.props.history.push(
                              `${process.env.REACT_APP_URL}/profilepage`
                            );
                          } else {
                            this.good(e);
                            localStorage.setItem(
                              "redirectPage",
                              "/profilepage"
                            );
                          }
                        }}
                        className="px-4 d-flex w-100 align-items-center"
                      >
                        Profile
                        <FontAwesomeIcon
                          icon={["fas", "angle-right"]}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        button
                        component={Button}
                        onClick={(e) => {
                          if (this.props.authUser) {
                            this.props.history.push(
                              `${process.env.REACT_APP_URL}/settings`
                            );
                          } else {
                            this.good(e);
                            localStorage.setItem("redirectPage", "/settings");
                          }
                        }}
                        className="px-4 d-flex w-100 align-items-center"
                      >
                        <span>Settings</span>
                        <FontAwesomeIcon
                          icon={["fas", "angle-right"]}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                    </List>
                  </div>
                  <div className="divider" />
                  <div className="m-3">
                    <div className="bg-second px-3 py-4 rounded">
                      <div className="px-4 text-uppercase pb-2 text-white font-weight-bold font-size-sm">
                        Our Products
                      </div>
                      <List
                        component="div"
                        className="nav-pills nav-transparent nav-pills-rounded flex-column"
                      >
                        <ListItem
                          component="a"
                          button
                          onClick={(e) => {
                            if (this.props.authUser) {
                              this.props.history.push(
                                `${process.env.REACT_APP_URL}/electric`
                              );
                            } else {
                              this.product(e);
                              localStorage.setItem("products", "/electric");
                            }
                          }}
                          target="_blank"
                          className="px-4 text-white-50 d-flex align-items-center"
                        >
                          <span>Electric</span>
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          onClick={(e) => {
                            if (this.props.authUser) {
                              this.props.history.push(
                                `${process.env.REACT_APP_URL}/water`
                              );
                            } else {
                              this.product(e);
                              localStorage.setItem("products", "/water");
                            }
                          }}
                          target="_blank"
                          className="px-4 d-flex text-white-50 align-items-center"
                        >
                          <span>Water</span>
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          button
                          onClick={(e) => {
                            if (this.props.authUser) {
                              this.props.history.push(
                                `${process.env.REACT_APP_URL}/cable`
                              );
                            } else {
                              this.product(e);
                              localStorage.setItem("products", "/cable");
                            }
                          }}
                          className="px-4 d-flex text-white-50 align-items-center"
                        >
                          <span>Cable</span>
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          onClick={(e) => {
                            if (this.props.authUser) {
                              this.props.history.push(
                                `${process.env.REACT_APP_URL}/airtime`
                              );
                            } else {
                              this.product(e);
                              localStorage.setItem("products", "/airtime");
                            }
                          }}
                          className="px-4 d-flex text-white-50 align-items-center"
                        >
                          <span>Airtime</span>
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          onClick={(e) => {
                            if (this.props.authUser) {
                              this.props.history.push(
                                `${process.env.REACT_APP_URL}/transfer`
                              );
                            } else {
                              this.product(e);
                              localStorage.setItem("products", "/transfer");
                            }
                          }}
                          className="px-4 d-flex text-white-50 align-items-center"
                        >
                          <span>Bank Transfer</span>
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          onClick={(e) => {
                            if (this.props.authUser) {
                              this.props.history.push(
                                `${process.env.REACT_APP_URL}/deposits`
                              );
                            } else {
                              this.product(e);
                              localStorage.setItem("products", "/deposits");
                            }
                          }}
                          className="px-4 d-flex text-white-50 align-items-center"
                        >
                          <span>Deposits</span>
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                      </List>
                    </div>
                  </div>
                  <div className="divider" />
                  {this.props.authUser ? (
                    <List>
                      <ListItem className="px-4 d-flex w-100 align-items-center">
                        <Logout>
                          <FontAwesomeIcon
                            icon={["fas", "angle-right"]}
                            className="opacity-6 ml-auto"
                          />
                        </Logout>
                      </ListItem>
                    </List>
                  ) : (
                    <List>
                      <ListItem
                        button
                        component={Button}
                        onClick={(e) => {
                          this.login(e);
                        }}
                        className="px-4 d-flex w-100 align-items-center"
                      >
                        <span>Login</span>
                        <FontAwesomeIcon
                          icon={["fas", "angle-right"]}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        button
                        component={Button}
                        onClick={(e) => {
                          this.register(e);
                        }}
                        className="px-4 d-flex w-100 align-items-center"
                      >
                        <span>Register</span>
                        <FontAwesomeIcon
                          icon={["fas", "angle-right"]}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                    </List>
                  )}
                </div>
              </Collapse>
            </div>
          </div>
        </Container>
        <div
          className={clsx("collapse-page-trigger", {
            "is-active": this.state.collapse,
          })}
          onClick={this.toggle}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser.isAuthenticated,
  to: state.showModal,
});

export default withRouter(
  connect(mapStateToProps, { showModal, hideModal, showRegisterModal })(
    MessengerHeader
  )
);
