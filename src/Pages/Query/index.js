import React, { Component } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Table,
  Grid,
} from "@material-ui/core";
import moment from "moment";
import { Prompt } from "react-router";
import { connect } from "react-redux";
import Pdf from "react-to-pdf";

var formatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
});

const Buttons = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <Pdf targetRef={ref} filename="poplarpower.pdf">
        {({ toPdf }) => (
          <Button className="btn-primary" onClick={toPdf}>
            Download
          </Button>
        )}
      </Pdf>
    </React.Fragment>
  );
});

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBlocking: false,
      value: false,
    };
    this.docToPrint = React.createRef();
  }

  render() {
    const user =
      this.props.authUser.user === null ? "" : this.props.authUser.user;

    const body = (
      <div>
        <div className="d-flex justify-content-center">
          <div className="card-box stylePDF">
            <Card ref={this.docToPrint}>
              <div className={this.state.values === true ? "d-none" : ""}>
                {/* <div> */}

                <div className="d-flex justify-content-center">
                  <img src={localStorage.ProductImage} width="130" alt="logo" />
                </div>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                  <div className="text-center text-lg-left mb-3 mb-lg-0">
                    <h1 className="display-4 font-weight-bold">
                      Receipt #
                      {this.props.location.state.details.response.fastrId}
                    </h1>
                    <p className="mb-0 text-center text-black-50">
                      Date:{" "}
                      {moment(
                        this.props.location.state.details.request.timestamp
                      ).format("MMMM Do YYYY")}
                    </p>
                  </div>
                </div>
                <div className="divider my-3" />
                <div className="d-flex flex-column flex-lg-row justify-content-between mb-5">
                  <div>
                    <div className="text-uppercase text-primary mb-2 font-size-xs">
                      Billed from
                    </div>
                    <p className="mb-1 font-weight-bold">Poplar power</p>
                    <p>
                      <span className="d-block">
                        <b className="pr-2">Email:</b>
                        info@poplarnetworks.com
                      </span>
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-uppercase text-primary mb-2 font-size-xs">
                      Receipt no.
                    </div>
                    <h1 className="display-4 opacity-8 text-black-50">
                      #{this.props.location.state.details.response.fastrId}
                    </h1>
                  </div>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                  <div>
                    <div className="text-uppercase text-primary mb-2 font-size-xs">
                      Billed to
                    </div>
                    <p className="mb-1 d-block">
                      <b className="pr-2">Full Name:</b>
                      {this.props.authUser.user === null
                        ? ""
                        : this.props.authUser.user.user.fullName}
                    </p>
                    <p className="mb-1 d-block">
                      <b className="pr-2">Email:</b>
                      {this.props.authUser.user === null
                        ? ""
                        : this.props.authUser.user.user.email}
                    </p>
                    <p className="d-block">
                      <b className="pr-2">Address:</b>
                      {
                        this.props.location.state.details.productResult.object
                          .customer.address
                      }
                    </p>
                  </div>
                  <div>
                    <div className="text-uppercase text-primary mb-2 font-size-xs">
                      Receipt information
                    </div>
                    <ul className="list-unstyled">
                      <li className="d-flex justify-content-between pb-1">
                        <span className="text-black-50 pr-4">
                          Receipt Number
                        </span>
                        <span className="pl-4">
                          #{this.props.location.state.details.response.fastrId}
                        </span>
                      </li>
                      <li className="d-flex justify-content-between pb-1">
                        <span className="text-black-50 pr-4">Issue Date</span>
                        <span className="pl-4">
                          {moment(
                            this.props.location.state.details.response.timestamp
                          ).format("DD-MM-YYYY")}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="divider mb-5 mt-5" />
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                  <div>
                    <div className="text-uppercase text-primary mb-2 font-size-xs">
                      Token
                    </div>
                    <p>
                      <span className="d-block">
                        {this.props.location.state.details.productResult.result}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="table-responsive my-4 tableData">
                  <Table className="table table-striped table-hover text-nowrap font-size-xs">
                    <thead>
                      <tr>
                        <th className="text-center">Product</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Meter Number</th>
                        <th className="text-center">Amount</th>
                        {/* <th className="text-center">Current Balance</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="tx-nowrap text-center">
                          {
                            this.props.location.state.details.productResult
                              .object.customer.undertaking
                          }
                        </td>
                        <td className="d-none d-sm-table-cell text-black-50 text-center">
                          {
                            this.props.location.state.details.response
                              .clientpaymentId.statusMessage
                          }
                        </td>
                        <td className="tx-center text-center">
                          {
                            this.props.location.state.details.response
                              .paymentRequestid.accountNumber
                          }
                        </td>
                        <td className="tx-right text-center">
                          {/* ₦{this.props.buyToken.token.productResult.} */}
                          {formatter.format(
                            this.props.location.state.details.response
                              .paymentRequestid.clientpaymentId.amount
                          )}
                        </td>
                        {/* <td className="tx-right text-center">
                          {this.props.location.state.detail.method === "card"
                            ? "PAID WITH CARD"
                            : formatter.format(
                                this.props.buyToken.token.currentBalance
                              )}
                        </td> */}
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="divider mb-4" />
                <Grid container spacing={6}>
                  <Grid item lg={4}></Grid>
                </Grid>
                <div className="mobileDetails">
                  <div className="text-uppercase text-primary mb-2 font-size-xs">
                    Transaction Details
                  </div>

                  <p>
                    <span className="d-block">
                      <b className="pr-2">Product:</b>
                      {
                        this.props.location.state.details.productResult.object
                          .customer.undertaking
                      }
                    </span>
                  </p>

                  <p>
                    <span className="d-block">
                      <b className="pr-2">Status:</b>
                      {
                        this.props.location.state.details.response
                          .clientpaymentId.statusMessage
                      }
                    </span>
                  </p>

                  <p>
                    <span className="d-block">
                      <b className="pr-2">Meter Number:</b>
                      {
                        this.props.location.state.details.response
                          .paymentRequestid.accountNumber
                      }
                    </span>
                  </p>

                  <p>
                    <span className="d-block">
                      <b className="pr-2">Amount:</b>
                      {formatter.format(
                        this.props.location.state.details.response
                          .paymentRequestid.clientpaymentId.amount
                      )}
                    </span>
                  </p>
                </div>
                <p style={{ fontSize: 10 }} className="text-center">
                  powered by Blacksillicon
                </p>
                {/* <div className="d-flex align-content-center justify-content-center">
                  <Buttons ref={this.docToPrint} />
                </div> */}
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
    return (
      <div>
        <Container ref={this.docToPrint}>
          <div className={this.state.values === true ? "d-none" : ""}>
            {/* <div> */}
            <Card className="card-box">
              <CardContent className="p-4">
                <div className="d-flex justify-content-center">
                  <img src={localStorage.ProductImage} width="130" alt="logo" />
                </div>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                  <div className="text-center text-lg-left mb-3 mb-lg-0">
                    <h1 className="display-4 font-weight-bold">
                      Receipt #
                      {this.props.location.state.details.response.fastrId}
                    </h1>
                    <p className="mb-0 text-center text-black-50">
                      Date:{" "}
                      {moment(
                        this.props.location.state.details.request.timestamp
                      ).format("MMMM Do YYYY")}
                    </p>
                  </div>
                </div>
                <div className="divider my-3" />
                <div className="d-flex flex-column flex-lg-row justify-content-between mb-5">
                  <div>
                    <div className="text-uppercase text-primary mb-2 font-size-xs">
                      Billed from
                    </div>
                    <p className="mb-1 font-weight-bold">Poplar power</p>
                    <p>
                      <span className="d-block">
                        <b className="pr-2">Email:</b>
                        info@poplarnetworks.com
                      </span>
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-uppercase text-primary mb-2 font-size-xs">
                      Receipt no.
                    </div>
                    <h1 className="display-4 opacity-8 text-black-50">
                      #{this.props.location.state.details.response.fastrId}
                    </h1>
                  </div>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                  <div>
                    <div className="text-uppercase text-primary mb-2 font-size-xs">
                      Billed to
                    </div>
                    <p className="mb-1 d-block">
                      <b className="pr-2">Full Name:</b>
                      {this.props.authUser.user === null
                        ? ""
                        : this.props.authUser.user.user.fullName}
                    </p>
                    <p className="mb-1 d-block">
                      <b className="pr-2">Email:</b>
                      {this.props.authUser.user === null
                        ? ""
                        : this.props.authUser.user.user.email}
                    </p>
                    <p className="d-block">
                      <b className="pr-2">Address:</b>
                      {
                        this.props.location.state.details.productResult.object
                          .customer.address
                      }
                    </p>
                  </div>
                  <div>
                    <div className="text-uppercase text-primary mb-2 font-size-xs">
                      Receipt information
                    </div>
                    <ul className="list-unstyled">
                      <li className="d-flex justify-content-between pb-1">
                        <span className="text-black-50 pr-4">
                          Receipt Number
                        </span>
                        <span className="pl-4">
                          #{this.props.location.state.details.response.fastrId}
                        </span>
                      </li>
                      <li className="d-flex justify-content-between pb-1">
                        <span className="text-black-50 pr-4">Issue Date</span>
                        <span className="pl-4">
                          {moment(
                            this.props.location.state.details.response.timestamp
                          ).format("DD-MM-YYYY")}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="divider mb-5 mt-5" />
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                  <div>
                    <div className="text-uppercase text-primary mb-2 font-size-xs">
                      Token
                    </div>
                    <p>
                      <span className="d-block">
                        {this.props.location.state.details.productResult.result}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="table-responsive my-4 tableData">
                  <Table className="table table-striped table-hover text-nowrap font-size-xs">
                    <thead>
                      <tr>
                        <th className="text-center">Product</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Meter Number</th>
                        <th className="text-center">Amount</th>
                        {/* <th className="text-center">Current Balance</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="tx-nowrap text-center">
                          {
                            this.props.location.state.details.productResult
                              .object.customer.undertaking
                          }
                        </td>
                        <td className="d-none d-sm-table-cell text-black-50 text-center">
                          {
                            this.props.location.state.details.response
                              .clientpaymentId.statusMessage
                          }
                        </td>
                        <td className="tx-center text-center">
                          {
                            this.props.location.state.details.response
                              .paymentRequestid.accountNumber
                          }
                        </td>
                        <td className="tx-right text-center">
                          {/* ₦{this.props.buyToken.token.productResult.} */}
                          {formatter.format(
                            this.props.location.state.details.response
                              .paymentRequestid.clientpaymentId.amount
                          )}
                        </td>
                        {/* <td className="tx-right text-center">
                          {this.props.location.state.detail.method === "card"
                            ? "PAID WITH CARD"
                            : formatter.format(
                                this.props.buyToken.token.currentBalance
                              )}
                        </td> */}
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="divider mb-4" />
                <Grid container spacing={6}>
                  <Grid item lg={4}></Grid>
                </Grid>
                <div className="mobileDetails">
                  <div className="text-uppercase text-primary mb-2 font-size-xs">
                    Transaction Details
                  </div>

                  <p>
                    <span className="d-block">
                      <b className="pr-2">Product:</b>
                      {
                        this.props.location.state.details.productResult.object
                          .customer.undertaking
                      }
                    </span>
                  </p>

                  <p>
                    <span className="d-block">
                      <b className="pr-2">Status:</b>
                      {
                        this.props.location.state.details.response
                          .clientpaymentId.statusMessage
                      }
                    </span>
                  </p>

                  <p>
                    <span className="d-block">
                      <b className="pr-2">Meter Number:</b>
                      {
                        this.props.location.state.details.response
                          .paymentRequestid.accountNumber
                      }
                    </span>
                  </p>

                  <p>
                    <span className="d-block">
                      <b className="pr-2">Amount:</b>
                      {formatter.format(
                        this.props.location.state.details.response
                          .paymentRequestid.clientpaymentId.amount
                      )}
                    </span>
                  </p>
                </div>
                <p style={{ fontSize: 10 }} className="text-center">
                  powered by Blacksillicon
                </p>
                {/* <div className="d-flex align-content-center justify-content-center">
                  <Buttons ref={this.docToPrint} />
                </div> */}
              </CardContent>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

export default connect(mapStateToProps, null)(Index);
