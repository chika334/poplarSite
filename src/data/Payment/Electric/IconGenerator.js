import PersonIcon from "@material-ui/icons/Person";
import DialpadOutlinedIcon from "@material-ui/icons/DialpadOutlined";
import { InputAdornment } from "@material-ui/core";

export const iconGenerate = (iconName) => {
  switch (iconName) {
    case "PersonIcon":
      return {
        startAdornment: (
          <InputAdornment position="start">
            <PersonIcon />
          </InputAdornment>
        ),
      };
    case "DialpadOutlinedIcon":
      return {
        startAdornment: (
          <InputAdornment position="start">
            <DialpadOutlinedIcon />
          </InputAdornment>
        ),
      };
    case "₦":
      return {
        startAdornment: (
          <InputAdornment position="start">
            <span className="pr-3 align-items-center">₦</span>
          </InputAdornment>
        ),
      };
    default:
      return {};
  }
};
