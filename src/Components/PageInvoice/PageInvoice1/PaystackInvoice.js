import React, { useEffect, useState } from "react";
import { useSelector, connect } from "react-redux";
import MessengerHeader from "../../Homepage/Homepage1/MessengerHeader";
import Pdf from "react-to-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";
import PerfectScrollbar from "react-perfect-scrollbar";
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
import { clearToken } from "../../../_actions/tokenAction";
import logo from "../../../assets/images/poplar.jpeg";
import buyToken from "../../../_reducer/buyToken_Reducer";

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

  const handleOpen = () => {
    if (open === false) {
      setValues(false);
      setValue(false);
    }
    setValue(false);
    setValues(true);
    setOpen(true);
  };

  const handleClose = () => {
    setValues(false);
    setOpen(false);
  };

  // console.log(props);

  if (props.buyToken.success === false && props.buyToken.token === null) {
    window.location.href = `${process.env.REACT_APP_URL}/products`;
  }

  var formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  console.log(props);

  // printing modal
  const body = (
    <div>
      <Card ref={docToPrint} className="card-box">
        <div style={{ position: "absolute", right: "0" }}>
          <Button onClick={handleClose} className="px-4 text-dark-50 mt-3">
            <FontAwesomeIcon icon={["fas", "times"]} />
          </Button>
        </div>
        <CardContent className="p-4 mt-5">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <div className="text-center text-lg-left mb-3 mb-lg-0">
              <h1 className="display-4 font-weight-bold">
                Receipt #{props.buyToken.token.reference}
              </h1>
              <p className="mb-0 text-black-50">
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
              {/* <p className="text-black-50">
                    201 Something St., Something Town, YT 242, Country 6546
                  </p> */}
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
              <p className="mb-1 font-weight-bold">
                {props.authUser.user.user.fullName}
              </p>
              <p>
                <span className="d-block">
                  <b className="pr-2">Email:</b>
                  {props.authUser.user.user.email}
                </span>
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
                      props.location.state.detail.initialDetails.paymentDetails
                        .dateCreated
                    ).format("DD-MM-YYYY")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="divider mb-5 mt-5" />
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
                    {formatter.format(localStorage.getItem("amount"))}
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
                {props.buyToken.token.productResult.object.customer.undertaking}
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
                {props.buyToken.token.productResult.object.customer.meterNumber}
              </span>
            </p>

            <p>
              <span className="d-block">
                <b className="pr-2">Amount:</b>
                {formatter.format(localStorage.getItem("amount"))}
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
      {/* </div> */}
      <div className="d-flex align-centent-center justify-content-center">
        <Buttons ref={docToPrint} />
      </div>
    </div>
  );

  return (
    <div>
      <Container>
        <div className={values === true ? "d-none" : ""}>
          <Card className="card-box">
            <CardContent className="p-4">
              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
                <div className="text-center text-lg-left mb-3 mb-lg-0">
                  <h1 className="display-4 font-weight-bold">
                    Receipt #{props.buyToken.token.reference}
                  </h1>
                  <p className="mb-0 text-black-50">
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
                  <p className="mb-1 font-weight-bold">
                    {props.authUser.user.user.fullName}
                  </p>
                  <p>
                    <span className="d-block">
                      <b className="pr-2">Email:</b>
                      {props.authUser.user.user.email}
                    </span>
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
                    {formatter.format(localStorage.getItem("amount"))}
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
                onClick={handleOpen}
              >
                Generate pdf
              </Button>
            </div>
          </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
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
