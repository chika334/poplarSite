import { useState, useEffect, useRef } from "react";

export const useForm = (data) => {
  const formRef = useRef();
  const [values, setValues] = useState({ ...data });

  useEffect(() => {
    formRef.current = true;
    return () => {
      formRef.current = false;
    };
  }, []);

  const handleChange = (e) => {
    if (formRef.current) {
      const newState = { ...values };
      newState[e.target.name] = e.target.value;
      setValues(newState);
    }
  };

  return [values, handleChange];
};

export const useValidator = (fields, values) => {
  const formRef = useRef();
  const constraintData = createConstraint(fields);
  const [formIsValid, setFormIsValid] = useState(false);
  const [error, setError] = useState({ ...createErrorDefault(fields) });

  useEffect(() => {
    formRef.current = true;
    return () => {
      formRef.current = false;
    };
  }, []);

  const validate = () => {
    if (formRef.current) {
      const constraintKey = Object.keys(constraintData);
      let isValid = true;
      const newErrors = { ...error };

      constraintKey.forEach((c) => {
        let value = values[c];
        let cData = constraintData[c];
        let validator = cData.validator;
        let notValid = cData.isCustom ? validator(values) : validator(value);
        newErrors[c] = notValid;

        if (notValid) {
          isValid = false;
        }
      });

      setError(newErrors);
      setFormIsValid(isValid);
      return isValid;
    }
  };
  return [error, validate];
};

const createErrorDefault = (fields) => {
  const errors = {};

  fields.forEach((f) => {
    errors[f.name] = undefined;
  });
  return errors;
};

const createConstraint = (fields) => {
  // Constraint Data{
  //     email: {validator: validateEmail, isCustom: false},
  // }
  const constraints = {};

  fields.forEach((f) => {
    constraints[f.name] = {
      validator: f.validation,
      isCustom: f.isCustomerValidation,
    };
  });

  return constraints;
};
