import React, { Component } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Container } from "@material-ui/core";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class BuyToken extends Component {
  state = {
    open: false,
  };

  submit = () => {
    this.setState({
      open: true,
    });
  };

  componentDidMount() {
    window.onbeforeunload = function () {
      this.onUnload();
      return "";
    }.bind(this);
  }

  onUnload(event) {
    alert("page Refreshed");
  }

  render() {
    const { token } = this.props.success === null ? "" : this.props.success;
    console.log(token)
    console.log("Success", this.props.success)
    return (
      <>
        <PerfectScrollbar>
          <div className="m-4 card-header rounded-0 bg-white px-5 py-4 border-bottom">
            <Container className="d-block text-center py-3 text-sm-left d-sm-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center mb-3 mb-sm-0">
                <div className="responsive-container">
                  <h2>Confirm Payment</h2>
                  <hr />
                  <table>
                    <tbody>
                      <tr>
                        <td>Transaction status</td>
                        <td>{token.message}</td>
                      </tr>
                      <tr>
                        <td>Reference Number</td>
                        <td>{token.reference}</td>
                      </tr>
                      <tr>
                        <td>Current Balance</td>
                        <td>{token.currentBalance}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="pt-3" />
                  <hr />
                  <Button
                    color="primary"
                    autoFocus="autoFocus"
                    // className="btn-second font-weight-bold w-50 my-2"
                    variant="contained"
                    onClick={this.submit}
                  >
                    Confirm Payment
                  </Button>
                  <Button
                    color="primary"
                    autoFocus="autoFocus"
                    className="ml-3"
                    variant="contained"
                    // onClick={this.submit}
                  >
                    Download Invoice
                  </Button>
                </div>
              </div>
            </Container>
            <Dialog className="p-5" open={this.state.open} disableBackdropClick={true}>
              <DialogTitle>Success Message</DialogTitle>
              <DialogContent>
                <DialogContentText>
                {token.message}.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Link to={`${process.env.REACT_APP_URL}/PageProfile`}>
                  <Button
                    color="primary"
                    autoFocus="autoFocus"
                    // className="btn-second font-weight-bold w-50 my-2"
                    variant="contained"
                  >
                    Confirm Payment
                  </Button>
                </Link>
              </DialogActions>
            </Dialog>
          </div>
        </PerfectScrollbar>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  success: state.buyToken,
});

export default withRouter(connect(mapStateToProps)(BuyToken));
