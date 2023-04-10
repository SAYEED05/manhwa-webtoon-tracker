import {
  Button,
  Grid,
  styled,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import ControlledTextInput from "../../Components/ControlledTextInput";
import { useContentUpdateHook } from "../../features/contentUpdate/hook";

const GetDataFromUrl = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    addNewContentToDB,
    scrapeMangaDetailsFromUrl,
    isScrapping,
    isUpdating,
  } = useContentUpdateHook();
  const onSubmit = async (data: any) => {
    scrapeMangaDetailsFromUrl(data.url_to_scrape, {
      onSuccess: (res) => {
        // addNewContentToDB(res);
      },
    });
  };

  return (
    <Grid container justifyContent="center" alignItems="center" my={2}>
      <Grid
        item
        container
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        justifyContent="center"
        width={{ xs: "90%", sm: "75%", md: "50%" }}
      >
        <Grid item xs={12}>
          <Typography variant="h6">Add Data Using Url</Typography>
        </Grid>
        <Grid item xs={12} display="flex">
          <ControlledTextInput
            control={control}
            name={"url_to_scrape"}
            label={"Enter Url to Get Data"}
            defaultValue=""
            placeholder="Url to get data"
          />
          <Button
            variant="contained"
            type="submit"
            disabled={isScrapping || isUpdating}
          >
            {isScrapping ? <CircularProgress /> : "Add"}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GetDataFromUrl;
