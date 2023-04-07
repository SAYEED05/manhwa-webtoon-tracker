import { TextField } from "@mui/material";
import React from "react";

import { Controller } from "react-hook-form";

const ControlledTextInput = ({
  control,
  name,
  defaultValue = "",
  placeholder,
  label,
  type,
}: {
  control: any;
  name: string;
  defaultValue: string;
  placeholder: string;
  label: string;
  type?: string;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          type={type ?? "text"}
          {...field}
          label={label}
          variant="outlined"
          placeholder={placeholder}
          fullWidth
        />
      )}
    />
  );
};

export default ControlledTextInput;
