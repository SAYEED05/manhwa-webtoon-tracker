import { CircularProgress, Grid } from "@mui/material";
import React from "react";

const FullPageLoader = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      height="100vh"
    >
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default FullPageLoader;
