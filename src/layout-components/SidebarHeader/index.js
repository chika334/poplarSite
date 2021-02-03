import React from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@material-ui/core';

import { connect } from 'react-redux';

import {
  setSidebarToggle,
  setSidebarToggleMobile
} from '../../_actions/contents';

import projectLogo from '../../assets/images/react.svg';

const SidebarHeader = (props) => {
  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  const {
    sidebarToggleMobile,
    setSidebarToggleMobile,

    sidebarToggle,
    setSidebarToggle
  } = props;

  return (
    <>
      <div className="app-sidebar--header">
        <div className="app-sidebar-logo">
          <Link
            to={`${process.env.REACT_APP_URL}/DashboardAnalytics`}
            title="Bamburgh React Messenger Application with Material-UI PRO"
            className="app-sidebar-logo">
            <div className="app-sidebar-logo--icon">
              <img
                alt="Bamburgh React Messenger Application with Material-UI PRO"
                src={projectLogo}
              />
              {/* {process.env.REACT_APP_URL} */}
            </div>
            <div className="app-sidebar-logo--text">
              <span>Messenger</span>

              <b>bamburgh</b>
            </div>
          </Link>
        </div>
        <Tooltip title="Collapse sidebar" arrow placement="right">
          <button
            onClick={toggleSidebar}
            className="btn btn-sm collapse-sidebar-btn">
            <FontAwesomeIcon icon={['far', 'dot-circle']} size="lg" />
          </button>
        </Tooltip>
        <button
          className={clsx(
            'navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn',
            { 'is-active': sidebarToggleMobile }
          )}
          onClick={toggleSidebarMobile}>
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <Tooltip title="Expand sidebar" placement="right">
          <button
            onClick={toggleSidebar}
            className="expand-sidebar-btn btn btn-sm">
            <FontAwesomeIcon icon={['fas', 'arrows-alt-h']} />
          </button>
        </Tooltip>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarToggle: state.ThemeOptions.sidebarToggle,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggle: (enable) => dispatch(setSidebarToggle(enable)),
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarHeader);
