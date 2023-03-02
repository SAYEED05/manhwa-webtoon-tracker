import React from "react";
import { Button, Grid, TextField } from "@mui/material";
const LoginForm = () => {
  const handleLoginFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(e, "eee");
  };

  return (
    <Grid container>
      <form onSubmit={(e) => handleLoginFormSubmit(e)}>
        <Grid item xs={12}>
          <TextField required label="Email" type="email" placeholder="Email" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Password"
            type="password"
            placeholder="Password"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit">submit</Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default LoginForm;
