import React, { useState } from 'react';

import '../../styles/FormInfos.css';
import { dataStates, dataSales } from '../../data/data';
import DateSelect from './DateSelect';
import Dropdown from '../Dropdown/Dropdown.js';

export default function FormInfos() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [dateStart, setDateStart] = useState(new Date());
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [sale, setSale] = useState('');

  const handleChange = (e) => {
    console.log(`Date of birth: ${dateOfBirth.toLocaleDateString("en-US")} et Start Date: ${dateStart.toLocaleDateString("en-US")}`)
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;

      case "lastName":
        setLastName(value);
        break;

      case "street":
        setStreet(value);
        break;

      case "city":
        setCity(value);
        break;

      case "zipCode":
        setZipCode(value);
        break;

      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Prenom: ${firstName} Nom: ${lastName} Birthday: ${dateOfBirth.toLocaleDateString("en-US")} StartDate: ${dateStart.toLocaleDateString("en-US")} State: ${state} Sale:${sale} Street: ${street} City: ${city} Zip: ${zipCode}`)
  }

  return (
    <div className="hrnet-formInfos">
      <div className="hrnet-formInfosName">
        <div className="hrnet-formInfosNameInput">
          <p className="hrnet-formInfosNameTitle">First Name</p>
          <input
            className="hrnet-formInfosInputContainer"
            name="firstName"
            type="text"
            placeholder="Your first name"
            onChange={handleChange} />
        </div>
        <div className="hrnet-formInfosNameInput">
          <p className="hrnet-formInfosNameTitle">Last Name</p>
          <input
            className="hrnet-formInfosInputContainer"
            name="lastName"
            type="text"
            placeholder="Your last name"
            onChange={handleChange} />
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
              onChange={handleChange} />
          </div>
          <div className="hrnet-formInfosNameInput">
            <p className="hrnet-formInfosNameTitle">City</p>
            <input
              className="hrnet-formInfosInputContainer"
              name="city"
              type="text"
              placeholder="Your city"
              onChange={handleChange} />
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
              onChange={handleChange} />
          </div>
        </div>
      </div>
      <div className="hrnet-formInfosSale">
        <div className="hrnet-formInfosNameInput">
          <p className="hrnet-formInfosNameTitle">Sale</p>
          <Dropdown title="sale" datas={dataSales} setItem={setSale} />
        </div>
      </div>
      <input
      className="hrnet-formInfosInput"
      name="sumbit"
      type="submit"
      onClick={handleSubmit}/>
    </div >
  )
}
