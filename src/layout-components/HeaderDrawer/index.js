import React from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, List, ListItem, Tooltip } from '@material-ui/core';

import { connect } from 'react-redux';

import { setHeaderDrawerToggle } from '../../_actions/contents';

import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../assets/images/avatars/avatar6.jpg';

import CountUp from 'react-countup';
import Chart from 'react-apexcharts';
import PerfectScrollbar from 'react-perfect-scrollbar';

const HeaderDrawer = (props) => {
  const chartHeaderDrawerOptions = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 2
    },
    colors: ['#4191ff'],
    fill: {
      color: '#4191ff',
      opacity: 0.1,
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.2,
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chartHeaderDrawerData = [
    {
      name: 'Monthly Analytics',
      data: [47, 38, 56, 24, 45, 54, 38, 56, 24, 65]
    }
  ];

  const { headerDrawerToggle, setHeaderDrawerToggle } = props;

  const toogleHeaderDrawer = () => {
    setHeaderDrawerToggle(!headerDrawerToggle);
  };

  return (
    <>
      <div className="app-drawer-wrapper">
        <button
          onClick={toogleHeaderDrawer}
          className={clsx('navbar-toggler hamburger hamburger--elastic', {
            'is-active': headerDrawerToggle
          })}>
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>

      <div className="app-drawer-content">
        <Tooltip title="Close drawer" placement="left">
          <Button
            onClick={toogleHeaderDrawer}
            className="close-drawer-btn btn btn-sm">
            <div
              className={clsx('navbar-toggler hamburger hamburger--elastic', {
                'is-active': headerDrawerToggle
              })}>
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </div>
          </Button>
        </Tooltip>
        <div className="vh-100 shadow-overflow">
          <PerfectScrollbar>
            <div className="bg-secondary pb-4">
              <div className="text-center px-4 pt-4">
                <div className="font-weight-bold font-size-xl mb-0 line-height-1 text-black">
                  Statistics
                </div>
                <p className="text-black-50">Daily messages stats</p>
              </div>
              <div className="rounded overflow-hidden mx-4 bg-deep-sky">
                <div className="text-center text-white pt-4 px-4">
                  <h3 className="mb-0 display-3 mt-1 font-weight-bold">
                    <CountUp
                      start={0}
                      end={43.454}
                      duration={4}
                      separator=""
                      delay={3}
                      decimals={3}
                      decimal=","
                      prefix=""
                      suffix=""
                    />
                  </h3>
                  <div className="text-white-50 text-center">
                    Total Messages
                  </div>
                </div>
                <div>
                  <Chart
                    options={chartHeaderDrawerOptions}
                    series={chartHeaderDrawerData}
                    type="area"
                    height={120}
                  />
                </div>
              </div>
            </div>
            <div className="divider" />
            <div className="px-4 text-center pt-4">
              <div className="font-weight-bold font-size-xl mb-0 line-height-1 text-black">
                Contacts
              </div>
              <p className="text-black-50">Recent chat partners</p>
            </div>
            <div className="px-4 pb-4">
              <List component="div" className="nav-neutral-first flex-column">
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  selected
                  className="rounded">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="badge badge-danger badge-circle">
                        Offline
                      </div>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Mandy Erle
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          3 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </ListItem>
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="rounded">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="badge badge-success badge-circle">
                        Online
                      </div>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar3} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Oliver Battle
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          2 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </ListItem>
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="rounded">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="badge badge-warning badge-circle">
                        Idle
                      </div>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar4} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Napoleon Stacey
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          3 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </ListItem>
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="rounded">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="badge badge-danger badge-circle">
                        Offline
                      </div>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar6} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Mandy Erle
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          3 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </ListItem>
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="rounded">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="badge badge-success badge-circle">
                        Online
                      </div>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar1} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Adella Galen
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          5 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </ListItem>
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="rounded">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="badge badge-danger badge-circle">
                        Offline
                      </div>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Mandy Erle
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          3 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </ListItem>
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="rounded">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="badge badge-success badge-circle">
                        Online
                      </div>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar3} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Oliver Battle
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          2 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </ListItem>
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="rounded">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="badge badge-warning badge-circle">
                        Idle
                      </div>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar4} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Napoleon Stacey
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          3 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </ListItem>
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="rounded">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="badge badge-danger badge-circle">
                        Offline
                      </div>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar6} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Mandy Erle
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          3 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </ListItem>
                <ListItem
                  component="a"
                  button
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="rounded">
                  <div className="align-box-row">
                    <div className="avatar-icon-wrapper avatar-icon-sm">
                      <div className="badge badge-success badge-circle">
                        Online
                      </div>
                      <div className="avatar-icon rounded-circle">
                        <img alt="..." src={avatar5} />
                      </div>
                    </div>
                    <div className="pl-2">
                      <span className="d-block text-black font-size-sm font-weight-bold">
                        Oliver Battle
                        <div className="d-block text-black-50 font-size-xs font-weight-normal">
                          2 hours ago
                        </div>
                      </span>
                    </div>
                  </div>
                </ListItem>
              </List>
            </div>
            <div className="divider" />
            <div className="text-center bg-secondary p-4 d-block">
              <Button className="btn-neutral-danger" size="small">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'trash-alt']} />
                </span>
                <span className="btn-wrapper--label">Clear history</span>
              </Button>
            </div>
          </PerfectScrollbar>
        </div>
      </div>

      <div
        onClick={toogleHeaderDrawer}
        className={clsx('app-drawer-overlay', {
          'is-active': headerDrawerToggle
        })}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  headerDrawerToggle: state.content.headerDrawerToggle
});

const mapDispatchToProps = (dispatch) => ({
  setHeaderDrawerToggle: (enable) => dispatch(setHeaderDrawerToggle(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDrawer);
