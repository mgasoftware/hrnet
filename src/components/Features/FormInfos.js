import React, { useState, useContext, useRef } from 'react';

import { EmployeeContext } from '../../context/context';
import '../../styles/FormInfos.css';
import { dataStates, dataSales } from '../../data/data';
import DateSelect from './DateSelect';
import Dropdown from '../Dropdown/Dropdown.js';

export default function FormInfos({ toggleModal }) {
  const { setEmployees } = useContext(EmployeeContext);
  const firstName = useRef();
  const lastName = useRef();
  const street = useRef();
  const city = useRef();
  const zipCode = useRef();
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [dateStart, setDateStart] = useState(new Date());
  const [state, setState] = useState('');
  const [sale, setSale] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      "firstName": firstName.current?.value,
      "lastName": lastName.current?.value,
      "startDate": dateStart.toLocaleDateString(),
      "department": sale,
      "birthDate": dateOfBirth.toLocaleDateString(),
      "street": street.current?.value,
      "city": city.current?.value,
      "state": state,
      "postalZip": zipCode.current?.value
    }
    setEmployees(employees => [...employees, newEmployee]);
    toggleModal();
  }

  return (
    <div className="hrnet-formInfosContainer">
      <div className="hrnet-formInfos">
        <div className="hrnet-formInfosName">
          <div className="hrnet-formInfosNameInput">
            <p className="hrnet-formInfosNameTitle">First Name</p>
            <input
              className="hrnet-formInfosInputContainer"
              name="firstName"
              type="text"
              placeholder="Your first name"
              ref={firstName} />
          </div>
          <div className="hrnet-formInfosNameInput">
            <p className="hrnet-formInfosNameTitle">Last Name</p>
            <input
              className="hrnet-formInfosInputContainer"
              name="lastName"
              type="text"
              placeholder="Your last name"
              ref={lastName}/>
          </div>
        </div>
        <div className="hrnet-formInfosDate">
          <DateSelect title="Date of Birth"
            date={dateOfBirth}
            setDate={setDateOfBirth} />
          <DateSelect
            title="Start Date"
            date={dateStart}
            setDate={setDateStart} />
        </div>
        <div className="hrnet-formInfosAddress">
          <div className="hrnet-formInfosAddressStreetCity">
            <div className="hrnet-formInfosNameInput">
              <p className="hrnet-formInfosNameTitle">Street</p>
              <input
                className="hrnet-formInfosInputContainer"
                name="street" type="text"
                placeholder="Your street"
                ref={street} />
            </div>
            <div className="hrnet-formInfosNameInput">
              <p className="hrnet-formInfosNameTitle">City</p>
              <input
                className="hrnet-formInfosInputContainer"
                name="city"
                type="text"
                placeholder="Your city"
                ref={city} />
            </div>
          </div>
          <div className="hrnet-formInfosCity">
            <div className="hrnet-formInfosNameInput">
              <p className="hrnet-formInfosNameTitle">State</p>
              <Dropdown title="state" datas={dataStates} setItem={setState} />
            </div>
            <div className="hrnet-formInfosNameInput">
              <p className="hrnet-formInfosNameTitle">Zip Code</p>
              <input
                className="hrnet-formInfosInputContainer"
                name="zipCode"
                type="text"
                placeholder="Your zip code"
                ref={zipCode}/>
            </div>
          </div>
        </div>
        <div className="hrnet-formInfosSale">
          <div className="hrnet-formInfosNameInput">
            <p className="hrnet-formInfosNameTitle">Sale</p>
            <Dropdown title="sale" datas={dataSales} setItem={setSale} />
          </div>
        </div>
      </div >
      <button
        className="hrnet-formInfosInputSubmit"
        onClick={handleSubmit}>
        Send
      </button>
    </div>
  )
}
