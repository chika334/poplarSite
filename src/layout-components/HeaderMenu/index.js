import React from 'react';
import {useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List, ListItem } from '@material-ui/core';

import { NavLink, withRouter } from 'react-router-dom';

const HeaderMenu = (props) => {
  const authUser = useSelector(state => state.authUser.isAuthenticated)
  return (
    <>
      <div className="app-header-menu">
        <div className="header-nav-wrapper navbar-light">
          <div className="header-nav-menu d-none d-lg-block">
            <ul className="d-flex nav nav-neutral-first justify-content-center">
              <li>
                <NavLink
                  to={``}
                  className="font-weight-bold rounded-sm px-3">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/reportTranx`}
                  className="font-weight-bold rounded-sm px-3">
                  Transactions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/profilepage`}
                  className="font-weight-bold rounded-sm px-3">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/settings`}
                  className="font-weight-bold rounded-sm px-3">
                  Settings
                </NavLink>
              </li>
              <li>
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="font-weight-bold rounded-sm px-3">
                  Products
                  <span className="opacity-5 dropdown-arrow">
                    <FontAwesomeIcon icon={['fas', 'angle-down']} />
                  </span>
                </a>
                <div className="submenu-dropdown submenu-dropdown--md">
                  <div className="shadow-lg w-100 bg-second p-4 rounded">
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
                            if (authUser) {
                              props.history.push(`/electric`)
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
                            if (authUser) {
                              props.history.push(`/water`)
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
                            if (authUser) {
                              props.history.push(`/cable`)
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
                            if (authUser) {
                              props.history.push(`/airtime`)
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
                            if (authUser) {
                              props.history.push(`/data`)
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
                            if (authUser) {
                              props.history.push(`/transfer`)
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
                            if (authUser) {
                              props.history.push(`/deposits`)
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
        </div>
      </div>
    </>
  );
};

export default withRouter(HeaderMenu)