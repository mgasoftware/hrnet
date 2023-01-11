import React from "react";
import { Routes, Route } from "react-router";

import Home from "./Home/Home";
import CreateEmployee from "./CreateEmployee/CreateEmployee";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
