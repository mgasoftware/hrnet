import React from 'react';

import '../../styles/CreateEmployee.css'
import Header from '../Features/Header';
import FormInfos from '../Features/FormInfos';

export default function CreateEmployee() {
  return (
    <div>
        <Header />
        <h1 className="hrnet-createTitle">Create Employee</h1>
        <FormInfos />
    </div>
  )
}
