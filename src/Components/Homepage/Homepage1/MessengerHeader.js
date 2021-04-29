import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter, Redirect } from "react-router-dom";
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
    click: false,
    closeMobileMenu: false,
  };

  toggle = (e) => {
    e.preventDefault();
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  closeMobileMenu = (e) => {
    this.setState({
      collapse: false,
    });
  };

  login = (e) => {
    e.preventDefault();
    this.props.showModal();
  };

  good = (e) => {
    e.preventDefault();
    if (this.props.authUser || localStorage.token) {
      this.props.hideModal();
      const redirect = localStorage.getItem("redirectPage");
      this.props.history.push(`${redirect}`);
    } else {
      this.props.showModal();
    }
  };

  register = (e) => {
    e.preventDefault();
    this.props.showRegisterModal();
  };

  product = (e) => {
    e.preventDefault();
    if (this.props.authUser || localStorage.token) {
      const redirect = localStorage.getItem("redirectPage");
      // this.props.history.push(`${redirect}`);
      // this.props.showModal();
      // this.props.hideModal();
      // this.props.history.push(`/PageProfile`);
    } else {
    }
  };

  home = (e) => {
    const redirect = localStorage.getItem("redirectPage");
    this.props.history.push(`${process.env.REACT_APP_URL}${redirect}`);
  };

  render() {
    return (
      <>
        <Container>
          <div className="p-2 shadow-xxl header-nav-wrapper header-nav-wrapper-xl rounded-bottom px-4 navbar-light">
            <div className="app-nav-logo">
              <NavLink
                to={`${process.env.REACT_APP_URL}/`}
                title="Poplar power"
                className="d-flex align-items-center justify-content-center"
              >
                <div
                  className="app-nav-logo--text p-3 ml-3"
                  style={{
                    backgroundColor: "#ea4335",
                    color: "#fff",
                    borderRadius: "30px",
                  }}
                >
                  <span
                    style={{ height: "20px" }}
                    className="d-flex align-items-center justify-content-center"
                  >
                    Poplar
                    {/* <br /> */}
                  </span>

                  <small
                    style={{ height: "5px" }}
                    className="d-flex text-uppercase align-items-center justify-content-center"
                  >
                    <strong>power</strong>
                  </small>

                  {/* <span className="d-flex align-items-center justify-content-center">{`${process.env.REACT_APP_NAME}`}</span> */}
                </div>
              </NavLink>
            </div>
            <div className="header-nav-menu d-none d-lg-block">
              <ul className="d-flex nav nav-neutral-first justify-content-center">
                <li>
                  <Button
                    onClick={(e) => {
                      // if (this.props.authUser) {
                      localStorage.setItem("redirectPage", "/");
                      this.home();
                      // }
                    }}
                    className="font-weight-bold rounded-sm px-3"
                  >
                    Home
                  </Button>
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
                {this.props.authUser && localStorage.token ? (
                  <li>
                    <Button
                      onClick={(e) => {
                        if (this.props.authUser) {
                          window.location.href = `${process.env.REACT_APP_URL}/reportTranx`;
                        }
                      }}
                      className="font-weight-bold rounded-sm px-3"
                    >
                      Transactions
                    </Button>
                  </li>
                ) : (
                  ""
                )}
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
                    <div
                      className="shadow-lg w-100 p-4 rounded"
                      style={{ backgroundColor: "#048cfc", color: "#fff" }}
                    >
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
                            this.props.history.push(
                              `${process.env.REACT_APP_URL}/electric`
                            );
                          }}
                          target="_blank"
                          className="px-4 text-white-50 d-flex align-items-center"
                        >
                          <span>Electric</span>
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          onClick={(e) => {
                            this.props.history.push(
                              `${process.env.REACT_APP_URL}/water`
                            );
                          }}
                          target="_blank"
                          className="px-4 d-flex text-white-50 align-items-center"
                        >
                          <span>Water</span>
                        </ListItem>
                        <ListItem
                          button
                          onClick={(e) => {
                            this.props.history.push(
                              `${process.env.REACT_APP_URL}/cable`
                            );
                          }}
                          // selected
                          className="px-4 d-flex text-white-50 align-items-center"
                        >
                          <span>Cable</span>
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          onClick={(e) => {
                            this.props.history.push(
                              `${process.env.REACT_APP_URL}/airtime`
                            );
                          }}
                          className="px-4 d-flex text-white-50 align-items-center"
                        >
                          <span>Airtime</span>
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          onClick={(e) => {
                            this.props.history.push(
                              `${process.env.REACT_APP_URL}/data`
                            );
                          }}
                          className="px-4 d-flex text-white-50 align-items-center"
                        >
                          <span>Data</span>
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          onClick={(e) => {
                            this.props.history.push(
                              `${process.env.REACT_APP_URL}/transfer`
                            );
                          }}
                          className="px-4 d-flex text-white-50 align-items-center"
                        >
                          <span>Bank Transfer</span>
                        </ListItem>
                      </List>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
              <span className="d-none d-lg-block">
                {this.props.authUser && localStorage.token ? (
                  <Logout />
                ) : (
                  <>
                    <Button
                      onClick={(e) => {
                        this.register(e);
                      }}
                      style={{ backgroundColor: "#048cfc", color: "#fff" }}
                      className="rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm"
                    >
                      Register
                    </Button>
                  </>
                )}
              </span>
              <span className="d-block d-lg-none">
                <button
                  onClick={(e) => this.toggle(e)}
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
            {/* mobile */}
            <div className="d-flex d-none d-lg-none">
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
                    <ul style={{ listStyleType: "none" }}>
                      <li onClick={(e) => this.closeMobileMenu(e)}>
                        <Button
                          onClick={(e) => {
                            localStorage.setItem("redirectPage", "/");
                            this.home();
                          }}
                          className="px-4 font-weight-bold w-100"
                          style={{
                            backgroundColor: "#fff",
                            color: "#000",
                          }}
                        >
                          Home
                        </Button>
                      </li>
                      <li onClick={(e) => this.closeMobileMenu(e)}>
                        <Button
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
                          className="px-4 font-weight-bold w-100"
                          style={{
                            backgroundColor: "#fff",
                            color: "#000",
                          }}
                        >
                          Profile
                        </Button>
                      </li>
                      <li onClick={(e) => this.closeMobileMenu(e)}>
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
                          className="w-100 font-weight-bold"
                          style={{
                            backgroundColor: "#fff",
                            color: "#000",
                          }}
                        >
                          Setting
                        </Button>
                      </li>
                      <li
                        // className="d-lg-none p-3 text-center"
                        onClick={(e) => this.closeMobileMenu(e)}
                      >
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold rounded-lg px-2"
                        >
                          Our Products
                          <span className="opacity-5 dropdown-arrow">
                            <FontAwesomeIcon icon={["fas", "angle-down"]} />
                          </span>
                        </a>
                        <div className="submenu-dropdown submenu-dropdown--md">
                          <div
                            className="shadow-lg w-100 p-4 rounded"
                            style={{
                              backgroundColor: "#048cfc",
                              color: "#fff",
                            }}
                          >
                            <div className="px-4 text-uppercase pb-2 text-dark font-weight-bold font-size-sm">
                              Products
                            </div>
                            <List
                              component="div"
                              className="nav-pills nav-neutral-primary nav-pills-rounded flex-column"
                            >
                              <ListItem
                                component="a"
                                button
                                onClick={(e) => {
                                  this.props.history.push(
                                    `${process.env.REACT_APP_URL}/electric`
                                  );
                                }}
                                target="_blank"
                                className="px-4 text-white-50 d-flex align-items-center"
                              >
                                <span>Electric</span>
                              </ListItem>
                              <ListItem
                                component="a"
                                button
                                onClick={(e) => {
                                  this.props.history.push(
                                    `${process.env.REACT_APP_URL}/water`
                                  );
                                }}
                                target="_blank"
                                className="px-4 d-flex text-white-50 align-items-center"
                              >
                                <span>Water</span>
                              </ListItem>
                              <ListItem
                                button
                                onClick={(e) => {
                                  this.props.history.push(
                                    `${process.env.REACT_APP_URL}/cable`
                                  );
                                }}
                                className="px-4 d-flex text-white-50 align-items-center"
                              >
                                <span>Cable</span>
                              </ListItem>
                              <ListItem
                                component="a"
                                button
                                onClick={(e) => {
                                  this.props.history.push(
                                    `${process.env.REACT_APP_URL}/airtime`
                                  );
                                }}
                                className="px-4 d-flex text-white-50 align-items-center"
                              >
                                <span>Airtime</span>
                              </ListItem>
                              <ListItem
                                component="a"
                                button
                                onClick={(e) => {
                                  this.props.history.push(
                                    `${process.env.REACT_APP_URL}/transfer`
                                  );
                                }}
                                className="px-4 d-flex text-white-50 align-items-center"
                              >
                                <span>Bank Transfer</span>
                              </ListItem>
                              <ListItem
                                component="a"
                                button
                                onClick={(e) => {
                                  this.props.history.push(
                                    `${process.env.REACT_APP_URL}/deposits`
                                  );
                                }}
                                className="px-4 d-flex text-white-50 align-items-center"
                              >
                                <span>Deposits</span>
                              </ListItem>
                            </List>
                          </div>
                        </div>
                      </li>
                      <li
                        className="option mobile-option d-block d-lg-none"
                        onClick={(e) => this.closeMobileMenu(e)}
                      >
                        {this.props.authUser && localStorage.token ? (
                          <Logout />
                        ) : (
                          <Button
                            onClick={(e) => {
                              this.register(e);
                            }}
                            style={{
                              backgroundColor: "#048cfc",
                              color: "#fff",
                            }}
                            className="rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm"
                          >
                            Register
                          </Button>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
        </Container>
        <div
          className={clsx("collapse-page-trigger", {
            "is-active": this.state.collapse,
          })}
          onClick={(e) => this.toggle(e)}
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
