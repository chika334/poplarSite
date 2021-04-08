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
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <Button className="btn-primary" onClick={toPdf}>
            Download
          </Button>
        )}
      </Pdf>
    </React.Fragment>
  );
});

// const ref = React.createRef();

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

  // printing modal
  const body = (
    <div className="pl-3 pr-3 ">
      {/* <div className="d-flex align-items-center justify-items-center app-wrapper"> */}
      {/* <Card
        className="card-box"
        // style={{ backgroundColor: "#fff" }}
        ref={docToPrint}
      >
        <div style={{ position: "absolute", right: 0 }}>
          <Button onClick={handleClose} className="px-4 text-dark-50 mt-2">
            <FontAwesomeIcon icon={["fas", "times"]} />
          </Button>
        </div>
        <CardContent className="p-4">
          <div className="text-center">
            <img width="150" height="55" src={logo} />
            <h1 className="display-4 font-weight-bold">Receipt</h1>
            <p className="mb-0 text-black-50">{date}</p>
          </div>
          <div className="text-center text-lg-left">
            <Button
              href="#/"
              onClick={(e) => e.preventDefault()}
              size="small"
              variant="text"
              className="btn-outline-primary m-1 d-sm-none"
            >
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={["fas", "print"]} />
              </span>
              <span className="btn-wrapper--label">Print</span>
            </Button>
          </div>
          <div className="d-flex flex-column justify-content-between mb-2">
            <div>
              <div className="text-uppercase text-primary mb-2 font-size-xs">
                Billed from
              </div>
              <p className="mb-1 font-weight-bold">{companyName}</p>
              <p className="text-black-50">
                201 Something St., Something Town, YT 242, Country 6546
              </p>
              <p>
                <span className="d-block pb-1">
                  <b className="pr-2">Tel.:</b>
                  609-876-0996
                </span>
                <span className="d-block">
                  <b className="pr-2">Email:</b>
                  Support@blacksillicon.com
                </span>
              </p>
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-between">
            <div>
              <div className="text-uppercase text-primary mb-2 font-size-xs">
                Billed to
              </div>
              <p className="mb-1 font-weight-bold">{user.fullName}</p>
              <p className="text-black-50">
                182 Prospect Street, Camden, New Jersey
              </p>
              <p>
                <span className="d-block pb-1">
                  <b className="pr-2">Tel.:</b>
                  856-718-9505
                </span>
                <span className="d-block">
                  <b className="pr-2">Email:</b>
                  {user.email}
                </span>
                <span className="d-block pr-4">
                  <b className="pr-2">Issue Date: </b>
                  June 14, 2020
                </span>
              </p>
            </div>
          </div>
          <div className="table-responsive">
            <Table className="table table-striped table-hover text-nowrap font-size-xs">
              <thead>
                <tr>
                  <th className="wd-20p">Product Title</th>
                  <th className="wd-40p d-none d-sm-table-cell">Reference</th>
                  <th className="tx-right">Amount</th>
                  <th className="tx-right">Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tx-nowrap">{localStorage.ProductTitle}</td>
                  <td className="d-none d-sm-table-cell">{token.reference}</td>
                  <td className="d-none">{token.reference}</td>
                  <td className="tx-right">{localStorage.Amount}</td>
                  <td className="tx-right">{token.currentBalance}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardContent>
        <p style={{ fontSize: 10 }} className="text-center">
          powered by blacksillicon
        </p>
      </Card> */}
      <Card
        style={{ backgroundColor: "red" }}
        ref={docToPrint}
        className="card-box"
      >
        <CardContent className="p-4">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <div className="text-center text-lg-left mb-3 mb-lg-0">
              <h1 className="display-4 font-weight-bold">
                Receipt #{props.buyToken.token.reference}
              </h1>
              <p className="mb-0 text-black-50">
                Date:{" "}
                {moment(
                  props.buyToken.token.productResult.object.transactionDate
                ).format("DD-MM-YYYY")}
              </p>
            </div>
            {/* <div className="text-center text-lg-left">
                  <Button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    size="small"
                    variant="text"
                    className="btn-outline-primary m-1"
                  >
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={["fas", "print"]} />
                    </span>
                    <span className="btn-wrapper--label">Print</span>
                  </Button>
                  <Button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    size="small"
                    variant="text"
                    className="btn-outline-primary my-1 mx-2"
                  >
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={["far", "envelope"]} />
                    </span>
                    <span className="btn-wrapper--label">Email</span>
                  </Button>
                  <Button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    variant="text"
                    className="btn-primary m-1"
                  >
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={["fas", "lemon"]} />
                    </span>
                    <span className="btn-wrapper--label">Pay</span>
                  </Button>
                </div> */}
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
                {/* <span className="d-block pb-1">
                  <b className="pr-2">Tel.:</b>
                  609-876-0996
                </span> */}
                <span className="d-block">
                  <b className="pr-2">Email:</b>
                  info@poplarnetworks.com
                </span>
              </p>
            </div>
            <div className="text-right">
              <div className="text-uppercase text-primary mb-2 font-size-xs">
                Recipt no.
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
              {/* <p className="text-black-50">
                    182 Prospect Street, Camden, New Jersey
                  </p> */}
              <p>
                <span className="d-block pb-1">
                  <b className="pr-2">Tel.:</b>
                  856-718-9505
                </span>
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
                      props.buyToken.token.productResult.object.transactionDate
                    ).format("DD-MM-YYYY")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="divider mb-5 mt-5" />
          <div className="table-responsive my-4">
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
                    ₦{props.buyToken.token.productResult.object.paidamount}
                  </td>
                  <td className="tx-right text-center">
                    ₦{props.buyToken.token.currentBalance}
                  </td>
                </tr>
                {/* <tr>
                      <td className="tx-nowrap">Software development</td>
                      <td className="d-none d-sm-table-cell text-black-50">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium.
                      </td>
                      <td className="tx-center">2</td>
                      <td className="tx-right">$150.00</td>
                      <td className="tx-right">$300.00</td>
                    </tr>
                    <tr>
                      <td className="tx-nowrap">Photoshop design</td>
                      <td className="d-none d-sm-table-cell text-black-50">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis...
                      </td>
                      <td className="tx-center">1</td>
                      <td className="tx-right">$1,200.00</td>
                      <td className="tx-right">$1,200.00</td>
                    </tr>
                    <tr>
                      <td className="tx-nowrap">Server configuration</td>
                      <td className="d-none d-sm-table-cell text-black-50">
                        Et harum quidem rerum facilis est et expedita distinctio
                      </td>
                      <td className="tx-center">2</td>
                      <td className="tx-right">$850.00</td>
                      <td className="tx-right">$1,700.00</td>
                    </tr>
                    <tr>
                      <td className="tx-nowrap">Build mobile app</td>
                      <td className="d-none d-sm-table-cell text-black-50">
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur
                      </td>
                      <td className="tx-center">3</td>
                      <td className="tx-right">$850.00</td>
                      <td className="tx-right">$2,550.00</td>
                    </tr> */}
              </tbody>
            </Table>
          </div>
          {/* <div className="divider mb-4" /> */}
          {/* <Grid container spacing={6}>
                <Grid item lg={8}>
                  <div className="rounded p-3 bg-secondary mb-4">
                    <div className="text-uppercase text-primary mb-2 font-size-xs">
                      Notes
                    </div>
                    <p className="font-size-sm mb-0">
                      View any of the 5+ live previews we&#39;ve set up to learn
                      why this dashboard template is the last one you&#39;ll
                      ever need!
                    </p>
                  </div>
                </Grid>
                <Grid item lg={4}>
                  <ul className="list-unstyled mb-3">
                    <li className="d-flex justify-content-between pb-1">
                      <span className="pr-4">Sub-Total</span>
                      <span className="pl-4">$5,750.00</span>
                    </li>
                    <li className="d-flex justify-content-between pb-1">
                      <span className="pr-4">Tax (5%)</span>
                      <span className="pl-4">$287.50</span>
                    </li>
                    <li className="d-flex justify-content-between pb-1">
                      <span className="pr-4">Discount</span>
                      <span className="pl-4">-$50.00</span>
                    </li>
                    <li className="d-flex justify-content-between font-weight-bold pt-3 pb-2 font-size-lg">
                      <span className="pr-4">Total Due</span>
                      <span className="pl-4">$5,987.50</span>
                    </li>
                  </ul>
                  <Button fullWidth className="btn-primary">
                    Pay invoice{" "}
                  </Button>
                </Grid>
              </Grid> */}
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
                    Reacipt #{props.buyToken.token.reference}
                  </h1>
                  <p className="mb-0 text-black-50">
                    Date:{" "}
                    {moment(
                      props.buyToken.token.productResult.object.transactionDate
                    ).format("DD-MM-YYYY")}
                  </p>
                </div>
                {/* <div className="text-center text-lg-left">
                  <Button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    size="small"
                    variant="text"
                    className="btn-outline-primary m-1"
                  >
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={["fas", "print"]} />
                    </span>
                    <span className="btn-wrapper--label">Print</span>
                  </Button>
                  <Button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    size="small"
                    variant="text"
                    className="btn-outline-primary my-1 mx-2"
                  >
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={["far", "envelope"]} />
                    </span>
                    <span className="btn-wrapper--label">Email</span>
                  </Button>
                  <Button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    variant="text"
                    className="btn-primary m-1"
                  >
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={["fas", "lemon"]} />
                    </span>
                    <span className="btn-wrapper--label">Pay</span>
                  </Button>
                </div> */}
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
                    <span className="d-block pb-1">
                      <b className="pr-2">Tel.:</b>
                      609-876-0996
                    </span>
                    <span className="d-block">
                      <b className="pr-2">Email:</b>
                      info@poplarnetworks.com
                    </span>
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-uppercase text-primary mb-2 font-size-xs">
                    Recipt no.
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
                  {/* <p className="text-black-50">
                    182 Prospect Street, Camden, New Jersey
                  </p> */}
                  <p>
                    <span className="d-block pb-1">
                      <b className="pr-2">Tel.:</b>
                      856-718-9505
                    </span>
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
                          props.buyToken.token.productResult.object
                            .transactionDate
                        ).format("DD-MM-YYYY")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="divider mb-5 mt-5" />
              <div className="table-responsive my-4">
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
                        ₦{props.buyToken.token.productResult.object.paidamount}
                      </td>
                      <td className="tx-right text-center">
                        ₦{props.buyToken.token.currentBalance}
                      </td>
                    </tr>
                    {/* <tr>
                      <td className="tx-nowrap">Software development</td>
                      <td className="d-none d-sm-table-cell text-black-50">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium.
                      </td>
                      <td className="tx-center">2</td>
                      <td className="tx-right">$150.00</td>
                      <td className="tx-right">$300.00</td>
                    </tr>
                    <tr>
                      <td className="tx-nowrap">Photoshop design</td>
                      <td className="d-none d-sm-table-cell text-black-50">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis...
                      </td>
                      <td className="tx-center">1</td>
                      <td className="tx-right">$1,200.00</td>
                      <td className="tx-right">$1,200.00</td>
                    </tr>
                    <tr>
                      <td className="tx-nowrap">Server configuration</td>
                      <td className="d-none d-sm-table-cell text-black-50">
                        Et harum quidem rerum facilis est et expedita distinctio
                      </td>
                      <td className="tx-center">2</td>
                      <td className="tx-right">$850.00</td>
                      <td className="tx-right">$1,700.00</td>
                    </tr>
                    <tr>
                      <td className="tx-nowrap">Build mobile app</td>
                      <td className="d-none d-sm-table-cell text-black-50">
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur
                      </td>
                      <td className="tx-center">3</td>
                      <td className="tx-right">$850.00</td>
                      <td className="tx-right">$2,550.00</td>
                    </tr> */}
                  </tbody>
                </Table>
              </div>
              {/* <div className="divider mb-4" /> */}
              {/* <Grid container spacing={6}>
                <Grid item lg={8}>
                  <div className="rounded p-3 bg-secondary mb-4">
                    <div className="text-uppercase text-primary mb-2 font-size-xs">
                      Notes
                    </div>
                    <p className="font-size-sm mb-0">
                      View any of the 5+ live previews we&#39;ve set up to learn
                      why this dashboard template is the last one you&#39;ll
                      ever need!
                    </p>
                  </div>
                </Grid>
                <Grid item lg={4}>
                  <ul className="list-unstyled mb-3">
                    <li className="d-flex justify-content-between pb-1">
                      <span className="pr-4">Sub-Total</span>
                      <span className="pl-4">$5,750.00</span>
                    </li>
                    <li className="d-flex justify-content-between pb-1">
                      <span className="pr-4">Tax (5%)</span>
                      <span className="pl-4">$287.50</span>
                    </li>
                    <li className="d-flex justify-content-between pb-1">
                      <span className="pr-4">Discount</span>
                      <span className="pl-4">-$50.00</span>
                    </li>
                    <li className="d-flex justify-content-between font-weight-bold pt-3 pb-2 font-size-lg">
                      <span className="pr-4">Total Due</span>
                      <span className="pl-4">$5,987.50</span>
                    </li>
                  </ul>
                  <Button fullWidth className="btn-primary">
                    Pay invoice{" "}
                  </Button>
                </Grid>
              </Grid> */}
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
          style={{
            overflow: "auto",
            marginLeft: "18.7%",
            marginRight: "20%",
            maxHeight: "100%",
          }}
          className="pt-4 pb-4"
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
