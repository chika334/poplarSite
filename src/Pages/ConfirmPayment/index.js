import React, { Component } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Container } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { clearToken } from "../../_actions/tokenAction";
import { Prompt } from "react-router";
import { jsPDF } from "jspdf";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";

class BuyToken extends Component {
  state = {
    open: false,
    isBlocking: false,
  };

  submit = (e) => {
    e.preventDefault();
    const { token } = this.props.success === null ? "" : this.props.success;
    // new document in jspdf
    let doc = new jsPDF({unit: 'pt', orientation: 'p', lineHeight: 1.2})
    // add some text to the pdf

    doc.text(20, 30, `${process.env.REACT_APP_NAME}`)
    doc.text(20, 50, `Thank you for using ${process.env.REACT_APP_NAME}`)
    doc.text(20, 70, `Reference Number:-   ${token.reference}`)
    doc.text(20, 90, `Current Balance:-    ${token.currentBalance}`) 
    // set font
    // doc.addFont()
    doc.setFont('serif');
    // doc.setFontType('normal')

    // save the pdf file
    doc.save(`${process.env.REACT_APP_URL}.pdf`)
  };

  componentDidMount() {
    // window.onbeforeunload = function () {
    //   this.setState({ isBlocking: true })
    //   return "";
    // }.bind(this);
  }

  // onUnload(event) {
  //   alert("page Refreshed");
  //   this.props.history.push(`${process.env.REACT_APP_URL}/PageProfile`)
  // }

  // componentDidUpdate = () => {
  //   if (this.state.shouldBlockNavigation) {
  //     window.onbeforeunload = () => true;
  //   } else {
  //     window.onbeforeunload = undefined;
  //   }
  // };

  componentDidUpdate() {
    const token = this.props.success;
    // console.log(token);
    this.props.history.listen(() => {
      // Detecting, user has changed URL
      if (this.props.history.location.pathname) {
        this.props.clearToken();
        window.location.href = `${process.env.REACT_APP_URL}/PageProfile`;
      } else if (
        this.props.history.location.pathname &&
        token.success === false
      ) {
        this.props.clearToken();
        // this.props.history.push(`${process.env.REACT_APP_URL}/Products`);
        window.location.href = `${process.env.REACT_APP_URL}/Products`;
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
      <>
        <PerfectScrollbar>
          <Prompt
            when={this.state.isBlocking}
            message={() =>
              `On reload all transaction history will b lost`
            }
          />
          <div className="m-4 card-header rounded-0 bg-white border-bottom">
            <Container className="d-block text-center py-3 text-sm-left d-sm-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center mb-3 mb-sm-0">
                <div className="">
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
                  {/* <Button
                    color="primary"
                    autoFocus="autoFocus"
                    // className="btn-second font-weight-bold w-50 my-2"
                    variant="contained"
                    onClick={this.submit}
                  >
                    Confirm Payment
                  </Button> */}
                  <Button
                    color="primary"
                    autoFocus="autoFocus"
                    className="ml-3"
                    variant="contained"
                    onClick={(e) => this.submit(e)}
                  >
                    Download Invoice
                  </Button>
                  <Button
                    // color="primary"
                    autoFocus="autoFocus"
                    className="ml-3 bg-white"
                    variant="contained"
                    // onClick={this.submit}
                  >
                    Back to Profile
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
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  success: state.buyToken,
});

export default withRouter(connect(mapStateToProps, { clearToken })(BuyToken));
