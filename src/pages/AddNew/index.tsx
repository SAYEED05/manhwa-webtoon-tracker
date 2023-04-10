import {
  Button,
  Grid,
  styled,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import ControlledRadioInput from "../../Components/ControlledRadioInput";
import ControlledTextInput from "../../Components/ControlledTextInput";
import { useContentUpdateHook } from "../../features/contentUpdate/hook";
import GetDataFromUrl from "./GetDataFromUrl";
export const GridAllCenter = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddNew = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { addNewContentToDB, isUpdating, isScrapping } = useContentUpdateHook();

  const onSubmit = async (data: any) => {
    addNewContentToDB(data);
  };
  return (
    <>
      <GetDataFromUrl />
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          container
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          justifyContent="center"
          rowSpacing={2}
          width={{ xs: "90%", sm: "75%", md: "50%" }}
        >
          <Grid item xs={12}>
            <Typography variant="h6">Manually add Data</Typography>
          </Grid>
          <GridAllCenter item xs={12}>
            <ControlledTextInput
              control={control}
              name={"name"}
              label={"Name"}
              defaultValue=""
              placeholder="Name"
            />
          </GridAllCenter>
          <GridAllCenter item xs={12}>
            <ControlledTextInput
              control={control}
              name={"desc"}
              label={"Description"}
              defaultValue=""
              placeholder="Description"
            />
          </GridAllCenter>
          <GridAllCenter item xs={12}>
            <ControlledTextInput
              control={control}
              name={"site_you_read_at"}
              label={"Link To The Site You Read At"}
              defaultValue=""
              placeholder="Site You Read At"
            />
          </GridAllCenter>
          <GridAllCenter item xs={12}>
            <ControlledTextInput
              control={control}
              name={"img_url"}
              label={"Image Url"}
              defaultValue=""
              placeholder="Image Url"
            />
          </GridAllCenter>
          {/* <GridAllCenter item xs={12}>
          <ControlledTextInput
            control={control}
            name={"chapters_completed"}
            label={"Chapters Completed"}
            defaultValue=""
            placeholder="Chapters Completed"
            type="number"
          />
        </GridAllCenter> */}
          <GridAllCenter item xs={12}>
            <ControlledTextInput
              control={control}
              name={"total_chapters"}
              label={"Total Chapters"}
              defaultValue=""
              placeholder="Total Chapters"
              type="number"
            />
          </GridAllCenter>
          <Grid item xs={12}>
            <ControlledRadioInput
              control={control}
              name={"is_finished"}
              label={"Finished Publishing?"}
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
          </Grid>

          <Button
            variant="contained"
            type="submit"
            disabled={isUpdating || isScrapping}
          >
            {isUpdating ? <CircularProgress /> : "submit"}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default AddNew;
