import React, { useEffect, useState } from 'react';
import TableView from 'tableview-library';
import 'tableview-library/dist/index.css';

import useGetDatas from '../../api/useGetDatas';
import { dataName, keys } from '../../data/data';
import '../../styles/EmployeeList.css'
import Header from '../Features/Header';

export default function EmployeeList() {
    const [employees, setEmployees] = useState(undefined);
    let { data, loading, error } = useGetDatas("http://localhost:8080/employees");

    useEffect(() => {
        setEmployees(data?.map(({ _id, ...keepAttrs }) => keepAttrs))
    }, [data, loading])


    if (loading || employees === undefined) {
        return (
            <div>
                <Header title="List of Employee" />
                {error && <div className='info'><p className='error'>{error.message}</p></div>}
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Header title="List of Employee" />
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