import React, { useEffect, useState } from "react";
import { useSelector, connect } from "react-redux";
import Pdf from "react-to-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import moment from "moment";
import {
  Table,
  Grid,
  Card,
  CardContent,
  Button,
  Container,
} from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "2%",
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

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

function LivePreviewExample(props) {
  let docToPrint = React.createRef();
  const [value, setValue] = useState(false);
  const [values, setValues] = useState(false);
  const companyName = useSelector((state) =>
    state.authUser.user === null ? "" : state.authUser.user.sender.companyName
  );
  const token = useSelector((state) =>
    state.buyToken.token === null ? "" : state.buyToken.token
  );
  const user = useSelector((state) =>
    state.authUser.user === null ? "" : state.authUser.user.user
  );

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    if (open === false) {
      setValues(false);
      setValue(false);
    }
    setValue(false);
    setValues(true);
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setValues(false);
    setOpen(false);
  };

  if (props.buyToken.success === false && props.buyToken.token === null) {
    // window.location.href = `${process.env.REACT_APP_URL}/products`;
    return (
      <Redirect to={{ pathname: `${process.env.REACT_APP_URL}/products` }} />
    );
  }

  var formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  // printing modal
  const body = (
    <div>
      <div className="d-flex justify-content-center">
        <div className="card-box stylePDF">
          <Card ref={docToPrint}>
            <div style={{ position: "absolute", right: "0" }}>
              <Button onClick={handleClose} className="px-4 text-dark-50 mt-3">
                <FontAwesomeIcon icon={["fas", "times"]} />
              </Button>
            </div>
            <CardContent className="styleDetailsPDF p-4 mt-5">
              <div className="d-flex justify-content-center">
                <img src={localStorage.ProductImage} width="130" alt="logo" />
              </div>
              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                <div className="text-center text-lg-left mb-3 mb-lg-0">
                  <h1 className="display-4 font-weight-bold">
                    Receipt #{props.buyToken.token.reference}
                  </h1>
                  <p className="text-center mb-0 text-black-50">
                    Date:{" "}
                    {moment(
                      props.location.state.detail.initialDetails.paymentDetails
                        .dateCreated
                    ).format("DD-MM-YYYY")}
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
                    #{props.buyToken.token.reference}
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
                    {props.authUser.user.user.fullName}
                  </p>
                  <p className="mb-1 d-block">
                    <b className="pr-2">Email:</b>
                    {props.authUser.user.user.email}
                  </p>
                  <p className="d-block">
                    <b className="pr-2">Address:</b>
                    {props.location.state.detail.userDetails.address}
                  </p>
                </div>
                <div>
                  <div className="text-uppercase text-primary mb-2 font-size-xs">
                    Receipt information
                  </div>
                  <ul className="list-unstyled">
                    <li className="d-flex justify-content-between pb-1">
                      <span className="text-black-50 pr-4">Receipt Number</span>
                      <span className="pl-4">
                        #{props.buyToken.token.reference}
                      </span>
                    </li>
                    <li className="d-flex justify-content-between pb-1">
                      <span className="text-black-50 pr-4">Issue Date</span>
                      <span className="pl-4">
                        {moment(
                          props.location.state.detail.initialDetails
                            .paymentDetails.dateCreated
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
                      {props.buyToken.token.productResult.object.recieptNumber}
                    </span>
                  </p>
                </div>
              </div>
              <div className="table-responsive my-4 tableData">
                <Table className="table table-striped table-hover  font-size-xs">
                  <thead>
                    <tr>
                      <th className="text-center">Product</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Meter Number</th>
                      <th className="text-center">Amount</th>
                      <th className="text-center">Current Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tx-nowrap text-center">
                        {
                          props.buyToken.token.productResult.object.customer
                            .undertaking
                        }
                      </td>
                      <td className="d-none d-sm-table-cell text-black-50 text-center">
                        {props.buyToken.token.paymentMessage}
                      </td>
                      <td className="tx-center text-center">
                        {
                          props.buyToken.token.productResult.object.customer
                            .meterNumber
                        }
                      </td>
                      <td className="tx-right text-center">
                        {formatter.format(props.location.state.detail.amount)}
                      </td>
                      <td className="tx-right text-center">
                        {formatter.format(props.buyToken.token.currentBalance)}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="mobileDetails">
                <div className="text-uppercase text-primary mb-2 font-size-xs">
                  Transaction Details
                </div>

                <p>
                  <span className="d-block">
                    <b className="pr-2">Product:</b>
                    {
                      props.buyToken.token.productResult.object.customer
                        .undertaking
                    }
                  </span>
                </p>

                <p>
                  <span className="d-block">
                    <b className="pr-2">Status:</b>
                    {props.buyToken.token.paymentMessage}
                  </span>
                </p>

                <p>
                  <span className="d-block">
                    <b className="pr-2">Meter Number:</b>
                    {
                      props.buyToken.token.productResult.object.customer
                        .meterNumber
                    }
                  </span>
                </p>

                <p>
                  <span className="d-block">
                    <b className="pr-2">Amount:</b>
                    {formatter.format(props.location.state.detail.amount)}
                  </span>
                </p>

                <p>
                  <span className="d-block">
                    <b className="pr-2">Current Balance:</b>
                    {formatter.format(props.buyToken.token.currentBalance)}
                  </span>
                </p>
              </div>
              <p style={{ fontSize: 10 }} className="text-center">
                powered by Blacksillicon
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* </div> */}
      <div className="d-flex align-centent-center justify-content-center">
        <Buttons ref={docToPrint} />
      </div>
    </div>
  );

  console.log(props.location.state);

  return (
    <div>
      <Container>
        <div className={values === true ? "d-none" : ""}>
          <Card className="card-box">
            <CardContent className="p-4">
              <div className="d-flex justify-content-center">
                <img src={localStorage.ProductImage} width="130" alt="logo" />
              </div>
              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                <div className="text-center text-lg-left mb-3 mb-lg-0">
                  <h1 className="display-4 font-weight-bold">
                    Receipt #{props.buyToken.token.reference}
                  </h1>
                  <p className="mb-0 text-center text-black-50">
                    Date:{" "}
                    {moment(
                      props.location.state.detail.initialDetails.paymentDetails
                        .dateCreated
                    ).format("DD-MM-YYYY")}
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
                    #{props.buyToken.token.reference}
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
                    {props.authUser.user.user.fullName}
                  </p>
                  <p className="mb-1 d-block">
                    <b className="pr-2">Email:</b>
                    {props.authUser.user.user.email}
                  </p>
                  <p className="d-block">
                    <b className="pr-2">Address:</b>
                    {props.location.state.detail.userDetails.address}
                  </p>
                </div>
                <div>
                  <div className="text-uppercase text-primary mb-2 font-size-xs">
                    Receipt information
                  </div>
                  <ul className="list-unstyled">
                    <li className="d-flex justify-content-between pb-1">
                      <span className="text-black-50 pr-4">Receipt Number</span>
                      <span className="pl-4">
                        #{props.buyToken.token.reference}
                      </span>
                    </li>
                    <li className="d-flex justify-content-between pb-1">
                      <span className="text-black-50 pr-4">Issue Date</span>
                      <span className="pl-4">
                        {moment(
                          props.location.state.detail.initialDetails
                            .paymentDetails.dateCreated
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
                      {props.buyToken.token.productResult.object.recieptNumber}
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
                      <th className="text-center">Current Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tx-nowrap text-center">
                        {
                          props.buyToken.token.productResult.object.customer
                            .undertaking
                        }
                      </td>
                      <td className="d-none d-sm-table-cell text-black-50 text-center">
                        {props.buyToken.token.paymentMessage}
                      </td>
                      <td className="tx-center text-center">
                        {
                          props.buyToken.token.productResult.object.customer
                            .meterNumber
                        }
                      </td>
                      <td className="tx-right text-center">
                        {/* ₦{props.buyToken.token.productResult.} */}
                        {formatter.format(props.location.state.detail.amount)}
                      </td>
                      <td className="tx-right text-center">
                        {props.location.state.detail.method === "card"
                          ? "PAID WITH CARD"
                          : formatter.format(
                              props.buyToken.token.currentBalance
                            )}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="divider mb-4" />
              <Grid container spacing={6}>
                <Grid item lg={4}></Grid>
                {/* <Grid item lg={8}>
                  <ul className="list-unstyled mb-3">
                    <li className="d-flex justify-content-between pb-1">
                      <span className="pr-4">Amount</span>
                      <span className="pl-4">
                        {formatter.format(props.location.state.detail.amount)}
                      </span>
                    </li>
                    <li className="d-flex justify-content-between pb-1">
                      <span className="pr-4">Convenience Fee</span>
                      <span className="pl-4">{formatter.format(100)}</span>
                    </li>
                    <li className="d-flex justify-content-between pb-1">
                      <span className="pr-4">Transaction ID</span>
                      <span className="pl-4">
                        {/* {props.location.state.details.uuidvar} 
                        {props.buyToken.token.reference}
                      </span>
                    </li>
                  </ul>
                  {/* <Button
                    onClick={() => {
                      handleFlutterPayment({
                        callback: (response) => {
                          const ref = response.tx_ref;
                          props.verifyPayment(ref);
                        },
                        onClose: () => {
                          alert("Please don't go :(");
                        },
                      });
                    }}
                    fullWidth
                    className="btn-primary"
                  >
                    Pay with Card{" "}
                  </Button>
                </Grid> */}
              </Grid>
              <div className="mobileDetails">
                <div className="text-uppercase text-primary mb-2 font-size-xs">
                  Transaction Details
                </div>

                <p>
                  <span className="d-block">
                    <b className="pr-2">Product:</b>
                    {
                      props.buyToken.token.productResult.object.customer
                        .undertaking
                    }
                  </span>
                </p>

                <p>
                  <span className="d-block">
                    <b className="pr-2">Status:</b>
                    {props.buyToken.token.paymentMessage}
                  </span>
                </p>

                <p>
                  <span className="d-block">
                    <b className="pr-2">Meter Number:</b>
                    {
                      props.buyToken.token.productResult.object.customer
                        .meterNumber
                    }
                  </span>
                </p>

                <p>
                  <span className="d-block">
                    <b className="pr-2">Amount:</b>
                    {formatter.format(props.location.state.detail.amount)}
                  </span>
                </p>

                <p>
                  <span className="d-block">
                    <b className="pr-2">Current Balance:</b>
                    {formatter.format(props.buyToken.token.currentBalance)}
                  </span>
                </p>
              </div>
              <p style={{ fontSize: 10 }} className="text-center">
                powered by Blacksillicon
              </p>
            </CardContent>
          </Card>
          <div className={value === false ? "d-none" : ""}>
            <Buttons ref={docToPrint} />
          </div>
        </div>
        <Grid container spacing={6}>
          <Grid item lg={4}>
            <div className="mt-3">
              <Button
                className="btn-primary"
                type="button"
                onClick={(e) => handleOpen(e)}
              >
                Generate pdf
              </Button>
            </div>
          </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={(e) => handleClose(e)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          style={{
            overflow: "auto",
          }}
          className="pt-2 pb-2 invoiceCard"
        >
          {body}
        </Modal>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  buyToken: state.buyToken,
  authUser: state.authUser,
});

export default connect(mapStateToProps)(LivePreviewExample);
