import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

const Home = lazy(() => import('./Home/Home'));
const CreateEmployee = lazy(() => import('./CreateEmployee/CreateEmployee'));
const EmployeeList = lazy(() => import('./EmployeeList/EmployeeList'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Suspense><Home /></Suspense>} />
        <Route path="/create" element={
            <Suspense>
              <CreateEmployee />
            </Suspense>} />
        <Route path="/employee" element={
            <Suspense>
              <EmployeeList />
            </Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
