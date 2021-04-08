import React, { Component } from "react";
import { logout } from "../../_actions/userAction";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

export class Logout extends Component {
  static propType = {
    logout: PropTypes.func.isRequired,
  };

  LogoutUser = (e) => {
    e.preventDefault();
    if (localStorage.token) {
      this.props.logout();
      window.location.href = `${process.env.REACT_APP_URL}`;
      // this.props.history.push(`/`);
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

export default withRouter(connect(mapStateToProps, { logout })(Logout));
