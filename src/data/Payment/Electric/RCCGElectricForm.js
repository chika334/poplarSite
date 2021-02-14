import { validateName, isNumeric } from "../../../config/validators";
import { token } from "../../../_actions/tokenAction";

export const PaymentForm = (formName) => {
  const forms = {
    rccgPaymentForm: {
      fields: [
        {
          name: "fullname",
          type: "text",
          id: "userFullName",
          validation: validateName,
          isCustomerValidation: false,
          icon: "PersonIcon",
          placeholder: "Enter your full name",
        },
        {
          name: "accountNumber",
          type: "number",
          id: "userMeterNumber",
          validation: isNumeric,
          isCustomerValidation: false,
          icon: "DialpadOutlinedIcon",
          placeholder: "Enter Meter Number",
        },
        {
          name: "amount",
          type: "number",
          id: "userAmount",
          validation: isNumeric,
          isCustomerValidation: false,
          icon: "₦",
          placeholder: "Enter Amount",
        },
      ],
      submit: token,
    },
  };
  return forms[formName];
};

export const getStateValues = (fields) => {
  const values = { productCode: "rccg-power-12" };

  fields.forEach((f) => {
    values[f.name] = f.type === "number" ? 0 : "";
    // console.log(values[f.name]);
  });


  return values;
};
