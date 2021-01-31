import React from 'react';
import clsx from 'clsx';

import { connect } from 'react-redux';

import { setSidebarToggleMobile } from '../../_actions/contents';

import { SidebarHeader } from '../../layout-components';

const Sidebar = (props) => {
  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  const {
    sidebarStyle,
    sidebarShadow,
    sidebarToggleMobile,
    setSidebarToggleMobile
  } = props;
  return (
    <>
      <div
        className={clsx('app-sidebar', sidebarStyle, {
          'app-sidebar--shadow': sidebarShadow
        })}>
        <SidebarHeader />
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
  sidebarShadow: state.ThemeOptions.sidebarShadow,
  sidebarStyle: state.ThemeOptions.sidebarStyle,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
