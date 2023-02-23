import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";

import logo from '../../assets/logo.jpg';
import '../../styles/Header.css';

export default function Header({ title }) {
    return (
        <header className="hrnet-header">
            <div className="hrnet-headerMain">
                <NavLink to="/" className="hrnet-headerLink">
                    <img src={logo} alt="logo hrnet" className="hrnet-headerLogo" />
                    <h1 className="hrnet-headerTitle">Hrnet</h1>
                </NavLink>
            </div>
            <div className="hrnet-headerTitle">
                <h2>{title}</h2>
            </div>
            <div className="hrnet-headerNav">
                <NavLink to="/create" className="hrnet-headerCreateEmploye">
                    <p>Create Employee</p>
                </NavLink>
                <NavLink to="/employee" className="hrnet-headerListEmploye">
                    <p>Current Employees</p>
                </NavLink>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: "Home"
}

Header.propTypes = {
    title: PropTypes.string
}