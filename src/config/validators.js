export const validateEmail = (value) => {
  let error;
  if (!value) {
    error = "Please enter your email address";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

// validate name
export const validateName = (value) => {
  let error;
  if (!value) {
    error = "Please enter your Name";
  } else if (value.length < 6) {
    console.log(value.length);
    error = "Name must be longer than 6 characters";
	}
	return error
};

export const validatePassword = (value) => {
  let error;
  if (!value) {
    error = "This field is required";
  } else if (value.length < 7) {
    error = "Password must be longer than 7 characters";
  }
  return error;
};

export const validateOTP = (value) => {
  let error;
  if (!value) {
    error = "This field is required";
  } else if (value.length !== 6) {
    error = "OTP must be 6 characters";
  }
  return error;
};

export const validatePhone = (value) => {
  let error;
  if (!value) {
    error = "This field is required";
  } else if (
    !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3,5}[-\s.]?[0-9]{4,6}$/.test(value)
  ) {
    error = "Phone number is not  valid";
  }

  return error;
};

export const isInt = (n) => {
  return Number(n) === n && n % 1 === 0;
};

export const isFloat = (n) => {
  return Number(n) === n && n % 1 !== 0;
};

export const isNumeric = (n) => {
  const number = Number(n);
  let error;
  const valid = !isNaN(number) && (isInt(number) || isFloat(number));
  if (!valid || n === null) {
    error = "Value must be a number";
  }
  return error;
};

export const required = (value) => {
  let error = "This Field is required";
  if (!value || value.length < 1) {
    return error;
  }
};

export const customLengthValidate = (value, length) => {
  let error = `This field value should not be more than ${length} characters.`;
  if (!value || value.length > length) {
    return error;
  }
};

export const validateUrl = (url) => {
  let error = `Please enter a valid url.`;
  const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const regex = new RegExp(expression);
  if (!url.match(regex)) {
    return error;
  }
};

export const customRegexValidate = (regex, value) => {
  let error;

  if (!/^\w{1,10}$/.test(value)) {
    error = "Invalid Value. Please Enter the Correct Value.";
  }

  return error;
};

export const validity = (value, validator) => {
  return (
    value !== null &&
    value !== "" &&
    value !== undefined &&
    validator &&
    validator(value) === undefined
  );
};

// export const loginFormValidation = (values) => {
//     const { email, password } = values;
//     if(email && password){

//     }
// }
