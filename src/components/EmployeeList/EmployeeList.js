import React, { useContext } from 'react';
import TableView from 'tableview-library';
import 'tableview-library/dist/index.css';

import { EmployeeContext } from '../../context/context';
import { dataName, keys } from '../../data/data';
import '../../styles/EmployeeList.css'
import Header from '../Features/Header';

export default function EmployeeList() {
    const { employees, setEmployees } = useContext(EmployeeContext);

    return (
        <div>
            <Header title="Current Employees"/>
            <div className="hrnet-employee">
                <TableView
                    columns={dataName}
                    datas={employees}
                    setDatas={setEmployees}
                    keys={keys}
                />
            </div>
        </div>
    )
}
