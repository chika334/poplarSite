import React, { Component } from "react";
// import MessengerHeader from "../Components/Homepage/Homepage1/MessengerHeader";
import { Button, Container } from "@material-ui/core";
import { connect } from "react-redux";
import { showModal } from "../_actions/modal";
import { Redirect } from "react-router-dom";

class ProtectRoutes extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.showModal();
  };

  render() {
    if (
      this.props.authUser === null
        ? ""
        : this.props.authUser.isAuthenticated === true
    ) {
      return <Redirect to="/" />;
    }
    return (
      <div>
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

const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

export default connect(mapStateToProps, { showModal })(ProtectRoutes);
