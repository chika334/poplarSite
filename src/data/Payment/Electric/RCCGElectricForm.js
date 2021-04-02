import { validateName, isNumeric, required } from "../../../config/validators";
import { token } from "../../../_actions/tokenAction";
import { verifyNumber } from "../../../_actions/tokenAction";

export const PaymentForm = (formName) => {
  const forms = {
    rccgPaymentForm: {
      fields: [
        // {
        //   name: "fullname",
        //   type: "text",
        //   id: "userFullName",
        //   validation: validateName,
        //   isCustomerValidation: false,
        //   icon: "PersonIcon",
        //   placeholder: "Enter your full name",
        // },
        {
          name: "meterNumber",
          type: "number",
          id: "userMeterNumber",
          // validation: ,
          validation: required,
          isCustomerValidation: false,
          icon: "DialpadOutlinedIcon",
          placeholder: "Enter Meter Number",
        },
        {
          name: "amount",
          type: "number",
          id: "userAmount",
          validation: required,
          isCustomerValidation: false,
          icon: "₦",
          placeholder: "Enter Amount",
        },
      ],
      submit: verifyNumber,
      submits: token,
    },
  };
  return forms[formName];
};

export const getStateValues = (fields) => {
  const values = { productCode: "rccg-power-12", paymentMethod: "fastrwallet" };

  fields.forEach((f) => {
    values[f.name] = f.type === "number" ? "" : "";
    // console.log(values[f.name]);
  });

  return values;
};
