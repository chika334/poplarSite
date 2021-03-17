import React from "react";
// import logo from "./logo.svg";
import { usePaystackPayment } from "react-paystack";

const config = {
  reference: new Date().getTime(),
  // publicKey: `${process.env.REACT_PUBLIC_KEY}`,
  publicKey: "pk_test_94d23f00aed71d8e360418111baf7ccfbb6ecc1f",
  email: "user@example.com",
  amount: 20000,
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

const PaystackHookExample = () => {
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Paystack
      </button>
    </div>
  );
};

function Paystack() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <PaystackHookExample />
    </div>
  );
}

export default Paystack;
