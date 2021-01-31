import React, { useState } from "react";
import { useSelector, connect } from "react-redux";
import PropTypes from 'prop-types'
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, Container, Button, List, ListItem } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../../../layout-components/LoginModal/Login";
import { NavLink, withRouter, Redirect, useLocation } from "react-router-dom";
import { faTruckMonster } from "@fortawesome/free-solid-svg-icons";
import { showModal, hideModal } from '../../../_actions/modal'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 700,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    left: "25%",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 3, 3),
    marginTop: "3%",
    [theme.breakpoints.down("md")]: {
      width: 400,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(0, 2, 0),
      left: "35%",
    },
    [theme.breakpoints.down("sm")]: {
      width: 270,
      marginTop: "10%",
      boxShadow: theme.shadows[5],
      left: "14%",
    },
  },
}));

const isActive = (history, path) => {
  if (history.location.pathname == path) return { color: "#ff4081" };
  else return;
};

const LivePreviewExample = (history, props) => {
  const classes = useStyles();
  const authUser = useSelector((state) => state.authUser);
  // let location = useLocation();
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  // authUser.isAuthenticated || localStorage.token
  //   ? tag.link === "/PageProfile"
  //     ? "fine"
  //     : "bad"
  //   : // props.history.push(this.props.location.pathname) :
  //     // props.history.push(`${process.env.REACT_APP_URL}/Settings`)
  const good = () => {
    if (authUser.isAuthenticated) {
      // console.log(location);
      hideModal();
      // props.history.push(`${process.env.REACT_APP_URL}/PageProfile`)
      <Redirect to={`${process.env.REACT_APP_URL}/PageProfile`} />
    } 
    if(!authUser.isAuthenticated) {
      // <Redirect to={{
      //   pathname: `${process.env.REACT_APP_URL}/PageLoginOverlay`,
      //   state: { background: location }
      // }} />
      console.log(showModal())
      // setmodalIsOpen(!modalIsOpen);
    } else {
      // <Redirect to={`${process.env.REACT_APP_URL}/Homepage`} />
    }

    console.log(props);
  };

  const body = (
    <div className={classes.paper}>
      <Login />
    </div>
  );

  const handleClose = () => {
    setmodalIsOpen(false);
  };

  // const params = new URLSearchParams(props.location.search);

  return (
    <>
      <Container>
        <div className="bg-white p-2 shadow-xxl header-nav-wrapper header-nav-wrapper-xl rounded-bottom px-4 navbar-light">
          <div className="app-nav-logo">
            <NavLink
              to={`${process.env.REACT_APP_URL}/Homepage`}
              title="Bamburgh React Messenger Application with Material-UI PRO"
              className="app-nav-logo app-nav-logo--dark"
            >
              <div className="app-nav-logo--text">
                <span style={{ color: `rgb(0, 68, 116)` }}>Fastpay</span>
                <span style={{ color: `rgb(242, 106, 6)` }}>r</span>
              </div>
            </NavLink>
          </div>
          <div className="header-nav-menu d-none d-lg-block">
            <ul className="d-flex nav nav-neutral-first justify-content-center">
              <li>
                <NavLink
                  to={`${process.env.REACT_APP_URL}/Homepage`}
                  className="font-weight-bold rounded-sm px-3"
                >
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink
                  // to={{
                  //   pathname: `${process.env.REACT_APP_URL}/PageLoginOverlay`,
                  //   state: { background: location }
                  // }}
                  to={() => good}
                  style={isActive(history, () => good)}
                  // to={ `${props.history.push(props.location.match)}` }
                  className="font-weight-bold rounded-sm px-3"
                >
                  Profile
                </NavLink>
                  {/* // onClick={() => {
                  //   props.history.push(props.location.pathname);
                  // }} */}
                {/* <Button
                  onClick={
                    authUser.isAuthenticated || localStorage.token
                      ? props.history.push(
                          `${process.env.REACT_APP_URL}/PageProfile`
                        )
                      : null
                  }
                  // onClick={good({ link: "/PageProfile" })}
                  className="font-weight-bold rounded-sm px-3"
                >
                  Profile
                </Button> */}
              </li>
              <li>
                <Button
                  // onClick={good({ link: "/Settings" })}
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
                        href="#"
                        target="_blank"
                        className="px-4 text-white-50 d-flex align-items-center"
                      >
                        <span>RCCG Electric</span>
                        <FontAwesomeIcon
                          icon={["fas", "angle-right"]}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#"
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
                        href="#/"
                        onClick={(e) => e.preventDefault()}
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
                        href="#"
                        target="_blank"
                        className="px-4 d-flex text-white-50 align-items-center"
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
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                      >
                        <span>Airtime</span>
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                      >
                        <span>Data</span>
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                      >
                        <span>Bank Transfer</span>
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        to="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                      >
                        <span>Deposits</span>
                      </ListItem>
                    </List>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
            <span className="d-none d-lg-block">
              <Button
                component={NavLink}
                to={`${process.env.REACT_APP_URL}/PageRegisterOverlay`}
                className="rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-first"
              >
                Register
              </Button>
            </span>
            <span className="d-block d-lg-none">
              <button
                onClick={toggle}
                className={clsx("navbar-toggler hamburger hamburger--elastic", {
                  "is-active": collapse,
                })}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </span>
          </div>
          <div className="d-flex d-lg-none">
            <Collapse
              in={collapse}
              className="nav-collapsed-wrapper navbar-collapse"
            >
              <div className="nav-inner-wrapper">
                <Button
                  onClick={toggle}
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
                      to="/Overview"
                      className="px-4 d-flex align-items-center"
                    >
                      <span>Overview</span>
                      <FontAwesomeIcon
                        icon={["fas", "angle-right"]}
                        className="opacity-6 ml-auto"
                      />
                    </ListItem>
                    <ListItem
                      button
                      component={Button}
                      // onClick={good}
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
                      // onClick={good}
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
                        href="#"
                        target="_blank"
                        className="px-4 text-white-50 d-flex align-items-center"
                      >
                        <span>RCCG Electric</span>
                        <FontAwesomeIcon
                          icon={["fas", "angle-right"]}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href=""
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
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        selected
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
                        href="#"
                        target="_blank"
                        className="px-4 d-flex text-white-50 align-items-center"
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
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled
                      >
                        <span>Airtime</span>
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled
                      >
                        <span>Bank Transfer</span>
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled
                      >
                        <span>Deposits</span>
                      </ListItem>
                    </List>
                  </div>
                </div>
                <div className="divider" />
              </div>
            </Collapse>
          </div>
        </div>
        {/* params.get('login') &&{" "} */}
        <Modal onClose={handleClose} open={modalIsOpen}>
          {body}
        </Modal>
      </Container>
      <div
        className={clsx("collapse-page-trigger", { "is-active": collapse })}
        onClick={toggle}
      />
    </>
  );
}

LivePreviewExample.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(connect(null, { showModal, hideModal })(LivePreviewExample));