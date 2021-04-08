import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { InputGenerator } from "./inputGenerator";
import { useDispatch, useSelector, connect } from "react-redux";
import { PaymentForm, getStateValues } from "./RCCGElectricForm";
import { useForm, useValidator } from "./useForm";
import Pay from "../../../Components/paystack/pay";
import Typography from "@material-ui/core/Typography";
import { hideLoader, showLoader } from "../../../_actions/loading";
import store from "../../../config/store";

const Form = (props) => {
  const form = PaymentForm(props.formName);
  const userDetails = useSelector((state) => state.verify);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const inputFields = getStateValues(form.fields);
  const dispatch = useDispatch();
  const [values, handleChange] = useForm({ ...inputFields });
  const [errors, validate] = useValidator(form.fields, values);
  const [isVerified, setIsVerified] = useState(false);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (userDetails.success === true) {
      console.log("good");
    } else {
      console.log("bad");
    }
  }, [userDetails]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("redirectPage", "/electric");
    // if (validate()) {
    props.hideMeter();
    console.log(props);
    // if (localStorage.ProductTitle === "RCCG ELECTRIC") {
    //   dispatch(form.submits(values));
    //   // console.log(values.amount);
    //   localStorage.setItem("Amount", values.amount);
    //   console.log(localStorage.ProductTitle === "RCCG ELECTRIC");
    // } else if (localStorage.ProductTitle === "IKEJA ELECTRIC") {
    //   console.log(localStorage.ProductTitle);
    // } else if (localStorage.ProductTitle === "EKO ELECTRIC") {
    //   console.log(localStorage.ProductTitle);
    // } else if (localStorage.ProductTitle === "DSTV Subscription") {
    //   console.log(localStorage.ProductTitle);
    // }
    // }
  };

  return (
    <div>
      {error && (
        <Typography className="pb-3 text-center" component="p" color="error">
          {error}
        </Typography>
      )}
      {form.fields.map((f, key) =>
        InputGenerator(key, f, values[f.name], handleChange, errors[f.name])
      )}
      {/* <div className="text-center">
        <Button
          onClick={handleSubmit}
          className="btn-second font-weight-bold p-3 my-2"
        >
          Submit
        </Button>
      </div> */}
      <div className="d-inline-flex">
        <div className="text-center">
          <Pay />
        </div>
        {/* <Paystack /> */}
        {isVerified && (
          <div className="text-center">
            <Button
              onClick={handleSubmit}
              style={{
                backgroundColor: "#048cfc",
                position: "absolute",
                right: 0,
              }}
            >
              Pay with Wallet
            </Button>
          </div>
        )}
        {!isVerified && (
          <div className="text-center">
            <Button
              // onClick={verifyNumber}
              style={{
                backgroundColor: "#048cfc",
                position: "absolute",
                right: 0,
              }}
            >
              verify Meter Number
            </Button>
          </div>
        )}
      </div>
      {/* <div className="d-inline-flex">
        <div className="text-center py-2">
          <Button
            onClick={handleSubmit}
            className="btn-second font-weight-bold p-3 my-2"
          >
            Submit
          </Button>
        </div>
      </div> */}
    </div>
  );
};

export default connect(null, {
  showLoader,
  hideLoader,
  // hideMeter,
  // verifyNumber,
})(Form);
