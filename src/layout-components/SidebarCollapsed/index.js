import React from 'react';

import clsx from 'clsx';

import { Tooltip } from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from 'react-redux';
import { setSidebarToggleMobile } from '../../_actions/contents';

import { NavLink } from 'react-router-dom';

import projectLogo from '../../assets/images/react.svg';

import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';
import SpeakerNotesTwoToneIcon from '@material-ui/icons/SpeakerNotesTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import VpnKeyTwoToneIcon from '@material-ui/icons/VpnKeyTwoTone';

const SidebarCollapsed = (props) => {
  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  const {
    sidebarShadow,
    sidebarStyle,
    sidebarToggleMobile,
    setSidebarToggleMobile
  } = props;

  return (
    <>
      <div
        className={clsx(
          'app-sidebar app-sidebar--collapsed app-sidebar--mini',
          sidebarStyle,
          { 'app-sidebar--shadow': sidebarShadow }
        )}>
        <div className="app-sidebar--header">
          <div className="app-sidebar-logo">
            <NavLink
              to={`${process.env.REACT_APP_URL}/Homepage`}
              title="Bamburgh React Messenger Application with Material-UI PRO"
              className="app-sidebar-logo">
              <div className="app-sidebar-logo--icon">
                <img
                  alt="Bamburgh React Messenger Application with Material-UI PRO"
                  src={projectLogo}
                />
              </div>
            </NavLink>
          </div>
        </div>

        <div className="app-sidebar--content">
          <PerfectScrollbar className="d-flex align-items-center justify-content-center">
            <ul className="sidebar-menu-collapsed">
              <li>
                <Tooltip
                  classes={{ tooltip: 'tooltip-secondary text-nowrap' }}
                  placement="right"
                  title="Homepage"
                  arrow>
                  <NavLink
                    onClick={toggleSidebarMobile}
                    activeClassName="active"
                    to={`${process.env.REACT_APP_URL}/Homepage`}>
                    <span>
                      <HomeWorkTwoToneIcon />
                    </span>
                  </NavLink>
                </Tooltip>
              </li>
              <li>
                <Tooltip
                  classes={{ tooltip: 'tooltip-secondary text-nowrap' }}
                  placement="right"
                  title="Messages"
                  arrow>
                  <NavLink
                    onClick={toggleSidebarMobile}
                    activeClassName="active"
                    to={`${process.env.REACT_APP_URL}/Overview`}>
                    <span>
                      <SpeakerNotesTwoToneIcon />
                    </span>
                  </NavLink>
                </Tooltip>
              </li>
              <li>
                <Tooltip
                  classes={{ tooltip: 'tooltip-secondary text-nowrap' }}
                  placement="right"
                  title="Profile"
                  arrow>
                  <NavLink
                    onClick={toggleSidebarMobile}
                    activeClassName="active"
                    to={`${process.env.REACT_APP_URL}/PageProfile`}>
                    <span>
                      <AccountCircleTwoToneIcon />
                    </span>
                  </NavLink>
                </Tooltip>
              </li>
              <li>
                <Tooltip
                  classes={{ tooltip: 'tooltip-secondary text-nowrap' }}
                  placement="right"
                  title="Settings"
                  arrow>
                  <NavLink
                    onClick={toggleSidebarMobile}
                    activeClassName="active"
                    to={`${process.env.REACT_APP_URL}/Settings`}>
                    <span>
                      <SettingsTwoToneIcon />
                    </span>
                  </NavLink>
                </Tooltip>
              </li>
              <li>
                <Tooltip
                  classes={{ tooltip: 'tooltip-secondary text-nowrap' }}
                  placement="right"
                  title="Register"
                  arrow>
                  <NavLink
                    onClick={toggleSidebarMobile}
                    activeClassName="active"
                    to={`${process.env.REACT_APP_URL}/PageRegisterOverlay`}>
                    <span>
                      <VpnKeyTwoToneIcon />
                    </span>
                  </NavLink>
                </Tooltip>
              </li>
            </ul>
          </PerfectScrollbar>
        </div>
      </div>
      <div
        onClick={toggleSidebarMobile}
        className={clsx('app-sidebar-overlay', {
          'is-active': sidebarToggleMobile
        })}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarShadow: state.content.sidebarShadow,
  sidebarStyle: state.content.sidebarStyle,
  sidebarToggleMobile: state.content.sidebarToggleMobile
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarCollapsed);
