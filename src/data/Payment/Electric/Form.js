import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { inputGenerator } from "./inputGenerator";
import { useDispatch, useSelector } from "react-redux";
import { PaymentForm, getStateValues } from "./RCCGElectricForm";
import { useForm, useValidator } from "./useForm";
import Pay from "../../../Components/paystack/pay";
import Typography from "@material-ui/core/Typography";

const Form = ({ formName }) => {
  const form = PaymentForm(formName);
  const error = useSelector((state) => state.error);
  const [payerror, setPayError] = useState("");
  const inputFields = getStateValues(form.fields);
  const dispatch = useDispatch();
  const [values, handleChange] = useForm({ ...inputFields });
  const [errors, validate] = useValidator(form.fields, values);

  useEffect(() => {
    if (error.id === "BUYTOKEN_FAIL") {
      setPayError(error.message.message);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("redirectPage", "/electric");
    if (validate()) {
      if (localStorage.ProductTitle === "RCCG ELECTRIC") {
        // console.log(values);
        dispatch(form.submit(values));
        console.log(localStorage.ProductTitle === "RCCG ELECTRIC");
      } else if (localStorage.ProductTitle === "IKEJA ELECTRIC") {
        console.log(localStorage.ProductTitle);
      } else if (localStorage.ProductTitle === "EKO ELECTRIC") {
        console.log(localStorage.ProductTitle);
      } else if (localStorage.ProductTitle === "DSTV Subscription") {
        console.log(localStorage.ProductTitle);
      }
    }
  };

  return (
    <div>
      {payerror && (
        <Typography className="pb-3 text-center" component="p" color="error">
          {payerror}
        </Typography>
      )}
      {form.fields.map((f, key) =>
        inputGenerator(key, f, values[f.name], handleChange, errors[f.name])
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

export default Form;
