import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNew from "./pages/AddNew";
import Discover from "./pages/Discover";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/addNew" element={<AddNew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
