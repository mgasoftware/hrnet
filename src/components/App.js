import React, { useState } from "react";
import { Routes, Route } from "react-router";

import Home from "./Home/Home";
import CreateEmployee from "./CreateEmployee/CreateEmployee";
import EmployeeList from "./EmployeeList/EmployeeList";
import { EmployeeContext, employeesContext } from "../context/context";

function App() {
  const [employees, setEmployees] = useState(employeesContext);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="/employee" element={
          <EmployeeContext.Provider value={{ employees, setEmployees }}>
            <EmployeeList />
          </EmployeeContext.Provider>} />
      </Routes>
    </div>
  );
}

export default App;
