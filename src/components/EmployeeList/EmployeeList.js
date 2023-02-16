import React, { useEffect, useState } from 'react';
import TableView from 'tableview-library';
import 'tableview-library/dist/index.css';
import { fetchGetEmployees } from '../../api/api';

import { dataName, keys } from '../../data/data';
import '../../styles/EmployeeList.css'
import Header from '../Features/Header';

export default function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const test = fetchGetEmployees()
        console.log(test)
    }, []);

    console.log(employees);

    return (
        <div>
            <Header title="List of Employee" />
            <div className="hrnet-employee">
                {/* <TableView
                    columns={dataName}
                    datas={employees}
                    setDatas={setEmployees}
                    keys={keys}
                /> */}
            </div>
        </div>
    )
}
