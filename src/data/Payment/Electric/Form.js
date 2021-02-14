import React from "react";
import { Button } from "@material-ui/core";
import { inputGenerator } from "./inputGenerator";
import { useDispatch } from "react-redux";
import { PaymentForm, getStateValues } from "./RCCGElectricForm";
import { useForm, useValidator } from "./useForm";

const Form = ({ formName }) => {
  const form = PaymentForm(formName);
  const inputFields = getStateValues(form.fields);
  const dispatch = useDispatch();
  const [values, handleChange] = useForm({ ...inputFields });
  const [errors, validate] = useValidator(form.fields, values);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (localStorage.ProductTitle === "RCCG ELECTRIC") {
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
      {form.fields.map((f, key) =>
        inputGenerator(key, f, values[f.name], handleChange, errors[f.name])
      )}
      <div className="text-center">
        <Button
          onClick={handleSubmit}
          className="btn-second font-weight-bold p-3 my-2"
        >
          Submit
        </Button>
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
