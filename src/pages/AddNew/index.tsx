import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import ControlledRadioInput from "../../Components/ControlledRadioInput";
import ControlledTextInput from "../../Components/ControlledTextInput";

const AddNew = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data, "submit data");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledTextInput
        control={control}
        name={"name"}
        label={"Name"}
        defaultValue=""
        placeholder="Name"
      />
      <ControlledTextInput
        control={control}
        name={"desc"}
        label={"Description"}
        defaultValue=""
        placeholder="Description"
      />
      <ControlledTextInput
        control={control}
        name={"ext_link"}
        label={"External Link"}
        defaultValue=""
        placeholder="External Link"
      />
      <ControlledTextInput
        control={control}
        name={"img_url"}
        label={"Image Url"}
        defaultValue=""
        placeholder="Image Url"
      />
      <ControlledTextInput
        control={control}
        name={"chapters_completed"}
        label={"Chapters Completed"}
        defaultValue=""
        placeholder="Chapters Completed"
        type="number"
      />
      <ControlledTextInput
        control={control}
        name={"total_chapters"}
        label={"Total Chapters"}
        defaultValue=""
        placeholder="Total Chapters"
        type="number"
      />
      <ControlledRadioInput
        control={control}
        name={"is_finished"}
        label={"Is Finished"}
        defaultValue="yes"
        fields={[
          {
            label: "Yes",
            value: "yes",
          },
          {
            label: "No",
            value: "false",
          },
        ]}
      />

      <Button type="submit">submit</Button>
    </form>
  );
};

export default AddNew;
