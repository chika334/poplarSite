import { TextField } from "@material-ui/core";
import { iconGenerate } from "./IconGenerator";

const fullNameInput = (key, fieldData, value, handleChange, error) => {
  return (
    <div className="mb-4" key={fieldData + key}>
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
        InputProps={iconGenerate("PersonIcon")}
      />
    </div>
  );
};

const MeterNumber = (key, fieldData, value, handleChange, error) => {
  return (
    <div className="mb-4" key={fieldData + key}>
      <TextField
        fullWidth
        type="number"
        value={value}
        variant="outlined"
        helperText={error}
        id={fieldData.name}
        name={fieldData.name}
        onChange={handleChange}
        label={fieldData.label}
        error={error !== undefined}
        placeholder={fieldData.placeholder}
        InputProps={iconGenerate("DialpadOutlinedIcon")}
      />
    </div>
  );
};

const Amount = (key, fieldData, value, handleChange, error) => {
  return (
    <div className="mb-4" key={fieldData + key}>
      <TextField
        fullWidth
        type="number"
        value={value}
        variant="outlined"
        helperText={error}
        id={fieldData.name}
        name={fieldData.name}
        onChange={handleChange}
        label={fieldData.label}
        error={error !== undefined}
        placeholder={fieldData.placeholder}
        InputProps={iconGenerate("₦")}
      />
    </div>
  );
};

export const inputGenerator = (key, fieldData, value, handleChange, error) => {
  switch (fieldData.name) {
    case "fullname":
      return fullNameInput(key, fieldData, value, handleChange, error);
    case "accountNumber":
      return MeterNumber(key, fieldData, value, handleChange, error);
    case "amount":
      return Amount(key, fieldData, value, handleChange, error);
    default:
      break;
  }
};
