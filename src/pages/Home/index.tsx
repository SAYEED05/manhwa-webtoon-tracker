import React from "react";
import LoginForm from "../../Components/LoginForm";
import { useAuthHook } from "../../features/auth/hook";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const Home = () => {
  const { signInWithGoogle, signOut, user } = useAuthHook();

  console.log(user, "user");
  return (
    <Grid
      container
      height={"100vh"}
      justifyContent="center"
      alignItems="center"
    >
      {/* <LoginForm /> */}
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <button onClick={() => signInWithGoogle()}>sign in with google</button>
        {user && <button onClick={() => signOut()}>sign out</button>}
        <Link to={"/addNew"}>go to private route</Link>
      </Grid>
    </Grid>
  );
};

export default Home;
