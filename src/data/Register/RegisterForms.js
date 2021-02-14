import {
  validateName,
  validateEmail,
  validatePassword,
} from "../../config/validators";
import { signup } from "../../_actions/userAction";

export const RegisterForms = (formName) => {
  const forms = {
    registerForm: {
      fields: [
        {
          name: "firstName",
          type: "text",
          id: "userName",
          label: "First Name",
          validation: validateName,
          isCustomerValidation: false,
          icon: "AccountCircleIcon",
          placeholder: "Enter your first name",
        },
        {
          name: "lastName",
          type: "text",
          id: "userLastName",
          label: "Last Name",
          validation: validateName,
          isCustomerValidation: false,
          icon: "AccountCircleIcon",
          placeholder: "Enter your last name",
        },
        {
          name: "email",
          type: "email",
          id: "userEmail",
          label: "email Name",
          validation: validateEmail,
          isCustomerValidation: false,
          icon: "MailOutlineTwoToneIcon",
          placeholder: "Enter your email",
        },
        {
          name: "password",
          type: "password",
          id: "userPassword",
          label: "Password",
          validation: validatePassword,
          isCustomerValidation: false,
          icon: "LockTwoToneIcon",
          placeholder: "Enter your Password",
        },
      ],
      submit: signup,
    },
  };
  return forms[formName];
};

export const getStateValues = (fields) => {
  const values = { countryId: "1" };

  fields.forEach((f) => {
    values[f.name] = f.type === "number" ? 0 : "";
  });

  return values;
};
