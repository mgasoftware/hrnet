import React, { useContext } from 'react';

import { EmployeeContext } from '../../context/context';
import { dataName, keys } from '../../data/data';
import '../../styles/EmployeeList.css'
import Header from '../Features/Header';
// import TableView from '../Features/TableView/TableView';
import TableView from 'tableview-library';
import 'tableview-library/dist/index.css';

export default function EmployeeList() {
    const { employees, setEmployees } = useContext(EmployeeContext);

    return (
        <div>
            <Header title="List of Employee"/>
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
