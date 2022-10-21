import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

const CustomTextField = ({ ...rest }: TextFieldProps) => {
  return (
    <TextField
      {...rest}
      sx={{
        "& .MuiInputBase-root": { color: "white" },
        "& .MuiInputBase-input": { height: "18px" },
        "& .MuiInputLabel-root": { color: "white" },
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#4c4c4c" },
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": { borderColor: "#4c4c4c" },
        },
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset": {
            borderColor: "#4c4c4c",
          },
        },
      }}
    />
  );
};

export default CustomTextField;
