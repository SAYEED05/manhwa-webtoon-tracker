import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
} from "@mui/material";
import React from "react";

import { Controller } from "react-hook-form";

const ControlledRadioInput = ({
  control,
  name,
  defaultValue = "",
  fields = [],
  label,
}: {
  control: any;
  name: string;
  defaultValue: string;
  fields: any[];
  label: string;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControl>
          <FormLabel>{label}</FormLabel>
          <RadioGroup {...field} aria-label={label} row>
            {fields.map((item) => (
              <FormControlLabel
                value={item.value}
                control={<Radio />}
                label={item.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};

export default ControlledRadioInput;
