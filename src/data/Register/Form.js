import React from "react";
import { Button } from "@material-ui/core";
import { inputGenerator } from "./InputGenerator";
import { useDispatch } from "react-redux";
import { RegisterForms, getStateValues } from "./RegisterForms";
import { useForm, useValidator } from "./useForm";

const Form = ({ formName }) => {
  const form = RegisterForms(formName);
  const inputFields = getStateValues(form.fields);
  const dispatch = useDispatch();
  const [values, handleChange] = useForm({ ...inputFields });
  const [errors, validate] = useValidator(form.fields, values);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(form.submit(values));
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
