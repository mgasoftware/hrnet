import React, { useContext, useState } from 'react';

import { EmployeeContext } from '../../context/context';
import { dataName, keys } from '../../data/data';
import '../../styles/EmployeeList.css'
import Header from '../Features/Header';
import TableView from '../Features/TableView/TableView';

export default function EmployeeList() {
    const { employees, setEmployees } = useContext(EmployeeContext);
    const [limit, setLimit] = useState("10");

    return (
        <div>
            <Header />
            <div className="hrnet-employee">
                <TableView
                    columns={dataName}
                    datas={employees}
                    setDatas={setEmployees}
                    limit={limit}
                    setLimit={setLimit}
                    keys={keys}
                />
            </div>
        </div>
    )
}
