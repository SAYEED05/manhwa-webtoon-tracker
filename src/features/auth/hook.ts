import React from "react";
import { signInWithPopup } from "firebase/auth";
import { query, getDocs, collection, where, addDoc } from "firebase/firestore";
import { auth, googleAuthProvider, db } from "../firebase/index";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setError,
  setUser,
  signOut as signOutSlice,
} from "./slice";
import { selectUser, selectLoading, selectError } from "./selectors";

export const useAuthHook = () => {
  const dispatch = useDispatch();

  const setAuthLoading = (state: boolean) => {
    return dispatch(setLoading(state));
  };

  const signInWithGoogle = async () => {
    dispatch(setLoading(true));
    try {
      const res = await signInWithPopup(auth, googleAuthProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
      dispatch(setUser(user));
      localStorage.setItem("authToken", user.uid);
      dispatch(setLoading(false));
    } catch (err: any) {
      console.error(err);
      dispatch(setError(err.message));
      dispatch(setLoading(false));
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      dispatch(signOutSlice());
      localStorage.removeItem("authToken");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return {
    signInWithGoogle,
    user,
    loading,
    error,
    signOut,
    setAuthLoading,
  };
};
