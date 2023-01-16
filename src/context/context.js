import { States, Sales } from "../data/data";
import { createContext, useState } from "react";

const employeesContext = [
    {
        firstName: 'Marc',
        lastName: 'Zucky',
        startDate: "10/29/2022",
        department: Sales[0].label,
        dateOfBirth: "09/20/1977",
        street: 'Bronx',
        city: 'Los Angeles',
        state: States[0].value,
        zipCode: '90001',
    },
    {
        firstName: 'Aloy',
        lastName: 'James',
        startDate: "11/18/2020",
        department: Sales[1].label,
        dateOfBirth: "08/01/1997",
        street: 'Holliwood Boulevard',
        city: 'New York',
        state: States[1].value,
        zipCode: '90008',
    },
    {
        firstName: 'Helena',
        lastName: 'Williams',
        startDate: "05/01/2022",
        department: Sales[2].label,
        dateOfBirth: "02/14/1977",
        street: 'Groove Street',
        city: 'Washington',
        state: States[6].value,
        zipCode: '90005',
    },
    {
        firstName: 'Carla',
        lastName: 'Jones',
        startDate: "07/15/2021",
        department: Sales[3].label,
        dateOfBirth: "03/13/1979",
        street: 'Caronne Street',
        city: 'Chicago',
        state: States[9].value,
        zipCode: '90009',
    },
]

export const EmployeeContext = createContext();

export default function EmployeeProvider({ children }) {
    const [employees, setEmployees] = useState(employeesContext);

    return (
        <EmployeeContext.Provider value={{ employees, setEmployees }}>
            {children}
        </EmployeeContext.Provider>
    )
}