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
                  to={`${process.env.REACT_APP_URL}`}
                  className="font-weight-bold rounded-sm px-3">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${process.env.REACT_APP_URL}/reportTranx`}
                  className="font-weight-bold rounded-sm px-3">
                  Transactions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${process.env.REACT_APP_URL}/PageProfile`}
                  className="font-weight-bold rounded-sm px-3">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${process.env.REACT_APP_URL}/Settings`}
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
                              props.history.push(`${process.env.REACT_APP_URL}/Electric`)
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
                              props.history.push(`${process.env.REACT_APP_URL}/Water`)
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
                              props.history.push(`${process.env.REACT_APP_URL}/Cable`)
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
                              props.history.push(`${process.env.REACT_APP_URL}/Airtime`)
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
                              props.history.push(`${process.env.REACT_APP_URL}/Data`)
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
                              props.history.push(`${process.env.REACT_APP_URL}/Transfer`)
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
                              props.history.push(`${process.env.REACT_APP_URL}/Deposits`)
                            }
                          }}
                          onClick={(e) => e.preventDefault()}
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