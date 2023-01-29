import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

import EmployeeProvider from "../context/context";

const Home = lazy(() => import('./Home/Home'));
const CreateEmployee = lazy(() => import('./CreateEmployee/CreateEmployee'));
const EmployeeList = lazy(() => import('./EmployeeList/EmployeeList'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Suspense><Home /></Suspense>} />
        <Route path="/create" element={
          <EmployeeProvider>
            <Suspense>
              <CreateEmployee />
            </Suspense>
          </EmployeeProvider>} />
        <Route path="/employee" element={
          <EmployeeProvider>
            <Suspense>
              <EmployeeList />
            </Suspense>
          </EmployeeProvider>} />
      </Routes>
    </div>
  );
}

export default App;
