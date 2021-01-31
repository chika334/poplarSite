import React, { Component } from "react";
import rccg from "../../assets/images/product-logos/rccg.jpg";

import {
  InputAdornment,
  Button,
  TextField,
} from "@material-ui/core";

import MailOutlineTwoToneIcon from "@material-ui/icons/MailOutlineTwoTone";
import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";

class Tab3 extends Component {
  render() {
    return (
      <div className="app-wrapper bg-white">
        <div className="hero-wrapper w-100">
          <div className="flex-grow-1 w-100 align-items-center">
            <div>
              <div className="divider-v divider-v-lg d-none d-lg-block" />
              <div className="text-center mt-4">
                <img width="100" src={rccg} alt="rccg" />
                <h1 className="font-size-xxl mb-1 font-weight-bold">
                  {process.env.REACT_APP_RCCG}
                </h1>
                <p className="mb-0 text-black-50">
                  Fill in the fields below to pay your{" "}
                  <span className="text-lowercase">
                    {process.env.REACT_APP_RCCG}
                  </span>
                </p>
              </div>
              <div className="py-4">
                <div>
                  <div className="mb-4">
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="textfield-email"
                      label="Email address"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MailOutlineTwoToneIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="textfield-password"
                      label="Password"
                      type="password"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockTwoToneIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className="text-center py-4">
                    <Button className="btn-second font-weight-bold w-50 my-2">
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tab3;
