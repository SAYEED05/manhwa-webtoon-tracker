import React from "react";
import LoginForm from "../../Components/LoginForm";
import { signInWithGoogle } from "../../features/firebase";

const Home = () => {
  return (
    <div>
      <LoginForm />
      <button onClick={() => signInWithGoogle()}>sign in with google</button>
    </div>
  );
};

export default Home;
