import React, { useState, useRef } from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from "prop-types";

import '../../styles/FormInfos.css';
import { dataStates, dataSales } from '../../data/data';
import DateSelect from './DateSelect';
import Dropdown from './Dropdown.js';
import checkValidForm from '../utils/checkValidForm';
import { postDatas } from '../../api/postDatas';

export default function FormInfos({ toggleModal }) {
  const firstName = useRef();
  const lastName = useRef();
  const street = useRef();
  const city = useRef();
  const zipCode = useRef();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [dateStart, setDateStart] = useState();
  const [state, setState] = useState('');
  const [sale, setSale] = useState('');
  const [isValidForm, setIsValidForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      "firstName": firstName.current?.value,
      "lastName": lastName.current?.value,
      "startDate": dateStart?.toLocaleDateString(),
      "department": sale,
      "birthDate": dateOfBirth?.toLocaleDateString(),
      "street": street.current?.value,
      "city": city.current?.value,
      "state": state,
      "postalZip": zipCode.current?.value
    }
    if (checkValidForm(newEmployee)) {
      setIsValidForm(true)
      postDatas("http://localhost:8080/employees", newEmployee)
      toggleModal();
    }
    else {
      setIsValidForm(false);
      window.scrollTo(0, 0);
    }
  }

  return (
    <div className="hrnet-formInfosContainer">
      <div className="hrnet-formInfos">
        {!isValidForm && <Alert className="hrnet-formInfosError" variant="danger" style={{ color: "white", padding: "1em" }}>Fill the form please !</Alert>}
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
              ref={lastName} />
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
                ref={zipCode} />
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

FormInfos.propTypes = {
  toggleModal: PropTypes.func.isRequired
}
