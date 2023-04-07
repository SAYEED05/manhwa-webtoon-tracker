import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNew from "./pages/AddNew";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import { auth } from "./features/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./features/auth/slice";
import { ProtectedRoute } from "./features/auth/ProtectedRoute";

function App() {
  const dispatch = useDispatch();

  /* todo 
- Add Loader from auth slice
*/

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(
      (user) => dispatch(setUser(user)),
      (err) => console.log(err, "onAuthStateChanged - error")
    );
    return () => unSubscribe();
  }, []);

  return (
    <BrowserRouter>
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
