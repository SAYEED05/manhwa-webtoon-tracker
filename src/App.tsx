import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNew from "./pages/AddNew";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import { auth } from "./features/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./features/auth/slice";
import { ProtectedRoute } from "./features/auth/ProtectedRoute";
import { useAuthHook } from "./features/auth/hook";
import { Alert, Snackbar } from "@mui/material";
import { useOverallUiControlHook } from "./features/overallUIControls/hook";

function App() {
  const dispatch = useDispatch();
  const { setAuthLoading } = useAuthHook();
  const { snackBarState, setSnackBarState } = useOverallUiControlHook();

  useEffect(() => {
    setAuthLoading(true);
    const unSubscribe = auth.onAuthStateChanged(
      (user) => {
        dispatch(setUser(user));
        setAuthLoading(false);
      },
      (err) => {
        console.log(err, "onAuthStateChanged - error");
        setAuthLoading(false);
      }
    );
    return () => unSubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Snackbar
        open={snackBarState.open}
        autoHideDuration={6000}
        onClose={() =>
          setSnackBarState({
            open: false,
            message: "",
            type: "success",
            meta: {},
          })
        }
      >
        <Alert
          onClose={() =>
            setSnackBarState({
              open: false,
              message: "",
              type: "success",
              meta: {},
            })
          }
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackBarState.message}
        </Alert>
      </Snackbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route
          path="/addNew"
          element={
            <ProtectedRoute>
              <AddNew />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
