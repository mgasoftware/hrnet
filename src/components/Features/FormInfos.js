import React, { useState } from 'react';
import { Dropdown, Form, Button } from 'react-bootstrap';

import '../../styles/FormInfos.css'

export default function FormInfos() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [dateStart, setDateStart] = useState(new Date());
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${firstName} ${lastName} ${dateOfBirth} ${dateStart} ${street} ${city} ${zipCode}`)  
  }

  return (
    <div className="hrnet-formInfos">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="duedate">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control
            type="date"
            name="duedate"
            placeholder="Due date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="duedate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="duedate"
            placeholder="Due date"
            value={dateStart}
            onChange={(e) => setDateStart(e.target.value)}
          />
        </Form.Group>
        <div className="hrnet-dropdown">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Street</Form.Label>
            <Form.Control type="text" placeholder="Enter your street" value={street} onChange={(e) => setStreet(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter your city" value={city} onChange={(e) => setCity(e.target.value)} />
          </Form.Group>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              State
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Enter your city" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
          </Form.Group>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Departement
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}
