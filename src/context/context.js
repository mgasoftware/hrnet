import { createContext, useState } from "react";

const employeesContext = [{}]

export const EmployeeContext = createContext();

export default function EmployeeProvider({ children }) {
    const [employees, setEmployees] = useState(employeesContext);

    return (
        <EmployeeContext.Provider value={{ employees, setEmployees }}>
            {children}
        </EmployeeContext.Provider>
    )
}