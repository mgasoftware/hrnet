import React, {useContext} from 'react';

import Header from '../Features/Header';
import { EmployeeContext } from '../../context/context';

export default function EmployeeList() {
    const {employees, setEmployee} = useContext(EmployeeContext)
    console.log(employees)
    return (
        <div>
            <Header />
            <h1>EmployeeList</h1>
        </div>
    )
}
