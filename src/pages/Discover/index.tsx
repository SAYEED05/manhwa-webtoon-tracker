import { Button, CircularProgress, Grid } from "@mui/material";
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
    await searchContent(data.search_query);
  };

  const { searchContent, searchResults, isFetchingSearchResult } =
    useContentUpdateHook();

  return (
    <>
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
            <Button
              variant="contained"
              type="submit"
              sx={{ ml: 0.5 }}
              disabled={isFetchingSearchResult}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        {isFetchingSearchResult ? (
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "calc(100vh - 104px)" }}
          >
            <CircularProgress />
          </Grid>
        ) : (
          <Grid item container xs={10} p={{ xs: 2, md: 4 }}>
            {searchResults?.map((item: any) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                {item?.title}
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Discover;
