import React, { Component } from "react";
// import MessengerHeader from "../Components/Homepage/Homepage1/MessengerHeader";
import { Button, Container } from "@material-ui/core";
import { connect } from "react-redux";
import { showModal } from "../_actions/modal";

class ProtectRoutes extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.showModal()
  };

  render() {
    return (
      <div>
        {/* <MessengerHeader /> */}
        <Container
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "10%",
            color: "",
          }}
        >
          <div className="pt-5 bg d-flex align-item-center justify-content-center">
            <div className="element">
              <h3>Can't view page when not registered/logged in</h3>
              <div className="d-flex align-item-center justify-content-center">
                <Button
                  className="rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-first"
                  onClick={(e) => {
                    this.handleClick(e);
                    localStorage.setItem("redirectPage", "/profilepage");
                  }}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default connect(null, { showModal })(ProtectRoutes);
