// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   Typography,
//   Menu,
//   Button,
//   List,
//   // ListItemLink,
//   ListItem,
//   Tooltip,
//   Divider,
// } from "@material-ui/core";

import Logout from "../../Components/Logout/Logout";

// import avatar7 from "../../assets/images/avatars/avatar7.jpg";

const HeaderUserbox = () => {
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <>
      <div className="position-relative ml-2">
        {/* <Button
          onClick={handleClick}
          className="btn-link p-0 text-left d-flex btn-transition-none align-items-center"
        >
          <div className="d-block p-0 avatar-icon-wrapper">
            <div className="badge badge-success badge-circle p-top-a">
              Online
            </div>
            <div className="avatar-icon rounded">
              <img src={avatar7} alt="..." />
            </div>
          </div>
          <div className="d-none d-xl-block pl-2">
            <div className="font-weight-bold">Emma Taylor</div>
            <span className="text-black-50">Senior accountant</span>
          </div>
          <span className="pl-1 pl-xl-3">
            <FontAwesomeIcon
              icon={["fas", "angle-down"]}
              className="opacity-5"
            />
          </span>
        </Button>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={Boolean(anchorEl)}
          classes={{ list: "p-0" }}
          onClose={handleClose}
        > */}
          <Logout />
          {/* <div className="dropdown-menu-lg overflow-hidden p-0">
            <div
              component="div"
              className="nav-neutral-primary text-left d-flex align-items-center flex-column px-3 pb-3"
            >
              <Link
                to={`/PageProfile`}
                className="p-3 d-block text-left"
              >
                My Account
              </Link>
              <Logout />
            </div>
          </div> */}
        {/* </Menu> */}
      </div>
    </>
  );
};

export default HeaderUserbox;
