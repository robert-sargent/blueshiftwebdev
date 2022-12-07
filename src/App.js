import React from "react";
// import { Routes, Route } from "react-router-dom";

import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </div>
  );
}

export default App;
