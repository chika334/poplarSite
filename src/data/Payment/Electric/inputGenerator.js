import { TextField } from "@material-ui/core";
import { iconGenerate } from "./IconGenerator";
import { useSelector } from "react-redux";

// const fullNameInput = (key, fieldData, value, handleChange, error) => {
//   return (
//     <div className="mb-4" key={fieldData + key}>
//       <TextField
//         fullWidth
//         type="text"
//         value={value}
//         variant="outlined"
//         helperText={error}
//         id={fieldData.name}
//         name={fieldData.name}
//         onChange={handleChange}
//         label={fieldData.label}
//         error={error !== undefined}
//         placeholder={fieldData.placeholder}
//         InputProps={iconGenerate("PersonIcon")}
//       />
//     </div>
//   );
// };

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

export const InputGenerator = (key, fieldData, value, handleChange, error) => {
  const userDetails = useSelector((state) => state.verify);
  // console.log(userDetails);
  switch (fieldData.name) {
    // case "fullname":
    //   return fullNameInput(key, fieldData, value, handleChange, error);
    case "meterNumber":
      return MeterNumber(key, fieldData, value, handleChange, error);
    // case "amount":
    case "amount" && userDetails.success === true:
      return Amount(key, fieldData, value, handleChange, error);
    default:
      break;
  }
};

// const mapStateToProps = (state) => ({
//   verify: state.verify,
// });

// export default connect(mapStateToProps)(inputGenerator);
