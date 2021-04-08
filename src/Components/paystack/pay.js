import React, { useState, useEffect } from "react";
// import { PaystackButton } from "react-paystack";
import { Redirect } from "react-router-dom";
import { PaystackConsumer } from "react-paystack";
import { connect, useSelector } from "react-redux";
import Modal from "@material-ui/core/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "@material-ui/core";
import DialpadOutlinedIcon from "@material-ui/icons/DialpadOutlined";
import { TextField, InputAdornment } from "@material-ui/core";
import { paystackToken, token } from "../../_actions/tokenAction";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const Pay = (props) => {
  // const publicKey = process.env.REACT_PUBLIC_KEY;
  const user = useSelector((state) => state.authUser.user);
  const [errors, setErrors] = useState("");
  // const publicKey = "pk_test_07df38cc2381f42f40a3bcb363a5b6e0b7882dbe";
  // const publicKey = `${process.env.REACT_APP_API_LIVE_KEY}`;
  const publicKey = "pk_live_76004bcc59f334f109b8a3bc68735ee620c10485";
  const amounts = props.amount;
  const amount = amounts * 100;
  const [meterNumber, setMeterNumber] = useState("");
  const productCode = "rccg-power-12";
  const email = `${user === null ? "" : user.user.email}`;
  const [phone, setPhone] = useState("");
  const paymentMethod = "fastrpaystack";
  const customerId = "";
  const [open, setOpen] = useState(false);
  const [inError, setInError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [wantToPay, setWantToPay] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [redirect, setRedirect] = useState(false);
  // const [fullname, setFullName] = useState("");
  const [values, setValues] = useState({
    inital: false,
    showAmount: false,
    initialDetails: null,
    verify: false,
    Details: false,
    amountInital: false,
  });

  console.log(props);

  // const { amounts, meterNumber } = numbers;

  const {
    inital,
    showAmount,
    initialDetails,
    verify,
    Details,
    amountInital,
  } = values;

  const fullname = userDetails === null ? "" : userDetails.customerName;

  const handleChange = (name) => (event) => {
    setMeterNumber(event.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    const { token, isAuthenticated } = props.authUser;
    // console.log(token);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // if token, add to header
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    if (meterNumber === "") {
      console.log(meterNumber);
      setInError("Input Required");
    } else {
      if (localStorage.ProductTitle === "RCCG ELECTRIC") {
        if (localStorage.token) {
          // console.log("submit");
          setLoading(true);
          try {
            axios
              .get(
                `${process.env.REACT_APP_API_VERIFYMETERNO}${meterNumber}`,
                config
              )
              .then((res) =>
                setTimeout(() => {
                  console.log(res.data);
                  // this.setState({ loading: false, userDetails: res.data });
                  setUserDetails(res.data);
                  setLoading(false);
                  setValues({
                    ...values,
                    Details: false,
                    inital: true,
                    verify: true,
                    showAmount: true,
                    amountInital: true,
                  });
                }, 300)
              )
              .catch((err) => console.log(err));
          } catch (err) {
            console.log(err);
          }
        } else {
        }
      } else if (localStorage.ProductTitle === "IKEJA ELECTRIC") {
        console.log(localStorage.ProductTitle);
      } else if (localStorage.ProductTitle === "EKO ELECTRIC") {
        console.log(localStorage.ProductTitle);
      } else if (localStorage.ProductTitle === "DSTV Subscription") {
        console.log(localStorage.ProductTitle);
      }
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const Close = () => {
    console.log(open);
    setOpen(false);
  };

  // you can call this function anything
  const handleSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    if (reference.message === "Approved") {
      // console.log(reference.reference);
      if (userDetails === null) {
        return "";
      } else if (userDetails.responsedesc === "Success") {
        // this.setState({ loading: true });
        const fastrId = initialDetails.fastrId;
        // const reference = reference.reference;

        const buyToken = {
          fastrId,
          reference: reference.reference,
          // reference: "T965771745193942"
        };

        setRedirect(true);
        props.paystackToken(buyToken);
        // console.log(buyToken);
        props.history.push(`${process.env.REACT_APP_URL}/invoice`);
      }
    } else {
      console.log("bad");
    }
  };

  // you can call this function anything
  const handleClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      fullname,
      // phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose,
  };

  const initializePayment = (e) => {
    e.preventDefault();
    const { token } = props.authUser;
    const amount = amounts;

    if (localStorage.token && userDetails === null) {
      return "";
    } else if (localStorage.token && userDetails.responsedesc === "Success") {
      setLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // if token, add to header
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      const fullname = userDetails.customerName;
      const meterNumber = userDetails.meterNumber;

      const buyToken = {
        productCode,
        paymentMethod,
        fullname,
        amount,
        accountNumber: meterNumber,
        customerId,
      };

      console.log(buyToken);

      axios
        .post(
          `${process.env.REACT_APP_API_INITIALIZE_PAYMENT}`,
          buyToken,
          config
        )
        .then((res) =>
          setTimeout(() => {
            // setUserDetails(res.data);
            setLoading(false);
            setValues({
              ...values,
              Details: true,
              initialDetails: res.data,
              inital: true,
              verify: true,
              showAmount: false,
              amountInital: false,
            });
          }, 300)
        )
        .catch((err) => console.log(err));
    }
  };

  if (props.buyToken.change) {
    return <Redirect to={`/invoice`} />;
  }

  return (
    <>
      <Button
        style={{ backgroundColor: "grey" }}
        type="button"
        onClick={handleOpen}
      >
        Pay with PayStack
      </Button>
      <Modal
        open={open}
        onClose={Close}
        aria-labelledby="simple-modal-title"
        style={{ overflow: "auto" }}
        aria-describedby="simple-modal-description"
      >
        <div className="App">
          <div className="containers">
            <Card className="" style={{ paddingBottom: "15%" }}>
              <div className="checkout">
                <div
                  style={{
                    position: "relative",
                    left: "50%",
                  }}
                >
                  <Button onClick={Close} className="px-4 text-dark-50">
                    <FontAwesomeIcon icon={["fas", "times"]} />
                  </Button>
                </div>
                <div className="divider-v divider-v-lg d-none d-lg-block" />
                <div className="text-center mt-4">
                  <img
                    width="100"
                    src={localStorage.getItem("ProductImage")}
                    alt="rccg"
                  />
                  <h1 className="font-size-xxl mb-1 font-weight-bold">
                    {localStorage.getItem("ProductTitle")}
                  </h1>
                  <p className="mb-0 text-black-50">
                    Fill in the fields below to pay your{" "}
                    <span className="text-lowercase">
                      {process.env.REACT_APP_RCCG}
                    </span>
                  </p>
                </div>
                {errors && (
                  <Typography
                    className="pb-3 text-center"
                    component="p"
                    color="error"
                  >
                    {errors}
                  </Typography>
                )}
                <div className="checkout-form">
                  <div className="checkout-field">
                    <div>
                      <>
                        <div className="allnew">
                          <p style={{ paddingLeft: "20px" }}>Full Name: </p>
                          <p style={{ paddingLeft: "63px" }}>
                            {props.data.customerName}
                          </p>
                        </div>
                        <div className="allnew">
                          <p style={{ paddingLeft: "20px" }}>Address: </p>
                          <p style={{ paddingLeft: "78px" }}>
                            {props.data.address}
                          </p>
                        </div>
                        <div className="allnew">
                          <p style={{ paddingLeft: "20px" }}>Meter Number: </p>
                          <p style={{ paddingLeft: "30px" }}>
                            {props.data.meterNumber}
                          </p>
                        </div>
                        <div className="allnew">
                          <p style={{ paddingLeft: "20px" }}>undertaking: </p>
                          <p style={{ paddingLeft: "20px" }}>
                            {props.data.undertaking}
                          </p>
                        </div>
                        <div className="allnew">
                          <p style={{ paddingLeft: "20px" }}>Amount: </p>
                          <p style={{ paddingLeft: "85px" }}>₦{amounts}</p>
                        </div>
                      </>
                      <div className="text-center">
                        <PaystackConsumer {...componentProps}>
                          {({ initializePayment }) => (
                            <Button
                              style={{
                                backgroundColor: "grey",
                                width: "100px",
                              }}
                              onClick={() =>
                                initializePayment(handleSuccess, handleClose)
                              }
                            >
                              Card Payment
                            </Button>
                          )}
                        </PaystackConsumer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  error: state.error,
  authUser: state.authUser,
  buyToken: state.buyToken,
});

export default connect(mapStateToProps, { paystackToken, token })(Pay);
