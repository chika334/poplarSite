import React, { Component } from "react";
import { logout } from "../../_actions/userAction";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { showLoader, hideLoader } from "../../_actions/loading";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

export class Logout extends Component {
  static propType = {
    logout: PropTypes.func.isRequired,
  };

  LogoutUser = (e) => {
    this.props.showLoader();
    e.preventDefault();
    if (localStorage.token) {
      this.props.logout();
      // window.location.href = `${process.env.REACT_APP_URL}`;
      this.props.history.push(`${process.env.REACT_APP_URL}`);
      setTimeout(() => {
        this.props.hideLoader();
      }, 200);
      // console.log("good");
    }
  };

  componentDidMount() {
    // this.props.history.push(`/Homepage`)
    // window.location.href=`/Homepage`
    return (e) => this.LogoutUser(e);
  }

  render() {
    return (
      <Button color="inherit" onClick={(e) => this.LogoutUser(e)}>
        Signout
      </Button>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser.isAuthenticated,
});

export default withRouter(
  connect(mapStateToProps, { logout, showLoader, hideLoader })(Logout)
);
