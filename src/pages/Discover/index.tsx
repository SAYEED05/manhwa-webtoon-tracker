import { Button, Grid } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import ControlledTextInput from "../../Components/ControlledTextInput";
import { useContentUpdateHook } from "../../features/contentUpdate/hook";

const Discover = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const searchResults = await searchContent(data.search_query);

    console.log(searchResults, "searchResults");
  };

  const { searchContent } = useContentUpdateHook();

  return (
    <Grid
      container
      width="100%"
      // height="100vh"
      justifyContent="center"
      // alignItems="center"
      p={3}
    >
      <Grid
        item
        container
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        xs={12}
        justifyContent="center"
      >
        <Grid item xs={9} md={6} display="flex">
          <ControlledTextInput
            control={control}
            name={"search_query"}
            label={"Search"}
            defaultValue=""
            placeholder="Search Manhwa,Manga,Webtoon..."
          />
          <Button variant="contained" type="submit" sx={{ ml: 0.5 }}>
            Search
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Discover;
