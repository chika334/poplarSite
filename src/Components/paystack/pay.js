import React, { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import { connect, useSelector } from "react-redux";
import Modal from "@material-ui/core/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "@material-ui/core";
import { token } from "../../_actions/tokenAction";
import Typography from "@material-ui/core/Typography";

const Pay = (props) => {
  // const publicKey = process.env.REACT_PUBLIC_KEY;
  const user = useSelector((state) => state.authUser.user);
  // const error = useSelector((state) => state.error);
  const [errors, setErrors] = useState("");
  const publicKey = "pk_test_94d23f00aed71d8e360418111baf7ccfbb6ecc1f";
  const [amounts, setAmount] = useState("");
  const amount = amounts * 100;
  const [accountNumber, setAccountNumber] = useState(null);
  const productCode = "rccg-power12";
  // const amount = 1000 * 100;
  const email = `${user === null ? "" : user.user.email}`;
  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const paymentMethod = "fastrpaystck";
  const [open, setOpen] = useState(false);

  // console.log(amount);
  useEffect(() => {
    const { error } = props;
    // if (error !== prevProps.error) {
    if (error.id === "BUYTOKEN_FAIL") {
      setErrors(error.message.message);
    }
    // }
  }, [props.error]);

  // console.log(errors);

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
      const customerId = null;
      const buyToken = {
        productCode,
        fullname,
        amount,
        accountNumber,
        customerId,
        reference: reference.reference,
        paymentMethod,
      };
      // const buyToken = {
      //   productCode: "rccg-power-12",
      //   fullname: "Testing Testing",
      //   amount: "1000",
      //   accountNumber: "1234234",
      //   customerId: "",
      //   reference: reference.reference,
      //   paymentMethod: "fastrpaystack",
      // };

      console.log(reference.reference);

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
                  <Button
                    onClick={handleClose}
                    className="px-4 text-dark-50 mt-3"
                  >
                    <FontAwesomeIcon icon={["fas", "times"]} />
                  </Button>
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
                    <label>Name</label>
                    <input
                      type="text"
                      id="name"
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="checkout-field">
                    <label>Amount</label>
                    <input
                      type="number"
                      id="amount"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <div className="checkout-field">
                    <label>Account Number</label>
                    <input
                      type="number"
                      id="amount"
                      onChange={(e) => setAccountNumber(e.target.value)}
                    />
                  </div>
                  {/* <div className="checkout-field">
                    <label>Phone</label>
                    <input
                      type="text"
                      id="phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div> */}
                  <PaystackButton
                    className="paystack-button"
                    {...componentProps}
                  />
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
