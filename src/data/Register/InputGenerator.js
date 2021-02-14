import { TextField } from "@material-ui/core";
import { iconGenerate } from "./IconGenerator";

const firstNameInput = (key, fieldData, value, handleChange, error) => {
  return (
    <div className="mb-4"  key={fieldData + key}>
      <TextField
        fullWidth
        type="text"
        value={value}
        variant="outlined"
        helperText={error}
        id={fieldData.name}
        name={fieldData.name}
        onChange={handleChange}
        label={fieldData.label}
        error={error !== undefined}
        placeholder={fieldData.placeholder}
        InputProps={iconGenerate("AccountCircleIcon")}
      />
    </div>
  );
};

const lastNameInput = (key, fieldData, value, handleChange, error) => {
  return (
    <div className="mb-4"  key={fieldData + key}>
      <TextField
        fullWidth
        type="text"
        value={value}
        variant="outlined"
        helperText={error}
        id={fieldData.name}
        name={fieldData.name}
        onChange={handleChange}
        label={fieldData.label}
        error={error !== undefined}
        placeholder={fieldData.placeholder}
        InputProps={iconGenerate("AccountCircleIcon")}
      />
    </div>
  );
};

const emailInput = (key, fieldData, value, handleChange, error) => {
  return (
    <div className="mb-4" key={fieldData + key}>
      <TextField
        fullWidth
        type="email"
        value={value}
        variant="outlined"
        helperText={error}
        id={fieldData.name}
        name={fieldData.name}
        onChange={handleChange}
        label={fieldData.label}
        error={error !== undefined}
        placeholder={fieldData.placeholder}
        InputProps={iconGenerate("MailOutlineTwoToneIcon")}
      />
    </div>
  );
};

const passowrdInput = (key, fieldData, value, handleChange, error) => (
  <div className="mb-4" key={fieldData + key}>
    <TextField
      fullWidth
      value={value}
      type="password"
      variant="outlined"
      helperText={error}
      id={fieldData.name}
      key={fieldData + key}
      name={fieldData.name}
      onChange={handleChange}
      label={fieldData.label}
      error={error !== undefined}
      placeholder={fieldData.placeholder}
      InputProps={iconGenerate("LockTwoToneIcon")}
    />
  </div>
);

export const inputGenerator = (key, fieldData, value, handleChange, error) => {
  switch (fieldData.type) {
    case "text":
      return firstNameInput(key, fieldData, value, handleChange, error);
    case "text":
      return lastNameInput(key, fieldData, value, handleChange, error);
    case "email":
      return emailInput(key, fieldData, value, handleChange, error);
    case "password":
      return passowrdInput(key, fieldData, value, handleChange, error);
    default:
      break;
  }
};
