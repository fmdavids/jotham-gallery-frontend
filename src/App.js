import React from "react";
import {Routes, Route} from "react-router-dom"
import AddImage from "./components/AddImage";
import Auth from "./components/auth";
import Home from "./pages/Home";
import NotAllowed from "./pages/NotAllowed";


function App() {
  return (
    <div className="container ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/notAllowed" element={<NotAllowed />} />
        <Route path="addimage" element={<AddImage />} />
      </Routes>
    </div>
  );
}

export default App;
