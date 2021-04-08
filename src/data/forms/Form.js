import React from "react";
import { Button } from "@material-ui/core";
import { inputGenerator } from "./InputGenerator";
import { Link } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { List, ListItem } from "@material-ui/core";
import { paymentForms, getStateValues } from "./PaymentForms";
import { showLoader, hideLoader } from "../../_actions/loading";
import { useForm, useValidator } from "./useForm";
import { showForgotModal } from "../../_actions/forgotModal";
import { showRegisterModal } from "../../_actions/registerModal";

const Form = (props) => {
  const form = paymentForms(props.formName);
  const inputFields = getStateValues(form.fields);

  const dispatch = useDispatch();

  const [values, handleChange] = useForm({ ...inputFields });
  const [errors, validate] = useValidator(form.fields, values);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.showLoader();
    // localStorage.setItem("redirectPage", "/profilepage");
    if (validate()) {
      dispatch(form.submit(values));
    }
  };

  const forgotPassword = (e) => {
    e.preventDefault();
    dispatch(showForgotModal());
  };

  const register = (e) => {
    dispatch(showRegisterModal());
  };

  return (
    <div>
      {form.fields.map((f, key) =>
        inputGenerator(key, f, values[f.name], handleChange, errors[f.name])
      )}
      <div>
        <div className="text-center d-flex justify-content-center">
          <p>
            Don't have an account???
            <Button onClick={register} className="btn p-3 my-2">
              Register
            </Button>
          </p>
        </div>
      </div>
      <div className="d-inline-flex">
        <div className="text-center py-2">
          <Button
            onClick={handleSubmit}
            className="btn-second font-weight-bold p-3 my-2"
          >
            Submit
          </Button>
        </div>
        <div style={{ marginLeft: "80px" }}>
          <Button
            onClick={forgotPassword}
            className="btn bg-white text-uppercase p-3 my-2"
          >
            forgot Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  showForgotModal,
  showRegisterModal,
  showLoader,
  hideLoader,
})(Form);
