import React from "react";
import LoginForm from "../../Components/LoginForm";
import { useAuthHook } from "../../features/auth/hook";
import { Link } from "react-router-dom";

const Home = () => {
  const { signInWithGoogle, signOut, user } = useAuthHook();

  console.log(user, "user");
  return (
    <div>
      <LoginForm />
      <button onClick={() => signInWithGoogle()}>sign in with google</button>
      {user && <button onClick={() => signOut()}>sign out</button>}
      <Link to={"/addNew"}>go to private route</Link>
    </div>
  );
};

export default Home;
