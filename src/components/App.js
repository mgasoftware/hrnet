import React from "react";
import { Routes, Route } from "react-router";

import Home from "./Home/Home";
import CreateEmployee from "./CreateEmployee/CreateEmployee";
import EmployeeList from "./EmployeeList/EmployeeList";
import EmployeeProvider  from "../context/context";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="/employee" element={
          <EmployeeProvider>
            <EmployeeList />
          </EmployeeProvider>} />
      </Routes>
    </div>
  );
}

export default App;
