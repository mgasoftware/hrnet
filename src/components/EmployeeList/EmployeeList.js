import React, { useContext } from 'react';
import { EmployeeContext } from '../../context/context';
import { dataName } from '../../data/data';

import '../../styles/EmployeeList.css'
import Header from '../Features/Header';
import TableView from '../Features/TableView';

export default function EmployeeList() {
    let { employees, setEmployees } = useContext(EmployeeContext);

    return (
        <div>
            <Header />
            <div className="hrnet-employee">
                <h1 className="hrnet-employeeTitle">EmployeeList</h1>
                <TableView
                    columns={dataName}
                    datas={employees}
                    setDatas={setEmployees}
                />
            </div>
        </div>
    )
}
