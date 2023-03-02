import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
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
        <RadioGroup {...field} aria-label={label}>
          {fields.map((item) => (
            <FormControlLabel
              value={item.value}
              control={<Radio />}
              label={item.label}
            />
          ))}
        </RadioGroup>
      )}
    />
  );
};

export default ControlledRadioInput;
