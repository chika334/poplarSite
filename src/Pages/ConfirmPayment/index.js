import React, { Component } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Container } from "@material-ui/core";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { clearToken } from "../../_actions/tokenAction";
import { Prompt } from "react-router";
import { jsPDF } from "jspdf";
import MessengerHeader from "../../Components/Homepage/Homepage1/MessengerHeader";

class BuyToken extends Component {
  state = {
    open: false,
    isBlocking: false,
  };

  submit = (e) => {
    e.preventDefault();
    const { token } = this.props.success === null ? "" : this.props.success;
    // new document in jspdf
    let doc = new jsPDF({ unit: "pt", orientation: "p", lineHeight: 1.2 });
    let img = localStorage.getItem("ProductImage");
    // add some text to the pdf
    doc.addImage(img, "jpg jpeg png", 200, 40, 180, 160);
    doc.text(
      180,
      230,
      `${process.env.REACT_APP_NAME} ${localStorage.getItem("ProductTitle")}`
    );
    doc.text(220, 250, `Name:- ${this.props.authUser.user.user.fullName}`);
    doc.text(
      200,
      270,
      `Company Name:- ${this.props.authUser.user.sender.companyName}`
    );
    doc.text(180, 290, `Reference Number:-   ${token.reference}`);
    doc.text(200, 310, `Current Balance:-    ${token.currentBalance}`);
    doc.text(180, 400, `Thank you for using ${process.env.REACT_APP_NAME}`);
    // set font
    // doc.addFont()
    // doc.setFont("times", "italics", "400");
    // doc.setFontType('normal')

    // save the pdf file
    doc.save(`${process.env.REACT_APP_URL}.pdf`);
  };

  componentDidUpdate() {
    const token = this.props.success;
    this.props.history.listen(() => {
      // Detecting, user has changed URL
      if (this.props.history.location.pathname) {
        this.props.clearToken();
        window.location.href = `${process.env.REACT_APP_URL}/profilepage`;
      } else if (
        this.props.history.location.pathname &&
        token.success === false
      ) {
        this.props.clearToken();
        // this.props.history.push(`${process.env.REACT_APP_URL}/Products`);
        window.location.href = `${process.env.REACT_APP_URL}/products`;
      }
    });
  }

  render() {
    const { token } = this.props.success === null ? "" : this.props.success;

    window.onbeforeunload = function () {
      this.setState({ isBlocking: true });
      return "";
    }.bind(this);

    if (this.props.success.success === false && token === null) {
      this.props.clearToken();
      // // this.props.history.push(`${process.env.REACT_APP_URL}/Products`);
      window.location.href = `${process.env.REACT_APP_URL}/Products`;
    }
    // else {
    //   const { token } = this.props.success === null ? "" : this.props.success;
    // }
    return (
      <div className="hero-wrapper bg-composed-wrapper bg-light">
        <div className="header-top-section pb-5">
          <MessengerHeader />
        </div>
        <PerfectScrollbar>
          <Prompt
            when={this.state.isBlocking}
            message={() => `On reload all transaction history will b lost`}
          />
          <div className="m-4 card-header rounded-0 bg-white border-bottom">
            <Container className="d-block text-center py-3 text-sm-left d-sm-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center mb-3 mb-sm-0">
                <div className="">
                  <h2>Download Payment Invoice</h2>
                  <hr />
                  <table id="target">
                    <tbody>
                      <tr>
                        <td>Transaction status:- </td>
                        <td>{token.message}</td>
                      </tr>
                      <tr>
                        <td>Reference Number:- </td>
                        <td>{token.reference}</td>
                      </tr>
                      <tr>
                        <td>Current Balance:- </td>
                        <td>{token.currentBalance}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="pt-3" />
                  <hr />
                  <Button
                    style={{
                      backgroundColor: `rgb(0, 68, 116)`,
                      color: "#fff",
                    }}
                    // color="primary"
                    autoFocus="autoFocus"
                    className="ml-3"
                    variant="contained"
                    onClick={(e) => this.submit(e)}
                  >
                    Download Invoice
                  </Button>
                  <Button
                    autoFocus="autoFocus"
                    className="ml-3 bg-white"
                    variant="contained"
                  >
                    <Link to={`${process.env.REACT_APP_URL}/profilepage`}>
                      Back to Profile
                    </Link>
                  </Button>
                </div>
              </div>
            </Container>
            {/* <Dialog className="p-5" open={this.state.open} disableBackdropClick={true}>
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
                    Back to Dashboard
                  </Button>
                </Link>
              </DialogActions>
            </Dialog> */}
          </div>
        </PerfectScrollbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser,
  success: state.buyToken,
});

export default withRouter(connect(mapStateToProps, { clearToken })(BuyToken));
