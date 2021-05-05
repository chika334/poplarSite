import React from "react";
import { showLoader, hideLoader } from "../../_actions/loading";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function PaymentNQuery(props) {
  console.log(props);
  const amount = props.value.paymentDetails.amount;
  const initialDetails = props.value;
  const userDetails = props.userValue;
  const method = props.method;
  if (method === "wallet") {
    props.showLoader();
    if (props.data.success === true) {
      props.hideLoader();
      props.history.push({
        pathname: `${process.env.REACT_APP_URL}/invoice`,
        state: {
          detail: { amount, initialDetails, method, userDetails },
        },
      });
    }
  }
  if (method === "card") {
    // closePaymentModal();
    props.showLoader();
    if (props.data.success === true) {
      props.hideLoader();
      props.history.push({
        pathname: `${process.env.REACT_APP_URL}/cardInvoice`,
        state: {
          detail: { amount, initialDetails, method, userDetails },
        },
      });
    }
  }
  return <div>Loading...</div>;
}

export default withRouter(
  connect(null, { showLoader, hideLoader })(PaymentNQuery)
);
