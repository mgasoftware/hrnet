import { States, Sales } from "../data/data";
import { createContext } from "react";

export const employeesContext = [
    {
        firstName: 'Marc',
        lastName: 'Zucky',
        birthdate: new Date("9/20/1977"),
        startDate: new Date("10/29/2022"),
        street: 'Bronx',
        city: 'Los Angeles',
        state: States[0].label,
        zipCode: '90001',
        department: Sales[0].label,
    },
    {
        firstName: 'Aloy',
        lastName: 'James',
        birthdate: new Date("8/01/1997"),
        startDate: new Date("11/18/2020"),
        street: 'Holliwood Boulevard',
        city: 'New York',
        state: States[1].label,
        zipCode: '90008',
        department: Sales[1].label,
    },
    {
        firstName: 'Helena',
        lastName: 'Williams',
        birthdate: new Date("2/14/1977"),
        startDate: new Date("5/01/2022"),
        street: 'Groove Street',
        city: 'Washington',
        state: States[2].label,
        zipCode: '90005',
        department: Sales[2].label,
    },
]

export const EmployeeContext = createContext(employeesContext);