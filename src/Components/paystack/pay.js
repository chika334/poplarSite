import React, { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import { connect, useSelector } from "react-redux";
import Modal from "@material-ui/core/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "@material-ui/core";
import DialpadOutlinedIcon from "@material-ui/icons/DialpadOutlined";
import { TextField, InputAdornment } from "@material-ui/core";
import { token } from "../../_actions/tokenAction";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const Pay = (props) => {
  // const publicKey = process.env.REACT_PUBLIC_KEY;
  const user = useSelector((state) => state.authUser.user);
  const [errors, setErrors] = useState("");
  // const publicKey = "pk_test_94d23f00aed71d8e360418111baf7ccfbb6ecc1f";
  const publicKey = "pk_test_07df38cc2381f42f40a3bcb363a5b6e0b7882dbe";
  const [amounts, setAmount] = useState("");
  const amount = amounts * 100;
  const [meterNumber, setMeterNumber] = useState("");
  const productCode = "rccg-power-12";
  // const amount = 1000 * 100;
  const email = `${user === null ? "" : user.user.email}`;
  const [phone, setPhone] = useState("");
  const paymentMethod = "fastrwallet";
  const [open, setOpen] = useState(false);
  const [inError, setInError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [wantToPay, setWantToPay] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  // const [fullname, setFullName] = useState("");
  const fullname = userDetails === null ? "" : userDetails.customerName;

  // console.log(amount);
  useEffect(() => {
    const { error } = props;
    // if (error !== prevProps.error) {
    if (error.id === "BUYTOKEN_FAIL") {
      setErrors(error.message.message);
    }
    // }
  }, [props.error]);

  const handleChange = (name) => (event) => {
    // this.setState({ [name]: event.target.value });
    console.log(event.target.value);
    setMeterNumber(event.target.value);
  };

  const handleAmount = (name) => (event) => {
    setAmount(event.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    const { authUser } = props;
    if (meterNumber === "") {
      setInError({ inError: "Input Required" });
    } else {
      if (localStorage.ProductTitle === "RCCG ELECTRIC") {
        // const { meterNumber } = this.state;

        if (localStorage.token) {
          console.log("submit");
          setLoading(true);
          try {
            axios
              .get(
                `http://www.blacksillicon.com/fastpayr/api/v1/provider/redeem/customer/${meterNumber}`
              )
              .then((res) =>
                setTimeout(() => {
                  console.log(res.data);
                  // this.setState({ loading: false, userDetails: res.data });
                  setUserDetails(res.data);
                  setLoading(false);
                }, 300)
              )
              .catch((err) => console.log(err));
          } catch (err) {
            console.log(err);
          }
        } else {
          // setWantToPay({ wantToPay: true });
          // this.handleOpen();
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

  const handleClose = () => {
    console.log(open);
    setOpen(false);
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
    onSuccess: (reference) => {
      const customerId = "";
      const buyToken = {
        productCode,
        fullname,
        amount: amounts,
        accountNumber: meterNumber,
        customerId,
        reference: reference.reference,
        paymentMethod,
      };

      // console.log(buyToken.amount);
      localStorage.setItem("Amount", buyToken.amount);

      props.token(buyToken);
    },
    // alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

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
        onClose={handleClose}
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
                  <Button onClick={handleClose} className="px-4 text-dark-50">
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
                  {/* <div className="checkout-field">
                    <label>Name</label>
                    <input
                      type="text"
                      id="name"
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div> */}
                  {/* <div className="checkout-field">
                    <label>Meter Number</label>
                    <input
                      type="number"
                      id="amount"
                      onChange={(e) => setMeterNumber(e.target.value)}
                    />
                  </div> */}
                  <div className="checkout-field">
                    {/* <label>Amount</label>
                    <input
                      type="number"
                      id="amount"
                      onChange={(e) => setAmount(e.target.value)}
                    /> */}
                    {userDetails === null ? (
                      <TextField
                        fullWidth
                        type="number"
                        variant="outlined"
                        id="number"
                        // onChange={(e) => setMeterNumber(e.target.value)}
                        style={{ color: "#000" }}
                        onChange={handleChange("meterNumber")}
                        value={meterNumber}
                        name="meterNumber"
                        label="Meter Number"
                        helperText={inError}
                        error={inError !== null}
                        placeholder="Meter Number"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <DialpadOutlinedIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  {userDetails === null ? (
                    ""
                  ) : userDetails.responsedesc === "Success" ? (
                    <>
                      <div className="allnew">
                        <p>Full Name: </p>
                        <p style={{ paddingLeft: "63px" }}>
                          {userDetails.customerName}
                        </p>
                      </div>
                      <div className="allnew">
                        <p>Address: </p>
                        <p style={{ paddingLeft: "74px" }}>
                          {userDetails.address}
                        </p>
                      </div>
                      <div className="allnew">
                        <p>Meter Number: </p>
                        <p style={{ paddingLeft: "30px" }}>
                          {userDetails.meterNumber}
                        </p>
                      </div>
                      <div className="allnew">
                        <p>undertaking: </p>
                        <p style={{ paddingLeft: "30px" }}>
                          {userDetails.undertaking}
                        </p>
                      </div>

                      <div className="mb-3">
                        <TextField
                          fullWidth
                          variant="outlined"
                          id="amount"
                          label="Amount"
                          value={amounts}
                          onChange={handleAmount("amount")}
                          type="number"
                          helperText={inError}
                          error={inError !== null}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <span className="pr-3 align-items-center">
                                  ₦
                                </span>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  {/* <div className="checkout-field">
                    <label>Phone</label>
                    <input
                      type="text"
                      id="phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div> */}
                  {userDetails === null ? (
                    <>
                      <div className="text-center">
                        <Button
                          onClick={(e) => {
                            // submit(e);
                            if (localStorage.token) {
                              submit(e);
                            } else {
                              submit(e);
                            }
                          }}
                          style={{
                            backgroundColor: "#048cfc",
                            // position: "absolute",
                            // right: 0,
                          }}
                        >
                          verify Number
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center">
                      <PaystackButton
                        className="paystack-button"
                        {...componentProps}
                      />
                    </div>
                  )}
                  {/* <PaystackButton
                    className="paystack-button"
                    {...componentProps}
                  /> */}
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
});

export default connect(mapStateToProps, { token })(Pay);
